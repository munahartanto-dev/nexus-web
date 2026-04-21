import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('');
  const [mobileVisible, setMobileVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      if (currentY > lastScrollY.current && currentY > 60) {
        setMobileVisible(false);
      } else {
        setMobileVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setActiveSegment(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
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
    <>
      {/* ── DESKTOP NAV ── sticky, always solid white */}
      <nav className={`hidden md:block sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-4' : 'py-6'
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between">

          <a href="#" className="flex items-center gap-2 shrink-0 group">
            <img src="/images/logo.webp" alt="NexusData Logo" className="h-11 w-auto" />
            <span className="font-heading font-extrabold text-[22px] leading-none tracking-tight text-[#1D1C1D]">
              Nexus<span className="text-[#611F69]">Data</span>
            </span>
          </a>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = activeSegment === link.href || (activeSegment === '' && link.href === '');
              return (
                <a
                  key={link.label}
                  href={link.href === '' ? '#' : link.href}
                  className={`font-medium transition-colors hover:text-[#611F69] pb-1 border-b-2 ${
                    active ? 'text-[#611F69] border-[#611F69]' : 'text-[#454245] border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="https://wa.me/6285157709694"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#611F69] text-white px-6 py-3 uppercase tracking-[0.8px] text-[12px] rounded font-bold hover:bg-[#730394] transition-colors shadow-md"
          >
            Mulai Konsultasi Gratis
          </a>

        </div>
      </nav>

      {/* ── MOBILE TOP BAR ── fixed, smart scroll hide/show */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-transform duration-300 ${
          mobileVisible ? 'translate-y-0 shadow-sm' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/images/logo.webp" alt="NexusData Logo" className="h-8 w-auto" />
            <span className="font-heading font-extrabold text-[17px] leading-none tracking-tight text-[#1D1C1D]">
              Nexus<span className="text-[#611F69]">Data</span>
            </span>
          </a>
          <a
            href="https://wa.me/6285157709694"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#611F69] text-white px-3 py-2 text-[10px] uppercase tracking-[0.6px] rounded font-bold hover:bg-[#730394] transition-colors shrink-0 min-h-[36px] flex items-center"
          >
            Mulai Konsultasi
          </a>
        </div>
      </header>
    </>
  );
}
