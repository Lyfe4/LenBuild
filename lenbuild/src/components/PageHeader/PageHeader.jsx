import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        
        {breadcrumbs && (
          <ul className="breadcrumb">
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