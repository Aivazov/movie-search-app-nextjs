import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Year({ movieDetail }: Props) {
  return <li className="font-medium py-2">Year: {movieDetail.Year}</li>;
}
