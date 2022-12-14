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
import NavbarAppButton from "./NavbarAppButton"

export default function Navbar(){

  return (
    <Nav>
      <Bars></Bars>
      <NavBtn>
        <NavBtnLink to='/'>Home</NavBtnLink>
      </NavBtn>
      <NavbarAppButton />
      <div className="filler"></div>
      <NavbarSigninButton />
    </Nav>
  )
}