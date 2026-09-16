import React, { useState } from 'react';
import { CATEGORIES, BUSINESS_INFO } from '../data/cscData';
import { ServiceCategory, ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { useServices } from '../context/ServiceContext';
import {
  Search,
  X,
  MessageCircle,
  FileText,
  Tag,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PlusCircle,
  Edit2,
  Trash2,
  Lock,
  UserCheck
} from 'lucide-react';

interface ServicesSectionProps {
  currentLang: 'hi' | 'en';
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  searchQuery,
  setSearchQuery,
  onSelectService,
}) => {
  const {
    services,
    categoriesCount,
    openAddModal,
    openEditModal,
    deleteService,
    isCustomService,
    isAdminLoggedIn,
    openLoginModal
  } = useServices();

  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [showAllLimit, setShowAllLimit] = useState(12);

  // Filter services by category and search
  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      service.titleHi.toLowerCase().includes(query) ||
      service.titleEn.toLowerCase().includes(query) ||
      service.descriptionHi.toLowerCase().includes(query) ||
      service.descriptionEn.toLowerCase().includes(query) ||
      service.requiredDocsHi.some((doc) => doc.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const displayedServices =
    searchQuery.trim() !== '' ? filteredServices : filteredServices.slice(0, showAllLimit);

  const handleWhatsAppInquiry = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `नमस्ते Goswami CSC Centre, मुझे "${service.titleHi}" (${service.titleEn}) के लिए आवश्यक दस्तावेज, सरकारी शुल्क व प्रक्रिया की जानकारी चाहिए।`
    );
    window.open(`https://wa.me/918814099240?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleDelete = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`क्या आप वाकई "${service.titleHi}" को हटाना चाहते हैं?`)) {
      deleteService(service.id);
    }
  };

  const handleEdit = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    openEditModal(service);
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>{currentLang === 'hi' ? 'सीएससी सेवाएं' : 'Our Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'hi' ? 'डिजिटल एवं सरकारी सेवाएं' : 'Digital & Government Services'}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {currentLang === 'hi'
              ? `सरल हरियाणा, डिजिटल इंडिया और केंद्र/राज्य सरकार की ${services.length}+ सेवाएं विश्वसनीय सहायता के साथ।`
              : `All official government and citizen services processed with complete guidance.`}
          </p>
        </div>

        {/* Search & Action Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search bar */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="किसी भी सेवा का नाम या दस्तावेज खोजें (जैसे: PAN, Domicile, Family ID, राशन, लेबर)..."
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                id="services-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
                  title="हटाएं"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Operator Actions: Only Admin can add/modify */}
            <div className="flex items-center gap-2">
              {isAdminLoggedIn ? (
                <button
                  type="button"
                  onClick={openAddModal}
                  id="add-service-btn"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  title="नयी सेवा या रेट जोड़ें"
                >
                  <PlusCircle className="w-4 h-4 text-amber-300" />
                  <span>+ नयी सेवा / रेट जोड़ें</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  title="सेवाएं व रेट संशोधित करने के लिए एडमिन लॉगिन करें"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-600" />
                  <span>एडमिन लॉगिन</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs with dynamic counts */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoriesCount[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowAllLimit(12);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-sm ring-2 ring-blue-700/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <span>{currentLang === 'hi' ? cat.nameHi : cat.nameEn}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-blue-800 text-amber-300' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
            <span>
              कुल <strong>{filteredServices.length}</strong> सेवाएं उपलब्ध
              {searchQuery && ` (सर्च: "${searchQuery}")`}
            </span>
            <span className="hidden sm:inline text-blue-700 font-medium">
              आवश्यक दस्तावेजों की जानकारी के लिए कार्ड पर क्लिक करें
            </span>
          </div>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">कोई सेवा नहीं मिली</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              "{searchQuery}" के लिए कोई परिणाम नहीं मिला।
            </p>
            <div className="flex items-center justify-center gap-2">
              {isAdminLoggedIn && (
                <button
                  type="button"
                  onClick={openAddModal}
                  className="px-4 py-2 text-xs font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center gap-1.5"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-amber-300" />
                  <span>+ यह सेवा जोड़ें</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 text-xs font-semibold bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300"
              >
                सभी सेवाएं देखें
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedServices.map((service) => {
              const isCustom = isCustomService(service.id);
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className={`rounded-2xl bg-white border p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                    isCustom ? 'border-amber-300 ring-1 ring-amber-200' : 'border-slate-200/90 hover:border-blue-300'
                  }`}
                >
                  {/* Badges: Popular / Custom */}
                  <div className="absolute top-0 right-0 flex items-center gap-1">
                    {isCustom && (
                      <span className="bg-amber-100 text-amber-900 border-b border-l border-amber-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl-lg">
                        कस्टम जोड़ी गई
                      </span>
                    )}
                    {service.popular && !isCustom && (
                      <span className="bg-gradient-to-l from-amber-500 to-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg shadow-xs flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        लोकप्रिय
                      </span>
                    )}
                  </div>

                  <div>
                    {/* Top Bar: Icon & Rate */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                        <ServiceIcon name={service.icon} className="w-5 h-5" />
                      </div>

                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 font-mono font-bold text-sm px-2.5 py-1 rounded-lg border border-slate-200">
                          <Tag className="w-3 h-3 text-blue-600" />
                          <span>{service.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Titles */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-1 pr-14">
                      {service.titleHi}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mb-2">
                      {service.titleEn}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                      {currentLang === 'hi' ? service.descriptionHi : service.descriptionEn}
                    </p>

                    {/* Key Documents Required Pill */}
                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-100 mb-4">
                      <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                        <FileText className="w-3 h-3 text-blue-600" />
                        <span>जरूरी दस्तावेज:</span>
                      </div>
                      <div className="text-xs text-slate-700 truncate font-medium">
                        {service.requiredDocsHi.join(' • ')}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="space-y-2">
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => handleWhatsAppInquiry(service, e)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-colors"
                        title="WhatsApp पर आवश्यक जानकारी पूछें"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp पूछताछ</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectService(service)}
                        className="py-2 px-3 text-xs font-bold rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors inline-flex items-center gap-1"
                        title="पूरी जानकारी व दस्तावेज देखें"
                      >
                        <span>विवरण</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Admin Controls: ONLY visible when Admin is logged in */}
                    {isAdminLoggedIn && (
                      <div className="pt-1 flex items-center justify-end gap-1.5 border-t border-slate-100/60 text-xs">
                        <button
                          type="button"
                          onClick={(e) => handleEdit(service, e)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-blue-700 hover:bg-blue-50 transition-colors text-[11px] font-bold"
                          title="सेवा या रेट बदलें"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>संशोधित करें</span>
                        </button>

                        {isCustom && (
                          <button
                            type="button"
                            onClick={(e) => handleDelete(service, e)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-red-600 hover:bg-red-50 transition-colors text-[11px] font-semibold"
                            title="हटाएं"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>हटाएं</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* "सभी सेवाएं देखें" Button */}
        {searchQuery.trim() === '' && showAllLimit < filteredServices.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllLimit(filteredServices.length)}
              id="view-all-services-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>सभी {filteredServices.length} सेवाएं देखें</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Collapse Button */}
        {searchQuery.trim() === '' && showAllLimit >= filteredServices.length && filteredServices.length > 12 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => {
                setShowAllLimit(12);
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs transition-colors"
            >
              <span>कम सेवाएं दिखाएं</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
