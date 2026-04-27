import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import apaLogo from '../../assets/apa.png';
import hiaLogo from '../../assets/thumbnail_image(2).png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
              <li><Link to="/projects-services#pac" state={{ scrollToTop: false }}>PAC</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Connect With Us</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/share/1BWm12D8cd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lenbuild_pty_ltd?igsh=MXM1eXVxdmUzbDIyZA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Professional Memberships Section */}
        <div className="memberships-section">
          <h3>Professional Memberships</h3>
          <div className="membership-logos">
            <div className="membership-item">
              <img src={apaLogo} alt="Australian Physiotherapy Association" className="membership-logo" />
            </div>
            <div className="membership-item">
              <img src={hiaLogo} alt="Housing Industry Association" className="membership-logo" />
            </div>
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
