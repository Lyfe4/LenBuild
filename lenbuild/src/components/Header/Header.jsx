import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the very top
      setIsAtTop(currentScrollY === 0);
      
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
  
  // Dropdown menu data
  const dropdownMenus = {
    '/': [
      { label: 'Welcome', hash: '#welcome' },
      { label: 'Our Services', hash: '#services' },
      { label: 'Recent Projects', hash: '#recent-projects' }
    ],
    '/about': [
      { label: 'Our Story & Values', hash: '#story' },
      { label: 'Meet Our Team', hash: '#team' },
      { label: 'What Our Clients Say', hash: '#testimonials' }
    ],
    '/projects-services': [
      { label: 'Our Expertise', hash: '#expertise' },
      { label: 'Featured Projects', hash: '#projects' }
    ],
    '/contact': [
      { label: 'Get In Touch', hash: '#contact-form' },
      { label: 'Find Us', hash: '#map' },
      { label: 'FAQ', hash: '#faq' }
    ]
  };
  
  // Handle dropdown hover
  const handleDropdownEnter = (path) => {
    setActiveDropdown(path);
  };
  
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };
  
  // Check if current page has an image header (all pages including home)
  const hasImageHeader = true;
  
  // Determine if header should merge with page header image
  const shouldMergeWithImage = isAtTop && hasImageHeader;
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${navHidden ? 'nav-hidden' : ''} ${shouldMergeWithImage ? 'merged-with-image' : ''}`}>
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
              <li 
                className="nav-item-with-dropdown"
                onMouseEnter={() => handleDropdownEnter('/')}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/" className={isActive('/')}>Home</Link>
                {dropdownMenus['/'] && (
                  <div className={`dropdown-menu ${activeDropdown === '/' ? 'show' : ''}`}>
                    {dropdownMenus['/'].map((item, index) => (
                      <Link 
                        key={index}
                        to={`/${item.hash}`}
                        className="dropdown-item"
                        onClick={handleDropdownLeave}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li 
                className="nav-item-with-dropdown"
                onMouseEnter={() => handleDropdownEnter('/about')}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/about" className={isActive('/about')}>About</Link>
                {dropdownMenus['/about'] && (
                  <div className={`dropdown-menu ${activeDropdown === '/about' ? 'show' : ''}`}>
                    {dropdownMenus['/about'].map((item, index) => (
                      <Link 
                        key={index}
                        to={`/about${item.hash}`}
                        className="dropdown-item"
                        onClick={handleDropdownLeave}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li 
                className="nav-item-with-dropdown"
                onMouseEnter={() => handleDropdownEnter('/projects-services')}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/projects-services" className={isActive('/projects-services')}>Projects & Services</Link>
                {dropdownMenus['/projects-services'] && (
                  <div className={`dropdown-menu ${activeDropdown === '/projects-services' ? 'show' : ''}`}>
                    {dropdownMenus['/projects-services'].map((item, index) => (
                      <Link 
                        key={index}
                        to={`/projects-services${item.hash}`}
                        className="dropdown-item"
                        onClick={handleDropdownLeave}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li 
                className="nav-item-with-dropdown"
                onMouseEnter={() => handleDropdownEnter('/contact')}
                onMouseLeave={handleDropdownLeave}
              >
                <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                {dropdownMenus['/contact'] && (
                  <div className={`dropdown-menu ${activeDropdown === '/contact' ? 'show' : ''}`}>
                    {dropdownMenus['/contact'].map((item, index) => (
                      <Link 
                        key={index}
                        to={`/contact${item.hash}`}
                        className="dropdown-item"
                        onClick={handleDropdownLeave}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
