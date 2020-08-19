import React from 'react';
import Header from './Header';
import Billboard from './Billboard';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Billboard />
        <About />
        <Gallery />
        <Contact />
      </>
    );
  }
}

export default App;
