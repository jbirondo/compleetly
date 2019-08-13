import React from 'react';
import { withRouter } from 'react-router';
import './sessionForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: [], // should this be an object from when we merge w/ errors?
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        };
    };

    handleSubmit(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(user).then(this.props.closeModal);
    }

    renderErrors() {
        // return (
        //     <ul>
        //         {this.state.errors.map((err, i) => (
        //             <li key={i}>
        //                 {err}
        //             </li>
        //         ))}
        //     </ul>
        // );
    }

    render() {
        return (
          <div>
            <form className="sessionForm" onSubmit={this.handleSubmit}>
              <div>
                <br/>
                <h2 className='sessionForm-greeting'>Log in to compleetly</h2>
                <br/>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="input-btns input-top"
                />
                <input
                    type="text"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="input-btns input-bottom"
                />
                <input className='sessionForm-submit' type="submit" value="Login" />
                {/* <button>Login!</button> */}
                {/* {this.renderErrors()} */}
              </div>
            </form>
          </div>
        );
    }

}

export default withRouter(LoginForm)