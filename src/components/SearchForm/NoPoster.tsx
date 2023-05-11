import React from 'react';
import NoSmallImage from '../../../public/static/no_image_small.jpg';
import Image from 'next/image';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function NoPoster({ movieDetail }: Props) {
  return (
    <Image
      src={NoSmallImage}
      // src="/static/no_image_small.jpg"
      width={50}
      height={50}
      alt={movieDetail.Title}
      placeholder="blur"
      className="object-cover"
    />
  );
}
