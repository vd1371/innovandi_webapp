import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import { appActions } from "store/app-slice";

export default function AppIsLoading(props){

    const appLoadingShow = useSelector(state=>state.app.appLoadingShow)
    const appLoadingWaiting = useSelector(state=>state.app.appLoadingWaiting)
    const dispatch = useDispatch()
    const updateXarrow = useXarrow()

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
        // After 3 seconds set the waiting value to false
        dispatch(appActions.setAppLoadingWaiting(false))
        }, 500 + Math.random()*1000)

        return () => {
        clearTimeout(timeId)
        }
    }, [appLoadingShow]);

    const handleClick = () => {
        dispatch(appActions.setAppLoadingShow(false))
        dispatch(appActions.addNEditions())
    }

    if (!appLoadingShow){
        return null
    }

    return (
        <div id = "app-is-loading">
            {appLoadingWaiting &&
            <h2>Loading</h2>
            }

            {!appLoadingWaiting &&
            <h2>Done</h2>
            }

        <br></br>
        <br></br>
        <i className={`fa-solid fa-sync fa-spin fa-10x ${(!appLoadingWaiting)? "hidden": null}`}></i>
        <br></br>
        <br></br>
        <button
            onClick={handleClick}
            className={`btn ${(appLoadingWaiting)? "btn-secondary" : "btn-success"} waiting-button`}
            disabled={appLoadingWaiting}>
            Go to the app
        </button>

        </div>
        
    )
}