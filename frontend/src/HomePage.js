import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import SignInPage from "./pages/SignInPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import LCAAppPage from "./pages/MainAppPage/AppSection/LCAAppPage";

import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./layouts/Navbar";
import auth from "./features/authentication/firebaseAuth";
import { Toaster } from 'react-hot-toast';

import {useSelector, useDispatch} from "react-redux";

export default function HomePage(props) {
    
    const isLoggedIn = useSelector (state => state.auth.isLoggedIn)

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
    }, []);

    return (
        <Router>
        <Navbar />
        <Routes>
            <Route exact path = '/' element={<LandingPage />}/>
            <Route path = "/signin" element = {<SignInPage />} />
            <Route path = "/change_password" element = {<ChangePasswordPage />} />
            <Route path = "/app" element = {<PrivateRoute>
                                                <LCAAppPage hidden = {props.hidden}/>
                                            </PrivateRoute>} />
            {/* <Route path = "/*" element = {<PageNotFound />} /> */}
        </Routes>
        <Toaster position="bottom-right"/>
        </Router>
    );
}