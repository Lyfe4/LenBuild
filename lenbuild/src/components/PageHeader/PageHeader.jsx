import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <section className="page-header">
      <div className="page-header-background"></div>
      <div className="container">
        <h1 data-aos="fade-up">{title}</h1>
        
        {breadcrumbs && (
          <ul className="breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <li><Link to="/">Home</Link></li>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                {breadcrumb.link ? (
                  <Link to={breadcrumb.link}>{breadcrumb.text}</Link>
                ) : (
                  breadcrumb.text
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PageHeader;