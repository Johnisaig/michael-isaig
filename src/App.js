import React, { Component } from 'react';
import Routes from './Routes/Routes';
import Footer from './Layout/Footer';
import About from './Forms/About';
import Experience from './Forms/Experience';
import Skill from './Forms/Skill';
import Home from './Forms/Home';
import Technologies from './Forms/Technologies';
import Slides from './Forms/Slides';


class App extends Component { 
  render() {
    return (
      <div>
          <Routes/>
          <Home/>
          <Slides />
          <About/>
          <Experience/>
          <Technologies />
          <Skill/>
          <Footer/>
      </div>
    );
  }
}

export default App;
