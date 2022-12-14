import React from "react";

import IsRecpatchaChecked from './IsRecaptchaChecked';

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from './firebaseAuth';

export default function handleRegister (setMessage, event) {

    const data = document.getElementById("registration-form")
    const form_data = new FormData(event.target);
    event.preventDefault()

    const email = form_data.get("email")
    const password = form_data.get("password")
    const terms_checked = form_data.get("flexCheckRegister")
    
    if (!IsRecpatchaChecked()){
        setMessage("Please check the ReCaptcha")
    } else if (!terms_checked) {
        setMessage("Terms and Conditions are not accepted!")
    } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setMessage("Registration Successful")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorMessage);
            });
    }

}