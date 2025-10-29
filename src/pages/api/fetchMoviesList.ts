import axios from 'axios';

async function fetchMoviesList({
  searchQuery = '',
  // currentPage = 1,
  // pageSize = 12,
}) {
  const res = await axios.get(
    `https://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searchQuery}`
  );
  // console.log(searchQuery);

  if (res.data.Response === 'True') return res.data;
}

export default fetchMoviesList;
