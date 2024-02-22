import React from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/images/logo.svg';
import "../assets/css/About.css";
import '../assets/css/Background.css';


const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <div
        ref={ref}
        className={`fade-in-section ${inView ? 'is-visible' : ''}`}
      >
        {children}
      </div>
    );
  };
const About = () => {
    // Content strings (using prop to later apply as inner text)
    const sectionTitle = "Web Application Development";
    const mainHeading = "Empowering Healthcare through Advanced Information Solutions";
    const subHeading = "Revolutionizing Health Information Management and Web-based Software Solutions for Excellence in Healthcare.";
  
    return (
        
      <div className="about">
        
            <FadeInSection>
              <div className="text-container">
              <div className="section-title">{sectionTitle}<br></br></div>
              <h1 className="main-heading">{mainHeading}<br></br></h1>
              <p className="sub-heading">{subHeading}</p>
              </div>
          </FadeInSection>
          <FadeInSection>
              <div className="logo-container">
              {/* Replace the src with your actual image path */}
              <img src={logo} alt="Company Logo" />
              </div>
          </FadeInSection>
          {/* Social icons can also be added here */}
            
          </div>    
           
  
    );
  };
  
  export default About;