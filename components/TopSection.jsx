import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
const TopSection = ({ heading, text }) => {
	return (
		<section className={styles.hero}>
			<Container>
				<Row>
					<Col style={{ paddingTop: "50px" }} md={6}>
						<h1>{heading}</h1>
						<p style={{ textAlign: "justify" }}>{text}</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default TopSection;
