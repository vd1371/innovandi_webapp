import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCellOneKey from "./EditableCellOneKey";
import EditableCellTwoKeys from "./EditableCellTwoKeys";
import EditButton from "../EditButton";
import AddButton from "./AddButton";
import uuid from "react-uuid";

export default function ProcessSettingsSection(props){

    const [editable, setEditable] = useState(false)
    const [contents, setContents] = useState()
    const [nInputs, setNInputs] = useState(0)
    const [nEmissions, setNEmissions] = useState(0)
    
    useEffect (() => {
        setContents(handleContents())
    }, [props.activeComponent,
        editable,
        props.activeSection,
        nInputs,
        nEmissions])

    const handleEditable = () => {
        if (editable){
            props.updateNEditions()
        }
        setEditable(!editable)
    }

    const getActiveProcessInfo = () => {
        if (props.activeComponent){
            for (var process of props.processes){
                if (process.id_ === props.activeComponent){
                    return process
                }
            }
        }
        return null
    }

    const setProcessInfo = (key, newValue) => {
        let processInfo = getActiveProcessInfo()
        processInfo[key] = newValue
    }

    const setInputsInfo = (key_1, key_2, newValue) => {
        let processInfo = getActiveProcessInfo()
        processInfo.inputs[key_1][key_2] = newValue
    }

    const handleAddInputs = () => {
        let obj = getActiveProcessInfo().inputs
        if (Object.keys(obj).length < 5) {
            obj[Object.keys(obj).length+1] = {"name": "Inputs N/A", "rate": 0}
            setNInputs(Object.keys(obj).length)
        } else {
            alert("Currently, maximum number of types of wastes is 5")
        }
    }

    const setOutputInfo = (key_1, key_2, newValue) => {
        let processInfo = getActiveProcessInfo()
        processInfo.emissions[key_1][key_2] = newValue
    }

    const handleAddEmissions = () => {
        let obj = getActiveProcessInfo().emissions
        if (Object.keys(obj).length < 20) {
            obj[Object.keys(obj).length+1] = {
                "name": "N/A", "basedOn": "N/A", "rate": 0}
            setNEmissions(Object.keys(obj).length)
        } else {
            alert("Currently, maximum number of types of wastes is 20")
        }
    }

    const handleContents = () => {
        
        let processInfo = getActiveProcessInfo()

        return (
            <>
                <div className="top-pane-settings"
                    onClick={() => props.setActiveSection("process")}>

                    <h6 className={(props.activeSection === "process") ? null: 'inactive-section'}>Process Settings</h6>
                    <div className="filler"></div>
                    {processInfo &&
                        <EditButton
                        editable={editable}
                        handleEditable={handleEditable}
                        updateNEditions = {props.updateNEditions}/>}
                </div>

                {(props.activeSection === "process") && processInfo &&
                <>
                <table>
                    <tbody>
                        <tr>
                            <td className="left-column">Process Name</td>
                            <EditableCellOneKey
                                valueRef = {processInfo.processName}
                                handleNewValue = {setProcessInfo}
                                key_ = 'processName'
                                editable = {editable}
                                updateNEditions = {props.updateNEditions}/>
                        </tr>
                    </tbody>
                </table>
                
                
                <div className="top-pane-settings table-info">
                    <p>Inputs</p>
                    <div className="filler"></div>
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
                                    key_2 = {"name"}
                                    className = {"left-column"}
                                    editable = {editable} />
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.rate}
                                    handleNewValue = {setInputsInfo}
                                    key_1 = {key}
                                    key_2 = {"rate"}
                                    editable = {editable} />
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
                    <tbody>
                    {
                        Object.entries(processInfo.emissions).map(([key, item]) => {
                        
                            return (
                                <tr key = {uuid()}>
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.name}
                                    handleNewValue = {setOutputInfo}
                                    key_1 = {key}
                                    key_2 = {"name"}
                                    className = {"left-column"}
                                    editable = {editable} />
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.basedOn}
                                    handleNewValue = {setOutputInfo}
                                    key_1 = {key}
                                    key_2 = {"basedOn"}
                                    editable = {editable} />
                                <EditableCellTwoKeys
                                    key = {uuid()}
                                    valueRef = {item.rate}
                                    handleNewValue = {setOutputInfo}
                                    key_1 = {key}
                                    key_2 = {"rate"}
                                    editable = {editable} />
                                </tr>
                            )
                        })

                    }
                    </tbody>
                </table>


                </>
                }

                {!processInfo &&
                <p className={(props.activeSection === "process") ? null: 'inactive-section'}>No process is selected yet</p>
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