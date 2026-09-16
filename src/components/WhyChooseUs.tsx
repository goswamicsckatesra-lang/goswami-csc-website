import React from 'react';
import { WHY_CHOOSE_US } from '../data/cscData';
import { ServiceIcon } from './ServiceIcon';
import { Award, CheckCircle } from 'lucide-react';

interface WhyChooseUsProps {
  currentLang: 'hi' | 'en';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  return (
    <section id="why-us" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>{currentLang === 'hi' ? 'हमारी विशेषताएं' : 'Our Commitments'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'hi' ? 'हमें क्यों चुनें?' : 'Why Choose Goswami CSC Centre?'}
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            {currentLang === 'hi'
              ? 'ग्रामीण व स्थानीय नागरिकों को सुरक्षित, भरोसेमंद और पारदर्शी डिजिटल सेवाएं देने के लिए हम प्रतिबद्ध हैं।'
              : 'Dedicated to providing secure, verified, and prompt digital governance assistance to every citizen.'}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const borderColors = [
              'hover:border-blue-400 group-hover:bg-blue-50/40',
              'hover:border-emerald-400 group-hover:bg-emerald-50/40',
              'hover:border-amber-400 group-hover:bg-amber-50/40',
              'hover:border-indigo-400 group-hover:bg-indigo-50/40',
            ];
            const iconBgs = [
              'bg-blue-100 text-blue-700',
              'bg-emerald-100 text-emerald-700',
              'bg-amber-100 text-amber-700',
              'bg-indigo-100 text-indigo-700',
            ];

            return (
              <div
                key={item.id}
                id={`feature-${item.id}`}
                className={`relative rounded-2xl bg-slate-50 border border-slate-200 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group ${borderColors[index % 4]}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${iconBgs[index % 4]}`}
                  >
                    <ServiceIcon name={item.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.titleHi}
                </h3>
                <div className="text-xs font-semibold text-blue-700 mb-2">
                  {item.titleEn}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentLang === 'hi' ? item.descHi : item.descEn}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% प्रामाणिक व विश्वसनीय</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
