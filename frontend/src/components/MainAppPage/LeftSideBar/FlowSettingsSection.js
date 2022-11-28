import React, { useState, useEffect, useContext, useRef} from "react";
import EditableCellOneKey from "./EditableCellOneKey";
import EditableCellTwoKeys from "./EditableCellTwoKeys";
import EditButton from "../EditButton";
import AddButton from "./AddButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import DropdownBasedOnMaterials from "./DropdownBasedOnMaterials";

export default function FlowSettingsSection(props){

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
        dispatch(clickActions.setEditableComponent("flow"))
        dispatch(appActions.addNEditions())
    }

    const handleAddOutput = () => {
        props.projectObject.addFlowOutput(activeComponent)
        dispatch(appActions.addNEditions())
    }

    const setOutputInfo = (key_1, key_2, newValue) => {
        props.projectObject.setFlowOutputs(activeComponent, key_1, key_2, newValue)
    }

    const handleContents = () => {
        
        let flowInfo = props.projectObject.flows[activeComponent]

        return (
            <>
                <div className="top-pane-settings"
                    onClick={()=>dispatch(clickActions.setActiveSection("flow"))}>

                    <h6 className={(activeSection === "flow") ? null: 'inactive-section'}>Flow Settings</h6>
                    <div className="filler"></div>
                    {flowInfo &&
                    <>
                        <AddButton handler={handleAddOutput}/>
                        <EditButton
                        targetComponent={'flow'}
                        handleClick = {handleClickEditButton}/>
                    </>
                    }
                </div>

                {(activeSection === "flow") && flowInfo &&
                <>
                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Output/Input ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.entries(flowInfo.outputs).map(([key, item]) => {
                        
                            return (
                                <tr key = {"flowSettingsRow" + key}>
                                
                                <DropdownBasedOnMaterials
                                    key = {"flowSettingMaterialCell" + key}
                                    valueRef = {item.material}
                                    handleNewValue = {setOutputInfo}
                                    key_1 = {key}
                                    key_2 = "material"
                                    belongsTo = "flow"
                                    projectObject = {props.projectObject}
                                />
                                <EditableCellTwoKeys
                                    key = {"flowSettingsRatioCell" + key}
                                    valueRef = {item.ratio}
                                    handleNewValue = {setOutputInfo}
                                    key_1 = {key}
                                    key_2 = "ratio"
                                    belongsTo = "flow" />
                                </tr>
                            )
                        })

                    }
                    </tbody>
                </table>


                </>
                }
                {!flowInfo &&
                <p className={(activeSection === "flow") ? null: 'inactive-section'}>
                    No flow is selected yet
                </p>
                }
            </>
        )
    }
    
    return (
        <div id='flow-settings-section'>
            {contents}
        </div>
    )
}