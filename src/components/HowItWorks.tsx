import React from 'react';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO } from '../data/cscData';
import { Layers, ArrowRight, MessageCircle, CheckCircle, FileText } from 'lucide-react';

interface HowItWorksProps {
  currentLang: 'hi' | 'en';
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            <span>{currentLang === 'hi' ? 'आसान 3 कदम' : 'Simple 3 Steps'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'hi' ? 'सेवा प्राप्त करने की सरल प्रक्रिया' : 'How It Works'}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {currentLang === 'hi'
              ? 'बिना किसी परेशानी के, न्यूनतम समय में अपना सरकारी या ऑनलाइन काम करवाएं।'
              : 'Effortless process to get your government and online applications done quickly.'}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`step-${step.step}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-700 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                    0{step.step}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    चरण {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {step.titleHi}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-2.5">
                  {step.titleEn}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {currentLang === 'hi' ? step.descHi : step.descEn}
                </p>
              </div>

              {/* Tip Box */}
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{step.tipHi}</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Prompt */}
        <div className="mt-10 bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900">
                क्या आप पहले से आवश्यक दस्तावेजों के बारे में पूछना चाहते हैं?
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                आने से पहले WhatsApp पर संदेश भेजें ताकि आपको केंद्र पर दो बार न आना पड़े।
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>दस्तावेज लिस्ट पूछें</span>
          </a>
        </div>
      </div>
    </section>
  );
};
