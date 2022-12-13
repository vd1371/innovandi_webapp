import React from "react";

export default function _getMaxId (obj) {
    let keys = Object.keys(obj).map(x => x.replace(/^\D+/g, ""))
    const potentialKey = Math.max.apply(Math, keys)
    if (isFinite(potentialKey)){
        return potentialKey
    }
    return 0
}