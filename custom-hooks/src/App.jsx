import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReactDOM, { findDOMNode } from'react-dom';
import { useFetch } from './useFetch.jsx'

const Country = ({ country: {
   name: {
      common: country_name
   },
   flags: {
      png: flag_png,
      alt: flag_alt
   },
   population
}}) => {
   return (
      <div className='country'>
         <div className='country-flag'>
            <img src={flag_png} alt={flag_alt}/>
         </div>
         <h3 className='country-name'>{country_name}</h3>
         <div className='country-details'>
            <p>
               <span>
                  Population: {population.toLocaleString()}
               </span>
            </p>
         </div>
      </div>
   )
}

const App = (props) => {
   const url = 'https://restcountries.com/v3.1/all';
   const data = useFetch(url);
   return (
   <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
         <p>There are {data.length} countries in the api</p>
         <div className='countries-wrapper'>
            {data.map((country) => (
               <Country country={country} key={country.name.common}/>
            ))}
         </div>
      </div>
   </div>
  )
}

export default App;