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
  const serviceId = context.query.serviceId;

  // Fetch service details based on serviceId
  try {
    const response = await fetch(`${domainHost}/api/services/${serviceId}`);
    const service = await response.json();
    console.log(service);

    if (!service) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        service,
      },
    };
  } catch (error) {
    console.error("Error fetching service details:", error);
    return {
      notFound: true,
    };
  }
}

export default function serviceDetails({ service }) {
  if (!service) {
    // Handle the case where the service data is not available
    // You can display an error message or redirect to a 404 page
    return (
      <div>
        <p>Service not found.</p>
      </div>
    );
  }

  const tabData = [
    {
      key: "details",
      title: "Details",
      content: service.description,
    },
    // {
    //   key: "technical",
    //   title: "Technical Specs",
    //   content: service.technical,
    // },
    // {
    //   key: "documents",
    //   title: "Documents",
    //   content: service.documents,
    // },
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
        <TopSection heading={service.name} text={service.description} />
        <DetailsTab tabData={tabData} />
        <Cta />
      </main>
    </div>
  );
}
