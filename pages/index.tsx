import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/Banner';
import Card from '../components/Card';

import heroImage from '../public/static/hero-image.png';

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
        <div className={styles.heroImage}>
          <Image src={heroImage} alt="Hero image" width={700} height={400} />
        </div>
        <Card
          name="DarkHorse Coffee"
          href="/coffee-store/darkhorse-coffee"
          imgUrl="/static/hero-image.png"
        />
      </main>
    </div>
  );
};

export default Home;
