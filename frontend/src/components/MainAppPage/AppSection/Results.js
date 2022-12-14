import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function Results(props){

    const nProcesses = useSelector(state=>state.app.nProcesses)
    const nEditions = useSelector(state=>state.app.nEditions)
    const dispatch = useDispatch()
    
    return (
        <div>
            {JSON.stringify(props.projectObject.results)}
        </div>
    )
}