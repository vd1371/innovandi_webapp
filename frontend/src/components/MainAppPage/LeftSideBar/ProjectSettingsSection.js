import React, { useState, useEffect, useContext} from "react";
import EditableTableCell from "./EditableCellOneKey";
import EditButton from "../EditButton";

export default function ProjectSettingsSection(props){

    const [editable, setEditable] = useState(false)
    const [contents, setContents] = useState()

    useEffect (() => {
        handleContents()
    }, [editable, props.activeSection])

    const handleEditable = () => {setEditable(!editable)}

    const setProjectInfo = (key, newValue) => {
        props.projectInfo[key] = newValue
    }

    const handleContents = () => {
        setContents(
            <>
                <div
                    className="top-pane-settings"
                    onClick={() => props.setActiveSection("project")}>
                    
                    <h6 className={(props.activeSection === "project") ? null: 'inactive-section'}>Project Settings</h6>
                    <div className="filler"></div>
                    <EditButton
                        editable={editable}
                        handleEditable={handleEditable}/>
                </div>


                { (props.activeSection === "project") &&
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-column">Project Name</td>
                                <EditableTableCell
                                    valueRef = {props.projectInfo.projectName}
                                    handleNewValue = {setProjectInfo}
                                    key_ = 'projectName'
                                    editable = {editable} />
                            </tr>

                            <tr>
                                <td className="left-column">Working Hours</td>
                                <EditableTableCell
                                    valueRef = {props.projectInfo.workingHours}
                                    handleNewValue = {setProjectInfo}
                                    key_ = 'workingHours'
                                    editable = {editable}/>
                            </tr>

                            <tr>
                                <td className="left-column">Days Per Year</td>
                                <EditableTableCell
                                    valueRef = {props.projectInfo.workingDaysPerYear}
                                    handleNewValue = {setProjectInfo}
                                    key_ = 'workingDaysPerYear'
                                    editable = {editable} />
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