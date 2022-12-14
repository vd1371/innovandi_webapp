#Loading dependencies
from .BaseDistribution import BaseDistribution

class Constant(BaseDistribution):

	def __init__(self, a):
		super().__init__()
		self.a = a

	def set(self, a):
		self.a = a

	def sample(self):
		return self.a

	def __repr__(self):
		return f"Constant - Val: {self.a}"

	def __str__(self):
		return self.__repr__()