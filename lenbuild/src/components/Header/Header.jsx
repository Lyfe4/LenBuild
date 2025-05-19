import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link to="/" className="logo">
            Len<span>Build</span>
          </Link>
          
          <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </div>
          
          <nav className={mobileMenuOpen ? 'mobile-menu-open' : ''}>
            <ul>
              <li>
                <Link to="/" className={isActive('/')}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={isActive('/about')}>About</Link>
              </li>
              <li>
                <Link to="/projects-services" className={isActive('/projects-services')}>Projects & Services</Link>
              </li>
              <li>
                <Link to="/contact" className={isActive('/contact')}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;