import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction/CallToAction';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import './Home.css';

const Home = () => {
  // Service cards data
  const services = [
    {
      title: "Custom Home Building",
      description: "We create bespoke homes designed specifically for you and your lifestyle, working closely with you from concept to completion.",
      link: "/projects-services#custom-homes"
    },
    {
      title: "Home Extensions",
      description: "Need more space? Our extension services seamlessly integrate with your existing home, providing additional living areas.",
      link: "/projects-services#extensions"
    },
    {
      title: "Renovations",
      description: "Transform your current space with our comprehensive renovation services, breathing new life into your home.",
      link: "/projects-services#renovations"
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
      <section className="welcome section">
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
      <section className="services-overview section">
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
                <Link to={service.link} className="btn">Learn More</Link>
              </div>
            ))}
          </div>
          
          <div className="text-center view-all" data-aos="fade-up" data-aos-delay="400">
            <Link to="/projects-services" className="btn">View All Services & Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="featured-testimonial section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">What Our Clients Say</h2>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-content">
              <p>We are incredibly happy with our new home and would highly recommend LenBuild to anyone. The team was very professional and personable, and their workmanship is amazing. Look no further than LenBuild for your next project.</p>
            </div>
            <div className="testimonial-author">
              <p>- Sarah & James Thompson</p>
            </div>
          </div>
          <div className="text-center view-all" data-aos="fade-up" data-aos-delay="300">
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