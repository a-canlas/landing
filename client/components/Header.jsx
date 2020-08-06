import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="brand"><i className="fa fa-paw" /> Redwulf</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
