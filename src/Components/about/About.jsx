// src/components/About.js
import './About.css';

const About = () => {
  return (
    <section id='about'>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + '/glody.JPG'} alt="Glody Mafo" />
          </div>
          <div className="about-text">
            <h2>ABOUT ME</h2>
            <div className="line"></div>
            <h1>I am Glody Mafo</h1>
            <h3>I am a Full-Stack Web Developer</h3>
            <p>
              I am a freelancer based in New York, USA, and I'm very passionate and dedicated to my work.
              With 7 years of experience as a professional Full-Stack Web Developer, I have acquired the
              skills necessary to build great and premium websites.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
            <div className="about-info">
              <div className='about-info__left'>
                <p><strong>Name:</strong> Glody Mafo</p>
                <p><strong>Phone:</strong> +243 994 924 437 </p>
                <p><strong>Website:</strong> Example.Com</p>
              </div>

              <div className='about-info__right'>
                <p><strong>Age:</strong>  26</p>
                <p><strong>Address:</strong>  Lubumbashi, DRC</p>
                <p><strong>Email:</strong>  glodymafok@gmail.Com</p>
              </div>

            </div>
            <button className="btn download-cv">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
