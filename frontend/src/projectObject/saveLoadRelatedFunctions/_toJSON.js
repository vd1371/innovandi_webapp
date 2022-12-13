

export default function _toJSON (obj) {
    let data = {
        projectInfo: obj.projectInfo,
        wasteComposition: obj.wasteComposition,
        processes: obj.processes,
        flows: obj.flows,
        renderSettings: obj.renderSettings,
        }
    return JSON.stringify(data)
    }