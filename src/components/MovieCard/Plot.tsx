import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';

export default function Plot({ movieDetail }: Props) {
  return (
    <p className="max-md:mx-auto inline-block bg-[#292929] rounded-sm px-2 py-3">
      <b>Plot:</b>{' '}
      {movieDetail.Plot === 'N/A' ? notAvailable : movieDetail.Plot}
    </p>
  );
}
