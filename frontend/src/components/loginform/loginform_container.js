import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './loginform';

const msp = state => ({
    // errors: state.errors.session
})

const mdp = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(msp, mdp)(LoginForm);