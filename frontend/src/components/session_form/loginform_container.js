import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = state => ({
        errors: state.errors.session,
        modal: 'login',
})

const mdp = dispatch => ({
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign Up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user))
})

export default connect(msp, mdp)(LoginForm);