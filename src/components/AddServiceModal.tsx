import React, { useState, useEffect } from 'react';
import { useServices } from '../context/ServiceContext';
import { ServiceCategory } from '../types';
import { ServiceIcon } from './ServiceIcon';
import {
  X,
  PlusCircle,
  CheckCircle2,
  HelpCircle,
  Tag,
  Layers,
  FileText,
  FileCheck,
  CreditCard,
  HeartPulse,
  HardHat,
  Printer,
  Sparkles,
  Info
} from 'lucide-react';

const AVAILABLE_ICONS = [
  'FileText',
  'CreditCard',
  'FileCheck',
  'ShieldCheck',
  'Award',
  'Users',
  'Building2',
  'HeartPulse',
  'HardHat',
  'Wrench',
  'Briefcase',
  'GraduationCap',
  'Printer',
  'Receipt',
  'Camera',
  'Layers',
  'ScanLine',
  'Wheat',
  'Plane',
  'Sparkles'
];

export const AddServiceModal: React.FC = () => {
  const {
    isAddModalOpen,
    closeAddModal,
    addService,
    updateService,
    editingService
  } = useServices();

  const [titleHi, setTitleHi] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [category, setCategory] = useState<ServiceCategory>('certificates');
  const [price, setPrice] = useState('₹100');
  const [noteHi, setNoteHi] = useState('');
  const [descriptionHi, setDescriptionHi] = useState('');
  const [docsInput, setDocsInput] = useState('');
  const [icon, setIcon] = useState('FileText');
  const [popular, setPopular] = useState(false);

  useEffect(() => {
    if (editingService) {
      setTitleHi(editingService.titleHi);
      setTitleEn(editingService.titleEn);
      setCategory(editingService.category);
      setPrice(editingService.price);
      setDescriptionHi(editingService.descriptionHi);
      setDocsInput(editingService.requiredDocsHi.join(', '));
      setIcon(editingService.icon || 'FileText');
      setPopular(!!editingService.popular);
      setNoteHi('');
    } else {
      // Defaults for adding new
      setTitleHi('');
      setTitleEn('');
      setCategory('certificates');
      setPrice('₹100');
      setNoteHi('');
      setDescriptionHi('');
      setDocsInput('आधार कार्ड, फैमिली आईडी, मोबाइल नंबर');
      setIcon('FileText');
      setPopular(false);
    }
  }, [editingService, isAddModalOpen]);

  if (!isAddModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titleHi.trim()) {
      alert('कृपया सेवा का नाम (हिन्दी में) दर्ज करें।');
      return;
    }

    if (!price.trim()) {
      alert('कृपया सेवा का लागू शुल्क दर्ज करें।');
      return;
    }

    const docsList = docsInput
      .split(',')
      .map((d) => d.trim())
      .filter((d) => d.length > 0);

    const serviceData = {
      titleHi: titleHi.trim(),
      titleEn: titleEn.trim() || titleHi.trim(),
      category,
      price: price.trim(),
      popular,
      descriptionHi:
        descriptionHi.trim() ||
        `${titleHi.trim()} ऑनलाइन आवेदन एवं सहायता Goswami CSC Centre पर उपलब्ध है।`,
      descriptionEn:
        `${titleEn.trim() || titleHi.trim()} application & citizen service assistance available at Goswami CSC Centre.`,
      requiredDocsHi: docsList.length > 0 ? docsList : ['आधार कार्ड', 'संबंधित दस्तावेज'],
      icon
    };

    if (editingService) {
      updateService(editingService.id, serviceData, noteHi.trim());
    } else {
      addService(serviceData, noteHi.trim());
    }
  };

  const presetRates = ['Free*', '₹10–₹20', '₹30–₹50', '₹50', '₹100', '₹150', '₹200', '₹250'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-5 sm:p-6 relative">
          <button
            type="button"
            onClick={closeAddModal}
            className="absolute right-4 top-4 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <PlusCircle className="w-5 h-5 text-blue-950" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                सीएससी संचालक प्रबंधन
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {editingService ? 'सेवा या रेट संशोधित करें' : 'नई सेवा एवं रेट जोड़ें (Add Service / Rate)'}
              </h3>
            </div>
          </div>
          <p className="text-xs text-blue-200 mt-2">
            यहां जोड़ी गई सेवा तुरंत वेबसाइट की सर्विसेज लिस्ट और रेट लिस्ट में सक्रिय हो जाएगी।
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm max-h-[75vh] overflow-y-auto">
          {/* Service Name Hindi */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              सेवा का नाम (हिन्दी में) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={titleHi}
              onChange={(e) => setTitleHi(e.target.value)}
              placeholder="जैसे: ड्राइविंग लाइसेंस (लर्नर) / लेबर कार्ड"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Service Name English */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Service Name (English)
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="e.g. Driving Licence (Learner) / Labour Card"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Category & Rate Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                केटेगरी चुनें (Category) <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ServiceCategory)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="certificates">सरकारी प्रमाण पत्र (Certificates)</option>
                <option value="id_cards">पहचान व कार्ड (ID Cards)</option>
                <option value="schemes">सरकारी योजनाएं (Govt Schemes)</option>
                <option value="online_forms">ऑनलाइन फॉर्म व नौकरी (Online Forms)</option>
                <option value="utility_printing">प्रिंटिंग व बिल भुगतान (Utility & Print)</option>
              </select>
            </div>

            {/* Price / Rate */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                सेवा शुल्क / रेट (Rate) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="जैसे: ₹100 या Free*"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-bold font-mono focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Quick Rate Shortcuts */}
          <div>
            <div className="text-[11px] text-slate-500 font-semibold mb-1.5 flex items-center gap-1">
              <Tag className="w-3 h-3 text-blue-600" />
              <span>त्वरित रेट चयन (Quick Presets):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {presetRates.map((pRate) => (
                <button
                  type="button"
                  key={pRate}
                  onClick={() => setPrice(pRate)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${
                    price === pRate
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pRate}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Note / Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              रेट संबंधी टिप्पणी या विवरण (Description / Note)
            </label>
            <input
              type="text"
              value={descriptionHi}
              onChange={(e) => setDescriptionHi(e.target.value)}
              placeholder="जैसे: सरकारी पोर्टल शुल्क अतिरिक्त, 2 से 3 दिन में तैयार"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Required Documents */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              आवश्यक दस्तावेज (कॉमा से अलग करें)
            </label>
            <input
              type="text"
              value={docsInput}
              onChange={(e) => setDocsInput(e.target.value)}
              placeholder="आधार कार्ड, फैमिली आईडी, फोटो, बैंक पासबुक"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
            <span className="text-[11px] text-slate-500 block mt-1">
              उदाहरण: आधार कार्ड, फैमिली आईडी, 2 फोटो
            </span>
          </div>

          {/* Icon Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              आइकन चुनें (Select Icon)
            </label>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 max-h-28 overflow-y-auto">
              {AVAILABLE_ICONS.map((icName) => (
                <button
                  type="button"
                  key={icName}
                  onClick={() => setIcon(icName)}
                  className={`p-2 rounded-lg flex items-center justify-center transition-all ${
                    icon === icName
                      ? 'bg-blue-600 text-white ring-2 ring-blue-600 shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                  title={icName}
                >
                  <ServiceIcon name={icName} className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Popular Flag */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="is-popular-checkbox"
              checked={popular}
              onChange={(e) => setPopular(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded-sm border-slate-300 focus:ring-blue-500"
            />
            <label htmlFor="is-popular-checkbox" className="text-xs font-semibold text-slate-700 cursor-pointer">
              मुख्य / लोकप्रिय सेवा के रूप में हाईलाइट करें (Show 'Popular' Badge)
            </label>
          </div>

          {/* Notice */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              यह सेवा आपके लोकल ब्राउज़र स्टोरेज में सुरक्षित रूप से सेव होगी और वेबसाइट के हर सेक्शन (सर्विसेज, रेट लिस्ट, फॉर्म) में तुरंत लाइव दिखाई देगी।
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={closeAddModal}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{editingService ? 'संशोधन सुरक्षित करें' : 'सेवा व रेट जोड़ें'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
