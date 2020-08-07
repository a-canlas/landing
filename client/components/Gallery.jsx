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
            <p>No matter where you are this year, may you find some holiday cheer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Gallery;
