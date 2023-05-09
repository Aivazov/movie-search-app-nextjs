import React from 'react';
import Image from 'next/image';
import Runtime from './Runtime';
import Blank from './Blank';
import Director from './Director';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
  // component,
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Checker({ movieDetail }: Props) {
  return (
    <>
      {movieDetail.Director === 'N/A' ? (
        // <p className="py-3 hidden"></p>
        <Blank />
      ) : (
        // <p className="py-3">
        //   <b>Director:</b> {movieDetail.Director}
        //   </p>
        <Director movieDetail={movieDetail} />
      )}
    </>
    // <p className="py-3">
    //   <b>Checker: </b>
    //   {movieDetail.Actors === 'N/A' ? notAvailable : movieDetail.Actors}
    // </p>
  );
}
