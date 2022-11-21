import React, { useState, useEffect, useContext, useRef} from "react";

import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../store/app-slice";

import projectObject from "../../../projectObject/projectObject";

export default function AddProcessButton(props){
    
    const dispatch = useDispatch()

    const handleClick = () => {
        projectObject.addProcess()
        dispatch(appActions.updateNProcesses(projectObject.processes.length))
    }

    return (
        <button type="button" key = "0" className = "app-button"
                id = 'empty-process-button' onClick={handleClick}>
        +
        </button>
    )
}