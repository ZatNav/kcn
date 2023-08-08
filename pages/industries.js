import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Cta from "@/components/reuseable/Cta";
import ServicesStyle2 from "@/components/ServicesStyle2";

function industries() {
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
        <section className={styles.hero}>
          <Container>
            <Row>
              <Col style={{ paddingTop: "50px" }} md={8}>
                <h1>Welcome to our Website</h1>
                <p style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section 2 */}
        <section className={styles.who}>
          <Container>
            <Row>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique cumque tempora rerum eius quos illo maiores, unde
                laudantium optio vitae animi, voluptatem, ratione officiis fugit
                dicta nulla cupiditate magni consequatur reiciendis! Aspernatur
                facere consequuntur voluptatum eaque odit corporis tenetur,
                libero aliquam fuga quod, magni quo eos quasi modi sequi,
                impedit recusandae neque. Magni ipsum tempora nam veniam. Sequi
                voluptatum natus deserunt facilis eligendi itaque non excepturi
                officiis veniam? Ullam saepe alias necessitatibus praesentium
                nulla quibusdam iusto quis numquam repudiandae qui, soluta
                quisquam facilis optio fuga vero in distinctio enim repellat?
                Quo dolores, quod aut sunt magnam similique repellendus sapiente
                ex.
              </p>
              <Col md={6} style={{ paddingTop: "50px" }}>
                <div className={styles.whoLeft}>
                  <img
                    className="img-fluid"
                    src="info1.png"
                    alt="Why Choose Us"
                  />
                </div>
              </Col>
              <Col md={6}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique cumque tempora rerum eius quos illo maiores, unde
                  laudantium optio vitae animi, voluptatem, ratione officiis
                  fugit dicta nulla cupiditate magni consequatur reiciendis!
                  Aspernatur facere consequuntur voluptatum eaque odit corporis
                  tenetur, libero aliquam fuga quod, magni quo eos quasi modi
                  sequi, impedit recusandae neque. Magni ipsum tempora nam
                  veniam. Sequi voluptatum natus deserunt facilis eligendi
                  itaque non excepturi officiis veniam? Ullam saepe alias
                  necessitatibus praesentium nulla quibusdam iusto quis numquam
                  repudiandae qui, soluta quisquam facilis optio fuga vero in
                  distinctio enim repellat? Quo dolores, quod aut sunt magnam
                  similique repellendus sapiente ex.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique cumque tempora rerum eius quos illo maiores, unde
                  laudantium optio vitae animi, voluptatem, ratione officiis
                  fugit dicta nulla cupiditate magni consequatur reiciendis!
                  Aspernatur facere consequuntur voluptatum eaque odit corporis
                  tenetur, libero aliquam fuga quod, magni quo eos quasi modi
                  sequi, impedit recusandae neque. Magni ipsum tempora nam
                  veniam. Sequi voluptatum natus deserunt facilis eligendi
                  itaque non excepturi officiis veniam? Ullam saepe alias
                  necessitatibus praesentium nulla quibusdam iusto quis numquam
                  repudiandae qui, soluta quisquam facilis optio fuga vero in
                  distinctio enim repellat? Quo dolores, quod aut sunt magnam
                  similique repellendus sapiente ex.
                </p>
                <Button>CONNECT WITH US</Button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section 3 */}
        <ServicesStyle2 />
        {/* Section 4 */}
        {/* Section 5 */}
        <section className={styles.services}>
          <Container>
            <h2>Hire Us For --</h2>
            <Row>
              {/* Stylish Card for Service 1 */}
              <Col md={4}>
                <Card
                  style={{
                    width: "315px",
                    marginBottom: "50px",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
                    style={{ width: "350px", height: "190px" }}
                  />
                  <Card.Body>
                    <div className={styles.cardTilt}></div>
                    <Card.Title
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Card Title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Stylish Card for Service 2 */}
              <Col md={4}>
                <Card
                  style={{
                    width: "315px",
                    marginBottom: "50px",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
                    style={{ width: "350px", height: "190px" }}
                  />
                  <Card.Body>
                    <div className={styles.cardTilt}></div>
                    <Card.Title
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Card Title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Stylish Card for Service 3 */}
              <Col md={4}>
                <Card
                  style={{
                    width: "315px",
                    marginBottom: "50px",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
                    style={{ width: "350px", height: "190px" }}
                  />
                  <Card.Body>
                    <div className={styles.cardTilt}></div>
                    <Card.Title
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Card Title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              {/* Stylish Card for Service 4 */}
              <Col md={4}>
                <Card
                  style={{
                    width: "315px",
                    marginBottom: "50px",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
                    style={{ width: "350px", height: "190px" }}
                  />
                  <Card.Body>
                    <div className={styles.cardTilt}></div>
                    <Card.Title
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Card Title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Stylish Card for Service 5 */}
              <Col md={4}>
                <Card
                  style={{
                    width: "315px",
                    marginBottom: "50px",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
                    style={{ width: "350px", height: "190px" }}
                  />
                  <Card.Body>
                    <div className={styles.cardTilt}></div>
                    <Card.Title
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Card Title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Stylish Card for Service 6 */}
              <Col md={4}>
                <Card
                  style={{
                    width: "315px",
                    marginBottom: "50px",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png"
                    style={{ width: "350px", height: "190px" }}
                  />
                  <Card.Body>
                    <div className={styles.cardTilt}></div>
                    <Card.Title
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Card Title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingLeft: "20px", paddingRight: "20px" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: "center" }} md={12}>
                <button>View More</button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section 6 */}
        <Cta />
      </main>
    </div>
  );
}

export default industries;
