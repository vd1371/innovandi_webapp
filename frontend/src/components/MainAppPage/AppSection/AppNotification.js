import React, { useState, useEffect, useRef} from "react";
import EditButton from "../EditButton";
import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";

export default function AppNotification(props){

    const clickNotification = useSelector((state) => state.click.clickNotification)
    const dispatch = useDispatch()
    const [contents, setContents] = useState()

    useEffect(() => {
        setContents(handleContents())
    }, [clickNotification])

    const handleClick = () => {
        dispatch(clickActions.clearClickNotification())
        setContents(handleContents())
    }

    const handleContents = () => {
        if (clickNotification){
            return (
                <div id="notification-pane">
                    <button className="fas fa-window-close"
                        onClick={handleClick}>
                    </button>
                    <div className="filler"></div>
                    {clickNotification}
                    <div className="filler"></div>
                </div>
            )
        } else {
            return (<></>)
        }
    }
    
    return (
        <>
            {contents}
        </>
    )
}