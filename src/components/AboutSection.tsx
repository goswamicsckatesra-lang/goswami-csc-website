import React from 'react';
import { BUSINESS_INFO } from '../data/cscData';
import { ShieldCheck, MapPin, Phone, Clock, Award, Building, CheckCircle2, AlertCircle, Image as ImageIcon } from 'lucide-react';

interface AboutSectionProps {
  currentLang: 'hi' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const scrollToBanner = () => {
    const el = document.getElementById('banner');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Information and Prompt Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Building className="w-3.5 h-3.5 text-blue-700" />
              <span>{currentLang === 'hi' ? 'हमारा परिचय' : 'About Goswami CSC Centre'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {BUSINESS_INFO.name}
              <span className="block text-xl sm:text-2xl font-bold text-blue-700 mt-1">
                {BUSINESS_INFO.tagline}
              </span>
            </h2>

            {/* Prompt mandatory introduction quote */}
            <div className="rounded-2xl bg-white border-l-4 border-blue-700 p-5 sm:p-6 shadow-xs border-y border-r border-slate-200">
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                “{BUSINESS_INFO.aboutText}”
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {BUSINESS_INFO.aboutTextEn}
            </p>

            {/* Credential Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase">संचालक (VLE)</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">
                  {BUSINESS_INFO.ownerName}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase">अधिकृत CSC ID</div>
                <div className="text-sm sm:text-base font-extrabold text-blue-900 font-mono">
                  {BUSINESS_INFO.cscId}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase">संपर्क नंबर</div>
                <div className="text-sm sm:text-base font-extrabold text-emerald-800 font-mono">
                  {BUSINESS_INFO.mobile}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] font-bold text-slate-400 uppercase">जिला व राज्य</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-800">
                  रोहतक, हरियाणा
                </div>
              </div>
            </div>

            {/* Banner Quick Link Button */}
            <div>
              <button
                type="button"
                onClick={scrollToBanner}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200 transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-blue-700" />
                <span>केंद्र का आधिकारिक बैनर देखें</span>
              </button>
            </div>

            {/* Security & Non-Government Ownership Notice */}
            <div className="rounded-xl bg-slate-100 p-4 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">पारदर्शिता सूचना: </strong>
                Goswami CSC Centre एक स्थानीय ग्राम स्तरीय डिजिटल सेवा केंद्र (VLE) है। यह कोई आधिकारिक सरकारी विभाग या सरकारी स्वामित्व वाली संस्था नहीं है। हम नागरिकों को विभिन्न सार्वजनिक एवं सरकारी पोर्टलों (जैसे सरल हरियाणा, CSC ई-गवर्नेंस, आदि) पर डिजिटल सेवाएं प्राप्त करने में तकनीकी व आवेदन सहायता प्रदान करते हैं।
              </div>
            </div>
          </div>

          {/* Right Column: Visual Centre Credential Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Header Badge */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-800 text-white flex flex-col items-center justify-center font-black shadow-sm">
                  <span className="text-[10px] text-amber-300">CSC</span>
                  <span className="text-xs">केन्द्र</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Goswami CSC Centre</h3>
                  <p className="text-xs font-semibold text-blue-700">
                    संचालक: {BUSINESS_INFO.ownerName} ({BUSINESS_INFO.ownerRole})
                  </p>
                </div>
              </div>

              {/* Location & Timings List */}
              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">पता (Location):</span>
                    <span>{BUSINESS_INFO.addressDetailed}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">कार्य समय (Working Hours):</span>
                    <span>{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">कॉल एवं WhatsApp:</span>
                    <a href={`tel:${BUSINESS_INFO.mobile}`} className="font-mono font-bold text-blue-700 hover:underline">
                      {BUSINESS_INFO.mobile}
                    </a>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-[11px] font-semibold text-slate-700">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span>प्रमाणित वीएलई संचालक</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span>पारदर्शी शुल्क नीति</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
