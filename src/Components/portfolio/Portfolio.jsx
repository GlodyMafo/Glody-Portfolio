import React, { useState } from 'react';
import Modal from 'react-modal';
import './Portfolio.css';

const projects = [
  {
    title: "Cmb menuiserie",
    category: "Web Application",
    imageUrl: "/cmbsite.png",
    demoUrl: "https://cmb-menuiserie.com/",
    githubUrl: ""
  },
 
  {
    title: "Project Title",
    category: "Branding",
    imageUrl: "",
  },
 
  {
    title: "Clock",
    category: "Graphic Design",
    imageUrl: "",
  },
  {
    title: "Coffee Cups",
    category: "Graphic Design",
    imageUrl: "",
  },
 
  
  {
    title: "Contact Book",
    category: "Web Application",
    imageUrl: "/contactBook.png",
    demoUrl: "https://glodymafo.github.io/Projet_Carnet_de_Contacts/",
    githubUrl: ""
  },
  {
    title: "GaRi Exposition",
    category: "Web Application",
    imageUrl: "/CarExpo.png",
    demoUrl: "",
    githubUrl: ""
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentDemoUrl, setCurrentDemoUrl] = useState('');
  const [currentGithubUrl, setCurrentGithubUrl] = useState('');

  const openModal = (imageUrl, demoUrl, githubUrl) => {
    setCurrentImage(imageUrl);
    setCurrentDemoUrl(demoUrl);
    setCurrentGithubUrl(githubUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
    setCurrentDemoUrl('');
    setCurrentGithubUrl('');
  };

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>MY PORTFOLIO</h2>
        <div className="portfolio-line"></div>
        <div className="portfolio-filters">
          {['All', 'Web Application', 'Graphic Design', 'Branding'].map((category, index) => (
            <button
              key={index}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img src={project.imageUrl} alt={project.title} />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <div className="portfolio-icons">
                  {project.category === 'Web Application' && (
                    <>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><i className="fas fa-search"></i></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><i className="fas fa-link"></i></a>
                    </>
                  )}
                  {project.category !== 'Web Application' && (
                    <>
                      <a href="#!"><i className="fas fa-search"></i></a>
                      <a href="#!"><i className="fas fa-link"></i></a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal} className="close-modal">X</button>
        <img src={currentImage} alt="Enlarged view" className="modal-image" />
        <div className="modal-links">
          {currentDemoUrl && (
            <a href={currentDemoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
          )}
          {currentGithubUrl && (
            <a href={currentGithubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Portfolio;
