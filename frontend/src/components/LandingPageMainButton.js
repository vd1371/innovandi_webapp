import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import {useSelector} from "react-redux";

export default function LandingPageMainButton(){

    const isLoggedIn = useSelector (state => state.auth.isLoggedIn)

    if (isLoggedIn) {
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