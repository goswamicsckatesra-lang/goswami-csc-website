import React, { useState } from 'react';
import { useServices } from '../context/ServiceContext';
import { BUSINESS_INFO } from '../data/cscData';
import {
  X,
  Lock,
  User,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  UserCheck,
  Key
} from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const {
    isLoginModalOpen,
    closeLoginModal,
    loginAdmin,
    isAdminLoggedIn,
    logoutAdmin,
    updateAdminPin
  } = useServices();

  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Change Password state
  const [isChangingPass, setIsChangingPass] = useState(false);
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!adminId.trim()) {
      setErrorMsg('कृपया यूजर आईडी दर्ज करें।');
      return;
    }

    if (!password.trim()) {
      setErrorMsg('कृपया पासवर्ड दर्ज करें।');
      return;
    }

    const res = loginAdmin(adminId, password);
    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      setAdminId('');
      setPassword('');
    }
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!oldPin.trim()) {
      setErrorMsg('कृपया वर्तमान पासवर्ड दर्ज करें।');
      return;
    }

    if (newPin.trim().length < 4) {
      setErrorMsg('नया पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।');
      return;
    }

    if (newPin !== confirmNewPin) {
      setErrorMsg('नया पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते।');
      return;
    }

    const res = updateAdminPin(oldPin, newPin);
    if (res.success) {
      setSuccessMsg(res.message);
      setOldPin('');
      setNewPin('');
      setConfirmNewPin('');
      setIsChangingPass(false);
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 relative">
          <button
            type="button"
            onClick={closeLoginModal}
            className="absolute right-4 top-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Lock className="w-5 h-5 text-blue-950" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                अधिकृत संचालक प्रमाणीकरण
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                सीएससी एडमिन लॉगिन
              </h3>
            </div>
          </div>
          <p className="text-xs text-blue-200 mt-2">
            रेट व सेवाओं में संशोधन करने के लिए केवल गोस्वामी सीएससी केंद्र के संचालक ही लॉगिन कर सकते हैं।
          </p>
        </div>

        {/* Content Body */}
        {isAdminLoggedIn ? (
          <div className="p-6 space-y-4">
            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {!isChangingPass ? (
              <>
                <div className="text-center py-2">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    एडमिन सत्र सक्रिय है
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    संचालक: <strong>{BUSINESS_INFO.ownerName}</strong>
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">
                    ✅ आप अब रेट लिस्ट और सेवाओं में संशोधन कर सकते हैं:
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                    <li>रेट लिस्ट टेबल में किसी भी रेट के सामने "संशोधित करें" बटन दबाएं।</li>
                    <li>"+ नयी सेवा / रेट जोड़ें" से नई सेवा सम्मिलित करें।</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setIsChangingPass(true);
                      setErrorMsg('');
                      setSuccessMsg('');
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 border border-slate-300 transition-colors"
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>पासवर्ड बदलें</span>
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={logoutAdmin}
                      className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-bold transition-colors"
                    >
                      लॉगआउट
                    </button>
                    <button
                      type="button"
                      onClick={closeLoginModal}
                      className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800 text-xs font-bold shadow-xs transition-colors"
                    >
                      जारी रखें
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Change Password Sub-form */
              <form onSubmit={handleChangePasswordSubmit} className="space-y-3.5 pt-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-blue-700" />
                    <span>नया एडमिन पासवर्ड निर्धारित करें</span>
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsChangingPass(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                  >
                    वापस जाएं
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    वर्तमान पासवर्ड (Current Password)
                  </label>
                  <input
                    type="password"
                    required
                    value={oldPin}
                    onChange={(e) => setOldPin(e.target.value)}
                    placeholder="वर्तमान पासवर्ड दर्ज करें"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    नया गुप्त पासवर्ड (New Password)
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      required
                      value={newPin}
                      onChange={(e) => setNewPin(e.target.value)}
                      placeholder="नया पासवर्ड दर्ज करें (कम से कम 4 अक्षर)"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600 pr-9"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    नए पासवर्ड की पुष्टि (Confirm New Password)
                  </label>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    required
                    value={confirmNewPin}
                    onChange={(e) => setConfirmNewPin(e.target.value)}
                    placeholder="नया पासवर्ड पुनः दर्ज करें"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsChangingPass(false)}
                    className="px-3 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xs"
                  >
                    पासवर्ड सुरक्षित करें
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Normal Secure Login Form */
          <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* User ID Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                यूजर आईडी (User ID)
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  autoFocus
                  autoComplete="username"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  placeholder="यूजर आईडी दर्ज करें"
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Password Input with masking */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                पासवर्ड (Password)
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="पासवर्ड दर्ज करें"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm tracking-wider focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  title={showPassword ? 'पासवर्ड छिपाएं' : 'पासवर्ड देखें'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-600 text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                गोपनीयता सुरक्षा: यह लॉगिन फॉर्म एन्क्रिप्टेड है। अनाधिकृत व्यक्तियों द्वारा प्रवेश निषेध है।
              </span>
            </div>

            {/* Submit Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={closeLoginModal}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
              >
                रद्द करें
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>सत्यापित करें एवं लॉगिन</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
