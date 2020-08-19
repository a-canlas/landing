import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function Header(props) {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
      <Navbar.Brand className="brand"><i className="fa fa-paw" /> Redwulf</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="about" smooth={true} duration={500} offset={-55}>
            <Nav.Link as="span" href="#about">About</Nav.Link>
          </Link>
          <Link to="work" smooth={true} duration={500} offset={-55}>
            <Nav.Link as="span" href="#work">Gallery</Nav.Link>
          </Link>
          <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpga0br64iOw-0X6cYdw2wP3TfdWGG4T2qnFudQaY3XxQ9-w/closedform" target="_blank">Commissions</Nav.Link>
          <Nav.Link>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
