#Loading dependencies
from .BaseDistribution import BaseDistribution

class Gamma(BaseDistribution):

	def __init__(self, shape, scale):
		super().__init__()
		self.shape = shape
		self.scale = scale

	def set(self, shape, scale):
		self.shape = shape
		self.scale = scale

	def sample(self):
		# https://numpy.org/doc/stable/reference/random/generator.html?highlight=generator#numpy.random.Generator
		return self.generator.gamma(self.shape, self.scale)

	def __repr__(self):
		return f"Gamma - shape: {self.shape}, scale: {self.scale}"

	def __str__(self):
		return self.__repr__()