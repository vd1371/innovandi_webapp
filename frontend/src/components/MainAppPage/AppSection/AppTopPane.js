import React, { useState, useEffect, useRef} from "react";
import EditButton from "../EditButton";

export default function AppTopPane(props){

    const [contents, setContents] = useState()

    useEffect (() => {
        setContents(handleContents())
    }, [props.appEditable])

    const handleEditable = () => {
        props.setAppEditable(!props.appEditable)
    }

    const handleContents = () => {
        return (
            <>  
                <EditButton
                    editable={props.appEditable}
                    handleEditable={handleEditable}/>
                <button className="fa-plus fa-solid toppane-button"></button>
            </>
        )
    }

    return (
        <div id="app-top-pane">
            {contents}
        </div>
        
    )
    
}