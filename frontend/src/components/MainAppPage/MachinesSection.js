import React, { useState, useEffect, useContext} from "react";

export default function MachinesSection(){

    const [machines, setMachines] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        fetch("http://127.0.0.1:8000/api/plants/")
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setMachines(JSON.stringify(data))
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])
    
    return (
        <div id='machines-section'>
            <h4>Machine Section</h4>
            <p>{machines}</p>
        </div>
    )
}