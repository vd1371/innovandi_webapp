from copy import deepcopy

def _initialize_output_grains(inbound_flows,
								grain_classes,
								residual_classes):

	if len(grain_classes) == 0:
	
		grain_classes_empty = {}
		residual_classes_empty = {}

		for grain in inbound_flows[0].grain_classes:
			grain_classes_empty[grain] = {}
			grain_classes_empty[grain]['flow_rate'] = 0

		for resid in inbound_flows[0].residual_classes:
			residual_classes_empty[resid] = {}
			residual_classes_empty[resid]['flow_rate'] = 0

		return grain_classes_empty, residual_classes_empty

	else:
		return grain_classes, residual_classes