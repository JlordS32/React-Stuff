import axios from 'axios';

export const fetchCats = async () => {
    try {
        const response = axios.get('https://api.thecatapi.com/v1/breeds');
        const data = (await response).data;
        return data;
    } catch (err) {
        console.log(err);
    }
};

fetchCats().then((data) => {
    console.log(data);
})

