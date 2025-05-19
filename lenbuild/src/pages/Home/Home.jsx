import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction/CallToAction';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Quality Building Solutions For Your Home</h1>
            <p>LenBuild is your trusted local builder, delivering exceptional craftsmanship and personalized service for all your building needs.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
              <Link to="/projects-services" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome section">
        <div className="container">
          <h2 className="section-title">Welcome to LenBuild</h2>
          <div className="welcome-content">
            <div className="welcome-text">
              <p>LenBuild is a family-owned construction company specializing in creating high-quality homes where the journey is equally rewarding as the final product itself. For over 10 years, we've been building new homes and extensions in the local area, with each home custom designed and built by our team of architects, contractors, and employees.</p>
              <p>As industry leaders, we build architectural high-performing homes. Our collaborative pre-construction approach leads to an enjoyable building experience and a home that delivers sustainability and wellbeing for our clients.</p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </div>
            <div className="welcome-image">
              <img src="/placeholder.jpg" alt="LenBuild Construction" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="services-overview section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-intro">At LenBuild, we offer a comprehensive range of building services, each delivered with the same commitment to quality and attention to detail.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Custom Home Building</h3>
              <p>We create bespoke homes designed specifically for you and your lifestyle, working closely with you from concept to completion.</p>
              <Link to="/projects-services#custom-homes" className="btn">Learn More</Link>
            </div>
            <div className="service-card">
              <h3>Home Extensions</h3>
              <p>Need more space? Our extension services seamlessly integrate with your existing home, providing additional living areas.</p>
              <Link to="/projects-services#extensions" className="btn">Learn More</Link>
            </div>
            <div className="service-card">
              <h3>Renovations</h3>
              <p>Transform your current space with our comprehensive renovation services, breathing new life into your home.</p>
              <Link to="/projects-services#renovations" className="btn">Learn More</Link>
            </div>
          </div>
          
          <div className="text-center view-all">
            <Link to="/projects-services" className="btn">View All Services & Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="featured-testimonial section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>We are incredibly happy with our new home and would highly recommend LenBuild to anyone. The team was very professional and personable, and their workmanship is amazing. Look no further than LenBuild for your next project.</p>
            </div>
            <div className="testimonial-author">
              <p>- Sarah & James Thompson</p>
            </div>
          </div>
          <div className="text-center view-all">
            <Link to="/about#testimonials" className="btn">Read More Testimonials</Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;