import axios from 'axios';

export const fetchCats = async () => {
    try {
        const response = axios.get('https://api.thecatapi.com/v1/breeds', {
            responseType: 'json',
        });
        const data = (await response).data;
        return data;
    } catch (err) {
        console.log(err);
    }
};

const fetchCatImages = async (breedId, limit) => {
    try {
        const response = axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=${limit}&api_key=live_VfdJ99OBCWiiNJk1be7GbGTl5pGazog1p6lhIow4qPyFOnKySjx0u1s7wDAoT7xh`);
        const data = (await response).data;
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getCatImg = async () => {
    const catBreeds = await fetchCats();

    if (catBreeds && catBreeds.length > 0) {
        // Use the first breed's id as an example.
        const breedId = catBreeds.map((cats) => cats.id);

        const catImages = await fetchCatImages(breedId, catBreeds.length);
        
        return catImages;
    }
};
