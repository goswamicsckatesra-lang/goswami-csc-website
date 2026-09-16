export type ServiceCategory = 
  | 'all'
  | 'certificates'
  | 'id_cards'
  | 'schemes'
  | 'online_forms'
  | 'utility_printing';

export interface ServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: ServiceCategory;
  price: string;
  popular?: boolean;
  descriptionHi: string;
  descriptionEn: string;
  requiredDocsHi: string[];
  icon: string;
}

export interface RateItem {
  id: string;
  serviceHi: string;
  serviceEn: string;
  rate: string;
  category: ServiceCategory;
  noteHi?: string;
  isPopular?: boolean;
}

export interface WhyChooseItem {
  id: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  icon: string;
}

export interface StepItem {
  step: number;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  tipHi: string;
}

export interface ContactFormData {
  name: string;
  mobile: string;
  service: string;
  message: string;
}
