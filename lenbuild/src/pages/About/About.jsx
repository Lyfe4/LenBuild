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
      description: "We never compromise on quality. Every project, regardless of size, receives the same attention to detail and commitment to excellence.",
      defaultImage: require('../../assets/10 - Copy.jpg'),
      hoverImage: require('../../assets/Picture 3.jpg')
    },
    {
      title: "Client-Centered Approach",
      description: "We believe in transparent communication and involving our clients throughout the entire building process.",
      defaultImage: "/placeholder.jpg",
      hoverImage: "/placeholder2.jpg"
    },
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible building practices that create healthier, more efficient homes.",
      defaultImage: "/placeholder.jpg",
      hoverImage: "/placeholder2.jpg"
    }
  ];
  
  // Team members data
  const teamMembers = [
    {
      name: "Dan",
      position: "Director",
      bio: "Say hello to Dan, LenBuild's Director and the steady hand behind every project we take on. With over 15 years of experience in the building industry, Dan brings not only deep expertise but a genuine love for the craft, from the first sketch to the final fit-out. Known for his sharp eye for detail and unwavering commitment to quality, Dan thrives on helping clients turn their dreams into reality. He's across every aspect of the build, always ready to guide, problem-solve, and celebrate the wins, big and small. Outside of work, you'll find Dan unwinding in the great outdoors, He loves camping and casting a line on a quiet riverbank. Dan leads with integrity, care, and a deep respect for his team and community. He's not just the backbone of LenBuild—he's the heart.",
      image: "/placeholder.jpg"
    },
    {
      name: "Luke",
      position: "Lead Carpenter",
      bio: "Say hello to Luke, our lead Carpenter and one of LenBuild's most dedicated team members. Luke began his journey with us back in 2017 as an apprentice, and from day one, he's brought precision, pride, and a whole lot of heart to every project. With a keen eye for detail and unwavering loyalty, Luke has grown into a true leader on site. Favourite part of the job? The fit out stage where craftmanship meets creativity. Outside of work you'll find Luke keeping active with sports and fitness, or spending quality time with his family.",
      image: "/placeholder.jpg"
    },
    {
      name: "Archie",
      position: "3rd year Apprentice",
      bio: "Say hello to Archie, our third-year apprentice carpenter and a bit of a character on site. Since joining LenBuild, Archie's brought not just skill and enthusiasm, but plenty of laughs and positive energy to the crew. With a real knack for framing and fix-out, Archie thrives where structure meets precision and he's always up for a challenge. Outside of work, You'll find him on the footy field, bringing the same drive and team spirit to the game as he does to the build. We're proud to support Archie as he grows his skills and career. He's a hard worker and a quick learner. He is a true asset to the LenBuild team.",
      image: "/placeholder.jpg"
    },
    {
      name: "Caleb",
      position: "2nd year Apprentice",
      bio: "Say hello to Caleb, our second-year apprentice carpenter who's already making his mark on site. He has a particular interest in roofing, when the build starts to take shape He's got a quiet determination and a real appreciation for the process, always ready to learn and lend a hand. Caleb brings focus, reliability, and a calm presence to the crew. Outside of work, you'll find him fishing, camping, and just enjoying the outdoors We're proud to support Caleb as he grows his skills and career. He's hardworking, grounded, and a true asset to the LenBuild team.",
      image: "/placeholder.jpg"
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
      <section className="about-story section" id="story">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Story</h2>
          <div className="about-content">
            <div className="about-text" data-aos="fade-right" data-aos-delay="200">
              <p>LenBuild is a family-owned construction company specializing in creating high-quality homes where the journey is equally rewarding as the final product itself. For over 10 years, we've been building new homes and extensions in the local area, with each home custom designed and built by our team of architects, contractors, and employees.</p>
              <p>As industry leaders, we build architectural high-performing homes. Our collaborative pre-construction approach leads to an enjoyable building experience and a home that delivers sustainability and wellbeing for our clients.</p>
              <p>Our team of skilled craftsmen is hand-picked and renowned for their exceptional quality of work and attention to detail. We take pride in our ability to bring visions to life and create spaces that reflect the unique personalities and lifestyles of our clients.</p>
            </div>
            <div className="about-image" data-aos="fade-left" data-aos-delay="300">
              <ParallaxImage imgSrc={require('../../assets/5.jpg')} altText="LenBuild Construction" speed={0} />
            </div>
          </div>
          
          <div className="company-values">
            <h3 data-aos="fade-up">Our Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  className="value-card" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <div className="value-image-container">
                    <img 
                      src={value.defaultImage} 
                      alt={value.title}
                      className="value-image default"
                    />
                    <img 
                      src={value.hoverImage} 
                      alt={value.title}
                      className="value-image hover"
                    />
                  </div>
                  <div className="value-overlay">
                    <div className="value-content">
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
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
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default About;
