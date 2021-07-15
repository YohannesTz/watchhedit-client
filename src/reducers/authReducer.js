import {authActions} from '../actions/types'

const INITIAL_STATE = {
  loggingIn: false,
  signingUp: false,
  signupError: null,
  loginError: null,
  user: null,
  token: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (authActions.type) {
    case authActions.START_SIGNUP:
      return {
        ...state,
        signingUp: true
      };
    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case authActions.SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        signupError: action.payload.signupError
      };
    case authActions.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload.loginError
      };
    case authActions.LOGIN_SUCCESS:
      
      return {
        ...state,
        loggingIn: false,
        user: action.payload.user,
        token: action.payload.token
      }
    default:
      return state
  }
}

export default authReducer;