import React from 'react';
import { ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { X, CheckCircle2, MessageCircle, FileText, Tag, ShieldCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  currentLang: 'hi' | 'en';
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  currentLang
}) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `नमस्ते Goswami CSC Centre, मुझे "${service.titleHi}" (${service.titleEn}) के लिए आवश्यक दस्तावेज, शुल्क एवं प्रक्रिया जाननी है।`
    );
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/40 text-blue-300 flex items-center justify-center">
              <ServiceIcon name={service.icon} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                सेवा विवरण (Service Details)
              </span>
              <h3 className="text-xl font-extrabold text-white leading-tight">
                {service.titleHi}
              </h3>
              <div className="text-xs text-slate-300 font-medium">
                {service.titleEn}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-800 text-white text-xs font-bold font-mono">
              <Tag className="w-3.5 h-3.5 text-amber-400" />
              <span>लागू शुल्क: {service.price}</span>
            </span>
            <span className="text-[11px] text-slate-300">
              (पारदर्शी एवं रसीद युक्त)
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              विवरण / Information
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              {currentLang === 'hi' ? service.descriptionHi : service.descriptionEn}
            </p>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-700" />
                <span>आवश्यक दस्तावेज (Required Documents)</span>
              </h4>
              <span className="text-[11px] text-slate-500">साथ लाएं</span>
            </div>

            <div className="space-y-2">
              {service.requiredDocsHi.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Centre Trust Notice */}
          <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong>गोस्वामी सीएससी केंद्र का भरोसा: </strong>
              आपके दस्तावेजों की जांच के बाद ही फॉर्म जमा किया जाता है। आवेदन के तुरंत बाद आपको आधिकारिक रसीद प्रदान की जाएगी।
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-1/3 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
          >
            बंद करें
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-2/3 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp पर पूछें</span>
          </button>
        </div>
      </div>
    </div>
  );
};
