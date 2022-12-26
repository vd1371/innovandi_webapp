import EditableCell from "../../../components/LeftSideBar/EditableCell";
import EditButton from "../../../components/EditButton";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";

export default function ProjectSettingsSection(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const nEditions = useSelector(state=>state.app.nEditions)
    const activeSection = useSelector(state=>state.click.activeSection)
    const dispatch = useDispatch()

    const setProjectInfo = (newValue, cellProps) => {
        props.projectObject.projectInfo[cellProps.key_] = newValue
    }
    
    return (
        <div
            id='project-settings-section'
            className="settings-wrapper">
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
                            <EditableCell
                                valueRef = {props.projectObject.projectInfo.projectName}
                                handleNewValue = {setProjectInfo}
                                key_ = 'projectName'
                                belongsTo = "project"/>
                        </tr>

                        <tr>
                            <td className="left-column">Working Hours</td>
                            <EditableCell
                                valueRef = {props.projectObject.projectInfo.workingHours}
                                handleNewValue = {setProjectInfo}
                                key_ = 'workingHours'
                                belongsTo = "project"/>
                        </tr>

                        <tr>
                            <td className="left-column">Days Per Year</td>
                            <EditableCell
                                valueRef = {props.projectObject.projectInfo.workingDaysPerYear}
                                handleNewValue = {setProjectInfo}
                                key_ = 'workingDaysPerYear'
                                belongsTo = "project"/>
                        </tr>

                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}