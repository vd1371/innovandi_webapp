
export default function _getWasteNames(obj) {
    const wasteNames = []
    for (const k in obj.wasteComposition){
        wasteNames.push(obj.wasteComposition[k]['name'])
    }
    return wasteNames
}