import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import isUserLoggedIn from "../SignInPage/IsUserLoggedIn";
import UserContext from "../SignInPage/UserContext";

export default function LandingPageMainButton(){

    const {loggedIn, setLoggedIn} = useContext(UserContext)

    useEffect(() => {
        setLoggedIn(isUserLoggedIn())
    }, [loggedIn]);

    if (loggedIn === true) {
        return (
            <Link to="/app" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
            Start Using the App
            </Link>
        )
            
    } else {
        return (
            <Link to="/signin" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
            Sign In to Use the App
            </Link>
        )
    }
}