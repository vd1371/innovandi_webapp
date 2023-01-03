import React from "react";
import {
  Nav,
  Bars,
  NavBtn,
  NavBtnLink,
} from '../components/Navbar/NavbarElements';

import NavbarSigninButton from "../components/Navbar/NavbarSigninButton";
import NavbarAppButton from "../components/Navbar/NavbarAppButton"

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