import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";
import Cta from "@/components/reuseable/Cta";
import ServicesStyle2 from "@/components/ServicesStyle2";
import TopSection from "@/components/TopSection";

function solutions() {
  return (
    <div>
      <Head>
        <title>KCN WEBSITE</title>
        <meta name="description" content="KCN Telecommunications Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}> */}
      <main>
        {/* Section 1 */}
        <TopSection
          heading={"Welcome to our Website"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
        {/* Section 2 */}
        <ServicesStyle2 />
        {/* Section 3 */}
        <Whyus />
        {/* Section 5 */}
        <Cta />
      </main>
    </div>
  );
}

export default solutions;
