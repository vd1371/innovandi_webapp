import React, { useState, useEffect, useContext} from "react";

export default function MachinesSettingsSection(props){

    const getPropsOfActiveComponent = () => {
        if (props.activeComponent){
            for (var process of props.processes){
                if (process.props.id_ === props.activeComponent){
                    return process.props
                }
            }
        }
        return null
    }

    const getSettingsTable = () => {
        
        let processProps = getPropsOfActiveComponent()
        console.log(processProps)
        if (processProps){
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{processProps.id_}</td>
                        </tr>
                    </tbody>

                </table>
            )
        } else {
            return <div>Settings Section</div>
        }
        

    }
    
    return (
        <div id='machines-settings-section'>
            {getSettingsTable()}
        </div>
    )
}