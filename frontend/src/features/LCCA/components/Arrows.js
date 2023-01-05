import React, { useEffect, useState } from "react";
import ArrowComponent from "../sections/AppSection/ArrowsComponent";

import {useSelector, useDispatch} from "react-redux";

export default function Arrows(props){

    const activeComponent = useSelector(state=>state.click.activeComponent)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const activeSection = useSelector(state=>state.click.activeSection)
    const nProcesses = useSelector(state=>state.app.nProcesses)
    const nEditions = useSelector(state=>state.app.nEditions)
    const nEditionsArrows = useSelector(state=>state.app.nEditionsArrows)

    const dispatch = useDispatch()

    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(
            <>
            {
            Object.keys(props.projectObject.flows).map((key, index) => {
                let pointer1 = props.allArrowPointsRefs[props.projectObject.flows[key]['start']]
                let pointer2 = props.allArrowPointsRefs[props.projectObject.flows[key]['end']]
                if (pointer1 && pointer2) {
                    return (
                        <ArrowComponent
                            key = {key}
                            arrowId = {key}
                            start={pointer1}
                            end={pointer2}
                            {...props}/>
                    )
                }  
            })}
            </>
        )

    }, [nEditions, nProcesses, nEditionsArrows, activeComponent])

    return (
        <>
            {contents}
        </>
    )
}