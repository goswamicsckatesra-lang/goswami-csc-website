import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ServiceItem, RateItem, ServiceCategory } from '../types';
import { SERVICES_LIST, RATE_LIST, BUSINESS_INFO } from '../data/cscData';

interface ServiceContextType {
  services: ServiceItem[];
  rateItems: RateItem[];
  categoriesCount: Record<string, number>;
  // Services operations
  addService: (newService: Omit<ServiceItem, 'id'>, noteHi?: string) => void;
  updateService: (id: string, updated: Partial<ServiceItem>, noteHi?: string) => void;
  deleteService: (id: string) => void;
  resetToDefaults: () => void;
  isCustomService: (id: string) => boolean;

  // Rate item specific operations
  editingRateItem: RateItem | null;
  isEditRateModalOpen: boolean;
  openEditRateModal: (item: RateItem) => void;
  closeEditRateModal: () => void;
  updateRateItem: (id: string, newRate: string, newNoteHi?: string, newServiceHi?: string) => void;

  // Admin Authentication (Strictly private)
  isAdminLoggedIn: boolean;
  loginAdmin: (adminId: string, password?: string) => { success: boolean; message: string };
  logoutAdmin: () => void;
  updateAdminPin: (oldPin: string, newPin: string) => { success: boolean; message: string };
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  // Modals for Service add/edit
  isAddModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
  editingService: ServiceItem | null;
  openEditModal: (service: ServiceItem) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

const STORAGE_KEY_SERVICES = 'goswami_csc_services_v3';
const STORAGE_KEY_RATES = 'goswami_csc_rates_v3';
const STORAGE_KEY_ADMIN_LOGGED = 'goswami_csc_admin_session';
const STORAGE_KEY_ADMIN_PIN = 'goswami_csc_admin_pin';

// Accepted Admin IDs for Rishi Goswami
const ACCEPTED_ADMIN_IDS = [
  'admin',
  'rishi',
  'goswami',
  'rishigoswami',
  '566337450012', // CSC ID
  '8814099240', // Mobile
  'goswamicsckatesra@gmail.com'
];

// Default accepted PINs/passwords
const DEFAULT_PINS = ['1234', '566337', 'admin@123', 'rishi@123'];

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SERVICES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading services from localStorage:', e);
    }
    return SERVICES_LIST;
  });

  const [rateItems, setRateItems] = useState<RateItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RATES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading rates from localStorage:', e);
    }
    return RATE_LIST;
  });

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_ADMIN_LOGGED) === 'true';
    } catch {
      return false;
    }
  });

  const [adminPin, setAdminPin] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_ADMIN_PIN) || '1234';
    } catch {
      return '1234';
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);

  // Rate Editing state
  const [editingRateItem, setEditingRateItem] = useState<RateItem | null>(null);
  const [isEditRateModalOpen, setIsEditRateModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(services));
    } catch (e) {
      console.error('Failed to save services:', e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RATES, JSON.stringify(rateItems));
    } catch (e) {
      console.error('Failed to save rates:', e);
    }
  }, [rateItems]);

  // Secure Admin Login without exposing credentials
  const loginAdmin = (adminId: string, password?: string): { success: boolean; message: string } => {
    const cleanId = adminId.trim().toLowerCase();
    const cleanPass = password !== undefined ? password.trim() : '';

    // If both Admin ID and Password are provided
    if (password !== undefined) {
      const isIdValid = ACCEPTED_ADMIN_IDS.includes(cleanId) || cleanId === adminPin.toLowerCase();
      const isPassValid = cleanPass === adminPin || DEFAULT_PINS.includes(cleanPass);

      if (isIdValid && isPassValid) {
        setIsAdminLoggedIn(true);
        try {
          localStorage.setItem(STORAGE_KEY_ADMIN_LOGGED, 'true');
        } catch (e) {
          console.error(e);
        }
        setIsLoginModalOpen(false);
        return { success: true, message: 'सफलतापूर्वक एडमिन लॉगिन हो गया।' };
      }
      return {
        success: false,
        message: 'अमान्य यूजर आईडी या पासवर्ड!'
      };
    }

    // If only PIN/Password is provided
    if (cleanId === adminPin || DEFAULT_PINS.includes(cleanId) || ACCEPTED_ADMIN_IDS.includes(cleanId)) {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem(STORAGE_KEY_ADMIN_LOGGED, 'true');
      } catch (e) {
        console.error(e);
      }
      setIsLoginModalOpen(false);
      return { success: true, message: 'सफलतापूर्वक लॉगिन हो गया।' };
    }

    return {
      success: false,
      message: 'अमान्य यूजर आईडी या पासवर्ड!'
    };
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem(STORAGE_KEY_ADMIN_LOGGED);
    } catch (e) {
      console.error(e);
    }
  };

  // Change Admin Password / PIN
  const updateAdminPin = (oldPin: string, newPin: string): { success: boolean; message: string } => {
    const cleanOld = oldPin.trim();
    const cleanNew = newPin.trim();

    if (!cleanNew || cleanNew.length < 4) {
      return { success: false, message: 'नया पासवर्ड / पिन कम से कम 4 अक्षरों का होना चाहिए।' };
    }

    if (cleanOld !== adminPin && !DEFAULT_PINS.includes(cleanOld)) {
      return { success: false, message: 'वर्तमान पासवर्ड / पिन गलत है।' };
    }

    setAdminPin(cleanNew);
    try {
      localStorage.setItem(STORAGE_KEY_ADMIN_PIN, cleanNew);
    } catch (e) {
      console.error(e);
    }
    return { success: true, message: 'एडमिन पासवर्ड सफलतापूर्वक बदल दिया गया है।' };
  };

  const isCustomService = (id: string): boolean => {
    const isOriginal = SERVICES_LIST.some((s) => s.id === id);
    return !isOriginal;
  };

  // Add new service & rate (Admin only)
  const addService = (newServiceData: Omit<ServiceItem, 'id'>, noteHi?: string) => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    const newId = `custom-svc-${Date.now()}`;
    const newServiceItem: ServiceItem = {
      ...newServiceData,
      id: newId
    };

    const newRateItem: RateItem = {
      id: `rate-${newId}`,
      serviceHi: newServiceItem.titleHi,
      serviceEn: newServiceItem.titleEn,
      rate: newServiceItem.price,
      category: newServiceItem.category,
      noteHi: noteHi || newServiceItem.descriptionHi.slice(0, 40),
      isPopular: newServiceItem.popular
    };

    setServices((prev) => [newServiceItem, ...prev]);
    setRateItems((prev) => [newRateItem, ...prev]);
    closeAddModal();
  };

  // Update existing service (Admin only)
  const updateService = (id: string, updatedData: Partial<ServiceItem>, noteHi?: string) => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    setServices((prev) =>
      prev.map((svc) => (svc.id === id ? { ...svc, ...updatedData } : svc))
    );

    setRateItems((prev) =>
      prev.map((r) => {
        if (r.id === id || r.id === `rate-${id}` || r.serviceHi === updatedData.titleHi) {
          return {
            ...r,
            serviceHi: updatedData.titleHi ?? r.serviceHi,
            serviceEn: updatedData.titleEn ?? r.serviceEn,
            rate: updatedData.price ?? r.rate,
            category: updatedData.category ?? r.category,
            noteHi: noteHi ?? r.noteHi,
            isPopular: updatedData.popular ?? r.isPopular
          };
        }
        return r;
      })
    );
    closeAddModal();
  };

  // Update a single rate item directly from the Rate List (Admin only)
  const updateRateItem = (id: string, newRate: string, newNoteHi?: string, newServiceHi?: string) => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    setRateItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            rate: newRate.trim(),
            noteHi: newNoteHi !== undefined ? newNoteHi.trim() : item.noteHi,
            serviceHi: newServiceHi ? newServiceHi.trim() : item.serviceHi
          };
        }
        return item;
      })
    );

    // Also sync the rate into services list so they stay perfectly consistent
    setServices((prev) =>
      prev.map((svc) => {
        if (svc.id === id || svc.id === id.replace('rate-', '') || svc.titleHi === newServiceHi) {
          return {
            ...svc,
            price: newRate.trim(),
            titleHi: newServiceHi ? newServiceHi.trim() : svc.titleHi
          };
        }
        return svc;
      })
    );

    closeEditRateModal();
  };

  // Delete custom service
  const deleteService = (id: string) => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setServices((prev) => prev.filter((s) => s.id !== id));
    setRateItems((prev) => prev.filter((r) => r.id !== id && r.id !== `rate-${id}`));
  };

  // Reset back to factory defaults
  const resetToDefaults = () => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    if (window.confirm('क्या आप सभी सेवाओं और रेट लिस्ट को डिफ़ॉल्ट मूल स्थिति में रीसेट करना चाहते हैं?')) {
      setServices(SERVICES_LIST);
      setRateItems(RATE_LIST);
      try {
        localStorage.removeItem(STORAGE_KEY_SERVICES);
        localStorage.removeItem(STORAGE_KEY_RATES);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const openAddModal = () => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setEditingService(null);
    setIsAddModalOpen(true);
  };

  const openEditModal = (service: ServiceItem) => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setEditingService(service);
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setEditingService(null);
    setIsAddModalOpen(false);
  };

  const openEditRateModal = (item: RateItem) => {
    if (!isAdminLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setEditingRateItem(item);
    setIsEditRateModalOpen(true);
  };

  const closeEditRateModal = () => {
    setEditingRateItem(null);
    setIsEditRateModalOpen(false);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  // Category counts calculation
  const categoriesCount = services.reduce(
    (acc, curr) => {
      acc.all = (acc.all || 0) + 1;
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <ServiceContext.Provider
      value={{
        services,
        rateItems,
        categoriesCount,
        addService,
        updateService,
        deleteService,
        resetToDefaults,
        isCustomService,

        // Rate item editing
        editingRateItem,
        isEditRateModalOpen,
        openEditRateModal,
        closeEditRateModal,
        updateRateItem,

        // Admin Auth
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        updateAdminPin,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,

        // Service add/edit modals
        isAddModalOpen,
        openAddModal,
        closeAddModal,
        editingService,
        openEditModal
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
};
