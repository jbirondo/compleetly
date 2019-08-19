import React from 'react';
import { withRouter } from 'react-router';
import './sessionForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
            this.props.resetErrors();
        };
    };

    handleSubmit(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }

        // this.props.closeModal();
        // if(this.props.errors.length === 0) {
        this.props.login(user)
        // .then((e) => {
        //     console.log(`then`, e);
        //     this.props.closeModal()
        // })
        // this.props.closeModal();
        // } 
        // else {
            // this.props.login(user);

        // }
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`} className='errors-li'>
                        {this.props.errors[error]}
                    </li>
                ))}

                {/* <li>
               {this.state.errors}
            </li> */}
            </ul>
        );
    }

    render() {
        return (
          <div>
                <form className="sessionForm" onSubmit={this.handleSubmit}>
                <div className='sessionForm-div'>
                <br/>
                <h2 className='sessionForm-greeting'>Log in to compleetly</h2>
                <br/>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="input-btns input-top log-in-btns"
                />
                <input
                    type="text"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="input-btns input-bottom log-in-btns"
                />
                <input className='sessionForm-submit' type="submit" value="Login" />
                {this.renderErrors()}
              </div>
            </form>
          </div>
        );
    }

}

export default withRouter(LoginForm);