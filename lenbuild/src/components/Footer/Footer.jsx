import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h3>LenBuild</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects-services">Projects & Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/projects-services#custom-homes" state={{ scrollToTop: false }}>Custom Home Building</Link></li>
              <li><Link to="/projects-services#extensions" state={{ scrollToTop: false }}>Home Extensions</Link></li>
              <li><Link to="/projects-services#renovations" state={{ scrollToTop: false }}>Renovations</Link></li>
              <li><Link to="/projects-services#energy-efficient" state={{ scrollToTop: false }}>Energy-Efficient Solutions</Link></li>
              <li><Link to="/projects-services#commercial" state={{ scrollToTop: false }}>Commercial Construction</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Connect With Us</h3>
            <ul className="social-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} LenBuild. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
