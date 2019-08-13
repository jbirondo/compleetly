import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    // debugger
    return {
        // signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        modal: 'signup',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log In
        </button>
        ),
        closeModal: () => dispatch(closeModal()),
        signup: user => dispatch(signup(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);