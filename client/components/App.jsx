import React from 'react';
import Header from './Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Gallery />
        <Contact />
      </>
    );
  }
}

export default App;
