import React from "react";

import uuid from "react-uuid";

const projectObject = {
    projectInfo : {
        projectName: "MyAwesomeProject",
        workingHours: 0,
        workingDaysPerYear: 0
    },
    constructionWasteComposition: {},
    processes: [],

    addProcess: function() {
        const processInfo = {
            id_ : uuid(),
            processName: "MyAwesomeProcess",
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
    },

    removeProcess: function(id) {
        let new_processes = []
        for (var [index, process] of this.processes.entries()){
            if (process.id_ === id){
                new_processes = [...this.processes.slice(0, index),
                                    ...this.processes.slice(index+1)]
            }
        }
        this.processes = [...new_processes]
    },

    getProcessInfoOf: function(id) {
        for (var [index, process] of this.processes.entries()){
            if (process.id_ === id){
                return process
            }
        }
        return
    },

    addInput: function(id){
        let obj = this.getProcessInfoOf(id).inputs
        if (Object.keys(obj).length < 5) {
            obj[Object.keys(obj).length+1] = {"name": "Inputs N/A", "rate": 0}
        } else {
            alert("Currently, maximum number of types of wastes is 5")
        }
    },

    addEmission: function(id){
        let obj = this.getProcessInfoOf(id).emissions
        if (Object.keys(obj).length < 20) {
            obj[Object.keys(obj).length+1] = {
                "name": "N/A", "basedOn": "N/A", "rate": 0}
        } else {
            alert("Currently, maximum number of types of emissions is 20")
        }
    },

    setProcessInfo: function(id, key, newValue){
        let obj = this.getProcessInfoOf(id)
        obj[key] = newValue
    },

    setInputsInfo: function(id, key_1, key_2, value){
        let obj = this.getProcessInfoOf(id).inputs
        obj[key_1][key_2] = value
    },

    setEmissionInfo: function(id, key_1, key_2, value){
        let obj = this.getProcessInfoOf(id).emissions
        obj[key_1][key_2] = value
    },

    getInputNames: function(id) {
        const inputNames = []
        const processInfo = this.getProcessInfoOf(id)
        for (const k in processInfo.inputs){
            inputNames.push(processInfo.inputs[k]['name'])
        }
        return inputNames
    }
}

export default projectObject;