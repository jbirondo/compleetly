import React from 'react';
import UserDropdown from '../dropdown/user_dropdown'

export default ({ isAuthenticated, currentUser, logout, openModal }) => {
    // debugger
    const display = isAuthenticated ? (
        <div className='nav-bar-logged-in'>
           {/* <h1 className='nav-bar-current-user'>{currentUser.firstName}</h1>
           <button onClick={() => logout()}>Log Out</button> */}
            <UserDropdown/>
        </div>
    ) : (
         <div className='nav-bar-session-form'>
             <button className="nav-bar-sign-up-btn" onClick={() => openModal('signup')}>Sign Up</button>
             <button className="nav-bar-log-in-btn" onClick={() => openModal('login')}>Log In</button>
         </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}