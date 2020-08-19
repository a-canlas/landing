import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Billboard = props => {
  return (
    <>
      <Jumbotron name="billboard" className="billboard" id="billboard" fluid>
        <h1>Artworks by Redwulf</h1>
      </Jumbotron>
    </>
  );
};

export default Billboard;
