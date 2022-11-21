import React, {useState, useEffect, useRef} from "react";
import LeftSidebar from "../LeftSideBar/LeftSideBar";
import RunAnalysisButton from "../RunAnalysisButton";
import AddProcessButton from "./AddProcessButton";
import uuid from 'react-uuid';
import Processes from "../AppSection/Processes";
import AppTopPane from "./AppTopPane";

export default function MainAppPage(){

    const [analysisDone, setAnalysisDone] = useState(false)
    const [results, setResults] = useState("")
    const [activeComponent, setActiveComponent] = useState()
    const [activeSection, setActiveSection] = useState("project")
    const [nProcesses, setNProcesses] = useState(0)
    const [nEditions, setNEditions] = useState(0)
    const [appEditable, setAppEditable] = useState(false)
    
    
    var justifyActive = useRef();
    const projectInfo = useRef({
        projectName: "MyAwesomeProject",
        workingHours: 0,
        workingDaysPerYear: 0
    })
    const constructionWasteComposition = useRef({})
    const processes = useRef([])


    const handleJustifyClick = (value) => {
        if (value === justifyActive.current) {
            justifyActive.current = null;
        } else{
            justifyActive.current = value;
        }
        setActiveSection("process")
        setActiveComponent(justifyActive.current)
    }

    const updateNEditions = () => {setNEditions(nEditions + 1)}

    const addProcess = () => {

        const processInfo = {
            id_ : uuid(),
            processName: "MyAwesomeProcess",
            outboundFlows: [],
            inboundFlows: [],
            inputs: {},
            emissions: {
                1 : {"name": "N/A", "basedOn": "N/A", "rate": 0}
            }
        }
        processes.current = [...processes.current, processInfo]
        setNProcesses(processes.current.length)
    }

    const removeProcess = (id) => {
        let new_processes = []
        for (var [index, process] of processes.current.entries()){
            if (process.props.id_ === id){
                new_processes = [...processes.current.slice(0, index),
                                    ...processes.current.slice(index+1)]
            }
        }
        processes.current = [...new_processes]
        setNProcesses(processes.current.length)
    }

    const handleResults = () => {
        if (!analysisDone){
            setResults(<p>Waiting to be filled</p>)
        } else {
            setResults(<p>The results to be shown</p>)
        }
    }

    const handleRunBtnClick = () => {
        setAnalysisDone(true)
        handleResults()
    }
    
    return (
        <div>
            
            <div id="mainapp-container">
                <LeftSidebar 
                    processes = {processes.current}
                    constructionWasteComposition = {constructionWasteComposition.current}
                    activeComponent = {activeComponent}
                    activeSection = {activeSection}
                    setActiveSection = {setActiveSection}
                    projectInfo = {projectInfo.current}
                    updateNEditions = {updateNEditions}/>
            
                <div id = "the-app">
                    <AppTopPane 
                        appEditable = {appEditable}
                        setAppEditable = {setAppEditable}/>
                    <Processes 
                        processes = {processes.current}
                        nProcesses = {nProcesses}
                        nEditions = {nEditions}
                        removeProcess = {removeProcess}
                        handleJustifyClick = {handleJustifyClick}
                        appEditable = {appEditable}/>
                    <AddProcessButton addProcess = {addProcess}/>
                    <RunAnalysisButton handler = {handleRunBtnClick} />
                </div>

            </div>

        </div>
        
        
    )
}