import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';
import { useSelector } from 'react-redux';

const App = () => {

   const themeColor = useSelector(state => state.theme.value);

   return (
      <div 
         className='app-container'
         style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontFamily: 'sans-serif',
            backgroundColor: themeColor,
         }}
      >  
         <Profile />
         <Login />
         <ChangeColor />
      </div>
   )
};

export default App;