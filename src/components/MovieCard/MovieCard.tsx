import React from 'react';
import Image from 'next/image';
import Actors from './Actors';
import Plot from './Plot';
import Genre from './Genre';
import Language from './Language';
import Runtime from './Runtime';
import Blank from './Blank';
import Director from './Director';
import Poster from './Poster';
import Title from './Title';
import Rated from './Rated';
import Released from './Released';
import Year from './Year';
import Awards from './Awards';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

// const notAvailable = 'Not Available';
// const emptyString = '';

export default function MovieCard({ movieDetail }: Props) {
  return (
    <div className="flex justify-center mt-16 max-md:flex-col text-white mx-auto px-4">
      {movieDetail && (
        <>
          {/* <div className="">
            {movieDetail.Poster === 'N/A' ? (
              <Image
                src="/static/no_image_available.jpg"
                width={310}
                height={450}
                alt={movieDetail.Title}
                className="max-w-xs mx-auto border-4 border-black rounded-xl shadow-lg shadow-gray-900/30"
              />
            ) : (
              <img
                src={movieDetail.Poster}
                alt={movieDetail.Title}
                className="max-w-xs mx-auto border-4 border-black shadow-lg shadow-gray-900/30"
              />
            )}
          </div> */}
          <Poster movieDetail={movieDetail} />

          <div className="text-left pt-3 ml-6 max-md:text-center max-w-[450px] max-md:mt-4 max-md:mx-auto">
            {/* <h3 className="text-4xl text-[#d4aa11] font-bold">
              {movieDetail.Title}
            </h3> */}

            <Title movieDetail={movieDetail} />

            <ul className="flex items-center justify-between pt-2 list-none max-md:flex-col my-4">
              {/* <li className="font-medium py-2">Year: {movieDetail.Year}</li> */}
              <Year movieDetail={movieDetail} />

              {/* {movieDetail.Rated === 'N/A' ||
              movieDetail.Rated === 'Not Rated' ? (
                <li className="py-2 opacity-90 hidden">
                  Rated: {movieDetail.Rated}
                </li>
              ) : (
                <li className="font-semibold bg-[#d4aa11] rounded-sm mx-4 px-8 py-2">
                  Rated: {movieDetail.Rated}
                </li>
              )} */}

              <Rated movieDetail={movieDetail} />
              <Released movieDetail={movieDetail} />

              {/* {movieDetail.Released === 'N/A' ? (
                <li className="py-2 opacity-90 hidden">
                  Released:{' '}
                  {movieDetail.Released === 'N/A'
                    ? notAvailable
                    : movieDetail.Released}
                </li>
              ) : (
                <li className="py-2 opacity-90">
                  Released: {movieDetail.Released}
                </li>
              )} */}
            </ul>

            {/* <p className="inline-block bg-[#292929] rounded-sm px-2 py-1">
              <b>Genre:</b>{' '}
              {movieDetail.Genre === 'N/A' ? notAvailable : movieDetail.Genre}
            </p> */}

            <Genre movieDetail={movieDetail} />

            {movieDetail.Runtime === 'N/A' ? (
              // <p className="py-3 hidden"></p>
              <Blank />
            ) : (
              <Runtime movieDetail={movieDetail} />

              // <p className="py-3">
              //   <b>Runtime:</b> {movieDetail.Runtime}
              // </p>
            )}

            {movieDetail.Director === 'N/A' ? (
              // <p className="py-3 hidden"></p>
              <Blank />
            ) : (
              // <p className="py-3">
              //   <b>Director:</b> {movieDetail.Director}
              //   </p>
              <Director movieDetail={movieDetail} />
            )}

            {/* <p className="py-3">
              <b>Actors: </b>
              {movieDetail.Actors === 'N/A' ? notAvailable : movieDetail.Actors}
            </p> */}

            <Actors movieDetail={movieDetail} />

            {/* <p className="max-md:mx-auto inline-block bg-[#292929] rounded-sm px-2 py-3">
              <b>Plot:</b>{' '}
              {movieDetail.Plot === 'N/A' ? notAvailable : movieDetail.Plot}
            </p> */}

            <Plot movieDetail={movieDetail} />

            {/* <p className="italic py-3">
              <b>Language:</b>{' '}
              {movieDetail.Language === 'N/A'
                ? notAvailable
                : movieDetail.Language}
            </p> */}

            <Language movieDetail={movieDetail} />

            {movieDetail.Awards === 'N/A' ? (
              <Blank />
            ) : (
              // <p className="py-3 hidden">
              //   <b>
              //     <i className="">Awards</i>
              //   </b>{' '}
              //   {movieDetail.Awards === 'N/A'
              //     ? emptyString
              //     : movieDetail.Awards}
              // </p>
              <Awards movieDetail={movieDetail} />

              // <p className="py-3 text-[#d4aa11] md:hidden">
              //   <b>
              //     <i className="">Awards: </i>
              //   </b>{' '}
              //   {movieDetail.Awards}
              // </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
