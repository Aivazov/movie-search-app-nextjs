import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Title({ movieDetail }: Props) {
  return (
    <h3 className="text-4xl text-[#d4aa11] font-bold">{movieDetail.Title}</h3>
  );
}
