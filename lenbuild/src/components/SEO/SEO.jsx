import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.lenbuild.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  schema,
  noindex = false
}) => {
  const fullTitle = title
    ? `${title} | LenBuild Guyra NSW`
    : 'LenBuild | Local Builder Guyra NSW | Custom Homes, Extensions & Renovations';

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Pages that shouldn't be indexed (e.g. the 404 page) get no canonical URL */}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={canonicalUrl} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {!noindex && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default SEO;
