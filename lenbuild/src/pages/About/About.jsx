import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import CallToAction from '../../components/CallToAction/CallToAction';
import './About.css';

const About = () => {
  // Breadcrumbs for the page header
  const breadcrumbs = [
    { text: 'About Us' }
  ];
  
  return (
    <div className="about-page">
      <PageHeader title="About LenBuild" breadcrumbs={breadcrumbs} />
      
      {/* Story Section */}
      <section className="about-story section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
              <p>LenBuild is a family-owned construction company specializing in creating high-quality homes where the journey is equally rewarding as the final product itself. For over 10 years, we've been building new homes and extensions in the local area, with each home custom designed and built by our team of architects, contractors, and employees.</p>
              <p>As industry leaders, we build architectural high-performing homes. Our collaborative pre-construction approach leads to an enjoyable building experience and a home that delivers sustainability and wellbeing for our clients.</p>
              <p>Our team of skilled craftsmen is hand-picked and renowned for their exceptional quality of work and attention to detail. We take pride in our ability to bring visions to life and create spaces that reflect the unique personalities and lifestyles of our clients.</p>
            </div>
            <div className="about-image">
              <img src="/placeholder.jpg" alt="LenBuild Construction" />
            </div>
          </div>
          
          <div className="company-values">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-card">
                <h4>Quality Craftsmanship</h4>
                <p>We never compromise on quality. Every project, regardless of size, receives the same attention to detail and commitment to excellence.</p>
              </div>
              <div className="value-card">
                <h4>Client-Centered Approach</h4>
                <p>We believe in transparent communication and involving our clients throughout the entire building process.</p>
              </div>
              <div className="value-card">
                <h4>Sustainability</h4>
                <p>We're committed to environmentally responsible building practices that create healthier, more efficient homes.</p>
              </div>
              <div className="value-card">
                <h4>Innovation</h4>
                <p>We continuously seek out new techniques, materials, and technologies to improve our building processes and outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-intro">Our dedicated team brings together decades of experience and a shared commitment to excellence. We take pride in the relationships we build, both with our clients and within our team.</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="team-image">
                <img src="/placeholder.jpg" alt="Team Member" />
              </div>
              <div className="team-details">
                <h3>Daniel Johnson</h3>
                <div className="team-position">Director & Builder</div>
                <p>With over 20 years in the industry, Daniel leads our team with a commitment to quality and client satisfaction.</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="team-image">
                <img src="/placeholder.jpg" alt="Team Member" />
              </div>
              <div className="team-details">
                <h3>Jessica Miller</h3>
                <div className="team-position">Interior Designer</div>
                <p>Jessica brings spaces to life with her creative vision and attention to detail, ensuring each project reflects the client's unique style.</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="team-image">
                <img src="/placeholder.jpg" alt="Team Member" />
              </div>
              <div className="team-details">
                <h3>Robert Wilson</h3>
                <div className="team-position">Leading Hand</div>
                <p>Robert's craftsmanship and leadership on-site ensures every project maintains our high standards of quality.</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="team-image">
                <img src="/placeholder.jpg" alt="Team Member" />
              </div>
              <div className="team-details">
                <h3>Mark Taylor</h3>
                <div className="team-position">Project Manager</div>
                <p>Mark oversees all aspects of our projects, ensuring they're completed on time, within budget, and to our exacting standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section section" id="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>We are incredibly happy with our new home and would highly recommend LenBuild to anyone. The team was very professional and personable, and their workmanship is amazing. Look no further than LenBuild for your next project.</p>
              </div>
              <div className="testimonial-author">
                <p>- Sarah & James Thompson</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>LenBuild custom built our first new house. From the start of us giving them some sketches of our dream home to the final handover, we have had first-class support and assistance. All the costs were shared with us upfront and in detail. There were no hidden costs.</p>
              </div>
              <div className="testimonial-author">
                <p>- Michael Wilson</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>The LenBuild team embraced our dream to build a custom new home and made it a solid reality. With sensible advice from the design through planning to construction stage, we are now proud owners of a beautiful home that meets our expectations in every respect.</p>
              </div>
              <div className="testimonial-author">
                <p>- Rebecca & David Martin</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>We are very happy with the LenBuild team, very professional, workmanship A1, very obliging. Our extension worked out beautifully. It was a tricky project, but the outcome turned out perfectly!</p>
              </div>
              <div className="testimonial-author">
                <p>- John & Emily Parker</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default About;