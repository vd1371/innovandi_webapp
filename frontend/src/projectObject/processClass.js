import React from "react";

class processClass{

    constructor(id_,){
        this.id_= id_,
        this.processName = "MyAwesomeProcess",
        this.processType = "Unknown",
        this.isNew = (id_ === "wasteComponent"? false: true),
        this.outboundFlows = [],
        this.inboundFlows = [],
        this.inputs = {},
        this.htmlInfo = {positionX : -350,
                    positionY: 0},
        this.emissions = {
            1 : {"name": "N/A", "basedOn": "N/A", "rate": 0}
        },
        this.crushingFormula = {}
    }

    setIsNewFalse(){
        this.isNew = false
    }

    setInfo(key, newValue){
        this[key] = newValue
    }

    addInput(){
        let id_ = "input" + (_getMaxId(this.inputs) + 1)
        this[id_] = {"name": "Inputs N/A",
                    "rate": 0}
    }

    deleteInput(key_1){
        delete this.inputs[key_1]
    }

    setInputInfo(key_1, key_2, newValue){
        this[key_1][key_2] = newValue
    }

    getInputNames() {
        const inputNames = []
        if (this.inputs){
            for (const k in this.inputs){
                inputNames.push(this.inputs[k]['name'])
            }
            return inputNames
        } else {
            return {}
        }
    }

    addEmission(){
        let id_ = "emission" + (_getMaxId(this.emissions) + 1)
        this.emissions[id_] = {"name": "N/A",
                                "basedOn": "N/A",
                                "rate": 0}
    }

    setEmission(key_1, key_2, value){
        this.emissions[key_1][key_2] = value
    }

    deleteEmission(key_1){
        delete this.emissions[key_1]
    }
}

export default processClass;