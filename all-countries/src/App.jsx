import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

const App = () => {

   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const url = 'https://restcountries.com/v3.1/all'

         try {
            const response = await axios.get(url);
            setData(response.data);
         } catch (e) {
            console.error('Error fetching data:', e);
         }
      };

      fetchData();
   }, []);

   return (
      <div className='app'>
         <h1>Hello World</h1>
         <Country data={data}/>
      </div>
   )
}

export default App;