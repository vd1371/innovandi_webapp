import React, { useState, useEffect, useRef} from "react";

export default function DownloadProject(props){

    const handleDownloadProject = (e) => {
        e.preventDefault()

        const blob = new Blob([props.projectObject.toJSON()],
                                { type: "application/json"})

        const a = document.createElement('a')
        a.download = props.projectObject.projectInfo.projectName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
    }

    return (
        <button
            type="button"
            className = "fa-solid toppane-button"
            onClick={handleDownloadProject}>
            Download
        </button>
    )
    
}