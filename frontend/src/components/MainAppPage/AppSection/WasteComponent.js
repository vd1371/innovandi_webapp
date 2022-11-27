
import React, { useState, useEffect, useRef} from "react";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";
import ArrowPoint from "./ArrowPoint";

import Draggable, {DraggableCore} from "react-draggable";
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';

const coordinationsOfDots = [
    [100, 95]
]

export default function WasteComponent(props){

    // const activeComponent = useSelector(state=>state.click.activeComponent)
    // const editableComponent = useSelector(state=>state.click.editableComponent)
    // const activeSection = useSelector(state=>state.click.activeSection)
    // const nProcesses = useSelector(state=>state.app.nProcessess)
    // const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()
    const updateXarrow = useXarrow();
    
    // const nodeRef = useRef()

    const [contents, setContents] = useState()
    const wasteComponentId = "wasteComponent"

    useEffect (() => {
        setContents(handleContents())
    }, [])

    const handleClick = () => {
        dispatch(clickActions.setActiveSection("waste"))
        updateXarrow()
    }

    // const handleStop = (e) => {
    //     let pos = nodeRef.current.getAttribute("style")
    //     // example of pos: "transform: translate(269px, 99px);""
    //     let xny = pos.slice(21, -2).split(",")
    //     let x = parseInt(xny[0])
    //     let y = parseInt(xny[1])
    //     props.processInfo.htmlInfo.positionX = x
    //     props.processInfo.htmlInfo.positionY = y
    //     dispatch(appActions.addNEditions())
    // }

    const handleContents = () => {
        return (
            <div className=" waste-container">
                <div
                className="process-container"
                id = {wasteComponentId}
                // ref = {nodeRef}
                >

                <button
                    className="process-button waste-button"
                    onClick={handleClick}>
                    {wasteComponentId}
                </button>

                {
                coordinationsOfDots.map((coord, index) => {
                    let tmpId = wasteComponentId + index
                        return (
                        <ArrowPoint
                            key = {tmpId}
                            pointId = {tmpId}
                            coord = {coord}
                            {...props}/>
                        )
                })
                }
                </div>
            </div>
                   )
    }

    return (
        <>
            {contents}
        </>
        
    )
    
}