import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import CallToAction from '../../components/CallToAction/CallToAction';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import './About.css';

const About = () => {
  // Breadcrumbs for the page header
  const breadcrumbs = [
    { text: 'About Us' }
  ];
  
  // Values data
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We never compromise on quality. Every project, regardless of size, receives the same attention to detail and commitment to excellence."
    },
    {
      title: "Client-Centered Approach",
      description: "We believe in transparent communication and involving our clients throughout the entire building process."
    },
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible building practices that create healthier, more efficient homes."
    },
    {
      title: "Innovation",
      description: "We continuously seek out new techniques, materials, and technologies to improve our building processes and outcomes."
    }
  ];
  
  // Team members data
  const teamMembers = [
    {
      name: "Daniel Johnson",
      position: "Director & Builder",
      bio: "With over 20 years in the industry, Daniel leads our team with a commitment to quality and client satisfaction.",
      image: "/placeholder.jpg"
    },
    {
      name: "Jessica Miller",
      position: "Interior Designer",
      bio: "Jessica brings spaces to life with her creative vision and attention to detail, ensuring each project reflects the client's unique style.",
      image: "/placeholder.jpg"
    },
    {
      name: "Robert Wilson",
      position: "Leading Hand",
      bio: "Robert's craftsmanship and leadership on-site ensures every project maintains our high standards of quality.",
      image: "/placeholder.jpg"
    },
    {
      name: "Mark Taylor",
      position: "Project Manager",
      bio: "Mark oversees all aspects of our projects, ensuring they're completed on time, within budget, and to our exacting standards.",
      image: "/placeholder.jpg"
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
  
  return (
    <div className="about-page">
      <PageHeader title="About LenBuild" breadcrumbs={breadcrumbs} />
      
      {/* Story Section */}
      <section className="about-story section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Story</h2>
          <div className="about-content">
            <div className="about-text" data-aos="fade-right" data-aos-delay="200">
              <p>LenBuild is a family-owned construction company specializing in creating high-quality homes where the journey is equally rewarding as the final product itself. For over 10 years, we've been building new homes and extensions in the local area, with each home custom designed and built by our team of architects, contractors, and employees.</p>
              <p>As industry leaders, we build architectural high-performing homes. Our collaborative pre-construction approach leads to an enjoyable building experience and a home that delivers sustainability and wellbeing for our clients.</p>
              <p>Our team of skilled craftsmen is hand-picked and renowned for their exceptional quality of work and attention to detail. We take pride in our ability to bring visions to life and create spaces that reflect the unique personalities and lifestyles of our clients.</p>
            </div>
            <div className="about-image" data-aos="fade-left" data-aos-delay="300">
              <ParallaxImage imgSrc="/placeholder.jpg" altText="LenBuild Construction" speed={0.1} />
            </div>
          </div>
          
          <div className="company-values">
            <h3 data-aos="fade-up">Our Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  className="value-card stagger-item" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section section" id="team">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Meet Our Team</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">Our dedicated team brings together decades of experience and a shared commitment to excellence. We take pride in the relationships we build, both with our clients and within our team.</p>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                className="team-member" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                key={index}
              >
                <div className="team-image zoom-on-hover">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <div className="team-position">{member.position}</div>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section section" id="testimonials">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">What Our Clients Say</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                className="testimonial-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100} 
                key={index}
              >
                <div className="testimonial-content">
                  <p>{testimonial.content}</p>
                </div>
                <div className="testimonial-author">
                  <p>- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default About;
