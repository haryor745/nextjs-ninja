import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};
function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninjaz | All</title>
      </Head>
      <h2>All Ninjas</h2>
      {ninjas.map((ninja) => {
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        );
      })}
    </>
  );
}
export default Ninjas;
