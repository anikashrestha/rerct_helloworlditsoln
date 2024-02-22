import React from 'react';
import OfficeInfo from './OfficeInfo';
import ContactForm from './ContactForm';
import '../assets/css/Footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
         
            <OfficeInfo />
            <ContactForm />
            
        </div>
        
    );
};

export default Footer;