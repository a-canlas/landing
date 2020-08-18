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
    comp.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
