import React from "react";

export default function _isValidFlow (flows, id_start, id_end, processStart, processEnd) {
    // A flow must not end at the wasteComponent
    if (processEnd.includes("wasteComponent")){
        return false
    }

    // Only one flow between two processes
    for (const k in flows){
        if ((k.includes(processStart) && k.includes(processEnd))){
            return false
        }
    }

    // Only one flow out from the wasteComponent
    for (const k in flows){
        if ((k.includes("wasteComponent")) &&
            (processStart.includes("wasteComponent") ||
                processEnd.includes("wasteComponent"))){
            return false
        }
    }
    return true
}