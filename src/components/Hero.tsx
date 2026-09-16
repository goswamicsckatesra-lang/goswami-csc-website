import React from 'react';
import { BUSINESS_INFO } from '../data/cscData';
import { useServices } from '../context/ServiceContext';
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Search,
  FileCheck,
  CreditCard,
  Building2,
  Sparkles,
  PlusCircle,
  Award,
  Maximize2
} from 'lucide-react';

interface HeroProps {
  currentLang: 'hi' | 'en';
  onSearchChange: (q: string) => void;
  searchQuery: string;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onSearchChange, searchQuery }) => {
  const { openAddModal } = useServices();

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBanner = () => {
    const el = document.getElementById('banner');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('नमस्ते Goswami CSC Centre, मुझे ऑनलाइन व सरकारी सेवाओं के बारे में जानकारी चाहिए।');
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Graphic Grid & Subtle Portal Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Info, Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* National / State Portal Assurance Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-500/40 text-blue-200 text-xs font-semibold shadow-inner mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-300 font-bold">CSC ई-गवर्नेंस सेवा केंद्र</span>
              <span className="text-slate-400">|</span>
              <span>अधिकृत आईडी: <strong className="text-white font-mono">{BUSINESS_INFO.cscId}</strong></span>
            </div>

            {/* Main Titles */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {BUSINESS_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-amber-400 tracking-normal">
                {BUSINESS_INFO.tagline}
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 pt-2 font-normal leading-relaxed">
                “सभी प्रकार की ऑनलाइन, सरकारी एवं डिजिटल सेवाएं एक ही स्थान पर।”
              </p>
            </div>

            {/* Prominent Business Details Badges (CSC ID & Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 pt-1">
              {/* CSC ID Card */}
              <div className="flex items-center gap-3.5 bg-slate-800/80 backdrop-blur-xs border border-slate-700/80 rounded-xl p-3 text-left shadow-sm hover:border-blue-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    आधिकारिक CSC ID
                  </div>
                  <div className="text-base font-bold text-white font-mono tracking-wide">
                    {BUSINESS_INFO.cscId}
                  </div>
                </div>
              </div>

              {/* Mobile Card */}
              <a
                href={`tel:${BUSINESS_INFO.mobile}`}
                className="flex items-center gap-3.5 bg-slate-800/80 backdrop-blur-xs border border-slate-700/80 rounded-xl p-3 text-left shadow-sm hover:border-emerald-500/50 transition-colors group"
                id="hero-call-card"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <span>सीधे कॉल करें</span>
                    <span className="text-[10px] text-emerald-400 font-bold">• चालू</span>
                  </div>
                  <div className="text-base font-bold text-white font-mono tracking-wide group-hover:text-emerald-300 transition-colors">
                    {BUSINESS_INFO.mobile}
                  </div>
                </div>
              </a>
            </div>

            {/* Address Pill */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 justify-center lg:justify-start">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 justify-center lg:justify-start">
              <button
                type="button"
                onClick={scrollToServices}
                id="hero-services-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/40 transition-all hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                <span>सेवाएं देखें</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                id="hero-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/40 transition-all hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp करें</span>
              </button>

              <button
                type="button"
                onClick={openAddModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 hover:border-amber-400/50 font-bold text-xs sm:text-sm transition-all"
                title="नयी सेवा या रेट तुरंत जोड़ें"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ सेवा / रेट जोड़ें</span>
              </button>
            </div>

            {/* Hero Quick Search Bar */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (e.target.value.trim().length > 0) {
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  placeholder="सेवा खोजें: जैसे पैन कार्ड, फैमिली आईडी, आय प्रमाण पत्र, रिजल्ट..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-800/95 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-hidden focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 transition-all shadow-inner"
                  id="hero-service-search"
                />
              </div>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>27+ प्रमाणित सेवाएं</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>निश्चित व पारदर्शी रेट</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>सरकारी पावती रसीद</span>
              </span>
            </div>
          </div>

          {/* Right Column: Official Banner Card Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Banner Showcase Card with interactive zoom */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 sm:p-5 border border-slate-700/80 shadow-2xl backdrop-blur-sm group">
                {/* Centre Identity Banner Header */}
                <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-md flex items-center justify-center text-slate-900 font-extrabold text-sm">
                      CSC
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-tight">Goswami CSC Centre</div>
                      <div className="text-[11px] text-emerald-400 font-medium">रोहतक (हरियाणा) • संचालक: ऋषि गोस्वामी</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 rounded-full px-2 py-0.5 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>सक्रिय</span>
                  </span>
                </div>

                {/* Banner Thumbnail with Click to View */}
                <div
                  onClick={scrollToBanner}
                  className="relative rounded-xl overflow-hidden border border-slate-700 cursor-pointer shadow-md group-hover:border-blue-500/60 transition-all"
                  title="आधिकारिक केंद्र बैनर देखें"
                >
                  <img
                    src="/banner.jpg"
                    alt="Goswami CSC Centre Banner"
                    className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/85 text-white text-xs font-bold backdrop-blur-sm border border-slate-700 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>आधिकारिक बैनर पूरा देखें</span>
                    </span>
                  </div>
                </div>

                {/* Banner Key Info Highlights */}
                <div className="mt-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-semibold uppercase">आदर्श वाक्य:</span>
                    <span className="text-amber-300 font-bold">एक ही छत के नीचे सभी सेवाएं</span>
                  </div>
                  <div className="text-[11px] text-slate-300 border-t border-slate-700/50 pt-1.5 flex items-center justify-between">
                    <span className="text-slate-400">स्थान:</span>
                    <span className="text-slate-200 font-medium">कटेसरा (स्कूल वाली गली, रोहतक)</span>
                  </div>
                </div>

                {/* Quick Banner Button */}
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    CSC ID: <strong className="text-white font-mono">{BUSINESS_INFO.cscId}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={scrollToBanner}
                    className="text-xs text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>विस्तृत बैनर देखें</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
