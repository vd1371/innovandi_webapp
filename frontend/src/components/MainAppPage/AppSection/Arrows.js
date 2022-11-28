import React from "react";
import ArrowComponent from "./ArrowsComponent";

export default function Arrows(props){
    return (
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
            })
        }
        </>
    )
}