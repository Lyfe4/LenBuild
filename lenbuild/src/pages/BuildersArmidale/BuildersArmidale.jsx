import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import PageHeader from '../../components/PageHeader/PageHeader';
import CallToAction from '../../components/CallToAction/CallToAction';
import '../LandingPage.css';

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lenbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Builders Armidale', item: 'https://www.lenbuild.com/builders-armidale' }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Building, Extensions and Renovations',
    provider: { '@id': 'https://www.lenbuild.com/#business' },
    areaServed: [
      { '@type': 'City', name: 'Armidale' },
      { '@type': 'AdministrativeArea', name: 'New England, NSW' }
    ],
    description: 'Custom home building, extensions and renovations for Armidale and the New England region of NSW.'
  }
];

const BuildersArmidale = () => {
  const breadcrumbs = [{ text: 'Builders Armidale' }];

  return (
    <div className="landing-page">
      <SEO
        title="Builders in Armidale NSW"
        description="Looking for builders in Armidale? LenBuild delivers custom homes, extensions and renovations across Armidale and the New England region of NSW. Get in touch for a quote."
        keywords="builders Armidale, builder Armidale NSW, home builder Armidale, renovations Armidale, home extensions Armidale, custom home builder Armidale NSW"
        canonical="/builders-armidale"
        schema={pageSchema}
      />
      <PageHeader title="Builders in Armidale, NSW" breadcrumbs={breadcrumbs} />

      <section className="landing-section section">
        <div className="container">
          <div className="landing-content" data-aos="fade-up">
            <p>Searching for reliable builders in Armidale? LenBuild is a family-operated building company serving Armidale and the wider New England region of NSW. From brand-new custom homes to extensions and full renovations, we bring quality craftsmanship and honest communication to every project.</p>
            <p>Based just up the New England Highway in Guyra, we're only a short drive from Armidale and know the region intimately, its climate, its character and what it takes to build homes that stand up to the New England high country.</p>

            <h2>Building services for Armidale homeowners</h2>
            <ul className="landing-list">
              <li><strong>Custom home building</strong> — bespoke new homes designed and built around how you live.</li>
              <li><strong>Home extensions</strong> — more space for a growing family, seamlessly integrated with your existing home.</li>
              <li><strong>Renovations</strong> — breathe new life into an established Armidale property.</li>
              <li><strong>Building consultation (PAC)</strong> — expert advice and oversight to guide your project.</li>
            </ul>

            <h2>Why Armidale homeowners choose LenBuild</h2>
            <p>With over 15 years of experience and Housing Industry Association (HIA) membership, our reputation is built on trust, reliability and the relationships we've formed across the district. We're a hands-on team, you deal directly with the people building your home, and we hold every trade we work with to the same high standard.</p>
            <p>Whether you're planning a new build on the outskirts of town or renovating a character home closer to the centre, we'd love to help. Learn more <Link to="/about">about our team</Link>, browse our <Link to="/projects-services">projects and services</Link>, or read about <Link to="/custom-home-builder-guyra">custom home building</Link> in the region.</p>

            <div className="landing-cta-inline">
              <Link to="/contact" className="btn">Request a Quote for Your Armidale Project</Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default BuildersArmidale;
