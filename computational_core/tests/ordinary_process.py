from ComputationalCore import *

def ordinary_process():

	project = Project(operating_hours = 5)

	################# Hoe
	concrete_rubble = ConcreteFlow(name = 'concrete_rubble',
									first_flow = True,)
	concrete_rubble.add_grain_class('rubble', 400, 1000, 12)
	concrete_rubble.add_grain_class('boulder', 20, 400, 6)
	concrete_rubble.add_grain_class('coarse', 4.8, 20, 1)
	concrete_rubble.add_grain_class('fine', 0, 4.8, 1)
	concrete_rubble.set_steel_percentage(0.04)
	
	hoe = Process(name = 'hoe')
	project.add(hoe)

	################# Air blower
	air_blowed = ConcreteFlow(name = 'air_blowed',
								formula = {'rubble': 1,
											'boulder': 1,
											'coarse': 1,
											'fine': 0})

	air_blower = Process(name = 'air_blower',
							inbound_flows = [concrete_rubble],
							outbound_flows = [primary_screened,
												fed_concrete],)


	################# Grizzly feeder
	fed_concrete = ConcreteFlow(name = 'fed_concrete',
								formula = {'rubble': 1,
											'boulder': 1,
											'coarse': 1,
											'fine': 0})
	primary_screened = ConcreteFlow(name = 'primary_screened',
									formula = {'rubble': 0,
												'boulder': 0,
												'coarse': 0,
												'fine': 1},
									in_process = False)
	grizzly_feeder = Process(name = 'grizzly_feeder',
							inbound_flows = [concrete_rubble],
							outbound_flows = [primary_screened,
												fed_concrete],
							efficiency = 0.8,
							power = 4.4,
							production_capacity = 20,
							working_hours = 3)
	project.add(grizzly_feeder)
	################# Convreyor belt No.1
	conveyor_belt_no1 = Process(name = 'conveyor_belt_no1')
	project.add(conveyor_belt_no1)
	################# JAW CRUSHER
	crushed_by_jaw = ConcreteFlow(name = "crushed_by_jaw",
									formula = {'rubble': 0,
												'boulder': 0.2,
												'coarse': 0.4,
												'fine': 0.4},
									from_crusher = True)
	jaw_crusher = Process(name = 'jaw_crusher',
							inbound_flows = [fed_concrete],
							outbound_flows = [crushed_by_jaw],
							efficiency = 1,
							production_capacity = 20)
	project.add(jaw_crusher)
	################# Convreyor belt No.2
	conveyor_belt_no2 = Process(name = 'conveyor_belt_no2')
	project.add(conveyor_belt_no2)
	# ################# Magnetic seperator
	iron_scraps = SteelFlow(name = 'iron_scraps')
	crushed_no_iron = ConcreteFlow(name = 'crushed_no_iron',
									formula = {'rubble': 1,
												'boulder': 1,
												'coarse': 1,
												'fine': 1})
	magnetic_seperator = Process(name = 'magnetic_seperator',
								inbound_flows = [crushed_by_jaw],
								outbound_flows = [iron_scraps,
													crushed_no_iron],
								efficiency = 1)
	project.add(magnetic_seperator)

	# ################# Screen
	stockpiled_aggregates = ConcreteFlow(name = 'stockpiled_aggregates',
										formula = {'rubble': 0,
												'boulder': 0,
												'coarse': 1,
												'fine': 1},
										in_process = False)
	to_impact_crusher = ConcreteFlow(name = 'to_impact_crusher',
									formula = {'rubble': 1,
												'boulder': 1,
												'coarse': 0,
												'fine': 0})
	impact_crushed = ConcreteFlow(name = 'impact_crushed',
								formula = {'rubble': 0,
											'boulder': 0,
											'coarse': 0.4,
											'fine': 0.6},
								from_crusher = True)

	screen = Process(name = 'screen',
						inbound_flows = [crushed_no_iron,
										impact_crushed],
						outbound_flows = [stockpiled_aggregates,
											to_impact_crusher],
						production_capacity = 200)
	project.add(screen)
	################# Convreyor belt No.3
	conveyor_belt_no3 = Process(name = 'conveyor_belt_no3')
	project.add(conveyor_belt_no3)
	################# Impact crusher
	impact_crusher = Process(name = 'impact_crusher',
								inbound_flows = [to_impact_crusher],
								outbound_flows = [impact_crushed],
								production_capacity = 3)
	project.add(impact_crusher)
	################# Convreyor belt No.4
	conveyor_belt_no4 = Process(name = 'conveyor_belt_no4')
	project.add(conveyor_belt_no4)
	###############################################################

	project.run()
	project.report()
