
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

    const dispatch = useDispatch()
    const updateXarrow = useXarrow();

    const [contents, setContents] = useState()
    const wasteComponentId = "wasteComponent"

    useEffect (() => {
        setContents(handleContents())
    }, [])

    const handleClick = () => {
        dispatch(clickActions.setActiveSection("waste"))
        updateXarrow()
    }

    const handleContents = () => {
        return (
            <div className=" waste-container">
                <div
                className="process-container"
                id = {wasteComponentId}
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