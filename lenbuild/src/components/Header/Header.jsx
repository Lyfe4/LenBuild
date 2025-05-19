import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled down from top
      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Hide nav on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${navHidden ? 'nav-hidden' : ''}`}>
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