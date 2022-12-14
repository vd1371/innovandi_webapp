
def _add_project_to_holder(holder, project_processes):

	for process in project_processes:
		
		for flow in process.outbound_flows:
			if not flow.in_process:
				
				for grain in flow.grain_classes:
					holder[process.name][grain].append(
						flow.grain_classes[grain]['flow_rate'])

				for resid in flow.residual_classes:
					holder[process.name][resid].append(
						flow.residual_classes[resid]['flow_rate'])

		for out in process.outputs:
			holder[process.name][out].append(
				process.outputs[out]['flow_rate'])

	return holder