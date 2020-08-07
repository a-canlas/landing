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
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Gallery;
