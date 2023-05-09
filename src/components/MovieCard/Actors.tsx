import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';

export default function Actors({ movieDetail }: Props) {
  return (
    <p className="py-3">
      <b>Actors: </b>
      {movieDetail.Actors === 'N/A' ? notAvailable : movieDetail.Actors}
    </p>
  );
}
