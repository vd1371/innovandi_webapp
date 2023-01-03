import React, { useState, useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "store/app-slice";
import { clickActions } from "store/click-slice";

export default function ResultsNavigateButton(props){

    const showResults = useSelector(state=>state.click.showResults)
    const dispatch = useDispatch()

    const handleClick = () => {
        if (showResults){
            dispatch(appActions.setAppLoading(true))
        }
        dispatch(clickActions.switchShowResults())
        dispatch(appActions.addNEditions())
    }

    return (
        <button
            type="button"
            className = "fa-solid toppane-button"
            onClick={handleClick}>
            {showResults? "Edit": "Results"}
        </button>
    )
    
}