import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../../components/CallToAction/CallToAction';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import './Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
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

  // Testimonials data
  const testimonials = [
    {
      content: "We are incredibly happy with our new home and would highly recommend LenBuild to anyone. The team was very professional and personable, and their workmanship is amazing. Look no further than LenBuild for your next project.",
      author: "Sarah & James Thompson"
    },
    {
      content: "LenBuild custom built our first new house. From the start of us giving them some sketches of our dream home to the final handover, we have had first-class support and assistance. All the costs were shared with us upfront and in detail. There were no hidden costs.",
      author: "Michael Wilson"
    },
    {
      content: "The LenBuild team embraced our dream to build a custom new home and made it a solid reality. With sensible advice from the design through planning to construction stage, we are now proud owners of a beautiful home that meets our expectations in every respect.",
      author: "Rebecca & David Martin"
    },
    {
      content: "We are very happy with the LenBuild team, very professional, workmanship A1, very obliging. Our extension worked out beautifully. It was a tricky project, but the outcome turned out perfectly!",
      author: "John & Emily Parker"
    }
  ];
  
  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
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
          <h2 className="section-title" data-aos="fade-up">About Us</h2>
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
                  onClick={() => setCurrentTestimonial(index)}
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
