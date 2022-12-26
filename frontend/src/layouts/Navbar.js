import React from "react";
import {
  Nav,
  Bars,
  NavBtn,
  NavBtnLink,
} from '../components/NavbarElements';

import NavbarSigninButton from "../components/NavbarSigninButton";
import NavbarAppButton from "../components/NavbarAppButton"

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