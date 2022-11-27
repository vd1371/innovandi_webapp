import React, { useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../store/app-slice";
import { clickActions } from "../../../store/click-slice";

export default function ArrowPoint(props){

    const [contents, setContents] = useState()

    const arrowStartingPoint = useSelector(state => state.click.arrowStartingPoint)
    const arrowStartingProcess = useSelector(state => state.click.arrowStartingProcess)
    const refPoint = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!props.allArrowPointsRefs[props.pointId]){
            props.allArrowPointsRefs[props.pointId] = refPoint
        }
        setContents (
            <span
                key = {props.pointId}
                id = {props.pointId}
                ref = {props.allArrowPointsRefs[props.pointId]}
                className="dot"
                onClick={handleClick}
                style = {{left: props.coord[0] + "px",
                        top: props.coord[1] + "px",
                        backgroundColor: (
                            (props.pointId === arrowStartingPoint) ?
                            "#ADD8E6" :
                            "#bbb")}}>
            </span>
        )
    }, [arrowStartingPoint,
        arrowStartingProcess])

    const handleClick = () => {
        if (!props.processInfo.isNew || props.pointId.includes("wasteComponent")){
            let successful = null
            if ((arrowStartingProcess !== props.processInfo.id_) &&
                (arrowStartingPoint !== props.pointId) &&
                arrowStartingPoint){
                    successful = props.projectObject.addArrows(arrowStartingPoint,
                                                        props.pointId,
                                                        arrowStartingProcess,
                                                        props.processInfo.id_)
            }

            if (!successful &&
                arrowStartingPoint &&
                arrowStartingPoint !== props.pointId){
                dispatch(clickActions.setClickNotification(
                    "Only one arrow can be added between two processes"))
            }
            dispatch(clickActions.setArrowPointInfo([props.processInfo.id_, props.pointId]))
        }
        
    }

    return (
        <>
            {contents}
        </>
    )
    
}