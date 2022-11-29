import React, { useState, useEffect, useRef} from "react";
import EditButton from "../EditButton";
import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";

export default function AppTopPane(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const newComponentAdded = useSelector(state=>state.click.newComponentAdded)

    const dispatch = useDispatch()
    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [editableComponent, newComponentAdded])

    const handleAddProcess = () => {
        dispatch(clickActions.setNewComponentAdded(true))
        if (!newComponentAdded){
            props.projectObject.addProcess()
            dispatch(appActions.updateNProcesses(Object.keys(props.projectObject.processes).length+1))
        }
    }

    const handleSaveProject = () => {
        props.projectObject.saveToLocalStorage()
        dispatch(clickActions.setClickNotification("Project Saved."))
    }

    const handleDeleteProject = () => {
        props.projectObject.flushProject()
        dispatch(appActions.updateNProcesses(Object.keys(props.projectObject).length)) // To re-render the processes
        dispatch(clickActions.setClickNotification("Project Deleted."))
    }

    const handleZoomIn = () => {
        props.projectObject.addScaleLevel(0.1)
        dispatch(appActions.addNEditions())
    }
    
    const handleZoomOut = () => {
        props.projectObject.addScaleLevel(-0.1)
        dispatch(appActions.addNEditions())
    }

    const handleContents = () => {
        return (
            <>  
                <button type="button" className="fa-play fa-solid toppane-button"></button>
                <button type="button" className="fa-stop fa-solid toppane-button"></button>
                <button
                    type="button"
                    className="fa-search-plus fa-solid toppane-button"
                    onClick={handleZoomIn}>
                </button>

                <button
                    type="button"
                    className="fa-search-minus fa-solid toppane-button"
                    onClick={handleZoomOut}>
                </button>
                
                <EditButton
                    targetComponent={'app'}
                    handleClick = {()=>dispatch(clickActions.setEditableComponent("app"))}/>

                <button
                    type="button"
                    className = "fa-plus fa-solid toppane-button"
                    onClick={handleAddProcess}>
                </button>

                <div className="filler"></div>

                <button
                    type="button"
                    className = "fa-solid toppane-button"
                    onClick={handleSaveProject}>
                    Save
                </button>

                <button
                    type="button"
                    className = "fa-solid toppane-button"
                    onClick={handleDeleteProject}>
                    Del
                </button>
            </>
        )
    }

    return (
        <div id="app-top-pane">
            {contents}
        </div>
        
    )
    
}