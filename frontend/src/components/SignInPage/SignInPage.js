import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import Footer from "../Footer";
import auth from './firebaseAuth';
import isUserLoggedIn from "../SignInPage/IsUserLoggedIn";
import google_provider from './auth_google_provider_create';
import IsRecpatchaChecked from './IsRecaptchaChecked';

import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import recaptcha_site_key from './recaptcha_site_key';

export default function SignInPage(){
    
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [message, setMessage] = useState('So Happy to See You Here');
    const [isHuman, setIsHuman] = useState(false)

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

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
        };

    const handleSignin = () => {

        const data = document.getElementById("registration-form")
        const form_data = new FormData(event.target);
        event.preventDefault()
    
        const email = form_data.get("email")
        const password = form_data.get("password")
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "../"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorMessage);
        });
    }

    const handleRegister = () => {
        
        const data = document.getElementById("registration-form")
        const form_data = new FormData(event.target);
        event.preventDefault()
    
        const email = form_data.get("email")
        const password = form_data.get("password")
        const terms_checked = form_data.get("flexCheckRegister")

        console.log(IsRecpatchaChecked())
        
        if (!IsRecpatchaChecked()){
            setMessage("Please check the ReCaptcha")
        } else if (!terms_checked) {
            setMessage("Terms and Conditions are not accepted!")
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    window.location.href = "../"
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage);
                });
        }
    }

    const handleGoogleSignin = () => {

        if (!IsRecpatchaChecked()){
            setMessage("Please check the ReCaptcha")
        } else {
            signInWithRedirect(auth, google_provider)
            getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("Here")
                window.location.href = "../"
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setMessage(errorMessage)
                // ...
            })
        }
    }

    const handleSignout = () => {
        auth.signOut()
        window.localStorage.setItem("isLoggedIn", false)
        window.location.href = "../signin"
    }

    if (isUserLoggedIn()) {
        return (
        
        <div className = 'full-page'>
            <div id='signin-container'>
                <h3>You are already singed in.</h3>
                <a href="../" className="btn btn-primary reg-button">Main Page</a>
                <button type="button" className="btn btn-primary reg-button" onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
        )

    } else {

        return (
        <div className = 'full-page'>
            <div id = "signin-container">
                <MDBContainer className="p-3 my-5 d-flex flex-column w-75">

                    <div className='d-flex justify-content-between mx-auto' style={{width: '50%'}}>

                    <button type="button" className="login-with-google-btn" onClick={handleGoogleSignin} >
                    Sign in with Google
                    </button>

                    </div>

                    <hr style={{height: "10%"}}></hr>

                    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                            Sign in
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            Register
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>

                        <div className="text-center mb-3">
                        <p>Sign in with:</p>
                        </div>
                        <form onSubmit={handleSignin} id = 'registration-form'>
                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' name='email' type='email'/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='password' type='password'/>

                            <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheckSignin' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="./change_password">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary reg-button">Sign in</button>
                        </form>

                    </MDBTabsPane>

                    <MDBTabsPane show={justifyActive === 'tab2'}>

                        <div className="text-center mb-3">
                        <p>Sign up with:</p>
                        </div>

                        <form onSubmit={handleRegister} id = 'registration-form'>
                            <MDBInput wrapperClass='mb-4' label='Email' name='email' id='email_for_reg' type='email'/>
                            <MDBInput wrapperClass='mb-4' label='Password' name='password' id='pass_for_reg' type='password'/>

                            <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheckRegister' id='flexCheckDefault' label='I have read and agree to the terms' />
                            </div>

                            <button type="submit" className="btn btn-primary reg-button">Sign up</button>
                        </form>

                    </MDBTabsPane>

                    </MDBTabsContent>

                    <div id = "signin-message"> {message} </div>
                    <br></br>
                    <div className='d-flex justify-content-between mx-auto'>
                        <form action="?" method="POST">
                            <div className="g-recaptcha"
                                data-sitekey={recaptcha_site_key}
                            ></div>
                        </form>
                    </div>

                </MDBContainer>
            </div>

        </div>

        

        )
    }
}