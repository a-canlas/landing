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
            alt="Huntington Holiday Card" />
          <Carousel.Caption>
            <h3>Huntington Holiday 2019</h3>
            <p>Artwork for my 2019 holiday card</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./assets/LeoComputer.png"
            className="d-block w-100"
            alt="Fox on computer"
          />
          <Carousel.Caption>
            <h3>Tinkering</h3>
            <p>Digital commission made with Medibang</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./assets/TawnyRoom.png"
            className="d-block w-100"
            alt="Trying on collar in room"
          />
          <Carousel.Caption>
            <h3>My Safe Space</h3>
            <p>Digital commission made with Medibang</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Gallery;
