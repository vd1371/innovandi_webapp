#Loading dependencies
from .BaseDistribution import BaseDistribution

class Beta(BaseDistribution):

	def __init__(self, a, b):
		super().__init__()
		self.a = a
		self.b = b

	def set(self, a, b):
		self.a = a
		self.b = b

	def sample(self):
		# https://numpy.org/doc/stable/reference/random/generator.html?highlight=generator#numpy.random.Generator
		return self.generator.beta(self.a, self.b)

	def __repr__(self):
		return f"Beta - a: {self.a}, b: {self.b}"

	def __str__(self):
		return self.__repr__()