import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import styles from "../../styles/home.module.css";
import Hero from "@/components/Hero";
import Whyus from "@/components/Whyus";
import Cta from "@/components/reuseable/Cta";

export default function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <Head>
        <title>KCN WEBSITE</title>
        <meta name="description" content="KCN Telecommunications Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}> */}

      <main>
        <Hero />
        <section className={styles.ourPortfolio}>
          <Container>
            <h1>Product {productId} Details</h1>
            {/* Render the product details */}
          </Container>
        </section>
        <Whyus />
        <Cta />
      </main>
    </div>
  );
}
