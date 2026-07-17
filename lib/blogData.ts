export interface BlogPost {
  id: string;
  colorTheme: string;
  publishDate: string;
  bn: {
    title: string;
    category: string;
    readTime: string;
    summary: string;
    content: string[];
  };
  en: {
    title: string;
    category: string;
    readTime: string;
    summary: string;
    content: string[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'gulsha-farming-guide',
    colorTheme: 'from-[#fef3c7]/20 to-white border-amber-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'গুলসা মাছ চাষ ও নিবিড় রোগ ব্যবস্থাপনা নির্দেশিকা',
      category: 'বাণিজ্যিক মাছ চাষ ও রোগ নিয়ন্ত্রণ',
      readTime: '৬ মিনিট রিড',
      summary: 'দেশীয় সুস্বাদু মাছ গুলসা (Gulsha) চাষের আধুনিক নিবিড় (Intensive) পদ্ধতি, পানির গুণগত মান ঠিক রাখার উপায় এবং মারাত্মক ব্যাকটেরিয়জনিত রোগ প্রতিরোধের গাইডলাইন।',
      content: [
        'ভূমিকা ও পটভূমি: বাংলাদেশের অসংখ্য নদ-নদী, খাল-বিল, হাওর-বাঁওড় ও পুকুরে যে সুস্বাদু দেশীয় মাছ পাওয়া যায়, তার মধ্যে গুলসা (Mystus cavasius) অন্যতম। পূর্বে এই মাছ কেবল প্রাকৃতিক জলাশয় থেকে ধরা হলেও, ২০১৮ সাল থেকে বাণিজ্যিকভাবে এর কৃত্রিম পোনা উৎপাদন ও সফল চাষাবাদ শুরু হয়েছে। এটি অত্যন্ত লাভজনক ও জনপ্রিয় একটি চাষ পদ্ধতি।',
        'পোনা নির্বাচনের গুরুত্ব: প্রাকৃতিক পরিবেশের গুলসা যেকোনো পরিবেশে খাপ খাওয়াতে পারলেও, নিবিড় বা বাণিজ্যিক চাষে হ্যাচারিতে উৎপাদিত পোনার মান ও ব্রুডস্টকের গুণগত মানের ওপরই মাছের রোগ প্রতিরোধ ক্ষমতা নির্ভর করে। নিম্নমানের পোনা ব্যবহার করলে ব্যাকটেরিয়জনিত ও পরজীবী সংক্রমণের ঝুঁকি কয়েক গুণ বেড়ে যায়।',
        'নিবিড় (Intensive) ব্যবস্থাপনার প্রধান দিকসমূহ: গুলসা চাষে কাঙ্ক্ষিত লাভ পেতে ইনটেনসিভ ম্যানেজমেন্ট অনুসরণ করা অত্যন্ত জরুরি। এর প্রধান বিষয়গুলো হলো: (১) পানির গুণগত মান (যেমন pH, দ্রবীভূত অক্সিজেন, অ্যামোনিয়া ও নাইট্রাইট) নিয়মিত পরীক্ষা করা, (২) আয়রন ও ক্ষতিকর গ্যাসমুক্ত গভীর নলকূপের পানি দিয়ে প্রয়োজনীয় পানি পরিবর্তন ও গভীরতা ধরে রাখা, (৩) পুকুরের বায়োসিকিউরিটি বা সার্বিক নিরাপত্তা নিশ্চিত করা।',
        'পানির রাসায়নিক শোধন ও প্রতিরোধ: গুলসা পুকুরে নিয়মিত চুন, জীবাণুনাশক, লবণ, এবং উপকারী ব্যাকটেরিয়া বা সয়েল প্রোবায়োটিক (যেমন Bioprob Max) প্রয়োগ করতে হবে। এছাড়া খারাপ আবহাওয়ার আগে (যেমন অতিবৃষ্টি বা মেঘলা আকাশ) পুকুরে আগে থেকেই প্রয়োজনীয় প্রস্তুতি ও অক্সিজেন পাউডার রাখা অত্যন্ত জরুরি।',
        'উচ্চমানের পুষ্টি ও সুষম খাদ্য: গুলসার দ্রুত বৃদ্ধি ও আশানুরূপ গড় ওজনের জন্য উচ্চ প্রোটিনসমৃদ্ধ ও সুষম খাদ্য নিয়মিত সরবরাহ করতে হবে। খাদ্যের গুণগত মান ভালো হলে মাছের প্রাকৃতিক ইমিউনিটি বৃদ্ধি পায় এবং সংক্রমণ ঘটার সম্ভাবনা হ্রাস পায়।',
        'রোগ সনাক্তকরণ ও চিকিৎসা: বর্তমানে গুলসা মাছে মারাত্মক ব্যাকটেরিয়জনিত রোগ ও লেজ/ফুলকা পচা রোগ দেখা যাচ্ছে। মনে রাখবেন, রোগ যদি প্রথম পর্যায়ে সনাক্ত করা যায়, তবে উপযুক্ত ওষুধ ও জীবাণুনাশক প্রয়োগে ক্ষতি এড়ানো সম্ভব। কিন্তু রোগটি যদি দ্বিতীয় বা তৃতীয় ধাপে চলে যায়, তবে যেকোনো চিকিৎসার কার্যকারিতা অনেক কমে যায় এবং চাষির ব্যাপক ক্ষতি হতে পারে।'
      ]
    },
    en: {
      title: 'Commercial Gulsha Fish Farming & Intensive Disease Management Guide',
      category: 'Commercial Aquaculture & Fish Medicine',
      readTime: '6 min read',
      summary: 'A complete scientific handbook on Gulsha (Mystus cavasius) catfish culture, key factors of intensive management, maintaining premium water quality, and bacterial disease prevention.',
      content: [
        'Introduction & Cultivation Background: Gulsha (Mystus cavasius) is a highly esteemed, tasty indigenous catfish found in rivers and canals of Bangladesh. Since commercial artificial breeding launched in 2018, its commercial farming has expanded rapidly due to high profitability and market demand.',
        'Importance of Fingerling Selection: While wild Gulsha can endure stressful environments, hatchery-bred fry depend fully on broodstock selection and nursery conditions. Substandard fingerlings suffer low immunity, elevating risks of bacterial and parasite outbreaks in intensive ponds.',
        'Key Factors of Intensive Management: To harvest a premium crop, farmers must implement strict intensive systems focusing on: (1) Daily water parameters checks (pH, Dissolved Oxygen, ammonia, nitrite), (2) Water exchange using deep tube-wells to bypass heavy iron and noxious gases, and (3) Maintaining optimal water column depth.',
        'Biosecurity & Water Conditioning: Regularly apply agricultural lime, disinfectants, non-iodized salt, and beneficial probiotics (such as Bioprob Max) to keep the biological flora clean. Prioritize oxygen reserves (such as Oxyadd) and toxic gas removers before heavy rains or dark cloudy weather.',
        'Balanced High-Protein Feeds: Providing balanced, high-protein floating or sinking pellets is vital to match the quick metabolic rates of Gulsha catfish. Superior feed improves cellular defense and drastically reduces Feed Conversion Ratio (FCR).',
        'Disease Identification & Interventions: Gulsha is currently vulnerable to acute bacterial infections, tail rot, and gill rot. When diagnosed early in the first stage, treatment with broad-spectrum disinfectants is highly effective. However, once the disease advances to the second or third stage, recovery rates drop drastically.'
      ]
    }
  },
  {
    id: 'gulsha-fingerling-pond-prep',
    colorTheme: 'from-[#eff6ff]/20 to-white border-blue-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'গুলসা পোনার মানোন্নয়ন, চাষের সময়কাল ও বৈজ্ঞানিক পুকুর প্রস্তুতি নির্দেশিকা',
      category: 'পুকুর প্রস্তুতি ও পোনা নির্বাচন',
      readTime: '৭ মিনিট রিড',
      summary: 'গুলসা মাছের ইনব্রিডিং (আন্তঃপ্রজনন) সমস্যা, রেণু ও চারাপোনা সংগ্রহের সঠিক সময় এবং কালচার ও নার্সারি পুকুর প্রস্তুতির ১০টি বিজ্ঞানসম্মত ধাপ।',
      content: [
        'ভূমিকা ও ইনব্রিডিং (আন্তঃপ্রজনন) সমস্যা: কৃত্রিমভাবে উৎপাদিত গুলসা মাছের পোনার রোগপ্রতিরোধ ক্ষমতা কমে যাওয়ার অন্যতম প্রধান কারণ হলো ইনব্রিডিং (আন্তঃপ্রজনন)। বর্তমানে বাংলাদেশের কোনো হ্যাচারিতে সম্পূর্ণ ইনব্রিডিং-মুক্ত গুলসা পোনা উৎপাদনের নির্ভরযোগ্য প্রমাণ পাওয়া যায় না। ব্রুডস্টকের মান ভালো না হলে পোনা দুর্বল হয়ে পড়ে এবং সহজেই রোগে আক্রান্ত হয়। তাই রেণু ও পোনা উৎপাদনকারী হ্যাচারিগুলোর মানোন্নয়ন করা অত্যন্ত জরুরি।',
        'চাষের সময়কাল ও পোনা সংগ্রহ: গুলসা মাছের চাষকাল সাধারণত ৬–৮ মাস। এপ্রিল মাস থেকে হ্যাচারিগুলো থেকে সুস্থ রেণু পোনা সংগ্রহ করা যায়। আর মে মাসের মাঝামাঝি সময় থেকে চারা পোনা (১.৫ থেকে ২ ইঞ্চি) সরাসরি কালচার পুকুরে মজুদের জন্য সংগ্রহ করা সম্ভব।',
        '১. নার্সারি পুকুর নির্বাচন ও বৈশিষ্ট্য: ৩ দিন বয়সী রেণু পোনা সংগ্রহ করে নার্সারি পুকুরে ১৮–৩০ দিন পর্যন্ত প্রতিপালন করা হয়। এর আদর্শ বৈশিষ্ট্য হলো: আয়তন ১০–২০ শতাংশ, গভীরতা ২.৫–৩ ফুট। এটি অবশ্যই বন্যামুক্ত এবং দোঁআশ মাটির হতে হবে।',
        '২. কালচার পুকুর নির্বাচন ও বৈশিষ্ট্য: এক থেকে দুই কড় সাইজের পোনা মজুদ করে বাজারজাতযোগ্য মাছ উৎপাদনের জন্য কালচার পুকুরের বৈশিষ্ট্য হলো: আয়তন ২০–১০০ শতাংশ, পানির গভীরতা ৫–৬ ফুট। পুকুরটি বন্যামুক্ত, গাছের পাতা যেন না পড়ে এবং বিদ্যুৎ-সুবিধা বা এয়ারেশন যুক্ত স্থানে হওয়া বাঞ্ছনীয়।',
        'পুকুর প্রস্তুতির ১০টি বিজ্ঞানসম্মত ধাপ (১-৫): (১) পুরাতন পানি সম্পূর্ণ সেচে শুকিয়ে নেওয়া, (২) কাদা মাটি রোদে ভালোমতো শুকানো, (৩) তলা থেকে কমপক্ষে ৬ ইঞ্চি মাটি তুলে পাড় মেরামত করা, (৪) প্রতি শতাংশে ১২০-১৫০ গ্রাম ব্লিচিং পাউডার ছিটিয়ে দেওয়া, (৫) ৩ দিন পর প্রতি শতাংশে ৭সা-১০০০ গ্রাম চুন প্রয়োগ করা।',
        'পুকুর প্রস্তুতির ১০টি বিজ্ঞানসম্মত ধাপ (৬-১০): (৬) চুন দেওয়ার ৩ দিন পর নতুন পানি প্রবেশ করানো, (৭) পানি দেওয়ার পরদিন প্রতি শতাংশে ৫০-৭৫ গ্রাম জিওপ্রোব প্লাস এবং ৩-৪ গ্রাম গ্যাসোনাল প্রয়োগ করা, (৮) ৩ দিন পর বায়োপ্রোব ম্যাক্স প্রতি শতাংশে ১০-১৫ গ্রাম ছিটানো, (৯) বায়োপ্রোব ম্যাক্স দেওয়ার ২-৩ দিন পর পোনা মজুদ করা, (১০) রেণু মজুদের ঠিক পূর্বে তলদেশ হালকাভাবে নাড়তে হবে বা হরা টানতে হবে এবং পর্যাপ্ত অক্সিজেন নিশ্চিত করতে অক্সিএড গ্রানুলার দিতে হবে। পোনা মজুদের ২৪ ঘণ্টা আগে প্রয়োজনে প্রতি শতাংশে ৫ মিলি সুমিথিয়ন বা হাঁসপোকা কিলার প্রয়োগ করা যেতে পারে।'
      ]
    },
    en: {
      title: 'Inbreeding Impact, Cultivation Timeline & Pond Preparation Guide for Gulsha',
      category: 'Pond Preparation & Hatchery Management',
      readTime: '7 min read',
      summary: 'A detailed look at the challenge of inbreeding in Gulsha hatcheries, standard nursing timelines, and the 10-step scientific water treatment procedure before stocking.',
      content: [
        'Introduction & The Inbreeding Challenge: Inbreeding depression is a major reason behind reduced immunity and frequent disease outbreaks in cultured Gulsha (Mystus cavasius). Most local hatcheries rely on farm-sourced broodstock, leading to weaker fingerlings. Improving broodstock management is critical for sustainable commercial farming.',
        'Cultivation Timeline: Gulsha farming generally spans 6 to 8 months. High-quality hatchlings are available starting in April, whereas nursery-raised fingerlings (1.5 to 2 inches) are ready for direct stocking in culture ponds from mid-May.',
        '1. Nursery Pond Selection: 3-day-old fry are raised in nursery ponds for 18 to 30 days. The ideal nursery pond has an area of 10 to 20 decimals, a water depth of 2.5 to 3 feet, clay-loam soil, is fully flood-proof, and designed for intensive care.',
        '2. Culture Pond Selection: Fingerlings of 1-2 inches are transferred here to grow to market size. Best practices recommend an area of 20 to 100 decimals, water depth of 5 to 6 feet, a flood-free location away from overhanging leaves, and access to electricity for aeration.',
        'Scientific Pond Preparation Steps (1 to 5): (1) Fully drain and dry the pond bottom, (2) Let the sediment crack in direct sunlight, (3) Excavate 6 inches of excess black silt and repair dykes, (4) Apply 120-150g/decimal of Bleaching powder, (5) After 3 days, apply 750-1000g/decimal of agricultural lime.',
        'Scientific Pond Preparation Steps (6 to 10): (6) Fill with clean iron-free water 3 days after liming, (7) The next day, apply 50-75g/decimal of Geoprob Plus and 3-4g/decimal of Gasonull/Gasonal, (8) After 3 days, apply 10-15g/decimal of Bioprob Max probiotic, (9) Stock after 2-3 days, (10) Drag a light chain across the bottom and apply Oxyadd Granular just before stocking to prevent stress. Apply registered insect/predator killers 24 hours prior if needed.'
      ]
    }
  },
  {
    id: 'carp-magur-stocking',
    colorTheme: 'from-[#ecfdf5]/20 to-white border-emerald-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'কার্প ও মাগুর মাছের মিশ্র চাষ: লাভজনক পদ্ধতি',
      category: 'মিশ্র চাষ ও পোনা মজুদ',
      readTime: '৫ মিনিট রিড',
      summary: 'একই পুকুরে কার্প জাতীয় মাছের সাথে মাগুরের মিশ্র চাষে কোন স্তরে কতটি পোনা মজুদ করতে হবে এবং সর্বোচ্চ ফলন নিশ্চিত করার বিঘা প্রতি সঠিক ও বৈজ্ঞানিক অনুপাত।',
      content: [
        'ভূমিকা: বিঘা প্রতি (৩৩ শতাংশ) কার্পজাতীয় মাছের সাথে মাগুরের মিশ্র চাষ বাংলাদেশের মৎস্য চাষে একটি যুগান্তকারী ও অত্যন্ত লাভজনক পদ্ধতি। সঠিক পরিকল্পনা ও বৈজ্ঞানিক উপায়ে বিভিন্ন স্তরের মাছের মজুদ অনুপাত ঠিক রাখলে পুকুরের প্রতি ইঞ্চি জায়গার সর্বোত্তম ব্যবহার করা সম্ভব হয়।',
        '🟢 উপরের স্তরের মাছ (Surface Feeder): পুকুরের উপরিভাগের প্রাকৃতিক খাবার খাওয়ার জন্য কাতলা এবং সিলভার কার্প বা বিগহেড কার্প মজুদ করা হয়। কাতলা ৩০০টি এবং সিলভার কার্প অথবা বিগহেড কার্প ১৫০টি মজুদ করুন। মনে রাখবেন, সিলভার কার্প ও বিগহেড কার্পের মধ্যে যেকোনো একটি প্রজাতি নির্বাচন করাই উত্তম, কারণ উভয়ই একই ধরনের খাদ্য গ্রহণ করে।',
        '🟡 মধ্য স্তরের মাছ (Column Feeder): মধ্য স্তরের খাবারের জন্য রুই মাছ অত্যন্ত জনপ্রিয় ও লাভজনক। এই স্তরে রুই মাছ ৪০০টি মজুদ করার পরামর্শ দেওয়া হয় যা পুকুরের প্রাকৃতিক জু-প্ল্যাঙ্কটন ও কৃত্রিম খাদ্যের সঠিক ব্যবহার নিশ্চিত করে।',
        '🔵 নিচের স্তরের মাছ (Bottom Feeder): পুকুরের তলদেশে জমা হওয়া জৈব বর্জ্য ও প্রাকৃতিক খাবার খাওয়ার জন্য মৃগেল ১৫০টি, কালিবাউশ ২৫০টি এবং শামুক ও জলজ পোকা দমনের জন্য ব্ল্যাক কার্প ৫০টি মজুদ করা জরুরি।',
        '🌿 সকল স্তরে বিচরণকারী মাছ: পুকুরের জলজ আগাছা ও ঘাস দমনের জন্য গ্রাস কার্প ২৫০টি মজুদ করা আবশ্যক। এটি পুকুরকে অতিরিক্ত আগাছা থেকে মুক্ত রাখতে সাহায্য করবে।',
        '🐟 অতিরিক্ত ও মূল্যবান প্রজাতি (মাগুর): অতিরিক্ত প্রজাতি হিসেবে মাগুর ১,০০০–১,২০০টি মজুদ করা অত্যন্ত লাভজনক। মাগুর মাছ জলাশয়ের বাড়তি খাদ্য ও নিচের বর্জ্য খেয়ে বড় হয় এবং বাজারে এর ব্যাপক চাহিদা রয়েছে।',
        'মোট মজুদ ও হিসাব: বিঘা প্রতি (৩৩ শতাংশ) মোট পোনা মজুদ হবে ২,৫৫০–২,৭৫০টি। সেই হিসেবে প্রতি শতকে গড়ে ৮০–৮৫টি পোনা মজুদ করতে হবে।',
        'গুরুত্বপূর্ণ পরামর্শ: (১) সব পোনা সুস্থ, রোগমুক্ত এবং একই আকারের (সাধারণত ৪–৬ ইঞ্চি) হওয়া উচিত। (২) মাগুর অন্তর্ভুক্ত করলে পানিতে দ্রবীভূত অক্সিজেন (DO) ৫ মিগ্রা./লিটার বা তার বেশি বজায় রাখা জরুরি। এ জন্য নিয়মিত পানি ও খাদ্য ব্যবস্থাপনার পাশাপাশি পুকুর ও মাছের স্বাস্থ্যগত যেকোনো জটিলতায় আমাদের বিশেষজ্ঞ প্যানেলের সহায়তা নিন।'
      ]
    },
    en: {
      title: 'Mixed Farming of Carp & Magur: A Profitable Method',
      category: 'Polyculture & Stocking Density',
      readTime: '5 min read',
      summary: 'Explore the ideal stocking rates of different pond-layer feeding fish paired with Magur (Catfish) per bigha to maximize yields, optimize feed usage, and boost profits.',
      content: [
        'Introduction: Mixed culture of carp species with Magur (African/Local Catfish) per bigha (33 decimals) is a highly lucrative and space-efficient aquaculture practice in Bangladesh. Properly balancing different layer feeders optimizes every cubic inch of your pond.',
        '🟢 Surface Feeders: To feed on surface-level phytoplankton and organic floating matter, stock Catla (300 pcs) and either Silver Carp or Bighead Carp (150 pcs). Note: It is best to choose only one between Silver Carp and Bighead Carp as they share similar feeding niches.',
        '🟡 Column Feeders: For the middle water column, stock Rui (400 pcs). Rui is highly efficient at utilizing zooplankton and commercial pellet feeds, leading to fast weight gain.',
        '🔵 Bottom Feeders: To clean and feed on benthic organisms and debris at the bottom sediment, stock Mrigal (150 pcs), Kalibaus (250 pcs), and Black Carp (50 pcs) for aquatic snail control.',
        '🌿 All-Layer Feeders (Grass Carp): Stock Grass Carp (250 pcs) to consume aquatic weeds, grass, and vegetation, maintaining a cleaner water column.',
        '🐟 Additional Premium Catfish (Magur): Stock Magur at 1,000–1,200 pcs per bigha. Magur utilizes leftover organic waste, is highly resilient, and commands premium market pricing.',
        'Total Stocking & Density: Total fingerlings stocked per bigha should be 2,550–2,750 pcs. This averages out to approximately 80–85 fingerlings per decimal (1 decimal = 435.6 sq ft).',
        'Crucial Management Guidelines: (1) Ensure all fingerlings are healthy, virus-free, and of a uniform 4–6 inches size. (2) When stocking Magur, maintaining a high dissolved oxygen level (DO > 5 mg/L) is critical. Keep tabs on pond health parameters to optimize performance.'
      ]
    }
  },
  {
    id: 'oxygen-demand-science',
    colorTheme: 'from-[#e0f2fe]/20 to-white border-sky-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'পানিতে দ্রবীভূত অক্সিজেন (D.O.) ও মাছের অক্সিজেনের প্রকৃত চাহিদা',
      category: 'পুকুর বিজ্ঞান ও বায়োকেমিস্ট্রি',
      readTime: '৪ মিনিট রিড',
      summary: 'পানিতে দ্রবীভূত অক্সিজেন (DO) কীভাবে তৈরি হয়, রাতে দ্রুত কমে যাওয়ার কারণ, মাছের প্রকৃত অক্সিজেন চাহিদার বিজ্ঞান এবং সোডিয়াম পার-কার্বনেট থেকে অক্সিজেন উৎপাদনের বাস্তব গাণিতিক হিসাব।',
      content: [
        'ভূমিকা: পানিতে দ্রবীভূত অক্সিজেন (Dissolved Oxygen - DO) হলো পানিতে মুক্ত অবস্থায় থাকা অক্সিজেন, যা মাছ, চিংড়ি এবং অন্যান্য জলজ প্রাণীর জীবনধারণ ও শ্বাস-প্রশ্বাসের জন্য অত্যন্ত গুরুত্বপূর্ণ।',
        'উৎপাদন প্রক্রিয়া: সূর্যের আলোর উপস্থিতিতে ফাইটোপ্ল্যাঙ্কটন ও জলজ উদ্ভিদ সালোকসংশ্লেষণ প্রক্রিয়ার মাধ্যমে কার্বন ডাই-অক্সাইড ও পানি ব্যবহার করে খাদ্য তৈরি করে এবং অক্সিজেন পানিতে নিঃসরণ করে। অনুকূল পরিবেশে (পর্যাপ্ত সূর্যালোক, উপযুক্ত তাপমাত্রা ও ভালো পানির স্বচ্ছতা) দিনে অক্সিজেনের মাত্রা ৫–৮ মিগ্রা./লিটার বা তার বেশি হতে পারে।',
        'রাতে হ্রাস পাওয়ার কারণ: রাতে সূর্যালোক না থাকায় সালোকসংশ্লেষণ সম্পূর্ণ বন্ধ থাকে, কিন্তু শৈবাল, জলজ উদ্ভিদ ও মাছ সবারই শ্বাস-প্রশ্বাস চলতে থাকে। ফলে দ্রবীভূত অক্সিজেনের মাত্রা দ্রুত কমে ভোরে ৩–৪ মিগ্রা./লিটার বা তার নিচে নেমে যায় যা মাছকে খাবি খাওয়াতে বাধ্য করে।',
        'চাহিদার প্রভাবকসমূহ: মাছের অক্সিজেন চাহিদার হার প্রধানত ৪টি বিষয়ের ওপর নির্ভর করে: (১) মাছের প্রজাতি, (২) আকার ও ওজন, (৩) পানির তাপমাত্রা এবং (৪) মাছের সক্রিয়তা ও চঞ্চলতা।',
        'অক্সিজেন গ্রহণের পরিমাণ: সাধারণ অবস্থায় ১ কেজি ওজনের জীবিত মাছ প্রতি ঘণ্টায় প্রায় ৩০০–৫০০ মিগ্রা. (০.৩–০.৫ গ্রাম) অক্সিজেন গ্রহণ করে। অর্থাৎ, ১০০ গ্রাম ওজনের একটি মাছ প্রতি ঘণ্টায় প্রায় ৩০–৫০ মিগ্রা. অক্সিজেন গ্রহণ করে। সেই হিসেবে ১ কেজি মাছ ২৪ ঘণ্টায় আনুমানিক ৭–১২ গ্রাম অক্সিজেন ব্যবহার করে থাকে।',
        'সোডিয়াম পার-কার্বনেট থেকে অক্সিজেন উৎপাদন: ১ কেজি সোডিয়াম পার-কার্বনেট (Sodium Percarbonate, Na₂CO₃·1.5H₂O₂) সম্পূর্ণ বিক্রিয়ায় তাত্ত্বিকভাবে প্রায় ১৫৩ গ্রাম বিশুদ্ধ অক্সিজেন (O₂) উৎপন্ন করতে পারে। বাস্তবে পানিতে অক্সিজেনের ব্যবহারের হার তাপমাত্রা, pH এবং জৈব বর্জ্যের পরিমাণের ওপর ভিত্তি করে কিছুটা পরিবর্তিত হতে পারে।'
      ]
    },
    en: {
      title: 'Dissolved Oxygen (DO) Dynamics & Fish Oxygen Demand',
      category: 'Pond Science & Biochemistry',
      readTime: '4 min read',
      summary: 'Understand how dissolved oxygen (DO) is generated, why it plummets at night, the factors behind a fish\'s breathing demands, and the exact chemistry of Sodium Percarbonate oxygen release.',
      content: [
        'Introduction: Dissolved oxygen (DO) is the free, non-compound oxygen molecules present in water, which is highly critical for the cellular respiration and survival of fish, shrimp, and other aquatic organisms.',
        'DO Generation: In the presence of sunlight, microalgae (phytoplankton) and aquatic plants perform photosynthesis, converting carbon dioxide and water into chemical energy and releasing pure oxygen into the pond water. Under optimal conditions (bright light, balanced temperatures, clean transparency), daytime DO levels reach 5–8 mg/L or higher.',
        'Nocturnal Drops: Since photosynthesis halts completely at night without sunlight, plants, algae, and fish all switch to consuming oxygen for respiration. This drives dissolved oxygen concentration down rapidly, often plunging below 3–4 mg/L by early morning.',
        'Biological Factors: A fish\'s oxygen uptake varies continuously based on four key variables: (1) Fish species, (2) Body size and overall biomass weight, (3) Water temperature, and (4) Metabolic activity levels (hyperactive vs. sedentary species).',
        'Hourly Consumption Rates: Generally, 1 kg of live active fish consumes 300–500 mg (0.3–0.5g) of dissolved oxygen per hour. For instance, a 100g fish consumes approximately 30–50 mg of oxygen hourly. This means 1 kg of fish requires about 7–12g of oxygen over a 24-hour cycle depending on metabolic stress.',
        'Sodium Percarbonate Chemistry: 1 kg of active Sodium Percarbonate (Na₂CO₃·1.5H₂O₂) theoretically yields around 153 grams of pure dissolved oxygen (O₂) upon full dissolution. In practice, actual dissolved oxygen efficiency can fluctuate depending on temperature, water pH, and organic bottom waste.'
      ]
    }
  },
  {
    id: 'oxygen-depletion',
    colorTheme: 'from-[#ffebee]/10 to-white border-slate-200/80',
    publishDate: 'June 18, 2026',
    bn: {
      title: 'মেঘলা আবহাওয়ায় হঠাৎ পুকুরে অক্সিজেন সংকট ও প্রতিকার',
      category: 'অক্সিজেন ও ওয়াটার কেয়ার',
      readTime: '৩ মিনিট রিড',
      summary: 'আষাঢ় ও শ্রাবণ মাসে আকাশ টানা মেঘাচ্ছন্ন থাকলে সালোকসংশ্লেষণ বন্ধ হয়ে পুকুরে তীব্র অক্সিজেনের ঘাটতি তৈরি হয়। এ সময় মাছ ভেসে ওঠে ও মারা যেতে পারে।',
      content: [
        'ভূমিকা: বর্ষাকালে মেঘলা বা গুমোট আবহাওয়ায় সূর্যের আলো না থাকায় পুকুরে প্রাকৃতিক ফাইটোপ্ল্যাঙ্কটন সালোকসংশ্লেষণ করতে পারে না। ফলে পানিতে অক্সিজেন তৈরি বিঘ্নিত হয় এবং তলদেশে হাইড্রোজেন সালফাইডের মাত্রা বৃদ্ধি পায়।',
        'লক্ষণ: মাছ বা চিংড়ি সকালের দিকে পুকুরের উপরিভাগে এসে মুখ হাঁ করে খাবি খেতে থাকে, সাঁতার কাটার গতি কমে যায় এবং মাছ নিস্তেজ হয়ে পড়ে।',
        'করণীয়: পুকুরে তাৎক্ষণিক অক্সিজেন সরবরাহের জন্য প্রতি একরে ২৫০ গ্রাম থেকে ৫০০ গ্রাম অক্সিজেন দানাদার বা ট্যাবলেট (যেমন: অক্সিএড) সমস্ত পুকুরে ছড়িয়ে দিতে হবে। এটি পানিতে তাৎক্ষণিক দ্রবীভূত অক্সিজেন (D.O.) বৃদ্ধি করে মাছকে মৃত্যুর হাত থেকে বাঁচায়।',
        'প্রতিরোধমূলক পরামর্শ: অতিরিক্ত খাবার প্রয়োগ বন্ধ রাখুন, মেঘলা দিনে হররা বা পুকুরের জাল টানা থেকে বিরত থাকুন এবং পানিতে বায়োপ্রোব মেক্স নিয়মিত প্রয়োগ করুন।'
      ]
    },
    en: {
      title: 'Sudden Oxygen Depletion During Rainy & Cloudy Weather',
      category: 'Oxygen Control',
      readTime: '3 min read',
      summary: 'Continuous cloudy overcasts block natural photosynthesis, triggering severe dissolved oxygen (D.O.) drops in aquaculture ponds in Bangladesh.',
      content: [
        'Introduction: During heavy monsoon clouds, lack of sunlight stalls microalgae photosynthesis. This drives dissolved oxygen concentrations down and leads to fatal gas buildup.',
        'Symptoms: Fish or shrimp float lifelessly near the water surface early in the morning, gulping for air with rapid operculer movements.',
        'Immediate Remedies: Broadcast active oxygen producing supplements (such as Oxyadd) at a rate of 250g to 500g per acre. It instantly releases active elemental oxygen into the column to end gasping.',
        'Long-term Care: Suspend raw feed inputs on overcast days, avoid dragging bottom nets, and maintain regular soil probiotics dosages to decay sludge.'
      ]
    }
  },
  {
    id: 'ammonia-gas',
    colorTheme: 'from-slate-50 to-white border-slate-200/80',
    publishDate: 'June 12, 2026',
    bn: {
      title: 'পুকুরতলদেশে ক্ষতিকর অ্যামোনিয়া গ্যাস নিয়ন্ত্রণের উৎকৃষ্ট উপায়',
      category: 'গ্যাস ও পরিবেশ শোধন',
      readTime: '৪ মিনিট রিড',
      summary: 'অতিরিক্ত খাবার, মাছের মলমূত্র এবং পচা কাঁদা জমে পুকুরের তলদেশে বিষাক্ত অ্যামোনিয়া গ্যাস তৈরি হয়। এটি মাছের ফুলকা নষ্ট করে ও বৃদ্ধিতে বাধা দেয়।',
      content: [
        'সমস্যা: পুকুরের মাটি পরীক্ষা না করে ক্রমাগত নিবিড় চাষ করার কারণে কাদা কালো হয়ে বিষাক্ত অ্যামোনিয়া, মিথেন ও সালফাইড গ্যাসের সৃষ্টি হয়। ফলে মাটির উর্বরতা নষ্ট হয়ে ক্ষতিকর ব্যাকটেরিয়া বংশ বিস্তার করে।',
        'ক্ষয়ক্ষতি: গ্যাস বৃদ্ধির ফলে মাছের ফুলকা কালো হয়ে পচে যায়, খাবারের রুচি হারিয়ে ফেলে এবং সেকেন্ডারি ব্যাকটেরিয়াল ও ফাঙ্গাল সোর সংক্রমিত হয়।',
        'স্থায়ী সমাধান: ইউকা বায়োসল লিকুইড বা গ্যাসোনাল পাউডার পানিতে ছিটিয়ে দেওয়ার মাধ্যমে কাদা ও পানির ক্ষতিকারক গ্যাস দ্রুত মুক্ত করা যায়। এর মধ্যে থাকা প্রাকৃতিক নির্যাস গ্যাস বুদবুদ দূর করে দেয়।',
        'জৈবিক প্রতিরোধ: রোগ প্রতিরোধে ১৫ দিনে একবার ব্যাক্টিরিয়া সমৃদ্ধ "বায়োপ্রোব ম্যাক্স" প্রোবায়োটিক ব্যবহার করুন যা পুঞ্জীভূত জৈব বর্জ্য হজম করে কাদার শোধন ঘটায়।'
      ]
    },
    en: {
      title: 'Mitigating Toxic Gaseous Ammonia Buildups at the Pond Floor',
      category: 'Waste Bioremediation',
      readTime: '4 min read',
      summary: 'Excess toxic ammonia (NH3) resulting from surplus feed and decaying organic waste severely irritates gills and blocks standard growth curves.',
      content: [
        'The Hazard: High density stocking and nitrogen residues slowly form toxic black mud. It breeds volatile chemical compounds that compromise fish health.',
        'Biological Damage: It causes black gill rot, complete loss of feed attraction, and leaves fish vulnerable to opportunistic Aeromonas strains.',
        'Scientific Treatment: Spray premium Yucca Biosol liquid or Gasonull powder to neutralize toxic NH3 molecules instantly and restore oxygen circulation.',
        'The Preventive Loop: Use deep soil probiotics like Bioprob Max every fortnight to biochemically degrade bottom sludge before it rots.'
      ]
    }
  },
  {
    id: 'lice-argulus',
    colorTheme: 'from-[#ffebee]/10 to-white border-slate-200/80',
    publishDate: 'June 05, 2026',
    bn: {
      title: 'মাছের ক্ষতিকর উকুন ও সুতা পরজীবী চিরতরে দূর করার উপায়',
      category: 'পরজীবী ও রোগ দমন',
      readTime: '৩ মিনিট রিড',
      summary: 'মিষ্টি পানির মাছের গায়ে উকুন (Argulus) ও নোঙর পরজীবী মাছের রক্ত চুষে ক্ষত তৈরি করে। এর ফলে মাছের গতি কমে যায় এবং আঁশ খসে পড়ে অকাল মৃত্যু ঘটে।',
      content: [
        'লক্ষণ: পরজীবী আক্রান্ত মাছ নিজের গা পুকুরের পাড় বা কোনো খুঁটির সাথে ঘষতে থাকে, ছটফট করে লাফায়, শরীর রুগ্ন দেখায় এবং চামড়ায় লালচে ক্ষত স্পট পরিলক্ষিত হয়।',
        'আক্রান্ত প্রজাতি: রুই, কাতলা ও মৃগেল জাতীয় মাছে এই পরজীবীর আক্রমণ বেশি দেখা যায়। আক্রান্ত অবস্থায় মাছ খাদ্য গ্রহণ সম্পূর্ণ বন্ধ করে দেয়।',
        'প্রতিকার: প্রতি একরে ১০০ মিলি প্যারাটিন লিকুইড (আইভারমেকটিন ৩%) পানিতে গুলে সমানভাবে ছিটিয়ে দিন। এটি এককের ওপরের ও ভেতরের সুরক্ষায় পরজীবীকে চিরতরে দমন করে।',
        'জীবাণুমুক্তকরণ: পরজীবী দমন হওয়ার ৩ দিন পর পুকুরকে শতভাগ জীবাণুমুক্ত করতে প্রতি একরে ২৫০ মিলি জার্মবিট শক্তিশালী স্যানিটাইজার ব্যবহার করা উচিত।'
      ]
    },
    en: {
      title: 'Complete Eradication of Pond Lice (Argulus) & Anchor Worm Pests',
      category: 'Parasitology Care',
      readTime: '3 min read',
      summary: 'Argulus lice and anchor worms pierce scales to suck host blood, triggering extreme tissue lesions, poor feed conversion, and heavy mortality.',
      content: [
        'Infection Signs: Infected species repeatedly rub their bodies against bamboo frames, exhibit elevated swimming leaps, and have bleeding lesions on skin.',
        'Susceptible Carp: Big carps (Catla, Rui) are highly prone to massive outbreaks. In severe stages, secondary Saprolegnia fungus attacks the lesions.',
        'Effective Therapy: Broadcast Paratin Liquid (Ivermectin 3% active solution) at 100ml per acre (3-5ft depth) to quickly eliminate skin pests.',
        'Sterility Step: Always apply British formulation sanitizer Germbit after parasite removal to disinfect open fish wounds and prevent bacterial rot.'
      ]
    }
  }
];
