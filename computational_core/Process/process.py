import numpy as np

from ._output_formula import OutputFormula

from ..utils import *

class Process:

    def __init__(self, **params):
        self.name = params.get("name", get_random_name("Process"))

        self.inputs = {}
        self.outputs = {}

    def reset(self):
        for inp in self.inputs:
            dist = self.inputs[inp].get("flow_dist", 0)
            if dist != 0: dist = dist.sample()
            self.inputs[inp]['flow_rate'] = dist

        for out in self.outputs:
            dist = self.outputs[out].get("formula", 0)
            if dist != 0: dist = dist.sample(self.inputs)
            self.outputs[out]['flow_rate'] = dist

    def add_inputs(self, material, dist_name, *args):
        self.inputs[material] = {}
        self.inputs[material]['flow_dist'] = get_distribution(dist_name, *args)
        self.inputs[material]['flow_rate'] = \
            self.inputs[material]['flow_dist'].sample()

    def add_outputs(self, output, formula):
        self.outputs[output] = {}
        self.outputs[output]['formula'] = OutputFormula(formula)
        self.outputs[output]['flow_rate'] = \
            self.outputs[output]['formula'].sample(self.inputs)

    def add_inbound_flows(self, ls_of_flows):
        assert isinstance(ls_of_flows, list), 'ls_of_flows should be a list'
        if not hasattr(self, 'inbound_flows'): self.inbound_flows = []
        
        self.inbound_flows += ls_of_flows

    def add_outbound_flows(self, ls_of_flows):
        assert isinstance(ls_of_flows, list), 'ls_of_flows should be a list'
        if not hasattr(self, 'outbound_flows'): self.outbound_flows = []
        
        self.outbound_flows += ls_of_flows

    def run(self, project_params):
        
        if self.outbound_flows != None:
            for flow in self.outbound_flows:
                flow.fill(**self.__dict__)

        if self.inbound_flows != None:
            for flow in self.inbound_flows:
                if flow.in_process:
                    flow.empty(**self.__dict__)

    def __repr__(self):
        return f"Process {self.name}"

    def __str__(self):
        return self.__repr__()
