import React from "react";

class projectClass {

    constructor(){
        this.projectInfo = {
            projectName: "MyAwesomeProject",
            workingHours: 0,
            workingDaysPerYear: 0
        }
        this.constructionWasteComposition = {}
        this.processes = []
        this.arrows= {}
    }

    addProcess() {
        const processInfo = {
            id_ : "process" + this.processes.length,
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
        this.processes= [...this.processes, processInfo]
    }

    removeProcess(id) {
        let new_processes = []
        for (var [index, process] of this.processes.entries()){
            if (process.id_ === id){
                new_processes = [...this.processes.slice(0, index),
                                    ...this.processes.slice(index+1)]
            }
        }
        this.processes = [...new_processes]
    }

    setIsNewFalseOfProcess(id){
        for (var [index, process] of this.processes.entries()){
            if (process.id_ === id){
                process.isNew = false
            }
        }
    }

    addArrows (id_start, id_end, processStart, processEnd){
        for (const k in this.arrows){
            if (k.split("-").includes(processStart) &&
                k.split("-").includes(processEnd)){
                return false
            }
        }
        this.arrows[id_start + "-" + id_end] = [id_start, id_end]
        return true
    }

    getProcessInfoOf(id) {
        for (var [index, process] of this.processes.entries()){
            if (process.id_ === id){
                return process
            }
        }
        return
    }

    addInput(id){
        let obj = this.getProcessInfoOf(id).inputs
        if (Object.keys(obj).length < 5) {
            obj[Object.keys(obj).length+1] = {"name": "Inputs N/A", "rate": 0}
        } else {
            alert("Currently, maximum number of types of wastes is 5")
        }
    }

    addEmission(id){
        let obj = this.getProcessInfoOf(id).emissions
        if (Object.keys(obj).length < 20) {
            obj[Object.keys(obj).length+1] = {
                "name": "N/A", "basedOn": "N/A", "rate": 0}
        } else {
            alert("Currently, maximum number of types of emissions is 20")
        }
    }

    setProcessInfo(id, key, newValue){
        let obj = this.getProcessInfoOf(id)
        obj[key] = newValue
    }

    setInputsInfo(id, key_1, key_2, value){
        let obj = this.getProcessInfoOf(id).inputs
        obj[key_1][key_2] = value
    }

    setEmissionInfo(id, key_1, key_2, value){
        let obj = this.getProcessInfoOf(id).emissions
        obj[key_1][key_2] = value
    }

    getInputNames(id) {
        const inputNames = []
        const processInfo = this.getProcessInfoOf(id)
        for (const k in processInfo.inputs){
            inputNames.push(processInfo.inputs[k]['name'])
        }
        return inputNames
    }

}

export default projectClass;