import processClass from "../processClass"
import flowClass from "../flowClass"

export default function _fromJSON (obj, data) {
    data = JSON.parse(data)

    Object.assign(obj.projectInfo, data.projectInfo)
    Object.assign(obj.wasteComposition, data.wasteComposition)
    Object.assign(obj.renderSettings, data.renderSettings)

    for (const k in data.processes){
        obj.processes[k] = new processClass(k)
        Object.assign(obj.processes[k], data.processes[k])
    }

    for (const k in data.flows){
        obj.flows[k] = new flowClass(k)
        Object.assign(obj.flows[k], data.flows[k])
    }
}