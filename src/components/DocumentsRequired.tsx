import React from 'react';
import { BUSINESS_INFO, GENERAL_DOCUMENTS_INFO } from '../data/cscData';
import { FileText, AlertTriangle, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';

interface DocumentsRequiredProps {
  currentLang: 'hi' | 'en';
}

export const DocumentsRequired: React.FC<DocumentsRequiredProps> = ({ currentLang }) => {
  const askDocsWhatsApp = () => {
    const text = encodeURIComponent(
      'नमस्ते Goswami CSC Centre, मुझे अपनी सेवा के लिए आवश्यक दस्तावेजों की सूची जाननी है।'
    );
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="documents-required" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <FileText className="w-3.5 h-3.5 text-blue-700" />
            <span>{currentLang === 'hi' ? 'दस्तावेज मार्गदर्शन' : 'Documents Checklist'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'hi' ? 'आवेदन हेतु आवश्यक दस्तावेज' : 'Documents Required for Services'}
          </h2>
        </div>

        {/* Primary Prompt Mandatory Notice */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-linear-to-r from-blue-900 to-indigo-950 text-white p-6 sm:p-8 shadow-md mb-10 border border-blue-800">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 shadow-sm font-bold">
              <AlertTriangle className="w-6 h-6 text-slate-950" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                सामान्य जानकारी / General Notice
              </span>
              <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                “{BUSINESS_INFO.documentsDisclaimer}”
              </p>
              <p className="text-xs sm:text-sm text-slate-300 pt-1">
                दस्तावेजों में गलती या कमी होने पर आवेदन अस्वीकार हो सकता है, इसलिए आने से पहले सही लिस्ट जान लें।
              </p>
            </div>
          </div>
        </div>

        {/* General Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GENERAL_DOCUMENTS_INFO.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {category.titleHi}
              </h3>
              <div className="text-xs font-medium text-slate-500 mb-4">
                {category.titleEn}
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security / Privacy Warning */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-rose-950 block mb-0.5">सावधानी एवं सुरक्षा निर्देश:</span>
            <span>
              हम किसी भी ग्राहक से वेबसाइट या फोन पर आधार ओटीपी, बैंक पासवर्ड, एटीएम पिन या गोपनीय क्रेडेंशियल नहीं मांगते। किसी भी प्रकार के ऑनलाइन फ्रॉड से बचें।
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={askDocsWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>दस्तावेजों की लिस्ट WhatsApp पर मंगवाएं</span>
          </button>
        </div>
      </div>
    </section>
  );
};
