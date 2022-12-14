import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';

import {useSelector, useDispatch} from "react-redux";
import { authActions } from "../../store/auth-slice";

import {
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import handleSignout from "../SignInPage/handleSignout";

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