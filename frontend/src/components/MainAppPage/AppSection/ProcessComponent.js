
import React, { useState, useEffect, useRef} from "react";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import ArrowPoint from "./ArrowPoint";

import Draggable, {DraggableCore} from "react-draggable";
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';

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
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()
    const updateXarrow = useXarrow();
    
    const nodeRef = useRef()

    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [editableComponent, nEditions])

    const handleRemoveProcess = () => {
        props.projectObject.removeProcess(props.processInfo.id_)
        dispatch(appActions.updateNProcesses(props.projectObject.processes.length))
    }
    const handleClick = () => {
        if (props.processInfo.isNew){
            props.projectObject.setIsNewFalseOfProcess(props.processInfo.id_)
            dispatch(appActions.addNEditions())
        }
        dispatch(clickActions.setActiveComponent(props.processInfo.id_))
        dispatch(clickActions.setActiveSection("process"))
        dispatch(clickActions.setNewComponentAdded(false))
        updateXarrow()
    }

    const handleStop = (e) => {
        let pos = nodeRef.current.getAttribute("style")
        // example of pos: "transform: translate(269px, 99px);""
        let xny = pos.slice(21, -2).split(",")
        let x = parseInt(xny[0])
        let y = parseInt(xny[1])
        props.processInfo.htmlInfo.positionX = x
        props.processInfo.htmlInfo.positionY = y
        dispatch(appActions.addNEditions())
    }

    const handleContents = () => {
        return (
            <Draggable
                defaultPosition={{
                    x: props.processInfo.htmlInfo.positionX,
                    y: props.processInfo.htmlInfo.positionY}}
                onDrag = {updateXarrow}
                onStop = {handleStop}
                >
                <div
                    className="process-container"
                    id = {props.processInfo.id_}
                    ref = {nodeRef}>

                    {(editableComponent === 'app') && 
                    <button 
                        className="fa-minus fa-solid delete-button fa-beat-fade"
                        onClick={handleRemoveProcess}>
                    </button>}

                    <button 
                        className= {`process-button ${(props.processInfo.isNew)? "fa-fade": null}`}
                        onClick={handleClick}>
                        {props.processInfo.processName}
                    </button>

                    {
                    coordinationsOfDots.map((coord, index) => {
                        let tmpId = props.processInfo.id_ + "-dot" + index
                         return (
                            <ArrowPoint
                                key = {tmpId}
                                pointId = {tmpId}
                                coord = {coord}
                                processInfo = {props.processInfo}
                                {...props}/>
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