import React, { useState, useEffect, useContext} from "react";
import ProjectSettingsSection from "./ProjectSettingsSection";
import ProcessSettingsSection from "./ProcessSettingsSection";
import ConstructionWasteSection from "./ConstructionWasteSection";

export default function LeftSidebar(props){
    
    return (
        <div id='left-sidebar'>
            <ProjectSettingsSection {...props}/>
            <ConstructionWasteSection {...props}/>
            <ProcessSettingsSection {...props}/>
        </div>
    )
}