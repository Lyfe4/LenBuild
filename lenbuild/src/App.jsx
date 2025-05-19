import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts and Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectsServices from './pages/ProjectsServices/ProjectsServices';
import Contact from './pages/Contact/Contact';

// Styles
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects-services" element={<ProjectsServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
