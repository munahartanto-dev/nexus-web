import { useEffect, useState, useRef } from 'react';
import { Database, Code, PieChart, FileSpreadsheet, FileCode2, LineChart, BadgeCheck, Star, MessageCircle, ArrowRight, ShoppingCart, Info } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function Home() {
  const [activeAnimation, setActiveAnimation] = useState(0);
  const [autoSlideKey, setAutoSlideKey] = useState(0);
  const touchStartX = useRef(null);
  const whatsappBaseUrl = "https://wa.me/6285157709694";

  const produkDigital = [
    { id: "d1", title: "Template Invoice Master", desc: "Pembuat invoice otomatis dengan koneksi database klien. File PDF tergenerate dan siap email hanya dengan 1 klik.", price: "Rp 199.000" },
    { id: "d2", title: "HR Attendance Tracker v2", desc: "Absensi digital via Google Form terangkai rumus kalkulasi shift, telat, dan lembur secara real-time.", price: "Rp 249.000" },
    { id: "d3", title: "Marketing Campaign ROI Tool", desc: "Analisis kalkulasi biaya Ads (CPA, ROAS, CPC) dari berbagai channel pada satu Dashboard Evaluasi.", price: "Rp 299.000" },
    { id: "d4", title: "Automasi Mutasi Bank Google Sheets", desc: "Script parsing laporan bank otomatis menjadikan tabel mutasi rapi siap rekonsiliasi.", price: "Rp 349.000" }
  ];

  const animationTabs = [
    { id: 0, label: 'Laporan Otomatis', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 1, label: 'Integrasi App', icon: <Code className="w-4 h-4" /> },
    { id: 2, label: 'Dashboard Live', icon: <PieChart className="w-4 h-4" /> },
    { id: 3, label: 'Notifikasi WA', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 4, label: 'Manajemen Data', icon: <Database className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimation(prev => (prev + 1) % animationTabs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoSlideKey]);

  const handleTabClick = (id) => {
    setActiveAnimation(id);
    setAutoSlideKey(k => k + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setActiveAnimation(prev =>
        diff > 0
          ? (prev + 1) % animationTabs.length
          : (prev - 1 + animationTabs.length) % animationTabs.length
      );
      setAutoSlideKey(k => k + 1);
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((r) => observer.observe(r));

    return () => reveals.forEach((r) => observer.unobserve(r));
  }, []);

  return (
    <div className="w-full">
      
      {/* SECTION 1 - HERO */}
      <section id="hero" className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-[#FAF9F5] w-full max-w-full">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#611F69]/20 to-[#4A7CC7]/10 rounded blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#611F69]/10 to-[#F9EDFF]/30 rounded blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center reveal pt-4 space-y-6">
            
            <h1 className="font-heading text-4xl md:text-[64px] leading-[1.1] font-extrabold text-[#1D1C1D] tracking-[-0.77px]">
              Bisnis Anda Butuh Sistem <br className="hidden md:block"/>
              <span className="text-[#611F69]">Data yang Bekerja Sendiri</span>
            </h1>
            
            <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed max-w-2xl px-4 mt-2 mb-6">
              Kami bantu UMKM dan profesional otomasi data, buat dashboard, dan kembangkan sistem bisnis digital — tanpa ribet, tanpa coding.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
              <a href="#layanan" className="w-full sm:w-auto text-center bg-[#611F69] text-white px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold transition-transform hover:bg-[#730394]">
                Lihat Layanan
              </a>
              <a href="https://wa.me/6285157709694" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center border-2 border-[#1D1C1D] bg-transparent text-[#1D1C1D] px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold hover:bg-[#F4F4F4] transition-all">
                Konsultasi Gratis
              </a>
            </div>

            <div className="pt-16 flex flex-col items-center w-full">
               <p className="text-sm font-semibold text-[#454245] uppercase tracking-wider mb-6">
                 Dipercaya oleh tim top dunia & lokal
               </p>
               <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-70 grayscale">
                 <div className="font-bold text-lg text-gray-500 flex items-center gap-2"><div className="w-6 h-6 rounded bg-gray-400"></div> Klien 1</div>
                 <div className="font-bold text-lg text-gray-500 flex items-center gap-2"><div className="w-6 h-6 rounded bg-gray-400"></div> Klien 2</div>
                 <div className="font-bold text-lg text-gray-500 flex items-center gap-2"><div className="w-6 h-6 rounded bg-gray-400"></div> Klien 3</div>
                 <div className="font-bold text-lg text-gray-500 flex items-center gap-2"><div className="w-6 h-6 rounded bg-gray-400"></div> Klien 4</div>
                 <div className="font-bold text-lg text-gray-500 flex items-center gap-2"><div className="w-6 h-6 rounded bg-gray-400"></div> Klien 5</div>
                 <div className="font-bold text-lg text-gray-500 flex items-center gap-2"><div className="w-6 h-6 rounded bg-gray-400"></div> Klien 6</div>
               </div>
            </div>
          </div>
          
          <div className="w-full relative mt-20 max-w-5xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
            <div
              className="relative w-full min-h-[320px] md:aspect-[16/9] bg-white rounded-2xl shadow-2xl border border-[#F4F4F4] flex flex-col overflow-hidden z-10 transition-colors duration-500"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
               {/* Browser/Window Header */}
               <div className="bg-[#FAF9F5] border-b border-[#F4F4F4] px-4 py-3 flex items-center gap-2">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="mx-auto flex items-center justify-center bg-white px-4 py-1 border border-[#F4F4F4] rounded text-xs font-bold text-gray-400 w-1/3">
                   {animationTabs[activeAnimation].label}
                 </div>
               </div>
               
               {/* Dashboard Content Mockup (Changes based on activeAnimation) */}
               <div className="flex-1 p-6 flex flex-col bg-white overflow-hidden relative">
                  <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-opacity duration-500 ${activeAnimation === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                     <div className="w-24 h-24 mb-6 rounded-2xl bg-green-50 flex items-center justify-center text-green-500"><FileSpreadsheet className="w-12 h-12" /></div>
                     <h3 className="text-2xl font-bold mb-2">Google Sheets Auto-Sync</h3>
                     <p className="text-[#454245] max-w-sm">Semua data operasional langsung terekap otomatis dari berbagai sumber setiap detiknya.</p>
                  </div>
                  
                  <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-opacity duration-500 ${activeAnimation === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                     <div className="w-24 h-24 mb-6 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500"><Code className="w-12 h-12" /></div>
                     <h3 className="text-2xl font-bold mb-2">API Integration Layer</h3>
                     <p className="text-[#454245] max-w-sm">Menghubungkan sistem payment, CRM, dan web app Anda menjadi satu harmoni yang tanpa celah.</p>
                  </div>

                  <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-opacity duration-500 ${activeAnimation === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                     <div className="w-24 h-24 mb-6 rounded-2xl bg-purple-50 flex items-center justify-center text-[#611F69]"><PieChart className="w-12 h-12" /></div>
                     <h3 className="text-2xl font-bold mb-2">Realtime Dashboard</h3>
                     <p className="text-[#454245] max-w-sm">Memantau pertumbuhan bisnis dan Key Performance Indicator dalam satu layar interaktif Looker Studio.</p>
                  </div>

                  <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-opacity duration-500 ${activeAnimation === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                     <div className="w-24 h-24 mb-6 rounded-2xl bg-[#25D366]/10 flex items-center justify-center"><WhatsAppIcon className="w-12 h-12 text-[#25D366]" /></div>
                     <h3 className="text-2xl font-bold mb-2">WA Blast & Alert</h3>
                     <p className="text-[#454245] max-w-sm">Sistem langsung mengirim pesan WhatsApp tagihan atau notifikasi ke tim secara otomatis 24/7.</p>
                  </div>

                  <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-opacity duration-500 ${activeAnimation === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                     <div className="w-24 h-24 mb-6 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500"><Database className="w-12 h-12" /></div>
                     <h3 className="text-2xl font-bold mb-2">Centralized Database</h3>
                     <p className="text-[#454245] max-w-sm">Server database aman tersusun rapi untuk menopang pertumbuhan ribuan baris data bisnis Anda.</p>
                  </div>
               </div>
            </div>

            {/* Switcher Buttons */}
            <div className="w-full max-w-3xl mx-auto mt-8 flex flex-wrap justify-center gap-3 px-4">
              {animationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 font-bold text-sm transition-all duration-300 ${
                    activeAnimation === tab.id
                    ? 'border-[#611F69] bg-[#611F69] text-white shadow-md transform scale-105'
                    : 'border-[#F4F4F4] bg-white text-[#1D1C1D] hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {animationTabs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeAnimation === i ? 'bg-[#611F69] w-6' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - LAYANAN */}
      <section id="layanan" className="py-20 md:py-28 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">APA YANG KAMI KERJAKAN</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#4A154B]">Solusi Data untuk Setiap Kebutuhan Bisnis</h2>
          </div>

          {/* 3A: Layanan Custom */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-[#1D1C1D] mb-8 reveal">Layanan Custom</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-shadow reveal">
                <div className="w-14 h-14 bg-[#4A154B]/10 rounded-2xl flex items-center justify-center mb-6 text-[#4A154B]">
                  <Database className="w-7 h-7" />
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1D1C1D] mb-4">Sistem Data Otomatis</h4>
                <p className="text-[#454245] leading-relaxed mb-6">
                  Dari input manual ke sistem otomatis — form, database, laporan, notifikasi. Semua berjalan sendiri.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">App Script</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">VBA</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">Google Sheets</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-shadow reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="w-14 h-14 bg-[#4A7CC7]/10 rounded-2xl flex items-center justify-center mb-6 text-[#4A7CC7]">
                  <Code className="w-7 h-7" />
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1D1C1D] mb-4">Web & App Development</h4>
                <p className="text-[#454245] leading-relaxed mb-6">
                  Website profesional dan web app custom sesuai proses bisnis Anda. Mobile-friendly dan mudah dikelola.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">Next.js</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">React</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">Vercel</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-shadow reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="w-14 h-14 bg-[#611F69]/10 rounded-2xl flex items-center justify-center mb-6 text-[#611F69]">
                  <PieChart className="w-7 h-7" />
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1D1C1D] mb-4">Business Intelligence</h4>
                <p className="text-[#454245] leading-relaxed mb-6">
                  Dashboard interaktif dan analisis data mendalam untuk keputusan bisnis yang lebih tepat dan cepat.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">Looker</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">Tableau</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded text-gray-600">BigQuery</span>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full h-px bg-gray-200 my-16 max-w-4xl mx-auto"></div>

          {/* 3B: Produk Digital */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#1D1C1D] mb-8 reveal">Produk Digital</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {produkDigital.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl flex flex-col border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-all reveal overflow-hidden group"
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
                          className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-[#1D1C1D] text-xs font-bold py-3.5 min-h-[44px] rounded-lg border border-slate-200 transition-colors"
                        >
                          <Info className="w-3.5 h-3.5 text-slate-500" /> Detail
                        </a>
                        <a
                          href={`${whatsappBaseUrl}?text=Halo%20NexusData,%20saya%20ingin%20membeli%20produk%20digital:%20${item.title}`}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-[#611F69] hover:bg-[#730394] text-white text-xs font-bold py-3.5 min-h-[44px] rounded-lg transition-colors shadow-sm"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" /> Beli
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-12 text-center reveal">
              <a href="/produk" className="inline-flex items-center gap-2 bg-transparent border-2 border-[#4A154B] text-[#4A154B] hover:bg-[#4A154B] hover:text-white px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold transition-all">
                Lihat Semua Layanan <ArrowRight className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FOUNDER BRIEF */}
      <section id="about" className="py-20 md:py-28 bg-white border-y border-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Image */}
            <div className="w-full md:w-5/12 reveal">
              <div className="w-full aspect-[4/5] rounded-3xl relative overflow-hidden shadow-xl shadow-[#4A154B]/20">
                <img src="/images/foto-home.webp" alt="Muna Hartanto - Founder NexusData" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="font-bold text-lg">Muna Hartanto</p>
                  <p className="text-sm text-gray-300">Founder & Lead Data Engineer</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-7/12 reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-4 block">FOUNDER & DATA SPECIALIST</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1D1C1D] mb-6">Membantu bisnis skala kecil hingga besar melalui data.</h2>
              <blockquote className="text-xl text-[#4A154B] italic mb-8 border-l-4 border-[#611F69] pl-6 py-2">
                "Dengan 5 tahun pengalaman membantu 100+ bisnis di Indonesia, saya percaya setiap bisnis berhak punya sistem data yang solid — tanpa harus jadi programmer."
              </blockquote>
              
              <a href="#about" className="inline-flex items-center text-[#611F69] font-bold hover:text-[#5a42a0] transition-colors border-b-2 border-transparent hover:border-[#611F69] pb-1 gap-2">
                Kenali Lebih Lanjut &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 - TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#4A154B] mb-6">Kata Mereka yang Sudah Merasakan Hasilnya</h2>
            <p className="text-[#454245] text-lg">Solusi yang benar-benar berfokus pada hasil akhir efisiensi bisnis.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { text: "Sistem laporan otomatis yang dibuat benar-benar menghemat 3 jam kerja saya setiap hari.", name: "Budi S.", role: "Owner Toko Online", rating: 5, avatar: "11" },
              { text: "Dashboard Looker-nya keren banget, sekarang semua data penjualan dan stok langsung keliatan real-time.", name: "Rina M.", role: "Marketing Manager", rating: 5, avatar: "5" },
              { text: "Responsif banget, revisi sampai puas. Sangat recommended untuk tools backend UMKM!", name: "Dian P.", role: "Owner F&B", rating: 5, avatar: "9" },
              { text: "Pekerjaan rapi, deadline tepat waktu, dan sangat solutif. Data penjualan kami kini tercatat dengan sangat baik berkat CRM Google Sheets nya.", name: "Fajar Santosa", role: "Sales Director", rating: 5, avatar: "14" },
              { text: "Keren! Otomasi App Script bikin kerjaan HR admin saya jadi jauh lebih mudah tiap akhir bulan.", name: "Anita W.", role: "HR Consultant", rating: 5, avatar: "32" },
              { text: "Saya minta tolong bikinin web internal yang terhubung dengan G-Sheets. Pengerjaannya memuaskan, walau UI-nya butuh sedikit penyesuaian di awal.", name: "Bagus T.", role: "Operations Lead", rating: 4, avatar: "60" },
              { text: "Tidak disangka rumus Excel yang rumit bisa disederhanakan dan dibikin dinamis. Terima kasih atas bantuannya!", name: "Sarah L.", role: "Finance Admin", rating: 5, avatar: "41" },
              { text: "After-sales support nya the best. Kalau bingung selalu dipandu dan dibantu troubleshooting dengan cepat.", name: "Irfan K.", role: "Pebisnis Retail", rating: 5, avatar: "53" },
              { text: "Laporan yang mulanya memakan waktu 2 hari penuh, kini beres hanya dengan sekali klik tombol di template yang dibuat.", name: "Lestari", role: "Accounting Manager", rating: 5, avatar: "44" },
              { text: "Benar-benar partner digital yang sangat diandalkan untuk UMKM yang butuh bimbingan teknologi.", name: "Kevin A.", role: "CEO Agensi Kreatif", rating: 5, avatar: "68" },
              { text: "Otomasi sistem kasir dengan spreadsheet sangat membatu saya memantau arus kas harian tanpa harus ke toko.", name: "Andi R.", role: "Owner Kedai Kopi", rating: 5, avatar: "12" },
              { text: "Awalnya skeptis, tapi setelah sebulan pakai sistem yang dibuatkan, alur kerja tim jadi jauh lebih rapi dan transparan.", name: "Nadia K.", role: "Project Manager", rating: 5, avatar: "25" }
            ].map((testi, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-[#F4F4F4] shadow-sm reveal break-inside-avoid" style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
                <div className="flex text-yellow-500 mb-6 gap-1">
                   {Array.from({ length: 5 }).map((_, i) => (
                      i < testi.rating 
                      ? <Star key={i} className="w-5 h-5 fill-current" />
                      : <Star key={i} className="w-5 h-5 text-gray-200 fill-gray-200" />
                   ))}
                </div>
                <p className="text-[#1D1C1D] text-lg font-medium leading-relaxed mb-6">
                  "{testi.text}"
                </p>
                <div className="mt-auto border-t border-[#F4F4F4] pt-6 flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/150?img=${testi.avatar}`} alt={testi.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100" loading="lazy" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-[#4A154B]">{testi.name}</p>
                    <p className="text-[#454245] text-sm font-medium">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - CTA BANNER */}
      <section className="bg-[#4A154B] py-20 reveal">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Siap Transformasi Data Bisnis Anda?</h2>
            <p className="text-[#F9EDFF] text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-medium">
              Konsultasi pertama gratis. Ceritakan kebutuhan Anda, kami carikan solusinya.
            </p>
            <a 
              href="https://wa.me/6285157709694" 
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

    </div>
  );
}
