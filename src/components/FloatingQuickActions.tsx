import React from 'react';
import { BUSINESS_INFO } from '../data/cscData';
import { Phone, MessageCircle, FileSpreadsheet, Navigation } from 'lucide-react';

interface FloatingQuickActionsProps {
  currentLang: 'hi' | 'en';
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({ currentLang }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent('नमस्ते Goswami CSC Centre, मुझे सेवा के बारे में जानकारी चाहिए।');
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToRates = () => {
    const el = document.getElementById('rate-list');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openDirections = () => {
    window.open(BUSINESS_INFO.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="त्वरित संपर्क एवं सहायता" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Call */}
        <a
          href={`tel:${BUSINESS_INFO.mobile}`}
          className="flex flex-col items-center justify-center p-1 rounded-xl text-slate-700 hover:text-blue-700 active:bg-slate-100"
          id="mobile-sticky-call"
        >
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold leading-none">कॉल करें</span>
        </a>

        {/* WhatsApp */}
        <button
          type="button"
          onClick={openWhatsApp}
          className="flex flex-col items-center justify-center p-1 rounded-xl text-emerald-700 active:bg-emerald-50"
          id="mobile-sticky-whatsapp"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1 shadow-xs">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <span className="text-[10px] font-bold leading-none">WhatsApp</span>
        </button>

        {/* Rates */}
        <button
          type="button"
          onClick={scrollToRates}
          className="flex flex-col items-center justify-center p-1 rounded-xl text-slate-700 hover:text-blue-700 active:bg-slate-100"
          id="mobile-sticky-rates"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-1">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold leading-none">रेट लिस्ट</span>
        </button>

        {/* Directions */}
        <button
          type="button"
          onClick={openDirections}
          className="flex flex-col items-center justify-center p-1 rounded-xl text-slate-700 hover:text-blue-700 active:bg-slate-100"
          id="mobile-sticky-directions"
        >
          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-1">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold leading-none">रास्ता</span>
        </button>
      </div>
    </aside>
  );
};
