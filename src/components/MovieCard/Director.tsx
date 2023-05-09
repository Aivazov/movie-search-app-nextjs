import React from 'react';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Director({ movieDetail }: Props) {
  return (
    <p className="py-3">
      <b>Director:</b> {movieDetail.Director}
    </p>
  );
}
