import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_UP = "RECEIVE_USER_SIGN_UP";
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const resetErrors = () => ({
    type: RESET_SESSION_ERRORS
})


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
}); /// do we need this and receiveCurrentUser? 
// do we just watn to receiveCurrentUser as our main action?

// export const receiveUserSignUp = currentUser => ({
//     type: RECEIVE_USER_SIGN_UP,
//     currentUser
// });

export const signup = user => dispatch => (
    APIUtil.signup(user).then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))
    }).catch(err => {
        dispatch(receiveErrors(err.response.data))
    })
);

// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(user => {
//         dispatch(receiveCurrentUser(user))
//     }).catch(err => {
//         debugger
//         dispatch(receiveErrors(err.response.data))
//     })
// );

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

window.logout = logout;