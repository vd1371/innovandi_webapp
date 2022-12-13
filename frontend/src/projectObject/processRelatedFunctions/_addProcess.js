import _getMaxId from "../_getMaxId"
import processClass from "../processClass"

export default function _addProcess(obj) {
    let processId = "process" + (_getMaxId(obj.processes) + 1)
    obj.processes[processId] = new processClass(processId)
}