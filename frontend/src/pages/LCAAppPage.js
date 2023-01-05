import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";


import {LeftSidebar} from "../features/LCCA"
import {AppIsLoading} from "../features/LCCA"
import {Processes} from "../features/LCCA"
import {AppTopPane} from "../features/LCCA"
import {Arrows} from "../features/LCCA"
import {Results} from "../features/LCCA"
import {AppNotification} from "../features/LCCA"

import projectClass from "../projectObject/projectClass";

import { appActions } from "../store/app-slice";

export default function LCAAppPage(props){

    const nProcesses = useSelector(state=>state.app.nProcesses)
    const nEditions = useSelector(state=>state.app.nEditions)
    const showResults = useSelector(state=>state.click.showResults)
    const appLoadingShow = useSelector(state=>state.app.appLoadingShow)
    const dispatch = useDispatch()

    const parentRef = useRef()

    const projectObject = useRef()
    const allArrowPointsRefs = useRef({})
    const [contents, setContents] = useState()

    useEffect(() => {
        projectObject.current = new projectClass()
        // projectObject.current.flushProject()
        if (localStorage.getItem("tmpProject")){
            projectObject.current.loadFromLocalStorage()
            dispatch(appActions.updateNProcesses(Object.keys(projectObject.current).length))
        }
    }, [])

    useEffect(() => {
        console.log("Trying to render the LCA app")
        setContents(
            <>
                <AppNotification />
                <div id="mainapp-container">
                    <LeftSidebar projectObject = {projectObject.current}/>
                    <div id="the-app-wrapper">
                        <AppTopPane projectObject = {projectObject.current}/>

                        {!showResults &&
                        <>
                        <div id = "the-app">
                            <Processes
                                projectObject = {projectObject.current}
                                allArrowPointsRefs = {allArrowPointsRefs.current}
                                parentRef = {parentRef.current}/>
                            <AppIsLoading />
                        </div>
                        {!appLoadingShow &&
                        <Arrows
                            projectObject = {projectObject.current}
                            allArrowPointsRefs = {allArrowPointsRefs.current}/>}
                        </>}
                        
                        {showResults &&
                        <div id = "results-container">
                            <Results projectObject = {projectObject.current}/>
                        </div>}

                    </div>
                </div>
            </>
        )
    }, [nProcesses, nEditions])
    
    return (
        <>
            {contents}
        </>
    )
}