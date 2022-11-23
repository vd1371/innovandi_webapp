import React, {useState, useEffect, useRef} from "react";
import LeftSidebar from "../LeftSideBar/LeftSideBar";
import Processes from "../AppSection/Processes";
import AppTopPane from "./AppTopPane";

import {useSelector, useDispatch} from "react-redux";
import AppNotification from "./AppNotification";

export default function MainAppPage(){

    const nProcesses = useSelector(state=>state.app.nProcesses)
    const scaleLevel = useSelector(state=>state.app.scaleLevel)
    const dispatch = useDispatch()
    
    return (
        <>
            <AppNotification />
            <div id="mainapp-container">
                <LeftSidebar />
                <div id = "the-app">
                    <AppTopPane />
                    <Processes />                        
                </div>
            </div>
        </>
    )
}