import { Link } from 'react-router';
import SEO from '../../components/SEO/SEO';
import PageHeader from '../../components/PageHeader/PageHeader';
import '../LandingPage.css';
import './NotFound.css';

const NotFound = () => {
  const breadcrumbs = [{ text: 'Page Not Found' }];

  return (
    <div className="landing-page not-found-page">
      <SEO
        title="404 Page Not Found"
        description="Sorry, we couldn't find that page. Head back to the LenBuild homepage or get in touch with our team in Guyra, NSW."
        noindex
      />
      <PageHeader title="Page Not Found" breadcrumbs={breadcrumbs} />

      <section className="landing-section section">
        <div className="container">
          <div className="landing-content not-found-content" data-aos="fade-up">
            <p>
              Sorry, we couldn't find the page you're looking for. It may have moved, or the link
              might be mistyped.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="btn">
                Back to Home
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>

            <h2>Looking for something else?</h2>
            <ul className="not-found-links">
              <li>
                <Link to="/projects-services">Projects &amp; Services</Link>
              </li>
              <li>
                <Link to="/about">About LenBuild</Link>
              </li>
              <li>
                <Link to="/custom-home-builder-guyra">Custom Home Builder Guyra</Link>
              </li>
              <li>
                <Link to="/builders-armidale">Builders Armidale</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
