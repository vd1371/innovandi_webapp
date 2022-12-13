

export default function _findTargetFlows(obj, flaggedProcess){
    const targetFlows = []
    for (const k in obj.flows){
        if (obj.flows[k].start.split("-")[0] === flaggedProcess){
            targetFlows.push(k)
        }
    }
    return targetFlows
}