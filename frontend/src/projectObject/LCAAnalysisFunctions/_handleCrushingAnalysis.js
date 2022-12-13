

export default function _handleCrushingAnalysis(
        obj,
        results,
        flow,
        startProcess,
        endProcess,
        base,
        baseClone){
            
    for (const out in obj.flows[flow].outputs){
        const material = obj.flows[flow].outputs[out]['material']
        const ratio = parseFloat(obj.flows[flow].outputs[out]['ratio'])

        if (material === "All"){
            for (const k in base){
                results[endProcess]["waste"][k] += base[k] * ratio
                base[k] -= parseFloat(baseClone[k]) * ratio
            }
        } else {
            results[endProcess]["waste"][material] += base[material] * ratio
            base[material] -= parseFloat(baseClone[material]) * ratio
        }
    }
}