import React from 'react';
import './Home.css';
import { ReactTyped as Typed } from 'react-typed';
import SocialMediaLinks from './SocialMediaLinks';
import SidebarNavButtons from '../nav/SidebarNavButtons';
const PDF = process.env.PUBLIC_URL + 'public/CV AGAPY MAFO.pdf';


const Home = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="overlay"></div>
        <div className="content">
          <h1>Glody Mafo</h1>
          <p>
            I'm A{" "}
            <span className="highlight">
              <Typed
                strings={["Web Developer", "Graphic Designer", "Freelancer"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
              .
            </span>
          </p>
          <div className="buttons">
            <a href="#contact">
              <button className="btn hire-me">Hire Me</button>
            </a>

            <a href={PDF} download>
            <button className="btn download-cv">Download CV</button>
            </a>
          </div>
        </div>
        <SocialMediaLinks />
        <SidebarNavButtons />
      </div>
    </section>
  );
};

export default Home;
