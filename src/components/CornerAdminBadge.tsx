import React from 'react';
import { useServices } from '../context/ServiceContext';
import { BUSINESS_INFO } from '../data/cscData';
import { Lock, Unlock, LogOut, PlusCircle, ShieldCheck, UserCheck } from 'lucide-react';

export const CornerAdminBadge: React.FC = () => {
  const { isAdminLoggedIn, openLoginModal, logoutAdmin, openAddModal } = useServices();

  return (
    <aside
      aria-label="एडमिन नियंत्रण कॉर्नर"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2"
    >
      {isAdminLoggedIn ? (
        <div className="bg-slate-900 text-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-slate-700 flex items-center gap-2.5 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
            <UserCheck className="w-4 h-4" />
          </div>

          <div className="text-left pr-1">
            <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>एडमिन मोड चालू</span>
            </div>
            <div className="text-xs font-bold text-slate-100 truncate max-w-[120px] sm:max-w-[160px]">
              {BUSINESS_INFO.ownerName}
            </div>
          </div>

          {/* Quick Add Button */}
          <button
            type="button"
            onClick={openAddModal}
            className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            title="नई सेवा या रेट जोड़ें"
          >
            <PlusCircle className="w-4 h-4" />
          </button>

          {/* Logout Button */}
          <button
            type="button"
            onClick={logoutAdmin}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900/60 text-slate-300 hover:text-red-300 transition-colors"
            title="एडमिन लॉगआउट करें"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={openLoginModal}
          id="corner-admin-login-btn"
          className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-xl border border-slate-700/80 hover:border-amber-400/60 backdrop-blur-md transition-all active:scale-95 hover:shadow-2xl"
          title="रेट लिस्ट व सेवा संशोधन के लिए संचालक लॉगिन करें"
        >
          <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <Lock className="w-3.5 h-3.5" />
          </span>
          <span className="group-hover:text-amber-300 transition-colors">
            Admin Login
          </span>
        </button>
      )}
    </aside>
  );
};
