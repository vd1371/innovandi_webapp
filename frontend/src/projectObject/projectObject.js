import React from "react";

import uuid from "react-uuid";

const projectObject = {
    projectInfo : {
        projectName: "MyAwesomeProject",
        workingHours: 0,
        workingDaysPerYear: 0
    },
    constructionWasteComposition: {},
    processes: [],

    addProcess: function() {
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
        this.processes= [...this.processes, processInfo]
    },

    removeProcess: function(id) {
        let new_processes = []
        for (var [index, process] of this.processes.entries()){
            if (process.props.id_ === id){
                new_processes = [...this.processes.slice(0, index),
                                    ...this.processes.slice(index+1)]
            }
        }
        this.processes.current = [...new_processes]
    }
}

export default projectObject;