import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

fetchData().then((data) => {
  console.log(data);
});
