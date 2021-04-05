import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjaz | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt
          voluptatibus delectus fugiat quis quasi tempore officiis.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nemo laborum delectus repellendus modi temporibus nobis dolores ea.
          Tempora dicta amet consequatur, dolorum esse sapiente asperiores
          tenetur laudantium! Cum, esse?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Listings</a>
        </Link>
      </div>
    </>
  );
}
