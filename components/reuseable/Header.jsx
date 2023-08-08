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
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/industries">INDUSTRIES</Nav.Link>
            <Nav.Link href="/technology">TECHNOLOGY</Nav.Link>
            <Nav.Link href="/products">PRODUCTS</Nav.Link>
            {/* <NavDropdown title="PRODUCTS" id="basic-nav-dropdown" href="/products">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/services">SERVICES</Nav.Link>
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
