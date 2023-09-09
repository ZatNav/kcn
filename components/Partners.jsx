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
            <img
              src="/partners/Dell_Logo.png"
              alt="Logo 1"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/footer_logo.png"
              alt="Logo 2"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/Hansen-Reverse-Colour.svg"
              alt="Logo 3"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/icomLogo.png"
              alt="Logo 4"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/logo.png"
              alt="Logo 5"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/symbolmark.png"
              alt="Logo 6"
              width={"75px"}
              height={"75px"}
            />
          </div>
          <div>
            <img
              src="/partners/LOGO_header.57e0e23.png"
              alt="Logo 1"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/img.jpg"
              alt="Logo 2"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/VMware-logo.png"
              alt="Logo 3"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/ISC-logo-1.png"
              alt="Logo 4"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/HON logo_200x37 2.png"
              alt="Logo 5"
              width={"75px"}
              height={"75px"}
            />
            <img
              src="/partners/Hengxin Technology Limited.png"
              alt="Logo 6"
              width={"75px"}
              height={"75px"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
