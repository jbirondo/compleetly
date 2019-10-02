import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import './user_dropdown.css'; 
import {Link} from 'react-router-dom';


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
                <button className='dropdown-btn' onClick={this.addHiddenClass}><h3 className="nav-bar-welcome-message">{this.props.currentUser.firstName[0].toUpperCase()}</h3></button>
                <ul className={this.state.hidden ? 'user-dropdown-menu hide' : 'user-dropdown-menu'}>
                    <li className='li-dropdown-name li-dropdown'>
                        {/* <div>{this.props.currentUser.firstName[0]}</div> */}
                        <h3>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
                        {/* <div>{this.props.currentUser.email}</div> */}
                    </li> 
                    {/* <li className='li-dropdown'>Settings</li>
                    <li className='li-dropdown'>Organized Sources</li>
                    <li className='li-dropdown'>Mobile Apps</li>
                    <li className='li-dropdown'>Browser Add-ons</li>
                    <li className='li-dropdown'>Support</li>
                    <li className='li-dropdown'>Privacy</li>
                    <li className='li-dropdown'>Terms &amp; Policy</li> */}
                    <Link className='link-nav' to='/newsfeed'><li className='li-dropdown'>Today's News</li></Link>
                    <a className='link-nav' target='_blank' rel="noopener noreferrer" href='https://github.com/jbirondo/MERN-feedly'><li className='li-dropdown'>GitHub</li></a>
                    <button className="logout-button" onClick={this.props.logout}><li className='li-dropdown padding-pls'>Logout</li></button>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};
// export default DropDown
export default connect(mapStateToProps, mapDispatchToProps)(userDropdown)