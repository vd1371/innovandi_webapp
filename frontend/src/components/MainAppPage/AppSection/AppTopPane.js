import React, { useState, useEffect, useRef} from "react";
import EditButton from "../EditButton";
import {useSelector, useDispatch} from "react-redux";
import { actions } from "../../../store";

export default function AppTopPane(props){

    const clickedElement = useSelector((state) => state.clickedElement)
    const dispatch = useDispatch()
    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [props.appEditable])

    const handleEditable = () => {
        dispatch (actions.handleClickedElement("TopPane"))
        props.setAppEditable(!props.appEditable)
    }

    const handleContents = () => {
        return (
            <>  
                <EditButton
                    editable={props.appEditable}
                    handleEditable={handleEditable}/>
                <button className="fa-plus fa-solid toppane-button"></button>
                <p>{clickedElement}</p>
            </>
        )
    }

    return (
        <div id="app-top-pane">
            {contents}
        </div>
        
    )
    
}