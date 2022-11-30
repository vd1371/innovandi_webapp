import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCell from "./EditableCell";
import EditButton from "../EditButton";
import AddButton from "./AddButton";
import DeleteRowButton from "./DeleteRowButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import DropdownSelector from "./DropdownSelector";


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
    //---------------------------- Process Info ----------------------------//
    const setProcessInfo = (newValue, cellProps) => {
        props.projectObject.setProcessInfo(activeComponent, cellProps.key_, newValue)
        dispatch(appActions.addNEditions())
    }
    
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

    //------------------------------ Formulas ------------------------------//
    const handleAddCrushingFormula = () => {
        props.projectObject.addCrushingFormulaToProcess(activeComponent)
        dispatch(appActions.addNEditions())
    }

    const handleSetCrushingFormula = (newValue, selectorProps) => {
        props.projectObject.setCrushingFormulaOfProcess(activeComponent,
                                            selectorProps.key_1,
                                            selectorProps.key_2,
                                            newValue)
    }

    const handleDeleteCrushingFormula = (key_1) => {
        props.projectObject.deleteCrushingFormulaOfProcess(activeComponent, key_1)
        dispatch(appActions.addNEditions())
    }

    //------------------------------ Contents ------------------------------//
    const handleContents = () => {
        
        let processInfo = props.projectObject.processes[activeComponent]

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

                {/* -------  Crushing Formula section ------- */}
                {(processInfo.processType === 'Crusher') &&

                <>
                <div className="top-pane-settings table-info">
                    <p>Crushing Formula</p>
                    <div className="filler"></div>
                    <AddButton handler={handleAddCrushingFormula}/>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Percentage</th>
                            <th>Of Material</th>
                            <th>Converst To</th>
                            {(editableComponent == "process") && <th>Del.</th>}
                        </tr>
                    </thead>
                    <tbody>
                    {
                    Object.entries(processInfo.crushingFormula).map(([key, item]) => {
                    
                        return (
                            <tr key = {"formulaRow" + key}>
                            <EditableCell
                                key = {"formulaPecentageCell" + key}
                                valueRef = {item.percentage}
                                handleNewValue = {handleSetCrushingFormula}
                                key_1 = {key}
                                key_2 = "percentage"
                                className = "left-column"
                                belongsTo = "process" />

                            <DropdownSelector
                                key = {"formulaOfMaterialCell" + key}
                                valueRef = {item.ofMaterial}
                                handleNewValue = {handleSetCrushingFormula}
                                key_1 = {key}
                                key_2 = "basedOn"
                                belongsTo = "process"
                                listOfValues = {props.projectObject.getWasteNames()}
                                />

                            <DropdownSelector
                                key = {"formulaConvertsToCell" + key}
                                valueRef = {item.convertsTo}
                                handleNewValue = {handleSetCrushingFormula}
                                key_1 = {key}
                                key_2 = "basedOn"
                                belongsTo = "process"
                                listOfValues = {props.projectObject.getWasteNames()}
                                />

                            <DeleteRowButton
                                key = {"formulaDeleteKey" + key}
                                key_1 = {key}
                                handleDelete = {handleDeleteEmission}
                                belongsTo = "process"
                                />
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <br></br>
                </>
                }
                
                
                {/* -----------------  Inputs ----------------- */}
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
                                <tr key = {"inputRow" + key}>
                                <EditableCell
                                    key = {"inputCellName" + key}
                                    valueRef = {item.name}
                                    handleNewValue = {setInputInfo}
                                    key_1 = {key}
                                    key_2 = "name"
                                    className = "left-column"
                                    belongsTo = "process" />

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
                            {(editableComponent == "process") && <th>Del.</th>}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.entries(processInfo.emissions).map(([key, item]) => {
                        
                            return (
                                <tr key = {"emissionRow" + key}>
                                <EditableCell
                                    key = {"emissionCellName" + key}
                                    valueRef = {item.name}
                                    handleNewValue = {handleSetEmissionInfo}
                                    key_1 = {key}
                                    key_2 = "name"
                                    className = "left-column"
                                    belongsTo = "process" />

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
                {!processInfo &&
                <p className={(activeSection === "process") ? null: 'inactive-section'}>
                    No process is selected yet
                </p>
                }
            </>
        )
    }
    
    return (
        <div
            className="settings-wrapper"
            id='process-settings-section'>
            {contents}
        </div>
    )
}