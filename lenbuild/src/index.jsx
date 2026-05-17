import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);