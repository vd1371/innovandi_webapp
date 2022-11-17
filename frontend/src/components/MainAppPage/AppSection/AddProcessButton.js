import React, { useState, useEffect, useContext, useRef} from "react";


export default function AddProcessButton(props){

    return (
        <button type="button" key = "0" className = "app-button"
                id = 'empty-process-button' onClick={props.addProcess}>
        +
        </button>
    )
}