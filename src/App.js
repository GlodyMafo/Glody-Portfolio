import React from 'react';
import './App.css';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Navbar from './Components/nav/Nav';
import Services from './Components/service/Services';
import Resume from './Components/resume/Resume';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonial />
      <Contact />





    </div>
  );
}

export default App;
