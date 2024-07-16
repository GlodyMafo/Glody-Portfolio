
import React from 'react';
import './Resume.css';

const experiences = [
  {
    title: "Full Stack Developer",
    date: "2017 - 2019",
    type: "Freelance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Web Designer",
    date: "2015 - 2017",
    type: "Freelance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "UI/UX Designer",
    date: "2012 - 2015",
    type: "Freelance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Graphic Designer",
    date: "2012 - 2015",
    type: "Freelance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <h2>MY RESUME</h2>
        <div className="myline"></div>
        <div className="resume-grid">
          <div className="vertical-line"></div>
          {experiences.map((experience, index) => (
            <div key={index} className={`resume-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{experience.title}</h3>
              <p className="resume-date">{experience.date} | {experience.type}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
