import React, { useState, useEffect, useRef} from "react";
import EditButton from "../EditButton";
import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import RunAnalysisButton from "../RunAnalysisButton";

export default function AppTopPane(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)

    const dispatch = useDispatch()
    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [editableComponent])

    const handleContents = () => {
        return (
            <>  
                <button type="button" className="fa-play fa-solid toppane-button"></button>
                <button type="button" className="fa-stop fa-solid toppane-button"></button>
                <button type="button" className="fa-search-plus fa-solid toppane-button"></button>
                <button type="button" className="fa-search-minus fa-solid toppane-button"></button>
                <EditButton
                    targetComponent={'app'}
                    handleClick = {()=>dispatch(clickActions.setEditableComponent("app"))}/>
            </>
        )
    }

    return (
        <div id="app-top-pane">
            {contents}
        </div>
        
    )
    
}