import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
// import styles from "./home.module.css";
import Homepage from "@/components/Homepage";
import Hero from "@/components/Hero";
import VideoBackgroundSection from "@/components/VideoBackgroundSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";
import Cta from "@/components/reuseable/Cta";
import Facts from "@/components/Facts";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/reuseable/Map";
import Link from "next/link";

export default function Home() {
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
        {/* <VideoBackgroundSection /> */}
        <About />
        <Services />
        <Whyus />
        <Cta />
        <Facts />
        <Portfolio />
        {/* <Slider /> */}
        {/* <Carousel /> */}
        <Partners />
        <Clients />
        <Testimonials />
        {/* <Map /> */}
        <Map />
      </main>
    </div>
  );
}
