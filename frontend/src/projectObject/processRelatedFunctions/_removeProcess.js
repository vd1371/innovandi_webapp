export default function _removeProcess(obj, processId) {
    delete obj.processes[processId]
    for (const flowId in obj.flows){
        if (flowId.includes(processId)){
            obj.deleteFlow(flowId)
        }
    }
}