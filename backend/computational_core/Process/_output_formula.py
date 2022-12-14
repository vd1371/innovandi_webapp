
from ..utils import *

class OutputFormula:

 	def __init__(self, formula):
 		'''
 		A sample expected formula: [('diesel', 'normal', 0.04, 0.01)]
 		'''
 		self.formula = {}
 		for form in formula:
 			self.formula[form[0]] = get_distribution(form[1], *form[2:])

 	def sample(self, inputs):
 		result = 0

 		for based_on in self.formula:
 			result += self.formula[based_on].sample() * \
 						inputs[based_on]['flow_rate']

 		return result