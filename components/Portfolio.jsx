import React from "react";
import Slider from "./reuseable/Slider";
import { Container } from "react-bootstrap";
import styles from "../styles/home.module.css";

const Portfolio = () => {
  const slides = [
    {
      src: "5.jpg",
      heading: "First slide label",
      text: "First slide text",
    },
    {
      src: "6.jpg",
      heading: "Second slide label",
      text: "Second slide text",
    },
    {
      src: "9.jpg",
      heading: "Third slide label",
      text: "Third slide text",
    },
  ];
  return (
    <section className={styles.ourPortfolio}>
      <Container>
        <h2>Our Portfolio --</h2>
        <Slider slides={slides} />
      </Container>
    </section>
  );
};

export default Portfolio;
