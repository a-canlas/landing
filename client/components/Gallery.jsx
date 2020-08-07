import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Gallery extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item className="art-slide">
          <img
            src="./assets/xmascard2019.jpeg"
            className="d-block w-100"
            alt="Huntington Holiday Card" />
        </Carousel.Item>
        <Carousel.Item className="art-slide">
          <img
            src="./assets/LeoComputer.png"
            className="d-block w-100"
            alt="Fox on computer"
          />
        </Carousel.Item>
        <Carousel.Item className="art-slide">
          <img
            src="./assets/TawnyRoom.png"
            className="d-block w-100"
            alt="Trying on collar in room"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Gallery;
