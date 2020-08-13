import React from 'react';
import Container from 'react-bootstrap/Container';

const Contact = props => {
  return (
    <>
      <Container fluid>
        <h3>Contact Me</h3>

        <a href="#mail" className="social"><i className="far fa-envelope"/> redwulfdraws@gmail.com</a>
        <a href="#twitter" className="social"><i className="fab fa-twitter"/> @rede4bed</a>

      </Container>

    </>
  );
};

export default Contact;
