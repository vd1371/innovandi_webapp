import React, {useState, useEffect, useRef} from "react";
import LeftSidebar from "../LeftSideBar/LeftSideBar";
import RunAnalysisButton from "../RunAnalysisButton";
import AddProcessButton from "./AddProcessButton";
import uuid from 'react-uuid';
import Processes from "../AppSection/Processes";
import AppTopPane from "./AppTopPane";
import AppNotification from "./AppNotification";

import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../store/app-slice";

import projectObject from "../../../projectObject/projectObject";

export default function MainAppPage(){

    const nProcesses = useSelector(state=>state.app.nProcesses)
    const dispatch = useDispatch()
    
    return (
        <div>
            <AppNotification />

            <div id="mainapp-container">
                <LeftSidebar />

                <div id = "the-app">
                    <AppTopPane />
                    <Processes />
                    <AddProcessButton />
                </div>

            </div>

        </div>
        
        
    )
}