import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCell from "../../../../components/LeftSideBar/EditableCell";
import AddButton from "../../../../components/LeftSideBar/AddButton";
import DeleteRowButton from "../../../../components/LeftSideBar/DeleteRowButton";
import DropdownSelector from "../../../../components/LeftSideBar/DropdownSelector";

import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../../store/app-slice";


export default function ProcSettInputs(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()
    
    //-------------------------------- Inputs --------------------------------//
    const handleAddInputs = () => {
        props.projectObject.addInputToProcess(activeComponent)
        dispatch(appActions.addNEditions())
    }
    
    const handleDeleteInput = (key_1) => {
        props.projectObject.deleteInputOfProcess(activeComponent, key_1)
        dispatch(appActions.addNEditions())
    }

    const setInputInfo = (newValue, cellProps) => {
        props.projectObject.setInputInfo(activeComponent,
                                            cellProps.key_1,
                                            cellProps.key_2,
                                            newValue)
    }
    
    let processInfo = props.projectObject.processes[activeComponent]
    
    return (
        <>
            {(activeSection === "process") && processInfo &&
            <>
            <div className="top-pane-settings table-info">
                <p>Inputs</p>
                <div className="filler"></div>
                <AddButton handler={handleAddInputs}/>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Vol/Hr</th>
                        {(editableComponent === "process") && <th>Del.</th>}
                    </tr>
                </thead>
                <tbody>
                {
                    Object.entries(processInfo.inputs).map(([key, item]) => {
                        return (
                            <tr key = {"inputRow" + key}>
                            <DropdownSelector
                                key = {"inputCellName" + key}
                                valueRef = {item.name}
                                handleNewValue = {setInputInfo}
                                key_1 = {key}
                                key_2 = "name"
                                className = "left-column"
                                belongsTo = "process" 
                                listOfValues = {props.projectObject.generalInfo.inputTypes}
                                />

                            <EditableCell
                                key = {"inputCellRate" + key}
                                valueRef = {item.rate}
                                handleNewValue = {setInputInfo}
                                key_1 = {key}
                                key_2 = "rate"
                                belongsTo = "process" />

                            <DeleteRowButton
                                key = {"inputsDeleteKey" + key}
                                key_1 = {key}
                                handleDelete = {handleDeleteInput}
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