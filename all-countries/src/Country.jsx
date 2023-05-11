import React, { useState } from 'react';

const Country = ({data}) => {

   const [inputValue, setInputValue] = useState('');

   const handleChange = (e) => {
      const inputval = e.target.value;
      setInputValue(inputval);
   }

   const filteredData = data.filter(country => country.name.common.toLowerCase().includes(inputValue.toLowerCase()));

   console.log(filteredData);

   return (
      <div className='countries-container'>
         <input
            className='country-search-bar'
            type='text'
            onChange={handleChange}
            placeholder='Search...'
         />
         <div className='country-wrapper'>
            {filteredData.map((country) => {
               return (
                  <div key={country.name.common} className='country-box'>
                     <img src={country.flags.png} alt={country.flags.alt}/>
                     <h3>{country.name.common}</h3>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Country;