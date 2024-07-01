import React from 'react';
import './Home.css';
import { ReactTyped as Typed } from 'react-typed';
import SocialMediaLinks from './SocialMediaLinks';
import SidebarNavButtons from '../nav/SidebarNavButtons';

const Home = () => {
  return (
    <section id='home'>
      <div className="home">
        <div className="overlay"></div>
        <div className="content">
          <h1>Glody Mafo</h1>
          <p>I'm A <span className="highlight">
            <Typed
              strings={['Designer', 'Developper', 'Freelancer']}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            .</span></p>
          <div className="buttons">
            <button className="btn hire-me">Hire Me</button>
            <button className="btn download-cv">Download CV</button>
          </div>
        </div>
        <SocialMediaLinks />
        <SidebarNavButtons />

      </div>
    </section>

  );
};

export default Home;
