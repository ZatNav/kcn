import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/logoSection.module.css";

const Clients = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the code is running on the client side
    setIsClient(true);
  }, []);

  const pauseAnimationOnHover = () => {
    if (isClient) {
      // Execute this code only on the client side
      const logoSliderDiv = document.querySelector(`.${styles["logo-slider"]}`);
      if (logoSliderDiv) {
        logoSliderDiv.addEventListener("mouseenter", () => {
          logoSliderDiv.style.animationPlayState = "paused";
        });

        logoSliderDiv.addEventListener("mouseleave", () => {
          logoSliderDiv.style.animationPlayState = "running";
        });
      }
    }
  };
  return (
    <section className={styles.ourClients}>
      <Container>
        <h2>Our Clients --</h2>
        <div className={styles["logo-slider"]}>
          <div>
            <img src="/clients/ufone.jpg" alt="Logo 1" />
            <img src="/clients/ptcl.jpg" alt="Logo 2" />
            <img src="/clients/mobilink.jpg" alt="Logo 3" />
            <img src="/clients/zte.jpg" alt="Logo 4" />
            <img src="/clients/huawei.jpg" alt="Logo 5" />
            <img src="/clients/wi-tribe.jpg" alt="Logo 6" />
          </div>
          <div>
            <img src="/clients/motorola.jpg" alt="Logo 1" />
            <img src="/clients/nokia.jpg" alt="Logo 2" />
            <img src="/clients/etisalat.jpg" alt="Logo 3" />
            <img src="/clients/wateen.jpg" alt="Logo 4" />
            <img src="/clients/omantel.jpg" alt="Logo 5" />
            <img src="/clients/zong.jpg" alt="Logo 6" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
