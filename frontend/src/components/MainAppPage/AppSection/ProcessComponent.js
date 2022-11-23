
import React, { useState, useEffect, useRef} from "react";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import projectObject from "../../../projectObject/projectObject";
import Draggable, {DraggableCore} from "react-draggable";
import uuid from "react-uuid";
import ArrowPoint from "./ArrowPoint";

import { useToasts } from 'react-toast-notifications';

const coordinationsOfDots = [
    [30, -5], [100, -5], [170, -5],
    [30, 95], [100, 95], [170, 95],
    [-5, 45], [205, 45]
]


export default function ProcessComponent(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nProcesses = useSelector(state=>state.app.nProcessess)
    const dispatch = useDispatch()
    
    const nodeRef = useRef()

    const [isClickedEver, setIsClickedEver] = useState(false)
    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [editableComponent, isClickedEver])

    const handleRemoveProcess = () => {
        projectObject.removeProcess(props.processInfo.id_)
        dispatch(appActions.updateNProcesses(projectObject.processes.length))
    }
    const handleClick = () => {
        if (!isClickedEver){
            setIsClickedEver(true)
        }
        dispatch(clickActions.setActiveComponent(props.processInfo.id_))
        dispatch(clickActions.setActiveSection("process"))
        dispatch(clickActions.setNewComponentAdded(false))
    }

    const handleStop = (e) => {
        let pos = nodeRef.current.getAttribute("style")
        // example of pos: "transform: translate(269px, 99px);""
        let xny = pos.slice(21, -2).split(",")
        let x = parseInt(xny[0])
        let y = parseInt(xny[1])
        props.processInfo.htmlInfo.positionX = x
        props.processInfo.htmlInfo.positionY = y
    }

    const handleContents = () => {
        return (
            <Draggable
                defaultPosition={{
                    x: props.processInfo.htmlInfo.positionX,
                    y: props.processInfo.htmlInfo.positionY}}
                onStop = {handleStop}
                >
                <div
                    className="process-container"
                    id_ = {props.processInfo.id_}
                    ref = {nodeRef}>

                    {(editableComponent === 'app') && 
                    <button 
                        className="fa-minus fa-solid delete-button fa-beat-fade"
                        onClick={handleRemoveProcess}>
                    </button>}

                    <button 
                        className= {`process-button ${(!isClickedEver)? "fa-fade": null}`}
                        onClick={handleClick}>
                        {props.processInfo.processName}
                    </button>

                    {
                    coordinationsOfDots.map((coord, index) => {
                         return (
                            <ArrowPoint
                                key = {props.processInfo.id_ + "-" + index}
                                coord = {coord}
                                index = {index}
                                processId = {props.processInfo.id_}/>
                         )
                    })
                    }
                    

                </div>

            </Draggable>
        )
    }

    return (
        <>
            {contents}
        </>
        
    )
    
}