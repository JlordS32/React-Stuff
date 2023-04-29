import axios from 'axios';

const getCountry = () => {
    return axios
        .get('https://restcountries.com/v3.1/region/europe')
        .then((response) => {
            const data = response.data;
            return data;
        })
        .catch((error) => {
            console.log(error);
        })
}

export default getCountry;

