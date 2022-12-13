import cloneDeep from 'lodash/cloneDeep';

import _findTargetFlows from './_findTargetFlows';
import _handleCrushingAnalysis from './_handleCrushingAnalysis';
import _handleFlowAnalysis from './_handleFlowAnalysis';
import _handleUpdateFlaggedItems from './_handleUpdateFlaggedItems';

export default function _handleCalculatingWasteFlow(obj, results, wasteComposition){
    
    var isSuccessful = true
    var flaggedForComputaion = ['wasteComponent']
    var flaggedHolder = []

    var tries = 0
    while (flaggedForComputaion.length > 0){
        for (const flaggedProcess of flaggedForComputaion){
            let targetFlows = _findTargetFlows(obj, flaggedProcess)

            for (const flow of targetFlows){
                const startProcess = flow.split("->")[0].split("-")[0]
                const endProcess = flow.split("->")[1].split("-")[0]
                const base = (startProcess === "wasteComponent") ? wasteComposition : results[startProcess]["waste"]
                const baseClone = cloneDeep(base)

                _handleCrushingAnalysis(obj, results, flow, startProcess, endProcess, base, baseClone)
                _handleFlowAnalysis(obj, results, startProcess, endProcess, base, baseClone)
                _handleUpdateFlaggedItems(obj, results, flaggedHolder, endProcess)
            }
        }
        // Replacing the flagged arrays
        flaggedForComputaion = [...flaggedHolder]
        flaggedHolder = []
        tries += 1
        if (tries >= 100){
            isSuccessful = false
            break
        }
    }

    return isSuccessful

}