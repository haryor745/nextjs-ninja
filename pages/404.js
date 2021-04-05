import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Ninjaz | 404</title>
      </Head>
      <div className="not-found">
        <h1>Oops...</h1>
        <h2>Page Not Found</h2>
        <p>
          Back to{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default NotFound;
