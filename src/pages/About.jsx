import { useEffect } from 'react';
import { 
  ChevronRight, GraduationCap, Award, Briefcase, 
  ShieldCheck, Code, Star, CheckCircle2, Clock, 
  Users, BadgeCheck, PlusCircle, MessageCircle, ArrowRight, ArrowDown,
  FileSpreadsheet, Database, LineChart, Globe, Triangle, Webhook
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function AboutPage() {
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

  const founderName = "Muna Hartanto";
  const whatsappUrl = "https://wa.me/6285157709694";

  return (
    <div className="w-full">
      {/* SECTION 1 - PAGE HERO */}
      <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 bg-[#FAF9F5] overflow-hidden">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#611F69]/20 to-[#4A7CC7]/10 rounded blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#611F69]/10 to-[#F9EDFF]/30 rounded blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto space-y-6 reveal">
          
          <h1 className="font-heading text-4xl md:text-[64px] leading-[1.1] font-extrabold text-[#1D1C1D] tracking-[-0.77px]">
            Kenali Orang di <span className="text-[#611F69]">Balik NexusData</span>
          </h1>
          
          <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed max-w-2xl px-4 mt-2 mb-6">
            Profesional data dengan misi sederhana — membantu bisnis Indonesia tumbuh lewat sistem yang cerdas.
          </p>
        </div>
      </section>

      {/* SECTION 2 - FOUNDER FULL PROFILE */}
      <section className="py-20 md:py-28 bg-[#FAF9F5] border-b border-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
            
            {/* Left - Profile Content */}
            <div className="w-full lg:w-1/2 reveal">
              <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-4 block">FOUNDER & DATA SPECIALIST</span>
              <h2 className="font-heading text-4xl md:text-[58px] leading-[1.1] font-extrabold text-[#1D1C1D] tracking-[-0.46px] mb-4">
                Muna Hartanto.
              </h2>
              <p className="text-lg font-semibold text-[#4A7CC7] mb-6">
                Data Analyst &middot; Automation Engineer &middot; Web Developer
              </p>
              
              <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed mb-6">
                Dengan pengalaman lebih dari 5 tahun membantu 100+ bisnis di Indonesia, saya berspesialisasi dalam mengubah data mentah menjadi sistem yang bekerja otomatis.
              </p>
              <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed mb-10">
                Dari UMKM kuliner hingga perusahaan manufaktur — saya percaya setiap bisnis berhak punya infrastruktur data yang solid.
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex bg-[#4A154B] text-white px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold hover:bg-[#2E0039] transition-colors"
              >
                HUBUNGI SAYA
              </a>
            </div>

            {/* Right - Photo Area */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-full max-w-[450px] aspect-square rounded-[35px] shadow-xl shadow-purple-100 relative overflow-hidden">
                <img src="/images/foto-about.webp" alt="Muna Hartanto - Founder NexusData" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow border border-[#F4F4F4]">
                  <BadgeCheck className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-bold text-green-700">Verified Freelance</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Bottom - 4 Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal" style={{ transitionDelay: '0.2s' }}>
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)] border border-blue-50/50 hover:-translate-y-1 transition-transform duration-300 sm:aspect-[4/3] sm:max-h-[220px]">
               <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#1D1C1D] leading-[1.3] mb-4 tracking-tight">Lebih dari 100+<br/>klien dilayani.</h3>
               <div className="flex justify-end mt-auto">
                  <div className="w-12 h-12 rounded-[12px] bg-[#2E0039] flex items-center justify-center -mr-2 -mb-2">
                     <Users className="w-6 h-6 text-white" />
                  </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between shadow-[0_0_50px_-12px_rgba(34,197,94,0.2)] border border-green-50/50 hover:-translate-y-1 transition-transform duration-300 sm:aspect-[4/3] sm:max-h-[220px]">
               <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#1D1C1D] leading-[1.3] mb-4 tracking-tight">Rating sempurna<br/>rata-rata 4.9.</h3>
               <div className="flex justify-end mt-auto">
                  <div className="w-12 h-12 rounded-[12px] bg-[#2E0039] flex items-center justify-center -mr-2 -mb-2">
                     <Star className="w-6 h-6 text-white fill-white" />
                  </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between shadow-[0_0_50px_-12px_rgba(236,72,153,0.2)] border border-pink-50/50 hover:-translate-y-1 transition-transform duration-300 sm:aspect-[4/3] sm:max-h-[220px]">
               <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#1D1C1D] leading-[1.3] mb-4 tracking-tight">63+ pekerjaan<br/>diselesaikan.</h3>
               <div className="flex justify-end mt-auto">
                  <div className="w-12 h-12 rounded-[12px] bg-[#2E0039] flex items-center justify-center -mr-2 -mb-2">
                     <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
               </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between shadow-[0_0_50px_-12px_rgba(234,179,8,0.2)] border border-yellow-50/50 hover:-translate-y-1 transition-transform duration-300 sm:aspect-[4/3] sm:max-h-[220px]">
               <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-[#1D1C1D] leading-[1.3] mb-4 tracking-tight">Respons kilat<br/>dalam ~1 menit.</h3>
               <div className="flex justify-end mt-auto">
                  <div className="w-12 h-12 rounded-[12px] bg-[#2E0039] flex items-center justify-center -mr-2 -mb-2">
                     <Clock className="w-6 h-6 text-white" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - EDUCATION */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">PENDIDIKAN</span>
            <h2 className="font-heading text-3xl font-bold text-[#4A154B]">Latar Belakang Akademis & Profesional</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#F4F4F4] flex items-start gap-5 reveal">
              <div className="w-12 h-12 rounded-xl bg-[#4A154B]/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#4A154B]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-gray-100 text-[#454245] rounded text-xs font-bold mb-3">S1 / Bachelor's</span>
                <h3 className="font-heading text-xl font-bold text-[#1D1C1D] mb-1">Universitas Gadjah Mada</h3>
                <p className="text-[#454245] font-medium">Teknik Fisika</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#F4F4F4] flex items-start gap-5 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-xl bg-[#611F69]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#611F69]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-purple-50 text-[#611F69] rounded text-xs font-bold mb-3">Professional Certification</span>
                <h3 className="font-heading text-xl font-bold text-[#1D1C1D] mb-1">Binar Academy</h3>
                <p className="text-[#454245] font-medium">Business Intelligence Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WORK EXPERIENCE */}
      <section className="py-20 bg-white border-y border-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-16 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">PENGALAMAN</span>
            <h2 className="font-heading text-3xl font-bold text-[#4A154B]">Perjalanan Profesional</h2>
          </div>

          <div className="max-w-4xl relative border-l-2 border-[#F4F4F4] ml-4 md:ml-8 space-y-12">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-8 md:pl-12 reveal">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded border-4 border-white bg-[#611F69] shadow-sm"></div>
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#F4F4F4]">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-[#611F69]">May 2021 — Sekarang</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-bold">Aktif</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1D1C1D] mb-1">Founder & Lead Data Specialist</h3>
                <h4 className="text-[#454245] font-medium mb-4">nexusdata.id (formerly jasaexcel.com)</h4>
                <p className="text-[#475569] leading-relaxed">
                  Membangun dan memimpin layanan konsultasi data untuk 100+ klien dari berbagai industri di Indonesia. Fokus pada otomasi proses bisnis, business intelligence, dan web development.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 md:pl-12 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded border-4 border-white bg-[#4A154B] shadow-sm"></div>
              <div className="bg-white p-6 rounded-2xl border border-[#F4F4F4] shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-[#454245]">June 2020 — April 2021</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs font-bold">Selesai</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1D1C1D] mb-1">Chief Technology Officer</h3>
                <h4 className="text-[#454245] font-medium mb-4">PT Nova Starlight Indonesia</h4>
                <p className="text-[#475569] leading-relaxed">
                  Memimpin transformasi digital perusahaan, membangun infrastruktur teknologi dari ground up. Menyelaraskan strategi pengembangan produk dengan sasaran bisnis perusahaan.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 - SKILLS */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold text-[#4A154B]">Tools & Teknologi</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Skill 1 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600"><FileSpreadsheet className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Microsoft Excel</span>
              </div>
            </div>
            
            {/* Skill 2 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600"><FileSpreadsheet className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Google Sheets</span>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><LineChart className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Looker Studio</span>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"><Database className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Tableau</span>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600"><Code className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Google Apps Script</span>
              </div>
            </div>

            {/* Skill 6 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.25s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600"><Database className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Google BigQuery</span>
              </div>
            </div>

            {/* Skill 7 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600"><Globe className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Web App</span>
              </div>
            </div>

            {/* Skill 8 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.35s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><Code className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Visual Code Studio</span>
              </div>
            </div>

            {/* Skill 9 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-800"><Triangle className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">Vercel</span>
              </div>
            </div>

            {/* Skill 10 */}
            <div className="bg-white p-5 rounded-xl border border-[#F4F4F4] shadow-sm flex items-center justify-between reveal" style={{ transitionDelay: '0.45s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600"><Webhook className="w-5 h-5" /></div>
                <span className="font-bold text-[#1D1C1D]">API Integration</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 - CERTIFICATIONS */}
      <section className="py-20 bg-white border-y border-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">SERTIFIKASI</span>
            <h2 className="font-heading text-3xl font-bold text-[#4A154B]">Sertifikat & Penghargaan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 rounded-2xl bg-white border border-[#F4F4F4] shadow-sm flex flex-col items-center text-center reveal">
              <div className="w-14 h-14 rounded bg-[#611F69]/10 text-[#611F69] flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-[#4A154B] text-lg mb-2">Business Intelligence Engineer</h3>
              <p className="text-sm font-semibold text-[#454245] mb-1">Binar Academy</p>
              <p className="text-xs text-gray-400 font-bold">2021</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F4F4F4] shadow-sm flex flex-col items-center text-center reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded bg-[#4A154B]/10 text-[#4A154B] flex items-center justify-center mb-5">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-[#4A154B] text-lg mb-2">SQL Certificate</h3>
              <p className="text-sm font-semibold text-[#454245] mb-1">HackerRank</p>
              <p className="text-xs text-gray-400 font-bold">2021</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#F4F4F4] shadow-sm flex flex-col items-center text-center reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded bg-amber-100 text-amber-500 flex items-center justify-center mb-5">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-[#4A154B] text-lg mb-1">GCF Global Certificate</h3>
              <p className="text-[#454245] text-xs mb-2">Excel Formula</p>
              <p className="text-sm font-semibold text-[#454245] mb-1">GCF Global</p>
              <p className="text-xs text-gray-400 font-bold">2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - WHY CHOOSE NEXUSDATA */}
      <section className="py-20 md:py-28 bg-[#F9EDFF]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">MENGAPA NEXUSDATA</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#4A154B]">4 Alasan Klien Mempercayai Kami</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 reveal">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#611F69] flex items-center justify-center mb-5"><Briefcase className="w-6 h-6" /></div>
              <h3 className="font-heading font-bold text-xl text-[#4A154B] mb-3">Berpengalaman</h3>
              <p className="text-[#454245] leading-relaxed">100+ proyek dari berbagai industri — kuliner, retail, manufaktur, jasa.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#4A7CC7] flex items-center justify-center mb-5"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="font-heading font-bold text-xl text-[#4A154B] mb-3">Transparan</h3>
              <p className="text-[#454245] leading-relaxed">Revisi sampai puas, harga jelas, after-sales support di setiap paket.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5"><Clock className="w-6 h-6" /></div>
              <h3 className="font-heading font-bold text-xl text-[#4A154B] mb-3">Responsif</h3>
              <p className="text-[#454245] leading-relaxed">Rata-rata respons 1 menit. Kami hadir saat Anda butuhkan untuk kelancaran bisnis.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-5"><BadgeCheck className="w-6 h-6" /></div>
              <h3 className="font-heading font-bold text-xl text-[#4A154B] mb-3">Terverifikasi</h3>
              <p className="text-[#454245] leading-relaxed">Sertifikasi internasional, rating 4.9, Verified Freelance badge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - TEAM */}
      <section className="py-20 bg-white border-y border-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal">
            <span className="text-[#611F69] font-bold text-sm tracking-widest uppercase mb-2 block">TIM KAMI</span>
            <h2 className="font-heading text-3xl font-bold text-[#4A154B]">Orang-Orang di Balik NexusData</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
            {/* Founder Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#F4F4F4] shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left reveal">
              <div className="w-24 h-24 shrink-0 rounded bg-gradient-to-br from-[#4A154B] to-[#611F69] flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-heading font-extrabold opacity-90">MH</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-[#4A154B] mb-1">{founderName}</h3>
                <p className="text-[#454245] font-medium text-sm mb-4">Founder & Lead Specialist</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">Excel</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">Looker</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">App Script</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold">Web Dev</span>
                </div>
              </div>
            </div>

            {/* Hiring Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gray-50 border-2 border-dashed border-[#F4F4F4] flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="w-20 h-20 shrink-0 rounded bg-white flex items-center justify-center border border-[#F4F4F4] shadow-sm">
                <PlusCircle className="w-8 h-8 text-[#454245]" />
              </div>
              <div className="flex-1 flex flex-col items-center sm:items-start h-full justify-center">
                <h3 className="font-heading font-bold text-xl text-[#1D1C1D] mb-2">Tim Kami Berkembang</h3>
                <p className="text-[#454245] text-sm mb-4">Kami selalu mencari talenta data terbaik.</p>
                <a href="#" className="inline-flex items-center gap-1 text-[#611F69] font-bold text-sm hover:text-[#5a42a0] transition-colors">
                  Lihat Peluang <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - CTA */}
      <section className="bg-[#4A154B] py-24 reveal">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Siap Bekerja Sama?</h2>
            <p className="text-[#F9EDFF] text-lg mb-10 max-w-xl leading-relaxed">
              Ceritakan kebutuhan bisnis Anda. Konsultasi pertama gratis, tanpa komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#4A154B] px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold text-lg transition-transform hover:-translate-y-1 shadow-2xl whitespace-nowrap"
              >
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                Mulai Konsultasi Gratis
              </a>
              <a 
                href="#produk" 
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white text-white px-[40px] py-[19px] uppercase tracking-[0.8px] text-[14px] rounded font-bold text-lg transition-all"
              >
                Lihat Layanan Kami <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
