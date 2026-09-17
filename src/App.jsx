import React, { useState, useEffect } from 'react';
import {
  Instagram,
  MapPin,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Shield,
  Music,
  Headphones,
  Star,
  Quote,
  Info,
  History,
  ChevronDown,
  ChevronUp,
  PlayCircle
} from 'lucide-react';

const pageData = {
  name: "EchoNation",
  phone: "6289529605601",
  address: "Palangka Raya, Kota Palangka Raya, Kalimantan Tengah",
  title: "Sewa Alat Musik Premium untuk Performa Sempurna",
  description: "Dari studio rekaman hingga panggung konser, EchoNation menyediakan instrumen dan sound system berkualitas tinggi untuk memastikan setiap nada Anda terdengar memukau.",
  profileImg: "./logo-echonation.png",
  heroImg: "./background-echonation.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Kota+Palangka+Raya,+Kalimantan+Tengah/",
    tiktok: "https://www.tiktok.com/@solusilokal.id"
  },
  about: "EchoNation lahir dari gairah terhadap musik dan kualitas suara. Kami berdedikasi untuk mendukung para musisi, kreator, dan penyelenggara acara dengan menyediakan akses ke peralatan standar industri tanpa harus membelinya.",
  history: "Berdiri pada tahun 2018 di sebuah studio kecil, kami memulai dengan menyewakan beberapa gitar dan amplifier. Kini, EchoNation telah dipercaya menjadi vendor peralatan resmi untuk berbagai festival musik, tur band nasional, dan ratusan acara korporat di seluruh Indonesia.",
  features: [
    { name: "Kualitas Premium", icon: "Star" },
    { name: "Teknisi Standby", icon: "Headphones" },
    { name: "Gratis Antar (S&K)", icon: "Clock" },
    { name: "Alat Terawat", icon: "Shield" }
  ],
  catalog: [
    {
      category: "Gitar & Bass",
      items: [
        { name: "Fender Stratocaster American Professional", price: "350.000", img: "public/galeri-1.webp" },
        { name: "Bass Gibson Thunderbird", price: "400.000", img: "public/galeri-2.webp" },
        { name: "Ibanez Premium SR Bass", price: "300.000", img: "public/galeri-3.webp" }
      ]
    },
    {
      category: "Drum & Perkusi",
      items: [
        { name: "Pearl Masterworks Custom Drum Kit", price: "1.200.000", img: "public/galeri-4.webp" },
        { name: "Roland TD-50K2 V-Drums (Elektrik)", price: "950.000", img: "public/galeri-5.webp" },
        { name: "Zildjian K Custom Cymbal Set", price: "450.000", img: "public/galeri-6.webp" }
      ]
    },
    {
      category: "Keyboard & Synth",
      items: [
        { name: "Nord Stage 3 88-Key", price: "850.000", img: "public/galeri-7.webp" },
        { name: "Korg Kronos 2", price: "750.000", img: "public/galeri-8.webp" },
        { name: "Yamaha Motif XF8", price: "650.000", img: "public/galeri-9.webp" }
      ]
    },
    {
      category: "Sound System",
      items: [
        { name: "Paket Akustik (2 Speaker, 1 Mixer, 2 Mic)", price: "1.500.000", img: "public/galeri-10.webp" },
        { name: "Paket Band Full (FOH, Monitor, Mic Set)", price: "4.500.000", img: "public/galeri-11.webp" },
        { name: "Paket DJ (2 CDJ, 1 DJ Mixer, 2 Monitor)", price: "2.500.000", img: "public/galeri-12.webp" }
      ]
    }
  ],
  testimonials: [
    { name: "Apresia (Gitaris Indie)", rating: 5, text: "Sewa ampli tabung di EchoNation kualitasnya selalu terjaga. Tabungnya masih fresh, soundnya nendang banget buat manggung." },
    { name: "Nabila (Wedding Organizer)", rating: 5, text: "Sangat membantu! Paket sound system akustiknya praktis, teknisinya ramah dan on-time. Klien saya sangat puas dengan kualitas suaranya." },
    { name: "Jesica (Produser)", rating: 4, text: "Katalog keyboardnya lengkap banget. Sewa Nord buat recording album, alat bersih tanpa kendala. Rekomen!" }
  ],
  faqs: [
    { q: "Bagaimana sistem perhitungan harga sewanya?", a: "Harga yang tertera pada katalog adalah harga sewa per hari (24 jam). Kami memberikan diskon khusus untuk penyewaan lebih dari 3 hari atau mingguan." },
    { q: "Apakah alat bisa diantar ke lokasi?", a: "Ya, kami menyediakan layanan antar-jemput ke lokasi acara. Gratis biaya antar untuk area Palangka Raya dengan minimum transaksi Rp 1.000.000." },
    { q: "Bagaimana jika terjadi kerusakan pada alat saat disewa?", a: "Setiap penyewaan dilengkapi dengan perjanjian sewa. Kerusakan minor akibat pemakaian wajar adalah tanggung jawab kami. Namun, kerusakan fatal akibat kelalaian akan dibebankan kepada penyewa sesuai kesepakatan tertulis." },
    { q: "Apakah disediakan teknisi (soundman)?", a: "Untuk paket Sound System, harga sudah termasuk 1 orang teknisi standby selama acara (maks. 8 jam). Teknisi tambahan tersedia dengan biaya ekstra." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const scrollToForm = () => {
    const el = document.getElementById('booking-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const rentDate = formData.get('rentDate');
    const duration = formData.get('duration');
    const category = formData.get('category');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20bertanya%20tentang%20sewa%20${category}.%0A%0ARencana%20Sewa:%20${rentDate}%0ADurasi:%20${duration}%20hari.%0ACatatan:%20${notes}%0A%0AApakah%20alat%20tersedia?`;
    window.open(waUrl, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const copyToClipboard = () => {
    navigator.clipboard?.writeText ? navigator.clipboard.writeText(window.location.href) : (() => {
      const tempInput = document.createElement('input');
      tempInput.value = window.location.href;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    })();

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderFacilityIcon = (iconName) => {
    const iconProps = { size: 24, strokeWidth: 1.5, className: "text-[#2fa0b5]" };
    switch (iconName) {
      case 'Star': return <Star {...iconProps} />;
      case 'Headphones': return <Headphones {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      case 'Shield': return <Shield {...iconProps} />;
      default: return <Check {...iconProps} />;
    }
  };

  return (
    <>
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32 border-x border-slate-100">

        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6">

          <button
            onClick={() => setShowShareModal(true)}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-white/50 backdrop-blur-md rounded-full border border-slate-200/50 text-[#114b79] hover:bg-white transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img
              src={pageData.heroImg}
              alt={pageData.name}
              className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-1 bg-white/50 backdrop-blur-md mb-6 shadow-[0_0_30px_rgba(47,160,181,0.2)] border border-[#2fa0b5]/30">
              <img
                src={pageData.profileImg}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-extrabold text-[#114b79] mb-3 leading-tight tracking-tight">
              {pageData.name}
            </h1>
            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 max-w-[95%]">
              {pageData.title}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-10">
              <a
                href={pageData.links.instagram} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-md border border-cyan-100 hover:bg-cyan-50 hover:border-[#2fa0b5]/50 transition-all text-[#114b79] shadow-sm text-[13px] font-bold"
              >
                <Instagram size={16} className="text-[#2fa0b5]" /> Instagram
              </a>
              <a
                href={pageData.links.tiktok} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-md border border-cyan-100 hover:bg-cyan-50 hover:border-[#2fa0b5]/50 transition-all text-[#114b79] shadow-sm text-[13px] font-bold"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-[#2fa0b5]">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg> TikTok
              </a>
              <a
                href={pageData.links.maps} target="_blank" rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-md border border-cyan-100 hover:bg-cyan-50 hover:border-[#2fa0b5]/50 transition-all text-[#114b79] shadow-sm text-[13px] font-bold"
              >
                <MapPin size={16} className="text-[#2fa0b5]" /> Lokasi
              </a>
            </div>

            <button
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#114b79] text-white rounded-xl font-bold text-sm tracking-wide hover:bg-[#2fa0b5] transition-all shadow-[0_0_20px_rgba(47,160,181,0.3)] cursor-pointer"
            >
              Sewa Alat Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* TENTANG KAMI & HISTORY */}
        <section className="py-12 px-6 border-b border-cyan-100 bg-cyan-50/30">
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Info className="text-[#2fa0b5]" size={20} />
                <h2 className="text-xl font-bold text-[#114b79] tracking-tight">Tentang Kami</h2>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed text-justify">
                {pageData.about}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <History className="text-[#2fa0b5]" size={20} />
                <h2 className="text-xl font-bold text-[#114b79] tracking-tight">Perjalanan Kami</h2>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed text-justify">
                {pageData.history}
              </p>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="py-10 px-6">
          <div className="grid grid-cols-2 gap-3">
            {pageData.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 px-3 py-3.5 bg-white border border-[#cffafe] rounded-xl">
                <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center bg-[#ecfeff] rounded-xl">
                  {renderFacilityIcon(feat.icon)}
                </div>
                <span className="text-[13px] font-bold text-[#114b79] leading-tight">{feat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* KATALOG & HARGA (HORIZONTAL SCROLL) */}
        <section className="py-12 bg-cyan-50/30 border-y border-cyan-100">
          <div className="px-6 mb-6">
            <h2 className="text-2xl font-extrabold text-[#114b79] mb-2">Katalog & Harga Sewa</h2>
            <p className="text-slate-500 text-xs font-medium">Temukan instrumen impian Anda. Harga tertera untuk sewa per 24 jam.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-6 mb-8 no-scrollbar">
            {["Semua", ...pageData.catalog.map(c => c.category)].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`snap-center shrink-0 px-5 py-2 rounded-[20px] text-[13px] font-bold transition-all border cursor-pointer ${activeCategory === cat
                  ? "bg-[#114b79] text-white border-[#114b79] shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-[#2fa0b5] hover:text-[#2fa0b5]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-6 no-scrollbar">
            {pageData.catalog
              .filter(cat => activeCategory === "Semua" || cat.category === activeCategory)
              .flatMap(cat => cat.items)
              .map((item, itemIdx) => (
                <div key={itemIdx} className="snap-center shrink-0 w-[220px] bg-white rounded-xl overflow-hidden border border-cyan-100 hover:border-[#2fa0b5] transition-colors group cursor-pointer shadow-sm">
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#114b79]/90 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-2 left-2 bg-[#2fa0b5]/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white shadow-sm">
                      Rp {item.price}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold text-[#114b79] leading-tight line-clamp-2">{item.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 px-6">
          <div className="mb-6 flex flex-col gap-1">
            <h2 className="text-2xl font-extrabold text-[#114b79] tracking-tight">FAQ</h2>
            <p className="text-slate-500 font-medium text-xs">Pertanyaan yang sering diajukan seputar layanan kami.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, index) => (
              <div key={index} className="border border-cyan-100 rounded-xl bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-[13px] font-bold text-[#114b79] pr-4">{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp size={18} className="text-[#2fa0b5] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-4 text-xs text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-12 px-6 bg-cyan-50/30 border-t border-cyan-100">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#2fa0b5]" size={20} />
              <h2 className="text-2xl font-extrabold text-[#114b79] tracking-tight">Apa Kata Mereka</h2>
            </div>
            <p className="text-slate-500 font-medium text-xs ml-7">Pengalaman musisi yang menggunakan layanan kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-5 rounded-2xl border border-cyan-100 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#2fa0b5] text-[#2fa0b5]" />
                  ))}
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#114b79] flex items-center justify-center text-white font-bold text-xs">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[12px] font-bold text-[#114b79]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking-form" className="py-12 px-6">
          <div className="bg-white border border-cyan-100 rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2fa0b5]/10 rounded-bl-full pointer-events-none blur-xl"></div>

            <div className="relative z-10 mb-6 text-center">
              <h2 className="text-xl font-extrabold text-[#114b79] mb-2">Formulir Sewa Alat</h2>
              <p className="text-slate-500 font-medium text-xs leading-relaxed">Pesan sekarang untuk mengamankan alat musik pilihan Anda. Kami akan merespon via WhatsApp.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Nama / Instansi</label>
                <input
                  type="text" name="name" required placeholder="Contoh: Budi / Panitia Pensi"
                  className="w-full bg-slate-50 border border-cyan-100 rounded-xl px-4 py-3.5 text-sm text-[#114b79] placeholder-slate-400 focus:outline-none focus:border-[#2fa0b5] focus:ring-1 focus:ring-[#2fa0b5] transition-all"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Tanggal Ambil</label>
                  <input
                    type="date" name="rentDate" required
                    className="w-full bg-slate-50 border border-cyan-100 rounded-xl px-4 py-3.5 text-sm text-[#114b79] focus:outline-none focus:border-[#2fa0b5] focus:ring-1 focus:ring-[#2fa0b5] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Durasi (Hari)</label>
                  <input
                    type="number" name="duration" min="1" required placeholder="1" defaultValue="1"
                    className="w-full bg-slate-50 border border-cyan-100 rounded-xl px-4 py-3.5 text-sm text-[#114b79] placeholder-slate-400 focus:outline-none focus:border-[#2fa0b5] focus:ring-1 focus:ring-[#2fa0b5] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Kategori Alat</label>
                <select
                  name="category" required
                  className="w-full bg-slate-50 border border-cyan-100 rounded-xl px-4 py-3.5 text-sm text-[#114b79] focus:outline-none focus:border-[#2fa0b5] focus:ring-1 focus:ring-[#2fa0b5] transition-all appearance-none"
                >
                  <option value="">Pilih kategori...</option>
                  <option value="Gitar & Bass">Gitar & Bass</option>
                  <option value="Drum & Perkusi">Drum & Perkusi</option>
                  <option value="Keyboard & Synth">Keyboard & Synth</option>
                  <option value="Sound System Package">Paket Sound System</option>
                  <option value="Lainnya (Tulis di Catatan)">Lainnya (Sebutkan di Catatan)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Keterangan / Alat Spesifik</label>
                <textarea
                  name="notes" rows="2"
                  placeholder="Sebutkan alat spesifik atau kebutuhan lain..."
                  className="w-full bg-slate-50 border border-cyan-100 rounded-xl px-4 py-3 text-sm text-[#114b79] placeholder-slate-400 focus:outline-none focus:border-[#2fa0b5] focus:ring-1 focus:ring-[#2fa0b5] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#2fa0b5] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#114b79] transition-colors shadow-md border border-[#2fa0b5]/20 cursor-pointer"
              >
                Kirim via WhatsApp
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6">
          <div className="w-full h-px bg-cyan-100 mb-8"></div>

          <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-cyan-100 flex items-center justify-center mb-4 p-0.5 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#114b79] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a
            href="https://www.solusilokal.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#2fa0b5] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
            }`}
        >
          <button
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-3.5 bg-white/95 backdrop-blur-xl border border-[#2fa0b5]/30 rounded-2xl text-[#114b79] shadow-[0_10px_40px_rgba(17,75,121,0.15)] hover:bg-cyan-50 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span className="font-bold text-sm tracking-wide">Sewa Alat Sekarang</span>
            <div className="bg-[#2fa0b5] text-white p-2 rounded-xl">
              <Music size={16} />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#114b79]/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 border border-cyan-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#114b79] font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-400 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-6 justify-center">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[56px] h-[56px] rounded-full bg-cyan-50 flex items-center justify-center text-[#114b79] hover:bg-cyan-100 transition-all border border-cyan-100 cursor-pointer"
                >
                  {copied ? <Check size={24} className="text-emerald-500" /> : <Copy size={24} />}
                </button>
                <span className="text-[10px] font-semibold text-slate-500 text-center">
                  {copied ? 'Tersalin' : 'Salin'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-[56px] h-[56px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle size={24} className="fill-current" />
                </button>
                <span className="text-[10px] font-semibold text-slate-500 text-center">WhatsApp</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
