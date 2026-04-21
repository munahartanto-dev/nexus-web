import { Home, User, Layers, LayoutGrid, HelpCircle } from 'lucide-react';

export default function BottomNav({ currentPath }) {
  const isActive = (href) => {
    if (href === '#') return currentPath === '' || currentPath === '#';
    return currentPath === href;
  };

  const itemClass = (href) =>
    `flex flex-col items-center gap-0.5 py-2 px-3 min-w-[56px] transition-colors ${
      isActive(href) ? 'text-[#611F69]' : 'text-[#454245]'
    }`;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-end justify-around px-2 pb-1 pt-1">

        <a href="#" className={itemClass('#')}>
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </a>

        <a href="#about" className={itemClass('#about')}>
          <User className="w-5 h-5" />
          <span className="text-[10px] font-semibold">About</span>
        </a>

        {/* Center FAB — Layanan */}
        <a href="#layanan" className="flex flex-col items-center gap-0.5 -mt-5">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
            isActive('#layanan') ? 'bg-[#4A154B]' : 'bg-[#611F69]'
          }`}>
            <Layers className="w-6 h-6 text-white" />
          </div>
          <span className={`text-[10px] font-bold mt-0.5 ${isActive('#layanan') ? 'text-[#4A154B]' : 'text-[#611F69]'}`}>
            Layanan
          </span>
        </a>

        <a href="#portofolio" className={itemClass('#portofolio')}>
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Portofolio</span>
        </a>

        <a href="#faq" className={itemClass('#faq')}>
          <HelpCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold">FAQ</span>
        </a>

      </div>
    </nav>
  );
}
