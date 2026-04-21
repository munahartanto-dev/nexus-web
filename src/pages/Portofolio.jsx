import { useState, useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, MessageCircle, Star, CheckCircle2, X,
  Store, Coffee, Factory, Home, Monitor, Building2, Coins, GraduationCap, HeartPulse, Truck, Briefcase, Palette
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);
  const whatsappBaseUrl = "https://wa.me/6285157709694";

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

    // Initial setup for reveals
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((r) => observer.observe(r));

    return () => reveals.forEach((r) => observer.unobserve(r));
  }, []);

  // Re-run observer logic when filter changes because elements are re-rendered
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
    
    // Slight delay to allow DOM to update
    const timeoutId = setTimeout(() => {
      const reveals = document.querySelectorAll('.filter-reveal');
      reveals.forEach((r) => observer.observe(r));
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [activeFilter]);

  const projects = [
    {
      id: 1,
      title: "Sistem Laporan Otomatis",
      category: "Otomasi",
      industry: "Retail",
      desc: "Otomasi laporan penjualan harian dari 5 cabang menjadi 1 dashboard terintegrasi.",
      fullDesc: "Klien retail dengan 5 cabang mengalami kesulitan dalam melakukan rekonsiliasi data penjualan harian karena format laporan tiap cabang berbeda-beda. Kami membangun sistem otomatis menggunakan Google Apps Script yang mengekstrak data dari email harian, merapikannya, dan menyuntikkannya ke dalam satu master Google Sheets yang langsung terhubung ke dashboard pimpinan.",
      tags: ["App Script", "Google Sheets", "Gmail API"],
      color: "#611F69",
      result: "Hemat 3 jam/hari"
    },
    {
      id: 2,
      title: "Dashboard Keuangan UMKM",
      category: "Dashboard",
      industry: "F&B",
      desc: "Dashboard Looker Studio untuk monitoring keuangan restoran secara real-time.",
      fullDesc: "Sebuah jaringan restoran menengah membutuhkan visibilitas arus kas dan performa cabang. Kami mengintegrasikan sistem Point of Sales mereka ke BigQuery, lalu menyajikannya ke dalam Looker Studio yang interaktif. Owner kini dapat mendeduksi tren pembelian dan margin profit per menu secara real-time tanpa menunggu laporan akhir bulan.",
      tags: ["Looker Studio", "Google Sheets", "BigQuery"],
      color: "#4A154B",
      result: "Keputusan 2x lebih cepat"
    },
    {
      id: 3,
      title: "Template Inventory Excel",
      category: "Excel & Sheets",
      industry: "Manufaktur",
      desc: "Template inventory otomatis dengan alert stok minimum dan laporan bulanan.",
      fullDesc: "Pabrik suku cadang lokal membutuhkan cara menekan risiko over-stock dan dead-stock. Kami merancang form input masuk/keluar terstruktur berbasis VBA Macro Excel yang langsung memotong stok secara dinamis, dilengkapi indikator warna (Red-Amber-Green) reorder point.",
      tags: ["Excel", "VBA", "Formula kompleks"],
      color: "#4A7CC7",
      result: "0 stok mati"
    },
    {
      id: 4,
      title: "Web App HR Management",
      category: "Web App",
      industry: "Jasa",
      desc: "Aplikasi web untuk manajemen absensi, cuti, dan penggajian karyawan.",
      fullDesc: "Beralih dari absensi kertas, klien jasa konstruksi kami meminta dibuatkan portal karyawan. Kami mendevelop web apps dengan Next.js di mana karyawan bisa clock-in via smartphone. Data absensi otomatis terhubung ke Sheet penggajian sehingga HR tinggal mencetak slip gaji PDF di akhir bulan.",
      tags: ["Next.js", "Google Sheets API", "Vercel"],
      color: "#2D1B69",
      result: "50+ karyawan terkelola"
    },
    {
      id: 5,
      title: "Sistem CRM Google Sheets",
      category: "Excel & Sheets",
      industry: "Properti",
      desc: "CRM sederhana berbasis Google Sheets dengan tracking pipeline penjualan.",
      fullDesc: "Agen properti kesulitan melacak riwayat chat WhatsApp dengan ratusan prospek. Kami membangun CRM Google Sheets di mana input lead masuk melalui web hook, sales dapat merekam stage prospek (Pitched, Negotiating, Won), dan team lead bisa memantau rasio konversi.",
      tags: ["Google Sheets", "App Script", "Form"],
      color: "#611F69",
      result: "Lead tertracking 100%"
    },
    {
      id: 6,
      title: "Dashboard Marketing Analytics",
      category: "Dashboard",
      industry: "E-commerce",
      desc: "Dashboard analitik marketing yang menggabungkan data dari Tokopedia & Shopee.",
      fullDesc: "Brand kosmetik e-commerce sangat kesulitan menghitung Return on Ad Spend (ROAS) gabungan. Kami merumuskan pipeline ekstraksi data toko dengan Python script, menyimpan data master di BigQuery, lalu memvisualisasikannya di Looker Studio. Kini mereka tahu platform mana yang paling menguntungkan.",
      tags: ["Looker Studio", "Python", "BigQuery"],
      color: "#4A154B",
      result: "ROI meningkat 40%"
    },
    {
      id: 7,
      title: "Otomasi Invoice & Email",
      category: "Otomasi",
      industry: "Konsultan",
      desc: "Sistem otomatis generate invoice PDF dan kirim via Gmail ke klien.",
      fullDesc: "Firma konsultan membuang 2 jam setiap minggu hanya untuk copas data project ke template invoice Word. Kami memanfaatkan Google Forms untuk men-trigger Apps Script agar secara otomatis mengubah template Google Docs menjadi PDF, dan melampirkannya ke Gmail klien dengan ucapan terima kasih yang dipersonalisasi.",
      tags: ["App Script", "Google Docs", "Gmail"],
      color: "#4A7CC7",
      result: "Invoice 5 menit jadi"
    },
    {
      id: 8,
      title: "Company Profile Website",
      category: "Web App",
      industry: "Konstruksi",
      desc: "Website company profile modern dengan CMS sederhana untuk update konten.",
      fullDesc: "Kontraktor ingin meningkatkan kredibilitas di era dijital dengan memajang proyek-proyek mereka. Kami merancang desain website modern yang dioptimisasi SEO (Next.js) dengan backend Sanity CMS agar tim non-tech mereka bisa dengan mudah menambah foto portofolio baru tiap bulan.",
      tags: ["Next.js", "Tailwind", "Sanity CMS"],
      color: "#2D1B69",
      result: "50+ leads/bulan"
    },
    {
      id: 9,
      title: "Template Analisis Keuangan",
      category: "Excel & Sheets",
      industry: "Investasi",
      desc: "Template Excel untuk analisis laporan keuangan dengan ratio otomatis.",
      fullDesc: "Firma investasi kecil membutuhkan kalkulator skreening emiten yang bisa memparse rincian neraca keuangan dengan cepat. Kami menyediakan file ekstensif dengan kombinasi XLOOKUP, INDEX MATCH, dan chart dinamis untuk rasio PE, PBV, ROE hanya dengan copas metrik mentah mentah.",
      tags: ["Excel", "Formula", "Dashboard"],
      color: "#611F69",
      result: "Analisis 10x lebih cepat"
    }
  ];

  const filters = ["Semua", "Excel & Sheets", "Dashboard", "Web App", "Otomasi"];
  
  const filteredProjects = activeFilter === "Semua" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const industries = [
    { icon: <Store className="w-5 h-5 text-current" />, name: "Retail" },
    { icon: <Coffee className="w-5 h-5 text-current" />, name: "F&B" },
    { icon: <Factory className="w-5 h-5 text-current" />, name: "Manufaktur" },
    { icon: <Home className="w-5 h-5 text-current" />, name: "Properti" },
    { icon: <Monitor className="w-5 h-5 text-current" />, name: "E-commerce" },
    { icon: <Building2 className="w-5 h-5 text-current" />, name: "Konstruksi" },
    { icon: <Coins className="w-5 h-5 text-current" />, name: "Keuangan" },
    { icon: <GraduationCap className="w-5 h-5 text-current" />, name: "Pendidikan" },
    { icon: <HeartPulse className="w-5 h-5 text-current" />, name: "Kesehatan" },
    { icon: <Truck className="w-5 h-5 text-current" />, name: "Logistik" },
    { icon: <Briefcase className="w-5 h-5 text-current" />, name: "Konsultan" },
    { icon: <Palette className="w-5 h-5 text-current" />, name: "Kreatif" }
  ];

  const testimonials = [
    {
      quote: "Sistem laporan otomatis yang dibuat benar-benar mengubah cara kerja tim kami. Hemat 3 jam setiap hari!",
      name: "Budi Santoso",
      role: "Owner Toko Retail",
      city: "Jakarta",
      stars: 5,
      project: "Sistem Laporan Otomatis",
      initials: "BS",
      color: "from-[#611F69] to-[#4A7CC7]"
    },
    {
      quote: "Dashboard Looker-nya sangat membantu. Sekarang saya bisa pantau keuangan restoran kapan saja dan di mana saja.",
      name: "Rina Marlina",
      role: "Owner Restoran",
      city: "Surabaya",
      stars: 5,
      project: "Dashboard Keuangan UMKM",
      initials: "RM",
      color: "from-[#4A154B] to-[#4A7CC7]"
    },
    {
      quote: "Website yang dibuat profesional banget. Dalam sebulan pertama sudah dapat 50+ leads dari Google. Sangat worth it!",
      name: "Dian Permata",
      role: "Direktur",
      city: "Bandung",
      stars: 5,
      project: "Company Profile Website",
      initials: "DP",
      color: "from-[#2D1B69] to-[#611F69]"
    }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1 - PAGE HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-5 pb-[72px] md:pt-11 md:pb-[100px] bg-[#FAF9F5] overflow-hidden border-b border-[#F4F4F4]">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#611F69]/20 to-[#4A7CC7]/10 rounded blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#611F69]/10 to-[#F9EDFF]/30 rounded blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-6 reveal">
          
          <h1 className="font-heading text-4xl md:text-[64px] leading-[1.1] font-extrabold text-[#1D1C1D] tracking-[-0.77px]">
            Hasil Kerja Nyata <span className="text-[#611F69]">untuk Bisnis Nyata</span>
          </h1>
          
          <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed max-w-2xl px-4 mt-2 mb-6">
            100+ proyek telah diselesaikan untuk klien dari berbagai industri di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* SECTION 2 - STATS BAR */}
      <section className="bg-white border-b border-[#F4F4F4] relative z-20 reveal">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#F4F4F4]">
            <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <span className="font-heading text-4xl md:text-5xl font-extrabold text-[#4A154B] mb-1">100+</span>
              <span className="text-sm font-semibold text-[#454245] uppercase tracking-wider">Proyek Selesai</span>
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <span className="font-heading text-4xl md:text-5xl font-extrabold text-[#611F69] mb-1 flex items-center justify-center gap-2"><Star className="w-7 h-7 text-yellow-500 fill-yellow-500 shrink-0"/> 4.9</span>
              <span className="text-sm font-semibold text-[#454245] uppercase tracking-wider">Rating Rata-rata</span>
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center border-r border-[#F4F4F4]">
              <span className="font-heading text-4xl md:text-5xl font-extrabold text-[#4A7CC7] mb-1">20+</span>
              <span className="text-sm font-semibold text-[#454245] uppercase tracking-wider">Industri Dilayani</span>
            </div>
             <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
              <span className="font-heading text-4xl md:text-5xl font-extrabold text-[#4A154B] mb-1">99%</span>
              <span className="text-sm font-semibold text-[#454245] uppercase tracking-wider">Tingkat Kepuasan</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FILTER + PROJECT GRID */}
      <section className="pt-20 md:pt-28 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">PROYEK KAMI</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A154B]">Lihat Apa yang Sudah Kami Kerjakan</h2>
          </div>
        </div>

        <div className="relative">
          {/* Filter Tabs */}
          <section className="sticky top-[80px] z-30 bg-transparent">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <div className="flex justify-start md:justify-center overflow-x-auto py-5 reveal scrollbar-hide no-scrollbar w-full">
                <div className="inline-flex items-center p-2 bg-[#F9EDFF] rounded-full border border-purple-50 shadow-sm">
                  {filters.map((filter, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-[15px] md:text-[16px] transition-all whitespace-nowrap ${
                        activeFilter === filter
                          ? 'bg-[#F2D7F9] text-[#360839]'
                          : 'bg-transparent text-[#4A154B] hover:bg-white/40'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Project Grid */}
          <section className="pb-20 md:pb-28 pt-8 min-h-[600px]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl border border-[#F4F4F4] overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 filter-reveal opacity-0 translate-y-5"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Header visual block */}
                <div 
                  className="h-[110px] relative p-4 flex flex-col justify-between"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="bg-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider" style={{ color: project.color }}>
                      {project.category}
                    </span>
                    <span className="bg-white/20 text-white backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-sm">
                      {project.industry}
                    </span>
                  </div>
                  
                  <div className="absolute -bottom-3.5 left-4 bg-white text-green-600 text-xs font-bold px-3 py-1.5 rounded inline-flex items-center gap-1 w-max shadow-sm border border-green-100">
                    <CheckCircle2 className="w-4 h-4" />
                    {project.result}
                  </div>
                </div>
                
                {/* Body content */}
                <div className="p-5 pt-8 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[#4A154B] text-xl mb-3">{project.title}</h3>
                  <p className="text-[#454245] text-sm leading-relaxed mb-6 line-clamp-2">{project.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-[#F9EDFF] text-[#611F69] text-[11px] font-bold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link wrapper just for structure, will be dead link for now */}
                  <div className="pt-4 border-t border-[#F4F4F4] mt-auto">
                    <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1 text-[#611F69] font-bold text-sm hover:underline">
                      Lihat Detail <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
             <div className="text-center py-20">
                <p className="text-[#454245] text-lg">Belum ada proyek di kategori ini.</p>
             </div>
          )}
            </div>
          </section>
        </div>
      </section>

      {/* SECTION 4 - INDUSTRIES SERVED */}
      <section className="py-20 bg-[#F9EDFF] border-y border-purple-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
           <div className="text-center mb-10 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">INDUSTRI</span>
            <h2 className="font-heading text-3xl font-bold text-[#4A154B]">Berbagai Industri yang Pernah Kami Layani</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto reveal" style={{ transitionDelay: '0.1s' }}>
             {industries.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#F4F4F4] px-4 py-2.5 rounded flex items-center gap-2 hover:border-[#611F69] hover:text-[#611F69] transition-colors cursor-default shadow-sm hover:shadow-md">
                   <div className="flex items-center justify-center text-slate-700">{item.icon}</div>
                   <span className="font-semibold text-[#1D1C1D] text-sm md:text-base hover:text-[#611F69] transition-colors">{item.name}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* MODAL POPUP LIHAT DETAIL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-32 flex justify-end p-4 relative" style={{ backgroundColor: selectedProject.color }}>
              <button onClick={() => setSelectedProject(null)} className="w-11 h-11 min-h-[44px] min-w-[44px] bg-black/20 hover:bg-black/40 text-white rounded flex items-center justify-center backdrop-blur-md transition-colors z-10">
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                 <span className="bg-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider" style={{ color: selectedProject.color }}>
                    {selectedProject.category}
                 </span>
                 <span className="bg-white/20 text-white backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-sm border border-white/20">
                    Industri: {selectedProject.industry}
                 </span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
               <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#4A154B] mb-4">{selectedProject.title}</h3>
               
               <div className="bg-[#FAF9F5] border border-[#F4F4F4] rounded-xl p-4 mb-6 inline-flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-[#1D1C1D]">Hasil & Impact:</span>
                  <span className="text-green-600 font-semibold">{selectedProject.result}</span>
               </div>

               <div className="mb-8">
                 <h4 className="font-bold text-[#1D1C1D] mb-2 uppercase tracking-wider text-sm border-b border-[#F4F4F4] pb-2">Deskripsi Proyek</h4>
                 <p className="text-[#454245] leading-relaxed">
                   {selectedProject.fullDesc || selectedProject.desc}
                 </p>
               </div>

               <div className="mb-4">
                 <h4 className="font-bold text-[#1D1C1D] mb-3 uppercase tracking-wider text-sm">Tech Stack & Tools</h4>
                 <div className="flex flex-wrap gap-2">
                   {selectedProject.tags.map(tag => (
                     <span key={tag} className="px-3 py-1.5 bg-[#F9EDFF] text-[#611F69] text-xs font-bold rounded-md">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
            
            <div className="bg-gray-50 border-t border-[#F4F4F4] p-4 flex justify-end">
              <a 
                 href={`${whatsappBaseUrl}?text=Halo%20NexusData,%20saya%20tertarik%20membuat%20proyek%20seperti%20${selectedProject.title}`}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-[#4A154B] text-white px-[16px] py-[12px] uppercase tracking-[0.8px] text-[14px] rounded font-bold text-sm hover:bg-[#2E0039] transition-colors inline-flex items-center gap-2"
              >
                Buat Proyek Serupa <ArrowRight className="w-4 h-4"/>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6 - CTA */}
      <section className="bg-[#4A154B] py-24 reveal border-t-4 border-[#611F69]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Punya Proyek Serupa?</h2>
            <p className="text-[#F9EDFF] text-lg mb-10 max-w-xl leading-relaxed">
              Ceritakan kebutuhan Anda dan kami akan carikan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
        </div>
      </section>

      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
