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
      { '@type': 'ListItem', position: 2, name: 'Custom Home Builder Guyra', item: 'https://www.lenbuild.com/custom-home-builder-guyra' }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Custom Home Building',
    provider: { '@id': 'https://www.lenbuild.com/#business' },
    areaServed: [
      { '@type': 'City', name: 'Guyra' },
      { '@type': 'AdministrativeArea', name: 'New England, NSW' }
    ],
    description: 'Custom home building in Guyra and the New England region of NSW, from concept and design through to completion.'
  }
];

const CustomHomeBuilderGuyra = () => {
  const breadcrumbs = [{ text: 'Custom Home Builder Guyra' }];

  return (
    <div className="landing-page">
      <SEO
        title="Custom Home Builder in Guyra NSW"
        description="Planning a new home? LenBuild is a local custom home builder in Guyra, NSW, designing and building bespoke homes across the New England region. Book a consultation today."
        keywords="custom home builder Guyra, new home builder Guyra NSW, custom homes Guyra, home builder New England NSW, acreage home builder Guyra"
        canonical="/custom-home-builder-guyra"
        schema={pageSchema}
      />
      <PageHeader title="Custom Home Builder in Guyra, NSW" breadcrumbs={breadcrumbs} />

      <section className="landing-section section">
        <div className="container">
          <div className="landing-content" data-aos="fade-up">
            <p>Building a new home is one of the biggest decisions you'll ever make, and choosing the right builder matters just as much as choosing the right block. As a local custom home builder based in Guyra, LenBuild designs and builds bespoke homes tailored to the way you actually live, right across the New England region of NSW.</p>
            <p>We're a family-operated building company and Housing Industry Association (HIA) member with more than 15 years of experience. Every home we build is genuinely custom, no off-the-shelf floor plans, no cutting corners, just quality craftsmanship and a build that reflects your vision, your budget and your site.</p>

            <h2>Why build with a local Guyra custom home builder</h2>
            <p>Building in the New England high country isn't the same as building on the coast. Guyra's cold winters, elevation and rural blocks all shape how a home should be designed and constructed. As locals, we build for these conditions every day, with a focus on warmth, energy efficiency and durability that lasts for generations.</p>
            <ul className="landing-list">
              <li><strong>Local knowledge</strong> — we understand the climate, the soil, and the council requirements across Guyra and the New England.</li>
              <li><strong>One team, start to finish</strong> — you deal directly with the people building your home, not a call centre.</li>
              <li><strong>Trusted local trades</strong> — we work with the region's best contractors, held to our standard of quality.</li>
              <li><strong>Built to last</strong> — homes designed for comfort and efficiency in a cold Guyra climate.</li>
            </ul>

            <h2>Our custom home building process</h2>
            <ol className="landing-list">
              <li><strong>Consultation &amp; concept</strong> — we sit down to understand your vision, needs and budget.</li>
              <li><strong>Design &amp; pre-construction</strong> — we refine plans, finishes and costings so there are no surprises.</li>
              <li><strong>Construction</strong> — quality craftsmanship with clear communication at every stage.</li>
              <li><strong>Handover</strong> — we walk you through your finished home, built to last.</li>
            </ol>

            <h2>Serving Guyra, Armidale &amp; the New England region</h2>
            <p>We build custom homes throughout Guyra, Armidale and the surrounding New England district, including rural and acreage properties. If you're looking for a builder near you, we'd love to hear about your project. You can also read more <Link to="/about">about our team</Link> or explore our <Link to="/projects-services">projects and services</Link>.</p>

            <div className="landing-cta-inline">
              <Link to="/contact" className="btn">Book a Custom Home Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default CustomHomeBuilderGuyra;
