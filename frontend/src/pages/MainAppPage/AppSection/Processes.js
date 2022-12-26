import React, { useState, useEffect, useContext, useRef} from "react";
import uuid from "react-uuid";
import ProcessComponent from "./ProcessComponent";

import { clickActions } from "../../../store/click-slice";

import {useSelector, useDispatch} from "react-redux";
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import { appActions } from "../../../store/app-slice";
import WasteComponent from "./WasteComponent";

export default function Processes(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nProcesses = useSelector(state=>state.app.nProcesses)
    const nEditions = useSelector(state=>state.app.nEditions)

    const dispatch = useDispatch()

    const [contents, setContents] = useState()

    useEffect(() => {
        setContents(
            <div
                id = "all-processes-container"
                style = {{"transform": "scale(" + props.projectObject.renderSettings.scaleLevel + ")"}}
                ref={props.parentRef}>
            
            {Object.entries(props.projectObject.processes).map(([key, item]) => {
                if (key.includes("wasteComponent")){
                    return (
                        <WasteComponent
                            key = "wasteComponent"
                            processInfo = {props.projectObject.processes["wasteComponent"]}
                            {...props}/>
                    )
                } else {
                    return (
                        <ProcessComponent
                            key = {item.id_}
                            processInfo = {item}
                            {...props}/>
                    )
                }
            })}
            </div>
        )
        dispatch(appActions.addNEditionsArrows())
    }, [nProcesses, nEditions])
    
    return (
        <>
            {contents}
        </>
    )
}