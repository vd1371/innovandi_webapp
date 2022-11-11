import React from "react"
import LandingPageMainButton from "./LandingPageMainButton"

export default function TopSection(){

    return (
        <div className="section" id = "first-section">

        <hr id="first-section-top-divider"></hr>
        <h1 className="text-center first-section">Innovandi_CP11 Project</h1>
        <h3 className="text-center first-section">LCA/LCCA for Recycling Concrete Plants and Products</h3> 
        <hr id="first-section-divider"></hr>
        <LandingPageMainButton />

        </div>
    )
    
}