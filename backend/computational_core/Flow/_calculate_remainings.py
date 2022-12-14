
def _calculate_remainings(flow_params,
                                    process_params):
    outbound_flows = process_params.get("outbound_flows")
    grain_classes_of_inbound = flow_params.get("grain_classes")
    residual_classes = flow_params.get("residual_classes")

    for grain in grain_classes_of_inbound:
        for flow in outbound_flows:

            coeff = 1 if flow.formula == None else flow.formula.get(grain, 0)
            grain_classes_of_inbound[grain]['flow_rate'] *= (1-coeff)

            if flow.crushing_formula != None and grain in flow.crushing_formula:
                grain_classes_of_inbound[grain]['flow_rate'] = 0

    for resid in residual_classes:
        for flow in outbound_flows:
            coeff = 1 if flow.formula == None else flow.formula.get(resid, 0)
            residual_classes[resid]['flow_rate'] *= (1-coeff)

    return grain_classes_of_inbound, residual_classes