import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import styles from "../../styles/home.module.css";
import Hero from "@/components/Hero";
import Whyus from "@/components/Whyus";
import Cta from "@/components/reuseable/Cta";
import TopSection from "@/components/TopSection";
import DetailsTab from "@/components/DetailsTab";

const domainHost = "https://kcn-mu.vercel.app/";

export async function getServerSideProps(context) {
  const productId = context.query.productId;

  // Fetch product details based on productId
  try {
    const response = await fetch(`${domainHost}/api/products/${productId}`);
    const product = await response.json();
    // console.log(product);

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      notFound: true,
    };
  }
}

export default function ProductDetails({ product }) {
  if (!product) {
    // Handle the case where the product data is not available
    // You can display an error message or redirect to a 404 page
    return (
      <div>
        <p>Product not found.</p>
      </div>
    );
  }

  const tabData = [
    {
      key: "details",
      title: "Details",
      content: product.details,
    },
    {
      key: "technical",
      title: "Technical Specs",
      content: product.technical,
    },
    {
      key: "documents",
      title: "Documents",
      content: product.documents,
    },
    // Add more tab data as needed
  ];

  return (
    <div>
      <Head>
        <title>KCN WEBSITE</title>
        <meta name="description" content="KCN Telecommunications Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopSection heading={product.name} text={product.description} />
        <DetailsTab tabData={tabData} />
        <Cta />
      </main>
    </div>
  );
}
