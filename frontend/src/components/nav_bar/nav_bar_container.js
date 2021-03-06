// import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions'
import { logout } from '../../actions/session_actions'


const mstp = state => {
    return {
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.user
    }
}

const mdtp = dispatch => {
    return {
   openModal: modal => dispatch(openModal(modal)),
   logout: () => dispatch(logout())
}}

export default connect(mstp, mdtp)(NavBar);