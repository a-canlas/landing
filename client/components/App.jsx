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
    this.About = React.createRef();
  }

  scrollToComponent(comp) {
    comp.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <>
        <Header />
        <Billboard />
        <About ref={this.About}/>
        <Gallery />
        <Contact />
      </>
    );
  }
}

export default App;
