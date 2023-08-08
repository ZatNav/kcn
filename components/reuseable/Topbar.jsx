import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styles from "../../styles/topbar.module.css";
import { Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Container className={styles.box}>
        <div className={styles.leftContent}>
          <div className={styles.icon}>
            <FaPhone />
          </div>
          <div className={styles.contactInfo}>
            <span>+9714-2860272</span>
          </div>
          <div className={styles.icon}>
            <FaEnvelope />
          </div>
          <div className={styles.contactInfo}>
            <span>info@kcn-group.com</span>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.socialIcon}>
            <FaFacebook />
          </div>
          <div className={styles.socialIcon}>
            <FaTwitter />
          </div>
          <div className={styles.socialIcon}>
            <FaInstagram />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
