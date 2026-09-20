import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const STORAGE_KEY = "verdantpaws-lang";

type Dict = Record<string, { en: string; hi: string }>;

const dict: Dict = {
  // Navigation
  "nav.home": { en: "Home", hi: "होम" },
  "nav.services": { en: "Services", hi: "सेवाएँ" },
  "nav.team": { en: "Team", hi: "टीम" },
  "nav.book": { en: "Book", hi: "बुक करें" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  "nav.about": { en: "About", hi: "हमारे बारे में" },
  "nav.plans": { en: "Plans", hi: "प्लान्स" },
  "nav.pricing": { en: "Pricing", hi: "मूल्य" },
  "nav.gallery": { en: "Gallery", hi: "गैलरी" },
  "nav.blog": { en: "Journal", hi: "ब्लॉग" },
  "nav.faq": { en: "FAQ", hi: "सवाल-जवाब" },
  "nav.community": { en: "Community", hi: "समुदाय" },
  "nav.conditions": { en: "Conditions", hi: "रोग सूची" },
  "nav.diagnostics": { en: "Diagnostics", hi: "डायग्नोस्टिक्स" },
  "nav.emergency": { en: "Emergency", hi: "इमरजेंसी" },
  "nav.testimonials": { en: "Stories", hi: "कहानियाँ" },
  "nav.policies": { en: "Policies", hi: "नीतियाँ" },
  "nav.more": { en: "More", hi: "और" },

  // Common
  "cta.book": { en: "Book on WhatsApp", hi: "WhatsApp पर बुक करें" },
  "cta.bookShort": { en: "Book", hi: "बुक करें" },
  "cta.call": { en: "Call clinic", hi: "क्लिनिक कॉल करें" },
  "cta.callEmergency": { en: "Emergency 24/7", hi: "इमरजेंसी 24/7" },
  "cta.directions": { en: "Directions", hi: "रास्ता" },
  "cta.viewAll": { en: "View all", hi: "सभी देखें" },
  "cta.viewMore": { en: "Read more", hi: "और पढ़ें" },
  "cta.exploreServices": { en: "Explore all services", hi: "सभी सेवाएँ देखें" },
  "cta.meetTeam": { en: "Meet the full team", hi: "पूरी टीम से मिलें" },
  "cta.comparePlans": { en: "Compare wellness plans", hi: "वेलनेस प्लान्स तुलना करें" },
  "cta.openGallery": { en: "Open the gallery", hi: "गैलरी खोलें" },
  "cta.readJournal": { en: "Read the journal", hi: "ब्लॉग पढ़ें" },
  "cta.allConditions": { en: "See all conditions", hi: "सभी रोग देखें" },
  "cta.exploreDiagnostics": { en: "Explore diagnostics", hi: "डायग्नोस्टिक्स देखें" },
  "cta.allStories": { en: "Read all stories", hi: "सभी कहानियाँ पढ़ें" },
  "cta.communityWork": { en: "Our community work", hi: "हमारा सामुदायिक काम" },
  "cta.planVisit": { en: "Plan your visit", hi: "विज़िट प्लान करें" },
  "cta.moreQuestions": { en: "More questions", hi: "और सवाल" },
  "cta.fullPriceList": { en: "Full price list", hi: "पूरी मूल्य सूची" },
  "cta.learnMore": { en: "Learn more about us", hi: "हमारे बारे में और जानें" },
  "cta.bookService": { en: "Book this service", hi: "यह सेवा बुक करें" },
  "cta.bookWith": { en: "Book with this vet", hi: "इस डॉक्टर से बुक करें" },

  // Hero
  "hero.eyebrow": { en: "Premium Veterinary Care · Gurgaon", hi: "प्रीमियम वेटरिनरी केयर · गुड़गांव" },
  "hero.title.a": { en: "Calm clinic.", hi: "शांत क्लिनिक।" },
  "hero.title.b": { en: "Modern medicine.", hi: "आधुनिक चिकित्सा।" },
  "hero.title.c": { en: "Genuinely warm hands.", hi: "सच में गर्मजोशी भरे हाथ।" },
  "hero.sub": {
    en: "From a wagging puppy's first vaccine to your senior cat's hundredth nap on our exam table — Verdant Paws cares for every life-stage with intention.",
    hi: "एक पिल्ले की पहली वैक्सीन से लेकर आपकी सीनियर बिल्ली की सौवीं झपकी तक — वर्डेंट पॉज़ हर पड़ाव की देखभाल पूरे ध्यान से करता है।",
  },
  "hero.openNow": { en: "Open now", hi: "अभी खुले हैं" },
  "hero.closesAt": { en: "Closes at", hi: "बंद होगा" },
  "hero.opensAt": { en: "Opens at", hi: "खुलेगा" },
  "hero.closed": { en: "Closed today", hi: "आज बंद" },

  // Sections
  "sec.about": { en: "About Verdant Paws", hi: "वर्डेंट पॉज़ के बारे में" },
  "sec.aboutLead": {
    en: "We opened our doors in 2018 with a single conviction — that pet medicine could feel modern, transparent and reassuringly warm at the same time. Eight years and over 8,400 patients later, that conviction is now a clinic culture.",
    hi: "हमने 2018 में एक ही विश्वास के साथ अपने दरवाज़े खोले — कि पेट मेडिसिन एक साथ आधुनिक, पारदर्शी और गर्मजोशी भरी हो सकती है। आठ साल और 8,400 से ज़्यादा मरीज़ों के बाद, यह विश्वास अब हमारे क्लिनिक की संस्कृति है।",
  },
  "sec.services": { en: "Services that fit every life-stage", hi: "हर पड़ाव के लिए सेवाएँ" },
  "sec.servicesLead": { en: "From routine to rare — handled with the same care.", hi: "रूटीन से दुर्लभ तक — एक जैसी देखभाल के साथ।" },
  "sec.team": { en: "Meet the people behind the care", hi: "देखभाल के पीछे के लोग" },
  "sec.teamLead": { en: "Three vets, three quiet superpowers, one shared philosophy.", hi: "तीन वेट्स, तीन शांत महाशक्तियाँ, एक साझा सोच।" },
  "sec.plans": { en: "Wellness, simplified into a plan", hi: "वेलनेस, एक प्लान में सरल" },
  "sec.plansLead": { en: "One annual fee. Predictable care. Real savings.", hi: "एक वार्षिक फीस। पूर्वानुमेय देखभाल। असली बचत।" },
  "sec.pets": { en: "Pets we treat", hi: "जिनका हम इलाज करते हैं" },
  "sec.petsLead": { en: "Companion animals of every shape and pace.", hi: "हर आकार और रफ्तार के साथी जानवर।" },
  "sec.conditions": { en: "Conditions we manage every week", hi: "हर हफ्ते देखी जाने वाली स्थितियाँ" },
  "sec.diagnostics": { en: "Same-day, on-site diagnostics", hi: "एक ही दिन में, साइट पर डायग्नोस्टिक्स" },
  "sec.diagnosticsLead": { en: "We don't send you across the city for an answer.", hi: "जवाब के लिए हम आपको शहर भर नहीं दौड़ाते।" },
  "sec.stats": { en: "Eight years, in numbers", hi: "आठ साल, संख्या में" },
  "sec.testimonials": { en: "What pet parents are saying", hi: "पेट पैरेंट्स क्या कहते हैं" },
  "sec.blog": { en: "From our journal", hi: "हमारे ब्लॉग से" },
  "sec.community": { en: "Care beyond the clinic walls", hi: "क्लिनिक की दीवारों के परे देखभाल" },
  "sec.gallery": { en: "Inside Verdant Paws", hi: "वर्डेंट पॉज़ के अंदर" },
  "sec.area": { en: "We serve neighborhoods across Gurgaon", hi: "हम पूरे गुड़गांव में सेवाएं देते हैं" },
  "sec.faq": { en: "Frequently asked", hi: "अक्सर पूछे गए" },
  "sec.pricing": { en: "Honest, transparent pricing", hi: "ईमानदार, पारदर्शी मूल्य" },
  "sec.cta": { en: "Ready to book?", hi: "बुक करने को तैयार?" },
  "sec.ctaSub": {
    en: "WhatsApp is the fastest way to reach us. Tap below and we'll reply during clinic hours.",
    hi: "WhatsApp हम तक पहुँचने का सबसे तेज़ रास्ता है। नीचे टैप करें — क्लिनिक के समय में हम जवाब देंगे।",
  },

  // Stats
  "stat.years": { en: "Years caring", hi: "साल की देखभाल" },
  "stat.pets": { en: "Pets treated", hi: "पालतू देखे" },
  "stat.surgeries": { en: "Surgeries performed", hi: "सर्जरी की" },
  "stat.satisfaction": { en: "Client satisfaction", hi: "क्लाइंट संतुष्टि" },
  "stat.repeat": { en: "Repeat client rate", hi: "बार-बार आने वाले" },
  "stat.emergencies": { en: "Emergencies managed", hi: "इमरजेंसी संभाली" },

  // Booking form
  "form.booking.title": { en: "Book an appointment", hi: "अपॉइंटमेंट बुक करें" },
  "form.booking.sub": { en: "We'll prefill a WhatsApp message for you in a moment.", hi: "हम पल भर में आपके लिए WhatsApp पर मैसेज तैयार कर देंगे।" },
  "form.petType": { en: "Pet type", hi: "पालतू का प्रकार" },
  "form.service": { en: "Service", hi: "सेवा" },
  "form.preferredVet": { en: "Preferred vet", hi: "पसंदीदा डॉक्टर" },
  "form.anyVet": { en: "Any available", hi: "कोई भी उपलब्ध" },
  "form.preferredTime": { en: "Preferred time", hi: "पसंदीदा समय" },
  "form.morning": { en: "Morning", hi: "सुबह" },
  "form.afternoon": { en: "Afternoon", hi: "दोपहर" },
  "form.evening": { en: "Evening", hi: "शाम" },
  "form.name": { en: "Your name", hi: "आपका नाम" },
  "form.phone": { en: "Phone number", hi: "फ़ोन नंबर" },
  "form.email": { en: "Email", hi: "ईमेल" },
  "form.message": { en: "Anything we should know?", hi: "कुछ बताना चाहेंगे?" },
  "form.submit": { en: "Send via WhatsApp", hi: "WhatsApp पर भेजें" },
  "form.contact.submit": { en: "Send message", hi: "मैसेज भेजें" },
  "form.contact.thanks": {
    en: "Thank you for your message. Our care team will get back within one working day.",
    hi: "आपके मैसेज के लिए धन्यवाद। हमारी टीम एक कार्य दिवस में जवाब देगी।",
  },

  // Misc
  "label.startingAt": { en: "Starting at", hi: "शुरू" },
  "label.from": { en: "from", hi: "से" },
  "label.popular": { en: "Most popular", hi: "सबसे लोकप्रिय" },
  "label.experience": { en: "years experience", hi: "वर्ष अनुभव" },
  "label.emergency24": { en: "Emergency · 24/7 phone support", hi: "इमरजेंसी · 24/7 फ़ोन सहायता" },
  "label.registration": { en: "Registration", hi: "रजिस्ट्रेशन" },
  "label.openingHours": { en: "Opening hours", hi: "खुलने का समय" },
  "label.address": { en: "Address", hi: "पता" },
  "label.languageEn": { en: "English", hi: "अंग्रेज़ी" },
  "label.languageHi": { en: "Hindi", hi: "हिंदी" },
  "label.theme": { en: "Theme", hi: "थीम" },
  "label.menu": { en: "Menu", hi: "मेन्यू" },
  "label.close": { en: "Close", hi: "बंद" },
  "label.search": { en: "Search", hi: "खोजें" },

  // Days
  "day.Mon": { en: "Mon", hi: "सोम" },
  "day.Tue": { en: "Tue", hi: "मंगल" },
  "day.Wed": { en: "Wed", hi: "बुध" },
  "day.Thu": { en: "Thu", hi: "गुरु" },
  "day.Fri": { en: "Fri", hi: "शुक्र" },
  "day.Sat": { en: "Sat", hi: "शनि" },
  "day.Sun": { en: "Sun", hi: "रवि" },

  // Footer
  "footer.tagline": {
    en: "Compassionate, modern veterinary medicine in Gurgaon.",
    hi: "गुड़गांव में स्नेहपूर्ण, आधुनिक वेटरिनरी मेडिसिन।",
  },
  "footer.explore": { en: "Explore", hi: "देखें" },
  "footer.care": { en: "Care", hi: "केयर" },
  "footer.connect": { en: "Connect", hi: "जुड़ें" },
  "footer.copyright": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict | string) => string;
  pick: <T>(en: T, hi: T) => T;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem(STORAGE_KEY) as Lang) || "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key) => {
        const entry = dict[key as string];
        if (!entry) return key as string;
        return entry[lang];
      },
      pick: (en, hi) => (lang === "hi" ? hi : en),
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n outside provider");
  return ctx;
}

export function formatINR(value: number) {
  return "\u20B9" + value.toLocaleString("en-IN");
}
