import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

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
      if (['', '#about', '#layanan', '#portofolio', '#faq'].includes(window.location.hash)) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      {/* Spacer for mobile fixed top bar (h-14 = 56px) */}
      <div className="md:hidden h-14 shrink-0" />
      <main className="flex-1 pb-24 md:pb-0">
        <Suspense fallback={<div className="flex-1" />}>
          {currentPath === '#about' ? <About /> :
           currentPath === '#layanan' ? <Produk /> :
           currentPath === '#portofolio' ? <Portofolio /> :
           currentPath === '#faq' ? <Faq /> : <Home />}
        </Suspense>
      </main>
      <Footer />
      <BottomNav currentPath={currentPath} />
    </div>
  );
}
