import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction/CallToAction';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import './Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  
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
      title: "Extensions",
      description: "Need more space? Our extension services seamlessly integrate with your existing home, providing additional living areas.",
      link: "/projects-services#extensions",
      state: { scrollToTop: false }
    },
    {
      title: "Renovations",
      description: "Transform your current space with our comprehensive renovation services, breathing new life into your home.",
      link: "/projects-services#renovations",
      state: { scrollToTop: false }
    },
    {
      title: "Paid as a Consultant (PAC)",
      description: "Expert building consultation services to guide your project from planning to completion, providing professional advice and oversight.",
      link: "/projects-services#pac",
      state: { scrollToTop: false }
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      content: "Working with Lenbuild Pty Ltd has been an absolute pleasure over many years and across a variety of projects. They're our preferred builder for good reason—reliable, highly skilled, and consistently delivering exceptional quality. Dan and his team are masters of their craft, with a perfectionist's eye for detail and a genuine pride in their work that shines through in every build",
      author: "Martin & Teesh"
    },
    {
      content: "We engaged with LenBuild to take on an old farm homestead renovation project. With the view that we could make it a practical, modern, warm family home, although keeping the country feel it had before. Dan and his team went above and beyond to help us navigate this project from framing areas so we could visualize the space, sourcing products that fitted with the feel & look we were after at a reasonable price, and solved problem after problem as we embarked on this journey. He engaged with only the best contractors in the area that would meet his level of professionalism and perfection, so the whole project could come together. He challenged us to think about how to make the home work best for us in a cold Guyra climate and also understood the emotional attachment certain aspects of the old home meant to me and how to incorporate these in the project. LenBuild comes with our highest recommendation and would be the first team we would call if we were to do any more building projects in the future.",
      author: "Richard & Prue"
    }
  ];
  
  // Handle manual testimonial change
  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
    // Clear existing interval
    if (intervalId) {
      clearInterval(intervalId);
    }
    // Start new interval
    const newInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    setIntervalId(newInterval);
  };

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Change every 10 seconds
    
    setIntervalId(interval);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

      {/* About Us Section */}
      <section className="about-us section" id="about-us">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About LenBuild</h2>
          <div className="about-us-content">
            <div className="about-us-text" data-aos="fade-right" data-aos-delay="200">
              <p data-aos="fade-up" data-aos-delay="300">LenBuild is a trusted, family-operated building company based in Guyra, NSW, known for its commitment to quality craftsmanship, sustainable building practices, and personalized service. With deep roots in the local community, LenBuild specializes in custom homes and offers expert solutions in renovations, extensions, and new home construction.</p>
              <p data-aos="fade-up" data-aos-delay="400">The team is dedicated to using smarter, more sustainable construction methods. Every project is tailored to reflect the client's unique vision. LenBuild combines experience, innovation, and a family-first approach to help you with your new project.</p>
              <Link to="/about" className="btn" data-aos="fade-up" data-aos-delay="500">Learn More About Us</Link>
            </div>
            <div className="about-us-image" data-aos="fade-left" data-aos-delay="300">
              <ParallaxImage imgSrc="/placeholder.jpg" altText="LenBuild Construction" speed={0.1} />
            </div>
          </div>
          
          {/* Legacy Quote */}
          <div className="legacy-quote" data-aos="fade-up" data-aos-delay="600" data-aos-offset="200">
            <blockquote>We build homes that hold memories, moments, that last for generations</blockquote>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="services-overview section" id="services">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up" data-aos-offset="300">Our Services</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="50" data-aos-offset="300">At LenBuild, we offer a comprehensive range of building services, each delivered with the same commitment to quality and attention to detail.</p>
          
          <div className="services-grid">
            {services.map((service, index) => {
              // Reduced delays: first row (0,1) = 100,150ms, second row (2,3) = 200,250ms
              const delay = index < 2 ? 100 + (index * 50) : 200 + ((index - 2) * 50);
              return (
                <div 
                  className="service-card hover-lift" 
                  data-aos="fade-up" 
                  data-aos-delay={delay}
                  data-aos-offset="300"
                  key={index}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} state={service.state} className="btn">Learn More</Link>
                </div>
              );
            })}
          </div>
          
          <div className="text-center view-all" data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
            <Link to="/projects-services" className="btn">View All Services & Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section section" id="testimonials">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">What Our Clients Say</h2>
          
          <div className="testimonial-carousel" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-display" key={currentTestimonial}>
              <div className="testimonial-content" data-aos="fade-up" data-aos-delay="300">
                <p>"{testimonials[currentTestimonial].content}"</p>
              </div>
              <div className="testimonial-author" data-aos="fade-up" data-aos-delay="400">
                <p>— {testimonials[currentTestimonial].author}</p>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="testimonial-indicators" data-aos="fade-up" data-aos-delay="500">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => handleTestimonialChange(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
