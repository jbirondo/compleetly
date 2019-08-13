import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import './user_dropdown.css'

class userDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true };
        this.addHiddenClass = this.addHiddenClass.bind(this);
    }

    addHiddenClass() {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div className="user-dropdown-button">
                <button onClick={this.addHiddenClass}><h3 className="nav-bar-welcome-message">{this.props.currentUser.firstName[0]}</h3></button>
                <ul className={this.state.hidden ? 'user-dropdown-menu hide' : 'user-dropdown-menu'}>
                    <li>
                        <div>{this.props.currentUser.firstName[0]}</div>
                        <div>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</div>
                        <div>{this.props.currentUser.email}</div>
                    </li> 
                    <li>Settings</li>
                    <li>Organized Sources</li>
                    <li>Mobile Apps</li>
                    <li>Browser Add-ons</li>
                    <li>Support</li>
                    <li>Privacy</li>
                    <li>Terms & Policy</li>
                    <li><button className="logout-button" onClick={this.props.logout}>Logout</button></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        logout: () => dispatch(logout())
    }
};
// export default DropDown
export default connect(mapStateToProps, mapDispatchToProps)(userDropdown)