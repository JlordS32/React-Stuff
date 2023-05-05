import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const fetchCats = async () => {
    try {
        const response = axios.get('https://api.thecatapi.com/v1/breeds', {
            responseType: 'json',
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = (await response).data;
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchCatImage = async (breedId) => {
    try {
        const response = axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&size=small&mime_types=jpg`,{
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = (await response).data;
        return data[0];
    } catch (err) {
        console.log(err);
    }
};



