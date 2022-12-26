import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';

import {useSelector, useDispatch} from "react-redux";
import { authActions } from "../store/auth-slice";

import {
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import handleSignout from "../features/authentication/handleSignout";

export default function NavbarSigninButton(){

  const isLoggedIn = useSelector (state => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignoutNavbarButton = () => {
    dispatch(authActions.signout())
    handleSignout()
  }

  if (!isLoggedIn){
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