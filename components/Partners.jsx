import React, { useEffect, useState } from "react";
import styles from "../styles/logoSection.module.css";
import { Container } from "react-bootstrap";

const Partners = () => {
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

  useEffect(() => {
    pauseAnimationOnHover();
  }, [isClient]);
  return (
    <section className={styles.ourPartners}>
      <Container>
        <h2>Our Partners --</h2>
        <div className={styles["logo-slider"]}>
          <div>
            <img src="clientLogo.png" alt="Logo 1" />
            <img src="clientLogo.png" alt="Logo 2" />
            <img src="clientLogo.png" alt="Logo 3" />
            <img src="clientLogo.png" alt="Logo 4" />
            <img src="clientLogo.png" alt="Logo 5" />
            <img src="clientLogo.png" alt="Logo 6" />
          </div>
          <div>
            <img src="clientLogo.png" alt="Logo 1" />
            <img src="clientLogo.png" alt="Logo 2" />
            <img src="clientLogo.png" alt="Logo 3" />
            <img src="clientLogo.png" alt="Logo 4" />
            <img src="clientLogo.png" alt="Logo 5" />
            <img src="clientLogo.png" alt="Logo 6" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
