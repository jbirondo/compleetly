import React from 'react'
import { connect } from 'react-redux';
import { signup, resetErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal, openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
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
        signup: user => dispatch(signup(user)),
        resetErrors: () => dispatch(resetErrors())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);