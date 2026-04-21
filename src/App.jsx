import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Produk from './pages/Produk';
import Portofolio from './pages/Portofolio';
import Faq from './pages/Faq';

export default function App() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
      // scroll to top on page change
      if (['', '#about', '#layanan', '#portofolio', '#faq'].includes(window.location.hash)) {
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        {currentPath === '#about' ? <About /> : 
         currentPath === '#layanan' ? <Produk /> : 
         currentPath === '#portofolio' ? <Portofolio /> : 
         currentPath === '#faq' ? <Faq /> : <Home />}
      </main>
      <Footer />
    </div>
  );
}

