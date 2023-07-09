import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/Users';

function Login() {
   const dispatch = useDispatch();

   return (
      <div>
         <button onClick={() => { 
            dispatch(login({
               name: 'Pedro',
               age: '23',
               email: 'jesus@gmail.com'
            }))
         }}>
            Log in
         </button>
         <button onClick={() => {
            dispatch(logout());
         }}>
            Log out
         </button>
      </div>
   )
};

export default Login