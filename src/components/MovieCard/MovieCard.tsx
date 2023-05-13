import React from 'react';
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

import checkOnAvailable from '../helpers/checkOnAvailable'

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

// const notAvailable = 'N/A';

// const checkOnAvailable = (detail: string, component: any, blank: any) => {
//   return detail === notAvailable ? blank : component;
// };

export default function MovieCard({ movieDetail }: Props) {
  return (
    <div className="flex justify-center mt-16 max-md:flex-col text-white mx-auto px-4">
      {movieDetail && (
        <>
          <Poster movieDetail={movieDetail} />

          <div className="text-left pt-3 ml-6 max-md:text-center max-w-[450px] max-md:mt-4 max-md:mx-auto">
            <Title movieDetail={movieDetail} />

            <ul className="flex items-center justify-between pt-2 list-none max-md:flex-col my-4">
              <Year movieDetail={movieDetail} />
              <Rated movieDetail={movieDetail} />
              <Released movieDetail={movieDetail} />
            </ul>

            <Genre movieDetail={movieDetail} />

            {checkOnAvailable(
              movieDetail.Runtime,
              <Runtime movieDetail={movieDetail} />,
              <Blank />
            )}

            {/* {movieDetail.Runtime === notAvailable ? (
              <Blank />
            ) : (
              <Runtime movieDetail={movieDetail} />
            )} */}

            {checkOnAvailable(
              movieDetail.Director,
              <Director movieDetail={movieDetail} />,
              <Blank />
            )}

            {/* {movieDetail.Director === notAvailable ? (
              <Blank />
            ) : (
              <Director movieDetail={movieDetail} />
            )} */}

            <Actors movieDetail={movieDetail} />
            <Plot movieDetail={movieDetail} />
            <Language movieDetail={movieDetail} />

            {checkOnAvailable(
              movieDetail.Awards,
              <Awards movieDetail={movieDetail} />,
              <Blank />
            )}

            {/* {movieDetail.Awards === notAvailable ? (
              <Blank />
            ) : (
              <Awards movieDetail={movieDetail} />
            )} */}
          </div>
        </>
      )}
    </div>
  );
}
