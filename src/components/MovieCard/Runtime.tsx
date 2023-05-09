import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Runtime({ movieDetail }: Props) {
  return (
    <p className="py-3">
      <b>Runtime:</b> {movieDetail.Runtime}
    </p>
  );
}
