import axios from 'axios';

export async function fetchImages({query, page}) {

const API_KEY = '38070095-9e6d535b4dc883ad57627f805'; 
const BASE_URL = 'https://pixabay.com/api/'; 

  const apiUrl = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    const dataImages = response.data.hits;
    return dataImages
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}


