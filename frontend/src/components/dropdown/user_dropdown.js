import React from 'react';
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
                    <li className='li-dropdown'>
                        {/* <div>{this.props.currentUser.firstName[0]}</div> */}
                        <h3>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
                        {/* <div>{this.props.currentUser.email}</div> */}
                    </li> 
                    <li className='li-dropdown'>Settings</li>
                    <li className='li-dropdown'>Organized Sources</li>
                    <li className='li-dropdown'>Mobile Apps</li>
                    <li className='li-dropdown'>Browser Add-ons</li>
                    <li className='li-dropdown'>Support</li>
                    <li className='li-dropdown'>Privacy</li>
                    <li className='li-dropdown'>Terms &amp; Policy</li>
                    <li className='li-dropdown'><button className="logout-button" onClick={this.props.logout}>Logout</button></li>
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