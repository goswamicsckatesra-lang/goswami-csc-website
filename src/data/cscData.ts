import { ServiceCategory, ServiceItem, RateItem, WhyChooseItem, StepItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Goswami CSC Centre',
  nameHi: 'गोस्वामी सीएससी केंद्र',
  ownerName: 'Rishi Goswami',
  ownerRole: 'CSC VLE Owner',
  tagline: 'आपका अपना डिजिटल सेवा केंद्र',
  taglineEn: 'Your Trusted Local Digital Service Centre',
  cscId: '566337450012',
  mobile: '8814099240',
  formattedMobile: '+91 88140 99240',
  address: 'VPO Katesra, Main Govt. School Wali Gali, District Rohtak, Haryana – 124113',
  addressDetailed: 'VPO Katesra, Main School Wali Gali, Tehsil Kalanaur, District Rohtak, Haryana Pin-124113',
  addressShort: 'VPO Katesra, Rohtak, Haryana',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Govt+School+Katesra+Rohtak+Haryana+124113',
  whatsappUrl: 'https://wa.me/918814099240',
  email: 'goswamicsckatesra@gmail.com',
  bannerImg: '/banner.jpg',
  motto: 'एक ही छत के नीचे सभी डिजिटल सेवाएं',
  slogan: 'DIGITAL SEVA • SABKA VIKAS • SABKA SAATH',
  workingHours: 'सोमवार - शनिवार: 8:30 AM - 7:30 PM | रविवार: 9:00 AM - 2:00 PM',
  workingHoursEn: 'Mon - Sat: 8:30 AM - 7:30 PM | Sun: 9:00 AM - 2:00 PM',
  aboutText:
    'Goswami CSC Centre एक स्थानीय डिजिटल सेवा केंद्र है जहां नागरिकों को विभिन्न सरकारी, ऑनलाइन और डिजिटल सेवाओं के लिए सहायता प्रदान की जाती है। हमारा उद्देश्य लोगों को सुविधाजनक, सरल और भरोसेमंद डिजिटल सेवाएं एक ही स्थान पर उपलब्ध कराना है।',
  aboutTextEn:
    'Goswami CSC Centre is a local digital service assistance centre providing citizens with support for various government, online, and digital public utilities. Our mission is to make modern digital services convenient, hassle-free, transparent, and dependable under one roof.',
  rateListFootnote:
    '*जहां सरकारी शुल्क ₹0 (Free) हो, वहां ग्राहक से केवल लागू सेवा/सहायता शुल्क ही लिया जाए। सरकारी शुल्क सेवा के अनुसार अलग हो सकता है।',
  documentsDisclaimer:
    'सेवा के अनुसार आवश्यक दस्तावेज अलग-अलग हो सकते हैं। आवेदन करने से पहले CSC Centre से आवश्यक दस्तावेजों की जानकारी प्राप्त करें।',
  privacyNotice:
    'गोपनीयता सूचना: हम कोई भी अत्यंत गोपनीय डेटा जैसे आधार OTP, बैंक पिन या पासवर्ड वेबसाइट पर स्टोर या मांगते नहीं हैं। आपका डेटा पूर्णतः सुरक्षित एवं निजी है।'
};

export const CATEGORIES: { id: ServiceCategory; nameHi: string; nameEn: string; count: number }[] = [
  { id: 'all', nameHi: 'सभी सेवाएं', nameEn: 'All Services', count: 27 },
  { id: 'certificates', nameHi: 'सरकारी प्रमाण पत्र', nameEn: 'Govt. Certificates', count: 7 },
  { id: 'id_cards', nameHi: 'पहचान व कार्ड', nameEn: 'Identity & Cards', count: 4 },
  { id: 'schemes', nameHi: 'सरकारी योजनाएं', nameEn: 'Govt. Schemes', count: 5 },
  { id: 'online_forms', nameHi: 'ऑनलाइन फॉर्म व नौकरी', nameEn: 'Online Forms & Jobs', count: 6 },
  { id: 'utility_printing', nameHi: 'प्रिंटिंग व बिल भुगतान', nameEn: 'Printing & Utilities', count: 5 },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'pan-new',
    titleHi: 'PAN Card Application',
    titleEn: 'PAN Card Application',
    category: 'id_cards',
    price: '₹200',
    popular: true,
    descriptionHi: 'नया पैन कार्ड आवेदन (डिजिटल ई-केवाईसी व फिजिकल कार्ड आपके पते पर)।',
    descriptionEn: 'New PAN Card application with physical card delivered to your home address.',
    requiredDocsHi: ['आधार कार्ड', '2 पासपोर्ट साइज फोटो', 'मोबाइल नंबर (आधार लिंक)'],
    icon: 'CreditCard'
  },
  {
    id: 'pan-correction',
    titleHi: 'PAN Card Correction',
    titleEn: 'PAN Card Correction',
    category: 'id_cards',
    price: '₹200',
    popular: false,
    descriptionHi: 'पैन कार्ड में नाम, जन्मतिथि, पिता का नाम या फोटो संशोधन व सुधार कार्य।',
    descriptionEn: 'Update or correct name, date of birth, father name, or photo on PAN card.',
    requiredDocsHi: ['पुराना पैन कार्ड कॉपी', 'आधार कार्ड', 'संशोधन के लिए मान्य प्रमाण'],
    icon: 'FileEdit'
  },
  {
    id: 'income-cert',
    titleHi: 'Income Certificate',
    titleEn: 'Income Certificate',
    category: 'certificates',
    price: '₹100',
    popular: true,
    descriptionHi: 'सरल हरियाणा पोर्टल के माध्यम से अधिकृत आय प्रमाण पत्र आवेदन व जारी।',
    descriptionEn: 'Online application for verified income certificate via Haryana Saral Portal.',
    requiredDocsHi: ['परिवार पहचान पत्र (Family ID / PPP)', 'आधार कार्ड', 'स्व-घोषणा पत्र / पटवारी रिपोर्ट'],
    icon: 'FileSpreadsheet'
  },
  {
    id: 'caste-cert',
    titleHi: 'OBC/BC Certificate',
    titleEn: 'OBC/BC Certificate',
    category: 'certificates',
    price: '₹100',
    popular: true,
    descriptionHi: 'अन्य पिछड़ा वर्ग (OBC / BC-A / BC-B) जाति प्रमाण पत्र ऑनलाइन आवेदन।',
    descriptionEn: 'Official backward class / OBC certificate application for education and jobs.',
    requiredDocsHi: ['Family ID (PPP)', 'आधार कार्ड', 'पिता/रिश्तेदार का पुराना जाति प्रमाण'],
    icon: 'ShieldCheck'
  },
  {
    id: 'domicile-cert',
    titleHi: 'Residence/Domicile Certificate',
    titleEn: 'Residence/Domicile Certificate',
    category: 'certificates',
    price: '₹100',
    popular: true,
    descriptionHi: 'हरियाणा मूल निवास / रिहायशी प्रमाण पत्र (Haryana Resident Certificate)।',
    descriptionEn: 'Haryana permanent residence / domicile certificate assistance.',
    requiredDocsHi: ['परिवार पहचान पत्र (PPP)', 'आधार कार्ड', 'वोटर कार्ड / बिजली बिल / पुराना रिकॉर्ड'],
    icon: 'Home'
  },
  {
    id: 'birth-cert',
    titleHi: 'Birth Certificate',
    titleEn: 'Birth Certificate',
    category: 'certificates',
    price: '₹100',
    popular: false,
    descriptionHi: 'जन्म प्रमाण पत्र ऑनलाइन आवेदन, सत्यापन एवं डिजिटल डाउनलोड सहायता।',
    descriptionEn: 'Birth certificate new application, correction, and digital copy download.',
    requiredDocsHi: ['अस्पताल से मिला जन्म पर्चा / डिस्चार्ज स्लिप', 'माता-पिता का आधार कार्ड', 'Family ID'],
    icon: 'Baby'
  },
  {
    id: 'death-cert',
    titleHi: 'Death Certificate',
    titleEn: 'Death Certificate',
    category: 'certificates',
    price: '₹100',
    popular: false,
    descriptionHi: 'मृत्यु प्रमाण पत्र ऑनलाइन आवेदन व आधिकारिक नकल निकलवाने में सहायता।',
    descriptionEn: 'Online registration and issuance assistance for official death certificates.',
    requiredDocsHi: ['अस्पताल / श्मशान घाट रसीद', 'मृतक का आधार', 'आवेदक का आधार व Family ID'],
    icon: 'FileText'
  },
  {
    id: 'ews-cert',
    titleHi: 'EWS Certificate',
    titleEn: 'EWS Certificate',
    category: 'certificates',
    price: '₹100',
    popular: true,
    descriptionHi: 'सामान्य वर्ग के आर्थिक रूप से कमजोर नागरिकों के लिए EWS प्रमाण पत्र।',
    descriptionEn: 'Economically Weaker Section (EWS) certificate for central & state quotas.',
    requiredDocsHi: ['Family ID (हरियाणा PPP)', 'आधार कार्ड', 'आय व संपत्ति स्व-घोषणा पत्र'],
    icon: 'Award'
  },
  {
    id: 'ration-card',
    titleHi: 'Ration Card Related Work',
    titleEn: 'Ration Card Related Work',
    category: 'schemes',
    price: '₹100',
    popular: true,
    descriptionHi: 'राशन कार्ड डाउनलोड (BPL / AAY / APL), नाम जोड़ना, हटाना व सुधार कार्य।',
    descriptionEn: 'BPL/AAY ration card check, status enquiry, member update, and download.',
    requiredDocsHi: ['Family ID (PPP)', 'आधार कार्ड (सभी सदस्यों का)', 'पुराना राशन कार्ड नंबर'],
    icon: 'ShoppingBag'
  },
  {
    id: 'family-id-ppp',
    titleHi: 'Family ID / PPP Work',
    titleEn: 'Family ID / PPP Work',
    category: 'id_cards',
    price: '₹30–₹50',
    popular: true,
    descriptionHi: 'हरियाणा परिवार पहचान पत्र (PPP) में नया सदस्य जोड़ना, सुधार, व प्रिंट।',
    descriptionEn: 'Haryana Parivar Pehchan Patra creation, updates, verification, and print.',
    requiredDocsHi: ['सभी सदस्यों के आधार कार्ड', 'बैंक खाता विवरण', 'मोबाइल नंबर (OTP सत्यापन)'],
    icon: 'Users'
  },
  {
    id: 'voter-id',
    titleHi: 'Voter ID Application/Correction',
    titleEn: 'Voter ID Application/Correction',
    category: 'id_cards',
    price: '₹30–₹50',
    popular: false,
    descriptionHi: 'नया मतदाता पहचान पत्र आवेदन, पता व नाम सुधार तथा डिजिटल ई-एपिक डाउनलोड।',
    descriptionEn: 'Form 6 new voter registration, Form 8 correction, and e-EPIC download.',
    requiredDocsHi: ['आधार कार्ड / जन्म प्रमाण', 'पासपोर्ट फोटो', 'परिवार के किसी सदस्य का वोटर कार्ड'],
    icon: 'Vote'
  },
  {
    id: 'form-filling',
    titleHi: 'Online Form Filling',
    titleEn: 'Online Form Filling',
    category: 'online_forms',
    price: '₹30–₹100',
    popular: true,
    descriptionHi: 'स्कूल, कॉलेज एडमिशन, छात्रवृत्ति एवं विभिन्न सरकारी व गैर-सरकारी फॉर्म भरना।',
    descriptionEn: 'Fast & error-free online admission, scholarship, and educational forms.',
    requiredDocsHi: ['शैक्षणिक दस्तावेज (मार्कशीट)', 'आधार कार्ड', 'फोटो व हस्ताक्षर'],
    icon: 'FileCheck2'
  },
  {
    id: 'job-application',
    titleHi: 'Online Job Application',
    titleEn: 'Online Job Application',
    category: 'online_forms',
    price: '₹50–₹100',
    popular: true,
    descriptionHi: 'HSSC, CET, SSC, UPSC, रेलवे, पुलिस, आर्मी, बैंक आदि के ऑनलाइन भर्ती फॉर्म।',
    descriptionEn: 'Recruitment applications for HSSC, CET Haryana, SSC, Defense, Railways & Banks.',
    requiredDocsHi: ['10वीं/12वीं/ग्रेजुएशन मार्कशीट', 'आधार कार्ड', 'जाति/निवास प्रमाण', 'फोटो व साइन'],
    icon: 'Briefcase'
  },
  {
    id: 'admit-card',
    titleHi: 'Admit Card Download/Print',
    titleEn: 'Admit Card Download/Print',
    category: 'online_forms',
    price: '₹20–₹30',
    popular: false,
    descriptionHi: 'सभी प्रतियोगी व शैक्षणिक परीक्षाओं के प्रवेश पत्र तुरंत डाउनलोड व स्पष्ट प्रिंट।',
    descriptionEn: 'Quick hall ticket & admit card search, download, and clean crisp printing.',
    requiredDocsHi: ['रजिस्ट्रेशन नंबर / रोल नंबर', 'जन्मतिथि / पासवर्ड'],
    icon: 'Download'
  },
  {
    id: 'result-print',
    titleHi: 'Result Download/Print',
    titleEn: 'Result Download/Print',
    category: 'online_forms',
    price: '₹20–₹30',
    popular: false,
    descriptionHi: 'बोर्ड, यूनिवर्सिटी, कॉलेज एवं सरकारी परीक्षाओं के परिणाम देखना व कलर/BW प्रिंट।',
    descriptionEn: 'Exam scorecard check and official result printout on quality paper.',
    requiredDocsHi: ['रोल नंबर', 'माता/पिता का नाम या रजिस्ट्रेशन नंबर'],
    icon: 'FileBarChart'
  },
  {
    id: 'passport-assistance',
    titleHi: 'Passport Application Assistance',
    titleEn: 'Passport Application Assistance',
    category: 'online_forms',
    price: '₹100+',
    popular: false,
    descriptionHi: 'नया भारतीय पासपोर्ट ऑनलाइन आवेदन, अपॉइंटमेंट स्लॉट बुकिंग एवं दस्तावेज जांच।',
    descriptionEn: 'End-to-end guidance for fresh passport or renewal & appointment scheduling.',
    requiredDocsHi: ['आधार कार्ड', '10वीं कक्षा प्रमाण पत्र', 'पैन कार्ड / वोटर कार्ड', 'बैंक पासबुक'],
    icon: 'Plane'
  },
  {
    id: 'pm-kisan',
    titleHi: 'PM Kisan Registration/Work',
    titleEn: 'PM Kisan Registration/Work',
    category: 'schemes',
    price: '₹20–₹50',
    popular: true,
    descriptionHi: 'प्रधानमंत्री किसान सम्मान निधि नया पंजीकरण, e-KYC एवं किस्त स्टेटस जांच।',
    descriptionEn: 'PM Kisan Samman Nidhi registration, Aadhaar biometric e-KYC, and installment status.',
    requiredDocsHi: ['आधार कार्ड', 'जमीन की जमाबंदी / फर्द', 'बैंक पासबुक (Aadhaar Seeded)'],
    icon: 'Wheat'
  },
  {
    id: 'ayushman-card',
    titleHi: 'Ayushman Card',
    titleEn: 'Ayushman Card',
    category: 'schemes',
    price: '₹50',
    popular: true,
    descriptionHi: 'आयुष्मान भारत - चिरायु हरियाणा ₹5 लाख मुफ्त इलाज कार्ड ई-केवाईसी व डाउनलोड।',
    descriptionEn: 'Ayushman Bharat PM-JAY / Chirayu Haryana card e-KYC verification & print.',
    requiredDocsHi: ['Family ID (PPP)', 'आधार कार्ड (ओटीपी या बायोमेट्रिक हेतु)'],
    icon: 'HeartPulse'
  },
  {
    id: 'eshram-card',
    titleHi: 'e-Shram Registration',
    titleEn: 'e-Shram Registration',
    category: 'schemes',
    price: '₹50',
    popular: false,
    descriptionHi: 'असंगठित क्षेत्र के कामगारों व श्रमिकों के लिए ई-श्रम कार्ड पंजीकरण व प्रिंट।',
    descriptionEn: 'e-Shram card registration for informal sector workers with UAN card print.',
    requiredDocsHi: ['आधार कार्ड', 'बैंक खाता नंबर व IFSC', 'आधार लिंक मोबाइल'],
    icon: 'HardHat'
  },
  {
    id: 'pm-vishwakarma',
    titleHi: 'PM Vishwakarma Registration',
    titleEn: 'PM Vishwakarma Registration',
    category: 'schemes',
    price: 'Free*',
    popular: true,
    descriptionHi: 'पारंपरिक शिल्पकारों व कारीगरों के लिए सरकारी योजना का निःशुल्क पंजीकरण सहायता।',
    descriptionEn: 'Official government scheme registration support for traditional artisans & trades.',
    requiredDocsHi: ['आधार कार्ड', 'बैंक पासबुक', 'व्यवसाय/टूल संबंधी विवरण', 'Family ID'],
    icon: 'Wrench'
  },
  {
    id: 'bill-payment',
    titleHi: 'Bill Payment',
    titleEn: 'Bill Payment',
    category: 'utility_printing',
    price: '₹10–₹20',
    popular: false,
    descriptionHi: 'UHBVN/DHBVN बिजली बिल, पानी बिल, मोबाइल व डीटीएच रिचार्ज तुरंत भुगतान।',
    descriptionEn: 'Instant electricity, water, gas bills payment with instant digital receipt.',
    requiredDocsHi: ['बिल खाता संख्या (Account No. / Consumer ID)'],
    icon: 'Receipt'
  },
  {
    id: 'online-payment-assist',
    titleHi: 'Online Payment Assistance',
    titleEn: 'Online Payment Assistance',
    category: 'utility_printing',
    price: '₹10–₹20',
    popular: false,
    descriptionHi: 'चालान, सरकारी फीस, कोर्ट फीस, कॉलेज फीस या किसी भी ऑनलाइन भुगतान में सहायता।',
    descriptionEn: 'Safe digital payment assistance for court challans, exam fees & govt dues.',
    requiredDocsHi: ['चालान या पेमेंट नोटिस / चालान संख्या'],
    icon: 'Wallet'
  },
  {
    id: 'bw-print',
    titleHi: 'B/W Print',
    titleEn: 'B/W Print',
    category: 'utility_printing',
    price: '₹5/page',
    popular: false,
    descriptionHi: 'हाई-क्वालिटी लेजर ब्लैक एंड व्हाइट प्रिंटआउट (सिंगल या बोथ साइड)।',
    descriptionEn: 'High-speed clean laser monochrome printouts on premium 75 GSM paper.',
    requiredDocsHi: ['पेनड्राइव, व्हाट्सएप या ईमेल द्वारा डॉक्यूमेंट'],
    icon: 'Printer'
  },
  {
    id: 'colour-print',
    titleHi: 'Colour Print',
    titleEn: 'Colour Print',
    category: 'utility_printing',
    price: '₹10–₹20/page',
    popular: false,
    descriptionHi: 'चमकीला और स्पष्ट एचडी कलर प्रिंट (दस्तावेज, प्रमाण पत्र, प्रोजेक्ट फाइल)।',
    descriptionEn: 'HD vibrant color prints for certificates, documents, projects & official papers.',
    requiredDocsHi: ['डॉक्यूमेंट फाइल (PDF, JPG, Docx)'],
    icon: 'Palette'
  },
  {
    id: 'scan-service',
    titleHi: 'Scan',
    titleEn: 'Scan',
    category: 'utility_printing',
    price: '₹10/page',
    popular: false,
    descriptionHi: 'हाई रेजोल्यूशन 300/600 DPI डॉक्यूमेंट व फोटो स्कैनिंग (PDF/JPG फॉर्मेट)।',
    descriptionEn: 'High-clarity optical scanner up to 600 DPI sent straight to your phone or email.',
    requiredDocsHi: ['ओरिजिनल दस्तावेज जिसे स्कैन कराना हो'],
    icon: 'ScanLine'
  },
  {
    id: 'photo-service',
    titleHi: 'Photo',
    titleEn: 'Photo',
    category: 'utility_printing',
    price: '₹30–₹50',
    popular: true,
    descriptionHi: 'अर्जेंट पासपोर्ट साइज फोटो (व्हाइट/ब्लू बैकग्राउंड, 5 मिनट में तैयार)।',
    descriptionEn: 'Urgent passport size color photos with professional retouching in 5 minutes.',
    requiredDocsHi: ['केंद्र पर उपस्थिति या साफ सेल्फी'],
    icon: 'Camera'
  },
  {
    id: 'lamination-service',
    titleHi: 'Lamination',
    titleEn: 'Lamination',
    category: 'utility_printing',
    price: '₹20–₹50',
    popular: false,
    descriptionHi: 'आधार कार्ड, वोटर कार्ड, मार्कशीट व सभी दस्तावेजों की सुरक्षित हॉट लेमिनेशन।',
    descriptionEn: 'Heavy duty protective glossy lamination for ID cards and degree marksheets.',
    requiredDocsHi: ['दस्तावेज / कार्ड'],
    icon: 'Layers'
  },
];

export const RATE_LIST: RateItem[] = [
  { id: 'r1', serviceHi: 'PAN Card Application', serviceEn: 'PAN Card Application', rate: '₹200', category: 'id_cards', isPopular: true },
  { id: 'r2', serviceHi: 'PAN Correction', serviceEn: 'PAN Correction', rate: '₹200', category: 'id_cards' },
  { id: 'r3', serviceHi: 'Income Certificate', serviceEn: 'Income Certificate', rate: '₹100', category: 'certificates', isPopular: true },
  { id: 'r4', serviceHi: 'OBC/BC Certificate', serviceEn: 'OBC/BC Certificate', rate: '₹100', category: 'certificates', isPopular: true },
  { id: 'r5', serviceHi: 'Residence/Domicile Certificate', serviceEn: 'Residence/Domicile Certificate', rate: '₹100', category: 'certificates', isPopular: true },
  { id: 'r6', serviceHi: 'Birth Certificate Application', serviceEn: 'Birth Certificate Application', rate: '₹100', category: 'certificates' },
  { id: 'r7', serviceHi: 'Death Certificate Application', serviceEn: 'Death Certificate Application', rate: '₹100', category: 'certificates' },
  { id: 'r8', serviceHi: 'EWS Certificate', serviceEn: 'EWS Certificate', rate: '₹100', category: 'certificates', isPopular: true },
  { id: 'r9', serviceHi: 'Ration Card Related Work', serviceEn: 'Ration Card Related Work', rate: '₹100', category: 'schemes', isPopular: true },
  { id: 'r10', serviceHi: 'Family ID / PPP Work', serviceEn: 'Family ID / PPP Work', rate: '₹30–₹50', category: 'id_cards', isPopular: true },
  { id: 'r11', serviceHi: 'Voter ID Application/Correction', serviceEn: 'Voter ID Application/Correction', rate: '₹30–₹50', category: 'id_cards' },
  { id: 'r12', serviceHi: 'Online Form Filling', serviceEn: 'Online Form Filling', rate: '₹30–₹100', category: 'online_forms', isPopular: true },
  { id: 'r13', serviceHi: 'Online Job Application', serviceEn: 'Online Job Application', rate: '₹50–₹100', category: 'online_forms', isPopular: true },
  { id: 'r14', serviceHi: 'Admit Card Download/Print', serviceEn: 'Admit Card Download/Print', rate: '₹20–₹30', category: 'online_forms' },
  { id: 'r15', serviceHi: 'Result Download/Print', serviceEn: 'Result Download/Print', rate: '₹20–₹30', category: 'online_forms' },
  { id: 'r16', serviceHi: 'Passport Application Assistance', serviceEn: 'Passport Application Assistance', rate: '₹100+', category: 'online_forms' },
  { id: 'r17', serviceHi: 'PM Kisan Registration/Work', serviceEn: 'PM Kisan Registration/Work', rate: '₹20–₹50', category: 'schemes', isPopular: true },
  { id: 'r18', serviceHi: 'Ayushman Card', serviceEn: 'Ayushman Card', rate: '₹50', category: 'schemes', isPopular: true },
  { id: 'r19', serviceHi: 'e-Shram Registration', serviceEn: 'e-Shram Registration', rate: '₹50', category: 'schemes' },
  { id: 'r20', serviceHi: 'PM Vishwakarma Registration', serviceEn: 'PM Vishwakarma Registration', rate: 'Free*', category: 'schemes', noteHi: 'निःशुल्क पंजीकरण सहायता', isPopular: true },
  { id: 'r21', serviceHi: 'Bill Payment', serviceEn: 'Bill Payment', rate: '₹10–₹20', category: 'utility_printing' },
  { id: 'r22', serviceHi: 'Online Payment Assistance', serviceEn: 'Online Payment Assistance', rate: '₹10–₹20', category: 'utility_printing' },
  { id: 'r23', serviceHi: 'B/W Print', serviceEn: 'B/W Print', rate: '₹5/page', category: 'utility_printing' },
  { id: 'r24', serviceHi: 'Colour Print', serviceEn: 'Colour Print', rate: '₹10–₹20/page', category: 'utility_printing' },
  { id: 'r25', serviceHi: 'Scan', serviceEn: 'Scan', rate: '₹10/page', category: 'utility_printing' },
  { id: 'r26', serviceHi: 'Photo', serviceEn: 'Photo', rate: '₹30–₹50', category: 'utility_printing', noteHi: 'पासपोर्ट साइज', isPopular: true },
  { id: 'r27', serviceHi: 'Lamination', serviceEn: 'Lamination', rate: '₹20–₹50', category: 'utility_printing' },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'speed',
    titleHi: 'तेज सेवा',
    titleEn: 'Fast & Prompt Service',
    descHi: 'समय पर और त्वरित सहायता ताकि आपका कीमती समय बचे और कार्य बिना देरी पूरा हो सके।',
    descEn: 'Prompt turnaround and minimal waiting so your important tasks are completed without delay.',
    icon: 'Zap'
  },
  {
    id: 'security',
    titleHi: 'सुरक्षित प्रक्रिया',
    titleEn: 'Safe & Secure Process',
    descHi: 'आपके दस्तावेजों और व्यक्तिगत जानकारी की गोपनीयता व सुरक्षा हमारी सर्वोच्च प्राथमिकता है।',
    descEn: 'Strict privacy protocols ensuring your personal data and documents remain fully confidential.',
    icon: 'ShieldCheck'
  },
  {
    id: 'accuracy',
    titleHi: 'सही जानकारी',
    titleEn: 'Accurate Information',
    descHi: 'सरकारी योजनाओं, आवश्यक दस्तावेजों व पात्रता की सटीक एवं स्पष्ट मार्गदर्शन सुविधा।',
    descEn: 'Clear eligibility checks and error-free form filling with zero guesswork.',
    icon: 'CheckCircle2'
  },
  {
    id: 'accessibility',
    titleHi: 'सभी के लिए डिजिटल सुविधा',
    titleEn: 'Digital Access For Everyone',
    descHi: 'ग्रामीण और स्थानीय नागरिकों के लिए डिजिटल सेवाओं को बेहद सरल व सुलभ बनाना।',
    descEn: 'Bringing modern digital governance right to the doorstep of village Katesra and Rohtak residents.',
    icon: 'Smile'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 1,
    titleHi: 'सेवा चुनें',
    titleEn: 'Choose Your Service',
    descHi: 'हमारी सेवा सूची या रेट लिस्ट में से आवश्यक सेवा चुनें या WhatsApp/कॉल पर परामर्श लें।',
    descEn: 'Select the required service from our catalog or consult us directly on WhatsApp.',
    tipHi: 'रेट लिस्ट से पारदर्शी दरें पहले ही जान लें'
  },
  {
    step: 2,
    titleHi: 'आवश्यक दस्तावेज लेकर आएं',
    titleEn: 'Bring Required Documents',
    descHi: 'केंद्र पर आते समय जरूरी मूल दस्तावेज (जैसे आधार कार्ड, फैमिली आईडी, फोटो आदि) साथ लाएं।',
    descEn: 'Bring valid documents (Aadhaar, Family ID, photos) or send clear copies on WhatsApp.',
    tipHi: 'दस्तावेजों की लिस्ट WhatsApp पर भी पूछ सकते हैं'
  },
  {
    step: 3,
    titleHi: 'आवेदन/सेवा पूरी करें',
    titleEn: 'Application Completed & Receipt',
    descHi: 'हमारा प्रशिक्षित ऑपरेटर आपका फॉर्म भरेगा और आपको आधिकारिक पावती रसीद व प्रिंट देगा।',
    descEn: 'We process the application accurately and hand you the official acknowledgement receipt.',
    tipHi: 'आधिकारिक रसीद व स्टेटस ट्रैकिंग नंबर अवश्य प्राप्त करें'
  }
];

export const GENERAL_DOCUMENTS_INFO = [
  {
    titleHi: 'पहचान व निवास प्रमाण',
    titleEn: 'Identity & Address Proof',
    items: ['आधार कार्ड (Aadhaar Card)', 'परिवार पहचान पत्र (Family ID / PPP - हरियाणा)', 'वोटर पहचान पत्र (Voter Card)']
  },
  {
    titleHi: 'शैक्षणिक व आय दस्तावेज',
    titleEn: 'Education & Income Proof',
    items: ['10वीं / 12वीं / डिग्री मार्कशीट (नौकरी व फॉर्म हेतु)', 'पटवारी / स्व-घोषणा आय प्रमाण', 'पुराना जाति प्रमाण पत्र (यदि लागू हो)']
  },
  {
    titleHi: 'अन्य जरूरी आवश्यकताएं',
    titleEn: 'Other Essentials',
    items: ['आधार से लिंक चालू मोबाइल नंबर (OTP सत्यापन के लिए)', 'हाल की रंगीन पासपोर्ट साइज फोटो', 'बैंक पासबुक / कैंसल चेक (योजनाओं व सब्सिडी के लिए)']
  }
];
