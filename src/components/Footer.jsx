import { LineChart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-white text-[#1D1C1D] py-16 border-t border-[#F4F4F4]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Left Column: Logo & Tagline */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border-2 border-[#1D1C1D] flex items-center justify-center">
                <LineChart className="text-[#1D1C1D] w-5 h-5" />
              </div>
              <div className="text-2xl tracking-tight font-slack-head">
                <span className="font-bold text-[#1D1C1D]">Nexus</span>
                <span className="font-bold text-[#611F69]">Data</span>
              </div>
            </div>
            <p className="text-[#454245] font-medium max-w-xs leading-relaxed">
              Jembatan Digital untuk Bisnis Naik Kelas
            </p>
            <p className="text-sm text-[#454245] mt-8">
              &copy; {new Date().getFullYear()} NexusData. All rights reserved.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-slack-head font-bold text-lg border-b border-[#F4F4F4] pb-2 inline-block lg:w-max">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#454245] hover:text-[#1264A3] transition-colors font-bold uppercase tracking-[0.8px] text-[14px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-slack-head font-bold text-lg border-b border-[#F4F4F4] pb-2 inline-block lg:w-max">
              Hubungi Kami
            </h3>
            <p className="text-[#454245] max-w-sm mb-4">
              Siap memajukan bisnis Anda? Mari diskusikan kebutuhan data dan otomasi Anda sekarang.
            </p>
            <div className="flex flex-col gap-2 mt-4 text-[#454245] relative group">
               <span className="font-bold text-[#1D1C1D]">Office:</span>
               <p className="leading-relaxed">
                  Jl. Jend. Sudirman No. 1, Jakarta Pusat<br/>
                  DKI Jakarta 10220
               </p>
            </div>
            <p className="text-[#454245] mt-2">
              Email: <a href="mailto:hello@nexusdata.id" className="hover:text-[#1264A3] hover:underline font-bold transition-colors">hello@nexusdata.id</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
