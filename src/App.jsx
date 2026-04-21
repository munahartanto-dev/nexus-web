import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Produk = lazy(() => import('./pages/Produk'));
const Portofolio = lazy(() => import('./pages/Portofolio'));
const Faq = lazy(() => import('./pages/Faq'));

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
        <Suspense fallback={<div className="flex-1" />}>
          {currentPath === '#about' ? <About /> :
           currentPath === '#layanan' ? <Produk /> :
           currentPath === '#portofolio' ? <Portofolio /> :
           currentPath === '#faq' ? <Faq /> : <Home />}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

