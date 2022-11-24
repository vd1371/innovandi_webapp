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
            dispatch(appActions.updateNProcesses(props.projectObject.processes.length))
        }
    }

    const handleContents = () => {
        return (
            <>  
                <button type="button" className="fa-play fa-solid toppane-button"></button>
                <button type="button" className="fa-stop fa-solid toppane-button"></button>
                <button
                    type="button"
                    className="fa-search-plus fa-solid toppane-button"
                    onClick={()=>dispatch(appActions.modifyScalelevel(0.05))}>
                </button>

                <button
                    type="button"
                    className="fa-search-minus fa-solid toppane-button"
                    onClick={()=>dispatch(appActions.modifyScalelevel(-0.05))}>
                </button>
                
                <EditButton
                    targetComponent={'app'}
                    handleClick = {()=>dispatch(clickActions.setEditableComponent("app"))}/>

                <button
                    type="button"
                    className = "fa-plus fa-solid toppane-button"
                    onClick={handleAddProcess}>
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