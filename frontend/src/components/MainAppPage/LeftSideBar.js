import React, { useState, useEffect, useContext} from "react";
import MachinesSection from "./MachinesSection";
import MachinesSettingsSection from "./MachinesSettingsSection";

export default function LeftSidebar(){
    
    return (
        <div id='left-sidebar'>
            <MachinesSection />
            <MachinesSettingsSection />
        </div>
    )
}