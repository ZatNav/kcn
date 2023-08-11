import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import TopSection from "@/components/TopSection";
import Cta from "@/components/reuseable/Cta";

function solutions() {
	return (
		<div>
			<Head>
				<title>KCN WEBSITE</title>
				<meta name="description" content="KCN Telecommunications Group" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <main className={styles.main}> */}
			<main>
				{/* Section 1 */}
				<TopSection
					heading={"Get In Touch"}
					text={
						"Need help with your website? The sharpest, hands-down support team in the biz is always just a click away from you!"
					}
				/>
				{/* Section 2 */}
				<section
					style={{
						backgroundColor: "#2f455c",
						color: "white",
					}}
				>
					<Container>
						<Row>
							<Col
								style={{
									padding: "50px 0",
								}}
							>
								<h2>Contact Us</h2>
								<p>Our friendly team would love to hear from you!</p>
								<ContactForm />
							</Col>
							<Col md={1}></Col>
							<Col style={{ padding: "0" }}>
								{/* <Image src="why-us.png" fluid /> */}
								<img
									src="/contact/form-beside.png"
									alt="Why Choose Us"
									className="img-fluid"
									style={{ width: "auto", height: "100%" }}
								/>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Section 3 */}
				<section style={{ margin: "50px 0" }}>
					<img
						className="img-fluid"
						src="/contact/join-team.png"
						width="100%"
						height="auto"
					/>
				</section>
				{/* Section 4 */}
				<section
					style={{
						backgroundColor: "#2f455c",
						color: "white",
					}}
				>
					<Container>
						<Row>
							<Col
								style={{
									padding: "50px 0",
								}}
							>
								<h2>Contact Us</h2>
								<p>Our friendly team would love to hear from you!</p>
								<ContactForm />
							</Col>
							<Col md={1}></Col>
							<Col style={{ padding: "0" }}>
								{/* <Image src="why-us.png" fluid /> */}
								<img
									src="/contact/form-beside.png"
									alt="Why Choose Us"
									className="img-fluid"
									style={{ width: "auto", height: "100%" }}
								/>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Section 5 */}
				<Cta />
			</main>
		</div>
	);
}

export default solutions;
