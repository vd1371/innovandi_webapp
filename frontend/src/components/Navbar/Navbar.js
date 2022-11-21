import React, {useState, useEffect} from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import NavbarSigninButton from "./NavbarSigninButton";

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