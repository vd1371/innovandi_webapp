import React, { useState, useEffect, useContext, useRef} from "react";
import uuid from "react-uuid";
import ProcessComponent from "./ProcessComponent";

import { clickActions } from "../../../store/click-slice";

import {useSelector, useDispatch} from "react-redux";
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import { appActions } from "../../../store/app-slice";

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
            <>
            {
                props.projectObject.processes.map(item => {
                    return (
                        <ProcessComponent
                            key = {item.id_}
                            processInfo = {item}
                            {...props}/>
                    )
                })
            }
            </>
        )
        dispatch(appActions.addNEditionsArrows())
    }, [nProcesses, nEditions])
    
    return (
        <div id="all-processes-container">
            {contents}
        </div>
    )
}