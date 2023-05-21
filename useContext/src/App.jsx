import React, { useState } from 'react';

import Nav from './Nav';
import Body from './Body';

const App = () => {

   const [name, setName] = useState('Hello World!');

   const handleClick = () => {
      setName('Shit')
   }

   return (
      <div className='app-container'>
         <Nav />
         <Body />
      </div>
   )
}

export default App;