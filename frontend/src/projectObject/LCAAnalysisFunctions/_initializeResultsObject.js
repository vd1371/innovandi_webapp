

export default function _initializeResultsObject(obj, wasteComposition){
    const results = {}
    const wasteDefault = {}
    const emissionDefault = {}
    for (const k in wasteComposition){
        wasteDefault[k] = 0
    }
    for (const emission of obj.generalInfo.emissionTypes){
        emissionDefault[emission] = 0
    }

    for (const process  in obj.processes){
        if (process !== 'wasteComponent'){
            results[process] = {
                "waste": {...wasteDefault},
                "emissions": {...emissionDefault},
            }
        }
    }

    return results
}