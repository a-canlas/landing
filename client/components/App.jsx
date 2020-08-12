import React from 'react';
import Header from './Header';
import About from './About';
import Gallery from './Gallery';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Gallery />
      </>
    );
  }
}

export default App;
