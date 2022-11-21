import React, { useState, useEffect, useContext, useRef} from "react";
import uuid from "react-uuid";
import ProcessComponent from "./ProcessComponent";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import projectObject from "../../../projectObject/projectObject";

export default function Processes(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nProcesses = useSelector(state=>state.app.nProcesses)

    const [contents, setContents] = useState()

    useEffect(() => {
        setContents(
            <>
            {
                projectObject.processes.map(item => {
                    return (
                        <ProcessComponent
                            key = {uuid()}
                            id_ = {item.id_}
                            processName = {item.processName}/>
                    )
                })
            }
            </>
        )
    }, [activeComponent, nProcesses, editableComponent])
    
    return (
        <>
            {contents}
        </>
    )
}