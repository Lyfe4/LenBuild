import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

// Using destructuring with default values instead of defaultProps
const CallToAction = ({ 
  title = "Ready to Start Your Project?",
  text = "Contact us today to schedule a consultation and see how we can help bring your vision to life.",
  buttonText = "Contact Us Now",
  buttonLink = "/contact"
}) => {
  return (
    <section className="cta">
      <div className="container">
        <h2 data-aos="fade-up">
          {title}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          {text}
        </p>
        <Link 
          to={buttonLink} 
          className="btn animate-float" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;