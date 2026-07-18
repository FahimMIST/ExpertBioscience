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
        'পানির রাসায়নিক শোধন ও প্রতিরোধ: গুলসা পুকুরে নিয়মিত চুন, জীবাণুনাশক, লবণ, এবং উপকারী ব্যাকটেরিয়া বা সয়েল প্রোবায়োটিক (যেমন **বায়োপ্রোব ম্যাক্স (Bioprob Max)**) প্রয়োগ করতে হবে। এছাড়া খারাপ আবহাওয়ার আগে (যেমন অতিবৃষ্টি বা মেঘলা আকাশ) পুকুরে আগে থেকেই প্রয়োজনীয় প্রস্তুতি ও অক্সিজেন পাউডার রাখা অত্যন্ত জরুরি।',
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
        'Biosecurity & Water Conditioning: Regularly apply agricultural lime, disinfectants, non-iodized salt, and beneficial probiotics (such as **Bioprob Max**) to keep the biological flora clean. Prioritize oxygen reserves (such as **Oxyadd**) and toxic gas removers before heavy rains or dark cloudy weather.',
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
        'পুকুর প্রস্তুতির ১০টি বিজ্ঞানসম্মত ধাপ (৬-১০): (৬) চুন দেওয়ার ৩ দিন পর নতুন পানি প্রবেশ করানো, (৭) পানি দেওয়ার পরদিন প্রতি শতাংশে ৫০-৭৫ গ্রাম **জিওপ্রোব প্লাস (Geoprob Plus)** এবং ৩-৪ গ্রাম **গ্যাসোনাল (Gasonal)** প্রয়োগ করা, (৮) ৩ দিন পর **বায়োপ্রোব ম্যাক্স (Bioprob Max)** প্রতি শতাংশে ১০-১৫ গ্রাম ছিটানো, (৯) **বায়োপ্রোব ম্যাক্স (Bioprob Max)** দেওয়ার ২-৩ দিন পর পোনা মজুদ করা, (১০) রেণু মজুদের ঠিক পূর্বে তলদেশ হালকাভাবে নাড়তে হবে বা হরা টানতে হবে এবং পর্যাপ্ত অক্সিজেন নিশ্চিত করতে **অক্সিএড গ্রানুলার (Oxyadd Granular)** দিতে হবে। পোনা মজুদের ২৪ ঘণ্টা আগে প্রয়োজনে প্রতি শতাংশে ৫ মিলি সুমিথিয়ন বা হাঁসপোকা কিলার প্রয়োগ করা যেতে পারে।'
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
        'Scientific Pond Preparation Steps (6 to 10): (6) Fill with clean iron-free water 3 days after liming, (7) The next day, apply 50-75g/decimal of **Geoprob Plus** and 3-4g/decimal of **Gasonull/Gasonal**, (8) After 3 days, apply 10-15g/decimal of **Bioprob Max** probiotic, (9) Stock after 2-3 days, (10) Drag a light chain across the bottom and apply ****Oxyadd** Granular** just before stocking to prevent stress. Apply registered insect/predator killers 24 hours prior if needed.'
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
        '🟢 উপরের স্তরের মাছ (Surface Feeder): পুকুরের উপরিভাগের ফাইটোপ্ল্যাঙ্কটন ও ভাসমান জৈব কণা খাওয়ার জন্য কাতলা (৩০০টি) এবং সিলভার কার্প বা বিগহেড কার্প (১৫০টি) মজুদ করতে হবে। দ্রষ্টব্য: সিলভার কার্প ও বিগহেডের খাদ্যাভ্যাস একই হওয়ায় যেকোনো একটি নির্বাচন করাই ভালো।',
        '🟡 মধ্যম স্তরের মাছ (Column Feeder): পানির মধ্যস্তরের খাবারের জন্য রুই (৪০০টি) মজুদ করুন। রুই মাছ জু-প্ল্যাঙ্কটন এবং বাণিজ্যিক পিলেট খাদ্য গ্রহণে অত্যন্ত দক্ষ হওয়ায় অত্যন্ত দ্রুত বৃদ্ধি পায়।',
        '🔵 নিচের স্তরের মাছ (Bottom Feeder): তলদেশের পচা জৈব আবর্জনা ও কীট-পতঙ্গ খেয়ে পুকুর পরিষ্কার রাখার জন্য মৃগেল (১৫০টি), কালিবাউশ (২৫০টি) এবং শামুক দমনের জন্য ব্ল্যাক কার্প (৫০টি) মজুদ করতে হবে।',
        '🌿 সর্বস্তরের খাদক (Grass Carp): পুকুরের জলজ আগাছা, ঘাস ও লতাপাতা খেয়ে পুকুর পরিষ্কার রাখতে এবং পানির কলাম সতেজ রাখতে গ্রাস কার্প (২৫০টি) মজুদ করুন।',
        '🐟 অতিরিক্ত লাভজনক মাছ (মাগুর): অতিরিক্ত প্রজাতি হিসেবে মাগুর ১,০০০–১,২০০টি মজুদ করা অত্যন্ত লাভজনক। মাগুর মাছ জলাশয়ের বাড়তি খাদ্য ও নিচের বর্জ্য খেয়ে বড় হয় এবং বাজারে এর ব্যাপক চাহিদা রয়েছে।',
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
        'করণীয়: পুকুরে তাৎক্ষণিক অক্সিজেন সরবরাহের জন্য প্রতি একরে ২৫০ গ্রাম থেকে ৫০০ গ্রাম অক্সিজেন দানাদার বা ট্যাবলেট (যেমন: **অক্সিএড**) সমস্ত পুকুরে ছড়িয়ে দিতে হবে। এটি পানিতে তাৎক্ষণিক দ্রবীভূত অক্সিজেন (D.O.) বৃদ্ধি করে মাছকে মৃত্যুর হাত থেকে বাঁচায়।',
        'প্রতিরোধমূলক পরামর্শ: অতিরিক্ত খাবার প্রয়োগ বন্ধ রাখুন, মেঘলা দিনে হররা বা পুকুরের জাল টানা থেকে বিরত থাকুন এবং পানিতে **বায়োপ্রোব মেক্স** নিয়মিত প্রয়োগ করুন।'
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
        'Immediate Remedies: Broadcast active oxygen producing supplements (such as **Oxyadd**) at a rate of 250g to 500g per acre. It instantly releases active elemental oxygen into the column to end gasping.',
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
        'স্থায়ী সমাধান: **ইউকা বায়োসল** লিকুইড বা **গ্যাসোনাল** পাউডার পানিতে ছিটিয়ে দেওয়ার মাধ্যমে কাদা ও পানির ক্ষতিকারক গ্যাস দ্রুত মুক্ত করা যায়। এর মধ্যে থাকা প্রাকৃতিক নির্যাস গ্যাস বুদবুদ দূর করে দেয়।',
        'জৈবিক প্রতিরোধ: রোগ প্রতিরোধে ১৫ দিনে একবার ব্যাক্টিরিয়া সমৃদ্ধ "**বায়োপ্রোব ম্যাক্স**" প্রোবায়োটিক ব্যবহার করুন যা পুঞ্জীভূত জৈব বর্জ্য হজম করে কাদার শোধন ঘটায়।'
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
        'Scientific Treatment: Spray premium **Yucca Biosol** liquid or **Gasonull** powder to neutralize toxic NH3 molecules instantly and restore oxygen circulation.',
        'The Preventive Loop: Use deep soil probiotics like **Bioprob Max** every fortnight to biochemically degrade bottom sludge before it rots.'
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
        'প্রতিকার: প্রতি একরে ১০০ মিলি ****প্যারাটিন** লিকুইড** (আইভারমেকটিন ৩%) পানিতে গুলে সমানভাবে ছিটিয়ে দিন। এটি এককের ওপরের ও ভেতরের সুরক্ষায় পরজীবীকে চিরতরে দমন করে।',
        'জীবাণুমুক্তকরণ: পরজীবী দমন হওয়ার ৩ দিন পর পুকুরকে শতভাগ জীবাণুমুক্ত করতে প্রতি একরে ২৫০ মিলি **জার্মবিট** শক্তিশালী স্যানিটাইজার ব্যবহার করা উচিত।'
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
        'Effective Therapy: Broadcast ****Paratin** Liquid** (Ivermectin 3% active solution) at 100ml per acre (3-5ft depth) to quickly eliminate skin pests.',
        'Sterility Step: Always apply British formulation sanitizer **Germbit** after parasite removal to disinfect open fish wounds and prevent bacterial rot.'
      ]
    }
  },
  {
    id: 'tilapia-history-intro',
    colorTheme: 'from-[#fef3c7]/20 to-white border-amber-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'তেলাপিয়া মাছের পরিচয় ও ইতিহাস এবং মনোসেক্স তেলাপিয়া উৎপাদন প্রযুক্তি',
      category: 'জাত পরিচিতি ও প্রজনন',
      readTime: '৫ মিনিট রিড',
      summary: 'বাংলাদেশে তেলাপিয়া চাষের ইতিহাস, প্রথম আমদানি থেকে শুরু করে আধুনিক GIFT জাতের আবির্ভাব এবং হরমোন ট্রিটমেন্টের মাধ্যমে মনোসেক্স পুরুষ তেলাপিয়া উৎপাদনের পেছনের জৈবিক বিজ্ঞান।',
      content: [
        'পরিচিতি ও সর্বাধিক চাষকৃত মাছ: বাংলাদেশে সর্বাধিক চাষকৃত মাছগুলোর মধ্যে তেলাপিয়া অন্যতম। এর বৈজ্ঞানিক নাম: Oreochromis mossambicus (মোজাম্বিক তেলাপিয়া)। তবে বর্তমানে উন্নত জাত হিসেবে Oreochromis niloticus (নাইল তেলাপিয়া) বাণিজ্যিকভাবে অত্যন্ত সফল ও অধিক পরিসরে চাষ করা হয়।',
        'বাংলাদেশে তেলাপিয়ার ইতিহাস: ১৯৫৪ সালে প্রথম আফ্রিকা থেকে মোজাম্বিক তেলাপিয়া বাংলাদেশে আনা হয়। পরবর্তীতে ১৯৭৪ সালে থাইল্যান্ড থেকে উন্নত নাইল তেলাপিয়া (Oreochromis niloticus) দেশে আনা হয় যা দেশীয় মৎস্যচাষে নতুন সম্ভাবনা উন্মোচন করে।',
        'উন্নত জাত GIFT Tilapia: GIFT (Genetically Improved Farmed Tilapia) হলো জেনেটিকালি উন্নত করা এক ধরণের তেলাপিয়া জাত। ১৯৯৪ সালে ওয়ার্ল্ডফিশ সেন্টার (তৎকালীন ICLARM), ফিলিপাইন থেকে GIFT Tilapia বাংলাদেশে আনা হয়। বর্তমানে এ জাতটি দেশের মৎস্যচাষে ও বাণিজ্যিক হ্যাচারিগুলোতে ব্যাপকভাবে ব্যবহৃত হচ্ছে।',
        'মনোসেক্স তেলাপিয়া (Monosex Tilapia) কী?: মনোসেক্স তেলাপিয়া বলতে একই লিঙ্গের (একক লিঙ্গের) তেলাপিয়াকে বোঝায়। বাণিজ্যিকভাবে সাধারণত পুরুষ তেলাপিয়া চাষ করা হয়। কারণ— পুরুষ তেলাপিয়া স্ত্রী মাছের তুলনায় অনেক দ্রুত বৃদ্ধি পায়, আকারে বড় হয়, food conversion বা খাদ্যকে অধিক দক্ষতার সঙ্গে মাংসে বা ওজনে রূপান্তর করতে পারে এবং অনাকাঙ্ক্ষিত প্রজনন কম বা শূন্য হওয়ায় পুকুরে মাছের ঘনত্ব নিয়ন্ত্রণে থাকে ও মোট উৎপাদন বেশি হয়। এ কারণে বাণিজ্যিকভাবে পুরুষ তেলাপিয়ার চাষকেই সাধারণভাবে মনোসেক্স তেলাপিয়া চাষ বলা হয়।',
        'মনোসেক্স তেলাপিয়া উৎপাদন পদ্ধতি: তেলাপিয়ার লিঙ্গ নির্ধারণ ডিম ফুটে পোনা বের হওয়ার পর প্রাথমিক বিকাশকারেই সম্পন্ন হয়। এই সময়কে কাজে লাগিয়ে মনোসেক্স (প্রধানত পুরুষ) তেলাপিয়া উৎপাদন করা হয়। ডিমের কুসুম (Yolk sac) শোষিত হওয়ার পর পোনাকে নির্দিষ্ট মাত্রায় ১৭-আলফা মিথাইল টেস্টোস্টেরন (17α-Methyltestosterone) মিশ্রিত খাদ্য সাধারণত ২১–২৮ দিন খাওয়ানো হয়। হরমোনটি সাধারণত ইথাইল অ্যালকোহলে দ্রবীভূত করে খাদ্যের সঙ্গে সমভাবে মিশিয়ে প্রস্তুত করা হয়।',
        'হরমোনের ভূমিকা ও প্রজনন সক্ষমতা: এই হরমোন প্রাথমিক লিঙ্গ বিভাজনের সময় স্ত্রী জননগ্রন্থির (Ovary) বিকাশ দমন করে এবং পুরুষ জননগ্রন্থির (Testis) বিকাশকে উৎসাহিত করে। ফলে অধিকাংশ পোনা কার্যকরভাবে পুরুষে রূপান্তরিত হয়। সঠিক ব্যবস্থাপনায় সাধারণত ৯৫–৯৮% পর্যন্ত পুরুষ তেলাপিয়া উৎপাদন সম্ভব। হরমোন ট্রিটমেন্টের মাধ্যমে উৎপাদিত পুরুষ তেলাপিয়া কিন্তু বন্ধ্যা (Sterile) নয়। এরা স্বাভাবিকভাবে প্রজননে সক্ষম এবং স্ত্রী তেলাপিয়ার সঙ্গে মিলিত হলে বংশবিস্তার করতে পারে।'
      ]
    },
    en: {
      title: 'Introduction & History of Tilapia and Monosex Breeding Technology',
      category: 'Species & Breeding Science',
      readTime: '5 min read',
      summary: 'The evolutionary history of Tilapia in Bangladesh, from initial African import to high-yielding GIFT varieties, alongside the biochemistry behind 17α-Methyltestosterone induced Monosex male Tilapia.',
      content: [
        'Introduction & Highly Cultivated Species: Tilapia is one of the most widely cultivated fish in Bangladesh. The scientific name of the first strain is Oreochromis mossambicus (Mozambique Tilapia). However, the Genetically Improved Oreochromis niloticus (Nile Tilapia) is now the commercial standard bred at large scale.',
        'History of Tilapia in Bangladesh: Mozambique Tilapia was first imported to Bangladesh from Africa in 1954. Later in 1974, the superior Nile Tilapia (Oreochromis niloticus) was introduced from Thailand, laying the groundwork for modern pond aquaculture.',
        'Genetically Improved Farmed Tilapia (GIFT): GIFT Tilapia was developed to enhance growth rates and survival. It was brought to Bangladesh in 1994 from the WorldFish Center (formerly ICLARM) in the Philippines. It is now the cornerstone of commercial hatcheries across the nation.',
        'What is Monosex Tilapia?: Monosex Tilapia refers to single-sex (exclusively male) cohorts. In commercial aquaculture, farming only males is highly preferred because males grow significantly faster, attain bigger sizes, convert feed to flesh with superior feed conversion ratio (FCR), and bypass energy loss from unwanted reproduction. This ensures high production and uniform harvest sizes.',
        'Production of Monosex Tilapia: Gender determination in Tilapia fry occurs during the early post-hatch developmental window. Right after the yolk sac absorption stage, swim-up fry are fed a starter crumble diet uniformly treated with the hormone 17α-Methyltestosterone (17α-MT) for 21 to 28 days. The hormone is typically dissolved in ethyl alcohol and thoroughly mixed with feed.',
        'Hormonal Pathway & Fertility: The androgenic hormone suppresses ovary formation during early gonad differentiation while stimulating testes development, effectively sex-reversing genetic females into phenotypic males. With proper hatchery management, a 95-98% male ratio is achieved. Note that these hormone-treated males are not sterile; they are fully reproductive and can breed normally if paired with mature females.'
      ]
    }
  },
  {
    id: 'tilapia-nursing-management',
    colorTheme: 'from-[#ecfdf5]/20 to-white border-emerald-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'মনোসেক্স তেলাপিয়া পোনা নার্সিং ও বৈজ্ঞানিক নার্সারি ব্যবস্থাপনা',
      category: 'তেলাপিয়া নার্সিং ও পুকুর প্রস্তুতি',
      readTime: '৫ মিনিট রিড',
      summary: 'তেলাপিয়া চাষে কালচার পুকুরে ছাড়ার পূর্বে নার্সিংয়ের গুরুত্ব, নার্সারি পুকুরের আদর্শ বৈশিষ্ট্য, সঠিক প্রস্তুতি, জৈব বর্জ্য দূরীকরণে প্রোবায়োটিক ফার্মেন্টেশন এবং সুমিথিয়নের সাহায্যে হাঁসপোকা দমন।',
      content: [
        'ভূমিকা ও নার্সিংয়ের প্রয়োজনীয়তা: তেলাপিয়া মাছ চাষে অধিক উৎপাদন ও লাভ নিশ্চিত করতে কালচার পুকুরের পাশাপাশি একটি পৃথক নার্সারি পুকুর থাকা অত্যন্ত গুরুত্বপূর্ণ। সাধারণত ৩–৪ হাজার লার্ভা (লাইন) বা সদ্য ফুটানো পোনা সংগ্রহ করে নার্সারি পুকুরে ৩০–৪৫ দিন প্রতিপালন করা হয়। এ সময়ের মধ্যে পোনার গড় ওজন ১০–১৫ গ্রাম হলে তা মূল কালচার পুকুরে মজুদ করা হয়। এতে পোনার মৃত্যুহার শূন্যে নেমে আসে।',
        'নার্সারি পুকুরের আদর্শ বৈশিষ্ট্য: পোনার সংখ্যা অনুযায়ী পুকুরের আয়তন ১০–৪০ শতক হতে পারে। পুকুরটি বন্যামুক্ত হতে হবে, যেখানে পর্যাপ্ত সূর্যালোক (প্রতিদিন কমপক্ষে ৮ ঘণ্টা) পাওয়া যায় এবং গাছপালার ছায়ামুক্ত থাকবে। সাপ, ব্যাঙ, হাঁসপোকা ও অন্যান্য ক্ষতিকর প্রাণীর আক্রমণ কম এমন স্থান নির্বাচন করতে হবে এবং পানি সেচ ও নিষ্কাশনের সুবিধা থাকতে হবে যেন প্রয়োজন অনুযায়ী পানির গভীরতা কমানো-বাড়ানোর ব্যবস্থা করা যায়।',
        'নার্সারি পুকুর প্রস্তুতির সঠিক ধাপ: প্রথমে পুকুর সম্পূর্ণ শুকিয়ে তলদেশ ও পাড়ের প্রয়োজনীয় মেরামত (গর্ত ভরাট, ভাঙা পাড় সংস্কার) সম্পন্ন করুন। পুকুরের চারপাশে সূক্ষ্ম জাল দিয়ে ঘিরে দিন, যাতে সাপ ও ব্যাঙ প্রবেশ করতে না পারে। পুকুরের তলদেশ হালকাভাবে নিড়ানি দিয়ে আলগা করে প্রতি শতকে ৫০০ গ্রাম পাথুরে চুন (CaCO₃) পানিতে গুলে সমগ্র পুকুরে সমানভাবে ছিটিয়ে দিন। চুন প্রয়োগের ৩ দিন পরে পুকুরে ২–২.৫ ফুট গভীরতা পর্যন্ত পানি প্রবেশ করান এবং পোনা মজুদের পর ধীরে ধীরে পানির গভীরতা বৃদ্ধি করুন। পানি প্রবেশের পরদিন মাটি ও পানির pH পরীক্ষা করে প্রয়োজন হলে অতিরিক্ত চুন দিন।',
        'জৈব বর্জ্য দূরীকরণে প্রোবায়োটিক ফার্মেন্টেশন: চুন প্রয়োগের প্রায় ৫ দিন পরে একটি বিশেষ প্রোবায়োটিক মিশ্রণ তৈরি করুন। প্রতি শতকের জন্য উপকরণ: আটা ২৫০ গ্রাম, চিটাগুড় ৫০ গ্রাম, ইস্ট ১০ গ্রাম এবং **বায়োপ্রোব ম্যাক্স** ৫ গ্রাম। সব উপকরণ পানির সঙ্গে মিশিয়ে ৪৮ ঘণ্টা একটি পরিষ্কার প্লাস্টিকের পাত্রে এয়ার-টাইট করে ফার্মেন্টেশন বা গাঁজন করুন। ৪৮ ঘণ্টা পর মিশ্রণটি রৌদ্রোজ্জ্বল দিনে সকাল ১০টা থেকে দুপুরের মধ্যে সমগ্র পুকুরে সমানভাবে ছিটিয়ে দিন। প্রোবায়োটিক প্রয়োগের ৫–৭ দিন পরে পোনা মজুদ করা যাবে যা প্রাকৃতিক জু-প্ল্যাঙ্কটন বাড়ায় এবং ক্ষতিকর প্যাথোজেন দমন করে।',
        'হাঁসপোকা ও ক্ষতিকর জলজ পোকা দমন: পোনা ছাড়ার আগে যদি পুকুরে হাঁসপোকা বা অন্যান্য শিকারি জলজ পোকা দেখা যায়, তাহলে পোনা মজুদের ২৪–৩০ ঘণ্টা পূর্বে প্রতি শতকে ৫ মিলি সুমিথিয়ন পানিতে মিশিয়ে ছিটান। সুমিথিয়ন প্রয়োগের পর নির্ধারিত সময় অতিক্রম করে তবেই পোনা ছাড়তে হবে এবং পুকুরের ওপর জাল বা সুতা টানিয়ে রাখতে হবে, যাতে মাছখেকো পাখি ও অন্যান্য শিকারি প্রাণীর আক্রমণ রোধ করা যায়।'
      ]
    },
    en: {
      title: 'Monosex Tilapia Fingerling Nursing & Scientific Nursery Management',
      category: 'Tilapia Nursing & Pond Preparation',
      readTime: '5 min read',
      summary: 'The biological importance of a dedicated nursery phase in Tilapia farming, optimal nursery pond characteristics, soil conditioning, probiotic fermentation, and aquatic predator control.',
      content: [
        'Introduction & Significance of Nursing: To secure maximum survival rates and high yields in Tilapia aquaculture, maintaining a separate nursery pond before final stocking is crucial. Generally, 3,000–4,000 high-line swim-up fry or hatchlings are stocked in nursery units for 30–45 days. Once they reach a robust size of 10–15 grams, they are transferred to the main grow-out ponds.',
        'Ideal Characteristics of Nursery Ponds: Depending on stocking density, nursery ponds should be 10–40 decimals in size. The site must be completely flood-free, receive at least 8 hours of daily direct sunlight, and be clear of overhanging tree shadows. It should be situated away from high frog, snake, or predatory insect populations, and equipped with reliable inlet/outlet pumps for precise water level controls.',
        'Pond Excavation & Soil Treatment: First, drain the pond fully to let the bottom dry and repair dykes. Install micro-mesh fences around the borders to block incoming frogs, crabs, and snakes. Loosen the topsoil slightly and broadcast agricultural lime (CaCO₃) at 500g per decimal. 3 days after liming, pump in clean water to a depth of 2–2.5 feet, gradually increasing it as fry grow. Test pH the following day and adjust if needed.',
        'Bioremediation via Probiotic Fermentation: About 5 days after liming, prepare a beneficial microbial starter. Per decimal requirements: Flour (250g), Molasses (50g), Yeast (10g), and **Bioprob Max** (5g). Mix these ingredients thoroughly in water and ferment in a clean, closed container for 48 hours. On a bright sunny day, broadcast the fermented mixture evenly between 10:00 AM and 2:00 PM. This boosts natural zooplankton and blocks pathogens. Stock fry 5-7 days later.',
        'Eradicating Predatory Aquatic Insects: If predatory backswimmers, water beetles, or other insects are present prior to stocking, apply Sumithion at 5ml per decimal 24–30 hours before releasing fry. Ensure the chemical safety interval is fully met, and install overhead bird nets to protect vulnerable fingerlings from aerial predators.'
      ]
    }
  },
  {
    id: 'ideal-fish-stocking-density-guide',
    colorTheme: 'from-[#ebf8ff]/20 to-white border-blue-150',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'পুকুরে মাছের আদর্শ মজুদ ঘনত্ব: ১০টি বাণিজ্যিক মাছের বৈজ্ঞানিক গাইডলাইন',
      category: 'পুকুর ব্যবস্থাপনা ও ঘনত্ব',
      readTime: '৭ মিনিট রিড',
      summary: 'বাংলাদেশের প্রধান প্রধান মৎস্য উৎপাদনকারী অঞ্চলের মাটি ও পানির গভীরতা অনুযায়ী কার্প, পাঙাশ, তেলাপিয়া, কৈ, শিং, মাগুর, পাবদা, গুলসা, টেংরা ও গলদা চিংড়ির একক ও মিশ্র চাষে শতক প্রতি আদর্শ পোনা মজুদ ঘনত্ব।',
      content: [
        'ভূমিকা ও সফল চাষের মূল চাবিকাঠি: লাভজনক মৎস্য চাষের প্রধানতম এবং সবচেয়ে সংবেদনশীল ধাপ হলো সঠিক ঘনত্বে সুস্থ পোনা মজুদ করা। পুকুরে ধারণক্ষমতার চেয়ে বেশি মাছ ছাড়লে যেমন অক্সিজেন সংকট, রোগবালাই ও মন্থর বৃদ্ধির ঝুঁকি বাড়ে, তেমনি কম ছাড়লে জায়গার অপব্যবহার ও উৎপাদন লোকসান হয়। বাংলাদেশের মাটি ও পানির গভীরতার তারতম্য অনুযায়ী বৈজ্ঞানিক পদ্ধতিতে আদর্শ মজুদ ঘনত্বের সঠিক উপাত্ত এখানে বিস্তারিত আলোচনা করা হলো।',
        '১. কার্পজাতীয় মাছ (রুই, কাতলা, মৃগেল ইত্যাদি): পানির গভীরতা ৫–৮ ফুট এবং এঁটেল দোঁআশ মাটি কার্প চাষের জন্য সবচেয়ে উপযোগী। মাঝারি ঘনত্বের মিশ্রচাষে (প্রতি শতাংশে) রুই ১০টি, মৃগেল বা কালিবাউশ ৬টি, কমন কার্প ২টি, সিলভার কার্প ২টি, কাতলা ২টি এবং গ্রাস কার্প ১টি করে মজুদ করতে হবে। অন্যদিকে কার্প ফ্যাটেনিং বা দ্রুত বড় করার জন্য (প্রতি শতাংশে) রুই ৮টি, মৃগেল বা কালিবাউশ ৩টি, সিলভার কার্প ১টি, কাতলা ১টি এবং গ্রাস কার্প ১টি করে মজুদ করা বাঞ্ছনীয়।',
        '২. পাঙাশ মাছ চাষ ব্যবস্থাপনা: পানির গভীরতা ৫–৬ ফুট এবং দোঁআশ মাটির পুকুরে পাঙাশ অত্যন্ত দ্রুত বৃদ্ধি পায়। মিশ্রচাষে শতাংশ প্রতি পাঙাশ ৪০টি এবং কার্পজাতীয় মাছ ৬–৭টি ছাড়তে হবে। একক চাষ পদ্ধতিতে শতাংশ প্রতি ৭০–৮০টি পাঙাশ পোনা মজুদ করা যায়।',
        '৩. তেলাপিয়া মাছের উন্নত মজুদ: পানির গভীরতা ৫–৬ ফুট এবং দোঁআশ মাটি তেলাপিয়া চাষের জন্য অত্যন্ত অনুকূল। মিশ্রচাষে শতাংশ প্রতি তেলাপিয়া ১২০টি এবং কার্পজাতীয় মাছ ৮–১০টি মজুদ করতে হবে। আর মনোসেক্স বা একক চাষ পদ্ধতিতে শতাংশ প্রতি ১৫০–১৮০টি তেলাপিয়া মাছের পোনা ছাড়লে সর্বোচ্চ উৎপাদন নিশ্চিত করা সম্ভব।',
        '৪. থাই কৈ মাছ চাষের মজুদ নিয়ম: পানির গভীরতা ৫–৬ ফুট এবং দোঁআশ মাটিতে কৈ চাষ সবচেয়ে ভালো হয়। যদি পুকুরে নিয়মিত পানি পরিবর্তনের আধুনিক ব্যবস্থা (Water Exchange System) থাকে, তবে প্রতি শতাংশে ১,২০০–১,৫০০টি পোনা মজুদ করা সম্ভব। তবে পানি পরিবর্তনের ব্যবস্থা না থাকলে শতাংশ প্রতি ৮০০টির বেশি কৈ পোনা মজুদ করা মোটেও নিরাপদ নয়।',
        '৫. শিং ও মাগুর মাছের আদর্শ ঘনত্ব: এঁটেল দোঁআশ মাটি ও ৫–৬ ফুট পানির গভীরতায় শিং মাছ চাষে অসাধারণ সাফল্য আসে। ইনটেনসিভ বা নিবিড় চাষ পদ্ধতিতে শতাংশ প্রতি ৩,০০০–৪,০০০টি শিং এবং সেমি-ইনটেনসিভ বা আধা-নিবিড় পদ্ধতিতে শতাংশ প্রতি ১,৫০০–২,০০০টি শিং মজুদ করতে হবে। মাগুর মাছের ক্ষেত্রে পানির গভীরতা ৫–৬ ফুট এবং এঁটেল দোঁআশ মাটিতে মিশ্রচাষে প্রতি শতাংশে ২০০টি মাগুর এবং ১০–১২টি কার্পজাতীয় মাছ ছাড়া যায়।',
        '৬. পাবদা, গুলসা ও দেশি টেংরা: পাবদা মাছের জন্য পানির গভীরতা ৫–৭ ফুট ও দোঁআশ মাটি আদর্শ। মিশ্রচাষে শতাংশ প্রতি পাবদা ৬০০টি ও কার্পজাতীয় মাছ ১২–১৪টি; আর একক (ইনটেনসিভ) চাষে প্রতি শতাংশে ১,০০০টি পোনা ছাড়া যায়। গুলসা মাছের জন্য পানির গভীরতা ৫–৭ ফুট ও এঁটেল দোঁআশ মাটিতে মিশ্রচাষে প্রতি শতাংশে গুলসা ৮০০টি ও কার্পজাতীয় মাছ ১০–১২টি এবং একক চাষে প্রতি শতাংশে ১,২০০টি ছাড়া যায়। দেশি টেংরার ক্ষেত্রে শতাংশ প্রতি মিশ্রচাষে ১,০০০টি টেংরা ও ১০–১২টি কার্পজাতীয় মাছ এবং একক চাষে ১,৫০০–২,০০০টি টেংরা পোনা মজুদ করা যায়।',
        '৭. গলদা চিংড়ি চাষের আধুনিক মজুদ: এঁটেল দোঁআশ মাটি ও ৫–৬ ফুট গভীরতায় গলদা চিংড়ি খুব ভালো বাড়ে। মিশ্রচাষে প্রতি শতাংশে গলদা চিংড়ি ৫০টি, রুই ৮টি, সিলভার কার্প ১টি এবং কাতলা ২টি মজুদ করা যায়। একক চাষ পদ্ধতিতে প্রতি শতাংশে ২০০–২৫০টি জুভেনাইল বা কিশোর আকারের সুস্থ চিংড়ির পোনা ছাড়লে চমৎকার ফলাফল পাওয়া যায়।',
        'উপসংহার ও ভৌগোলিক পরামর্শ: ময়মনসিংহের ত্রিশাল, ভালুকা, যশোরের মনিরামপুর এবং বগুড়ার মৎস্য খামারগুলোর মাটি ও পানির গুণগত মান, পানির গভীরতা, নিয়মিত এরেশনের ব্যবস্থা ও উন্নত খাবার ব্যবস্থাপনার ওপর ভিত্তি করে মজুদ ঘনত্ব কিছুটা কম বা বেশি হতে পারে। সফল চাষের পূর্বে অবশ্যই পানির pH, অ্যামোনিয়া ও ডিও (DO) পরীক্ষা করে নেওয়া বাঞ্ছনীয়।'
      ]
    },
    en: {
      title: 'Ideal Fish Stocking Density in Ponds: A Scientific Guide for 10 Commercial Species',
      category: 'Pond Management & Density',
      readTime: '7 min read',
      summary: 'Optimal stocking rates per decimal for Carp, Pangasius, Tilapia, Thai Koi, Shing, Magur, Pabda, Gulsha, Tengra, and Freshwater Prawns based on soil type and water depth in Bangladesh.',
      content: [
        'Introduction & Key to Aquaculture Success: The most critical decision in commercial aquaculture is determining the stocking density of fingerlings. Overstocking triggers oxygen crashes, stunting, and diseases, while understocking wastes valuable water bodies. This guide details scientifically validated stocking rates suited for soil and water characteristics across Bangladesh.',
        '1. Carp Species (Rui, Katla, Mrigel, etc.): Best suited for clay-loam soil with 5-8 feet of water. In medium-density polyculture (per decimal), stock Rui (10), Mrigel/Kalibaush (6), Common Carp (2), Silver Carp (2), Katla (2), and Grass Carp (1). For Carp Fattening, stock Rui (8), Mrigel/Kalibaush (3), Silver Carp (1), Katla (1), and Grass Carp (1) per decimal.',
        '2. Pangasius Culture: Requires loamy soil and 5-6 feet depth. In polyculture, stock Pangas (40) and Carp species (6-7) per decimal. For intensive monoculture, a density of 70-80 Pangas per decimal yields highly uniform sizes.',
        '3. Tilapia Stocking Dynamics: Best in loamy soils with 5-6 feet depth. In polyculture, stock Tilapia (120) and Carps (8-10) per decimal. In monosex monoculture, stocking 150-180 Tilapia fingerlings per decimal delivers maximum biomass and exceptional feed conversion.',
        '4. Thai Koi Management: Needs loamy soils and 5-6 feet depth. If high-capacity water exchange systems are active, stocking can go up to 1,200-1,500 Koi per decimal. Without water exchange, limit the density to 800 per decimal to prevent sudden toxic ammonia buildup.',
        '5. Shing & Magur Catfishes: Clay-loam soil and 5-6 feet depth are perfect. For Shing, intensive systems allow 3,000-4,000 fish per decimal, while semi-intensive setups require 1,500-2,000 per decimal. For Magur, mixed farming allows 200 Magur and 10-12 Carps per decimal.',
        '6. Pabda, Gulsha, and Tengra: Pabda prefers loamy soils and 5-7 feet depth; mixed stocking allows 600 Pabda and 12-14 Carps, while intensive monoculture supports 1,000 per decimal. Gulsha on clay-loam supports 800 Gulsha and 10-12 Carps in mixed ponds, or 1,200 in monoculture. Tengra mixed farming accommodates 1,000 Tengra and 10-12 Carps, whereas monoculture accommodates 1,500-2,000 per decimal.',
        '7. Golda Freshwater Prawns: Suited for clay-loam soils and 5-6 feet depth. Polyculture takes Golda (50), Rui (8), Silver Carp (1), and Katla (2) per decimal. For monoculture, stock 200-250 healthy juvenile prawns per decimal.',
        'Conclusion & Geographical Advisory: Farmers in major aquaculture hubs like Trishal, Bhaluka, Jessore, and Bogura can slightly scale these stocking densities up or down depending on aeration capacity, soil organic matter, and advanced feed management. Regularly monitoring pH, dissolved oxygen, and toxic ammonia levels is mandatory for sustaining high stocking loads.'
      ]
    }
  },
  {
    id: 'tilapia-feed-culture-management',
    colorTheme: 'from-[#ecfdf5]/25 to-white border-emerald-150',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'মনোসেক্স তেলাপিয়া চাষে বৈজ্ঞানিক খাদ্য ব্যবস্থাপনা, নিজস্ব পিলেট খাদ্য প্রস্তুত প্রণালী ও নিবিড় পরিচর্যা',
      category: 'কালচার পুকুর ও খাদ্য ব্যবস্থাপনা',
      readTime: '৬ মিনিট রিড',
      summary: 'বাণিজ্যিক তেলাপিয়া চাষে খাদ্যের খরচ কমানোর অব্যর্থ ফর্মুলা, নিজস্ব পিলেট খাদ্য মিশ্রণ শতকরা হিসাব, দৈনন্দিন নিবিড় পরিচর্যা গাইডলাইন এবং মিশ্র চাষে সতর্ক সংকেত।',
      content: [
        'ভূমিকা ও সর্বভুক খাদ্যাভ্যাস: তেলাপিয়া মাছ প্রকৃতিগতভাবে সর্বভুক (Omnivorous) হওয়ায় এরা বিভিন্ন ধরণের প্রাকৃতিক ও সম্পূরক খাদ্য অতি দ্রুত এবং আগ্রহের সাথে গ্রহণ করে থাকে। সফল ও লাভজনক বাণিজ্যিক তেলাপিয়া চাষের জন্য পুকুরের মোট খাদ্যের প্রায় ৩০% প্রাকৃতিক খাদ্য (ফাইটোপ্ল্যাঙ্কটন ও জু-প্ল্যাঙ্কটন) এবং বাকি ৭০% সম্পূরক কৃত্রিম খাদ্য থেকে সরবরাহ করা উচিত। প্রাকৃতিক ও কৃত্রিম খাবারের এই সঠিক সমন্বয়েই মাছের রোগ প্রতিরোধ ক্ষমতা এবং আশানুরূপ বৃদ্ধি নিশ্চিত হয়।',
        'উন্নত প্রোটিন মাত্রা ও মজুদের ভিত্তিতে খাদ্য হার: তেলাপিয়া চাষের প্রথম ৩ মাস অর্থাৎ চাষের শুরুর দিকে ২৮% প্রোটিনযুক্ত খাদ্য সরবরাহ করা উচিত এবং চাষের শেষের ২ মাস অর্থাৎ বাজারজাতকরণের ঠিক পূর্বে ২৬% প্রোটিনযুক্ত খাদ্য সরবরাহ করাই যথেষ্ট। পোনা মজুদের শুরুর দিকে কালচার পুকুরে প্রথমে মোট মাছের জীবন্ত ওজনের (Biomass) ৮–১০% হারে খাদ্য প্রদান শুরু করতে হবে এবং মাছের ওজন বৃদ্ধির সাথে সাথে এই হার ধীরে ধীরে হ্রাস করে ২–৩%-এ নামিয়ে আনতে হবে। প্রতিদিনের মোট খাবার অবশ্যই দুই বেলা সমান ভাগে ভাগ করে সকালে এবং বিকেলে পুকুরে ছিটানো আবশ্যক।',
        'ভাসমান রেডি ফিডের অর্থনৈতিক চ্যালেঞ্জ ও নিজস্ব পিলেট ফর্মুলেশন: বর্তমান বাজারে শুধুমাত্র বাণিজ্যিকভাবে উৎপাদিত ভাসমান (Floating) রেডি ফিড ব্যবহার করে তেলাপিয়া চাষে আশানুরূপ লাভ করা অত্যন্ত কঠিন। কারণ ১ কেজি তেলাপিয়া উৎপাদনে সাধারণত ১.৩–১.৫ কেজি ভাসমান রেডি খাদ্যের প্রয়োজন হয় (FCR: 1.3-1.5)। তাই উৎপাদন খরচ বা ফিড কস্ট উল্লেখযোগ্যভাবে কমানোর জন্য ভাসমান খাদ্যের পাশাপাশি খামারিরা নিজস্বভাবে পিলেট খাদ্য প্রস্তুত করে ব্যবহার করতে পারেন। নিজস্ব পিলেট তৈরির মূল ফর্মুলাটি হলো: ফিশমিল ৩০%, সয়ামিল ২০%, অ্যাঙ্কর ডাল বা রেপসিড কেক ২০%, আটা বা ভুট্টার গুঁড়া ১০%, অটো ব্রান ২০%, এবং সাথে **বায়োপ্রোব ম্যাক্স (Bioprob Max)** ১%।',
        'অতিরিক্ত পুষ্টি উপাদান ও এনজাইমের সংযোজন: নিজস্ব প্রস্তুতকৃত পিলেট খাদ্যের গুণগত মান ও হজম ক্ষমতা বহুগুণ বাড়াতে এর সঙ্গে অতিরিক্ত কিছু প্রিমিক্স অবশ্যই মেশাতে হবে। প্রতি ১০০ কেজি মিশ্রণের জন্য উপকরণসমূহ হলো: **ফার্মিজাইম (Farmizyme)** এনজাইম ১% এবং **গ্রোভিটা ম্যাক্স (Grovita Max)** মাল্টিভিটামিন প্রিমিক্স ২.৫%। এই উপাদানগুলো নিজস্ব তৈরি খাবারের পুষ্টি শোষণ ক্ষমতা ও সুষম বৃদ্ধি তরান্বিত করে।',
        'নিবিড় পরিচর্যা ও ওয়াটার কোয়ালিটি কন্ট্রোল: সফল পরিচর্যার প্রধান কিছু নীতি মেনে চলা আবশ্যক: (১) পুকুরে কোনো অবস্থাতেই কাঁচা গরুর গোবর বা মুরগির লিটার ব্যবহার করবেন না, কারণ এগুলো তীব্র ক্ষতিকর গ্যাস ও ই-কোলাই জাতীয় রোগ ছড়ায়; (২) প্রয়োজন না হলে অপ্রয়োজনীয় জৈব বা রাসায়নিক সার প্রয়োগ থেকে বিরত থাকুন; (৩) কাদা শোধন ও ক্ষতিকর প্যাথোজেন নিয়ন্ত্রণে মাসে অন্তত একবার হলেও **বায়োপ্রোব ম্যাক্স (Bioprob Max)** পুকুরে প্রয়োগ করুন; (৪) প্রয়োজনে অভিজ্ঞ মৎস্য কর্মকর্তার পরামর্শ অনুযায়ী সঠিক মাত্রায় চুন ও লবণ ব্যবহার করুন; (৫) পুকুরের পানির রঙ সবসময় হালকা সবুজ (Light Green) রাখার চেষ্টা করুন এবং প্রতি ১০ দিন পরপর মাছের স্বাস্থ্য পরীক্ষা করে নমুনা ওজনের ভিত্তিতে খাদ্য সমন্বয় করুন।',
        'মিশ্র চাষে সতর্কতা ও লাভজনক পরিসংহার: তেলাপিয়ার সঙ্গে পাঙাশ চাষ করলে পাঙাশের দ্রুত খাদ্য গ্রহণের অভ্যাসের কারণে তেলাপিয়া পর্যাপ্ত খাবার পায় না। আবার শিং, মাগুর, পাবদা, গুলসা, টেংরা ও কৈ মাছের সঙ্গে মিশ্র চাষ করলে তেলাপিয়ার অত্যন্ত দ্রুত খাদ্য গ্রাস করার কারণে অন্য মাছগুলো পর্যাপ্ত পুষ্টি থেকে বঞ্চিত হয়। পরিশেষে, যেসব এলাকায় তেলাপিয়া মাছের পাইকারি বাজারদর প্রতি মণ ৬,০০০ টাকার কম, সেখানে বাণিজ্যিক তেলাপিয়া চাষ সাধারণত লাভজনক নাও হতে পারে। সফল চাষ নিশ্চিত করতে অবশ্যই নির্ভরযোগ্য হ্যাচারি থেকে উন্নত মানের মনোসেক্স পোনা সংগ্রহ করতে হবে এবং পানির গুণগত মান ও সঠিক খাদ্যের নিবিড় পরিচর্যা নিশ্চিত করতে হবে।'
      ]
    },
    en: {
      title: 'Scientific Feed Management, Homemade Pellet Formulation, and Intensive Care for Monosex Tilapia',
      category: 'Grow-out Pond & Feed Management',
      readTime: '6 min read',
      summary: 'A highly optimized roadmap for lowering Tilapia Feed Conversion Ratio (FCR) using homemade pellet feed preparation percentages, daily water quality maintenance, and polyculture warnings.',
      content: [
        'Introduction & Omnivorous Appetite: Tilapia is naturally omnivorous, capable of consuming both zooplankton/phytoplankton and supplemental artificial feeds with extreme high conversion efficiency. For highly profitable commercial grow-out ponds, approximately 30% of their total daily nourishment should come from natural pond productivity, while the remaining 70% must be supplemented via protein-balanced artificial feeds.',
        'Optimal Protein Levels & Biomass Feed Rates: During the early grow-out phase (first 3 months), feed with a minimum of 28% crude protein is recommended. As fish reach the final finishing phase, 26% protein is sufficient. Initially, begin feeding at a rate of 8–10% of total live body weight (biomass), gradually tapering down to 2–3% as the average body weight climbs. Divide the daily ration into two equal meals, feeding once in the morning and once in the afternoon.',
        'Economic Challenges of Floating Feeds & Homemade Pellet Formula: Relying exclusively on commercial floating feeds makes profitability extremely thin because 1.3 to 1.5 kg of floating feed is required to produce 1 kg of Tilapia (FCR 1.3-1.5). To significantly cut costs, farmers are advised to supplement with homemade pellet feed. The optimized basal mix consists of: Fish meal (30%), Soy meal (20%), Anchor pea meal or Rapeseed cake (20%), Flour or Corn meal (10%), Auto bran (20%), and **Bioprob Max** probiotic powder (1%).',
        'Essential Enzymes & Nutritional Premixes: To elevate the digestion and absorption rates of homemade pellets, specific additives must be blended prior to pelleting. Per 100 kg of feed mix, add: **Farmizyme** (digestive multi-enzyme) at 1% and **Grovita Max** (premium growth-promoting mineral/multivitamin) at 2.5%. These additives maximize cellular nutrient absorption and reduce feed wastage.',
        'Intensive Care & Pond Environmental Standards: Maintain strict water quality standards: (1) Never apply raw cow dung or poultry litter as they release toxic gases and breed pathogens; (2) Refrain from adding chemical or organic fertilizers unless water transparency is too high; (3) Apply soil probiotic **Bioprob Max** at least once a month to break down toxic pond sludge; (4) Use agricultural lime and non-iodized salt based on water pH test results; (5) Keep water color light green at all times, checking fish weight every 10 days to adjust feed ratios.',
        'Polyculture Pitfalls & Market Feasibility: Avoid cultivating Tilapia with Pangas, as the aggressive feeding of Pangas starves Tilapia. Conversely, if Tilapia is co-cultured with Shing, Magur, Pabda, Gulsha, Tengra, or Thai Koi, Tilapias devour the feed too rapidly, leaving other high-value species under-fed. Lastly, in regions where wholesale Tilapia prices are below 6,000 BDT per maund (40 kg), intensive farming may not be financially viable. Always purchase high-quality monosex fingerlings from certified hatcheries to prevent stunted growth and secure your profit.'
      ]
    }
  },
  {
    id: 'ideal-fish-stocking-density',
    colorTheme: 'from-[#eff6ff]/25 to-white border-blue-150',
    publishDate: 'July 17, 2026',
    bn: {
      title: 'মাছের আদর্শ মজুদ ঘনত্ব ও বৈজ্ঞানিক পুকুর ব্যবস্থাপনা নির্দেশিকা',
      category: 'পুকুর ব্যবস্থাপনা ও মজুদ ঘনত্ব',
      readTime: '৮ মিনিট রিড',
      summary: 'বাণিজ্যিক মৎস্য চাষে ১০টি প্রধান মাছের শতক প্রতি আদর্শ মজুদ ঘনত্ব, মিশ্র ও একক চাষের সঠিক অনুপাত টেবিল এবং সর্বোচ্চ ফলন নিশ্চিতে বিশেষজ্ঞদের বিশেষ ব্যবস্থাপনা গাইড।',
      content: [
        'ভূমিকা ও মজুদ ঘনত্বের গুরুত্ব: বাণিজ্যিক মৎস্য চাষে লাভবান হওয়ার সবচেয়ে মূল চাবিকাঠি হলো পুকুরে সঠিক ঘনত্বে পোনা মজুদ করা। অতিরিক্ত মজুদ যেমন পানির পরিবেশ নষ্ট করে রোগব্যাধি ছড়ায়, তেমনি কম মজুদ পুকুরের জায়গার অপচয় করে এবং লাভ কমিয়ে দেয়। তাই মাছের সঠিক বৃদ্ধি ও সর্বোচ্চ ফলন পাওয়ার জন্য প্রতিটি প্রজাতির জন্য বিজ্ঞানসম্মত মজুদ ঘনত্ব মেনে চলা আবশ্যক। নিচে ১০টি প্রধান মাছের শতক প্রতি আদর্শ মজুদ ঘনত্ব তালিকাভুক্ত করা হলো।',
        '[TABLE]: | মাছের প্রজাতি | একক চাষ (শতক প্রতি) | মিশ্র চাষ (শতক প্রতি) | পানির গভীরতা | মাটির প্রকারভেদ |\n|---|---|---|---|---|\n| কার্পজাতীয় (Carp) | - | কাতলা (১), রুই (৮), মৃগেল (৩), সিলভার (১), গ্রাস কার্প (১) | ৫–৬ ফুট | দোঁআশ |\n| পাঙাশ (Pangas) | ৭০–৮০ টি | পাঙাশ (৪০), কার্পজাতীয় (৬-৭) | ৫–৬ ফুট | দোঁআশ |\n| তেলাপিয়া (Tilapia) | ১৫০–১৮০ টি | তেলাপিয়া (১২০), কার্পজাতীয় (৮-১০) | ৫–৬ ফুট | দোঁআশ |\n| থাই কৈ (Thai Koi) | ১২০০–১৫০০ টি (পানি পরিবর্তন সহ) / ৮০০ টি (পানি পরিবর্তন ছাড়া) | - | ৫–৬ ফুট | দোঁআশ |\n| শিং মাছ (Shing) | ৩০০০–৪০০০ টি (নিবিড়) / ১৫০০–২০০০ টি (আধা-নিবিড়) | - | ৫–৬ ফুট | এঁটেল দোঁআশ |\n| মাগুর মাছ (Magur) | - | মাগুর (২০০), কার্পজাতীয় (১০-১২) | ৫–৬ ফুট | এঁটেল দোঁআশ |\n| পাবদা মাছ (Pabda) | ১০০০ টি (একক) | পাবদা (৬০০), কার্পজাতীয় (১২-১৪) | ৫–৭ ফুট | দোঁআশ |\n| গুলসা মাছ (Gulsha) | ১২০০ টি (একক) | গুলসা (৮০০), কার্পজাতীয় (১০-১২) | ৫–৭ ফুট | এঁটেল দোঁআশ |\n| দেশি টেংরা (Tengra) | ১৫০০–২০০০ টি (একক) | টেংরা (১০০০), কার্পজাতীয় (১০-১২) | ৫–৭ ফুট | এঁটেল দোঁআশ |\n| গলদা চিংড়ি (Golda) | ২০০–২৫০ টি | গলদা (৫০), রুই (৮), কাতলা (২), সিলভার (১) | ৫–৬ ফুট | এঁটেল দোঁআশ |',
        '১. কার্পজাতীয় মাছের ব্যবস্থাপনা: কার্পজাতীয় মাছ সাধারণত বিভিন্ন স্তরের খাবার গ্রহণ করে। তাই রুই, কাতলা ও মৃগেলের এই ভারসাম্য বজায় রাখা জরুরি। গ্রাস কার্প পুকুরের চারপাশের ঘাস ও আগাছা খেয়ে পুকুর পরিষ্কার রাখে। কাতলা উপরিভাগের জু-প্ল্যাঙ্কটন এবং রুই মধ্যভাগের ফাইটোপ্ল্যাঙ্কটন আহার করে।',
        '২. মনোসেক্স তেলাপিয়া ও পাঙাশ ব্যবস্থাপনা: তেলাপিয়া ও পাঙাশ অত্যন্ত রাক্ষুসে স্বভাবের না হলেও দ্রুত খাবার সাবাড় করে। মিশ্র চাষের ক্ষেত্রে কার্পের সংখ্যা সীমিত রাখা বাঞ্ছনীয় যেন অন্য মাছ খাবারের জন্য বঞ্চিত না হয়। পানিতে অ্যামোনিয়া ও বিষাক্ত গ্যাস দূরীকরণে প্রতি মাসে একবার **বায়োপ্রোব ম্যাক্স (Bioprob Max)** প্রয়োগ করতে হবে।',
        '৩. শিং, মাগুর ও কৈ মাছের নিবিড় পরিচর্যা: থাই কৈ মাছ চাষে যদি উচ্চ মাত্রায় পানি পরিবর্তন করার সুবিধা থাকে, তবেই ১৫০০টি পর্যন্ত পোনা মজুদ করা উচিত; অন্যথায় ৮০০টি নিরাপদ সীমা। শিং ও মাগুর মাছে ব্যাকটেরিয়াল ইনফেকশন ও লেজ পচা রোগ নিয়ন্ত্রণে নিয়মিত কাদা শোধন করা এবং সয়েল প্রোবায়োটিক দিয়ে তলদেশ পরিষ্কার রাখা জরুরি।',
        '৪. পাবদা, গুলসা ও টেংরা চাষের বিশেষ পরামর্শ: পাবদা ও গুলসা অত্যন্ত সূক্ষ্ম ও সংবেদনশীল মাছ। পোনা মজুদের আগে সুমিথিয়ন দিয়ে হাঁসপোকা দমন করা বাধ্যতামূলক, কারণ হাঁসপোকা এদের নরম শরীর কামড়ে ক্ষত সৃষ্টি করতে পারে। পানির গভীরতা সবসময় ৫ থেকে ৭ ফুট বজায় রাখা উচিত।',
        '৫. গলদা চিংড়ি চাষের কৌশল: গলদা চিংড়ির ভালো বৃদ্ধির জন্য পুকুরের তলায় পর্যাপ্ত লুকাভাঙ্গা বা কৃত্রিম আশ্রয়স্থল (যেমন বাঁশের কঞ্চি বা পাইপ) স্থাপন করতে হবে, যা খোলস পরিবর্তনের সময় এদের অন্য চিংড়ির আক্রমণ থেকে বাঁচায়। পুকুরে যেন জলজ আগাছা বা তলায় অতিরিক্ত পচা পাতা না থাকে সেদিকে খেয়াল রাখুন।',
        'উপসংহার ও সাধারণ পরামর্শ: সফল ও লাভজনক চাষে শুধু ভালো পোনা ফেললেই হবে না, বরং নিয়মিত কাদা শোধন, অ্যামোনিয়া গ্যাস নিয়ন্ত্রণ এবং পুষ্টি সমৃদ্ধ ভাসমান বা নিজস্ব তৈরি সুষম পিলেট খাদ্য নিশ্চিত করতে হবে। যেকোনো জরুরি রোগে অভিজ্ঞ মৎস্য কর্মকর্তার পরামর্শ অনুযায়ী সঠিক মাত্রায় চুন, লবণ বা জীবাণুনাশক ব্যবহার করুন।'
      ]
    },
    en: {
      title: 'Ideal Fish Stocking Density & Scientific Pond Management Roadmap',
      category: 'Pond Management & Stocking Density',
      readTime: '8 min read',
      summary: 'A definitive scientific guide mapping ideal stocking densities for 10 major commercial fish species in Bangladesh, detailed density tables, and specialist management insights.',
      content: [
        'Introduction & Importance of Density: The ultimate baseline of profitable commercial aquaculture is maintaining optimal fish stocking density. Overstocking causes severe water quality deterioration, stress, and lethal diseases, while understocking fails to maximize yield and returns. Following scientific guidelines for each species is mandatory. Below is the ideal stocking rate per decimal for 10 major species.',
        '[TABLE]: | Species | Monoculture (Per Dec) | Polyculture (Per Dec) | Water Depth | Soil Preference |\n|---|---|---|---|---|\n| Carps (Carp) | - | Rui (8), Mrigel (3), Katla (1), Silver (1), Grass Carp (1) | 5–6 ft | Loam |\n| Pangasius (Pangas) | 70–80 pcs | Pangas (40), Associated Carps (6-7) | 5–6 ft | Loam |\n| Tilapia (Monosex) | 150–180 pcs | Tilapia (120), Associated Carps (8-10) | 5–6 ft | Loam |\n| Thai Koi (Koi) | 1,200–1,500 pcs (with exchange) / 800 pcs (no exchange) | - | 5–6 ft | Loam |\n| Shing Catfish | 3,000–4,000 pcs (Intensive) / 1,500–2,000 pcs (Semi-Intensive) | - | 5–6 ft | Clay Loam |\n| Magur Catfish | - | Magur (200), Associated Carps (10-12) | 5–6 ft | Clay Loam |\n| Pabda Catfish | 1,000 pcs (Mono) | Pabda (600), Associated Carps (12-14) | 5–7 ft | Loam |\n| Gulsha Catfish | 1,200 pcs (Mono) | Gulsha (800), Associated Carps (10-12) | 5–7 ft | Clay Loam |\n| Tengra Catfish | 1,500–2,000 pcs (Mono) | Tengra (1,000), Associated Carps (10-12) | 5–7 ft | Clay Loam |\n| Golda Prawn | 200–250 pcs | Golda (50), Rui (8), Katla (2), Silver (1) | 5–6 ft | Clay Loam |',
        '1. Carp Species Management: Carp polyculture utilizes different depth zones perfectly. Katla takes surface zooplankton, Rui feeds on column phytoplankton, and Mrigel/Kalibaush feeds on bottom organic waste. Grass Carp feeds on external grass, keeping the pond clean.',
        '2. Monosex Tilapia & Pangas Management: Both species feed aggressively. Ensure associated carps in polyculture are stocked within recommended limits to prevent starvation. Maintain water quality and eliminate harmful bottom sludge by treating monthly with **Bioprob Max** probiotic.',
        '3. Shing, Magur, and Thai Koi Special Care: If active water exchange is unavailable, never exceed 800 Koi per decimal; 1,200-1,500 is only for high-aeration/exchange setups. Prevent bacterial fin and gill rots in Shing/Magur by prioritizing regular disinfection and bottom sludge treatment.',
        '4. Sensitive Catfish (Pabda, Gulsha, Tengra): These high-value catfishes have soft, scale-less skins highly vulnerable to mechanical damage by aquatic bugs. Treat the nursery or stocking pond with Sumithion 24h prior to eliminate backswimmers. Maintain strict 5-7 ft water columns.',
        '5. Freshwater Golda Prawn Strategy: Ensure artificial hides (e.g., bamboo branches or pipes) are set at the pond bottom. These shelters protect soft-shelled prawns from cannibalistic behavior during molting cycles. Keep the pond bottom free from decaying organic leaf litter.',
        'Conclusion & General Advisory: Profitable aquaculture relies on robust biosecurity, toxic gas management, and high-protein feed allocation. Regularly monitor pH and Dissolved Oxygen, and adjust feed quantities every 10 days using sampling weights.'
      ]
     }
  },
  {
    id: 'tilapia-feeding-rules',
    colorTheme: 'from-[#ecfdf5]/20 to-white border-emerald-100',
    publishDate: 'July 18, 2026',
    bn: {
      title: 'তেলাপিয়া চাষে খাবার প্রয়োগের বিজ্ঞানসম্মত সঠিক নিয়ম ও সময়সূচী',
      category: 'তেলাপিয়া চাষ ও খাদ্য ব্যবস্থাপনা',
      readTime: '৬ মিনিট রিড',
      summary: 'তেলাপিয়া মাছের নার্সারি ও কালচার পর্যায়ে পোনার গড় ওজন অনুযায়ী সঠিক খাদ্য হার ও সময়সূচী নির্ধারণের মাধ্যমে খাদ্যের অপচয় ও FCR কমিয়ে মাছ চাষকে লাভজনক করার সম্পূর্ণ নির্দেশিকা।',
      content: [
        'ভূমিকা ও খাদ্যলোভী স্বভাব: তেলাপিয়া মাছ অত্যন্ত খাদ্যলোভী (Voracious feeder) এবং অতি দ্রুত খাবার গ্রহণে অভ্যস্ত। এ কারণে পুকুরে এদের দেহের ওজন অনুযায়ী পরিমাপ করে খাবার প্রদান করা অত্যন্ত গুরুত্বপূর্ণ। যদি নিয়মবহির্ভূত বা ইচ্ছামতো খাদ্য দেওয়া হয়, তবে অতিরিক্ত খাদ্য অপচয় হবে, পানির গুণগত মান দ্রুত নষ্ট হবে, ক্ষতিকর গ্যাস বৃদ্ধি পাবে এবং FCR (Feed Conversion Ratio) ও উৎপাদন খরচ বেড়ে যাবে। তাই তেলাপিয়া চাষকে লাভজনক করতে বৈজ্ঞানিক নিয়ম অনুসরণ বাধ্যতামূলক।',
        '১. নার্সারি পর্যায়ে খাবার প্রয়োগের নিয়ম (১-৫ দিন): ০.২৫ থেকে ০.৩০ গ্রাম ওজনের পোনাকে দৈনিক দেহের ওজনের ৩০-৩৫% হারে নার্সারি পাউডার খাবার দিতে হবে। আবার ০.৪ থেকে ০.৫ গ্রাম ওজনের পোনাকে দৈনিক দেহের ওজনের ২০-২৫% হারে খাবার দিতে হবে। পোনা মজুদের পর প্রথম ৫ দিন এই নিয়মে দৈনিক ৩ বেলা সমান ভাগ করে খাবার প্রদান করতে হবে। প্রতি ৫ দিন পরপর পোনার নমুনা (Sampling) নিয়ে গড় ওজন নির্ধারণ করতে হবে এবং নতুনভাবে খাদ্যের পরিমাণ হিসাব করতে হবে।',
        '২. নার্সারি পর্যায়ে খাবার প্রয়োগের নিয়ম (৬-৩০ দিন): (ক) ৬ষ্ঠ থেকে ১০ম দিন: দেহের ওজনের ১৫-২০% হারে নার্সারি পাউডার, দিনে ৩ বেলা। (খ) ১১তম থেকে ১৫তম দিন: দেহের ওজনের ১৫-১৮% হারে ০.৫ মিমি ভাসমান (Floating) খাবার, দিনে ২ বেলা। (গ) ১৬তম থেকে ২০তম দিন: দেহের ওজনের ১২-১৫% হারে ১.০ মিমি ভাসমান খাবার, দিনে ২ বেলা। (ঘ) ২১তম থেকে ২৫তম দিন: দেহের ওজনের ১০-১২% হারে ১.৫ মিমি ভাসমান খাবার, দিনে ২ বেলা। (ঙ) ২৬তম থেকে ৩০তম দিন: দেহের ওজনের ৮-১০% হারে ১.৫ মিমি ভাসমান খাবার, দিনে ২ বেলা। সঠিকভাবে পরিচালিত হলে ৩০ দিনে পোনা সাধারণত ৮০-১০০ লাইনে পৌঁছে কালচার পুকুরে ছাড়ার উপযোগী হয়।',
        '[TABLE]: | পর্যায় ও দিন | পোনার গড় ওজন (গ্রাম) | দৈনিক খাদ্য প্রদানের হার (% দেহের ওজনের) | খাবারের প্রকার ও সাইজ | দৈনিক খাবার সংখ্যা |\n|---|---|---|---|---|\n| ১ম – ৫মি দিন | ০.২৫ – ০.৫ গ্রাম | ২০% – ৩৫% | নার্সারি পাউডার ফিড | দিনে ৩ বেলা |\n| ৬ষ্ঠ – ১০ম দিন | ০.৫ – ১.৫ গ্রাম | ১৫% – ২০% | নার্সারি পাউডার ফিড | দিনে ৩ বেলা |\n| ১১ – ১৫তম দিন | ১.৫ – ৩.০ গ্রাম | ১৫% – ১৮% | ০.৫ মিমি ভাসমান খাবার | দিনে ২ বেলা |\n| ১৬ – ২০তম দিন | ৩.০ – ৫.০ গ্রাম | ১২% – ১৫% | ১.০ মিমি ভাসমান খাবার | দিনে ২ বেলা |\n| ২১ – ২৫তম দিন | ৫.০ – ৮.০ গ্রাম | ১০% – ১২% | ১.৫ মিমি ভাসমান খাবার | দিনে ২ বেলা |\n| ২৬ – ৩০তম দিন | ৮.০ – ১২.০ গ্রাম | ৮% – ১০% | ১.৫ মিমি ভাসমান খাবার | দিনে ২ বেলা |',
        '৩. কালচার পুকুরে খাবার প্রয়োগের বৈজ্ঞানিক নিয়ম: কালচার বা চাষের প্রধান পুকুরে প্রতি ১০ দিন পরপর মাছের স্যাম্পলিং করতে হবে এবং গড় ওজন নির্ধারণ করে নতুন বায়োমাস অনুযায়ী খাবারের পরিমাণ নির্ধারণ করতে হবে। কালচার পুকুরে সাধারণত মাছের ওজনের ওপর ভিত্তি করে ৩টি ধাপে খাদ্য ভাগ করা হয়: (ক) শুরু বা প্রারম্ভিক পর্যায় (১০-৫০ গ্রাম ওজন): দেহের ওজনের ৮% হারে ২৮% প্রোটিনযুক্ত ভাসমান বা ডুবন্ত পিলেট খাবার। (খ) মাঝামাঝি পর্যায় (৫০-১৫০ গ্রাম ওজন): দেহের ওজনের ৫% হারে ২৭% প্রোটিনযুক্ত খাবার। (গ) শেষ বা ফিনিশিং পর্যায় (১৫০-৪০০ গ্রাম ওজন): দেহের ওজনের ২.৫% হারে ২৬% প্রোটিনযুক্ত খাবার। প্রতিদিনের খাবার সকাল ও বিকেলে নির্দিষ্ট সময়ে সমান ২ বেলা ভাগ করে পুকুরে ছিটানো আবশ্যক।',
        '৪. কালচার পুকুরে খাবার প্রয়োগের হার ও প্রোটিন টেবিল: পুকুরে তেলাপিয়া মাছের মজুদ সংখ্যা এবং স্যাম্পলিং গড় ওজনের ওপর ভিত্তি করে নিচে কালচার পুকুরের দৈনিক খাদ্য গাইড উপস্থাপন করা হলো।',
        '[TABLE]: | মাছের বৃদ্ধির পর্যায় | মাছের গড় ওজন (গ্রাম) | দৈনিক খাবার প্রদানের হার (% বায়োমাসের) | প্রয়োজনীয় প্রোটিন মাত্রা (%) | খাবারের সাইজ ও ধরণ |\n|---|---|---|---|---|\n| প্রারম্ভিক (Early Phase) | ১০ – ৫০ গ্রাম | ৮.০% | ২৮% প্রোটিন | ১.৫ মিমি – ২.০ মিমি ভাসমান |\n| মাঝামাঝি (Mid Phase) | ৫০ – ১৫০ গ্রাম | ৫.০% | ২৭% প্রোটিন | ২.০ মিমি – ৩.০ মিমি ভাসমান |\n| শেষ ধাপ (Finish Phase) | ১৫০ – ৪০০ গ্রাম+ | ২.৫% | ২৬% প্রোটিন | ৩.০ মিমি – ৪.০ মিমি ভাসমান/ডুবন্ত |',
        '৫. লাভজনক চাষের গুরুত্বপূর্ণ পরামর্শ ও বিশেষ ব্যবস্থাপনাসমূহ: (১) খাবার দেওয়ার আগে মাছের আহার গ্রহণের চঞ্চলতা বা প্রবণতা মনোযোগ সহকারে পর্যবেক্ষণ করুন। (২) অতিরিক্ত খাবার প্রয়োগ করলে পানির অ্যামোনিয়া বৃদ্ধি পায় এবং পানির পরিবেশ চরমভাবে বিনষ্ট হয়। তাই প্রতি ২০-২৫ দিন পরপর পুকুরে প্রতি শতকে ৩-৪ গ্রাম হারে **গ্যাসোনাল (Gasonal)** ছিটানো অত্যন্ত কার্যকর। (৩) মেঘলা আবহাওয়া বা পানিতে দ্রবীভূত অক্সিজেন (DO) কম থাকলে এবং মাছ পানির ওপর ভেসে খাবি খেলে সাময়িকভাবে খাবার বন্ধ রাখুন। তাৎক্ষণিক সমাধান হিসেবে প্রতি শতকে ১৫-২০ গ্রাম **অক্সিএড (Oxyadd)** ট্যাবলেট প্রয়োগ করুন। নিয়মিত স্যাম্পলিং ও সঠিক খাদ্য ব্যবস্থাপনাই তেলাপিয়া চাষে লাভজনকতা নিশ্চিত করার মূল চাবিকাঠি।'
      ]
    },
    en: {
      title: 'Scientific Feeding Guide and Schedule for Profitable Tilapia Aquaculture',
      category: 'Tilapia Grow-out & Feed Management',
      readTime: '6 min read',
      summary: 'A complete scientific guide mapping out precise feeding rates, timetables, and optimization rules for Tilapia nursery and grow-out ponds to reduce FCR and maximize profits.',
      content: [
        'Introduction & Voracious Feeding Behavior: Tilapia are naturally voracious feeders, displaying a heavy appetite that often drives them to consume more than their biological requirement. Failing to calculate feed based on actual body weight leads to severe feed waste, bottom soil blackening, poor FCR (Feed Conversion Ratio), and heavy financial losses. Following a structured, weight-based feeding schedule is mandatory for profitable commercial farming.',
        '1. Nursery Stage Feeding Guidelines (Days 1-5): For fry weighing 0.25–0.30g, apply starter nursery powder at a daily rate of 30–35% of their body weight. For larger fry weighing 0.40–0.50g, apply nursery powder at 20–25% of their body weight daily. For the first 5 days after stocking, split the daily feed ration into 3 equal meals. Take sampling weights every 5 days to calculate and adjust the updated feed requirements.',
        '2. Nursery Stage Feeding Schedule (Days 6-30): Adjust feed as follows: (a) Days 6–10: Nursery powder at 15–20% of biomass, split into 3 meals. (b) Days 11–15: 0.5 mm floating feed at 15–18% of biomass, split into 2 meals. (c) Days 16–20: 1.0 mm floating feed at 12–15% of biomass, split into 2 meals. (d) Days 21–25: 1.5 mm floating feed at 10–12% of biomass, split into 2 meals. (e) Days 26–30: 1.5 mm floating feed at 8–10% of biomass, split into 2 meals. In 30 days, healthy fingerlings reach 80–100 line sizes, ready for transfer to grow-out ponds.',
        '[TABLE]: | Stage & Timeline | Avg Fish Weight (g) | Daily Feeding Rate (% of Biomass) | Feed Type & Particle Size | Daily Meal Count |\n|---|---|---|---|---|\n| Days 1 – 5 | 0.25 – 0.5 g | 20% – 35% | Nursery Powder Feed | 3 meals / day |\n| Days 6 – 10 | 0.5 – 1.5 g | 15% – 20% | Nursery Powder Feed | 3 meals / day |\n| Days 11 – 15 | 1.5 – 3.0 g | 15% – 18% | 0.5 mm Floating Feed | 2 meals / day |\n| Days 16 – 20 | 3.0 – 5.0 g | 12% – 15% | 1.0 mm Floating Feed | 2 meals / day |\n| Days 21 – 25 | 5.0 – 8.0 g | 10% – 12% | 1.5 mm Floating Feed | 2 meals / day |\n| Days 26 – 30 | 8.0 – 12.0 g | 8% – 10% | 1.5 mm Floating Feed | 2 meals / day |',
        '3. Grow-out Pond Feeding Guidelines: Once in the main grow-out or culture pond, sample the fish every 10 days to measure average weight and calculate biomass-based feeding rates. Feeding in grow-out ponds is divided into three key phases: (a) Early phase (10-50g): feed at 8.0% of biomass using 28% protein floating pellets. (b) Mid phase (50-150g): feed at 5.0% of biomass using 27% protein pellets. (c) Finish phase (150-400g+): feed at 2.5% of biomass using 26% protein pellets. Divide the total daily feed into two equal meals, broadcasting once in the morning and once in the afternoon.',
        '4. Grow-out Pond Feeding Schedule Table: For easy reference, the feed rates, protein requirements, and particle sizes for grow-out Tilapia are summarized in the table below.',
        '[TABLE]: | Grow-out Phase | Avg Fish Weight (g) | Daily Feeding Rate (% of Biomass) | Protein Requirement (%) | Recommended Feed Size & Type |\n|---|---|---|---|---|\n| Early Phase | 10 – 50 g | 8.0% | 28% Protein | 1.5 mm – 2.0 mm Floating |\n| Mid Phase | 50 – 150 g | 5.0% | 27% Protein | 2.0 mm – 3.0 mm Floating |\n| Finish Phase | 150 – 400 g+ | 2.5% | 26% Protein | 3.0 mm – 4.0 mm Sinking/Floating |',
        '5. Critical Advice for Sustainable Profits: (1) Always observe fish appetite before broadcasting feed; active rising indicates a healthy environment. (2) Overfeeding leads to toxic gaseous ammonia buildup at the pond floor. Apply **Gasonal/Gasonull** at 3–4g per decimal every 20–25 days to keep the water clean. (3) If Dissolved Oxygen (DO) is low or fish are gasping near the surface, immediately suspend raw feed inputs. Broadcast **Oxyadd** granular or tablets at 15–20g per decimal to boost oxygen instantly. Regular sampling and precise feed tracking are the ultimate keys to high aquaculture profits in Bangladesh.'
      ]
    }
  },
  {
    id: 'shing-fish-farming-guide',
    colorTheme: 'from-[#fef2f2]/20 to-white border-rose-100',
    publishDate: 'July 18, 2026',
    bn: {
      title: 'শিং মাছ চাষ পদ্ধতি: লাভজনক নিবিড় ও আধা-নিবিড় ব্যবস্থাপনা গাইড',
      category: 'শিং মাছ চাষ ও রোগ নিয়ন্ত্রণ',
      readTime: '৭ মিনিট রিড',
      summary: 'অতিরিক্ত শ্বাসযন্ত্রযুক্ত সুস্বাদু দেশীয় শিং মাছের পরিচিতি, কৃত্রিম প্রজনন ও ডিম উৎপাদন ইতিহাস এবং অধিক ঘনত্বে চাষে রোগ প্রতিরোধক স্বাস্থ্য ব্যবস্থাপনার বৈজ্ঞানিক নির্দেশনা।',
      content: [
        'শিং মাছের পরিচিতি ও নিশাচর স্বভাব: শিং মাছ (Asian Stinging Catfish, বৈজ্ঞানিক নাম: Heteropneustes fossilis, ইংরেজি নাম: Fossil Cat) ক্যাটফিশ (Catfish) পরিবারের একটি অত্যন্ত সুস্বাদু এবং পুষ্টিকর স্বাদুপানির মাছ। এটি মূলত নিশাচর (Nocturnal) স্বভাবের মাছ; দিনের বেলায় এরা পুকুরের তলায় বা কাদায় লুকিয়ে থাকে এবং রাতে বেশি সক্রিয় হয়ে ওঠে। নিশাচর স্বভাবের কারণেই এরা রাতেই অধিকাংশ খাদ্য গ্রহণ করে থাকে, যা খাদ্য ব্যবস্থাপনার হিসাব করার সময় বিবেচনায় নেওয়া জরুরি। বাংলাদেশ, ভারত, নেপাল, পাকিস্তানসহ দক্ষিণ এশিয়ার বিভিন্ন দেশের প্রাকৃতিক জলাশয়, খাল, বিল, হাওর ও প্লাবনভূমিতে শিং মাছ প্রাকৃতিকভাবে প্রচুর পাওয়া যায়।',
        'কৃত্রিম প্রজনন ও ব্রুডস্টক ব্যবস্থার ইতিহাস: প্রাকৃতিক জলাশয় সংকোচনের কারণে নব্বইয়ের দশকের শেষ দিকে বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউট (BFRI) এবং কয়েকটি বেসরকারি হ্যাচারির যৌথ উদ্যোগে হরমোন প্রয়োগের মাধ্যমে শিং মাছের কৃত্রিম প্রজনন ও পোনা উৎপাদন সফলভাবে শুরু হয়। সাধারণত শিং মাছ ১০–১২ মাস বয়সে যৌন পরিপক্বতা অর্জন করে। একটি সুস্থ ও পরিপক্ব স্ত্রী শিং মাছ গড়ে ১০,০০০–২০,০০০টি পর্যন্ত ডিম দিতে পারে। প্রতি বছর এপ্রিল থেকে আগস্ট মাস পর্যন্ত এদের প্রজনন মৌসুম থাকে এবং এ সময় হ্যাচারিতে ডিম সংগ্রহ ও কৃত্রিম রেণু পোনা তৈরি করা হয়।',
        'অधिक ঘনত্বে চাষের সুবিধা ও বৈজ্ঞানিক ভিত্তি: শিং মাছের মাথার দুই পাশে একটি বিশেষ অতিরিক্ত শ্বাসযন্ত্র (Accessory Air-breathing Organ) রয়েছে। এর মাধ্যমে এরা সরাসরি বাতাস থেকে অক্সিজেন গ্রহণ করতে পারে। এ কারণেই পানিতে দ্রবীভূত অক্সিজেন (DO) খুবই কম থাকলেও এরা চমৎকারভাবে বেঁচে থাকে। এই অনন্য বৈশিষ্ট্যের জন্য শিং মাছকে অন্যান্য মাছের তুলনায় অনেক বেশি ঘনত্বের পুকুরে চাষ করা সম্ভব হয়। কিন্তু অধিক ঘনত্বে চাষ করার ক্ষেত্রে বেশ কিছু স্বাস্থ্যগত ঝুঁকি ও সতর্কতা অবলম্বন করা বাধ্যতামূলক।',
        'উচ্চ ঘনত্বের ঝুঁকি ও চর্মরোগের ঝুঁকি: কৃত্রিম হরমোনে উৎপাদিত শিং মাছের পোনার প্রাকৃতিক রোগ প্রতিরোধক্ষমতা অনেক সময় তুলনামূলক কম হতে পারে। তদুপরি, শিং মাছের গায়ে কোনো আঁশ (Scales) না থাকায় অধিক ঘনত্বে চাষের সময় একে অপরের ঘষা লেগে বা তলদেশের কাদার ঘর্ষণে ক্ষত সৃষ্টি হতে পারে। এই ক্ষতস্থানের মাধ্যমে ফাঙ্গাল রোগ, অ্যারোমোনাস (Aeromonas) ব্যাকটেরিয়ার মারাত্মক সংক্রমণ এবং বিভিন্ন বহিঃপরজীবী (Parasites) দ্বারা আক্রান্ত হওয়ার ঝুঁকি বহুগুণ বেড়ে যায়। এর ফলে মাছের গায়ে লাল ক্ষত ও লেজ পচা রোগ দেখা দিতে পারে।',
        'লাভজনক ও নিরাপদ চাষে বিশেষ পরিচালন বিধি: (১) নিয়মিত পানি পরিবর্তন: পুকুরে জমাকৃত বিষাক্ত অ্যামোনিয়া ও বর্জ্য দূর করতে নিয়মিত পানি পরিবর্তনের ব্যবস্থা রাখুন। (২) পানির গুণগত মান: নিয়মিত pH এবং অ্যামোনিয়া মাত্রা সয়েল টেস্ট কিট দিয়ে পর্যবেক্ষণ করুন। (৩) জৈব নিরাপত্তা (Biosecurity) নিশ্চিত করুন: খাঁচায় বা পুকুরের চারপাশ সূক্ষ্ম জাল দিয়ে ঘিরে রাখুন এবং বহিরাগত শিকারি প্রাণী প্রবেশ করতে দেবেন না। (৪) রোগ প্রতিরোধ ব্যবস্থাপনা: মাসে অন্তত একবার হলেও শতাংশ প্রতি ৩-৪ গ্রাম হারে **বায়োপ্রোব ম্যাক্স (Bioprob Max)** এবং পুকুর শোধনে **জার্মবিট (Germbit)** ব্যবহার করুন।',
        'মাঝারি ঘনত্বে চাষের উপদেশ ও লাভজনক উপসংহার: যেসব খামারির পুকুরে নিয়মিত পানি পরিবর্তনের কোনো সুব্যবস্থা নেই অথবা জৈব নিরাপত্তা নিশ্চিত করা সম্ভব নয়, তাঁদের জন্য অধিক ঘনত্বে শিং মাছ চাষ করা মোটেও নিরাপদ নয়। অধিক ঘনত্বের পরিবর্তে প্রতি শতকে ১,৫০০–২,০০০টি পোনা নিয়ে আধা-নিবিড় (Semi-intensive) বা মাঝারি ঘনত্বে চাষ করলে রোগের ঝুঁকি সম্পূর্ণ দূর হয়, মাছের গড় ওজন ও বৃদ্ধি দ্রুত হয় এবং চাষ অত্যন্ত লাভজনক ও দীর্ঘমেয়াদী হয়।'
      ]
    },
    en: {
      title: 'Scientific Shing Catfish Farming: Intensive & Semi-Intensive Management Guide',
      category: 'Shing Catfish Care & Pathology',
      readTime: '7 min read',
      summary: 'A complete veterinary and aquaculture guide covering biology, breeding history, high-density stocking constraints, and water-care strategies for Asian Stinging Catfish (Heteropneustes fossilis).',
      content: [
        'Introduction & Nocturnal Stinging Catfish: Shing fish (Asian Stinging Catfish, scientific name: Heteropneustes fossilis, also known as Fossil Cat) is a premium, tasty freshwater catfish. It is highly nocturnal (Nocturnal), meaning it stays inactive under bottom mud during daylight and actively feeds after dusk. It is widely distributed across rivers, canals, beels, and floodplains of Bangladesh, India, Nepal, and Pakistan.',
        'Artificial Breeding and BFRI Heritage: To combat depleting wild stocks, the Bangladesh Fisheries Research Institute (BFRI) along with private hatcheries pioneered hormone-induced breeding of Shing catfish in the late 1990s. Shing catfish achieve sexual maturity within 10–12 months. A healthy, gravid female produces between 10,000 and 20,000 eggs. The breeding season runs from April to August, during which premium hatchery seeds are harvested.',
        'Accessory Air-Breathing Organ Advantage: Shing fish possess a specialized accessory air-breathing organ in their head cavity, allowing them to extract oxygen directly from atmospheric air. Consequently, they survive easily even when dissolved oxygen (DO) levels drop significantly. While this allows farmers to stock Shing at highly intensive densities compared to other species, it demands rigorous husbandry safeguards.',
        'Pathology & Vulnerability in High-Density Ponds: Hatchery-produced Shing seeds often suffer from reduced genetic diversity and compromised immunity. Since Shing catfish have soft, scale-less skins, high-density environments cause physical friction and skin scrapes. These lesions act as direct gateways for lethal Aeromonas bacterial septicaemia, Saprolegnia fungal rots, and severe protozoan parasite invasions, causing red sores or tail rot.',
        'Sustainable Operational Parameters for Best Yield: (1) Periodic Water Exchange: Regularly drain 20-30% of pond water to remove concentrated organic waste. (2) Strictly Monitor Parameters: Test pH and ammonia levels consistently. (3) Ensure Biosecurity: Install boundary nets to ward off wild frogs, snakes, and birds. (4) Proactive Bioremediation: Broadcast soil probiotic **Bioprob Max** at 3–4g/decimal and sanitizers like **Germbit** once a month to prevent pathogen colonization.',
        'Semi-Intensive Stocking for Sustainable Profit: For fish farmers lacking reliable water exchange inlets or strict biosecurity infrastructure, super-intensive stocking is extremely risky. Instead of high-density loading, opting for a semi-intensive density of 1,500–2,000 fingerlings per decimal reduces disease incidence to zero, improves FCR, increases average harvest weight, and guarantees highly sustainable profits in Bangladesh.'
      ]
    }
  },
  {
    id: 'shing-pond-prep-and-nursery-management',
    colorTheme: 'from-[#e0f2fe]/20 to-white border-sky-100',
    publishDate: 'July 18, 2026',
    bn: {
      title: 'শিং মাছের নার্সারি ও কালচার পুকুর প্রস্তুতি এবং বৈজ্ঞানিক পোনা লালন গাইড',
      category: 'পুকুর প্রস্তুতি ও পোনা নার্সিং',
      readTime: '৮ মিনিট রিড',
      summary: 'শিং মাছের সর্বোচ্চ পোনা উৎপাদন ও সুস্থ কালচার ব্যবস্থাপনার জন্য নার্সারি ও চাষের পুকুর প্রস্তুত করার বাস্তবমুখী ও বিজ্ঞানসম্মত আধুনিক গাইডলাইন।',
      content: [
        '১. শিং মাছের আদর্শ নার্সারি পুকুর নির্বাচন ও কীটনাশকের সতর্কতা: শিং মাছের নার্সারি পুকুর অবশ্যই বন্যামুক্ত, পর্যাপ্ত সেচ ও যাতায়াত সুবিধাযুক্ত এবং দৈনিক অন্তত ৮ ঘণ্টা সূর্যালোক পায় এমন স্থানে হতে হবে। মাটির ধরণ হওয়া উচিত দোঁআশ এবং পুকুরের আদর্শ আয়তন ১০ থেকে ২০ শতক হওয়া সবচেয়ে উপযোগী। নার্সারিতে হাঁসপোকা বা জলের ক্ষতিকর পোকা একটি প্রধান বাধা। ঘন ঘন রাসায়নিক কীটনাশক (যেমন সুমিথিয়ন) প্রয়োগ করলে পোনার স্বাভাবিক স্বাস্থ্য মারাত্মক ব্যাহত হয়। তাই যথাসম্ভব কম পোকামাকড় উপদ্রুত এলাকা নির্বাচন করাই বুদ্ধিমানের কাজ।',
        '২. নার্সারি পুকুর প্রস্তুত করার ধাপসমূহ: (ক) সম্পূর্ণ শুকানো: প্রথমে পুকুর সম্পূর্ণ শুকিয়ে নিন এবং কাদার পরিমাণ বেশি হলে উপরিভাগের ৬-৯ ইঞ্চি মাটি কেটে ফেলে পুনরায় শুকান। (খ) বেষ্টনী ও জীবাণুমুক্তকরণ: চারপাশ ও উপরের অংশ সূক্ষ্ম জাল দিয়ে ঘেরাও করুন। এরপর প্রতি শতকে ১০০ গ্রাম ব্লিচিং পাউডার পানিতে মিশিয়ে মাটিতে প্রয়োগ করুন। (গ) চুন প্রয়োগ: পরদিন প্রতি শতকে ৫০০ গ্রাম পাথুরে চুন গরম অবস্থায় গুলিয়ে পুরো পুকুরে সমানভাবে ছিটিয়ে দিন। (ঘ) পানি প্রবেশ: ৩ দিন পর ২-২.৫ ফুট গভীরতায় আয়রন ও অ্যামোনিয়াবিহীন পরিষ্কার পানি প্রবেশ করান এবং পরদিনই পুনরায় শতাংশ প্রতি ৫০০ গ্রাম চুন প্রয়োগ করুন।',
        '৩. **বায়োপ্রোব ম্যাক্স** প্রোবায়োটিক ফার্মেন্টেশন ও রেণু ছাড়ার পূর্ব প্রস্তুতি: পানির ঘোলাভাব কমার সময়েই শতাংশ প্রতি ২৫০ গ্রাম আটা, ৫০ গ্রাম চিটাগুড়, ১০ গ্রাম ইস্ট এবং আমাদের বিশেষ **বায়োপ্রোব ম্যাক্স (Bioprob Max)** প্রোবায়োটিক পরিমাণমতো পানি দিয়ে মিশিয়ে ৪৮ ঘণ্টা ফার্মেন্টেশন করুন। এরপর কড়া রোদে এই প্রোবায়োটিক পুকুরে ছিটিয়ে দিন। রেণু ছাড়ার ২৪ ঘণ্টা আগে পানির গ্যাস ও বিষাক্ততা দূর করতে শতাংশ প্রতি ৫ মিলি **ইউকা বায়োসল (Yuca Biosol)** বা **গ্যাসোনাল (Gasonal)** পাউডার প্রয়োগ করে হররা টেনে দিন। পোকা থাকলে নির্দেশিত মাত্রায় ৫ মিলি সুমিথিয়ন দিতে পারেন।',
        '৪. রেণু অবমুক্তকরণ ও পরিবহনজনিত ধকল কাটার কৌশল: ভোরবেলা যখন পানি ঠাণ্ডা থাকে তখন রেণু অবমুক্ত করা সবচেয়ে নিরাপদ। রেণু ছাড়ার ১৫-২০ মিনিট আগে পলিব্যাগগুলো পুকুরের পানিতে ভাসিয়ে তাপমাত্রা সমান করে নিন। ছাড়ার ১০ মিনিট আগে পানিতে অক্সিজেনের মাত্রা বাড়াতে শতাংশ প্রতি ১৫-২০ গ্রাম **অক্সিএড (Oxyadd)** ট্যাবলেট প্রয়োগ করুন। রেণু ছাড়ার পর পরিবহনজনিত ধকল ও ক্লান্তি দূর করতে শতাংশ প্রতি ১৫০ গ্রাম পিউর স্যালাইন এবং ৫ গ্রাম বায়োমিন সি কমপ্লেক্স পানিতে গুলিয়ে পুরো পুকুরে ছিটিয়ে দিন এবং পা দিয়ে আলতো করে তলদেশের মাটি নাড়িয়ে দিন। পরবর্তী ৩ দিন প্রতিদিন তলদেশ নাড়িয়ে ৫ মিলি **ইউকা বায়োসল (Yuca Biosol)** অথবা ৫ গ্রাম **গ্যাসোনাল (Gasonal)** পাউডার প্রয়োগ করুন।',
        '৫. রেণুর লিকুইড ও পাউডার খাদ্য ব্যবস্থাপনা: রেণু ছাড়ার প্রথম ২৪ ঘণ্টা কোনো খাবার দেবেন না। এরপর ৫০% সেদ্ধ ডিমের কুসুম ব্লেন্ড করে ৫০% ময়দার সাথে তরল লিকুইড খাবার বানিয়ে দিনে ৩ বেলা খাওয়ান। এই খাবার সন্ধ্যা, মধ্যরাত ও ভোরবেলা দেওয়া উত্তম। ৪র্থ দিন থেকে বেঁচে থাকা রেণুর সংখ্যা পর্যবেক্ষণ করে ৪০% প্রোটিনসমৃদ্ধ নার্সারি পাউডার ফিডের সাথে প্রতি শতকে ২০-৩০ গ্রাম **গ্রোভিটা ম্যাক্স (Grovita Max)** মিশিয়ে রাতের বেলায় ৩ বেলা শুকনো অবস্থায় ভাসিয়ে খাওয়ানো শুরু করুন। পোনা ৫০০-১০০০টি/কেজি (লাইন) সাইজ না হওয়া পর্যন্ত নার্সিং চালিয়ে যান। নিয়মিত পানির গভীরতা বাড়িয়ে ৩ ফুট করুন এবং সুস্থতার জন্য শতাংশে ৩০-৪০ গ্রাম **জিওপ্রোব প্লাস (Geoprob Plus)** এবং ৫ মিলি **ইউকা বায়োসল (Yuca Biosol)** দিন।',
        '৬. কালচার (চাষ) পুকুরের বৈজ্ঞানিক প্রস্তুতি ও তেলাপিয়া নিয়ন্ত্রণ: কালচার পুকুর অবশ্যই কম কাদা (৬ ইঞ্চির নিচে), ৪-৫ ফুট গভীর এবং চওড়া পাড়যুক্ত হতে হবে। শুকনো মাটিতে পূর্বে রোগ ইতিহাস থাকলে শতাংশে ১০০ গ্রাম ব্লিচিং এবং ৫০০ গ্রাম চুন দিন। ৩ দিন পর ৩-৪ ফুট পানি ঢুকিয়ে শতাংশ প্রতি ৫-৬ মিলি **জার্মবিট (Germbit)** এবং ১০০-১২০ গ্রাম লবণ ছিটান। যদি পুকুরে পূর্বে তেলাপিয়া চাষ করা হয়ে থাকে, তবে চুন দেওয়ার পর ১.৫ ফুট পানি ঢুকিয়ে ১০-১৫ দিন পর শতাংশে ৫-৬টি অ্যালুমিনিয়াম ফসফাইড ট্যাবলেট দিয়ে অবশিষ্ট ডিম ও পোনা ধ্বংস করুন এবং ৩ দিন পর বাকি পানি ঢুকিয়ে পুনরায় চুন দিন। এরপর প্রোবায়োটিক চার্জ করে পোনা ছাড়ুন।',
        '৭. চাষকালীন পরিচর্যা, FCR নিয়ন্ত্রণ ও বাজারজাতকরণ: একক চাষে শতাংশ প্রতি ১,৫০০ থেকে ২,০০০টি সুস্থ পোনা মজুদ করা অত্যন্ত নিরাপদ ও টেকসই। শুরুতে ০.৩-০.৫ মিমি ভাসমান ফিড ও পরে প্রোটিনসমৃদ্ধ ভাসমান পিলেট দিন। পানির পরিবেশ রক্ষায় ১৫-২০ দিন পর পর ২০-৩০% পানি পরিবর্তন করুন এবং নিয়মিত ব্যাকটেরিয়াজনিত রোগ ও ড্রপসি প্রতিরোধে **জার্মবিট (Germbit)** ও **বায়োপ্রোব ম্যাক্স (Bioprob Max)** ব্যবহার করুন। সম্পূর্ণ আহরণের ২৪ ঘণ্টা আগে খাদ্য বন্ধ করে জীবিত অবস্থায় ড্রামে ভরে সুস্থ ও তরতাজা শিং মাছ বাজারজাত করুন।'
      ]
    },
    en: {
      title: 'Advanced Shing Catfish Pond Preparation and Scientific Nursery Management',
      category: 'Pond Preparation & Nursing Care',
      readTime: '8 min read',
      summary: 'A definitive operational handbook covering nursery and grow-out pond design, organic bio-probiotic fertilization, stocking stress mitigation, and complete culture protocols for Shing Catfish.',
      content: [
        '1. Shing Catfish Nursery Site Selection & Insect Controls: A high-yielding Shing catfish nursery must be situated in a flood-free location with loam-clay (doash) soil, receiving at least 8 hours of daily sunlight. Ideal sizes range from 10 to 20 decimals. Water beetles/insects (Haspoka) pose a severe threat. Instead of repeated heavy synthetic chemical sprays like Sumithion which stunt fry development, strategic site selection and highly regulated minimal dose applications under local extension officer advice are strongly recommended.',
        '2. Step-by-Step Nursery Soil Preparation: (a) Drying: Completely drain and dry the pond bed. Excavate excess mud if it exceeds 6-9 inches. (b) Biosecurity Nets: Encapsulate the entire perimeter with fine nets. (c) Bed Sterilization: Apply 100g of Bleaching powder per decimal dissolved in water onto the damp pond bed. (d) First Liming: The next day, broadcast 500g of warm-dissolved Quicklime (stone chunya) per decimal.',
        '3. **Bioprob Max** Fermentation & Pre-Stocking Gas Care: While waiting for water turbidity to settle after entering 2-2.5 ft of iron-free freshwater, prepare a fermented probiotic bio-mix. Per decimal, mix 250g flour (atta), 50g molasses, 10g yeast, and customized doses of **Bioprob Max** probiotic in clean water. Ferment for 48 hours, then broadcast under bright midday sun. 24 hours before stocking, apply 5ml of **Yuca Biosol** or **Gasonal** powder per decimal to neutralize hydrogen sulfide/ammonia and drag a heavy horizontal chain.',
        '4. Stocking Protocols and Stress Reduction: Release delicate Shing hatchlings (Renu) during early dawn hours when temperatures are low. Acclimatize the oxygenated transport bags for 15-20 minutes. 10 minutes prior to stocking, broadcast 15-20g of **Oxyadd** tablets per decimal to boost dissolved oxygen. To eliminate transport stress, broadcast 150g pure saline and 5g Biomin C Complex per decimal. Gently agitate the water. For the next 3 days, walk on the pond bed floor daily and apply 5ml of **Yuca Biosol** or 5g of **Gasonal** powder per decimal.',
        '5. Liquid and Powder Nursery Feeding Schedules: Do not offer any feed for the first 24 hours. Thereafter, blend 50% hard-boiled egg yolks with 50% wheat flour to form a highly digestible liquid feed, split into 3 meals daily (at evening, midnight, and dawn). On the 4th day, test survival counts. If highly populated, introduce high-protein (40%) nursery powder feed blended with 20-30g of **Grovita Max** per decimal, 3 times nightly. Maintain this nursing process until fry reach 500-1000 pcs/kg (line size). Keep water healthy with 30-40g **Geoprob Plus** and 5ml **Yuca Biosol** per decimal.',
        '6. Grow-out Culture Pond Prep & Tilapia Suppression: Grow-out ponds require flat beds, less than 6 inches of mud, and 4-5 feet of depth. If there is a history of infectious outbreaks, sterilize dry soil using 100g Bleaching powder and 500g Quicklime per decimal. Enter 3-4 feet of water and immediately broadcast 5-6ml of **Germbit** sanitizer and 100-120g of Salt per decimal. If Tilapia were previously cultured, fill 1.5 ft of water first, wait 10-15 days, apply 5-6 Aluminum Phosphide tablets per decimal to eliminate wild Tilapia spawns, and wait 3 days before adding full water and repeating lime application.',
        '7. Live Harvesting, FCR Control, and Disease Prevention: Stocking 1,500 to 2,000 healthy, equal-sized Shing fingerlings per decimal is the safest semi-intensive standard. Feed 0.3-0.5 mm floating micro-pellets initially. To prevent toxic ammonia spike and lethal Aeromonas red sores or bacterial Dropsy, perform 20-30% water exchange every 15-20 days and treat the water proactively with **Germbit** and **Bioprob Max**. Cease feeding 24 hours prior to full-haul harvesting, allowing you to market ultra-fresh, lively Shing catfish in water-filled drums.'
      ]
    }
  }
];


