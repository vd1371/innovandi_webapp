import React from "react";

import _getMaxId from "./_getMaxId";
import _isValidFlow from "./_isValidFlow";

class projectClass {

    constructor(){
        this.init()
    }
    init(){
        this.projectInfo = {
            projectName: "MyAwesomeProject",
            workingHours: 0,
            workingDaysPerYear: 0
        }
        this.constructionWasteComposition = {
            1: {
                "name": "Waste Unknown",
                "value": 0,
            }  
        }
        this.processes = this._defaultWasteProcess()
        this.flows= {}
        this.renderSettings = {
            scaleLevel: 1,
        }
    }
    // ---------------------------- Render Settings ------------------------//
    addScaleLevel (val){
        this.renderSettings.scaleLevel += val
    }

    resetScaleLevel (){
        this.renderSettings.scaleLevel = 1
    }

    // --------------------------------- Waste -----------------------------//
    _defaultWasteProcess() {
        const processes = {}
        processes["wasteComponent"] = {
            id_: "wasteComponent",
            processName: "wasteComponent",
            isNew: false,
            outboundFlows: []
        }
        return processes
    }

    addWaste () {
        let obj = this.constructionWasteComposition
        let id_ = "waste" + (_getMaxId(obj) + 1)
        obj[id_] = {
            'name': 'N/A',
            'value': 0
        }
    }

    deleteWaste(id){
        delete this.constructionWasteComposition[id]
    }

    getWasteNames(){
        const wasteNames = []
        let obj = this.constructionWasteComposition
        for (const k in obj){
            wasteNames.push(obj[k]['name'])
        }
        return wasteNames
    }

    // ------------------------------- Processes ---------------------------//
    addProcess() {
        let id_ = "process" + (_getMaxId(this.processes) + 1)
        this.processes[id_] = {
            id_: id_,
            processName: "MyAwesomeProcess",
            isNew: true,
            outboundFlows: [],
            inboundFlows: [],
            inputs: {},
            htmlInfo: {positionX : 10,
                        positionY: 10},
            emissions: {
                1 : {"name": "N/A", "basedOn": "N/A", "rate": 0}
            }
        }
    }

    //-------------------------------- Process --------------------------------//
    setProcessInfo(id, key, newValue){
        let obj = this.getProcessInfoOf(id)
        obj[key] = newValue
    }

    removeProcess(processId) {
        delete this.processes[processId]
        for (const flowId in this.flows){
            if (flowId.includes(processId)){
                this.deleteFlow(flowId)
            }
        }
    }

    setIsNewFalseOfProcess(id){
        this.processes[id]["isNew"] = false
    }

    getProcessInfoOf(id) {
        return this.processes[id]
    }
    
    //-------------------------------- Inputs --------------------------------//
    addInput(id){
        let obj = this.getProcessInfoOf(id).inputs
        let id_ = "input" + (_getMaxId(obj) + 1)
        obj[id_] = {"name": "Inputs N/A",
                    "rate": 0}
    }

    deleteInputs (id, key_1){
        let obj = this.getProcessInfoOf(id).inputs
        delete obj[key_1]
    }

    setInputsInfo(id, key_1, key_2, value){
        let obj = this.getProcessInfoOf(id).inputs
        obj[key_1][key_2] = value
    }

    getInputNames(id) {
        const inputNames = []
        const processInfo = this.getProcessInfoOf(id)
        if (processInfo){
            for (const k in processInfo.inputs){
                inputNames.push(processInfo.inputs[k]['name'])
            }
            return inputNames
        } else {
            return {}
        }
    }

    //------------------------------ Emissions ------------------------------//
    addEmission(id){
        let obj = this.getProcessInfoOf(id).emissions
        let id_ = "emission" + (_getMaxId(obj) + 1)
        obj[id_] = {"name": "N/A",
                    "basedOn": "N/A",
                    "rate": 0}
    }

    setEmissionInfo(id, key_1, key_2, value){
        let obj = this.getProcessInfoOf(id).emissions
        obj[key_1][key_2] = value
    }

    deleteEmission(id, key_1){
        let obj = this.getProcessInfoOf(id).emissions
        delete obj[key_1]
    }

    //--------------------------- Flows ---------------------------------//
    addFlow (id_start, id_end, processStart, processEnd){
        let valid = _isValidFlow(this.flows,
                                id_start, id_end,
                                processStart, processEnd)
        if (valid){
            const newFlow = {
                start: id_start,
                end: id_end,
                outputs: {}
            }
            this.flows[id_start + "->" + id_end] = newFlow
        }
        return valid
    }

    deleteFlow (flowId){
        delete this.flows[flowId]
    }

    addFlowOutput (flowId){
        let obj = this.flows[flowId].outputs
        let id_ = "output" + (_getMaxId(obj) + 1)
        obj[id_] = {"material": "N/A",
                    "ratio": 0}
    }

    setFlowOutputs (flowId, key_1, key_2, value){
        console.log(this.flows[flowId])
        this.flows[flowId].outputs[key_1][key_2] = value
    }

    deleteFlowOutputs (flowId, key_1){
        delete this.flows[flowId].outputs[key_1]
    }


    //-------------------------- Save and load -----------------------------//
    toJSON (){
        let data = {
            projectInfo: this.projectInfo,
            constructionWasteComposition: this.constructionWasteComposition,
            processes: this.processes,
            flows: this.flows
        }
        return JSON.stringify(data)
    }

    fromJSON (data){
        data = JSON.parse(data)
        Object.entries(data).map(([key, item]) =>{
            this[key] = item
        })
    }

    saveToLocalStorage(){
        localStorage.setItem("tmpProject", this.toJSON())
    }

    loadFromLocalStorage(){
        this.fromJSON(localStorage.getItem("tmpProject"))
    }

    flushProject (){
        localStorage.removeItem("tmpProject")
        this.init()
    }

}

export default projectClass;