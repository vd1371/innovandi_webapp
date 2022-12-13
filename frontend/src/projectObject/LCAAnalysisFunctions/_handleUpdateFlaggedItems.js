

export default function _handleUpdateFlaggedItems(
        obj,
        results,
        flaggedHolder,
        endProcess){

    if (obj.processes[endProcess] !== "Dump" &&
        !flaggedHolder.includes(endProcess) &&
        !isEmpty(results[endProcess]["waste"])){
            flaggedHolder.push(endProcess)
        }
}

function isEmpty(inp){
    let sum = 0
    for (const j in inp){
        sum += parseFloat(inp[j])
    }
    return sum === 0
}