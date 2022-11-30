import React from "react";
import flowClass from "./flowClass";
import processClass from "./processClass";

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
        this.wasteComposition = {
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
        this.generalInfo = {
            processesTypes : ['Machines', 'Feeder', 'Crusher', 'Sieve']
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
    addWaste () {
        let id_ = "waste" + (_getMaxId(this.wasteComposition) + 1)
        this.wasteComposition[id_] = {
                                'name': 'N/A',
                                'value': 0
        }
    }

    deleteWaste(id){
        delete this.wasteComposition[id]
    }

    getWasteNames(){
        const wasteNames = []
        for (const k in this.wasteComposition){
            wasteNames.push(this.wasteComposition[k]['name'])
        }
        return wasteNames
    }

    // ------------------------------- Processes ---------------------------//
    _defaultWasteProcess() {
        const processes = {}
        processes["wasteComponent"] = new processClass("wasteComponent")
        return processes
    }

    addProcess() {
        let processId = "process" + (_getMaxId(this.processes) + 1)
        this.processes[processId] = new processClass(processId)
    }

    //-------------------------------- Process --------------------------------//
    setProcessInfo(processId, key, newValue){
        this.processes[processId].setInfo(key, newValue)
    }

    removeProcess(processId) {
        delete this.processes[processId]
        for (const flowId in this.flows){
            if (flowId.includes(processId)){
                this.deleteFlow(flowId)
            }
        }
    }

    setIsNewFalseOfProcess(processId){
        this.processes[processId].setIsNewFalse()
    }
    
    //-------------------------------- Inputs --------------------------------//
    addInputToProcess(processId){
        this.processes[processId].addInput()
    }

    deleteInputOfProcess (processId, key_1){
        this.processes[processId].deleteInput(key_1)
    }

    setInputInfo(processId, key_1, key_2, newValue){
        this.processes[processId].setInputInfo(key_1, key_2, newValue)
    }

    getInputNamesOfProcess(processId) {
        return this.processes[processId].getInputNames()
    }

    //------------------------------ Emissions ------------------------------//
    addEmissionToProcess(processId){
        this.processes[processId].addEmission()
    }

    setEmissionInfoOfProcess(processId, key_1, key_2, value){
        this.processes[processId].setEmission(key_1, key_2, value)
    }

    deleteEmissionOfProcess(id, key_1){
        this.processes[id].deleteEmission(key_1)
    }

    //--------------------------- Flows ---------------------------------//
    addFlow (id_start, id_end, processStart, processEnd){
        let valid = _isValidFlow(this.flows,
                                id_start, id_end,
                                processStart, processEnd)
        if (valid){
            this.flows[id_start + "->" + id_end] = new flowClass(id_start, id_end)
        }
        return valid
    }

    deleteFlow (flowId){
        delete this.flows[flowId]
    }

    addFlowOutput (flowId){
        this.flows[flowId].addOutput()
    }

    setFlowOutput (flowId, key_1, key_2, value){
        this.flows[flowId].setOutput(key_1, key_2, value)
    }

    deleteFlowOutput (flowId, key_1){
        this.flows[flowId].deleteOutput(key_1)
    }


    //-------------------------- Save and load -----------------------------//
    toJSON (){
        let data = {
            projectInfo: this.projectInfo,
            wasteComposition: this.wasteComposition,
            processes: this.processes,
            flows: this.flows
        }
        return JSON.stringify(data)
    }

    fromJSON (data){
        data = JSON.parse(data)
        Object.assign(data.projectInfo, this.projectInfo)
        Object.assign(data.wasteComposition, this.wasteComposition)

        for (const k in data.processes){
            this.processes[k] = new processClass(k)
            Object.assign(this.processes[k], data.processes[k])
        }

        for (const k in data.flows){
            this.flows[k] = new flowClass(k)
            Object.assign(this.flows[k], data.flows[k])
        }
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