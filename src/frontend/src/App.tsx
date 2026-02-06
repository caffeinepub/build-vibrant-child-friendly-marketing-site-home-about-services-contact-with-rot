import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutWhyPage from './pages/AboutWhyPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

type Page = 'home' | 'about' | 'services' | 'contact';

// Valid page aliases for robust navigation
const PAGE_ALIASES: Record<string, Page> = {
  'home': 'home',
  '': 'home',
  'about': 'about',
  'why': 'about',
  'services': 'services',
  'contact': 'contact',
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Normalize and validate hash on mount
    const normalizeHash = (hash: string): Page => {
      const cleanHash = hash.slice(1).toLowerCase().trim();
      return PAGE_ALIASES[cleanHash] || 'home';
    };

    const hash = window.location.hash || '#home';
    const validPage = normalizeHash(hash);
    setCurrentPage(validPage);

    // Update hash if it was invalid
    if (window.location.hash !== `#${validPage}`) {
      window.location.hash = validPage;
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      const validPage = normalizeHash(newHash);
      setCurrentPage(validPage);
      
      // Ensure hash is always valid
      if (window.location.hash !== `#${validPage}`) {
        window.location.hash = validPage;
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    window.location.hash = page;
  };

  // Render the appropriate page component with error boundary
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'about':
        return <AboutWhyPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        // Fallback to home if somehow an invalid page gets through
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={navigate} />
        <main className="flex-1">
          <ErrorBoundary
            fallback={
              <div className="min-h-screen flex items-center justify-center px-4 py-16">
                <div className="max-w-md text-center">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    Page Error
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    This page encountered an error. Please try navigating to another page.
                  </p>
                  <button
                    onClick={() => navigate('home')}
                    className="btn-primary"
                  >
                    Go to Home
                  </button>
                </div>
              </div>
            }
          >
            {renderPage()}
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
