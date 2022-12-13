import _isValidFlow from "../projectRelatedFunctions/_isValidFlow"
import flowClass from "../flowClass"

export default function _addFlow(
        obj,
        id_start,
        id_end,
        processStart,
        processEnd){

    let valid = _isValidFlow(obj.flows,
        id_start, id_end,
        processStart, processEnd)
    if (valid){
    obj.flows[id_start+"->"+id_end] = new flowClass(id_start, id_end)
    }
    return valid
}