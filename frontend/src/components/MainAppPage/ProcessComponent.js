
import React, { useState, useEffect, useContext} from "react";

export default function ProcessComponent(props){

    const [name, setName] = useState(props.id_)
    const [outboundFlows, setOutboundFlows] = useState([])
    const [inboundFlows, setInboundFlows] = useState([])
    const [id_, setId_] = useState(props.id_)

    const handleRemoveProcess = () => {
        props.removeProcess(id_)
    }

    const handleJustifyClick = () => {
        props.handleJustifyClick(id_)
    }

    return (
        <div className="process-container">
            
            <button 
                className="fa-minus fa-solid delete-button"
                onClick={handleRemoveProcess}>
            </button>

            <button 
                className="app-button"
                onClick={handleJustifyClick}>
                {name}
            </button>

            <i className='fas fa-arrow-down' style={{"fontSize":'24px'}}></i>
        </div>
    )
    
}