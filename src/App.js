import React from 'react';
import Landing from './sections/landing/landing';
import Projects from './sections/projects/projects';
import About from './sections/about/about';
import Footer from './sections/footer/footer';
import './index.scss';


function App() {
  return (
  <div>
    <Landing/>
    <Projects/>
    <About/>
    <Footer/>
  </div>
  );
}

export default App;
