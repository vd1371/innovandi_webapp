import React, {useEffect, useState} from "react";
import RunAnalysisButton from "./RunAnalysisButton";

// import inp from "../../../static/images/inp.png";

export default function TheApp(){
    
    const [analysisDone, setAnalysisDone] = useState(false)
    const [results, setResults] = useState("")

    useEffect (() => {
        handleResults()
    }, [])

    const handleResults = () => {
        if (!analysisDone){
            setResults(<img src="../../../static/images/inp.png"></img>)
        } else {
            setResults(
            <>
                <img src="../../../static/images/out1.png"></img>
                <img src="../../../static/images/out2.png"></img>
                <img src="../../../static/images/out3.png"></img>
            </>)
        }
    }

    const handleRunBtnClick = () => {
        setAnalysisDone(true)
        handleResults()
    }

    return (
        <div id = "the-app">
            <h3>This is the main app page</h3>
            {results}
            <div id='run-btn-container'>
                <button 
                    type="button"
                    className="btn btn-primary"
                    id="btn-run-analysis"
                    onClick={handleRunBtnClick}>
                        Run
                </button>
            </div>
        </div>
    )
}