import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCell from "../../../../components/LeftSideBar/EditableCell";
import AddButton from "../../../../components/LeftSideBar/AddButton";
import DeleteRowButton from "../../../../components/LeftSideBar/DeleteRowButton";

import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../../store/app-slice";
import DropdownSelector from "../../../../components/LeftSideBar/DropdownSelector";

export default function ProcSettEmissions(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    //------------------------------ Emissions ------------------------------//
    const handleAddEmissions = () => {
        props.projectObject.addEmissionToProcess(activeComponent)
        dispatch(appActions.addNEditions())
    }

    const handleSetEmissionInfo = (newValue, selectorProps) => {
        props.projectObject.setEmissionInfoOfProcess(activeComponent,
                                            selectorProps.key_1,
                                            selectorProps.key_2,
                                            newValue)
    }

    const handleDeleteEmission = (key_1) => {
        props.projectObject.deleteEmissionOfProcess(activeComponent, key_1)
        dispatch(appActions.addNEditions())
    }

    let processInfo = props.projectObject.processes[activeComponent]
    
    return (
        <>
            {(activeSection === "process") && processInfo &&
            <>
            
            {/* -----------------  Emissions ----------------- */}
            <div className="top-pane-settings table-info">
                <p>Emissions and Outputs</p>
                <div className="filler"></div>
                <AddButton handler={handleAddEmissions}/>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Based on</th>
                        <th>Coeff.</th>
                        {(editableComponent === "process") && <th>Del.</th>}
                    </tr>
                </thead>
                <tbody>
                {
                    Object.entries(processInfo.emissions).map(([key, item]) => {
                    
                        return (
                            <tr key = {"emissionRow" + key}>

                            <DropdownSelector
                                key = {"emissionCellName" + key}
                                valueRef = {item.name}
                                handleNewValue = {handleSetEmissionInfo}
                                key_1 = {key}
                                key_2 = "name"
                                belongsTo = "process"
                                listOfValues = {props.projectObject.generalInfo.emissionTypes}
                                />

                            <DropdownSelector
                                key = {"emissionCellBasedOnSelector" + key}
                                valueRef = {item.basedOn}
                                handleNewValue = {handleSetEmissionInfo}
                                key_1 = {key}
                                key_2 = "basedOn"
                                belongsTo = "process"
                                listOfValues = {props.projectObject.getInputNamesOfProcess(processInfo.id_)}
                                />

                            <EditableCell
                                key = {"emissionCellRate" + key}
                                valueRef = {item.rate}
                                handleNewValue = {handleSetEmissionInfo}
                                key_1 = {key}
                                key_2 = "rate"
                                belongsTo = "process" />

                            <DeleteRowButton
                                key = {"emissionsDeleteKey" + key}
                                key_1 = {key}
                                handleDelete = {handleDeleteEmission}
                                belongsTo = "process"
                                />
                            </tr>
                        )
                    })

                }
                </tbody>
            </table>
            <br></br>

            </>
            }
        </>
    )
}