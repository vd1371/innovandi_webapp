import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";


import LeftSidebar from "../LeftSideBar/LeftSideBar";
import Processes from "./Processes";
import AppTopPane from "../AppTopPane/AppTopPane";
import Arrows from "./Arrows"
import AppNotification from "./AppNotification";
import projectClass from "../../../projectObject/projectClass";
import AppIsLoading from "./AppIsLoading";
import Results from "./Results";

import { appActions } from "../../../store/app-slice";

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
                        <Results projectObject = {projectObject.current}/>}

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