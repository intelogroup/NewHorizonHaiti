import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Sponsorship from './components/Sponsorship';
import Donate from './components/Donate';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white text-gray-900">
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}