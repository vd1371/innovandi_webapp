from ComputationalCore import ConcreteMass

def simple_concrete_rubble():

	conc = ConcreteMass()
	conc.add_grain_class('rubble', 20, 1000, 9)
	conc.add_grain_class('coarse', 4.8, 20, 0.8)
	conc.add_grain_class('fine', 0, 4.8, 0.2)
	conc.set_steel_percentage(0.06)

	return conc