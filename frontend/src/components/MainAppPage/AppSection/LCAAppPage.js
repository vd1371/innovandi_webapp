import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";


import LeftSidebar from "../LeftSideBar/LeftSideBar";
import Processes from "./Processes";
import AppTopPane from "./AppTopPane";
import Arrows from "./Arrows"
import AppNotification from "./AppNotification";
import projectClass from "../../../projectObject/projectClass";
import { appActions } from "../../../store/app-slice";
import {useXarrow} from 'react-xarrows';

export default function LCAAppPage(props){

    const nProcesses = useSelector(state=>state.app.nProcesses)
    const nEditions = useSelector(state=>state.app.nEditions)
    const nEditionsArrows = useSelector(state=>state.app.nEditionsArrows)
    const dispatch = useDispatch()
    const updateXarrow = useXarrow()

    const projectObject = useRef()
    const allArrowPointsRefs = useRef({})
    const [contents, setContents] = useState()

    useEffect(() => {
        projectObject.current = new projectClass()
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
                    <div id = "the-app">
                        <AppTopPane projectObject = {projectObject.current}/>
                        <Processes projectObject = {projectObject.current}
                                    allArrowPointsRefs = {allArrowPointsRefs.current}/>
                        <Arrows projectObject = {projectObject.current}
                                allArrowPointsRefs = {allArrowPointsRefs.current}/>
                    </div>
                </div>
            </>
        )
        updateXarrow()
    }, [nProcesses, nEditions])
    
    return (
        <>
            {contents}
        </>
    )
}