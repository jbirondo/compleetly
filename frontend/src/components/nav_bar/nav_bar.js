import React from 'react';


export default ({ currentUser, logout, openModal }) => {
    // debugger
    const display = currentUser ? ( //temp change
        <div className='nav-bar-logged-in'>
           <h1 className='nav-bar-current-user'>{currentUser.firstName}</h1>
           {/* <button onClick={logout()}>Log Out</button> */}
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