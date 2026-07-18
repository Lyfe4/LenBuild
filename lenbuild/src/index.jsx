import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import 'aos/dist/aos.css';

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// We intentionally use createRoot().render() rather than hydrateRoot().
// react-snap prerenders each page (great for SEO/crawlers), but it serialises
// the *client-rendered* DOM, which merges React's adjacent text nodes — e.g.
// `"{content}"`, `— {author}`, `© {year} …`. hydrateRoot() then sees a single
// merged text node where React expects several and throws mismatch errors
// (#418/#423/#425). Rendering fresh over the prerendered markup skips the
// hydration comparison entirely, so those errors can't occur; the static HTML
// still serves crawlers, so SEO is unaffected.
ReactDOM.createRoot(document.getElementById('root')).render(app);