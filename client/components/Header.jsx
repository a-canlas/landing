import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand className="brand"><i className="fa fa-paw" /> Redwulf</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Work">Gallery</Nav.Link>
          <Nav.Link href="#Commission">Commissions</Nav.Link>
          <Nav.Link href="#Contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
