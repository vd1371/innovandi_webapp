

export default function _handleFlowAnalysis(
        obj,
        results,
        startProcess,
        endProcess,
        base,
        baseClone){
    
    if (obj.processes[startProcess].processType === "Crusher"){
        const formula = obj.processes[startProcess].crushingFormula
        for (const j in formula){
            const convertsTo = formula[j]["convertsTo"]
            const ofMaterial = formula[j]["ofMaterial"]
            const ratio = parseFloat(formula[j]["ratio"])

            results[endProcess]["waste"][convertsTo] +=
                parseFloat(baseClone[ofMaterial]) * ratio
            base[ofMaterial] -= baseClone[ofMaterial] * ratio
        }
    }
}