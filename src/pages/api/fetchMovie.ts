import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchMovie = async (omdbId: string) => {
  const res = await axios.get(
    `https://omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${omdbId}`
  );

  if (res.data.Response !== 'True') {
    return toast.warning('Found no matches. Please try again');
  }
  return res.data;
};

export default fetchMovie;
