import React from "react";

import _addWaste from "./wasteRelatedFunctions/_addWaste";
import _getWasteNames from "./wasteRelatedFunctions/_getWasteNames";

import _addProcess from "./processRelatedFunctions/_addProcess"
import _removeProcess from "./processRelatedFunctions/_removeProcess";
import _addFlow from "./flowRelatedFunctions/_addFlow";
import _toJSON from "./saveLoadRelatedFunctions/_toJSON";
import _fromJSON from "./saveLoadRelatedFunctions/_fromJSON";
import _initializeProject from "./projectRelatedFunctions/_initializeProject";
import _runLCAAnalysis from "./LCAAnalysisFunctions/_runLCAAnalysis";

class projectClass {

    constructor(){_initializeProject(this)}
    
    // ---------------------------- Render Settings ------------------------//
    addScaleLevel (val){this.renderSettings.scaleLevel += val}
    resetScaleLevel (){this.renderSettings.scaleLevel = 1}

    // --------------------------------- Waste -----------------------------//
    addWaste () {_addWaste(this)}
    deleteWaste(id){delete this.wasteComposition[id]}
    getWasteNames(){return _getWasteNames(this)}

    // ------------------------------- Processes ---------------------------//
    addProcess() {_addProcess(this)}
    removeProcess(id) {_removeProcess(id, this)}

    //-------------------- Process -------------------//
    setProcessInfo(id, key, newValue){this.processes[id].setInfo(key, newValue)}
    setIsNewFalseOfProcess(id){this.processes[id].setIsNewFalse()}
    
    //----------------------- Inputs -------------------//
    addInputToProcess(id){this.processes[id].addInput()}
    deleteInputOfProcess (id, key_1){this.processes[id].deleteInput(key_1)}
    setInputInfo(id, key_1, key_2, newValue){
        this.processes[id].setInputInfo(key_1, key_2, newValue)
    }
    getInputNamesOfProcess(id) {return this.processes[id].getInputNames()}

    //--------------------- Emissions ----------------//
    addEmissionToProcess(id){this.processes[id].addEmission()}
    setEmissionInfoOfProcess(id, key_1, key_2, value){
        this.processes[id].setEmission(key_1, key_2, value)
    }
    deleteEmissionOfProcess(id, key_1){this.processes[id].deleteEmission(key_1)}

    //--------------------- Crushing Formulas ----------------//
    addCrushingFormulaToProcess(id){this.processes[id].addCurshingFormula()}
    setCrushingFormulaOfProcess(id, key_1, key_2, value){
        this.processes[id].setCrushingFormula(key_1, key_2, value)
    }
    deleteCrushingFormulaOfProcess(id, key_1){
        this.processes[id].deleteCrushingFormula(key_1)
    }

    //--------------------------- Flows ---------------------------------//
    addFlow (...args){return _addFlow(this, ...args)}
    deleteFlow (flowId){delete this.flows[flowId]}
    addFlowOutput (flowId){this.flows[flowId].addOutput()}
    setFlowOutput (flowId, ...args){this.flows[flowId].setOutput(...args)}
    deleteFlowOutput (flowId, key_1){this.flows[flowId].deleteOutput(key_1)}


    //-------------------------- Save and load -----------------------------//
    toJSON (){return _toJSON(this)}
    fromJSON (data){_fromJSON(this, data)}
    saveToLocalStorage(){localStorage.setItem("tmpProject", this.toJSON())}
    loadFromLocalStorage(){this.fromJSON(localStorage.getItem("tmpProject"))}
    flushProject (){
        localStorage.removeItem("tmpProject")
        _initializeProject(this)
    }

    //-------------------------- LCA Analysis -----------------------------//
    runLCAAnalysis (){return _runLCAAnalysis(this) }

}

export default projectClass;