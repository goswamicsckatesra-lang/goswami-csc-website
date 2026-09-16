import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/cscData';
import {
  Sparkles,
  Maximize2,
  X,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Award,
  CheckCircle2,
  Download,
  Share2,
  ExternalLink
} from 'lucide-react';

interface BannerSectionProps {
  currentLang: 'hi' | 'en';
}

export const BannerSection: React.FC<BannerSectionProps> = ({ currentLang }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      'नमस्ते Goswami CSC Centre, मैंने आपका आधिकारिक बैनर देखा और मुझे सेवाओं की जानकारी चाहिए।'
    );
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const bannerImageSrc = '/banner.jpg';

  return (
    <section id="banner" className="py-10 sm:py-16 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>{currentLang === 'hi' ? 'आधिकारिक केंद्र पहचान' : 'Official Centre Verification'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'hi' ? 'Goswami CSC Centre – अधिकृत सेवा बैनर' : 'Goswami CSC Centre – Official Banner'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            ग्राम कटेसरा, तहसील कलानौर (रोहतक, हरियाणा) • संचालक: <strong>{BUSINESS_INFO.ownerName}</strong> (CSC VLE Owner)
          </p>
        </div>

        {/* Banner Card Container with Tricolor Strip */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          {/* Top Indian Tricolor Strip */}
          <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-white to-emerald-600"></div>

          {/* Banner Image Preview with Controls */}
          <div className="relative group bg-slate-950 flex items-center justify-center p-2 sm:p-4">
            <div className="relative overflow-hidden rounded-2xl max-w-5xl w-full border border-slate-800 shadow-inner">
              <img
                src={bannerImageSrc}
                alt="Goswami CSC Centre Official Banner - VPO Katesra, Rohtak, Haryana"
                className="w-full h-auto object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />

              {/* Overlay hover badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 sm:p-6 text-white">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {BUSINESS_INFO.name}
                  </div>
                  <div className="text-sm font-semibold">
                    {BUSINESS_INFO.tagline} • CSC ID: {BUSINESS_INFO.cscId}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg transition-all"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>बड़ा करके देखें</span>
                </button>
              </div>
            </div>

            {/* Always visible mobile & desktop Zoom Button */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="absolute right-4 sm:right-8 top-4 sm:top-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-md border border-slate-700 shadow-md transition-all active:scale-95"
              title="बैनर बड़ा करके देखें"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Full View</span>
            </button>
          </div>

          {/* Banner Key Information Grid pulled directly from the banner */}
          <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
            {/* Slogan Banner */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                  राष्ट्रीय डिजिटल सेवा मिशन
                </span>
                <span className="text-sm sm:text-base font-extrabold tracking-wide">
                  {BUSINESS_INFO.slogan}
                </span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs">
                {BUSINESS_INFO.motto}
              </div>
            </div>

            {/* 4 Trust Highlights from User's Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 font-bold flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">सुरक्षित सेवाएं</h4>
                <p className="text-xs text-slate-600 mt-1">
                  सरकारी मान्यता प्राप्त और भरोसेमंद प्लेटफॉर्म।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">समय की बचत</h4>
                <p className="text-xs text-slate-600 mt-1">
                  अब लाइन में नहीं, सीधे आपके नजदीकी CSC केंद्र पर।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-bold flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">सभी के लिए सेवाएं</h4>
                <p className="text-xs text-slate-600 mt-1">
                  छात्र, किसान, महिला, वरिष्ठ नागरिक, सभी के लिए।
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase">एक ही जगह</h4>
                <p className="text-xs text-slate-600 mt-1">
                  सरकारी योजनाएं, डिजिटल सेवाएं और बहुत कुछ।
                </p>
              </div>
            </div>

            {/* Bottom Actions and Owner Signature Card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-black flex items-center justify-center text-sm shadow-sm">
                  RG
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {BUSINESS_INFO.ownerName} <span className="text-[11px] font-semibold text-blue-700">({BUSINESS_INFO.ownerRole})</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {BUSINESS_INFO.addressDetailed}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 text-xs font-bold transition-all"
                >
                  <Maximize2 className="w-4 h-4 text-blue-600" />
                  <span>बैनर ज़ूम करें</span>
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp पर पूछें</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Bar */}
            <div className="p-4 bg-slate-950 flex items-center justify-between text-white border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold">
                  {BUSINESS_INFO.name} – आधिकारिक केंद्र बैनर
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={bannerImageSrc}
                  download="Goswami_CSC_Centre_Banner.jpg"
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs"
                  title="डाउनलोड करें"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">डाउनलोड</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="बंद करें"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Banner Full Image */}
            <div className="p-2 sm:p-4 max-h-[80vh] overflow-auto flex items-center justify-center bg-slate-950">
              <img
                src={bannerImageSrc}
                alt="Goswami CSC Centre Official Banner Full View"
                className="max-w-full h-auto rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-3 bg-slate-950 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-800">
              <span>हेल्पलाइन: <strong className="text-white font-mono">{BUSINESS_INFO.mobile}</strong> | CSC ID: <strong className="text-white font-mono">{BUSINESS_INFO.cscId}</strong></span>
              <span className="text-amber-400 font-semibold">{BUSINESS_INFO.addressDetailed}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
