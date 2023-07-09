import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {

   return (
      <div className='app-container'>  
         <Profile />
         <Login />
      </div>
   )
};

export default App;