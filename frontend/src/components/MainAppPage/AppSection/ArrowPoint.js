import React, { useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";

export default function ArrowPoint(props){

    const [contents, setContents] = useState()

    const arrowStartingPoint = useSelector(state => state.click.arrowStartingPoint)
    const arrowStartingProcess = useSelector(state => state.click.arrowStartingProcess)
    const dispatch = useDispatch()

    const pointId = props.processId + "-" + props.index

    useEffect(() => {
        setContents (
            <span
                key = {pointId}
                className="dot"
                onClick={handleClick}
                style = {{left: props.coord[0] + "px",
                        top: props.coord[1] + "px",
                        backgroundColor: ((pointId === arrowStartingPoint) ? "#ADD8E6" : "#bbb")}}>
            </span>
        )
    }, [arrowStartingPoint, arrowStartingProcess])

    const handleClick = () => {
        if ((arrowStartingProcess !== props.processId) &&
            (arrowStartingPoint !== pointId) &&
            arrowStartingPoint){
                console.log("Create a new arrow")
        }
        dispatch(clickActions.setArrowPointInfo([props.processId, pointId]))
    }

    return (
        <>
            {contents}
        </>
    )
    
}