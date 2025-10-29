// import Image from 'next/image';

type Props = {
  movieDetail: {
    [key: string]: string;
  };
};

export default function Poster({ movieDetail }: Props) {
  return (
    // <Image
    //   width={50}
    //   height={50}
    //   src={movieDetail.Poster}
    //   alt={movieDetail.Title}
    //   className='object-cover'
    // />
    <img
      width={50}
      height={50}
      src={movieDetail.Poster}
      alt={movieDetail.Title}
      className='object-cover'
    />
  );
}
