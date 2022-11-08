import React, { useState, useEffect } from 'react';
import auth from './firebaseAuth';

export default function isUserLoggedIn() {
    return window.localStorage.getItem("isLoggedIn") === 'true'
}