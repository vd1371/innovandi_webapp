import React, { useState, useEffect, useContext} from "react";
import MachinesSection from "./MachinesSection";
import MachinesSettingsSection from "./MachinesSettingsSection";
import RunAnalysisButton from "./RunAnalysisButton";

export default function LeftSidebar(){
    
    return (
        <div id='left-sidebar'>
            <MachinesSection />
            <MachinesSettingsSection />
            <RunAnalysisButton />
        </div>
    )
}