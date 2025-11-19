import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import CallToAction from '../../components/CallToAction/CallToAction';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
import './ProjectsServices.css';

const ProjectsServices = () => {
  // Breadcrumbs for the page header
  const breadcrumbs = [
    { text: 'Projects & Services' }
  ];
  
  // State for project filtering
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animatingFilter, setAnimatingFilter] = useState(false);
  
  // Project showcase data
  const projects = [
    {
      id: 1,
      title: 'Modern Family Residence',
      category: 'custom-homes',
      location: 'Sydney',
      image: '/placeholder.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Second Story Addition',
      category: 'extensions',
      location: 'North Sydney',
      image: '/placeholder.jpg',
      year: '2023'
    },
    {
      id: 3,
      title: 'Complete Kitchen Remodel',
      category: 'renovations',
      location: 'Eastern Suburbs',
      image: '/placeholder.jpg',
      year: '2024'
    },
    {
      id: 5,
      title: 'Coastal Retreat',
      category: 'custom-homes',
      location: 'Northern Beaches',
      image: '/placeholder.jpg',
      year: '2022'
    },
    {
      id: 6,
      title: 'Heritage Home Restoration',
      category: 'renovations',
      location: 'Inner West',
      image: '/placeholder.jpg',
      year: '2023'
    },
    {
      id: 7,
      title: 'Building Assessment & Consultation',
      category: 'pac',
      location: 'Guyra',
      image: '/placeholder.jpg',
      year: '2024'
    },
    {
      id: 8,
      title: 'Project Management Oversight',
      category: 'pac',
      location: 'Armidale',
      image: '/placeholder.jpg',
      year: '2023'
    }
  ];
  
  // Filter projects when filter changes
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  // Handle filter button click
  const handleFilterClick = (category) => {
    if (filter === category) return; // Don't re-filter if same category
    
    setAnimatingFilter(true);
    
    // First fade out
    setTimeout(() => {
      setFilter(category);
      
      // Then fade back in after filter is applied
      setTimeout(() => {
        setAnimatingFilter(false);
      }, 300);
    }, 300);
  };
  
  // Service categories data
  const services = [
    {
      id: 'custom-homes',
      title: 'Custom Home Building',
      description: 'At LenBuild, we believe your home should be as unique as you are. That\'s why every custom build begins with listening to your vision, lifestyle, and goals. From the first conversation to the final handover, we\'re by your side, turning ideas into spaces that feel truly yours.',
      additionalContent: 'As a trusted, family-operated building company based in Guyra, NSW, we bring over 15 years of experience, deep local knowledge, and a commitment to quality craftsmanship. Our process is collaborative and transparent, designed to make you feel confident and supported every step of the way.',
      processTitle: 'Here\'s how we do it:',
      features: [
        'Personalised Planning – We take the time to understand your needs, preferences, and budget, crafting a design that reflects your personality and priorities.',
        'Expert Craftsmanship – Our skilled team combines traditional techniques with smarter, more sustainable building practices to ensure your home is built to last.',
        'Clear Communication – You\'ll always know what\'s happening and why. We keep things simple, honest, and tailored to your comfort level.',
        'Sustainable Solutions – We care about the future of our community. That\'s why we use eco-conscious materials and methods wherever possible.'
      ],
      familyApproach: 'A Family-First Approach – We treat every build like it\'s our own, because we know it\'s more than just a house—it\'s your future.',
      ctaText: 'Start Your Dream Home',
      projects: [
        {
          title: 'Modern Family Home',
          year: '2024',
          image: require('../../assets/Website 3.jpg')
        },
        {
          title: 'Beachside Retreat',
          year: '2023',
          image: require('../../assets/14 - Copy.jpg')
        }
      ]
    },
    {
      id: 'extensions',
      title: 'Extensions',
      description: 'At LenBuild, we know that sometimes the perfect home just needs a little more room to grow. Whether you\'re welcoming new family members, craving a more functional layout, or simply ready to expand your lifestyle, our team is here to help you extend with confidence.',
      additionalContent: 'As a trusted, family-operated building company based in Guyra, NSW, we bring over 15 years of experience and a deep commitment to quality craftsmanship. Our approach to extensions is thoughtful and tailored—designed to enhance your existing home while staying true to its character.',
      processTitle: 'Here\'s how we make it happen:',
      features: [
        'Respect for Your Home\'s Story – We take the time to understand your current layout, style, and structure, ensuring every addition feels natural and cohesive.',
        'Tailored Design Solutions – Whether it\'s an extra bedroom, a larger living space, or a new entertaining area, we work closely with you to bring your vision to life.',
        'Expert Craftsmanship – Our skilled team combines hands-on experience with smarter, more sustainable building practices to deliver high-quality results.',
        'Clear, Honest Communication – We keep you informed and involved throughout the process, so you feel supported from planning to completion.',
        'Sustainable Building Methods – We look for opportunities to improve energy efficiency and reduce environmental impact—without compromising comfort or design.'
      ],
      ctaText: 'Expand Your Space',
      projects: [
        {
          title: 'Placeholder',
          year: 'This is placeholder info',
          image: require('../../assets/11.jpg')
        },
        {
          title: 'Placeholder',
          year: 'This is placeholder info',
          image: require('../../assets/Post 2.jpg')
        }
      ]
    },
    {
      id: 'renovations',
      title: 'Renovations',
      description: 'At LenBuild, we understand that renovating your home isn\'t just about updating spaces, it\'s about honouring what\'s already there while making room for what\'s next. Whether it\'s a growing family, a changing lifestyle, or a long-overdue refresh, we\'re here to help you reimagine your home with care, creativity, and craftsmanship.',
      additionalContent: 'As a trusted, family-operated building company based in Guyra, NSW, we bring over 15 years of experience and a deep connection to our community. Our renovation process is personal, collaborative, and tailored to your vision—because no two homes (or homeowners) are the same.',
      processTitle: 'Here\'s how we make it happen:',
      features: [
        'Respect for What Exists – We take the time to understand your home\'s story and structure, ensuring every change complements its character and enhances its function.',
        'Tailored Design Solutions – From layout tweaks to full-scale transformations, we work closely with you to create spaces that reflect your needs and style.',
        'Quality Craftsmanship – Our team combines hands-on experience with smarter, more sustainable building practices to deliver results that last.',
        'Clear, Honest Communication – We keep you informed and involved throughout the process, so you feel confident and supported from start to finish.'
      ],
      ctaText: 'Transform Your Home',
      projects: [
        {
          title: 'Bathroom Transformation',
          year: '2024',
          image: require('../../assets/Website 4 (2).JPG')
        },
        {
          title: 'Kitchen Renovation',
          year: '2024',
          image: require('../../assets/website 5.jpg')
        }
      ]
    },
    {
      id: 'pac',
      title: 'Paid as a Consultant (PAC)',
      description: 'The PAC (Paid as a Consultant) Process brings the builder into the design phase early, fostering trust, transparency, and smarter decision making from day one. The Paid pre-construction process creates collaboration between the builder, designer/architect and the client allowing us to be involved in the preliminary phase of the planning and designing of your new Home or Renovation.',
      features: [],
      ctaText: 'Get Expert Consultation',
      projects: []
    }
  ];
  
  // Scroll to service section if hash in URL
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
    <div className="projects-services-page">
      <PageHeader title="Projects & Services" breadcrumbs={breadcrumbs} />
      
      {/* Expertise Section */}
      <section className="expertise-section section" id="expertise">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Expertise</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">At LenBuild, we offer a comprehensive range of building services, each delivered with the same commitment to quality and attention to detail. Explore our services below and view examples of our completed projects.</p>
          
          {/* Service Categories */}
          {services.map((service, index) => (
            <div 
              className="service-category" 
              id={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={service.id}
            >
              <h3>{service.title}</h3>
              <div className="service-content">
                <div className="service-description" data-aos="fade-right" data-aos-delay={200 + index * 50}>
                  <p>{service.description}</p>
                  {service.additionalContent && <p>{service.additionalContent}</p>}
                  {service.processTitle && <p><strong>{service.processTitle}</strong></p>}
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li className="stagger-item" key={i}>{feature}</li>
                    ))}
                  </ul>
                  {service.familyApproach && <p><strong>{service.familyApproach}</strong></p>}
                  <Link to="/contact" className="service-cta-btn">
                    {service.ctaText}
                  </Link>
                </div>
                <div className="project-gallery" data-aos="fade-left" data-aos-delay={300 + index * 50}>
                  {service.projects.map((project, i) => (
                    <div className={`project-item zoom-on-hover ${project.title === 'Placeholder' && i === 1 ? 'post-2-image' : ''}`} key={i}>
                      <img src={project.image} alt={project.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Project Showcase */}
      <section className="project-showcase section" id="projects">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
          <p className="section-intro" data-aos="fade-up" data-aos-delay="100">Browse our portfolio of completed projects. Each represents our commitment to quality, innovation, and client satisfaction.</p>
          
          <div className="project-filter" data-aos="fade-up" data-aos-delay="200">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'custom-homes' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('custom-homes')}
            >
              Custom Homes
            </button>
            <button 
              className={`filter-btn ${filter === 'extensions' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('extensions')}
            >
              Extensions
            </button>
            <button 
              className={`filter-btn ${filter === 'renovations' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('renovations')}
            >
              Renovations
            </button>
            <button 
              className={`filter-btn ${filter === 'pac' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('pac')}
            >
              PAC
            </button>
          </div>
          
          <div className={`showcase-grid ${animatingFilter ? 'filtering' : ''}`}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="showcase-item" 
                data-category={project.category}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img src={project.image} alt={project.title} />
                <div className="showcase-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category === 'custom-homes' ? 'Custom Home' : 
                      project.category === 'extensions' ? 'Extension' :
                      project.category === 'renovations' ? 'Renovation' :
                      project.category === 'pac' ? 'PAC' :
                      project.category === 'commercial' ? 'Commercial' : ''} | {project.location}</p>
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

export default ProjectsServices;
