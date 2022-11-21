import React, { useState, useEffect, useContext} from "react";

import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../store/click-slice";

export default function EditButton({targetComponent, handleClick}){

    const editableComponent = useSelector(state=>state.click.editableComponent)
    
    if (editableComponent === targetComponent){
        return (
            <button 
                className="fa-solid fa-save toppane-button fa-fade"
                onClick={handleClick}>
            </button>
        )
    } else {
        return (
            <button 
                className="fa-solid fa-pen-to-square toppane-button"
                onClick={handleClick}>
            </button>
        )
    }
}