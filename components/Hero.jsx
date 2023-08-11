import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Slider from "./reuseable/Slider";
const Hero = ({ heading }) => {
	return (
		<section className={`${styles.hero} img-fluid`}>
			{/* <video autoPlay muted loop className="video-background">
        <source src="homepage_video.mp4" type="video/mp4" />
      </video> */}
			<Container>
				<Row className={styles.heroRow}>
					<Col className={styles.leftColumn} md={8}>
						<h1>{heading ? heading : "KCN SOLUTIONS"}</h1>
						<p>
							Reshaping the technological landscape, equipping our clients with
							the means to thrive and adapting to the evolving demands of a
							dynamic world.
						</p>
						<input
							type="text"
							placeholder="Search"
							style={{ width: "-webkit-fill-available" }}
						/>
					</Col>
					<Col className={styles.rightColumn} md={4}>
						<Row className={styles.heroSlider}>
							<Slider />
						</Row>
						<Row className={styles.heroImages}>
							<Col className={styles.subColumn}>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-8-q9j5sg7wmhqmfpokv0uxq7zn9h8rx70ymkp182oli6.png"
									alt="Image 1"
									width={260}
									className="img-fluid"
									height={150}
								/>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-10-q9j5sj1f6zuhejkhek2tfpa11muvkac5mynhnwkezi.png"
									alt="Image 2"
									width={260}
									className="img-fluid"
									height={150}
								/>
							</Col>
							<Col className={styles.subColumn}>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-7-q9j5skx3knx21rhr3kw2kosy8ellzojmb7ygmghmn2.png"
									alt="Image 3"
									width={260}
									className="img-fluid"
									height={150}
								/>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-9-q9j5smsrybzmozf0slpbpobvf6ccf2r2zh9fl0euam.png"
									alt="Image 4"
									width={260}
									className="img-fluid"
									height={150}
								/>
								<Image
									src="https://webhustleagency.com/kcnn/wp-content/uploads/elementor/thumbs/Rectangle-11-q9j5soogc027c7cahmikunusly32ugyjnqkejkc1y6.png"
									alt="Image 5"
									width={260}
									className="img-fluid"
									height={150}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
