import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "../../styles/home.module.css";
import Whyus from "@/components/Whyus";
import Products from "@/components/Products";
import TopSection from "@/components/TopSection";
import Cta from "@/components/reuseable/Cta";

function products() {
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
					heading={"Our Products"}
					text={
						"KCN is a leading supplier of Telecom network, Power Systems and Data Centre products, specializing in providing high-quality solutions for the telecommunications industry. With years of experience and a commitment to innovation, KCN has established itself as a trusted partner for telecom operators, service providers, and network infrastructure companies worldwide."
					}
				/>
				{/* Section 2 */}
				<section className={styles.who}>
					<Container>
						<Row>
							<Col md={3} style={{ paddingTop: "50px" }}>
								<div className={styles.whoLeft}>
									<h2>Lorem Ipsum</h2>
								</div>
							</Col>
							<Col md={9}>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Similique cumque tempora rerum eius quos illo maiores, unde
									laudantium optio vitae animi, voluptatem, ratione officiis
									fugit dicta nulla cupiditate magni consequatur reiciendis!
									Aspernatur facere consequuntur voluptatum eaque odit corporis
									tenetur, libero aliquam fuga quod, magni quo eos quasi modi
									sequi, impedit recusandae neque.
								</p>
							</Col>
						</Row>
					</Container>
				</section>
				{/* Section 3 */}
				<Products />
				{/* Section 4 */}
				<Whyus />
				{/* Section 5 */}
				<Cta />
			</main>
		</div>
	);
}

export default products;
