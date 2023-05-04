import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.API_KEY;

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
        const response = axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`,{
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

export const getCatImg = (id) => {
    return new Promise((resolve, reject) => {
        fetchCatImage(id)
            .then((url) => {
                if(url.length  === 0) {
                    reject(new Error('Empty array received'));
                }
                resolve(url);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

getCatImg('abys').then((response) => {
    console.log(response);
});