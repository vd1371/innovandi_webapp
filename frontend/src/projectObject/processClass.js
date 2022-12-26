/* eslint-disable no-unused-expressions */
import _getMaxId from "./_getMaxId";

class processClass{

    constructor(id_){
        this.id_= id_
        this.processName = "MyAwesomeProcess"
        this.processType = "Unknown"
        this.isNew = (id_ === "wasteComponent"? false: true)
        this.outboundFlows = []
        this.inboundFlows = []
        this.inputs = {
            1: {"name": "Inputs N/A", "rate": 0}}
        this.htmlInfo = {positionX : -350,
                    positionY: 0}
        this.emissions = {
            1 : {"name": "N/A", "basedOn": "N/A", "rate": 0}
        }
        this.crushingFormula = {
            1: {"ratio": 0, "ofMaterial": "N/A", "convertsTo": "N/A"}
        }
    }
    // --------- General --------- //
    setIsNewFalse(){
        this.isNew = false
    }

    setInfo(key, newValue){
        this[key] = newValue
    }

    // --------- Input --------- //
    addInput(){
        let id_ = "input" + (_getMaxId(this.inputs) + 1)
        this.inputs[id_] = {"name": "Inputs N/A",
                            "rate": 0}
    }

    deleteInput(key_1){
        delete this.inputs[key_1]
    }

    setInputInfo(key_1, key_2, newValue){
        this.inputs[key_1][key_2] = newValue
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
    
    // --------- Emission --------- //
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

    // --------- General --------- //
    addCurshingFormula(){
        let id_ = "crushingFormula" + (_getMaxId(this.crushingFormula) + 1)
        this.crushingFormula[id_] = {"ratio": 0,
                                    "ofMaterial": "N/A",
                                    "convertsTo": "N/A"}
    }

    setCrushingFormula(key_1, key_2, value){
        this.crushingFormula[key_1][key_2] = value
    }

    deleteCrushingFormula(key_1){
        delete this.crushingFormula[key_1]
    }
}

export default processClass;