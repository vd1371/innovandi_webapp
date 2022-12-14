import React, { useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";

import EditButton from "../EditButton";
import DownloadProject from "./DownloadProject";
import LoadProject from "./LoadProject";
import ResultsNavigateButton from "./ResultsNavigateButton";

export default function AppTopPane(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const nEditions = useSelector(state=>state.app.nEditions)
    const activeSection = useSelector(state=>state.click.activeSection)
    const newComponentAdded = useSelector(state=>state.click.newComponentAdded)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleAddProcess = () => {
        dispatch(clickActions.setNewComponentAdded(true))
        if (!newComponentAdded){
            props.projectObject.addProcess()
            dispatch(appActions.updateNProcesses(Object.keys(props.projectObject.processes).length))
        }
    }

    const handleSaveProject = () => {
        props.projectObject.saveToLocalStorage()
        dispatch(clickActions.setClickNotification("Project Saved."))
    }

    const handleDeleteProject = () => {
        props.projectObject.flushProject()
        dispatch(appActions.addNEditions())
        dispatch(clickActions.setClickNotification("Project Deleted."))
        window.location.href = "/app"
    }

    const handleZoomIn = () => {
        props.projectObject.addScaleLevel(0.1)
        dispatch(appActions.addNEditions())
    }
    
    const handleZoomOut = () => {
        props.projectObject.addScaleLevel(-0.1)
        dispatch(appActions.addNEditions())
    }

    const handleRunAnalysis = () => {
        props.projectObject.runLCAAnalysis()
        dispatch(appActions.addNEditions())
    }

    const handleNavigateToResults = () => {
        navigate("/results")
    }

    return (
        <div id="app-top-pane">
            <button
                type="button"
                className="fa-play fa-solid toppane-button"
                onClick={handleRunAnalysis}>
            </button>
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

            <DownloadProject {...props}/>
            <LoadProject {...props} />
            <ResultsNavigateButton />
        </div>
        
    )
    
}