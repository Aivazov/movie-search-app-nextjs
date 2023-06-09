import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';

export default function Genre({ movieDetail }: Props) {
  return (
    <p className="inline-block bg-[#292929] rounded-sm px-2 py-1">
      <b>Genre:</b>{' '}
      {movieDetail.Genre === 'N/A' ? notAvailable : movieDetail.Genre}
    </p>
  );
}
