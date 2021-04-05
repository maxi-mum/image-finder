import axios from 'axios';

const API_KEY = '19998766-bc5c9aa883552721d0d63d23f';
const BASE_URL = 'https://pixabay.com/api/';

function fetchPagesList({ searchQuery = '', currentPage = 1, perPage = 12 }) {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
}

export { fetchPagesList };
