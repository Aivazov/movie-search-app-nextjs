import Head from 'next/head';
import type { NextPage } from 'next';
// import About from 'About';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });
type Props = {
  // Home: JSX.Element;
  // Main: JSX.Element;
};

const Home: NextPage = ({}: Props) => {
  return (
    <div className="normalizer">
      <Head>
        <title>Movie Search Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Main
          error={undefined}
          prev={undefined}
          // movieDetail={{
          // Poster: '',
          // Title: '',
          // Year: '',
          // Rated: '',
          // Released: '',
          // Genre: '',
          // Writer: '',
          // Plot: '',
          // Actors: '',
          // Language: '',
          // Awards: ''
          // }}
        />
        {/* <Main error={undefined} prev={undefined} /> */}
      </main>
    </div>
  );
};

export default Home;
