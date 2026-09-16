import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/cscData';
import { ContactFormData } from '../types';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Send,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: 'hi' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    mobile: '',
    service: 'PAN Card Application',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.mobile.trim()) {
      alert('कृपया अपना नाम और मोबाइल नंबर दर्ज करें।');
      return;
    }

    // Format WhatsApp message
    const waText = encodeURIComponent(
      `*नमस्ते Goswami CSC Centre, नई सेवा पूछताछ:*\n` +
      `👤 *नाम:* ${formData.name.trim()}\n` +
      `📱 *मोबाइल:* ${formData.mobile.trim()}\n` +
      `📋 *चयनित सेवा:* ${formData.service}\n` +
      `💬 *संदेश:* ${formData.message.trim() || 'कृपया इस सेवा के लिए आवश्यक दस्तावेज व शुल्क बताएं।'}`
    );

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(`https://wa.me/918814099240?text=${waText}`, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    window.location.href = `tel:${BUSINESS_INFO.mobile}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'नमस्ते Goswami CSC Centre, मुझे आपकी डिजिटल सेवाओं के संबंध में संपर्क करना है।'
    );
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleGetDirections = () => {
    window.open(BUSINESS_INFO.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <Phone className="w-3.5 h-3.5 text-blue-700" />
            <span>{currentLang === 'hi' ? 'सीधा संपर्क' : 'Contact Us'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'hi' ? 'हमसे संपर्क करें' : 'Get In Touch'}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            किसी भी सेवा, फॉर्म या योजना की जानकारी के लिए तुरंत कॉल या WhatsApp करें।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Prominent Contact Information and 3 Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Centre Identity Prominently Displayed */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                    स्थानीय अधिकृत सेवा केंद्र
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-blue-300 font-medium">
                    {BUSINESS_INFO.tagline}
                  </p>
                </div>

                {/* CSC ID Display */}
                <div className="flex items-center gap-2.5 bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      CSC ID
                    </div>
                    <div className="text-base font-bold text-white font-mono">
                      {BUSINESS_INFO.cscId}
                    </div>
                  </div>
                </div>

                {/* Address Display */}
                <div className="flex items-start gap-2.5 bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      केंद्र का पूरा पता
                    </div>
                    <div className="text-sm font-semibold text-slate-200 leading-snug">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Mobile Display */}
                <div className="flex items-center gap-2.5 bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      मोबाइल नंबर
                    </div>
                    <div className="text-lg font-bold text-white font-mono tracking-wide">
                      {BUSINESS_INFO.mobile}
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>

              {/* The Three Prominent Buttons Requested in Prompt */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                {/* 1. Call Now Button */}
                <button
                  type="button"
                  onClick={handleCall}
                  id="contact-call-now-btn"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now (कॉल करें - 8814099240)</span>
                </button>

                {/* 2. WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  id="contact-whatsapp-btn"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp करें (तुरंत चैट शुरू करें)</span>
                </button>

                {/* 3. Get Directions Button */}
                <button
                  type="button"
                  onClick={handleGetDirections}
                  id="contact-directions-btn"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all active:scale-98"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Get Directions (गूगल मैप्स पर रास्ता देखें)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  ऑनलाइन संदेश या सेवा पूछताछ भेजें
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  नीचे अपना विवरण भरें। फॉर्म जमा करते ही आपका संदेश सीधे WhatsApp पर खुल जाएगा।
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">संदेश तैयार है!</span>
                    <span>आपका संदेश WhatsApp पर प्रेषित किया जा रहा है। आप हमें सीधे कॉल भी कर सकते हैं।</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="csc-contact-form">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    आपका नाम (Full Name) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="जैसे: राहुल शर्मा / मोहित"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="contact-mobile" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    मोबाइल नंबर (Mobile Number) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-mobile"
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10 अंकों का मोबाइल नंबर (जैसे 9812345678)"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono"
                  />
                </div>

                {/* Select Service */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    सेवा चुनें (Select Service) <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    {SERVICES_LIST.map((svc) => (
                      <option key={svc.id} value={svc.titleHi}>
                        {svc.titleHi} ({svc.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    संदेश / कोई सवाल (Message)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="आवश्यक दस्तावेज, प्रक्रिया या समय के बारे में कोई सवाल हो तो यहां लिखें..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Security & Privacy Notice directly below form (Mandated in Prompt) */}
                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-blue-950">गोपनीयता सूचना (Privacy Notice):</span>
                    <span>
                      {BUSINESS_INFO.privacyNotice} हम वेबसाइट पर कोई भी संवेदनशील विवरण नहीं मांगते।
                    </span>
                  </div>
                </div>

                {/* Submit / WhatsApp Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Submit / WhatsApp पर संदेश भेजें</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
