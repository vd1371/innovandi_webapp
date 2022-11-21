import React from "react";

import {signInWithEmailAndPassword } from "firebase/auth";
import auth from './firebaseAuth';

export default function handleSignin (setMessage) {

    const data = document.getElementById("registration-form")
    const form_data = new FormData(event.target);
    event.preventDefault()

    const email = form_data.get("email")
    const password = form_data.get("password")

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setMessage("Sccuessful Login");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
    });

}