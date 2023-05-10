import React, { useState } from 'react';

const App = () => {
   const [firstName, setFirstName] = useState('');
   const [inputValue, setInputValue] = useState('');

   const [items, setItems] = useState([1, 2, 3]);

   const handleChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
   }
   const handleClick = () => {
      setFirstName(inputValue);
   }

   const updateItems = (index, newValue) => {
      setItems(prevItems => {
         const newItems = [...prevItems];
      
         newItems[index] = newValue * 2;

         return newItems;
      });
   }

   return (
      <div 
         className='app'
         style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            boxSizing: 'border-box',
            outline: 'red 1px solid'
         }}>
         <label 
            htmlFor='firstName'
            style={{
               marginRight: '10px',
               fontFamily: 'Helvetica'
            }}
         >First Name:</label>
         <input 
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First Name'
            onChange={handleChange}
         />
         <button onClick={handleClick}>Submit</button>
         <h1>{firstName}</h1>

         {items.map((item, index) => {
            return (
               <button 
                  key={index}
                  onClick={() => {updateItems(index, item)}}>
                  {item}
               </button>
            )
         })}
      </div>
   )
}

export default App;