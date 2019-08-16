import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
import { closeModal } from './modal_actions';

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
});

export const fetchUser = user => dispatch => {
    return (
    APIUtil.fetchUser(user).then(res => {
        dispatch(receiveCurrentUser(res.data))
    }).catch(err => {
        dispatch(receiveErrors(err.response.data))
    })
)};

export const signup = user => dispatch => (
    APIUtil.signup(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(closeModal());
        return dispatch(receiveCurrentUser(decoded));
    }).catch(err => dispatch(receiveErrors(err.response.data)))
);

export const login = user => dispatch => (
    APIUtil.login(user).then( res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(closeModal());
        return dispatch(receiveCurrentUser(decoded))
    })
        .catch( err => dispatch(receiveErrors(err.response.data)))
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutUser());
};

window.logout = logout;