import _getMaxId from "../_getMaxId"

export default function _addWaste(obj) {
    let id_ = "waste" + (_getMaxId(obj.wasteComposition) + 1)
    obj.wasteComposition[id_] = {'name': 'N/A', 'value': 0}
}