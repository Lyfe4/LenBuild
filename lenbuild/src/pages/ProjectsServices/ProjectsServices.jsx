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
      id: 4,
      title: 'Downtown Office Complex',
      category: 'commercial',
      location: 'CBD',
      image: '/placeholder.jpg',
      year: '2023'
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
      description: 'We create bespoke homes designed specifically for you and your lifestyle, working closely with you from concept to completion to ensure your vision becomes reality. Our custom homes feature quality craftsmanship, energy-efficient designs, and thoughtful details that make your house a home.',
      features: [
        'Full architectural design services',
        'Energy-efficient building practices',
        'Premium materials and finishes',
        'Transparent project management'
      ],
      ctaText: 'Start Your Dream Home',
      projects: [
        {
          title: 'Modern Family Home',
          year: '2024',
          image: '/placeholder.jpg'
        },
        {
          title: 'Beachside Retreat',
          year: '2023',
          image: '/placeholder.jpg'
        }
      ]
    },
    {
      id: 'extensions',
      title: 'Home Extensions',
      description: 'Need more space? Our extension services seamlessly integrate with your existing home, providing additional living areas that match your home\'s character and style. We handle everything from design through to completion, ensuring minimal disruption to your daily life.',
      features: [
        'Second-story additions',
        'Living area extensions',
        'Seamless integration with existing structure',
        'Council approval management'
      ],
      ctaText: 'Expand Your Space',
      projects: [
        {
          title: 'Placeholder',
          year: 'This is placeholder info',
          image: require('../../assets/13.jpg')
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
      description: 'Transform your current space with our comprehensive renovation services, breathing new life into your home while enhancing functionality and aesthetics. From kitchen and bathroom renovations to complete home transformations, we deliver stunning results that exceed expectations.',
      features: [
        'Kitchen and bathroom renovations',
        'Interior reconfiguration',
        'Modern updates to older homes',
        'Premium fixtures and fittings'
      ],
      ctaText: 'Transform Your Home',
      projects: [
        {
          title: 'Bathroom Transformation',
          year: '2024',
          image: require('../../assets/11.jpg')
        }
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'From office spaces to retail outlets, we deliver high-quality commercial construction services tailored to your business needs and industry requirements. Our team understands the unique demands of commercial projects and delivers functional, attractive spaces on time and on budget.',
      features: [
        'Office fit-outs',
        'Retail space construction',
        'Restaurant and hospitality venues',
        'Medical and professional facilities'
      ],
      ctaText: 'Build Your Business',
      projects: [
        {
          title: 'Modern Office Fit-out',
          year: '2024',
          image: '/placeholder.jpg'
        },
        {
          title: 'Retail Shopfront',
          year: '2023',
          image: '/placeholder.jpg'
        }
      ]
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
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li className="stagger-item" key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="service-cta-btn">
                    {service.ctaText}
                  </Link>
                </div>
                <div className="project-gallery" data-aos="fade-left" data-aos-delay={300 + index * 50}>
                  {service.projects.map((project, i) => (
                    <div className={`project-item zoom-on-hover ${project.title === 'Placeholder' && i === 1 ? 'post-2-image' : ''}`} key={i}>
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <h4>{project.title}</h4>
                        <p>Completed {project.year}</p>
                      </div>
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
              className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('commercial')}
            >
              Commercial
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
