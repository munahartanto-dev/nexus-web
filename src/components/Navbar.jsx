import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSegment(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { label: 'Home', href: '' },
    { label: 'About', href: '#about' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white py-6'}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img src="/images/logo.webp" alt="NexusData Logo" className="h-11 w-auto" />
          <span className="font-heading font-extrabold text-[22px] leading-none tracking-tight text-[#1D1C1D]">
            Nexus<span className="text-[#611F69]">Data</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSegment === link.href || (activeSegment === "" && link.href === "");
            return (
              <a
                key={link.label}
                href={link.href === "" ? "#" : link.href}
                className={`font-medium transition-colors hover:text-[#611F69] pb-1 border-b-2 ${
                  isActive ? "text-[#611F69] border-[#611F69]" : "text-[#454245] border-transparent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6285157709694"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#611F69] text-white px-[24px] py-[12px] uppercase tracking-[0.8px] text-[12px] rounded font-bold hover:bg-[#730394] transition-colors shadow-md"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[#454245]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = activeSegment === link.href || (activeSegment === "" && link.href === "");
            return (
              <a
                key={link.label}
                href={link.href === "" ? "#" : link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-heading text-lg font-bold transition-colors w-full pb-2 border-b min-h-[44px] flex items-center ${
                  isActive ? "text-[#611F69] border-[#611F69]" : "text-[#1D1C1D] border-gray-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://wa.me/6285157709694"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#611F69] text-white px-6 py-4 rounded font-bold hover:bg-[#730394] transition-colors shadow-md text-center uppercase tracking-wider text-sm"
          >
            Mulai Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
