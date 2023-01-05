
import React, { useState, useEffect} from "react";

import {useDispatch} from "react-redux";
import { clickActions } from "store/click-slice";
import ArrowPoint from "../../components/ArrowPoint";

import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import ProcessIcon from "./ProcessIcon";

const coordinationsOfDots = [
    [70, 65]
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
    }

    const handleContents = () => {
        return (
            <div className=" waste-container">
                <div
                className="process-container"
                id = {wasteComponentId}>
                    <button
                        className="process-button waste-button"
                        onClick={handleClick}>
                        <ProcessIcon processType={"ConstructionWaste"} />
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