import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-text">{testimonial.quote}</p>
      <div className="testimonial-author">
        <div className="testimonial-name">{testimonial.name}</div>
        <div className="testimonial-title">{testimonial.title}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;