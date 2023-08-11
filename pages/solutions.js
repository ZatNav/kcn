import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";
import Cta from "@/components/reuseable/Cta";
import ServicesStyle2 from "@/components/ServicesStyle2";
import TopSection from "@/components/TopSection";

const cardData = [
	{
		imgSrc: "why-us.png",
		title: "Communication Networks",
		text: "Empower seamless connectivity with our comprehensive range of services tailored to communication networks. From telecom installation to signal boosting solutions, we ensure reliable communication infrastructure for enhanced connectivity in a digital world.",
	},
	{
		imgSrc: "why-us.png",
		title: "Cable Broadband",
		text: "Elevate broadband experiences with our expertise in telecom installation and network solutions. We specialize in enhancing cable broadband networks, delivering high-speed connectivity that keeps communities connected and engaged.",
	},
	{
		imgSrc: "why-us.png",
		title: "Aerospace & Defense",
		text: "Enabling mission-critical communication and infrastructure, we provide top-tier solutions for aerospace and defense industries. From rapid deployment to secure communication networks, our services support operations where reliability is paramount.",
	},
	{
		imgSrc: "why-us.png",
		title: "Data Centre",
		text: "Fueling the heart of digital operations, our services optimize data centers for peak performance. With a focus on power works and infrastructure, we ensure efficient and dependable facilities that drive data-driven innovation.",
	},
	{
		imgSrc: "why-us.png",
		title: "Renewable Energy",
		text: "Powering sustainability through our expertise in renewable energy solutions. Our services encompass solar energy installations, power works, and comprehensive project management to support the growth of clean and efficient energy sources.",
	},
	{
		imgSrc: "why-us.png",
		title: "Industrial Power & Utilities",
		text: "We deliver the backbone of power and utilities infrastructure for industrial sectors. With a focus on reliability and efficiency, our solutions ensure seamless operations in manufacturing, heavy industries, and utility sectors.",
	},
	{
		imgSrc: "why-us.png",
		title: "Logistics & Warehousing",
		text: "Enhance logistics and warehousing efficiency with our communication infrastructure solutions. We specialize in building reliable networks that streamline operations, optimize data management, and drive supply chain success.",
	},
	{
		imgSrc: "why-us.png",
		title: "Safety & Security",
		text: "Elevate safety and security measures with our comprehensive services. From robust shelters and infrastructure installations to communication solutions, we bolster emergency response and critical infrastructure protection.",
	},
	{
		imgSrc: "why-us.png",
		title: "Medical",
		text: "Empowering healthcare environments with reliable communication and power solutions. Our services cater to medical facilities, ensuring seamless connectivity and dependable power systems for enhanced patient care and research.",
	},
];

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
					heading={"Welcome to our Website"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					}
				/>
				{/* Section 2 */}
				<section className={styles.services}>
					<Container>
						<h2>Our Solutions --</h2>
						<ServicesStyle2 cardData={cardData} />
					</Container>
				</section>
				{/* Section 3 */}
				<Whyus />
				{/* Section 5 */}
				<Cta />
			</main>
		</div>
	);
}

export default solutions;
