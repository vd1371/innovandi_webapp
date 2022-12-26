import React, {useContext} from "react";
import auth from "./firebaseAuth";

export default function handleSignout() {
    auth.signOut()
}