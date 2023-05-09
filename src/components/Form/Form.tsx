import React from 'react'

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Form({}: Props) {
  return (
    <form
      className="flex-col max-w-[400px] relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* <input
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
                        src={NoSmallImage}
                        // src="/static/no_image_small.jpg"
                        width={50}
                        height={50}
                        alt={movie.Title}
                        placeholder="blur"
                        className="object-cover"
                      />
                    ) : (
                      <Image
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
      </div> */}
    </form>
  );
}