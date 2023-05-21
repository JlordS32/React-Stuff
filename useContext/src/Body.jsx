import React from 'react';


const Body = () => {
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