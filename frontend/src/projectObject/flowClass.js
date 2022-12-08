import React from "react";
import _getMaxId from "./_getMaxId";

class flowClass{

    constructor (id_start, id_end){
        this.start = id_start,
        this.end = id_end,
        this.outputs = {1: {"material": "All",
                            "ratio": 1}}
    }
    
    addOutput(){
        let id_ = "output" + (_getMaxId(this.outputs) + 1)
        this.outputs[id_] = {"material": "N/A",
                            "ratio": 0}
    }

    setOutput(key_1, key_2, newValue){
        this.outputs[key_1][key_2] = newValue
    }

    deleteOutput(key_1){
        delete this.outputs[key_1]
    }
}

export default flowClass;