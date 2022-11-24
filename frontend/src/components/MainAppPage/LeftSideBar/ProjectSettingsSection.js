import React, { useState, useEffect, useContext} from "react";
import EditableCellOneKey from "./EditableCellOneKey";
import EditButton from "../EditButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";

export default function ProjectSettingsSection(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const dispatch = useDispatch()
    const [contents, setContents] = useState()

    useEffect (() => {
        handleContents()
    }, [activeComponent, activeSection, editableComponent])

    const setProjectInfo = (key, newValue) => {
        props.projectObject.projectInfo[key] = newValue
    }

    const handleContents = () => {
        setContents(
            <>
                <div
                    className="top-pane-settings"
                    onClick={()=>dispatch(clickActions.setActiveSection("project"))}>
                    
                    <h6 className={(activeSection === "project") ? null: 'inactive-section'}>Project Settings</h6>
                    <div className="filler"></div>
                    <EditButton
                        targetComponent={'project'}
                        handleClick = {()=>dispatch(clickActions.setEditableComponent("project"))}/>
                </div>


                { (activeSection === "project") &&
                <div 
                    className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-column">Project Name</td>
                                <EditableCellOneKey
                                    valueRef = {props.projectObject.projectInfo.projectName}
                                    handleNewValue = {setProjectInfo}
                                    key_ = 'projectName'
                                    belongsTo = "project"/>
                            </tr>

                            <tr>
                                <td className="left-column">Working Hours</td>
                                <EditableCellOneKey
                                    valueRef = {props.projectObject.projectInfo.workingHours}
                                    handleNewValue = {setProjectInfo}
                                    key_ = 'workingHours'
                                    belongsTo = "project"/>
                            </tr>

                            <tr>
                                <td className="left-column">Days Per Year</td>
                                <EditableCellOneKey
                                    valueRef = {props.projectObject.projectInfo.workingDaysPerYear}
                                    handleNewValue = {setProjectInfo}
                                    key_ = 'workingDaysPerYear'
                                    belongsTo = "project"/>
                            </tr>

                        </tbody>
                    </table>
                </div>
                }
                
            </>
        )
    }
    
    return (
        <div id='project-settings-section'>
            {contents}
        </div>
    )
}