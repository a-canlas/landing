import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="brand"><i className="fa fa-paw" /> Redwulf</Navbar.Brand>
      <Nav>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Work">Gallery</Nav.Link>
        <Nav.Link href="#Commission">Commissions</Nav.Link>
        <Nav.Link href="#Contact">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
