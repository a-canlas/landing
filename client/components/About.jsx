import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = props => {
  return (
    <Container className="about">
      <Row>
        <Col xs={12} s={1}>
          <Image src="./assets/red-pixel.PNG"/>
        </Col>
        <Col s={10}>
          <h2>About Me</h2>
          <p> Drawing brings me great joy and I love being able to share what I create with the world. I&apos;m a self taught hobby artist who has been drawing &quot;animal people&quot; since I was a small kid. My interest in drawing these characters has led me on a journey where I have met so many great, talented people from all stretches of the world. I strive to continue to grow and learn more techniques from observation, experimentation and practice. </p>
        </Col>
      </Row>
    </Container>

  );
};

export default About;