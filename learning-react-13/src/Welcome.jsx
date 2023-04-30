import React from 'react';

export const Welcome = ({ handleLogin = null, isLoggedIn, handleLogout = null }) => {
    return (
      <div>
        {isLoggedIn ? <h1>Welcome to the challenge</h1> : <p>Please login in </p>}
        <button onClick={isLoggedIn ? handleLogout : handleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    )
}
