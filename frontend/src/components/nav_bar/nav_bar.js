import React from 'react';
import UserDropdown from '../dropdown/user_dropdown';
import './navbar.css';

export default ({ isAuthenticated, currentUser, logout, openModal }) => {
    const display = isAuthenticated ? (
        <div className='upper-nav-bar'>
           {/* <h1 className='nav-bar-current-user'>{currentUser.firstName}</h1>
           <button onClick={() => logout()}>Log Out</button> */}
            <img className='logo' src={require('./logo.png')} />
            <UserDropdown/>
        </div>
    ) : (
         <div className='upper-nav-bar sign-in-nav-bar'>
            <img className='logo' src={require('./logo.png')} />
            <button className="nav-bar-sign-up-btn nav-bar-btn" onClick={() => openModal('signup')}>Sign Up</button>
            <button className="nav-bar-log-in-btn nav-bar-btn" onClick={() => openModal('login')}>Log In</button>
         </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}