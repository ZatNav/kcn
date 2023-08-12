import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Link from "next/link";

const Services = ({ items }) => {
	return (
		<section className={styles.services}>
			<Container>
				<h2>Hire Us For --</h2>
				<Row>
					{items.map((item, index) => (
						<Col key={index} ld={4}>
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
									src={item.imageSrc}
									style={{ width: "350px", height: "190px" }}
								/>
								<Card.Body
									style={{
										boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
										padding: "16px 0 0 0",
									}}
								>
									<div className={styles.cardTilt}></div>
									<Card.Title
										style={{
											padding: "20px",
											fontWeight: "700",
										}}
									>
										{item.title}
									</Card.Title>
									<Card.Text
										style={{
											padding: "0 20px 20px 20px",
											textAlign: "justify",
										}}
									>
										{item.description}
										<Link href={`/services/${item.title}`} passHref>
											Read More...
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				<Row>
					<Col style={{ textAlign: "center" }} md={12}>
						<button>View More</button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

Services.defaultProps = {
	items: [
		{
			imageSrc:
				"https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png",
			title: "Turnkey Solutions",
			description:
				"KCN delivers comprehensive turnkey solutions that encompass planning, design, implementation, and management. Our expertise ensures seamless project execution, meeting your telecom needs efficiently and effectively.",
		},
		{
			imageSrc:
				"https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png",
			title: "Civil Structure Installation for all kinds of Towers & Poles",
			description:
				"KCN specializes in expertly installing a variety of towers and poles, providing the structural foundation essential for reliable and optimized telecom operations.",
		},
		{
			imageSrc:
				"https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png",
			title: "Telecom Installation",
			description:
				"Our skilled teams ensure flawless installation of telecom equipment, ensuring seamless connectivity and functionality for enhanced user experiences.",
		},
		{
			imageSrc:
				"https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png",
			title: "In-building Solutions",
			description:
				"KCN optimizes indoor connectivity through tailored in-building solutions, guaranteeing strong and consistent signals for improved communication experiences.",
		},
		{
			imageSrc:
				"https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png",
			title: "Core Network Installation",
			description:
				"Trust KCN for the installation of core network components, ensuring the backbone of your communication infrastructure is secure and efficient.",
		},
		{
			imageSrc:
				"https://webhustleagency.com/kcnn/wp-content/uploads/2023/07/img.png",
			title: "Shelters & Diesel Generators",
			description:
				"KCN offers robust shelters and reliable diesel generators, ensuring uninterrupted telecom operations even in challenging environments.",
		},
	],
};

export default Services;
