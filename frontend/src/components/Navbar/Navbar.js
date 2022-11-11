import React, {useState, useEffect} from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import UserContext from "../SignInPage/UserContext";

import NavbarSigninButton from "./NavbarSigninButton";
import isUserLoggedIn from "../SignInPage/IsUserLoggedIn";

export default function Navbar(){


  return (
    <Nav>
      <Bars></Bars>
      <NavMenu>
        <NavLink to='/'>
          Home
        </NavLink>
      </NavMenu>
      <NavbarSigninButton />
    </Nav>
  )
}