import React, { useState, useEffect, useContext} from "react";

export default function RunAnalysisButton({handler}){
    
    return (
        <div id='run-btn-container'>
            <button 
                type="button"
                className="btn btn-primary"
                id="btn-run-analysis"
                onClick={handler}>
                    Run
            </button>
        </div>
    )
}