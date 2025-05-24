import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction/CallToAction';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import './Home.css';

const Home = () => {
  // Scroll to section if hash in URL
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add slight delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  // Service cards data
  const services = [
    {
      title: "Custom Home Building",
      description: "We create bespoke homes designed specifically for you and your lifestyle, working closely with you from concept to completion.",
      link: "/projects-services#custom-homes",
      state: { scrollToTop: false }
    },
    {
      title: "Home Extensions",
      description: "Need more space? Our extension services seamlessly integrate with your existing home, providing additional living areas.",
      link: "/projects-services#extensions",
      state: { scrollToTop: false }
    },
    {
      title: "Renovations",
      description: "Transform your current space with our comprehensive renovation services, breathing new life into your home.",
      link: "/projects-services#renovations",
      state: { scrollToTop: false }
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 data-aos="fade-up">Quality Building Solutions For Your Home</h1>
            <p data-aos="fade-up" data-aos-delay="200">LenBuild is your trusted local builder, delivering exceptional craftsmanship and personalized service for all your building needs.</p>
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
              <Link to="/contact" className="btn btn-secondary animate-float">Get In Touch</Link>
              <Link to="/projects-services" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome section" id="welcome">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Welcome to LenBuild</h2>
          <div className="welcome-content">
            <div className="welcome-text" data-aos="fade-right" data-aos-delay="200">
              <p>LenBuild is a family-owned construction company specializing in creating high-quality homes where the journey is equally rewarding as the final product itself. For over 10 years, we've been building new homes and extensions in the local area, with each home custom designed and built by our team of architects, contractors, and employees.</p>
              <p>As industry leaders, we build architectural high-performing homes. Our collaborative pre-construction approach leads to an enjoyable building experience and a home that delivers sustainability and wellbeing for our clients.</p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </div>
            <div className="welcome-image" data-aos="fade-left" data-aos-delay="300">
              <ParallaxImage imgSrc="/placeholder.jpg" altText="LenBuild Construction" speed={0.1} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="services-overview section" id="services">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Services</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">At LenBuild, we offer a comprehensive range of building services, each delivered with the same commitment to quality and attention to detail.</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="service-card hover-lift" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                key={index}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} state={service.state} className="btn">Learn More</Link>
              </div>
            ))}
          </div>
          
          <div className="text-center view-all" data-aos="fade-up" data-aos-delay="400">
            <Link to="/projects-services" className="btn">View All Services & Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Recent Projects Showcase */}
      <section className="recent-projects section" id="recent-projects">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Recent Projects</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">Take a look at some of our latest completed projects, showcasing the quality and craftsmanship that defines LenBuild.</p>
          
          <div className="projects-grid">
            <div className="project-card" data-aos="fade-up" data-aos-delay="200">
              <div className="project-image">
                <ParallaxImage imgSrc="/placeholder.jpg" altText="Modern Family Home" speed={0.05} />
              </div>
              <div className="project-details">
                <h3>Modern Family Home</h3>
                <p className="project-type">Custom New Build</p>
                <p>A stunning 4-bedroom contemporary home featuring open-plan living, sustainable materials, and seamless indoor-outdoor flow. Completed with premium finishes throughout.</p>
                <div className="project-features">
                  <span>4 Bedrooms</span>
                  <span>3 Bathrooms</span>
                  <span>Double Garage</span>
                </div>
              </div>
            </div>
            
            <div className="project-card" data-aos="fade-up" data-aos-delay="300">
              <div className="project-image">
                <ParallaxImage imgSrc="/placeholder.jpg" altText="Heritage Home Extension" speed={0.05} />
              </div>
              <div className="project-details">
                <h3>Heritage Home Extension</h3>
                <p className="project-type">Extension & Renovation</p>
                <p>Sympathetic extension to a 1920s heritage home, adding modern amenities while preserving original character features and architectural details.</p>
                <div className="project-features">
                  <span>Kitchen Extension</span>
                  <span>Master Suite</span>
                  <span>Heritage Restoration</span>
                </div>
              </div>
            </div>
            
            <div className="project-card" data-aos="fade-up" data-aos-delay="400">
              <div className="project-image">
                <ParallaxImage imgSrc="/placeholder.jpg" altText="Luxury Renovation" speed={0.05} />
              </div>
              <div className="project-details">
                <h3>Luxury Renovation</h3>
                <p className="project-type">Complete Renovation</p>
                <p>Full transformation of a 1980s home into a modern luxury residence with high-end finishes, smart home technology, and energy-efficient systems.</p>
                <div className="project-features">
                  <span>Smart Home</span>
                  <span>Premium Finishes</span>
                  <span>Energy Efficient</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center view-all" data-aos="fade-up" data-aos-delay="500">
            <Link to="/projects-services" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
