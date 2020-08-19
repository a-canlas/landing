import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = props => {
  return (
    <Container name="about" className="about" id="about" fluid>
      <Row>
        <Col xs={12}>
          <Image className="mx-auto d-block my-3" width="200px" height="200px" src="./assets/red1.png" roundedCircle/>
        </Col>
        <Col className="text-center">
          <h2>About Me</h2>
          <p className="larger-text">Drawing brings me great joy and I love being able to share what I create with the world. I&apos;m a self taught hobby artist who has been drawing &quot;animal people&quot; since I was a small kid. My interest in drawing these characters has led me on a journey where I have met so many great, talented people from all stretches of the world. I work primarily with digital media on my iPad Pro. My applications of choice are currently Procreate and Medibang. I also work with traditional media, utilizing Copic markers, pencils, Sakura Micron pens and a little watercolor. I strive to continue to grow and learn more techniques from observation, experimentation and practice. </p>
          <p className="larger-text">I hope you enjoy the works I have created. If you would like to commission me for a custom work of art, please visit my commission form</p>

        </Col>
      </Row>
    </Container>

  );
};

export default About;
