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

const fetchCatImage = async (breedId = 'none') => {
    try {
        const response = axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`,{
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

export const getCatImg = async () => {
    const cats = await fetchCats();
    const imagePromises = cats.map(cat => fetchCatImage(cat.id));
    const images = await Promise.all(imagePromises);
    return images;
};

getCatImg().then((res) => {
    console.log(res);
});

