import numpy as np
from copy import deepcopy

from ._initialize_holders import _initialize_holders
from ._add_project_to_holder import _add_project_to_holder

class MCSHolder:

	def __init__(self):
		pass

	def add_project_sample(self, project_sample):
		if not hasattr(self, "mcs_samples"):
			self.mcs_samples = _initialize_holders(project_sample)
		self.mcs_samples = _add_project_to_holder(self.mcs_samples,
													project_sample)

	def reset(self):
		delattr(self, "mcs_samples")

	def report(self):
		for process_name in self.mcs_samples:
			for k, v in self.mcs_samples[process_name].items():
				print (process_name, k, v)

