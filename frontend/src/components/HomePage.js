import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import useWindowDimensions from "./UseWindowsDimensions";

import ScreenIsSmallPage from "./ScreenIsSmallPage";
import PageNotFound from "./PageNotFound";
import LandingPage from "./LandingPage/LandingPage";
import SignInPage from "./SignInPage/SignInPage";
import ChangePasswordPage from "./SignInPage/ChangePasswordPage";

export default function HomePage() {
    const { height, width } = useWindowDimensions();

    if (width < 1200) {
        return (<ScreenIsSmallPage />);
    } else {
        return (
            <Router>
                <Routes>
                    <Route exact path = '/' element={<LandingPage />}/>
                    <Route path = "/signin" element = {<SignInPage />} />
                    <Route path = "/change_password" element = {<ChangePasswordPage />} />
                    <Route path = "/*" element = {<PageNotFound />} />
                </Routes>
            </Router>
        );
    }
}