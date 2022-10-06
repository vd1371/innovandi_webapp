from ._initialize_output_grains import _initialize_output_grains

def _calculate_outflow(grain_classes,
                                residual_classes,
                                flow_params,
                                process_params):

    inbound_flows = process_params.get("inbound_flows")
    formula = flow_params.get("formula")
    crushing_formula = flow_params.get("crushing_formula")

    grain_classes, residual_classes = \
        _initialize_output_grains(inbound_flows,
                                    grain_classes,
                                    residual_classes)

    for flow in inbound_flows:
        for grain in flow.grain_classes:

            if crushing_formula != None and grain in crushing_formula:
                for crushed_grain, crushing_ratio in \
                    crushing_formula[grain].items():

                    grain_classes[crushed_grain]['flow_rate'] += \
                        flow.grain_classes[grain]['flow_rate'] * \
                        crushing_ratio
            
            else:
                coeff = 1 if formula == None else formula.get(grain, 0)
                grain_classes[grain]['flow_rate'] += \
                        flow.grain_classes[grain]['flow_rate'] * \
                        coeff

        for resid in flow.residual_classes:

            coeff = 1 if formula == None else formula.get(resid, 0)
            residual_classes[resid]['flow_rate'] += \
                flow.residual_classes[resid]['flow_rate'] *\
                coeff

    return grain_classes, residual_classes





