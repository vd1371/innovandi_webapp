
def _initialize_holders(project_processes):
	
	holder = {}

	for process in project_processes:
		holder[process.name] = {}
		
		for flow in process.outbound_flows:
			if not flow.in_process:
				
				for grain in flow.grain_classes:
					holder[process.name][grain] = []

				for resid in flow.residual_classes:
					holder[process.name][resid] = []

		for out in process.outputs:
			holder[process.name][out] = []

	return holder