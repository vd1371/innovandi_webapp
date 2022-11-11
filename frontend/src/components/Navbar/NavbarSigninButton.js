import React, { useEffect, useState, useContext} from "react";
import {
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import isUserLoggedIn from "../SignInPage/IsUserLoggedIn";
import handleSignout from "../SignInPage/handleSignout";

import UserContext from "../SignInPage/UserContext";

export default function NavbarSigninButton(){

  const {loggedIn, setLoggedIn} = useContext(UserContext)

  const handleSignoutNavbarButton = () => {
    setLoggedIn(false)
    handleSignout()
  }

  useEffect(() => {
    setLoggedIn(isUserLoggedIn())
  }, [loggedIn]);

  if (!loggedIn){
    return (
      <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>
    )
  } else {
    return (
      <NavBtn onClick={handleSignoutNavbarButton}>
        <NavBtnLink to='/'>Sign Out</NavBtnLink>
      </NavBtn>
    )
  }

  
}