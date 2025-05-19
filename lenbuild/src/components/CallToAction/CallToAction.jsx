
import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = ({ title, text, buttonText, buttonLink }) => {
  return (
    <section className="cta">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={buttonLink} className="btn">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

// Default props
CallToAction.defaultProps = {
  title: "Ready to Start Your Project?",
  text: "Contact us today to schedule a consultation and see how we can help bring your vision to life.",
  buttonText: "Contact Us Now",
  buttonLink: "/contact"
};

export default CallToAction;