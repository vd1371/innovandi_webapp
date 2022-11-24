import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCellOneKey from "./EditableCellOneKey";
import EditableCellTwoKeys from "./EditableCellTwoKeys";
import EditButton from "../EditButton";
import AddButton from "./AddButton";
import uuid from "react-uuid";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import DropdownBasedOnCell from "./DropdownBasedOnCell";

export default function ProcessSettingsSection(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()

    const [contents, setContents] = useState()
    
    useEffect (() => {
        setContents(handleContents())
    }, [activeComponent,
        activeSection,
        editableComponent,
        nEditions])

    const handleClickEditButton = () => {
        dispatch(clickActions.setEditableComponent("process"))
        dispatch(appActions.addNEditions())
    }

    const handleAddInputs = () => {
        props.projectObject.addInput(activeComponent)
        dispatch(appActions.addNEditions())
    }

    const handleAddEmissions = () => {
        props.projectObject.addEmission(activeComponent)
        dispatch(appActions.addNEditions())
    }

    const setProcessInfo = (key, newValue) => {
        props.projectObject.setProcessInfo(activeComponent, key, newValue)
    }

    const setInputsInfo = (key_1, key_2, newValue) => {
        props.projectObject.setInputsInfo(activeComponent, key_1, key_2, newValue)
    }

    const setEmissionInfo = (key_1, key_2, newValue) => {
        props.projectObject.setEmissionInfo(activeComponent, key_1, key_2, newValue)
    }

    const handleContents = () => {
        
        let processInfo = props.projectObject.getProcessInfoOf(activeComponent)

        return (
            <>
                <div className="top-pane-settings"
                    onClick={()=>dispatch(clickActions.setActiveSection("process"))}>

                    <h6 className={(activeSection === "process") ? null: 'inactive-section'}>Process Settings</h6>
                    <div className="filler"></div>
                    {processInfo &&
                    <EditButton
                    targetComponent={'process'}
                    handleClick = {handleClickEditButton}/>}
                </div>

                {(activeSection === "process") && processInfo &&
                <>
                <table>
                    <tbody>
                        <tr>
                            <td className="left-column">Process Name</td>
                            <EditableCellOneKey
                                valueRef = {processInfo.processName}
                                handleNewValue = {setProcessInfo}
                                key_ = 'processName'
                                belongsTo = "process"/>
                        </tr>
                    </tbody>
                </table>
                
                
                <div className="top-pane-settings table-info">
                    <p>Inputs</p>
                    <div className="filler"></div>
                    {/* <AddButton handler={handleAddInputs}/> */}
                    <AddButton handler={handleAddInputs}/>
                </div>

                <table>
                    <tbody>
                    {
                        Object.entries(processInfo.inputs).map(([key, item]) => {
                        
                            return (
                                <tr key = {uuid()}>
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.name}
                                    handleNewValue = {setInputsInfo}
                                    key_1 = {key}
                                    key_2 = "name"
                                    className = "left-column"
                                    belongsTo = "process" />
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.rate}
                                    handleNewValue = {setInputsInfo}
                                    key_1 = {key}
                                    key_2 = "rate"
                                    belongsTo = "process" />
                                </tr>
                            )
                        })

                    }
                    </tbody>
                </table>

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
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.entries(processInfo.emissions).map(([key, item]) => {
                        
                            return (
                                <tr key = {uuid()}>
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.name}
                                    handleNewValue = {setEmissionInfo}
                                    key_1 = {key}
                                    key_2 = "name"
                                    className = "left-column"
                                    belongsTo = "process" />
                                <DropdownBasedOnCell
                                    key = {uuid()}
                                    valueRef = {item.basedOn}
                                    handleNewValue = {setEmissionInfo}
                                    key_1 = {key}
                                    key_2 = "basedOn"
                                    belongsTo = "process"
                                    projectObject = {props.projectObject}
                                    id_ = {processInfo.id_}
                                    />
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.rate}
                                    handleNewValue = {setEmissionInfo}
                                    key_1 = {key}
                                    key_2 = "rate"
                                    belongsTo = "process" />
                                </tr>
                            )
                        })

                    }
                    </tbody>
                </table>


                </>
                }
                {!processInfo &&
                <p className={(activeSection === "process") ? null: 'inactive-section'}>
                    No process is selected yet
                </p>
                }
            </>
        )
    }
    
    return (
        <div id='process-settings-section'>
            {contents}
        </div>
    )
}