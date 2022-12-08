import React, { useState, useEffect, useContext, useRef} from "react";

import {useSelector} from "react-redux";

import ProcSettToppane from "./ProcSettToppane";
import ProcSettInfo from "./ProcSettInfo";
import ProcSettInputs from "./ProcSettInputs";
import ProcSettCrushingFormula from "./ProcSettCrushingFormula";
import ProcSettEmissions from "./ProcSettEmissions"


export default function ProcessSettingsSection(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    
    let processInfo = props.projectObject.processes[activeComponent]
    
    return (
        <div 
            className="settings-wrapper"
            id='project-settings-section'>
            <ProcSettToppane {...props} />
            <ProcSettInfo {...props} />
            <ProcSettCrushingFormula {...props} />
            <ProcSettInputs {...props} />
            <ProcSettEmissions {...props} />
            
            {!processInfo &&
            <p className={(activeSection === "process") ? null: 'inactive-section'}>
                No process is selected yet
            </p>
            }
        </div>
    )
}