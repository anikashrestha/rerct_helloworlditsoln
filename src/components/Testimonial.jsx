import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';
import '../assets/css/TestimonialCard.css';

const testimonialsData = [
  {
    quote: "Great service and on time deliveries with exceptional servers.",
    name: "Rohit Kumar Shrestha",
    title: "Founder at Distar",
  },
  {
    quote: "I could not be more thrilled that I ended up deciding on Circle to become the home of the Lightbulb Moment community.",
    name: "Rohit Kumar Shrestha",
    title: "Founder at Kimatsu",
  },
  {
    quote: "Yet preference connection unpleasant yet melancholy but end appearance.",
    name: "Rohit Kumar Shrestha",
    title: "Founder at Google",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
        
            <motion.div
        className="testimonials-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-description">
          What our trusted client say
          <br />
          Community development is often linked with community work or community planning, and may involve stakeholders, foundations.
        </p>
        <div className="boxTestimonial">
        <div className="testimonials-wrapper">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        </div>
      </motion.div>
     
    </section>
  );
};

export default Testimonials;