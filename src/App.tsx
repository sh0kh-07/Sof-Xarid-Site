import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './i18n'; // Force i18n initialization on startup

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Manufacturers from './pages/Manufacturers';
import Categories from './pages/Categories';
import GovernmentProcurement from './pages/GovernmentProcurement';
import Verification from './pages/Verification';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop helper on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
      <Navbar />
      
      {/* Main Content Area */}
      <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-28 sm:pt-32'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/government-procurement" element={<GovernmentProcurement />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
