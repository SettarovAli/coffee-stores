import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/Banner';
import Card from '../components/Card';

import heroImage from '../public/static/hero-image.png';

import styles from '../styles/Home.module.css';

import coffeeStoresData from '../data/coffee-stores.json';

export async function getStaticProps() {
  return {
    props: { coffeeStores: coffeeStoresData },
  };
}

const Home = ({
  coffeeStores,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        {coffeeStores.length !== 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => (
                <Card
                  key={coffeeStore.id}
                  className={styles.card}
                  name={coffeeStore.name}
                  href={`/coffee-store/${coffeeStore.id}`}
                  imgUrl={coffeeStore.imgUrl}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
