// src/components/About.js
import './About.css';
const PDF = process.env.PUBLIC_URL + 'public/CV AGAPY MAFO.pdf';


const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + "/glody.JPG"} alt="Glody Mafo" />
          </div>
          <div className="about-text">
            <h2>ABOUT ME</h2>
            <div className="line"></div>
            <h1>I am Glody Mafo</h1>
            <h3>Full-Stack Web Developer and Graphic Designer</h3>
            <p>
              As a passionate web developer and graphic designer, I am driven by
              creating exceptional digital experiences that seamlessly blend
              aesthetics with functionality. With a meticulous and creative
              approach, I bring deep expertise in crafting intuitive user
              interfaces and developing robust, high-performance websites. Each
              project is an opportunity to innovate and push boundaries, always
              placing user experience at the forefront of my priorities. My
              professional ethos revolves around listening attentively to my
              clients' specific needs, delivering tailored solutions that exceed
              expectations. Beyond work, I am passionate about your personal
              interests, enriching my creativity and bringing a unique
              perspective to every project.
            </p>
          
            <div className="about-info">
              <div className="about-info__left">
                <p>
                  <strong>Name:</strong> Glody Mafo
                </p>
                <p>
                  <strong>Phone:</strong> +243 830117735
                </p>
              </div>

              <div className="about-info__right">
                <p>
                  <strong>Address:</strong> Lubumbashi, DRC
                </p>
                <p>
                  <strong>Email:</strong> glodymafokis@gmail.Com
                </p>
              </div>
            </div>
            <a href={PDF} download>

            <button className="btn download-cv">Download CV</button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
