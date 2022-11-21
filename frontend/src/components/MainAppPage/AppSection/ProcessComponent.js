
import React, { useState, useEffect, useRef} from "react";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import projectObject from "../../../projectObject/projectObject";

export default function ProcessComponent(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nProcesses = useSelector(state=>state.app.nProcessess)
    const dispatch = useDispatch()

    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [editableComponent])

    const handleRemoveProcess = () => {
        projectObject.removeProcess(props.id_)
        dispatch(appActions.updateNProcesses(projectObject.processes.length))
    }
    const handleClick = () => {
        dispatch(clickActions.setActiveComponent(props.id_))
        dispatch(clickActions.setActiveSection("process"))
    }

    const handleContents = () => {
        return (
            <div className="process-container">
                {(editableComponent === 'app') && 
                <button 
                    className="fa-minus fa-solid delete-button fa-beat-fade"
                    onClick={handleRemoveProcess}>
                </button>}

                <button 
                    className="app-button"
                    onClick={handleClick}>
                    {props.processName}
                </button>

                <i className='fas fa-arrow-down' style={{"fontSize":'24px'}}></i>
            </div>
        )
    }

    return (
        <>
            {contents}
        </>
        
    )
    
}