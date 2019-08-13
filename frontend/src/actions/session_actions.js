// src/actions/session_actions.js

// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// export const receiveCurrentUser = currentUser => ({
//    type: RECEIVE_CURRENT_USER,
//    currentUser
// });

export const receiveUserSignIn = () => ({
   type: RECEIVE_USER_SIGN_IN,
});

// export const receiveErrors = errors => ({
//    type: RECEIVE_SESSION_ERRORS,
//    errors
// });


export const signup = user => dispatch => (
   APIUtil.signup(user).then(() => (
      dispatch(receiveUserSignIn())
   )
   // , err => (
   //    dispatch(receiveErrors(err.response.data))
   // )
   )
);













export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};