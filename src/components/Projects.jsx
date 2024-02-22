import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../assets/css/Project.css';
import zero from '../assets/images/services.png';
import one from '../assets/images/service2.png';

const ProjectCard = ({ title, description, tags, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={`project-card ${inView ? 'fade-in' : ''}`} ref={ref}>
      <div className="project-card-image" style={{ backgroundImage: `url(${image})` }} /> 

      <div className="project-card-details">
    <h3>{title}</h3>
    <div className="project-card-tags">
      {tags.map((tag, index) => (
        <span key={index} className="project-tag">{tag}</span>
      ))}
    </div>
    <p>{description}</p>
  </div>     
    </div>
    
  );
};

const Button = ({ text, onClick }) => (
  <button className="cta-button" onClick={onClick}>{text}</button>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Save the Children',
      description: 'Our works for Nepal Tuberculosis center includes various applications with DHIS2 data management framework, DHIS2 customization and data dashboard preparation of the data sent by Genexpert Machines.',
      tags: ['QMKMS', 'Web Application', 'Responsive', 'DHIS2'],
      image: {zero},
    },
    {
      title: 'Distar Home',
      description: 'This work represents the quality assurance part we provide for our clients. It is a very well-tested system which handles a large amount of data from all the technical problems faced by the customer of Distar.',
      tags: ['Web Application', 'Ticketing System', 'Django'],
      image: {one},
    },
  ];

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <section className="projects-section">
      <h2>Our Services</h2>
      <p>Successful projects speak our praise more than the claims of our unseen expertise.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <Button text="Work with Us" onClick={handleButtonClick} />
    </section>
  );
};

export default ProjectsSection;