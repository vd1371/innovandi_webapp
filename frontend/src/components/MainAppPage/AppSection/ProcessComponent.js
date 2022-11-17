
import React, { useState, useEffect, useRef} from "react";

export default function ProcessComponent(props){

    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [props.appEditable])

    const handleRemoveProcess = () => {props.removeProcess(props.processInfo.id_)}
    const handleJustifyClick = () => {
        props.handleJustifyClick(props.processInfo.id_)
    }

    const handleContents = () => {
        return (
            <div className="process-container">
                {props.appEditable && 
                <button 
                    className="fa-minus fa-solid delete-button fa-beat-fade"
                    onClick={handleRemoveProcess}>
                </button>}

                <button 
                    className="app-button"
                    onClick={handleJustifyClick}>
                    {props.processInfo.processName}
                </button>

                <i className='fas fa-arrow-down' style={{"fontSize":'24px'}}></i>
            </div>
        )
    }

    return (
        <>
            {contents}
        </>
        
    )
    
}