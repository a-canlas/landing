import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Gallery extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src="./assets/xmascard2019.jpeg"
            className="d-block w-100"
            alt="Huntington Holiday" />
          <Carousel.Caption>
            <h3>Huntington Holiday 2019</h3>
            <p>Artwork for my 2019 holiday card</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./assets/LeoComputer.png"
            className="d-block w-100"
            alt="Leo Studying"
          />
          <Carousel.Caption>
            <h3>Tinkering</h3>
            <p>Digital commission made with Medibang</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Gallery;
