import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCell from "../EditableCell";

import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../../store/app-slice";
import DropdownSelector from "../DropdownSelector";

export default function ProcSettInfo(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    const setProcessInfo = (newValue, cellProps) => {
        props.projectObject.setProcessInfo(activeComponent, cellProps.key_, newValue)
        dispatch(appActions.addNEditions())
    }

    let processInfo = props.projectObject.processes[activeComponent]

    return (
        <>
        {(activeSection === "process") && processInfo &&
            <>
            <table>
                <tbody>
                    <tr>
                        <td className="left-column">Process Name</td>
                        <EditableCell
                            valueRef = {processInfo.processName}
                            handleNewValue = {setProcessInfo}
                            key_ = 'processName'
                            belongsTo = "process"/>
                    </tr>
                    <tr>
                        <td className="left-column">Process Type</td>
                        <DropdownSelector
                                key = {"processTypeSelector"}
                                valueRef = {processInfo.processType}
                                handleNewValue = {setProcessInfo}
                                key_ = 'processType'
                                belongsTo = "process"
                                listOfValues = {props.projectObject.generalInfo.processesTypes}
                                />
                    </tr>
                </tbody>
            </table>
            <br></br>
            </>
        }
        </>
    )
}