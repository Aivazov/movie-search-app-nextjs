import React from 'react';
import Image from 'next/image';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Language({ movieDetail }: Props) {
  return (
    <p className="italic py-3">
      <b>Language:</b>{' '}
      {movieDetail.Language === 'N/A' ? notAvailable : movieDetail.Language}
    </p>
  );
}
