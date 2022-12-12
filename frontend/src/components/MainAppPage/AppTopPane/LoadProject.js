import React, { useState, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { appActions } from "../../../store/app-slice";

export default function LoadProject(props){

    const dispatch = useDispatch()

    const hiddenFileInput = React.useRef(null);
  
    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = e => {
        e.preventDefault()
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = e => {
            let projectFile = e.target.result
            props.projectObject.fromJSON(projectFile)
            dispatch(appActions.addNEditions())
        }
        dispatch(appActions.setAppLoading(true))
        e.target.value = ""

    };

    return (
        <>
            <button
                className = "fa-solid toppane-button"
                onClick={handleClick}>
                Upload
            </button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
            />
        </>
    )
    
}