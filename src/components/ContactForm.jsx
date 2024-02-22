import React from 'react';
import '../assets/css/Footer.css';


  const ContactForm = () => {
      return (
          <div className="contact-form-container">
              <div className="contact-text">Just an email away.</div>
              <form className="contact-form">
                  <div className="form-group">
                      <label htmlFor="idea">Idea:</label>
                      <textarea className="form-control" id="idea" rows="3" placeholder="Please enter your idea"></textarea>
                  </div>
                  <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" className="form-control" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" placeholder="email@gmail.com" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="contact">Contact:</label>
                      <input type="text" className="form-control" id="contact" placeholder="+977-0000000000" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
      );
  };
  
  export default ContactForm;
  