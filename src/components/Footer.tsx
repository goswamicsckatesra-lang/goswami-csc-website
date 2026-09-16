import React from 'react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/cscData';
import {
  ShieldCheck,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUp,
  Heart
} from 'lucide-react';

interface FooterProps {
  currentLang: 'hi' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('नमस्ते Goswami CSC Centre, मुझे जानकारी चाहिए।');
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const quickLinks = [
    { href: '#home', label: 'होम (Home)' },
    { href: '#services', label: 'सभी सेवाएं (Services)' },
    { href: '#rate-list', label: 'सेवा दर सूची (Rate List)' },
    { href: '#why-us', label: 'हमें क्यों चुनें (Why Choose Us)' },
    { href: '#how-it-works', label: 'प्रक्रिया (How It Works)' },
    { href: '#documents-required', label: 'आवश्यक दस्तावेज (Documents)' },
    { href: '#about', label: 'परिचय (About Us)' },
    { href: '#contact', label: 'संपर्क करें (Contact)' },
  ];

  const popularServices = [
    'PAN Card Application',
    'Family ID / PPP Work',
    'Income Certificate',
    'OBC/BC Certificate',
    'Residence/Domicile Certificate',
    'Ayushman Card',
    'PM Kisan Registration/Work',
    'Online Job Application',
    'Ration Card Related Work',
    'Passport Application Assistance'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Upper Footer: Brand & Motto Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 py-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              कॉमन सर्विस सेंटर (CSC VLE)
            </span>
            <div className="text-xl sm:text-2xl font-black text-white">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-sm font-semibold text-emerald-400 mt-0.5">
              “{BUSINESS_INFO.tagline}”
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* National Tagline requested in prompt */}
            <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-amber-300 font-bold text-sm tracking-wide shadow-inner">
              “डिजिटल भारत | सशक्त भारत”
            </div>

            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp चैट</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: About & Centre ID */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-700 text-white font-black flex items-center justify-center text-xs">
                CSC
              </div>
              <span className="font-extrabold text-white text-base">
                Goswami CSC Centre
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              ग्राम कटेसरा (रोहतक, हरियाणा) में स्थित अधिकृत डिजिटल सेवा केंद्र। हम नागरिकों को पारदर्शी दरों पर सभी ऑनलाइन व सरकारी सेवाएं उपलब्ध कराते हैं।
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">CSC ID:</span>
                <span className="font-mono font-bold text-white">{BUSINESS_INFO.cscId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">हेल्पलाइन:</span>
                <span className="font-mono font-bold text-emerald-400">{BUSINESS_INFO.mobile}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              महत्वपूर्ण लिंक्स (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Important Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              प्रमुख सेवाएं (Important Services)
            </h4>
            <ul className="space-y-2 text-xs">
              {popularServices.map((svc, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    • {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              संपर्क विवरण (Contact Details)
            </h4>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.mobile}`} className="hover:text-white font-mono font-bold">
                {BUSINESS_INFO.formattedMobile}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>CSC ID: <strong className="font-mono text-white">{BUSINESS_INFO.cscId}</strong></span>
            </div>

            <div className="flex items-start gap-2.5 text-xs pt-1">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline"
              >
                गूगल मैप्स पर केंद्र खोजें →
              </a>
            </div>
          </div>
        </div>

        {/* Security & Disclaimer Notice */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>अस्वीकरण (Disclaimer): </strong>
            Goswami CSC Centre एक स्थानीय ग्राम स्तरीय डिजिटल सेवा केंद्र (CSC Village Level Entrepreneur) है। यह कोई सरकारी विभाग नहीं है। केंद्र द्वारा प्रदान की जाने वाली सहायता के लिए राज्य एवं केंद्र सरकार द्वारा निर्धारित पारदर्शी सेवा शुल्क लिया जाता है। किसी भी प्रकार के ओटीपी, बैंक पासवर्ड या गोपनीय क्रेडेंशियल कभी भी साझा न करें।
          </p>
        </div>

        {/* Bottom Bar: Copyright and Scroll to top */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. (CSC ID: {BUSINESS_INFO.cscId})
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              VPO Katesra, District Rohtak, Haryana – 124113
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="ऊपर जाएं"
              aria-label="ऊपर जाएं"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
