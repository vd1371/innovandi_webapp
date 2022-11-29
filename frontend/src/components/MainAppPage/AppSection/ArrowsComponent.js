import React, {useState, useEffect} from "react";
import Xarrow from 'react-xarrows';
import ProcessSettingsSection from "../LeftSideBar/ProcessSettingsSection";


import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";

export default function ArrowComponent(props){
    
    const [contents, setContents] = useState()

    const editableComponent = useSelector(state=>state.click.editableComponent)
    const nEditions = useSelector(state=>state.app.nEditions)
    const nEditionsArrows = useSelector(state=>state.app.nEditionsArrows)
    const activeComponent = useSelector(state => state.click.activeComponent)

    const dispatch = useDispatch()

    useEffect (() => {
        setContents(
            <span
                onClick = {handleClick}
                className = {(editableComponent === "app")? "fa-fade" : null}>
                <Xarrow
                    start={props.start}
                    end={props.end}
                    headSize = {4}
                    strokeWidth = {(activeComponent === props.arrowId)? 5 : 3}
                    color = { (editableComponent === "app")? "red": "#C19A6B"}
                />
            </span>
        )
    }, [editableComponent, nEditions, activeComponent, nEditionsArrows])

    const handleClick = () => {

        if (editableComponent === "app") {
            props.projectObject.deleteFlow(props.arrowId)
            dispatch(appActions.addNEditionsArrows())
        } else {
            dispatch(clickActions.setActiveComponent(props.arrowId))
            dispatch(clickActions.setActiveSection("flow"))
        }
    }

    return (
        <>
            {contents}
        </>
    )
}