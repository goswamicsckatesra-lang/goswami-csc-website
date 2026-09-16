import React, { useState, useEffect } from 'react';
import { useServices } from '../context/ServiceContext';
import { X, CheckCircle2, Tag, Edit3, Info } from 'lucide-react';

export const EditRateModal: React.FC = () => {
  const { isEditRateModalOpen, closeEditRateModal, editingRateItem, updateRateItem } =
    useServices();

  const [rate, setRate] = useState('');
  const [serviceHi, setServiceHi] = useState('');
  const [noteHi, setNoteHi] = useState('');

  useEffect(() => {
    if (editingRateItem) {
      setRate(editingRateItem.rate);
      setServiceHi(editingRateItem.serviceHi);
      setNoteHi(editingRateItem.noteHi || '');
    }
  }, [editingRateItem, isEditRateModalOpen]);

  if (!isEditRateModalOpen || !editingRateItem) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rate.trim()) {
      alert('कृपया मान्य रेट दर्ज करें।');
      return;
    }
    updateRateItem(editingRateItem.id, rate.trim(), noteHi.trim(), serviceHi.trim());
  };

  const presetRates = ['Free*', '₹10–₹20', '₹30', '₹50', '₹70', '₹100', '₹150', '₹200', '₹250', '₹300'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 sm:p-6 relative">
          <button
            type="button"
            onClick={closeEditRateModal}
            className="absolute right-4 top-4 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Edit3 className="w-5 h-5 text-blue-950" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                रेट लिस्ट संपादन (ADMIN)
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                सेवा दर व विवरण संशोधित करें
              </h3>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
          {/* Service Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              सेवा का नाम (Service Name)
            </label>
            <input
              type="text"
              required
              value={serviceHi}
              onChange={(e) => setServiceHi(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Rate Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              निर्धारित सेवा शुल्क / रेट (Rate) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="जैसे: ₹100 या Free*"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base font-mono font-black focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Quick Rate Shortcuts */}
          <div>
            <div className="text-[11px] text-slate-500 font-semibold mb-1.5 flex items-center gap-1">
              <Tag className="w-3 h-3 text-blue-600" />
              <span>त्वरित रेट चयन (Quick Rate Presets):</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {presetRates.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setRate(p)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${
                    rate === p
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Note / Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              दर संबंधी टिप्पणी / नोट (Rate Note)
            </label>
            <input
              type="text"
              value={noteHi}
              onChange={(e) => setNoteHi(e.target.value)}
              placeholder="जैसे: सरकारी पोर्टल फीस अतिरिक्त, 2 फोटो आवश्यक"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <span>
              यह बदलाव रेट लिस्ट टेबल और सेवाओं के कार्ड्स में तुरंत अपडेट हो जाएगा।
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={closeEditRateModal}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>रेट सुरक्षित करें</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
