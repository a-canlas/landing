import React from 'react';
import Container from 'react-bootstrap/Container';

const Contact = props => {
  return (
    <>
      <Container className="text-center" id="contact" fluid>
        <h3>Contact Me</h3>

        <a href="#mail" className="social"><i className="far fa-envelope" /> redwulfdraws@gmail.com</a> <span className="mx-1">&#124;</span>
        <a href="#twitter" className="social"><i className="fab fa-twitter"/> @rede4bed</a>

      </Container>

    </>
  );
};

export default Contact;
