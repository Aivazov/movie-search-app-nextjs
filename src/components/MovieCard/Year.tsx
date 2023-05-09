import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Year({ movieDetail }: Props) {
  return <li className="font-medium py-2">Year: {movieDetail.Year}</li>;
}
