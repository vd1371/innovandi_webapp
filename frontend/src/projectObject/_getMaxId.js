import React from "react";

export default function _getMaxId (obj) {
    let keys = Object.keys(obj).map(x => x.replace(/^\D+/g, ""))
    return Math.max.apply(Math, keys)
}