import React from 'react';
import Image from 'next/image';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Title({ movieDetail }: Props) {
  return (
    <h3 className="text-4xl text-[#d4aa11] font-bold">{movieDetail.Title}</h3>
  );
}
