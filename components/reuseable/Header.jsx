import React, { useState } from "react";
import styles from "../../styles/header.module.css";
import {
	Container,
	Navbar,
	Nav,
	NavDropdown,
	Offcanvas,
} from "react-bootstrap";

const Header = () => {
	const [showServicesOffcanvas, setShowServicesOffcanvas] = useState(false);
	const [showProductsOffcanvas, setShowProductsOffcanvas] = useState(false);

	const toggleServicesOffcanvas = () => {
		setShowServicesOffcanvas(!showServicesOffcanvas);
	};

	const toggleProductsOffcanvas = () => {
		setShowProductsOffcanvas(!showProductsOffcanvas);
	};

	const closeOffcanvas = () => {
		setShowServicesOffcanvas(false);
		setShowProductsOffcanvas(false);
	};
	return (
		<>
			<Navbar expand="xl" className={styles.lgNav}>
				<Container>
					<Navbar.Brand href="/" className={styles.navLogo}>
						<img
							src="../logo_svg.svg"
							width="250"
							className="d-inline-block align-top"
							alt="KCN Solutions"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/industries">INDUSTRIES</Nav.Link>
							<Nav.Link href="/technology">TECHNOLOGY</Nav.Link>
							<Nav.Link onClick={toggleProductsOffcanvas}>PRODUCTS</Nav.Link>
							<Nav.Link onClick={toggleServicesOffcanvas}>SERVICES</Nav.Link>
							<Nav.Link href="/solutions">SOLUTIONS</Nav.Link>
							<Nav.Link href="/about">ABOUT</Nav.Link>
							<Nav.Link href="/contact">CONTACT</Nav.Link>
							<Nav.Link href="/" className={styles.ctaButton}>
								Get Started
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Offcanvas
				show={showServicesOffcanvas || showProductsOffcanvas}
				onHide={closeOffcanvas}
				placement="start"
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						{showServicesOffcanvas ? "KCN Services" : "KCN Products"}
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						{showServicesOffcanvas && (
							<>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/services/Turnkey%20Solutions"
								>
									Turnkey Solutions
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/services/Civil%20Structure%20Installation%20for%20all%20kinds%20of%20Towers%20&%20Poles"
								>
									Civil Structure Installation
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/services/Telecom%20Installation"
								>
									Telecom Installation
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/services/In-building%20Solutions"
								>
									In-building Solutions
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/services/Core%20Network%20Installation"
								>
									Core Network Installation
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/services/Shelters%20&%20Diesel%20Generators"
								>
									Shelters & Diesel Generators
								</Nav.Link>
							</>
						)}
						{showProductsOffcanvas && (
							<>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/Power%20Systems%20for%20Telecom"
								>
									Power Systems for Telecom
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/Batteries%20&%20backup%20Power%20Solutions"
								>
									Battries & Backup Power Solutions
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/Data%20Centre%20Rack%20and%20Cabinets"
								>
									Data Centre Rack and Cabinets
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/UPS%20&%20Inverter%20System%20Solutions"
								>
									UPS & Inverter System Solutions
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/Fiber%20Patch%20Cords"
								>
									Fiber Patch Cords
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/OSP%20and%20ISP%20Passive%20materials"
								>
									OSP and ISP Passive Materials
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/Indoor%20Building%20Solutions%20Components"
								>
									Indoor Building Solutions Components
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/RF%20Antenna%20&%20Components"
								>
									RF Antenna & Components
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/AC%20or%20DC%20Power%20Cable"
								>
									AC or DC Power Cable
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/Solar%20power%20Solutions"
								>
									Solar Power Solutions
								</Nav.Link>
								<Nav.Link
									onClick={closeOffcanvas}
									href="/products/EV%20charging%20Stations"
								>
									EV Charging Stations
								</Nav.Link>
							</>
						)}
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Header;
