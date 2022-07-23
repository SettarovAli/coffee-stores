import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/Banner';
import Card from '../components/Card';

import heroImage from '../public/static/hero-image.png';

import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const coffeeStoresData = await fetch(
    'https://api.foursquare.com/v3/places/search?query=coffee&ll=43.653833032607096%2C-79.37896808855945&limit=6',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: process.env.FOURSQUARE_API_KEY!,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.results);

  console.log(coffeeStoresData);

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
                  imgUrl={
                    coffeeStore.imgUrl ||
                    'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                  }
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
