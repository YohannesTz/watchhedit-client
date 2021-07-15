import React, { Component } from "react";
import LoginModal from 'react-login-modal'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {signup, login} from '../actions/authAction'

export const Auth = () => {
  const dispatch = useDispatch();
  
  const history = useHistory();
  const handleSignup = async (username, email, password) => {
    await dispatch(signup(username, email, password));
    history.push('/')
  }

  const handleLogin = async (username, password) => {
    await dispatch(login(username, password))
    history.push('/')
  }
  
  if (useSelector(store => store.auth.user) != null)
    history.push('/')
  return <LoginModal handleSignup={handleSignup} handleLogin={handleLogin}> </LoginModal>
}