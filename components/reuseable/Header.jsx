import React from "react";
import styles from "../../styles/header.module.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
	return (
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
						{/* <Nav.Link href="/">HOME</Nav.Link> */}
						<Nav.Link href="/industries">INDUSTRIES</Nav.Link>
						<Nav.Link href="/technology">TECHNOLOGY</Nav.Link>
						{/* <Nav.Link href="/products">PRODUCTS</Nav.Link> */}
						<NavDropdown
							title="PRODUCTS"
							id="basic-nav-dropdown"
							href="/products"
						>
							<NavDropdown.Item href="/products/Power%20Systems%20for%20Telecom">
								Power Systems for Telecom
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/Batteries%20&%20backup%20Power%20Solutions">
								Battries & Backup Power Solutions
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/Data%20Centre%20Rack%20and%20Cabinets">
								Data Centre Rack and Cabinets
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/UPS%20&%20Inverter%20System%20Solutions">
								UPS & Inverter System Solutions
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/Fiber%20Patch%20Cords">
								Fiber Patch Cords
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/OSP%20and%20ISP%20Passive%20materials">
								OSP and ISP Passive Materials
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/Indoor%20Building%20Solutions%20Components">
								Indoor Building Solutions Components
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/RF%20Antenna%20&%20Components">
								RF Antenna & Components
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/AC%20or%20DC%20Power%20Cable">
								AC or DC Power Cable
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/Solar%20power%20Solutions">
								Solar Power Solutions
							</NavDropdown.Item>
							<NavDropdown.Item href="/products/EV%20charging%20Stations">
								EV Charging Stations
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="SERVICES"
							id="basic-nav-dropdown"
							href="/services"
						>
							<NavDropdown.Item href="/services/Turnkey%20Solutions">
								Turnkey Solutions
							</NavDropdown.Item>
							<NavDropdown.Item href="/services/Civil%20Structure%20Installation%20for%20all%20kinds%20of%20Towers%20&%20Poles">
								Civil Structure Installation
							</NavDropdown.Item>
							<NavDropdown.Item href="/services/Telecom%20Installation">
								Telecom Installation
							</NavDropdown.Item>
							<NavDropdown.Item href="/services/In-building%20Solutions">
								In-building Solutions
							</NavDropdown.Item>
							<NavDropdown.Item href="/services/Core%20Network%20Installation">
								Core Network Installation
							</NavDropdown.Item>
							<NavDropdown.Item href="/services/Shelters%20&%20Diesel%20Generators">
								Shelters & Diesel Generators
							</NavDropdown.Item>
						</NavDropdown>
						{/* <Nav.Link href="/services">SERVICES</Nav.Link> */}
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
	);
};

export default Header;
