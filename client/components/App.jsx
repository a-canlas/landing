import React from 'react';
import Header from './Header';
import Billboard from './Billboard';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToComponent = this.scrollToComponent.bind(this);
  }

  scrollToComponent(comp) {
    const node = document.querySelector(comp);
    const offset = 55;
    const elementPosition = node.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }

  render() {
    return (
      <>
        <Header navigate={this.scrollToComponent}/>
        <Billboard />
        <About />
        <Gallery />
        <Contact />
      </>
    );
  }
}

export default App;
