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
import MainAppPage from "./MainAppPage/MainAppPage";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./Navbar/Navbar";
import auth from "./SignInPage/firebaseAuth";
import isUserLoggedIn from "./SignInPage/IsUserLoggedIn";
import UserContext from "./SignInPage/UserContext"

export default function HomePage() {
    const { height, width } = useWindowDimensions();
    const [loggedIn, setLoggedIn] = useState(isUserLoggedIn());

    useEffect(() => {

        auth.onAuthStateChanged(async (user) => {
            if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            window.localStorage.setItem("isLoggedIn", true)
            // ...
            } else {
            // User is signed out
            // ...
            window.localStorage.setItem("isLoggedIn", false)
            }
        });
    
    });

    if (width < 1200) {
        return (<ScreenIsSmallPage />);
    } else {
        return (
            <UserContext.Provider value = {{loggedIn, setLoggedIn}}>
                <Router>
                <Navbar />
                <Routes>
                    <Route exact path = '/' element={<LandingPage />}/>
                    <Route path = "/signin" element = {<SignInPage />} />
                    <Route path = "/change_password" element = {<ChangePasswordPage />} />
                    <Route path = "/app" element = {<PrivateRoute>
                                                        <MainAppPage />
                                                    </PrivateRoute>} />
                    <Route path = "/*" element = {<PageNotFound />} />
                </Routes>
                </Router>
            </UserContext.Provider>
            
        );
    }
}