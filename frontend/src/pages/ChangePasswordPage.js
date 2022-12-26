import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
}
from 'mdb-react-ui-kit';

import auth from '../features/authentication/firebaseAuth';
import IsRecpatchaChecked from '../features/recaptcha/IsRecaptchaChecked';
import recaptcha_site_key from '../features/recaptcha/recaptcha_site_key';

import { sendPasswordResetEmail } from 'firebase/auth';

export default function ChangePasswordPage(){
    const [message, setMessage] = useState('So Happy to See You Here');
    const [isSent, setIsSent] = useState(false)

    const handlePasswordChange = (event) => {
        
        const data = document.getElementById("registration-form")
        const form_data = new FormData(event.target);
        event.preventDefault()
    
        const email = form_data.get("email")

        if (!IsRecpatchaChecked()){
            setMessage("Please check the ReCaptcha")
        } else {
            sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage("Please check your email for further instructions")
                setIsSent(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorMessage)
            });
        }
    }

    if (isSent){
        return (
            <div className = 'full-page'>
                <div id = "signin-container">
                    <MDBContainer className="p-3 my-5 d-flex flex-column w-75">
                        <div className='d-flex justify-content-between mx-auto'>
                            <a href="../" className="btn btn-primary reg-button">Main Page</a>
                        </div>
                        <hr></hr>
                        <div id = "signin-message"> {message} </div>
                    </MDBContainer>
                </div>
        
            </div>
        )

    } else {
        return (
            <div className = 'full-page'>
                <div id = "signin-container">
                    <MDBContainer className="p-3 my-5 d-flex flex-column w-75">
        
                        <div className="text-center mb-3">
                        <p>Please enter the email that you have made an account with.</p>
                        <p>We will send you a password recovery email.</p>
                        <p>Check your inbox now. If not found, check the spam folder.</p>
                        </div>
                        <form onSubmit={handlePasswordChange} id = 'registration-form'>
                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' name='email' type='email'/>
        
                            <button type="submit" className="btn btn-primary reg-button">Send</button>
                        </form>
        
                        <div id = "signin-message"> {message} </div>
                        <br></br>
                        <div className='d-flex justify-content-between mx-auto'>
                            <form action="?" method="POST">
                                <div className="g-recaptcha"
                                    data-sitekey= {recaptcha_site_key}
                                ></div>
                            </form>
                        </div>
        
                    </MDBContainer>
                </div>
        
            </div>
            )
    }
}