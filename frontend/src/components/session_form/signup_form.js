import React from 'react';
import { withRouter } from 'react-router-dom';
import './sessionForm.css';

class SignupForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         password2: '',
         errors: []
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      // this.clearedErrors = false;
   }

   // componentWillReceiveProps(nextProps) {
   //    if (nextProps.signedIn === true) {
   //       this.props.history.push('/login');
   //    }

   //    // this.setState({ errors: nextProps.errors })
   // }

   update(field) {
      return e => this.setState({
         [field]: e.currentTarget.value
      });
   }

   handleSubmit(e) {
      e.preventDefault();
      let user = {
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         email: this.state.email,
         password: this.state.password,
         password2: this.state.password2
      };

      this.props.signup(user, this.props.history).then(this.props.closeModal);
   }

   // renderErrors() {
   //    return (
   //       <ul>
   //          {Object.keys(this.state.errors).map((error, i) => (
   //             <li key={`error-${i}`}>
   //                {this.state.errors[error]}
   //             </li>
   //          ))}
   //       </ul>
   //    );
   // }

   render() {
      return (
        <div>
          <form className="sessionForm" onSubmit={this.handleSubmit}>
            <div>
              <br />
              <h2 className='sessionForm-greeting'>Sign up to compleetly</h2>
              <br />
              <input
                type="First Name"
                value={this.state.firstName}
                onChange={this.update("firstName")}
                placeholder="First Name"
                className="input-btns input-top"
              />
              <br />
              <input
                type="Last Name"
                value={this.state.lastName}
                onChange={this.update("lastName")}
                placeholder="Last Name"
                className="input-btns"
              />
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="input-btns"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                     className="input-btns"
              />
              <br />
              <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                  className="input-btns input-bottom"
              />
              <br />
              <input className='sessionForm-submit' type="submit" value="Submit" />
              {/* {this.renderErrors()} */}
            </div>
          </form>
        </div>
      );
   }
}

export default withRouter(SignupForm);