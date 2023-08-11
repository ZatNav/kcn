import React from "react";
import { Container, Row, Col, Button, Tab, Tabs, Image } from "react-bootstrap";
import styles from "../styles/home.module.css";

const Whyus = () => {
	return (
		<section className={styles.whyUs}>
			<Container>
				<Row className={styles.whyUsRow}>
					<Col ld={5} className={styles.benefitsCol}>
						<h2>Why Choose Us?</h2>
						<Tabs
							defaultActiveKey="innovation"
							id="fill-tab-example"
							fill
							variant="underline"
						>
							<Tab eventKey="innovation" title="Innovation">
								At KCN, innovation is the cornerstone of our product range. From
								advanced power systems tailored for telecom to cutting-edge EV
								charging stations, we consistently pioneer solutions that
								redefine industry norms and pave the way for a smarter, more
								connected world.
							</Tab>
							<Tab eventKey="flexibility" title="Flexibility">
								We understand that each telecom setup is unique. That's why KCN
								offers a wide array of products, including batteries, data
								center solutions, and RF components. Our flexible offerings
								empower you to customize your solutions, ensuring a perfect fit
								for your project's specific requirements.
							</Tab>
							<Tab eventKey="speed-quality" title="Speed & Quality">
								Time is of the essence in the telecom industry, and KCN is your
								partner in rapid deployment. With products like UPS and indoor
								building components readily available, we enable swift project
								execution, helping you stay ahead in an ever-evolving landscape.
							</Tab>
							<Tab eventKey="support" title="Support">
								At KCN, quality isn't just a promise – it's a commitment. Our
								power systems, fiber patch cords, and solar solutions are
								meticulously designed and tested for uncompromised performance.
								Plus, our dedicated support team ensures you have the assistance
								you need, when you need it, to keep your telecom infrastructure
								running smoothly.
							</Tab>
						</Tabs>
					</Col>
					<Col md={1}></Col>
					<Col md={6} style={{ padding: "0" }}>
						{/* <Image src="why-us.png" fluid /> */}
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

export default Whyus;
