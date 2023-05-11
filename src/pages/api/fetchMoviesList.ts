import axios from 'axios';
import {KEY} from './CONSTANTS'


async function fetchMoviesList({
  searchQuery = '',
  // currentPage = 1,
  // pageSize = 12,
}) {
  const res = await axios.get(
    `https://omdbapi.com/?apikey=${KEY}&s=${searchQuery}`
  );
  // console.log(searchQuery);

  if (res.data.Response === 'True') return res.data;
}

export default fetchMoviesList;
