import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Awards({ movieDetail }: Props) {
  return (
    <p className="py-3 text-[#d4aa11] md:hidden">
      <b>
        <i className="">Awards: </i>
      </b>{' '}
      {movieDetail.Awards}
    </p>
  );
}
