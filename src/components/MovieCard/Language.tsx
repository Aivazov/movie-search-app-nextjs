import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';

export default function Language({ movieDetail }: Props) {
  return (
    <p className="italic py-3">
      <b>Language:</b>{' '}
      {movieDetail.Language === 'N/A' ? notAvailable : movieDetail.Language}
    </p>
  );
}
