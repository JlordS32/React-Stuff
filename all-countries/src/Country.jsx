import React, { useState } from 'react';

const Country = ({data}) => {

   const [inputValue, setInputValue] = useState('');

   const handleChange = (e) => {
      const inputval = e.target.value;
      setInputValue(inputval);
   }

   const filteredData = data.filter(country => country.name.common.toLowerCase().includes(inputValue.toLowerCase()));

   return (
      <div className='country-container'>
         <input 
            type='text'
            onChange={handleChange}
            placeholder='Search...'
         />
         <ul>
            {filteredData.map((country) => {
               return (
                  <li key={country.name.common}>{country.name.common}</li>
               )
            })}
         </ul>
      </div>
   )
}

export default Country;