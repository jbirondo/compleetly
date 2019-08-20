import React from 'react';
import UserDropdown from '../dropdown/user_dropdown';
import './navbar.css';
import {Link} from 'react-router-dom';
import Search from '../searchbar/search'

export default ({ isAuthenticated, currentUser, logout, openModal }) => {
    const display = isAuthenticated ? (
        <div className='upper-nav-bar'>
           {/* <h1 className='nav-bar-current-user'>{currentUser.firstName}</h1>
           <button onClick={() => logout()}>Log Out</button> */}
            <Link to='/newsfeed' className='logo-logged-in'><img alt='' className='logo-logged-in' src={require('./logo.png')} /></Link>
            <UserDropdown/>
            <Search />
        </div>
    ) : (
         <div className='upper-nav-bar sign-in-nav-bar'>
            <img alt='' className='logo-logged-out' src={require('./logo.png')} />
            <button className="nav-bar-sign-up-btn nav-bar-btn" onClick={() => openModal('signup')}>Sign Up</button>
            <button className="nav-bar-log-in-btn nav-bar-btn" onClick={() => openModal('login')}>Log In</button>
         </div>
    )

    return (
        <div id='upper-nav-sticky'>
            {display}
        </div>
    )
}