import React, { useState, useEffect, useContext} from "react";
import ProjectSettingsSection from "./ProjectSettingsSection";
import ProcessSettingsSection from "./ProcessSettingsSection/ProcessSettingsSection";
import ConstructionWasteSection from "./ConstructionWasteSection";
import FlowSettingsSection from "./FlowSettingsSection";

import {
    Accordion,
    Box,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@material-ui/core";

export default function LeftSidebar(props){

    return (
        <div id='left-sidebar'>
            <ProjectSettingsSection {...props}/>
            <ConstructionWasteSection {...props}/>
            <ProcessSettingsSection {...props}/>
            <FlowSettingsSection {...props}/>
        </div>
    )
}