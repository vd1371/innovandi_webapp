import React from "react";
import Xarrow from 'react-xarrows';
import ProcessSettingsSection from "../LeftSideBar/ProcessSettingsSection";


import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import { appActions } from "../../../store/app-slice";

export default function ArrowComponent(props){

    const dispatch = useDispatch()
    const activeComponent = useSelector(state => state.click.activeComponent)

    const handleClick = () => {
        dispatch(clickActions.setActiveComponent(props.arrowId))
        dispatch(clickActions.setActiveSection("flow"))
    }

    return (
        <span
            onClick = {handleClick}
            className = {(activeComponent === props.arrowId)? "fa-fade" : null}>
            <Xarrow
                start={props.start}
                end={props.end}
                headSize = {4}
                strokeWidth = {3}
                color = {(activeComponent === props.arrowId)? "red" : "#C19A6B"}
            />
        </span>
    )
}