import React from 'react';

export const User = ({ match, isLoggedIn, handleLogin }) => {
    const username = match.params.username;
    return (
        <div>
            {isLoggedIn ? (
                <>
                    <h1>Welcome {username} to the challenge</h1>
                    <small>Now, you can navigate through all the challenges</small><br />
                </>
                ) : (
                <>
                    <p>Please login in to access the challenges </p>
                </>
            )}
            <button onClick={handleLogin}> 
                {isLoggedIn ? 'Logout' : 'Login'} 
            </button>
        </div>
    )
}

export const Welcome = ({ handleLogin, isLoggedIn }) => {
    return (
      <div>
        {isLoggedIn ? 'Welcome to the challenge' : <p>Please login in </p>}
        <button onClick={handleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    )
}
