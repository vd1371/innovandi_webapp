from ComputationalCore import *

def hong_kong_plant():

	project = Project(name = 'HKPlant',
						operating_hours = 10,
						n_simulations = 10)

	################# The construction waste info
	grizzly_feeder = Process(name = 'excavator')

	construction_waste = Flow(name = 'construction_waste')
	construction_waste.add_grain('rubble', 'normal', 10, 0.1)
	construction_waste.add_grain('boulder', 'lognormal', 5, 0.1)
	construction_waste.add_grain('coarse', 'beta', 3, 0.1)
	construction_waste.add_grain('fine', 'constant', 2)
	construction_waste.add_residual('steel', 'exponential', 0.04, 0.001)
	construction_waste.add_residual('plastic', 'normal', 0.03, 0.001)

	construction_waste_binray = save_flow(construction_waste, to_file = False)
	construction_waste = load_flow("construction_waste", construction_waste_binray)

	save_flow(construction_waste, to_file = True)
	construction_waste = load_flow("construction_waste")

	################# Grizzly feeder
	grizzly_feeder = Process(name = 'grizzly_feeder')
	grizzly_feeder.add_inbound_flows([construction_waste])

	fed_concrete = Flow(name = 'fed_concrete_out')
	grizzly_feeder.add_outbound_flows([fed_concrete])
	project.add(grizzly_feeder)

	################# Conveyor belt No.1
	conveyor_belt_no1 = Process(name = 'conveyor_belt_no1')
	conveyor_belt_no1.add_inbound_flows([fed_concrete])

	after_belt_1 = Flow(name = 'after_belt_1')
	conveyor_belt_no1.add_outbound_flows([after_belt_1])
	project.add(conveyor_belt_no1)

	################# JAW CRUSHER
	jaw_crusher = Process(name = 'jaw_crusher')
	jaw_crusher.add_inputs('diesel', 'normal', 2, 0.05)
	jaw_crusher.add_outputs('co2', [('diesel', 'normal', 0.04, 0.01)])

	jaw_crusher_binary = save_process(jaw_crusher, to_file = True)
	jaw_crusher = load_process("jaw_crusher", jaw_crusher_binary)

	save_process(jaw_crusher, to_file = True)
	jaw_crusher = load_process("jaw_crusher")

	jaw_crusher.add_inbound_flows([after_belt_1])

	crushed_by_jaw = Flow(name = 'crushed_by_jaw',
									formula = {'boulder': 0,
												'coarse': 1,
												'fine': 1,
												'steel': 1,
												'plastic': 1},
									crushing_formula = {'rubble': 
														{'boulder': 0.8,
														'coarse': 0.2}})
	jaw_crusher.add_outbound_flows([crushed_by_jaw])
	project.add(jaw_crusher)

	################# Conveyor belt No.2
	conveyor_belt_no2 = Process(name = 'conveyor_belt_no2')
	conveyor_belt_no2.add_inbound_flows([crushed_by_jaw])

	after_belt_2 = Flow(name = 'after_belt_2',
								formula = {'boulder': 1,
											'coarse': 1,
											'fine': 1},)
	conveyor_belt_no2.add_outbound_flows([after_belt_2])
	project.add(conveyor_belt_no2)

	################# Magnetic seperator
	magnetic_seperator = Process(name = 'magnetic_seperator')
	magnetic_seperator.add_inbound_flows([crushed_by_jaw])

	iron_scraps = Flow(name = 'iron_scraps',
								formula = {'steel': 1},
								in_process = False)
	magnetic_seperator.add_outbound_flows([iron_scraps])
	project.add(magnetic_seperator)

	################# Hand-picking unit
	hand_picking = Process(name = 'hand_picking_unit')
	hand_picking.add_inbound_flows([crushed_by_jaw])

	plastics = Flow(name = 'plastics',
								formula = {'plastic': 1},
								in_process = False)
	hand_picking.add_outbound_flows([plastics])
	project.add(hand_picking)

	################# Screen
	screen = Process(name = 'screen')
	screen.add_inbound_flows([after_belt_2])

	stockpiled_aggregates_small = Flow(name = 'stockpiled_agg_small',
												formula = {'fine': 1})
	stockpiled_aggregates_large = Flow(name = 'stockpiled_agg_large',
												formula = {'coarse': 1})
	to_impact_crusher = Flow(name = 'to_impact_crusher',
												formula = {'boulder': 1})

	screen.add_outbound_flows([stockpiled_aggregates_small,
								stockpiled_aggregates_large,
								to_impact_crusher])
	project.add(screen)

	################# Conveyor belt No.4
	conveyor_belt_no4 = Process(name = 'conveyor_belt_no4')
	conveyor_belt_no4.add_inbound_flows([stockpiled_aggregates_small])

	after_belt_4_small_aggs = Flow(name = 'after_belt_4_small_aggs',
											in_process = False)
	conveyor_belt_no4.add_outbound_flows([after_belt_4_small_aggs])
	project.add(conveyor_belt_no4)

	################# Conveyor belt No.5
	conveyor_belt_no5 = Process(name = 'conveyor_belt_no5')
	conveyor_belt_no5.add_inbound_flows([stockpiled_aggregates_large])

	after_belt_5_large_aggs = Flow(name = 'after_belt_5_large_aggs',
											in_process = False)
	conveyor_belt_no5.add_outbound_flows([after_belt_5_large_aggs])
	project.add(conveyor_belt_no5)

	################# Impact crusher
	impact_crusher = Process(name = 'impact_crusher')
	impact_crusher.add_inbound_flows([to_impact_crusher])

	after_impact_crusher = Flow(name = 'after_impact_crusher',
										crushing_formula = {'boulder': 
															{'fine': 0.6,
															'coarse': 0.4}})
	impact_crusher.add_outbound_flows([after_impact_crusher])
	project.add(impact_crusher)

	################# Conveyor belt No.6
	conveyor_belt_no6 = Process(name = 'conveyor_belt_no6')
	conveyor_belt_no6.add_inbound_flows([after_impact_crusher])

	after_belt_6_back_to_screen = Flow(name = 'after_belt_6_back_to_screen')
	conveyor_belt_no6.add_outbound_flows([after_belt_6_back_to_screen])
	project.add(conveyor_belt_no6)

	################# Attaching impact crusher to Screen
	screen.add_inbound_flows([after_belt_6_back_to_screen])

	project.run_mcs_simulation()
	project.report()

	################# Saving and Loading the Project
	project_binray = save_project(project, to_file = False)
	project = load_project("HKPlant", project_binray)


	save_project(project, to_file = True)
	project = load_project("HKPlant")


	project.run_mcs_simulation()
	project.report()