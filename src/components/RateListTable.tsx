import React, { useState } from 'react';
import { BUSINESS_INFO, CATEGORIES } from '../data/cscData';
import { ServiceCategory, RateItem } from '../types';
import { useServices } from '../context/ServiceContext';
import {
  Search,
  X,
  Printer,
  FileSpreadsheet,
  MessageCircle,
  Info,
  CheckCircle2,
  PlusCircle,
  RotateCcw,
  Edit2,
  Lock,
  UserCheck,
  Sparkles
} from 'lucide-react';

interface RateListTableProps {
  currentLang: 'hi' | 'en';
}

export const RateListTable: React.FC<RateListTableProps> = ({ currentLang }) => {
  const {
    rateItems,
    openAddModal,
    resetToDefaults,
    isCustomService,
    isAdminLoggedIn,
    openLoginModal,
    openEditRateModal
  } = useServices();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredRates = rateItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      item.serviceHi.toLowerCase().includes(query) ||
      item.serviceEn.toLowerCase().includes(query) ||
      item.rate.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppRateInquiry = (item: RateItem) => {
    const text = encodeURIComponent(
      `नमस्ते Goswami CSC Centre, मुझे "${item.serviceHi}" (रेट: ${item.rate}) के संबंध में जानकारी व दस्तावेज पूछने हैं।`
    );
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handlePrintTable = () => {
    window.print();
  };

  const getCategoryLabel = (cat: ServiceCategory) => {
    const found = CATEGORIES.find((c) => c.id === cat);
    return found ? (currentLang === 'hi' ? found.nameHi : found.nameEn) : cat;
  };

  return (
    <section id="rate-list" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
            <span>{currentLang === 'hi' ? 'पारदर्शी दरें' : 'Official Pricing'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Goswami CSC Centre – Services Rate List
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            गोस्वामी सीएससी केंद्र - आधिकारिक सेवा एवं सहायता शुल्क सूची (100% पारदर्शी दरें)
          </p>
        </div>

        {/* Admin Notification Banner when logged in */}
        {isAdminLoggedIn && (
          <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-blue-50 border border-amber-300 text-amber-950 text-xs flex flex-wrap items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>एडमिन संपादन मोड सक्रिय:</strong> आप किसी भी सेवा के सामने बने <strong>'संशोधित करें'</strong> बटन पर क्लिक करके सीधे नया रेट और विवरण दर्ज कर सकते हैं।
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openAddModal}
                className="px-3 py-1.5 rounded-lg bg-blue-700 text-white font-bold text-xs hover:bg-blue-800 flex items-center gap-1"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>+ नई सेवा / रेट जोड़ें</span>
              </button>
            </div>
          </div>
        )}

        {/* Filter & Action Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6 space-y-4 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="रेट लिस्ट में खोजें: जैसे PAN, Birth, Family ID, प्रिंट, लेबर..."
                className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                id="rate-list-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Print, Admin Edit & Status Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {isAdminLoggedIn ? (
                <>
                  <button
                    type="button"
                    onClick={openAddModal}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs transition-all active:scale-95"
                    title="नई सेवा और रेट जोड़ें"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-amber-300" />
                    <span>+ नया रेट जोड़ें</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetToDefaults}
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-300 shadow-xs transition-colors"
                    title="मूल रेट लिस्ट पुनर्स्थापित करें (Reset to Defaults)"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition-colors"
                  title="रेट संशोधित करने के लिए एडमिन लॉगिन करें"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-600" />
                  <span>रेट बदलें (Admin Login)</span>
                </button>
              )}

              <button
                type="button"
                onClick={handlePrintTable}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 shadow-xs transition-colors"
                title="रेट लिस्ट प्रिंट करें"
              >
                <Printer className="w-3.5 h-3.5 text-blue-700" />
                <span>प्रिंट करें</span>
              </button>

              <div className="text-xs text-slate-500 hidden sm:block bg-white px-3 py-2.5 rounded-xl border border-slate-200">
                कुल <strong>{filteredRates.length}</strong> दरें
              </div>
            </div>
          </div>

          {/* Categories Pill Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === c.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {currentLang === 'hi' ? c.nameHi : c.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Table Container */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse" id="csc-rate-table">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-bold">
                  <th scope="col" className="py-3.5 px-4 w-12 text-center">
                    क्र.सं.
                  </th>
                  <th scope="col" className="py-3.5 px-4">
                    सेवा का नाम (Service Description)
                  </th>
                  <th scope="col" className="py-3.5 px-4 hidden sm:table-cell">
                    श्रेणी (Category)
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-right">
                    निर्धारित दर (Rate)
                  </th>
                  <th scope="col" className="py-3.5 px-4 text-center w-40">
                    {isAdminLoggedIn ? 'एडमिन संपादन' : 'सहायता / संपर्क'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredRates.map((item, index) => {
                  const isCustom = item.id.startsWith('rate-custom-') || isCustomService(item.id);
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-blue-50/50 transition-colors group"
                    >
                      <td className="py-3 px-4 text-center font-mono text-xs text-slate-400 group-hover:text-slate-700">
                        {index + 1}
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-sm">
                            {item.serviceHi}
                          </span>
                          {isCustom && (
                            <span className="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-1.5 py-0.2 rounded">
                              कस्टम
                            </span>
                          )}
                          {item.isPopular && !isCustom && (
                            <span className="hidden md:inline-block text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded">
                              प्रमुख
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 sm:hidden">
                          {getCategoryLabel(item.category)}
                        </div>
                      </td>

                      <td className="py-3 px-4 hidden sm:table-cell text-xs text-slate-600">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                          {getCategoryLabel(item.category)}
                        </span>
                      </td>

                      <td className="py-3 px-4 text-right">
                        <span
                          className={`inline-block font-mono font-extrabold text-sm px-2.5 py-1 rounded-lg ${
                            item.rate === 'Free*'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-slate-100 text-slate-900 border border-slate-200 group-hover:border-blue-300'
                          }`}
                        >
                          {item.rate}
                        </span>
                        {item.noteHi && (
                          <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                            {item.noteHi}
                          </div>
                        )}
                      </td>

                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          {/* When Admin is logged in: Prominent Edit Button */}
                          {isAdminLoggedIn ? (
                            <button
                              type="button"
                              onClick={() => openEditRateModal(item)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 transition-all shadow-xs active:scale-95"
                              title="इस सेवा का रेट व विवरण बदलें"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                              <span>संशोधित करें</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleWhatsAppRateInquiry(item)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-all active:scale-95"
                              title="इस सेवा के लिए WhatsApp पर पूछें"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">पूछें</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filteredRates.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500 text-sm">
                      कोई परिणाम नहीं मिला। कृपया अलग शब्द खोजें।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-5 rounded-xl bg-amber-50/90 border border-amber-200/80 p-4 sm:p-4.5 text-amber-900 shadow-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold block text-amber-950 mb-0.5">
              महत्वपूर्ण सूचना (Important Note):
            </span>
            <p className="font-medium text-amber-900">
              {BUSINESS_INFO.rateListFootnote}
            </p>
          </div>
        </div>

        {/* Physical Transparency Guarantee */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 px-1">
          <div className="flex items-center gap-1.5 text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>सभी दरों पर रसीद (Official Slip / Receipt) उपलब्ध कराई जाती है।</span>
          </div>
          <div className="font-mono text-slate-400">
            CSC ID: {BUSINESS_INFO.cscId} | Mobile: {BUSINESS_INFO.mobile}
          </div>
        </div>
      </div>
    </section>
  );
};
