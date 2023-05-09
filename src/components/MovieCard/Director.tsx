import React from 'react';
import Image from 'next/image';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Director({ movieDetail }: Props) {
  return (
    <p className="py-3">
      <b>Director:</b> {movieDetail.Director}
    </p>
  );
}
