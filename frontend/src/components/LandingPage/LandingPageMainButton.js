import React, { useState, Component} from "react";
import isUserLoggedIn from "../SignInPage/IsUserLoggedIn";

export default function LandingPageMainButton(){

    const [loggedIn, setLoggedIn] = useState(isUserLoggedIn())
    
    if (loggedIn === true) {
        return (
            <a href="/app-page" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
            Start Using the App
            </a>
        )
            
    } else {
        return (
            <a href="/signin" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
            Sign In to Use the App
            </a>
        )
    }
}