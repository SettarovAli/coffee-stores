import type { NextPage } from 'next';
import Head from 'next/head';

import Banner from '../components/Banner';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const handleOnBannerBtnClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Stores</title>
        <meta name="description" content="Coffee Stores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
};

export default Home;
