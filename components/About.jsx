import React from "react";
import styles from "../styles/home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const About = () => {
  return (
    <section className={styles.who}>
      <Container>
        <Row>
          <Col md={3} style={{ placeSelf: "center" }}>
            <div className={styles.whoLeft}>
              <h2>Who We Are</h2>
              <Button className={styles.whoBtn1} variant="primary">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md={9} className={styles.whoPara}>
            <p>
              KCN Group holds a significant repute & proverbial status in the
              field of Engineering, Telecommunication, Electro-mechanicals and
              Civil services since 1995 in Middle East &Asia. Over two decades,
              proved its capacity to undertake wide range of products & services
              along turnkey projects dedicated to respective industry. Our
              customers recognize our services by rewarding with nothing less
              than “Excellent”
            </p>
            <Button className={styles.whoBtn2} variant="primary">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
