import React, { useState, useEffect, useContext} from "react";
import ProjectSettingsSection from "./ProjectSettingsSection";
import MachinesSettingsSection from "./MachinesSettingsSection";

export default function LeftSidebar(props){
    
    return (
        <div id='left-sidebar'>
            <ProjectSettingsSection {...props}/>
            <MachinesSettingsSection {...props}/>
        </div>
    )
}