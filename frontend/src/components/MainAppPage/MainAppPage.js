import React, {useState, useEffect, useRef} from "react";
import LeftSidebar from "./LeftSideBar";
import RunAnalysisButton from "./RunAnalysisButton";
import AddProcessButton from "./AddProcessButton";

export default function MainAppPage(){

    const [analysisDone, setAnalysisDone] = useState(false)
    const [results, setResults] = useState("")
    const [activeComponent, setActiveComponent] = useState()
    var justifyActive = useRef();

    const projectInfo = useRef({
        name: "unkown",
        workingHours: 0,
        workingDaysPerYear: 0
    })
    var processes = useRef([])
    const [contents, setContents] = useState()
    const [nProcesses, setNProcesses] = useState(0)

    useEffect (() => {
        console.log("Hello")
    }, [activeComponent])

    useEffect (() => {
        if (processes.current.length === 0){
            processes.current = [<AddProcessButton
                            key = "0"
                            id_ = "0"
                            addProcess = {addProcess}
                            removeProcess = {removeProcess}
                            handleJustifyClick = {handleJustifyClick}/>]
        }
        setNProcesses(processes.current.length)
        setContents([...processes.current.slice(1), processes.current[0]])
    }, [nProcesses])

    const handleJustifyClick = (value) => {
        if (value === justifyActive.current) {
            justifyActive.current = null;
        } else{
            justifyActive.current = value;
        }
        setActiveComponent(justifyActive.current)
    }

    const addProcess = (process) => {
        processes.current = [...processes.current, process]
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
            setResults(
            <>
                <p>The results to be shown</p>
            </>)
        }
    }

    const handleRunBtnClick = () => {
        setAnalysisDone(true)
        handleResults()
    }
    
    return (
        <div id="mainapp-container">
            
            <LeftSidebar 
                processes = {processes.current}
                activeComponent = {justifyActive.current}/>
            
            <div id = "the-app">
                {contents}
                <RunAnalysisButton handler = {handleRunBtnClick} />
            </div>

        </div>
        
    )
}