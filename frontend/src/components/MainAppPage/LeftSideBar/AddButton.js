import React, { useState, useEffect, useContext, useRef} from "react";


export default function AddButton(props){

    return (
        <button
            type="button"
            className = "fa-solid fa-plus add-button"
            onClick={props.handler}>
        </button>
    )
}