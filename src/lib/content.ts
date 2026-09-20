export const CLINIC = {
  name: "Verdant Paws Veterinary Centre",
  nameHi: "वर्डेंट पॉज़ वेटरिनरी सेंटर",
  short: "Verdant Paws",
  tagline: "Compassionate medicine for every stage of your pet's life.",
  taglineHi: "आपके पालतू के हर पड़ाव के लिए स्नेहपूर्ण चिकित्सा।",
  founded: 2018,
  registration: "HRY-VET-2018-4276",
  phone: "+91 74281 93564",
  emergency: "+91 74281 93599",
  whatsapp: "917428193564",
  emails: {
    hello: "hello@verdantpaws.in",
    care: "care@verdantpaws.in",
    appointments: "appointments@verdantpaws.in",
  },
  address: {
    line1: "Block C, Arcadia Market",
    line2: "Sector 49",
    city: "Gurgaon",
    state: "Haryana",
    pin: "122018",
  },
  area: [
    "Sohna Road",
    "Golf Course Road",
    "DLF Phase 1",
    "DLF Phase 2",
    "DLF Phase 3",
    "DLF Phase 4",
    "DLF Phase 5",
    "Sushant Lok",
    "South City",
    "Sector 56",
    "Sector 57",
    "Sector 58",
    "Sector 59",
    "Sector 60",
    "Sector 61",
    "Sector 62",
    "Sector 63",
    "Sector 64",
    "Sector 65",
    "Sector 66",
    "Sector 67",
  ],
  hours: [
    { day: "Mon", open: "9:00 AM", close: "8:00 PM" },
    { day: "Tue", open: "9:00 AM", close: "8:00 PM" },
    { day: "Wed", open: "9:00 AM", close: "8:00 PM" },
    { day: "Thu", open: "9:00 AM", close: "8:00 PM" },
    { day: "Fri", open: "9:00 AM", close: "8:00 PM" },
    { day: "Sat", open: "9:00 AM", close: "7:00 PM" },
    { day: "Sun", open: "10:00 AM", close: "4:00 PM" },
  ],
  stats: {
    years: 8,
    pets: 8400,
    surgeries: 2900,
    satisfaction: 98,
    repeat: 87,
    emergencies: 1700,
  },
} as const;

export const SERVICES = [
  {
    slug: "wellness",
    icon: "stethoscope",
    image: "/gallery-cat-consult.webp",
    name: { en: "Wellness Examinations", hi: "वेलनेस जांच" },
    short: { en: "Routine head-to-paw health checks.", hi: "रूटीन सिर-से-पंजे तक स्वास्थ्य जांच।" },
    detail: {
      en: "Comprehensive physical examinations covering weight, body condition, dental health, vaccination status, and early disease screening — designed to catch issues before they grow.",
      hi: "वज़न, शरीर की स्थिति, दांतों का स्वास्थ्य, वैक्सीनेशन रिकॉर्ड और शुरुआती बीमारी की स्क्रीनिंग सहित सम्पूर्ण शारीरिक जांच — ताकि समस्याएं बढ़ने से पहले पकड़ी जा सकें।",
    },
    price: 900,
  },
  {
    slug: "vaccinations",
    icon: "syringe",
    image: "/gallery-puppy-vaccine.webp",
    name: { en: "Vaccinations", hi: "वैक्सीनेशन" },
    short: { en: "Core & lifestyle vaccines for dogs and cats.", hi: "कुत्तों व बिल्लियों के लिए कोर व लाइफस्टाइल वैक्सीन।" },
    detail: {
      en: "Tailored vaccination schedules including DHPPi, Anti-Rabies and Kennel Cough for dogs; FVRCP and Anti-Rabies for cats. We follow WSAVA guidelines.",
      hi: "अनुकूलित वैक्सीनेशन शेड्यूल — कुत्तों के लिए DHPPi, Anti-Rabies और Kennel Cough; बिल्लियों के लिए FVRCP और Anti-Rabies। हम WSAVA दिशानिर्देशों का पालन करते हैं।",
    },
    price: 850,
  },
  {
    slug: "preventive",
    icon: "shield-check",
    image: "/gallery-lounge.webp",
    name: { en: "Preventive Health Packages", hi: "प्रिवेंटिव हेल्थ पैकेज" },
    short: { en: "Annual screening and parasite control plans.", hi: "वार्षिक स्क्रीनिंग और परजीवी नियंत्रण योजनाएं।" },
    detail: {
      en: "A yearly preventive bundle: wellness exam, core vaccinations, parasite control protocol and a one-on-one nutritional consultation.",
      hi: "एक वार्षिक प्रिवेंटिव बंडल: वेलनेस जांच, कोर वैक्सीनेशन, परजीवी नियंत्रण प्रोटोकॉल और एक न्यूट्रिशनल कंसल्टेशन।",
    },
    price: 3500,
  },
  {
    slug: "diagnostics",
    icon: "microscope",
    image: "/gallery-lab.webp",
    name: { en: "Diagnostics & Imaging", hi: "डायग्नोस्टिक्स व इमेजिंग" },
    short: { en: "In-house lab, Digital X-Ray, Ultrasound, ECG.", hi: "इन-हाउस लैब, Digital X-Ray, Ultrasound, ECG।" },
    detail: {
      en: "Same-day in-house results: CBC, Biochemistry, Urinalysis, Blood Glucose, Electrolytes. Advanced imaging with Digital X-Ray, Ultrasound and ECG.",
      hi: "सेम-डे इन-हाउस रिज़ल्ट: CBC, Biochemistry, Urinalysis, Blood Glucose, Electrolytes। Digital X-Ray, Ultrasound और ECG जैसी एडवांस्ड इमेजिंग।",
    },
    price: 700,
  },
  {
    slug: "surgery",
    icon: "scissors",
    image: "/gallery-surgery-prep.webp",
    name: { en: "General Surgery", hi: "जनरल सर्जरी" },
    short: { en: "Spay, neuter, lump removal & soft tissue.", hi: "स्पे, न्यूटर, गांठ निकालना व सॉफ्ट-टिश्यू।" },
    detail: {
      en: "Carefully planned surgical care: Spay, Neuter, Lump Removal, Wound Repair, and Foreign Body Surgery — with detailed pre-op assessment and structured post-op recovery.",
      hi: "सोच-समझकर योजना बनाई गई सर्जिकल देखभाल: Spay, Neuter, गांठ निकालना, घाव की मरम्मत, और Foreign Body Surgery — विस्तृत प्री-ऑप एसेसमेंट और संरचित पोस्ट-ऑप रिकवरी के साथ।",
    },
    price: 4500,
  },
  {
    slug: "dental",
    icon: "smile",
    image: "/gallery-dental.webp",
    name: { en: "Dental Care", hi: "डेंटल केयर" },
    short: { en: "Oral exam, scaling, polishing, extractions.", hi: "ओरल जांच, स्केलिंग, पॉलिशिंग, टूथ एक्सट्रैक्शन।" },
    detail: {
      en: "Dental disease is the most overlooked health issue in pets. We offer thorough oral exams, ultrasonic scaling, polishing and extractions when required, all under safe anaesthesia.",
      hi: "डेंटल रोग पालतुओं में सबसे ज़्यादा अनदेखी की जाने वाली समस्या है। हम पूर्ण ओरल जांच, अल्ट्रासोनिक स्केलिंग, पॉलिशिंग और ज़रूरत पड़ने पर एक्सट्रैक्शन — सब सुरक्षित एनेस्थीसिया में करते हैं।",
    },
    price: 2800,
  },
  {
    slug: "dermatology",
    icon: "sparkles",
    image: "/gallery-community.webp",
    name: { en: "Dermatology", hi: "डर्मेटोलॉजी" },
    short: { en: "Skin allergies, fungal & ear conditions.", hi: "त्वचा एलर्जी, फंगल व कान संबंधी समस्याएं।" },
    detail: {
      en: "Skin allergy assessments, fungal infection treatment, chronic itching management and ear disease care — backed by diagnostic cytology and culture when needed.",
      hi: "त्वचा एलर्जी एसेसमेंट, फंगल इन्फेक्शन का इलाज, क्रॉनिक खुजली प्रबंधन और कान की बीमारियों की देखभाल — ज़रूरत पड़ने पर डायग्नोस्टिक cytology और culture के साथ।",
    },
    price: 1100,
  },
  {
    slug: "senior",
    icon: "heart-pulse",
    image: "/gallery-senior-golden.webp",
    name: { en: "Senior Pet Care", hi: "सीनियर पेट केयर" },
    short: { en: "Dedicated programs for pets above 7 years.", hi: "7 साल से ऊपर के पालतुओं के लिए समर्पित कार्यक्रम।" },
    detail: {
      en: "A focused senior plan with blood screening, joint health assessment, weight monitoring and nutritional planning to keep older companions comfortable and active.",
      hi: "ब्लड स्क्रीनिंग, जोड़ों के स्वास्थ्य का एसेसमेंट, वज़न की निगरानी और न्यूट्रिशनल प्लानिंग के साथ एक केंद्रित सीनियर प्लान — बड़े साथियों को आरामदायक और सक्रिय रखने के लिए।",
    },
    price: 4800,
  },
  {
    slug: "puppy-kitten",
    icon: "paw-print",
    image: "/gallery-rescue.webp",
    name: { en: "Puppy & Kitten Programs", hi: "पपी व किटन प्रोग्राम" },
    short: { en: "Growth, vaccines, nutrition & deworming.", hi: "विकास, वैक्सीन, पोषण व डीवर्मिंग।" },
    detail: {
      en: "A guided start to life: growth monitoring, vaccination scheduling, nutrition counseling and deworming guidance — plus a behavior conversation for the first 12 weeks.",
      hi: "जीवन की एक मार्गदर्शित शुरुआत: ग्रोथ मॉनिटरिंग, वैक्सीनेशन शेड्यूलिंग, न्यूट्रिशन काउंसलिंग और डीवर्मिंग गाइडेंस — साथ ही पहले 12 हफ्तों के लिए बिहेवियर बातचीत।",
    },
    price: 2200,
  },
  {
    slug: "emergency",
    icon: "siren",
    image: "/gallery-recovery.webp",
    name: { en: "Emergency & Critical Care", hi: "इमरजेंसी व क्रिटिकल केयर" },
    short: { en: "Trauma, poisoning, respiratory distress.", hi: "चोट, ज़हर, सांस संबंधी आपात।" },
    detail: {
      en: "Round-the-clock telephonic triage and rapid stabilization for trauma, poisoning, respiratory distress and acute illness. Call our emergency helpline anytime.",
      hi: "चोट, ज़हर, सांस की तकलीफ और गंभीर बीमारी के लिए चौबीसों घंटे टेलीफोनिक triage और तेज़ स्थिरीकरण। किसी भी समय हमारी इमरजेंसी हेल्पलाइन पर कॉल करें।",
    },
    price: 2000,
  },
] as const;

export const PLANS = [
  {
    slug: "pawstart",
    name: "PawStart",
    price: 4999,
    tagline: { en: "Foundational care, beautifully simple.", hi: "बुनियादी देखभाल, सुंदर रूप से सरल।" },
    features: {
      en: ["2 Wellness Exams", "Annual Vaccination Reminder", "10% Diagnostic Discount"],
      hi: ["2 वेलनेस जांच", "वार्षिक वैक्सीनेशन रिमाइंडर", "10% डायग्नोस्टिक छूट"],
    },
  },
  {
    slug: "pawprime",
    name: "PawPrime",
    price: 8999,
    tagline: { en: "Our most popular wellness plan.", hi: "हमारी सबसे लोकप्रिय वेलनेस प्लान।" },
    popular: true,
    features: {
      en: ["3 Wellness Exams", "15% Diagnostic Discount", "Annual Blood Screening", "Priority Appointments"],
      hi: ["3 वेलनेस जांच", "15% डायग्नोस्टिक छूट", "वार्षिक ब्लड स्क्रीनिंग", "प्राथमिकता अपॉइंटमेंट"],
    },
  },
  {
    slug: "pawelite",
    name: "PawElite",
    price: 14999,
    tagline: { en: "Premium care for your closest companion.", hi: "आपके सबसे करीबी साथी के लिए प्रीमियम देखभाल।" },
    features: {
      en: ["4 Wellness Exams", "Senior Screening Package", "20% Diagnostic Discount", "Priority Scheduling", "Nutrition Consultation"],
      hi: ["4 वेलनेस जांच", "सीनियर स्क्रीनिंग पैकेज", "20% डायग्नोस्टिक छूट", "प्राथमिकता शेड्यूलिंग", "न्यूट्रिशन कंसल्टेशन"],
    },
  },
] as const;

export const TEAM = [
  {
    slug: "ira-vashisht",
    name: "Dr. Ira Vashisht",
    role: { en: "Founder & Lead Veterinarian", hi: "संस्थापक व प्रमुख पशु चिकित्सक" },
    years: 14,
    education: "BVSc & AH, MVSc (Small Animal Medicine)",
    photo: "/dr-ira.webp",
    interests: {
      en: ["Internal Medicine", "Preventive Healthcare", "Geriatric Pet Care", "Endocrine Disorders"],
      hi: ["Internal Medicine", "प्रिवेंटिव हेल्थकेयर", "जेरिएट्रिक पेट केयर", "एंडोक्राइन डिसऑर्डर्स"],
    },
    bio: {
      en: "Dr. Ira founded Verdant Paws after a decade across leading Delhi NCR practices. Her approach blends advanced diagnostics with a strong belief in preventive medicine and owner education.",
      hi: "दिल्ली एनसीआर के प्रमुख क्लीनिकों में एक दशक के अनुभव के बाद डॉ. इरा ने वर्डेंट पॉज़ की स्थापना की। उनका दृष्टिकोण एडवांस्ड डायग्नोस्टिक्स को प्रिवेंटिव मेडिसिन और मालिकों की शिक्षा के साथ जोड़ता है।",
    },
  },
  {
    slug: "rehan-talwar",
    name: "Dr. Rehan Talwar",
    role: { en: "Veterinary Surgeon", hi: "वेटरिनरी सर्जन" },
    years: 10,
    education: "BVSc & AH",
    photo: "/dr-rehan.webp",
    interests: {
      en: ["Soft Tissue Surgery", "Orthopedic Procedures", "Trauma Management", "Emergency Care"],
      hi: ["सॉफ्ट टिश्यू सर्जरी", "ऑर्थोपेडिक प्रक्रियाएं", "ट्रॉमा मैनेजमेंट", "इमरजेंसी केयर"],
    },
    bio: {
      en: "Dr. Talwar has performed more than 2,500 surgeries and is recognised for his meticulous surgical planning and structured post-operative recovery protocols.",
      hi: "डॉ. तलवार ने 2,500 से अधिक सर्जरी की हैं और अपने सावधानीपूर्वक सर्जिकल प्लानिंग व संरचित पोस्ट-ऑपरेटिव रिकवरी प्रोटोकॉल के लिए जाने जाते हैं।",
    },
  },
  {
    slug: "niyati-sen",
    name: "Dr. Niyati Sen",
    role: { en: "Associate Veterinarian", hi: "एसोसिएट वेटरिनेरियन" },
    years: 6,
    education: "BVSc & AH",
    photo: "/dr-niyati.webp",
    interests: {
      en: ["Feline Medicine", "Dermatology", "Nutrition", "Preventive Care"],
      hi: ["फीलाइन मेडिसिन", "डर्मेटोलॉजी", "पोषण", "प्रिवेंटिव केयर"],
    },
    bio: {
      en: "Dr. Sen is passionate about feline behaviour and creating low-stress clinical experiences — particularly for cats and small mammals.",
      hi: "डॉ. सेन को फीलाइन बिहेवियर और कम-तनाव वाला क्लिनिकल अनुभव बनाने का जुनून है — खासकर बिल्लियों और छोटे स्तनधारियों के लिए।",
    },
  },
] as const;

export const SUPPORT_TEAM = [
  { name: "Meera Kaul", role: { en: "Senior Veterinary Nurse", hi: "सीनियर वेटरिनरी नर्स" }, years: 8, photo: "/team-meera.webp" },
  { name: "Karan Bedi", role: { en: "Diagnostic Technician", hi: "डायग्नोस्टिक टेक्नीशियन" }, years: 5, photo: "/team-karan.webp" },
  { name: "Aisha Mehta", role: { en: "Client Care Coordinator", hi: "क्लाइंट केयर कोऑर्डिनेटर" }, years: 4, photo: "/team-aisha.webp" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rhea Malhotra",
    pet: { en: "Labrador parent", hi: "लैब्राडोर पैरेंट" },
    quote: {
      en: "The team handled my Labrador's surgery with exceptional care. Every update was communicated clearly, and recovery was smoother than expected.",
      hi: "टीम ने मेरे लैब्राडोर की सर्जरी असाधारण देखभाल के साथ की। हर अपडेट साफ़ बताया गया और रिकवरी उम्मीद से बेहतर रही।",
    },
    rating: 5,
  },
  {
    name: "Arnav Kohli",
    pet: { en: "Cat parent", hi: "कैट पैरेंट" },
    quote: {
      en: "Our cat is usually anxious during clinic visits, but Dr. Niyati and the nursing staff made the experience remarkably calm.",
      hi: "हमारी बिल्ली क्लिनिक विज़िट में आमतौर पर परेशान रहती है, लेकिन डॉ. नियति और नर्सिंग स्टाफ ने अनुभव बेहद शांत बना दिया।",
    },
    rating: 5,
  },
  {
    name: "Samaira Dhingra",
    pet: { en: "Beagle parent", hi: "बीगल पैरेंट" },
    quote: {
      en: "The wellness plan has helped us stay on top of vaccinations and routine health checks. Highly professional and genuinely caring.",
      hi: "वेलनेस प्लान की वजह से हम वैक्सीन और रूटीन चेक-अप पर हमेशा आगे रहते हैं। बेहद प्रोफेशनल और सच में देखभाल करने वाले।",
    },
    rating: 5,
  },
  {
    name: "Devansh Suri",
    pet: { en: "Indie dog parent", hi: "इंडी डॉग पैरेंट" },
    quote: {
      en: "Quick response during an emergency situation and excellent follow-up care afterward.",
      hi: "इमरजेंसी में बहुत तेज़ रिस्पॉन्स और बाद में बेहतरीन फॉलो-अप केयर।",
    },
    rating: 5,
  },
  {
    name: "Tashvi Iyer",
    pet: { en: "Rabbit parent", hi: "खरगोश पैरेंट" },
    quote: {
      en: "Finding a vet who confidently handles small mammals isn't easy. Dr. Sen examined our rabbit with such gentle expertise.",
      hi: "ऐसा वेट जो छोटे जानवरों को आत्मविश्वास से देखे, मिलना आसान नहीं। डॉ. सेन ने हमारे खरगोश की जांच बहुत कोमल विशेषज्ञता से की।",
    },
    rating: 5,
  },
  {
    name: "Mihir Bhatnagar",
    pet: { en: "Senior pug parent", hi: "सीनियर पग पैरेंट" },
    quote: {
      en: "They explain everything in plain language and never push unnecessary tests. Our 12-year-old pug actually walks in happily now.",
      hi: "वे सब कुछ सीधी भाषा में समझाते हैं और कभी अनावश्यक टेस्ट नहीं थोपते। हमारा 12 साल का पग अब सच में खुशी से अंदर जाता है।",
    },
    rating: 5,
  },
];

export const CONDITIONS = [
  { en: "Skin Allergies", hi: "त्वचा एलर्जी" },
  { en: "Ear Infections", hi: "कान का संक्रमण" },
  { en: "Gastrointestinal Disorders", hi: "गैस्ट्रोइंटेस्टाइनल डिसऑर्डर" },
  { en: "Obesity", hi: "मोटापा" },
  { en: "Diabetes", hi: "Diabetes" },
  { en: "Arthritis", hi: "Arthritis" },
  { en: "Kidney Disease", hi: "किडनी रोग" },
  { en: "Respiratory Infections", hi: "श्वसन संक्रमण" },
  { en: "Tick-Borne Diseases", hi: "टिक-जनित रोग" },
  { en: "Dental Disease", hi: "डेंटल रोग" },
  { en: "Urinary Tract Disorders", hi: "मूत्र मार्ग की समस्याएं" },
] as const;

export const FAQS = [
  {
    q: { en: "Do I need an appointment?", hi: "क्या मुझे अपॉइंटमेंट लेनी होगी?" },
    a: { en: "Appointments are recommended, though urgent cases are accommodated whenever possible.", hi: "अपॉइंटमेंट लेना सुझाया जाता है, फिर भी ज़रूरी मामलों को जब भी संभव हो हम तुरंत देखते हैं।" },
  },
  {
    q: { en: "How often should my pet have a health check?", hi: "मेरे पालतू को कितनी बार हेल्थ चेक की ज़रूरत है?" },
    a: { en: "Most healthy adult pets benefit from an annual examination. Senior pets may require visits every six months.", hi: "ज़्यादातर स्वस्थ वयस्क पालतुओं के लिए साल में एक जांच पर्याप्त है। सीनियर पालतुओं को हर छह महीने में दिखाना अच्छा रहता है।" },
  },
  {
    q: { en: "When should puppies begin vaccinations?", hi: "पिल्लों को वैक्सीन कब शुरू करनी चाहिए?" },
    a: { en: "Typically between 6–8 weeks of age, depending on veterinary assessment.", hi: "आमतौर पर 6–8 हफ्तों की उम्र में, वेटरिनरी जांच के अनुसार।" },
  },
  {
    q: { en: "Do you provide emergency care?", hi: "क्या आप इमरजेंसी केयर देते हैं?" },
    a: { en: "Yes, emergency assistance is available through our dedicated helpline.", hi: "हाँ, हमारी समर्पित हेल्पलाइन के ज़रिए इमरजेंसी सहायता उपलब्ध है।" },
  },
  {
    q: { en: "What pets do you treat?", hi: "आप किन पालतुओं का इलाज करते हैं?" },
    a: { en: "Dogs, cats, rabbits, guinea pigs, hamsters, and selected small companion mammals.", hi: "कुत्ते, बिल्लियाँ, खरगोश, गिनी पिग, हैम्स्टर और कुछ चुने हुए छोटे साथी स्तनधारी।" },
  },
  {
    q: { en: "What payment methods do you accept?", hi: "आप कौन से पेमेंट तरीके स्वीकार करते हैं?" },
    a: { en: "UPI, Debit Card, Credit Card, Net Banking and Cash.", hi: "UPI, डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग और कैश।" },
  },
  {
    q: { en: "Is parking available?", hi: "क्या पार्किंग उपलब्ध है?" },
    a: { en: "Yes, complimentary parking is available at Arcadia Market for clinic visitors.", hi: "हाँ, क्लिनिक आने वालों के लिए आर्केडिया मार्केट में मुफ़्त पार्किंग उपलब्ध है।" },
  },
  {
    q: { en: "What should I bring for my first visit?", hi: "पहली विज़िट पर क्या लाऊं?" },
    a: { en: "Past medical records (if any), current diet details and a comfortable carrier or leash.", hi: "पुराने मेडिकल रिकॉर्ड (यदि कोई हो), वर्तमान डाइट की जानकारी और आरामदायक कैरियर या लीश।" },
  },
];

export const BLOG = [
  {
    slug: "seasonal-tick-risks",
    title: { en: "Understanding Seasonal Tick Risks in Gurgaon", hi: "गुड़गांव में मौसमी टिक जोखिम को समझना" },
    category: { en: "Preventive Care", hi: "प्रिवेंटिव केयर" },
    author: "Dr. Ira Vashisht",
    date: "2026-04-12",
    image: "/blog-ticks.webp",
    excerpt: {
      en: "When monsoon meets warm afternoons, tick populations explode across Gurgaon. Here is what every parent should know.",
      hi: "जब मॉनसून गर्म दोपहरों से मिलता है, गुड़गांव में टिक की आबादी बेहिसाब बढ़ जाती है। हर पालतू पैरेंट को क्या जानना चाहिए।",
    },
  },
  {
    slug: "indoor-cat-vet-visits",
    title: { en: "How Often Should Indoor Cats Visit the Vet?", hi: "इनडोर बिल्लियों को कितनी बार वेट के पास जाना चाहिए?" },
    category: { en: "Feline Health", hi: "फीलाइन हेल्थ" },
    author: "Dr. Niyati Sen",
    date: "2026-03-22",
    image: "/blog-cat.webp",
    excerpt: {
      en: "Indoor doesn't mean immune. A short, evidence-based guide to feline visit frequency by life-stage.",
      hi: "इनडोर का मतलब सुरक्षित नहीं। उम्र के हिसाब से बिल्लियों की विज़िट आवृत्ति पर एक छोटी, साक्ष्य-आधारित गाइड।",
    },
  },
  {
    slug: "early-arthritis-dogs",
    title: { en: "Early Signs of Arthritis in Dogs", hi: "कुत्तों में Arthritis के शुरुआती संकेत" },
    category: { en: "Senior Pet Care", hi: "सीनियर पेट केयर" },
    author: "Dr. Rehan Talwar",
    date: "2026-02-15",
    image: "/blog-arthritis.webp",
    excerpt: {
      en: "Slowing down on stairs isn't just 'old age'. Spot the early signs and meaningfully extend your dog's quality of life.",
      hi: "सीढ़ियों पर धीमा होना सिर्फ़ \"बुढ़ापा\" नहीं है। शुरुआती संकेतों को पहचानें और अपने कुत्ते के जीवन की गुणवत्ता को बेहतर बनाएं।",
    },
  },
  {
    slug: "puppy-first-visit",
    title: { en: "Preparing Your Puppy for the First Veterinary Visit", hi: "पिल्ले की पहली वेटरिनरी विज़िट की तैयारी" },
    category: { en: "Puppy Care", hi: "पपी केयर" },
    author: "Dr. Ira Vashisht",
    date: "2026-01-30",
    image: "/blog-puppy.webp",
    excerpt: {
      en: "Make the very first visit a positive memory — small details that shape a lifetime of comfortable check-ups.",
      hi: "पहली विज़िट को एक अच्छी याद बनाएं — वे छोटे विवरण जो पूरे जीवन की आरामदायक जांच का आधार बनते हैं।",
    },
  },
  {
    slug: "dental-disease-pets",
    title: { en: "Dental Disease: The Most Overlooked Health Issue in Pets", hi: "डेंटल रोग: पालतुओं में सबसे ज़्यादा अनदेखी समस्या" },
    category: { en: "Dentistry", hi: "डेंटिस्ट्री" },
    author: "Dr. Niyati Sen",
    date: "2026-01-08",
    image: "/blog-dental.webp",
    excerpt: {
      en: "By the age of three, most pets show some sign of dental disease. Here is what to look for — and when to act.",
      hi: "तीन साल की उम्र तक ज़्यादातर पालतुओं में किसी न किसी रूप में डेंटल रोग दिखता है। क्या देखें — और कब कदम उठाएँ।",
    },
  },
];

export const GALLERY = [
  { src: "/gallery-puppy-vaccine.webp", caption: { en: "First puppy vaccination", hi: "पहली पपी वैक्सीनेशन" } },
  { src: "/gallery-senior-golden.webp", caption: { en: "Senior wellness exam", hi: "सीनियर वेलनेस जांच" } },
  { src: "/gallery-surgery-prep.webp", caption: { en: "Surgical preparation", hi: "सर्जिकल तैयारी" } },
  { src: "/gallery-cat-consult.webp", caption: { en: "Calm cat consultation", hi: "शांत कैट कंसल्टेशन" } },
  { src: "/gallery-dental.webp", caption: { en: "Dental treatment setup", hi: "डेंटल ट्रीटमेंट सेटअप" } },
  { src: "/gallery-lab.webp", caption: { en: "In-house laboratory", hi: "इन-हाउस लैब" } },
  { src: "/gallery-lounge.webp", caption: { en: "Pet-friendly lounge", hi: "पेट-फ्रेंडली लाउंज" } },
  { src: "/gallery-recovery.webp", caption: { en: "Recovery suite", hi: "रिकवरी स्वीट" } },
  { src: "/gallery-community.webp", caption: { en: "Community wellness day", hi: "कम्युनिटी वेलनेस डे" } },
  { src: "/gallery-rescue.webp", caption: { en: "Rescue puppy first check", hi: "रेस्क्यू पपी की पहली जांच" } },
] as const;

export const COMMUNITY = [
  {
    slug: "second-chance-saturdays",
    title: { en: "Second Chance Saturdays", hi: "सेकंड चांस सैटरडे" },
    blurb: {
      en: "Monthly wellness checks for rescued pets at significantly reduced consultation fees, in partnership with NCR rescue groups.",
      hi: "एनसीआर के रेस्क्यू समूहों के साथ साझेदारी में रेस्क्यू पालतुओं के लिए हर महीने काफ़ी कम कंसल्टेशन फीस पर वेलनेस जांच।",
    },
  },
  {
    slug: "young-pet-guardian-workshops",
    title: { en: "Young Pet Guardian Workshops", hi: "यंग पेट गार्डियन वर्कशॉप" },
    blurb: {
      en: "Quarterly evening sessions covering nutrition, vaccinations, basic training and preventive care — open to first-time pet parents.",
      hi: "हर तीन महीने में शाम के सत्र — पोषण, वैक्सीनेशन, बुनियादी ट्रेनिंग और प्रिवेंटिव केयर — पहली बार पालतू लाने वालों के लिए खुले।",
    },
  },
  {
    slug: "adoption-support-program",
    title: { en: "Adoption Support Program", hi: "अडॉप्शन सपोर्ट प्रोग्राम" },
    blurb: {
      en: "A complimentary first wellness examination for pets adopted through partner rescue organizations across Gurgaon.",
      hi: "गुड़गांव के पार्टनर रेस्क्यू संगठनों से गोद लिए गए पालतुओं के लिए पहली वेलनेस जांच निःशुल्क।",
    },
  },
] as const;

export const POLICIES = [
  {
    title: { en: "Appointment Cancellation", hi: "अपॉइंटमेंट कैंसलेशन" },
    body: { en: "Appointments may be rescheduled or cancelled up to 12 hours before the scheduled visit at no charge.", hi: "अपॉइंटमेंट को निर्धारित विज़िट से 12 घंटे पहले तक बिना किसी शुल्क के बदला या रद्द किया जा सकता है।" },
  },
  {
    title: { en: "Prescription Refills", hi: "प्रिस्क्रिप्शन रिफिल" },
    body: { en: "Prescription refill requests require up to 24 hours of processing time.", hi: "प्रिस्क्रिप्शन रिफिल अनुरोधों को प्रोसेस करने में 24 घंटे तक लग सकते हैं।" },
  },
  {
    title: { en: "Emergency Cases", hi: "इमरजेंसी मामले" },
    body: { en: "Emergencies are prioritized strictly based on medical urgency, not on the order of arrival.", hi: "इमरजेंसी मामलों को आगमन क्रम के बजाय कड़ाई से चिकित्सा अत्यावश्यकता के आधार पर प्राथमिकता दी जाती है।" },
  },
  {
    title: { en: "Payment Methods", hi: "पेमेंट तरीके" },
    body: { en: "We accept UPI, debit card, credit card, net banking, and cash.", hi: "हम UPI, डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग और कैश स्वीकार करते हैं।" },
  },
  {
    title: { en: "Data Privacy", hi: "डेटा प्राइवेसी" },
    body: { en: "Client and patient records remain confidential and are managed per veterinary practice standards.", hi: "क्लाइंट और मरीज़ के रिकॉर्ड गोपनीय रखे जाते हैं और वेटरिनरी प्रैक्टिस मानकों के अनुसार प्रबंधित होते हैं।" },
  },
];

export const PET_TYPES = [
  { key: "dog", en: "Dog", hi: "कुत्ता", emoji: "dog" },
  { key: "cat", en: "Cat", hi: "बिल्ली", emoji: "cat" },
  { key: "rabbit", en: "Rabbit", hi: "खरगोश", emoji: "rabbit" },
  { key: "guinea-pig", en: "Guinea Pig", hi: "गिनी पिग", emoji: "rabbit" },
  { key: "hamster", en: "Hamster", hi: "हैम्स्टर", emoji: "rabbit" },
  { key: "small-mammal", en: "Small Mammal", hi: "छोटा स्तनधारी", emoji: "rabbit" },
] as const;

export const VALUES = [
  {
    icon: "heart",
    title: { en: "Thoughtful Care", hi: "सोच-समझकर देखभाल" },
    body: { en: "Every treatment plan is tailored to the individual pet, not the average.", hi: "हर ट्रीटमेंट प्लान औसत के बजाय व्यक्तिगत पालतू के लिए बनाया जाता है।" },
  },
  {
    icon: "microscope",
    title: { en: "Clinical Excellence", hi: "क्लिनिकल उत्कृष्टता" },
    body: { en: "Evidence-based medicine backed by modern in-house diagnostics.", hi: "आधुनिक इन-हाउस डायग्नोस्टिक्स पर आधारित साक्ष्य-आधारित चिकित्सा।" },
  },
  {
    icon: "scroll-text",
    title: { en: "Trust Through Transparency", hi: "पारदर्शिता से बना भरोसा" },
    body: { en: "Clear explanations, detailed estimates and decisions made together.", hi: "साफ़ समझाइशें, विस्तृत अनुमान और साथ मिलकर लिए गए निर्णय।" },
  },
  {
    icon: "users",
    title: { en: "Community Responsibility", hi: "सामुदायिक ज़िम्मेदारी" },
    body: { en: "Promoting responsible pet ownership and animal welfare in Gurgaon.", hi: "गुड़गांव में ज़िम्मेदार पालतू मालिकाना और पशु कल्याण को बढ़ावा देना।" },
  },
] as const;
