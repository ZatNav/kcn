import React from "react";
import TestimonialSwitch from "./reuseable/TestimonialSwitch";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/testimonial.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <Container>
        <h2>Testimonials --</h2>
        <Row className={styles.switch}>
          <Col md={6}>
            <TestimonialSwitch />
          </Col>
          <Col md={6} style={{ textAlign: "-webkit-center" }}>
            <img
              className="img-fluid"
              src="/home/testimonial-image.png"
              alt="Testimonials"
              style={{ marginTop: "-50px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
