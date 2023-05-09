import React from 'react';
import Image from 'next/image';
import NoImage from '../../../public/static/no_image_available.jpg';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Poster({ movieDetail }: Props) {
  return (
    <div className="">
      {movieDetail.Poster === 'N/A' ? (
        <Image
          src={NoImage}
          // src="/static/no_image_available.jpg"
          width={310}
          height={450}
          alt={movieDetail.Title}
          className="max-w-xs mx-auto border-4 border-black rounded-xl shadow-lg shadow-gray-900/30"
        />
      ) : (
        <Image
          width={310}
          height={450}
          src={movieDetail.Poster}
          alt={movieDetail.Title}
          className="max-w-xs mx-auto border-4 border-black shadow-lg shadow-gray-900/30"
        />
      )}
    </div>
  );
}
