import React from "react";

import {useSelector, useDispatch} from "react-redux";

import {
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

export default function NavbarAppButton(){

  const isLoggedIn = useSelector (state => state.auth.isLoggedIn)

  return (
    <>
      {!isLoggedIn && null}
      {isLoggedIn &&
        <NavBtn>
          <NavBtnLink to='/app'>App</NavBtnLink>
        </NavBtn>
      }
    </>
  )

}