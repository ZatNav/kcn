import React, { useState } from "react";
import styles from "../../styles/header.module.css";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

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
        style={{ backgroundColor: "#2f455c", color: "white" }}
      >
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>
						{showServicesOffcanvas ? "KCN Services" : "KCN Products"}
					</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={`${styles.offNav} flex-column`}>
            {showServicesOffcanvas && (
              <>
                <Nav.Link onClick={closeOffcanvas} href="/services/1">
                  Turnkey Solutions
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/services/2">
                  Civil Structure Installation
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/services/3">
                  Telecom Installation
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/services/4">
                  In-building Solutions
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/services/5">
                  Core Network Installation
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/services/6">
                  Shelters & Diesel Generators
                </Nav.Link>
              </>
            )}
            {showProductsOffcanvas && (
              <>
                <Nav.Link onClick={closeOffcanvas} href="/products/1">
                  Power Systems for Telecom
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/2">
                  Battries & Backup Power Solutions
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/3">
                  Data Centre Rack and Cabinets
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/4">
                  UPS & Inverter System Solutions
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/5">
                  Fiber Patch Cords
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/6">
                  OSP and ISP Passive Materials
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/7">
                  Indoor Building Solutions Components
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/8">
                  RF Antenna & Components
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/9">
                  AC or DC Power Cable
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/10">
                  Solar Power Solutions
                </Nav.Link>
                <Nav.Link onClick={closeOffcanvas} href="/products/11">
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
