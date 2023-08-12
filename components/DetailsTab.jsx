import React from "react";
import { Container, Row, Col, Button, Tab, Tabs, Image } from "react-bootstrap";
import styles from "../styles/home.module.css";

const DetailsTab = ({ tabData }) => {
	return (
		<section className={styles.whyUs}>
			<Container>
				<Row className={styles.whyUsRow}>
					<Col ld={5} className={styles.benefitsCol}>
						<h2>View Full Details</h2>
						<Tabs
							defaultActiveKey={tabData[0].key}
							id="fill-tab-example"
							fill
							variant="underline"
						>
							{tabData.map((tab) => (
								<Tab key={tab.key} eventKey={tab.key} title={tab.title}>
									{tab.content}
								</Tab>
							))}
						</Tabs>
					</Col>
					<Col md={1}></Col>
					<Col md={6} style={{ padding: "0" }}>
						{/* Render the image here */}
						<img
							src="/why-us.png"
							alt="Why Choose Us"
							className="img-fluid"
							style={{ width: "auto", height: "100%" }}
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default DetailsTab;
