import React from "react";
import Xarrow from 'react-xarrows';
import ProcessSettingsSection from "../LeftSideBar/ProcessSettingsSection";

export default function Arrows({projectObject, allArrowPointsRefs}){
    return (
        <>
        {
            Object.keys(projectObject.arrows).map((key, index) => {
                let pointer1 = allArrowPointsRefs[projectObject.arrows[key][0]]
                let pointer2 = allArrowPointsRefs[projectObject.arrows[key][1]]
                if (pointer1 && pointer2) {
                    return (
                        <Xarrow
                            key = {key}
                            start={pointer1}
                            end={pointer2}
                            headSize = {4}
                            strokeWidth = {3}
                            color = {"#C19A6B"}/>
                    )
                }  
            })
        }
        </>
    )
}