import React from 'react';

type Props = {
  // movieDetail: {
  //   [key: string]: string;
  // };
};

const notAvailable = 'Not Available';
const emptyString = '';

export default function Blank({}: Props) {
  return <p className="py-3 hidden"></p>;
}
