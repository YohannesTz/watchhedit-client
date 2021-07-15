import { authActions } from './types'
import { useHistory } from "react-router";
import axios from 'axios'

const { baseUrl = "http://localhost:5000" } = process.env

export const loginStart = () => ({
  type: authActions.START_LOGIN
})

export const loginSuccess = (user, token) => ({

  type: authActions.LOGIN_SUCCESS,
  payload: {
    user, token
  }
});

export const loginError = (error) => ({
  type: authActions.LOGIN_ERROR,
  payload: { error }
});
export const signupStart = () => ({
  type: authActions.START_SIGNUP
})

export const signupSuccess = (user, token) => ({
  type: authActions.SIGNUP_SUCCESS,
  payload: {
    user, token
  }
})

export const signupError = (error) => ({
  type: authActions.SIGNUP_SUCCESS,
  payload: {
    error
  }
})
export const signup = (username, email, password) => {
  return async (dispatch, getState) => {
    dispatch(signupStart());

    const data = {
      username: username,
      email: email,
      password: password
    }

    try {
      const user = await axios.post(baseUrl + "/api/v1/users/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log(user)
      dispatch(signupSuccess(user.data.user, user.data.token))

    }
    catch (e){
    dispatch(signupError(e))
  }
}
}

export const login = (username, password) => {

  return async (dispatch, getState) => {
    dispatch(loginStart());

    const data = {
      username: username,
      password: password
    }
    try {
      const user = await axios.post(baseUrl + "/api/v1/users/login", data, {
        headers: {
          "Content-Type": "application/json"
        }
      }
      )

      dispatch(loginSuccess(user.data.user, user.data.token))
    }
    catch (err) {
      dispatch(loginError(err))
    }
  }

}


