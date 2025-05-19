import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Layouts and Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectsServices from './pages/ProjectsServices/ProjectsServices';
import Contact from './pages/Contact/Contact';

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
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
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