import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../styles/home.module.css";

const IconCard = ({ heading, text }) => {
  return (
    <Card
      style={{
        width: "18rem",
        borderWidth: "0px",
        marginBottom: "50px",
      }}
    >
      <Card.Img
        variant="top"
        className={styles.cardIcon}
        src="idea.png"
        style={{ width: "100px", height: "auto" }}
      />
      <Card.Body>
        <Card.Title>{heading}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IconCard;
