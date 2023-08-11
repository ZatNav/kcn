import React from "react";
import styles from "../../styles/footer.module.css";
import { Container } from "react-bootstrap";
import {
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				{/* Container for the first three columns */}
				<div className={styles["column-container"]}>
					<div className={styles.column}>
						{/* 1st Column: Company Logo */}
						<img
							src="logo_svg.svg"
							className="d-inline-block align-top"
							alt="KCN Solutions Logo"
						/>
					</div>
					<div className={styles.column}>
						{/* 2nd Column: Page Links */}
						<ul>
							<li>
								<a href="">Services</a>
							</li>
							<li>
								<a href="">Solutions</a>
							</li>
							<li>
								<a href="">Products</a>
							</li>
							<li>
								<a href="">Join Our Team</a>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						{/* 3rd Column: Location of the Office */}
						<div className={styles.location}>
							<div className={styles.locationIcon}>
								<FaMapMarkerAlt />
							</div>
							<div className={styles.locationInfo}>
								<span>
									Location 1: Umme Rammol. NAD ul Hammer Road, Dubai, UAE
								</span>
							</div>
						</div>
						<div className={styles.location}>
							<div className={styles.locationIcon}>
								<FaMapMarkerAlt />
							</div>
							<div className={styles.locationInfo}>
								<span>
									Location 2: Office # 04, First Floor, Ahmed Centre, I-8 Markaz
									Islamabad, Pakistan
								</span>
							</div>
						</div>
					</div>
				</div>
				<hr />
				{/* Additional bottom section */}
				<div className={styles["bottom-section"]}>
					<div>
						{/* Left side links */}
						<a href="#">Terms Of Use</a>
						{"|"}
						<a href="#"> Privacy Policy</a>
					</div>
					<p>
						&copy; {new Date().getFullYear()} KCN Solutions. All rights
						reserved.
					</p>
					<div className={styles.socialContent}>
						<div className={styles.socialIcon}>
							<FaFacebook />
						</div>
						<div className={styles.socialIcon}>
							<FaTwitter />
						</div>
						<div className={styles.socialIcon}>
							<FaInstagram />
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
