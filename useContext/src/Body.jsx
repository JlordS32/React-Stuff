import React, { useContext } from 'react';
import { Context } from './App';

const Body = () => {

   const { name, setName } = useContext(Context);

   const handleClick = () => {
      setName(prev => {
         const uwu = prev === 'Hello World!' ? 'Shit' : 'Hello World!';
         
         return uwu;
      });
   };

   return (
      <>
         <h1>{name}</h1>
         <button onClick={handleClick}>
            Click me for context!
         </button>
      </>
   );
};

export default Body;