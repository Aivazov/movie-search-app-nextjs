import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Rated({ movieDetail }: Props) {
  return (
    <>
      {movieDetail.Rated === 'N/A' || movieDetail.Rated === 'Not Rated' ? (
        <li className="py-2 opacity-90 hidden">Rated: {movieDetail.Rated}</li>
      ) : (
        <li className="font-semibold bg-[#d4aa11] rounded-sm mx-4 px-8 py-2">
          Rated: {movieDetail.Rated}
        </li>
      )}
    </>
  );
}
