import { useState, useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, MessageCircle, ShoppingCart, Info, CheckCircle2,
  Settings, Database, Cloud, Code, LineChart, Briefcase, Rocket, Package
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function LayananPage() {
  const [activeTab, setActiveTab] = useState('custom');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((r) => observer.observe(r));

    return () => reveals.forEach((r) => observer.unobserve(r));
  }, [activeTab]);

  const whatsappBaseUrl = "https://wa.me/6285157709694";

  const layananCustom = [
    {
      id: "c1",
      title: "Sistem Manajemen Inventaris",
      desc: "Pembuatan sistem ERP ringan untuk tracking stok, peringatan stok menipis, dan laporan opname otomatis antar gudang.",
      icon: <Database className="w-6 h-6 text-[#4A154B]" />,
      tags: ["Web App", "Database"]
    },
    {
      id: "c2",
      title: "Automasi Rekap Laporan Keuangan",
      desc: "Menghubungkan data mutasi bank dan input manual kasir langsung ke dalam buku besar dan neraca akhir berbasis Google Sheets.",
      icon: <Code className="w-6 h-6 text-[#4A154B]" />,
      tags: ["App Script", "API"]
    },
    {
      id: "c3",
      title: "Pembuatan Dashboard Eksekutif",
      desc: "Visualisasi metrik bisnis utama lintas divisi dalam satu layer dashboard interaktif dengan Looker Studio atau Tableau.",
      icon: <LineChart className="w-6 h-6 text-[#4A154B]" />,
      tags: ["Looker Studio", "Data Viz"]
    },
    {
      id: "c4",
      title: "Integrasi API E-Commerce",
      desc: "Penyambungan data penjualan langsung dari Tokopedia, Shopee, dan TikTok Shop ke dalam sistem ERP atau Sheet lokal Anda.",
      icon: <Cloud className="w-6 h-6 text-[#4A154B]" />,
      tags: ["API", "Backend"]
    },
    {
      id: "c5",
      title: "Aplikasi Internal Human Resource",
      desc: "Sistem tracking kehadiran, cuti, klaim expense, hingga payroll otomatis untuk efisiensi departemen HR perusahaan.",
      icon: <Briefcase className="w-6 h-6 text-[#4A154B]" />,
      tags: ["Web App", "Fullstack"]
    },
    {
      id: "c6",
      title: "Konsultasi & Restrukturisasi Data",
      desc: "Audit arsitektur data bisnis yang acak-acakan menjadi terstruktur, siap untuk scaling, dan bebas inkonsistensi.",
      icon: <Settings className="w-6 h-6 text-[#4A154B]" />,
      tags: ["Consulting", "Audit"]
    }
  ];

  const produkDigital = [
    { id: "d1", title: "Template Invoice Master", desc: "Pembuat invoice otomatis dengan koneksi database klien. File PDF tergenerate dan siap email hanya dengan 1 klik.", price: "Rp 199.000" },
    { id: "d2", title: "HR Attendance Tracker v2", desc: "Absensi digital via Google Form terangkai rumus kalkulasi shift, telat, dan lembur secara real-time.", price: "Rp 249.000" },
    { id: "d3", title: "Marketing Campaign ROI Tool", desc: "Analisis kalkulasi biaya Ads (CPA, ROAS, CPC) dari berbagai channel pada satu Dashboard Evaluasi.", price: "Rp 299.000" },
    { id: "d4", title: "Automasi Mutasi Bank Google Sheets", desc: "Script parsing laporan bank otomatis menjadikan tabel mutasi rapi siap rekonsiliasi.", price: "Rp 349.000" },
    { id: "d5", title: "Buku Kas Keluar-Masuk Pintar", desc: "Catat transaksi 1 pintu, dan otomatis mengalir ke Laporan Laba Rugi akhir bulan layaknya software.", price: "Rp 149.000" },
    { id: "d6", title: "Inventory Tracker + Min. Stock Alert", desc: "File manajemen inventaris yang melacak keluar masuk barang serta highlight merah jika stok mau habis.", price: "Rp 279.000" },
    { id: "d7", title: "CRM Leads Pipeline Tracker", desc: "Atur posisi prospek dari Hubungi sampai Deal dengan tampilan Kanban warna-warni dinamis.", price: "Rp 199.000" },
    { id: "d8", title: "Template Laporan Kinerja Karyawan (KPI)", desc: "Standarisasi pengukuran performa objektif dilengkapi template form review kinerja bulanan.", price: "Rp 249.000" },
    { id: "d9", title: "Project Management Sprint Board", desc: "Tools pelacakan milestone task, delegasi PIC, dan durasi pengerjaan layaknya Trello dalam format Sheets.", price: "Rp 150.000" },
    { id: "d10", title: "Gantt Chart Event Organizer", desc: "Kalkulator dan visualisasi timeline otomatis untuk mundur acara pernikahan atau korporat.", price: "Rp 189.000" },
    { id: "d11", title: "Social Media Content Calendar Pro", desc: "Jadwal posting, penanda status ide, draft, desain, hingga analitik performa posting harian.", price: "Rp 129.000" },
    { id: "d12", title: "Formula Library Cheat Sheet", desc: "Buku digital kompilasi 100+ formula tingkat dewa dan VBA macro siap-salin untuk keseharian kantor.", price: "Rp 99.000" }
  ];

  return (
    <div className="w-full bg-[#FAF9F5]">
      {/* SECTION 1 - PAGE HERO */}
      <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 bg-[#FAF9F5] overflow-hidden">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#611F69]/20 to-[#4A7CC7]/10 rounded blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#611F69]/10 to-[#F9EDFF]/30 rounded blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto space-y-6 reveal opacity-0 translate-y-5">
          
          <h1 className="font-heading text-4xl md:text-[64px] leading-[1.1] font-extrabold text-[#1D1C1D] tracking-[-0.77px]">
            Solusi Nyata, <span className="text-[#611F69]">Khusus Untuk Anda</span>
          </h1>
          
          <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed max-w-2xl px-4 mt-2 mb-6">
            Jelajahi berbagai paket layanan eksklusif (Custom) maupun aset digital siap pakai (Marketplace) untuk automasi dan skala operasional harian Anda.
          </p>
        </div>
      </section>

      {/* TABS & CONTENT WRAPPER */}
      <div className="relative">
        {/* TABS HEADER */}
        <section className="sticky top-[80px] z-30 bg-transparent">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="flex justify-center overflow-x-auto py-5 reveal scrollbar-hide no-scrollbar w-full">
              <div className="inline-flex items-center p-2 bg-[#F9EDFF] rounded-full border border-purple-50">
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`px-6 md:px-10 py-3 rounded-full font-bold text-[16px] md:text-[18px] transition-all whitespace-nowrap ${
                    activeTab === 'custom'
                      ? 'bg-[#F2D7F9] text-[#360839]'
                      : 'bg-transparent text-[#4A154B] hover:bg-white/40'
                  }`}
                >
                  Layanan Custom
                </button>
                <button
                  onClick={() => setActiveTab('digital')}
                  className={`px-6 md:px-10 py-3 rounded-full font-bold text-[16px] md:text-[18px] transition-all whitespace-nowrap ${
                    activeTab === 'digital'
                      ? 'bg-[#F2D7F9] text-[#360839]'
                      : 'bg-transparent text-[#4A154B] hover:bg-white/40'
                  }`}
                >
                  Produk Digital
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT AREA */}
        <section className="py-16 md:py-20 min-h-[600px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          
          {/* TAB 1: LAYANAN CUSTOM */}
          {activeTab === 'custom' && (
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-500">
              <div className="text-center max-w-3xl mx-auto mb-16 reveal opacity-0 translate-y-5">
                <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">PROJECT BASE</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#4A154B] mb-6">Penyesuaian Tanpa Batas</h2>
                <p className="text-[#454245] text-lg">Konsultasikan kendala unik Anda. Kami yang mendesain, merancang struktur, dan membangun sistemnya hingga tuntas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                {layananCustom.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl flex flex-col p-6 lg:p-8 border border-[#F4F4F4] shadow-sm hover:shadow-lg hover:border-purple-200 transition-all reveal opacity-0 translate-y-5 group"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 bg-[#FAF9F5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-50 group-hover:-translate-y-1 transition-all border border-slate-100">
                       {item.icon}
                    </div>
                    
                    <h3 className="font-heading font-extrabold text-[#1D1C1D] text-xl mb-3">{item.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                       {item.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded">
                           {tag}
                         </span>
                       ))}
                    </div>

                    <p className="text-[#454245] text-sm leading-relaxed mb-8 flex-1">{item.desc}</p>
                    
                    <div className="mt-auto">
                      <a 
                        href={`${whatsappBaseUrl}?text=Halo%20NexusData,%20saya%20tertarik%20konsultasi%20layanan%20custom:%20${item.title}`}
                        target="_blank" rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-white border border-[#4A154B] hover:bg-[#4A154B] hover:text-white text-[#4A154B] px-4 py-3 rounded-xl font-bold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Hubungi Kami
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PRODUK DIGITAL */}
          {activeTab === 'digital' && (
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-500">
               <div className="text-center max-w-3xl mx-auto mb-16 reveal opacity-0 translate-y-5">
                <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">MARKETPLACE ASET DIGITAL</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#4A154B] mb-6">Pilih, Beli, dan Langsung Terapkan</h2>
                <p className="text-[#454245] text-lg">Koleksi template super cepat dan plug-and-play yang dirancang presisi untuk memudahkan kerjaan berulang tanpa membuang puluhan jam uji coba.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {produkDigital.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl flex flex-col border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-all reveal opacity-0 translate-y-5 overflow-hidden group"
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {/* Cover Placeholder */}
                    <div className="h-40 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-[#4A154B]/5 to-[#611F69]/10"></div>
                       <ShoppingCart className="w-10 h-10 text-slate-300 transform group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute top-3 right-3 bg-white text-[10px] font-bold text-[#611F69] uppercase px-2 py-0.5 rounded shadow-sm">
                         Instan
                       </div>
                    </div>
                    
                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-[#1D1C1D] text-base mb-2 leading-snug line-clamp-2">{item.title}</h3>
                      <p className="text-[#454245] text-xs leading-relaxed mb-6 flex-1 line-clamp-3">{item.desc}</p>
                      
                      {/* Price Section */}
                      <div className="mt-auto pt-4 border-t border-[#F4F4F4] mb-4">
                        <span className="font-extrabold text-[#4A154B] text-lg block">{item.price}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        <a 
                          href={`${whatsappBaseUrl}?text=Halo%20NexusData,%20saya%20ingin%20info%20detail%20produk%20digital:%20${item.title}`}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-[#1D1C1D] text-xs font-bold py-2.5 rounded-lg border border-slate-200 transition-colors"
                        >
                          <Info className="w-3.5 h-3.5" /> Detail
                        </a>
                        <a 
                          href={`${whatsappBaseUrl}?text=Halo%20NexusData,%20saya%20ingin%20membeli%20produk%20digital:%20${item.title}`}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#611F69] hover:bg-[#730394] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" /> Beli
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
      </div>

      {/* SECTION - CTA */}
      <section className="bg-[#4A154B] py-24 reveal opacity-0 translate-y-5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Punya Kebutuhan Lain?</h2>
            <p className="text-[#F9EDFF] text-lg mb-10 max-w-xl leading-relaxed">
              Jika solusi yang Anda perlukan belum masuk di kedua kategori, hubungi tim kami untuk konsultasi gratis.
            </p>
            <a 
              href={whatsappBaseUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#4A154B] px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold text-lg transition-transform hover:-translate-y-1 shadow-2xl"
            >
              <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
