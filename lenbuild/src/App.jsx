import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AOS from 'aos';

// Layouts and Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AutoScrollToTop from './components/ScrollToTop/AutoScrollToTop';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectsServices from './pages/ProjectsServices/ProjectsServices';
import Contact from './pages/Contact/Contact';
import CustomHomeBuilderGuyra from './pages/CustomHomeBuilderGuyra/CustomHomeBuilderGuyra';
import BuildersArmidale from './pages/BuildersArmidale/BuildersArmidale';

// Styles
import './styles/global.css';

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
  
  return (
    <TransitionGroup component={null}>
      <CSSTransition 
        key={location.key} 
        timeout={300} 
        classNames="page-transition"
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects-services" element={<ProjectsServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom-home-builder-guyra" element={<CustomHomeBuilderGuyra />} />
            <Route path="/builders-armidale" element={<BuildersArmidale />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  // Initialise scroll animations on the client only, AFTER hydration.
  // Skipped during react-snap prerender (userAgent === 'ReactSnap') so AOS
  // classes/styles aren't baked into the static HTML — that would cause the
  // hydrated markup to mismatch React's render and throw hydration errors.
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap') return;
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <AutoScrollToTop />
        <Header />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
