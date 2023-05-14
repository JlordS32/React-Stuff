import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios(url);
            setData(response.data);
         } catch (error) {
            console.error(error);
         }
      };
      
      fetchData()
   }, [url]);

   return data;
}