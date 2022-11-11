import React, {useContext} from "react";
import auth from "./firebaseAuth";
import isUserLoggedIn from "./IsUserLoggedIn";

import UserContext from "./UserContext";

export default function handleSignout() {
    auth.signOut()
    window.localStorage.setItem("isLoggedIn", false)
}