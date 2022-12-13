

export default function _handleCalculatingEmissions(obj, results){

    const allInputs = {}
    for (const process in obj.processes){
        allInputs[process] = {}
        const processInputs = obj.processes[process].inputs
        for (const j in processInputs){
            allInputs[process][processInputs[j]['name']] = 
                parseFloat(processInputs[j]['rate'])
        }
    }

    for (const process in results){
        let emissions = obj.processes[process].emissions
        for (const j in emissions){
            let emissionName = emissions[j]["name"]
            let basedOn = emissions[j]["basedOn"]
            let rate = parseFloat(emissions[j]["rate"])

            results[process]["emissions"][emissionName] = 
                allInputs[process][basedOn] * rate
        }
    }
}