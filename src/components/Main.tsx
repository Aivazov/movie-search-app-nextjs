/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import useDebounce from './helpers/useDebounce';

interface IMovies {
  Response: string;
  totalResults: string;
  Search: [];
}

export interface MovieDetail {
  Poster: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Genre: string;
  Director: string;
  Runtime: string;
  Writer: string;
  Plot: string;
  Actors: string;
  Language: string;
  Awards: string;
}

type Props = {
  error?: {
    // message: any;
  };
  prev: any;
  // movieDetailsFromSearch: any;
  movieDetail: {
    Poster: string;
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Genre: string;
    Writer: string;
    Plot: string;
    Actors: string;
    Language: string;
    Awards: string;
  };
};

const KEY = '8f4c5e24';

async function fetchMoviesList({
  searchQuery = '',
  currentPage = 1,
  pageSize = 12,
}) {
  const res = await axios.get(
    `https://omdbapi.com/?apikey=${KEY}&s=${searchQuery}`
  );
  console.log(searchQuery);

  if (res.data.Response === 'True') return res.data;
}

function Main({}: Props) {
  const [movies, setMovies] = useState<IMovies>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [moviesReceived, setMoviesReceived] = useState(0);

  const [moviesList, setMoviesList] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedValue = useDebounce<string>(searchQuery, 300);

  useEffect(() => {
    if (!searchQuery) return;
    fetchMovies();
  }, [debouncedValue]);
  // }, [searchQuery]);

  const fetchMovie = async (omdbId: string) => {
    const res = await axios.get(
      `https://omdbapi.com/?apikey=${KEY}&i=${omdbId}`
    );

    if (res.data.Response !== 'True') {
      return toast.warning('We found no matches. Please try again');
    }

    setMoviesReceived(1);
    setMovie(res.data);
    // setMovieDetailsFromSearch(res.data);
    return res.data;
  };

  // const onChangeQuery = (query: string) => {
  //   setSearchQuery(query);
  //   setCurrentPage(1);
  //   setMovies({});
  //   setError(null);
  //   setMoviesReceived(0);
  // handleDetails(movie);
  // setShowModal(false);
  // };

  function fetchMovies() {
    const options = { searchQuery, currentPage };

    setIsLoading(true);
    fetchMoviesList(options)
      .then((moviesData) => {
        if (moviesData.length === 0) {
          return toast.warning('We found no matches. Please try again');
        }
        setMovies(moviesData);
        // fetchMovie();
        // setMovies((prev: any) => [...prev, ...movies]);
        // setCurrentPage(currentPage + 1);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.value.trim() === '') {
      return toast.warning('Please enter a movie name');
    }
    setSearchQuery(e.target.value);
  };

  const handleChange = (e: any) => {
    setMoviesList(0);
    setSearchQuery(e.currentTarget.value);
  };

  return (
    <div>
      <header className="bg-[#292929]  top-0 left-0 flex justify-center items-center min-h-[64px] px-6 py-3 text-white searchbar-box-shadow">
        <form
          className="flex-col max-w-[400px] relative w-full"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="px-6 py-2 text-[1rem] rounded-[3px] text-black w-full outline-none"
            id="movie-search-box"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={searchQuery}
            onKeyUp={handleSubmit}
            onChange={handleChange}
          />

          <div className="absolute left-0 top-[100%]  bg-gray-800 max-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-[#d4aa11] z-[74] w-full">
            <div className="search-list-item flex flex-col items-center">
              {movies?.Search?.map(
                (
                  movie: {
                    imdbID: string;
                    Title: string;
                    Poster: string;
                    Year: string;
                  },
                  idx: number
                ) => (
                  <div
                    onClick={() => {
                      fetchMovie(movie.imdbID);
                      // handleDetails();
                      setSearchQuery('');
                      setMoviesList(1);
                    }}
                    key={idx}
                    className="w-full search-item-info cursor-pointer hover:bg-gray-600 transition-all ease-in-out duration-200"
                  >
                    {moviesList === 0 && (
                      <div className="flex flex-row">
                        {movie.Poster === 'N/A' ? (
                          <Image
                            src="/static/no_image_small.jpg"
                            width={50}
                            height={50}
                            alt={movie.Title}
                            className="object-cover"
                          />
                        ) : (
                          <img
                            width={50}
                            height={50}
                            src={movie.Poster}
                            alt={movie.Title}
                            className="object-cover"
                            // placeholder="blur"
                          />
                        )}
                        <div className="ml-4">
                          <h3>{movie.Title}</h3>
                          <p>{movie.Year}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </form>
      </header>
      {/* {error && toast.warning(`Something went wrong: ${error.message}`)} */}

      {moviesReceived === 1 && movie && <MovieCard movieDetail={movie} />}
    </div>
  );
}

export default Main;
