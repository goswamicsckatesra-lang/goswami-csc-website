import React, { useState } from 'react';
import { ServiceProvider } from './context/ServiceContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BannerSection } from './components/BannerSection';
import { ServicesSection } from './components/ServicesSection';
import { RateListTable } from './components/RateListTable';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { DocumentsRequired } from './components/DocumentsRequired';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingQuickActions } from './components/FloatingQuickActions';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AddServiceModal } from './components/AddServiceModal';
import { EditRateModal } from './components/EditRateModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { CornerAdminBadge } from './components/CornerAdminBadge';
import { ServiceItem } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'hi' | 'en'>('hi');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <ServiceProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased pb-14 sm:pb-0 relative">
        {/* Sticky Navigation Bar with Top-Corner Admin Login */}
        <Navbar currentLang={currentLang} setLang={setCurrentLang} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero
            currentLang={currentLang}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* 2. Official Centre Banner Section */}
          <BannerSection currentLang={currentLang} />

          {/* 3. Services Section with Dynamic Filter & Admin Edit */}
          <ServicesSection
            currentLang={currentLang}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectService={(svc) => setSelectedService(svc)}
          />

          {/* 4. Rate List Section with Row-Level Editing for Admin */}
          <RateListTable currentLang={currentLang} />

          {/* 5. Why Choose Us */}
          <WhyChooseUs currentLang={currentLang} />

          {/* 6. How It Works (3-step section) */}
          <HowItWorks currentLang={currentLang} />

          {/* 7. Documents Required Section */}
          <DocumentsRequired currentLang={currentLang} />

          {/* 8. About Us Section */}
          <AboutSection currentLang={currentLang} />

          {/* 9. Contact Section & Contact Form */}
          <ContactSection currentLang={currentLang} />
        </main>

        {/* Footer */}
        <Footer currentLang={currentLang} />

        {/* Floating Quick Action Bar for Mobile */}
        <FloatingQuickActions currentLang={currentLang} />

        {/* Persistent Corner Admin Login / Status Trigger Badge */}
        <CornerAdminBadge />

        {/* Service Detail & Required Docs Modal */}
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          currentLang={currentLang}
        />

        {/* Add/Edit Full Service Modal */}
        <AddServiceModal />

        {/* Direct Rate Modification Modal */}
        <EditRateModal />

        {/* Admin Login Modal (PIN/Password Authentication) */}
        <AdminLoginModal />
      </div>
    </ServiceProvider>
  );
}
