import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import CallToAction from '../../components/CallToAction/CallToAction';
import './ProjectsServices.css';

const ProjectsServices = () => {
  // Breadcrumbs for the page header
  const breadcrumbs = [
    { text: 'Projects & Services' }
  ];
  
  // State for project filtering
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
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
    setFilter(category);
  };
  
  // Scroll to service section if hash in URL
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Add slight delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);
  
  return (
    <div className="projects-services-page">
      <PageHeader title="Projects & Services" breadcrumbs={breadcrumbs} />
      
      {/* Expertise Section */}
      <section className="expertise-section section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-intro">At LenBuild, we offer a comprehensive range of building services, each delivered with the same commitment to quality and attention to detail. Explore our services below and view examples of our completed projects.</p>
          
          {/* Service Category 1 */}
          <div className="service-category" id="custom-homes">
            <h3>Custom Home Building</h3>
            <div className="service-content">
              <div className="service-description">
                <p>We create bespoke homes designed specifically for you and your lifestyle, working closely with you from concept to completion to ensure your vision becomes reality. Our custom homes feature quality craftsmanship, energy-efficient designs, and thoughtful details that make your house a home.</p>
                <ul className="service-features">
                  <li>Full architectural design services</li>
                  <li>Energy-efficient building practices</li>
                  <li>Premium materials and finishes</li>
                  <li>Transparent project management</li>
                </ul>
              </div>
              <div className="project-gallery">
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Custom Home Project 1" />
                  <div className="project-overlay">
                    <h4>Modern Family Home</h4>
                    <p>Completed 2024</p>
                  </div>
                </div>
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Custom Home Project 2" />
                  <div className="project-overlay">
                    <h4>Beachside Retreat</h4>
                    <p>Completed 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Category 2 */}
          <div className="service-category" id="extensions">
            <h3>Home Extensions</h3>
            <div className="service-content">
              <div className="service-description">
                <p>Need more space? Our extension services seamlessly integrate with your existing home, providing additional living areas that match your home's character and style. We handle everything from design through to completion, ensuring minimal disruption to your daily life.</p>
                <ul className="service-features">
                  <li>Second-story additions</li>
                  <li>Living area extensions</li>
                  <li>Seamless integration with existing structure</li>
                  <li>Council approval management</li>
                </ul>
              </div>
              <div className="project-gallery">
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Extension Project 1" />
                  <div className="project-overlay">
                    <h4>Second Story Addition</h4>
                    <p>Completed 2024</p>
                  </div>
                </div>
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Extension Project 2" />
                  <div className="project-overlay">
                    <h4>Living Area Extension</h4>
                    <p>Completed 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Category 3 */}
          <div className="service-category" id="renovations">
            <h3>Renovations</h3>
            <div className="service-content">
              <div className="service-description">
                <p>Transform your current space with our comprehensive renovation services, breathing new life into your home while enhancing functionality and aesthetics. From kitchen and bathroom renovations to complete home transformations, we deliver stunning results that exceed expectations.</p>
                <ul className="service-features">
                  <li>Kitchen and bathroom renovations</li>
                  <li>Interior reconfiguration</li>
                  <li>Modern updates to older homes</li>
                  <li>Premium fixtures and fittings</li>
                </ul>
              </div>
              <div className="project-gallery">
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Renovation Project 1" />
                  <div className="project-overlay">
                    <h4>Kitchen Transformation</h4>
                    <p>Completed 2024</p>
                  </div>
                </div>
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Renovation Project 2" />
                  <div className="project-overlay">
                    <h4>Whole Home Renovation</h4>
                    <p>Completed 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Category 4 */}
          <div className="service-category" id="energy-efficient">
            <h3>Energy-Efficient Solutions</h3>
            <div className="service-content">
              <div className="service-description">
                <p>We specialize in incorporating sustainable, energy-efficient elements into your build, reducing your environmental footprint and long-term operational costs. Our forward-thinking approach ensures your home is comfortable, economical to run, and kind to the planet.</p>
                <ul className="service-features">
                  <li>Solar panel installation</li>
                  <li>High-performance insulation</li>
                  <li>Energy-efficient windows and doors</li>
                  <li>Smart home technology integration</li>
                </ul>
              </div>
              <div className="project-gallery">
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Energy-Efficient Project 1" />
                  <div className="project-overlay">
                    <h4>Net-Zero Energy Home</h4>
                    <p>Completed 2024</p>
                  </div>
                </div>
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Energy-Efficient Project 2" />
                  <div className="project-overlay">
                    <h4>Smart Home Upgrade</h4>
                    <p>Completed 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Category 5 */}
          <div className="service-category" id="commercial">
            <h3>Commercial Construction</h3>
            <div className="service-content">
              <div className="service-description">
                <p>From office spaces to retail outlets, we deliver high-quality commercial construction services tailored to your business needs and industry requirements. Our team understands the unique demands of commercial projects and delivers functional, attractive spaces on time and on budget.</p>
                <ul className="service-features">
                  <li>Office fit-outs</li>
                  <li>Retail space construction</li>
                  <li>Restaurant and hospitality venues</li>
                  <li>Medical and professional facilities</li>
                </ul>
              </div>
              <div className="project-gallery">
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Commercial Project 1" />
                  <div className="project-overlay">
                    <h4>Modern Office Fit-out</h4>
                    <p>Completed 2024</p>
                  </div>
                </div>
                <div className="project-item">
                  <img src="/placeholder.jpg" alt="Commercial Project 2" />
                  <div className="project-overlay">
                    <h4>Retail Shopfront</h4>
                    <p>Completed 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <section className="project-showcase section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-intro">Browse our portfolio of completed projects. Each represents our commitment to quality, innovation, and client satisfaction.</p>
          
          <div className="project-filter">
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
          
          <div className="showcase-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="showcase-item" 
                data-category={project.category}
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