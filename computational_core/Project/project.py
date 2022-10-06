import pickle

from ._run_project import _run_project
from ._holder_of_simulation_results import MCSHolder

class Project:

	def __init__(self, **params):
		self.name = params.get("name", 'Project')
		self.hours = params.get("operating_hours", 1)
		self.n_simulations = params.get("n_simulations", 10)

	def add(self, process):
		if not hasattr(self, 'processes'):
			self.processes = []
		self.processes.append(process)

	def run_mcs_simulation(self):
		self.mcs_holder = MCSHolder()
		for i in range(self.n_simulations):
			self.reset()
			process_sample, _ = _run_project(**self.__dict__)
			self.mcs_holder.add_project_sample(process_sample)

	def reset(self):
		for process in self.processes:
			process.reset()
			for flow in process.outbound_flows + process.inbound_flows:
				flow.reset()

	def report(self):
		self.mcs_holder.report()