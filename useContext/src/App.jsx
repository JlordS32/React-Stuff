import React, { createContext, useState } from 'react';

import Nav from './Nav';
import Body from './Body';

export const Context = createContext();

const App = () => {

   const [name, setName] = useState('Hello World!');

   return (
      <Context.Provider 
         value={{name, setName}}>
         <div className='app-container'>
            <Nav />
            <Body />
         </div>
      </Context.Provider>
   )
}

export default App;