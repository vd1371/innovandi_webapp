import React, { useState, useEffect, useContext} from "react";
import ProcessComponent from "./ProcessComponent";
import uuid from 'react-uuid';

export default function AddProcessButton(props){

    const handler = () => {
        const id = uuid()
        props.addProcess(<ProcessComponent
                    id_ = {id}
                    key = {id}
                    removeProcess = {props.removeProcess}
                    handleJustifyClick = {props.handleJustifyClick}/>)
    }

    return (
        <button
            type="button"
            key = "0"
            className = "app-button"
            id = 'empty-process-button'
            onClick={handler}>
            +
        </button>
        
    )
}