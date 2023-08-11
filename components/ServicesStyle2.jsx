import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/home.module.css";

const ServiceCard = ({ imgSrc, title, text }) => (
	<Card style={{ width: "18rem", marginBottom: "50px" }}>
		<Card.Img variant="top" src={imgSrc} />
		<Card.Body>
			<Card.Title
				style={{
					padding: "10px 0",
					fontWeight: "700",
				}}
			>
				{title}
			</Card.Title>
			<Card.Text>{text}</Card.Text>
		</Card.Body>
	</Card>
);

const ServicesStyle2 = ({ cardData }) => (
	<Row>
		{cardData.map((data, index) => (
			<Col key={index} md={4}>
				<ServiceCard imgSrc={data.imgSrc} title={data.title} text={data.text} />
			</Col>
		))}
	</Row>
);

export default ServicesStyle2;
