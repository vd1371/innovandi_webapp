import React, { useState, useEffect, useContext, useRef} from "react";
import uuid from "react-uuid";
import ProcessComponent from "./ProcessComponent";

export default function Processes(props){

    const [contents, setContents] = useState()

    useEffect(() => {
        console.log(props.appEditable)
        setContents(
            <>
                {
                    props.processes.map(item => {
                        return (
                            <ProcessComponent
                                key = {uuid()}
                                processInfo = {item}
                                removeProcess = {props.removeProcess}
                                handleJustifyClick = {props.handleJustifyClick}
                                appEditable = {props.appEditable}/>
                        )
                    })
                }
            </>
        )
    }, [props.nEditions, props.nProcesses, props.appEditable])
    
    return (
        <>
            {contents}
        </>
    )
}