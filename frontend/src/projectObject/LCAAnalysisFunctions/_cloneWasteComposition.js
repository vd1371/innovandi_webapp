


export default function _cloneWasteComposition(obj){
    // Initialize the wasteComposition for computations
    // From {1: {name: "test", value:"100"}, ...} to {"test": "100", ...}
    const wasteComposition = {}
    for (const k in obj.wasteComposition){
        wasteComposition[obj.wasteComposition[k]['name']] = parseFloat(obj.wasteComposition[k]['value'])
    }
    return wasteComposition
}