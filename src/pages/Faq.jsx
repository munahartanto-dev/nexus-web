import { useState, useEffect } from 'react';
import { 
  ChevronRight, Search, ChevronDown, MessageCircle, Mail,
  Info, Briefcase, RotateCcw, CreditCard, ShieldCheck, Code,
  Star, Users, CheckCircle2, Clock
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const faqData = [
  {
    category: "Umum",
    icon: "info",
    questions: [
      {
        q: "Apa itu NexusData?",
        a: "NexusData adalah layanan konsultasi data dan automasi digital yang membantu UMKM dan profesional Indonesia mengoptimalkan operasional bisnis mereka melalui sistem data yang cerdas, dashboard interaktif, dan automasi proses."
      },
      {
        q: "Siapa yang cocok menggunakan jasa NexusData?",
        a: "Layanan kami ideal untuk owner bisnis UMKM yang ingin naik kelas secara digital, manajer atau profesional yang membutuhkan sistem data lebih efisien, serta perusahaan yang ingin mengotomasi proses operasional mereka."
      },
      {
        q: "Apakah saya perlu punya skill teknis untuk menggunakan hasilnya?",
        a: "Tidak perlu. Semua hasil pekerjaan kami dirancang agar mudah digunakan oleh siapa saja. Kami juga menyediakan panduan dan training singkat agar Anda bisa langsung menggunakannya secara mandiri."
      },
      {
        q: "Berapa lama waktu respons NexusData?",
        a: "Rata-rata waktu respons kami adalah 1 menit via WhatsApp. Kami aktif setiap hari kerja dan siap membantu pertanyaan atau kebutuhan Anda dengan cepat."
      }
    ]
  },
  {
    category: "Layanan",
    icon: "briefcase",
    questions: [
      {
        q: "Apa perbedaan layanan custom dan produk siap pakai?",
        a: "Produk siap pakai (Data Fix, Smart Template, Business Autopilot) adalah paket dengan scope yang sudah ditentukan dan cocok untuk kebutuhan umum. Layanan custom dirancang khusus untuk kebutuhan spesifik bisnis Anda dengan scope yang lebih fleksibel dan skala lebih besar."
      },
      {
        q: "Tools apa saja yang digunakan NexusData?",
        a: "Kami menggunakan berbagai tools tergantung kebutuhan: Microsoft Excel & Google Sheets untuk spreadsheet, Google Apps Script & VBA untuk automasi, Looker Studio & Tableau untuk dashboard, BigQuery untuk data berskala besar, serta Next.js & React untuk web development."
      },
      {
        q: "Apakah bisa request fitur di luar paket yang tersedia?",
        a: "Tentu bisa. Kami sangat terbuka untuk diskusi kebutuhan custom. Hubungi kami via WhatsApp dan ceritakan kebutuhan Anda — kami akan buatkan penawaran yang sesuai."
      },
      {
        q: "Apakah NexusData juga melayani proyek jangka panjang?",
        a: "Ya, kami melayani proyek jangka panjang dan retainer bulanan. Cocok untuk bisnis yang butuh maintenance sistem data, update dashboard rutin, atau pengembangan fitur berkelanjutan."
      }
    ]
  },
  {
    category: "Revisi & Kualitas",
    icon: "refresh",
    questions: [
      {
        q: "Berapa kali bisa revisi?",
        a: "Jumlah revisi tergantung paket: Data Fix (1x), Smart Template (3x), Business Autopilot (tak terbatas dalam scope). Untuk layanan custom, revisi disesuaikan dengan kesepakatan di awal."
      },
      {
        q: "Bagaimana jika saya tidak puas dengan hasilnya?",
        a: "Kepuasan klien adalah prioritas utama kami. Kami berkomitmen untuk revisi hingga Anda puas sesuai scope yang disepakati di awal. Jika ada ketidaksesuaian dari hasil yang dijanjikan, kami siap menyelesaikannya."
      },
      {
        q: "Apakah ada garansi after-sales support?",
        a: "Ya, setiap paket dilengkapi after-sales support: Data Fix (2 hari), Smart Template (6 hari), Business Autopilot (30 hari). Selama periode ini kami siap membantu jika ada kendala teknis."
      }
    ]
  },
  {
    category: "Pembayaran",
    icon: "credit-card",
    questions: [
      {
        q: "Bagaimana cara pembayaran?",
        a: "Pembayaran bisa melalui transfer bank (BCA, Mandiri, BNI), GoPay, OVO, atau QRIS. Detail rekening akan diberikan setelah kesepakatan scope pekerjaan."
      },
      {
        q: "Apakah ada DP atau bayar di muka?",
        a: "Untuk proyek di bawah Rp500 ribu biasanya lunas di muka. Untuk proyek lebih besar, kami menerapkan skema DP 50% di awal dan 50% setelah selesai. Kami fleksibel untuk diskusi skema pembayaran."
      },
      {
        q: "Kapan pembayaran dilakukan?",
        a: "Pembayaran dilakukan setelah kesepakatan scope, timeline, dan harga. Kami tidak meminta pembayaran sebelum ada kejelasan mengenai apa yang akan dikerjakan."
      },
      {
        q: "Apakah ada invoice resmi?",
        a: "Ya, kami menyediakan invoice resmi untuk setiap transaksi. Invoice dikirimkan via email atau WhatsApp sesuai preferensi Anda."
      }
    ]
  },
  {
    category: "Keamanan Data",
    icon: "shield",
    questions: [
      {
        q: "Apakah data bisnis saya aman?",
        a: "Kerahasiaan data klien adalah prioritas utama kami. Semua data yang Anda berikan hanya digunakan untuk keperluan pengerjaan proyek dan tidak akan dibagikan kepada pihak ketiga manapun."
      },
      {
        q: "Apakah NexusData menandatangani NDA?",
        a: "Ya, kami bersedia menandatangani Non-Disclosure Agreement (NDA) jika Anda membutuhkannya. Hubungi kami untuk mendiskusikan detail NDA sesuai kebutuhan bisnis Anda."
      },
      {
        q: "Siapa yang memiliki hak atas hasil pekerjaan?",
        a: "Setelah pembayaran lunas, hak penuh atas semua hasil pekerjaan — termasuk file, kode, dan dokumentasi — sepenuhnya menjadi milik Anda."
      }
    ]
  },
  {
    category: "Teknis",
    icon: "code",
    questions: [
      {
        q: "Format file apa yang akan saya terima?",
        a: "Tergantung jenis pekerjaan: file Excel/Google Sheets untuk template, link dashboard untuk Looker/Tableau, kode script untuk automasi, atau akses repository untuk web development."
      },
      {
        q: "Apakah tersedia training setelah proyek selesai?",
        a: "Ya, kami menyediakan sesi training singkat (15-30 menit via video call) untuk menjelaskan cara penggunaan hasil pekerjaan. Training tambahan tersedia dengan biaya terpisah."
      },
      {
        q: "Bagaimana proses handover proyek?",
        a: "Setelah selesai, kami akan mengirimkan semua file beserta dokumentasi penggunaan, melakukan sesi training jika diperlukan, dan memastikan Anda bisa menggunakan hasilnya secara mandiri sebelum proyek dinyatakan selesai."
      }
    ]
  }
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  
  const whatsappBaseUrl = "https://wa.me/6285157709694";

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

  // Set up intersection observer to spy on scrolling categories
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const categoryMatch = entry.target.id.match(/^category-(.+)$/);
            if (categoryMatch) {
              // Convert kebab-case ID back to original logic (approximate for highlight)
              // Or just find the category by finding matching elements.
              const originalCat = faqData.find(c => 
                c.category.toLowerCase().replace(/\s|\&/g, '-') === categoryMatch[1]
              );
              if (originalCat) {
                setActiveCategory(originalCat.category);
              }
            }
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' } // triggers when near top
    );
    
    document.querySelectorAll('.faq-category-section').forEach(sec => {
      sectionObserver.observe(sec);
    });

    return () => sectionObserver.disconnect();
  }, [searchQuery]); // re-run if filter changes length of page

  const toggleQuestion = (questionText) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionText)) {
        newSet.delete(questionText);
      } else {
        newSet.add(questionText);
      }
      return newSet;
    });
  };

  const getIcon = (iconName, className) => {
    const props = { className };
    switch(iconName) {
      case 'info': return <Info {...props} />;
      case 'briefcase': return <Briefcase {...props} />;
      case 'refresh': return <RotateCcw {...props} />;
      case 'credit-card': return <CreditCard {...props} />;
      case 'shield': return <ShieldCheck {...props} />;
      case 'code': return <Code {...props} />;
      default: return <Info {...props} />;
    }
  };

  const scrollToCategory = (categoryName) => {
    setActiveCategory(categoryName);
    const elementId = 'category-' + categoryName.toLowerCase().replace(/\s|\&/g, '-');
    const element = document.getElementById(elementId);
    if (element) {
      // scroll to element considering fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const filteredFaq = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="w-full">
      {/* SECTION 1 - PAGE HERO */}
      <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 bg-[#FAF9F5] overflow-hidden">
        {/* Background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#611F69]/20 to-[#4A7CC7]/10 rounded blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#611F69]/10 to-[#F9EDFF]/30 rounded blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-6 reveal">
          
          <h1 className="font-heading text-4xl md:text-[64px] leading-[1.1] font-extrabold text-[#1D1C1D] tracking-[-0.77px]">
            Ada yang Ingin <span className="text-[#611F69]">Ditanyakan?</span>
          </h1>
          
          <p className="text-lg md:text-[18px] text-[#454245] leading-relaxed max-w-2xl px-4 mt-2 mb-6">
            Temukan jawaban untuk pertanyaan yang paling sering kami terima.
          </p>
        </div>
      </section>

      {/* SECTION 2 - SEARCH BAR */}
      <section className="relative z-20 -mt-10 reveal">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 md:p-3 shadow-xl border border-[#F4F4F4] flex items-center gap-3">
            <div className="pl-4 text-[#454245]">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Cari pertanyaan..."
              className="w-full text-lg outline-none text-[#1D1C1D] bg-transparent py-3 placeholder:text-gray-400 font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
               <button 
                  onClick={() => setSearchQuery('')}
                  className="pr-4 text-gray-400 hover:text-gray-600 font-semibold text-sm"
               >
                  Tutup
               </button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3 - FAQ CONTENT */}
      <section className="py-20 md:py-28 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* LEFT: Category Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-28 bg-white border border-[#F4F4F4] rounded-2xl p-4 shadow-sm reveal">
                <h3 className="font-heading font-bold text-[#4A154B] text-lg mb-4 px-4 hidden lg:block">Kategori</h3>
                
                {/* Horizontal scroll on mobile, vertical on desktop */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-hide">
                  {faqData.map((category, idx) => {
                     const isCategoryActive = activeCategory === category.category;
                     return (
                      <button
                        key={idx}
                        onClick={() => scrollToCategory(category.category)}
                        className={`flex items-center gap-3 w-max lg:w-full px-4 py-3 min-h-[44px] rounded-xl transition-all font-medium text-sm lg:text-base shrink-0
                          ${isCategoryActive 
                            ? 'bg-[#611F69] text-white shadow-md' 
                            : 'bg-transparent text-[#454245] hover:bg-gray-50 hover:text-[#4A154B]'
                          }`}
                      >
                        {getIcon(category.icon, "w-5 h-5")}
                        <span className="font-semibold">{category.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: Accordion Content */}
            <div className="w-full lg:w-2/3 flex flex-col gap-12">
              
              {filteredFaq.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#F4F4F4] p-10 text-center shadow-sm reveal">
                  <div className="w-16 h-16 rounded bg-blue-50 text-[#4A154B] flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#4A154B] mb-2">Pencarian Tidak Ditemukan</h3>
                  <p className="text-[#454245] mb-6">Tidak ada hasil untuk kata kunci <span className="font-semibold italic text-[#1D1C1D]">"{searchQuery}"</span></p>
                  <a 
                    href={`${whatsappBaseUrl}?text=Halo%20NexusData,%20saya%20ingin%20bertanya`} 
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-[#611F69] px-[16px] py-[12px] uppercase tracking-[0.8px] text-[14px] rounded font-bold hover:-translate-y-1 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" /> Tanyakan via WhatsApp
                  </a>
                </div>
              ) : (
                filteredFaq.map((categoryInfo, cIndex) => (
                  <div 
                    key={cIndex} 
                    id={'category-' + categoryInfo.category.toLowerCase().replace(/\s|\&/g, '-')}
                    className="faq-category-section reveal font-sans"
                    style={{ transitionDelay: `${cIndex * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center text-[#611F69]">
                        {getIcon(categoryInfo.icon, "w-5 h-5")}
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-[#4A154B] flex-1">
                        {categoryInfo.category}
                      </h2>
                      <span className="bg-white border border-[#F4F4F4] text-[#611F69] text-xs font-bold px-3 py-1 rounded shadow-sm">
                        {categoryInfo.questions.length} Pertanyaan
                      </span>
                    </div>

                    <div className="bg-white border border-[#F4F4F4] rounded-2xl overflow-hidden shadow-sm">
                      {categoryInfo.questions.map((item, qIndex) => {
                        const isOpen = openItems.has(item.q);
                        const isLast = qIndex === categoryInfo.questions.length - 1;
                        
                        return (
                          <div 
                            key={qIndex} 
                            className={`border-b ${isLast ? 'border-transparent' : 'border-[#F4F4F4]'} transition-colors`}
                          >
                            <button
                              onClick={() => toggleQuestion(item.q)}
                              className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors ${isOpen ? 'bg-[#F9EDFF]' : 'hover:bg-gray-50'}`}
                            >
                              <span className="font-semibold text-[#4A154B] pr-4">{item.q}</span>
                              <ChevronDown className={`w-5 h-5 text-[#454245] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#611F69]' : ''}`} />
                            </button>
                            
                            <div 
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                              <div className="px-5 md:px-6 pb-6 pt-2">
                                <div className="pl-4 border-l-4 border-[#611F69]">
                                  <p className="text-[#454245] leading-[1.7]">{item.a}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - CTA */}
      <section className="bg-[#4A154B] py-24 reveal">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Pertanyaan Anda Tidak Ada di Sini?</h2>
            <p className="text-[#F9EDFF] text-lg mb-10 max-w-xl leading-relaxed">
              Tim kami siap menjawab pertanyaan spesifik tentang kebutuhan bisnis Anda.
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
