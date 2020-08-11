import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Gallery extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item className="art-slide">
          <picture>
            <source srcSet="./assets/leo-l.png" media="(min-width: 1400px)"/>
            <source srcSet="./assets/leo-m.png" media="(min-width: 768px)"/>
            <source srcSet="./assets/leo-s.png" media="(min-width: 576px)"/>
            <img
              srcSet="./assets/leo-xs.png"
              className="d-block w-100"
              alt="Fox on computer"
            />

          </picture>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Gallery;
