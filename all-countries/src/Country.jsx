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

               const { currencies } = country;

               const noCurrency = {
                  name: 'None',
                  symbol: '',
               };

               const displayCurrency = currencies
                  ? Object.values(currencies)[0] || noCurrency
                  : noCurrency;

               return (
                  <div key={country.name.common} className='country-box'>
                     <div className='country-img-container'>
                        <img src={country.flags.png} alt={country.flags.alt}/>
                        <h3>{country.name.common}</h3>
                     </div>

                     <div>
                        <p>Currency: {displayCurrency.name}</p>
                     </div>

                     <div>
                        <p>Symbol: {displayCurrency.symbol}</p>
                     </div>

                     <div>
                        <p>Continents: {country.continents}</p>
                     </div>

                     <div>
                        <p>Population: {country.population.toLocaleString()}</p>
                     </div>

                     <div>
                        <p>Capital: {country.capital}</p>
                     </div>
                     
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Country;