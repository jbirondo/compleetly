// src/actions/session_actions.js

// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
<<<<<<< HEAD
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












=======
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_UP = "RECEIVE_USER_SIGN_UP";
>>>>>>> 958000ac6b4865332d6c38f64e0c68e6b70acc8b

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
}); /// do we need this and receiveCurrentUser? 
// do we just watn to receiveCurrentUser as our main action?

export const receiveUserSignUp = currentUser => ({
    type: RECEIVE_USER_SIGN_UP,
    currentUser
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => {
        dispatch(receiveUserSignUp(user))
    }).catch(err => {
        dispatch(receiveErrors(err.response.data))
    })
);

export const login = user => dispatch => (
    APIUtil.login(user).then( res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
        .catch( err => {
            dispatch(receiveErrors(err.response.data));
        })
)

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken');
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false);
    // Dispatch a logout action
    dispatch(logoutUser());
};

window.logout = logout