import React, {Component} from "react";
import LeftSidebar from "./LeftSideBar";
import TheApp from "./TheApp";

export default function MainAppPage(){
    
    return (
        <div id="mainapp-container">
            <LeftSidebar />
            <TheApp />
        </div>
        
    )
}