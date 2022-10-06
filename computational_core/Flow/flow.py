import pprint
from copy import deepcopy

from ._calculate_outflow import _calculate_outflow
from ._calculate_remainings import _calculate_remainings

from ..utils import *

class Flow:

    def __init__(self, **params):
        self.name = params.get("name", get_random_name("Flow"))
        self.in_process = params.get("in_process", True)
        self.formula = params.get("formula")
        self.crushing_formula = params.get("crushing_formula")

        self.grain_classes = {}
        self.residual_classes = {}

    def reset(self):
        for grain in self.grain_classes:
            dist = self.grain_classes[grain].get('flow_dist', 0)
            if dist != 0: dist = dist.sample()
            self.grain_classes[grain]['flow_rate'] = dist

        for resid in self.residual_classes:
            dist = self.residual_classes[resid].get('flow_dist', 0)
            if dist != 0: dist = dist.sample()
            self.residual_classes[resid]['flow_rate'] = dist

    def add_grain(self, class_name, dist_name, *args):
        self.grain_classes[class_name] = {}
        self.grain_classes[class_name]['flow_dist'] = \
            get_distribution(dist_name, *args)
        self.grain_classes[class_name]['flow_rate'] = \
            self.grain_classes[class_name]['flow_dist'].sample()

    def add_residual(self, class_name, dist_name, *args):
        self.residual_classes[class_name] = {}
        self.residual_classes[class_name]['flow_dist'] = \
            get_distribution(dist_name, *args)
        self.residual_classes[class_name]['flow_rate'] = \
            self.residual_classes[class_name]['flow_dist'].sample()

    def is_empty(self):
        for grain in self.grain_classes:
            if self.grain_classes[grain]['flow_rate'] > 0:
                return False

        for resid in self.residual_classes:
            if self.residual_classes[resid]['flow_rate'] > 0:
                return False

        return True

    def empty(self, **process_params):
        self.grain_classes, self.residual_classes = \
                _calculate_remainings(self.__dict__,
                                        process_params)

    def fill(self, **process_params):
        self.grain_classes, self.residual_classes = \
                _calculate_outflow(self.grain_classes,
                                            self.residual_classes,
                                            self.__dict__,
                                            process_params)

    def __str__(self):
        return "-----------\n" + \
                    pprint.pformat(self.__dict__) + \
                        "\n-----------\n"

    def __repr__(self):
        return self.__str__()