import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Released({ movieDetail }: Props) {
  return (
    <>
      {movieDetail.Released === 'N/A' ? (
        <li className="py-2 opacity-90 hidden">
          Released:{' '}
          {movieDetail.Released === 'N/A' ? notAvailable : movieDetail.Released}
        </li>
      ) : (
        <li className="py-2 opacity-90">Released: {movieDetail.Released}</li>
      )}
    </>
  );
}
