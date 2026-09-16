import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/cscData';
import { useServices } from '../context/ServiceContext';
import {
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  PlusCircle,
  Award,
  Lock,
  LogOut,
  UserCheck
} from 'lucide-react';

interface NavbarProps {
  currentLang: 'hi' | 'en';
  setLang: (lang: 'hi' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openAddModal, isAdminLoggedIn, openLoginModal, logoutAdmin } = useServices();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelHi: 'होम', labelEn: 'Home' },
    { href: '#banner', labelHi: 'केंद्र बैनर', labelEn: 'Banner' },
    { href: '#services', labelHi: 'सेवाएं', labelEn: 'Services' },
    { href: '#rate-list', labelHi: 'रेट लिस्ट', labelEn: 'Rate List' },
    { href: '#why-us', labelHi: 'विशेषताएं', labelEn: 'Why Choose Us' },
    { href: '#how-it-works', labelHi: 'प्रक्रिया', labelEn: 'How It Works' },
    { href: '#about', labelHi: 'हमारे बारे में', labelEn: 'About Us' },
    { href: '#contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('नमस्ते Goswami CSC Centre, मुझे आपकी ऑनलाइन व सरकारी सेवाओं के बारे में जानकारी चाहिए।');
    window.open(`https://wa.me/918814099240?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Verification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded font-medium border border-blue-700/50">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>CSC ID: {BUSINESS_INFO.cscId}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.addressShort}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentLang === 'hi' ? 'खुला है: 8:30 AM - 7:30 PM' : 'Open: 8:30 AM - 7:30 PM'}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.mobile}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="font-semibold tracking-wide">{BUSINESS_INFO.formattedMobile}</span>
            </a>

            {/* Corner Admin Login in Topbar */}
            {isAdminLoggedIn ? (
              <div className="flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold text-[11px] hidden sm:inline">एडमिन: {BUSINESS_INFO.ownerName}</span>
                <button
                  type="button"
                  onClick={logoutAdmin}
                  className="text-slate-400 hover:text-red-300 ml-1 p-0.5"
                  title="एडमिन लॉगआउट"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 bg-slate-800/80 hover:bg-slate-800 px-2 py-0.5 rounded border border-slate-700 text-[11px] font-semibold transition-colors"
                title="रेट लिस्ट व सेवा संशोधन हेतु संचालक लॉगिन"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Admin Login</span>
              </button>
            )}

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 text-xs rounded font-medium transition-colors ${
                  currentLang === 'hi'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="हिन्दी भाषा चुनें"
              >
                हिन्दी
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs rounded font-medium transition-colors ${
                  currentLang === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 border-b ${
          isScrolled ? 'shadow-md border-slate-200' : 'border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo / Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-hidden"
              id="brand-logo"
            >
              {/* CSC Brand Badge Emblem */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-0.5 shadow-md flex items-center justify-center text-white font-bold relative group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[10px] bg-blue-900 flex flex-col items-center justify-center border border-blue-400/30">
                  <span className="text-[10px] font-black tracking-widest text-amber-300">CSC</span>
                  <span className="text-xs font-black tracking-tight text-white">सेवा</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" title="Verified Active Centre"></div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {BUSINESS_INFO.name}
                  </span>
                  <span className="hidden sm:inline-flex text-[10px] uppercase font-bold bg-blue-50 text-blue-700 border border-blue-200 rounded px-1.5 py-0.5">
                    रोहतक (हरियाणा)
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-700">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2.5 py-2 text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-blue-50/70 transition-colors"
                >
                  {currentLang === 'hi' ? link.labelHi : link.labelEn}
                </a>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              {/* If Admin is logged in: Show "+ सेवा जोड़ें" button */}
              {isAdminLoggedIn ? (
                <button
                  type="button"
                  onClick={openAddModal}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-all shadow-xs active:scale-95"
                  title="नयी सेवा या रेट जोड़ें"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-amber-300" />
                  <span>+ सेवा जोड़ें</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                  title="रेट लिस्ट व सेवा संशोधन हेतु लॉगिन"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-600" />
                  <span>संचालक लॉगिन</span>
                </button>
              )}

              <a
                href={`tel:${BUSINESS_INFO.mobile}`}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>कॉल करें</span>
              </a>

              <button
                type="button"
                onClick={openWhatsApp}
                id="header-whatsapp-btn"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp करें</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={isAdminLoggedIn ? openAddModal : openLoginModal}
                className={`p-2 rounded-lg border ${
                  isAdminLoggedIn
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}
                title={isAdminLoggedIn ? 'नयी सेवा जोड़ें' : 'एडमिन लॉगिन'}
              >
                {isAdminLoggedIn ? <PlusCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-hidden"
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pt-2 border-b border-slate-100 pb-3">
              {isAdminLoggedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAddModal();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs"
                >
                  <PlusCircle className="w-4 h-4 text-amber-300" />
                  <span>+ सेवा जोड़ें</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLoginModal();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 text-white rounded-xl font-bold text-xs"
                >
                  <Lock className="w-4 h-4 text-amber-300" />
                  <span>एडमिन लॉगिन</span>
                </button>
              )}

              <a
                href={`tel:${BUSINESS_INFO.mobile}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 text-slate-800 rounded-xl font-bold text-xs border border-slate-200"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>कॉल करें</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors"
                >
                  <span>{currentLang === 'hi' ? link.labelHi : link.labelEn}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp पर संपर्क करें (8814099240)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
