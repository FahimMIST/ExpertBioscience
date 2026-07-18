export interface ProductDetails {
  title: string;
  category: string;
  description: string;
  composition: string;
  benefits: string[];
  dosage: string;
  packSize: string;
  origin: string;
  modeOfAction?: string;
  directions?: string;
  optimalTime?: string;
  specialNote?: string;
  storage?: string;
  symptoms?: string[];
  precautions?: string[];
  statutoryWarning?: string;
}

export interface Product {
  id: string;
  imagePlaceholderColor: string; // Vibrant aquatic gradient representing package
  iconType: 'oxygen' | 'gas' | 'probiotic' | 'nutrition' | 'disinfectant' | 'growth' | 'liver';
  bgGrad: string;
  en: ProductDetails;
  bn: ProductDetails;
  marketedBy: {
    en: string;
    bn: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'oxyadd',
    imagePlaceholderColor: 'from-[#0ea5e9] to-[#009660]',
    iconType: 'oxygen',
    bgGrad: 'rgba(6, 182, 212, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Oxyadd (Oxygen Granular / Tablet)',
      category: 'Water Quality & Oxygenation',
      description: 'Optimal dissolved oxygen (D.O.) levels are critical for fish and shrimp health, and should ideally be maintained at 5 mg/L or above. When D.O. levels drop below 3 mg/L, fish and shrimp take less feed, growth is severely hindered, and they may eventually die in acute crises. In the absence of sunlight, photosynthesis stops, leading to severe oxygen depletion. Oxyadd Tablet/Granular provides an instant, highly-effective dissolved oxygen boost, safeguarding aquaculture yields and promoting optimal growth.',
      composition: 'Sodium Percarbonate (2Na₂CO₃ · 3H₂O₂) releasing 13.5% active Oxygen.',
      benefits: [
        'Dissolves rapidly to provide immediate active oxygen to the entire pond.',
        'Significantly reduces fish and shrimp mortality rates from oxygen shock.',
        'Relieves stress in broodfish and accelerates maturation times.',
        'Keeps fry and fingerlings healthy and active even in high-density stocking.',
        'Assists fish survival under adverse weather conditions (cloudy/hot).'
      ],
      dosage: 'Normal Oxygen Depletion: 400 - 500g per acre (for 5ft water depth).\nAcute Oxygen Crisis: 500 - 700g per acre (for 5ft water depth).\n\nMethod of application: Broadcast evenly across the water surface.',
      packSize: '250g Sachet, 1kg Jar',
      origin: 'Germany',
      storage: 'Keep in a cool, dry place protected from direct sunlight.'
    },
    bn: {
      title: 'Oxyadd - অক্সিএড (অক্সিজেন দানাদার ও ট্যাবলেট)',
      category: 'অক্সিজেন বৃদ্ধিকারী এজেন্ট',
      description: 'মাছ ও চিংড়ির সর্বোত্তম বৃদ্ধি ও উৎপাদনের জন্য পানিতে দ্রবীভূত অক্সিজেন (Dissolved Oxygen, DO) সাধারণত ৫ মিগ্রা./লিটার বা তার বেশি থাকা উত্তম। দ্রবীভূত অক্সিজেনের মাত্রা ৩ মিগ্রা./লিটারের নিচে নেমে গেলে মাছের ও চিংড়ির খাদ্য গ্রহণ কমে যায়, বৃদ্ধি ব্যাহত হয় এবং তীব্র ঘাটতিতে মৃত্যু ঘটতে পারে। সূর্যের আলোর অনুপস্থিতিতে সালোকসংশ্লেষণ প্রক্রিয়া ঘটতে পারে না, ফলে পানিতে তীব্র অক্সিজেনের অভাবে মাছ ভেসে ওঠে। এই পরিস্থিতিতে অক্সিএড ট্যাবলেট/গ্র্যানুলার অক্সিজেনের ঘাটতি পূরণে সহায়তা করে এবং দ্রবীভূত অক্সিজেনের মাত্রা দ্রুত বৃদ্ধি করতে সাহায্য করে।',
      composition: 'সোডিয়াম পার কার্বনেট (2Na₂CO₃ · 3H₂O₂) সক্রিয় অক্সিজেন সরবরাহ করে ১৩.৫%।',
      benefits: [
        'পানিতে দ্রবীভূত হয়ে অত্যন্ত দ্রুত অক্সিজেন সরবরাহ করে।',
        'চিংড়ি ও মাছের মৃত্যুর হার দ্রুত হ্রাস করে।',
        'ব্রুড মাছের স্ট্রেস দূর করে এবং ম্যাচুরিটি দ্রুত আনে।',
        'অধিক ঘনত্বেও পোনা সুস্থ-সবল ও সতেজ রাখে।',
        'বিরূপ আবহাওয়াতেও মাছকে সুস্থভাবে বেঁচে থাকতে সাহায্য করে।'
      ],
      dosage: 'সাধারণ অক্সিজেন স্বল্পতায়: ৪০০-৫০০ গ্রাম/একর (পানির গভীরতা ৫ ফুট)।\nতীব্র অক্সিজেন সংকটে: ৫০০-৭০০ গ্রাম/একর (পানির গভীরতা ৫ ফুট)।\n\nপ্রয়োগ পদ্ধতি: পানিতে ছিটিয়ে দিতে হবে।',
      packSize: '২৫০ গ্রাম স্যাসেট, ১ কেজি জার',
      origin: 'জার্মানি',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠাণ্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'gasonull',
    imagePlaceholderColor: 'from-[#0b2545] to-[#0ea5e9]',
    iconType: 'gas',
    bgGrad: 'rgba(14, 165, 233, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Gasonull / Gasonal Powder',
      category: 'Toxic Gas Controller',
      description: 'Gasonal (Gasonull) is a highly effective gas control powder formulated with a synergic combination of Yucca (Yucca schidigera) and Pinaceae plant extracts, probiotics, and enzymes. It neutralizes toxic gases (ammonia, methane, hydrogen sulfide, etc.) generated in pond water, significantly improving water quality and increasing the activity of beneficial Bacillus bacteria, further enhancing the efficacy of organic saponins. High ammonia levels can cause pond water to turn darkish or brownish; regular use of Gasonull effectively prevents and controls this issue.',
      composition: 'Yucca plant extracts, Pinaceae plant extracts, Bacillus subtilis, Yeast culture.',
      benefits: [
        'Absorbs and neutralizes harmful gases like ammonia, sulfur dioxide, hydrogen sulfide, and methane at the pond bottom.',
        'Increases the population of beneficial bacteria in pond water.',
        'Saponin works rapidly to control ammonia and other toxic gases.',
        'Provides a quick resolution for Black Gill, Blue Gill, and gulping (Gulping) issues.',
        'Eliminates dark discoloration and foul odor from the pond sediment floor.',
        'Yucca extract reduces environmental stress on fish and shrimp, improving their physiological parameters.',
        'Accelerates digestive processes and increases feed demand.'
      ],
      dosage: 'Dosage: 2-3g/decimal for 3-5 ft water depth, or as recommended by an aquaculture specialist.\n\nMethod of application: Mix with sand or water and distribute evenly across the pond floor.',
      packSize: '100 g & 200 g',
      origin: 'Mexico 🇲🇽',
      storage: 'Keep in a cool, dry place away from direct sunlight.'
    },
    bn: {
      title: 'Gasonull - গ্যাসোনাল পাউডার',
      category: 'ক্ষতিকর গ্যাস নিয়ন্ত্রক',
      description: 'গ্যাসোনাল (GASONULL) হলো ইউকা (Yucca) ও পিনাসি (Pinaceae) উদ্ভিদের নির্যাস, প্রোবায়োটিক এবং এনজাইমের সমন্বয়ে তৈরি একটি অত্যন্ত কার্যকর গ্যাস নিয়ন্ত্রণকারী পাউডার। এটি পুকুরের পানিতে সৃষ্ট ক্ষতিকর গ্যাস (অ্যামোনিয়া, মিথেন, হাইড্রোজেন সালফাইড ইত্যাদি) নিয়ন্ত্রণ করে পানির গুণগত মান উন্নত করে এবং উপকারী ব্যাসিলাস (Bacillus) ব্যাকটেরিয়ার কার্যকারিতা বৃদ্ধি করে। ফলে জৈব স্যাপোনিনের কার্যক্ষমতা আরও বৃদ্ধি পায়। পুকুরে অ্যামোনিয়ার মাত্রা বেড়ে গেলে পানির রঙ কালচে বা তামাটে হয়ে যেতে পারে। গ্যাসোনাল (GASONULL) নিয়মিত ব্যবহারে এই সমস্যা কার্যকরভাবে নিয়ন্ত্রণ করা সম্ভব।',
      composition: 'ইউকা উদ্ভিদের নির্যাস, পিনাসিয়া উদ্ভিদের নির্যাস, ব্যাসিলাস সাবটিলিস এবং ইস্ট কালচার',
      benefits: [
        'পুকুরের তলদেশের অ্যামোনিয়া, সালফার ডাই-অক্সাইড, হাইড্রোজেন সালফাইড, মিথেন ইত্যাদি ক্ষতিকর গ্যাস শোষণ করে।',
        'উপকারী ব্যাকটেরিয়ার উপস্থিতি বৃদ্ধি করে।',
        'স্যাপোনিন পানিতে সৃষ্ট অ্যামোনিয়া ও অন্যান্য ক্ষতিকর গ্যাসসমূহ নিয়ন্ত্রণে দ্রুত কাজ করে।',
        'পানিতে সৃষ্ট ব্ল্যাক গিল (Black Gill), ব্লু গিল (Blue Gill) এবং খাবি খাওয়া (Gulping) সমস্যা হতে দ্রুত সমাধান করে।',
        'তলদেশের কালচেভাব ও দুর্গন্ধ দূর করে।',
        'ইউকা থেকে নিষ্কাশন মাছের এবং চিংড়ির উপর পরিবেশগত চাপের প্রভাব হ্রাস করে এবং শারীরবৃত্তীয় পরামিতি উন্নত করে।',
        'হজম ক্রিয়া ত্বরান্বিত করে এবং খাবারের চাহিদা বৃদ্ধি পায়।'
      ],
      dosage: 'ব্যবহারের মাত্রা: ২-৩ গ্রাম/শতকে ৩-৫ ফুট পানির গভীরতায় অথবা বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।\n\nব্যবহারের পদ্ধতি: বালির সাথে বা পানির সাথে মিশিয়ে প্রয়োগ।',
      packSize: '১০০ গ্রাম ও ২০০ গ্রাম',
      origin: 'মেক্সিকো 🇲🇽',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠাণ্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'bioprob-max',
    imagePlaceholderColor: 'from-[#10b981] to-[#06b6d4]',
    iconType: 'probiotic',
    bgGrad: 'rgba(16, 185, 129, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Bioprob Max Probiotic',
      category: 'Aquaculture Bioremediation & Probiotics',
      description: 'Bioprob Max is highly rich of living microbial cells that works through different mechanisms in aquaculture system to eliminate the organic wastes & pollutants, as a result of incorporation of "bioremediation" and "biocontrol" when dealing with environmental problems. It also can play an effective role in aquaculture production by providing greater non-specific disease protection as well as pollution free water sources.',
      composition: 'Aspergillus oryzae (2X10¹⁰ CFU), Bacillus amyloliquefaciens (2X10¹⁰ CFU), Bacillus circulans (2X10¹⁰ CFU), Bacillus licheniformis (4X10¹⁰ CFU), Bacillus megaterium (6X10¹⁰ CFU), Bacillus polymyxa (6X10¹⁰ CFU), Bacillus subtilis (4X10¹⁰ CFU), Lactobacillus acidophyllus (4X10¹⁰ CFU), Lactobacillus helveticus (2X10¹⁰ CFU), Lactobacillus lactis (1.5X10¹⁰ CFU), Nitrobacter (4X10¹⁰ CFU), Nitrosomonas (4X10¹⁰ CFU), Paracococcus denitrificans (2X10¹⁰ CFU), Rhodobacter (1.5X10¹⁰ CFU), Saccharomyces cerevisiae (4X10¹⁰ CFU), Excipients Stabilizers.',
      benefits: [
        'Improve soil & water environment.',
        'Act as an antidote to harmful germs.',
        'Act as biological control agents to resist growth of harmful germs.',
        'Help in the production of various nutrients & vitamins.',
        'Develop the FCR as well as increase the growth.',
        'Increase the primary productivity in Aquaculture.',
        'Prevent infection and survival of harmful germs.',
        'Improve the immune system.',
        'Ensure good health by changing the hostile condition of the host body.',
        'Beneficial micro-organisms reproduce in the gut of cultivated fish & shrimp.'
      ],
      modeOfAction: 'These types of agents proliferate in water medium and exclude the pathogenic bacteria from the specific medium by consuming all available nutrients, resulting in elimination of the pathogenic bacteria through starvation.',
      dosage: '1-2 gm/decimal for 3-5 ft water depth.',
      packSize: '100 gm & 500 gm',
      origin: 'Japan',
      optimalTime: 'Morning or late afternoon.',
      specialNote: 'Never apply immediately before or after using any antibiotics or chemical disinfectants.',
      storage: 'Keep in a cool, dry place protected from direct sunlight and humidity.'
    },
    bn: {
      title: 'BioProb Max - বায়োপ্রোব ম্যাক্স প্রোবায়োটিক',
      category: 'জৈবিক শোধন ও উপকারী প্রোবায়োটিক',
      description: 'বায়োপ্রোব ম্যাক্স (Bioprob Max) জলজ পরিবেশে জৈবিক প্রতিকার (Bioremediation) এবং রোগ নিয়ন্ত্রণে (Biocontrol) অত্যন্ত সমৃদ্ধ ও জীবন্ত উপকারী জীবাণুর সংমিশ্রণ। এটি পানিতে দ্রবীভূত বিষাক্ত অ্যামোনিয়া গ্যাস, ক্ষতিকর কাদা বর্জ্য ও দূষণ দ্রুত দূর করে এবং চাষকৃত মাছ ও চিংড়ির দ্বিগুণ রোগ প্রতিরোধ ক্ষমতা ও সুস্বাস্থ্য নিশ্চিত করে।',
      composition: 'অ্যাসপারজিলাস ওরাইজি (2X10¹⁰ CFU), ব্যাসিলাস অ্যামাইলোলিকুইফ্যাসিয়েন্স (2X10¹⁰ CFU), ব্যাসিলাস সার্কুলান্স (2X10¹⁰ CFU), ব্যাসিলাস লিচেনিফরমিস (4X10¹⁰ CFU), ব্যাসিলাস মেগাটেরিয়াম (6X10¹⁰ CFU), ব্যাসিলাস পলিমিক্সা (6X10¹⁰ CFU), ব্যাসিলাস সাবটিলিস (4X10¹⁰ CFU), ল্যাক্টোব্যাসিলাস অ্যাসিডোফিলাস (4X10¹⁰ CFU), ল্যাক্টোব্যাসিলাস হেলভেটিকাস (2X10¹⁰ CFU), ল্যাক্টোব্যাসিলাস ল্যাকটিস (1.5X10¹⁰ CFU), নাইট্রোব্যাক্টার (4X10¹⁰ CFU), নাইট্রোসোমোনাস (4X10¹⁰ CFU), প্যারাকোক্কাস ডেনিট্রিফিকান্স (2X10¹⁰ CFU), রোডোভ্যাক্টার (1.5X10¹⁰ CFU), স্যাকারোমাইসেস সেরিমিসিয়া (4X10¹⁰ CFU), এক্সিপিয়েন্টস এবং স্ট্যাবিলাইজার।',
      benefits: [
        'মাটি ও পানির সার্বিক পরিবেশের দ্রুত উন্নতি সাধন করে।',
        'ক্ষতিকর রোগ সৃষ্টিকারী জীবাণুর বিরুদ্ধে শক্তিশালী প্রতিষেধক হিসেবে কাজ করে।',
        'ক্ষতিকর জীবাণুর বৃদ্ধি প্রতিরোধে শক্তিশালী জৈবিক নিয়ন্ত্রণ এজেন্ট (Biocontrol) হিসেবে ভূমিকা রাখে।',
        'জলাশয়ে অতি প্রয়োজনীয় বিভিন্ন পুষ্টি উপাদান এবং ভিটামিন উৎপাদনে সাহায্য করে।',
        'খাদ্য রূপান্তর হার বা এফসিআর (FCR) উন্নত করে এবং মাছের দ্রুত দৈহিক বৃদ্ধি ঘটায়।',
        'পুকুর বা ঘেরে প্রাকৃতিক খাদ্য কণা ও প্রাথমিক উৎপাদনশীলতা বহুণ বাড়ায়।',
        'ক্ষতিকর জীবাণুর আক্রমণ এবং পানির তলদেশে এদের বেঁচে থাকা প্রতিরোধ করে।',
        'মাছ ও চিংড়ির শরীরের রোগ প্রতিরোধ ক্ষমতা বা ইমিউন সিস্টেমকে সর্বোচ্চ শক্তিশালী করে তোলে।',
        'শরীরের প্রতিকূল অবস্থা বা মেটাবলিক চাপ দূর করে মাছের সুস্বাস্থ্য নিশ্চিত করে।',
        'উপকারী অণুজীবগুলো চাষকৃত মাছ ও চিংড়ির অন্ত্রে প্রবেশ করে হজমশক্তি বৃদ্ধি করে।'
      ],
      modeOfAction: 'উপকারী ব্যাকটেরিয়াগুলো পুকুরের পানিতে ও তলদেশে অত্যন্ত দ্রুত বংশবৃদ্ধি করে এবং ক্ষতিকর ব্যাকটেরিয়ার জন্য প্রয়োজনীয় সমস্ত পুষ্টি উপাদান খেয়ে সাবাড় করে ফেলে। ফলে ক্ষতিকর রোগ সৃষ্টিকারী জীবাণু বা প্যাথোজেনগুলো কোনো পুষ্টি না পেয়ে প্রাকৃতিকভাবেই খাদ্যবঞ্চিত হয়ে নিষ্ক্রিয় ও ধ্বংস হয়ে যায়।',
      dosage: '১-২ গ্রাম প্রতি শতকে (৩-৫ ফুট পানির গভীরতার জন্য)।',
      packSize: '১০০ গ্রাম এবং ৫০০ গ্রাম',
      origin: 'জাপান',
      optimalTime: 'সকাল অথবা শেষ বিকেল।',
      specialNote: 'অ্যান্টিবায়োটিক অথবা জীবাণুনাশক ব্যবহারের ঠিক আগে বা পরে এটি কখনো ব্যবহার করবেন না।',
      storage: 'সরাসরি সূর্যালোক থেকে দূরে ঠাণ্ডা এবং শুষ্ক স্থানে রাখুন।'
    }
  },
  {
    id: 'farmizyme',
    imagePlaceholderColor: 'from-[#22c55e] to-[#0ea5e9]',
    iconType: 'growth',
    bgGrad: 'rgba(34, 197, 94, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Farmizyme',
      category: 'Digestive Multi-Enzymes with Gut Probiotics',
      description: 'Fish and shrimp often cannot produce sufficient digestive enzymes to digest the variety of nutrients (carbohydrates, proteins, and fats) present in their feed. Farmizyme contains a synergistic formula of multi-enzymes and gut probiotics that rapidly breaks down all feed nutrients into highly digestible forms, improves nutrient absorption efficiency, and accelerates the digestive process. When consumed, these probiotics compete for space and food with potentially harmful bacteria, evicting them from the gut, and enabling the immune system to better fight infections.',
      composition: 'Each 500 g contains: Bacillus subtilis (1.0 × 10¹¹ CFU), Lactobacillus acidophilus (1.0 × 10¹⁰ CFU), Lactobacillus casei (1.0 × 10¹⁰ CFU), Streptococcus faecium (1.0 × 10¹⁰ CFU), Xylanase (30,000 IU), Pectinase (8,000 IU), Cellulase (8,000 IU), Phytase (8,000 IU), Protease (3,000 IU), Amylase (4,000 IU), Beta Glucanase (4,000 IU), Mannose (3,000 IU), Lipase (3,000 IU).',
      benefits: [
        'Helps rapidly break down feed for fish and shrimp into highly digestible forms.',
        'Improves Feed Conversion Ratio (FCR).',
        'Enhances nutrient absorption efficiency.',
        'Boosts immune system and disease resistance.',
        'Helps reduce thread-like or noodle-like feces.',
        'Increases the population of beneficial gut bacteria and suppresses harmful pathogens.',
        'Keeps the digestive tract healthy and accelerates digestion.',
        'Supports and maintains liver health.',
        'Increases feed palatability/appetite.',
        'Eliminates liver and kidney toxicity after antibiotic treatment.',
        'Reduces mortality rates caused by stress or stroke.'
      ],
      dosage: 'Poultry: 250 g/ton of feed or 0.2 g/L of water.\nLivestock: 200 g/ton of feed or 0.2 g/L of water.\nFish & Shrimp: 0.5 g per kg of feed, or 10 g/decimal for 3–5 ft water depth.\n\nOr as recommended by an aquaculture specialist.',
      packSize: '500 g Sachet & 1 kg Jar',
      origin: 'Thailand 🇹🇭',
      storage: 'Keep in a cool, dry place away from direct sunlight.'
    },
    bn: {
      title: 'Farmizyme - ফার্মিজাইম',
      category: 'হজমকারক ও খাদ্য রূপান্তরকারক গাট প্রোবায়োটিক',
      description: 'মাছ ও চিংড়ি তাদের গ্রহণকৃত খাদ্য হজমের জন্য পর্যাপ্ত পরিমাণে পরিপাক এনজাইম উৎপন্ন করতে পারে না। অথচ খাদ্যে থাকা বিভিন্ন উপাদান যেমন শর্করা, প্রোটিন ও চর্বি হজমের জন্য ভিন্ন ভিন্ন ধরনের এনজাইমের প্রয়োজন হয়। Farmizyme-এ রয়েছে মাল্টি-এনজাইম ও গাট প্রোবায়োটিকের সমন্বিত ফর্মুলা, যা খাদ্যের সকল পুষ্টি উপাদান দ্রুত ভেঙে হজমযোগ্য করে, পুষ্টি শোষণ বৃদ্ধি করে এবং হজম প্রক্রিয়াকে ত্বরান্বিত করে। এই প্রোবায়োটিক ব্যবহারের ফলে তা অন্ত্রে ক্ষতিকর ব্যাকটেরিয়ার সাথে স্থান ও খাদ্যের জন্য প্রতিযোগিতা করে এবং ক্ষতিকর ব্যাকটেরিয়া দূর করতে সাহায্য করে এবং রোগ প্রতিরোধ ক্ষমতা বাড়ায়।',
      composition: 'প্রতি ৫০০ গ্রামে রয়েছে: ব্যাসিলাস সাবটিলিস (১.০ × ১০¹¹ CFU), ল্যাক্টোব্যাসিলাস অ্যাসিডোфিলাস (১.০ × ১০¹⁰ CFU), ল্যাক্টোব্যাসিলাস কেসিআই (১.০ × ১০¹⁰ CFU), স্ট্রেপ্টোকক্কাস ফেসিয়াম (১.০ × ১০¹⁰ CFU), জাইল্যানেজ (৩০,০০০ IU), পেকটিনেজ (৮,০০০ IU), সেলুলেজ (৮,০০০ IU), ফাইটেজ (৮,০০০ IU), প্রোটিয়েজ (৩,০০০ IU), অ্যামাইলেজ (৪,০০০ IU), বিটা গ্লুকানেজ (৪,০০০ IU), ম্যানোজ (৩,০০০ IU), লাইপেজ (৩,০০০ IU)।',
      benefits: [
        'মাছ ও চিংড়ির খাদ্য দ্রুত ভেঙে হজমযোগ্য করতে সহায়তা করে।',
        'খাদ্য রূপান্তর হার (FCR) উন্নত করে।',
        'পুষ্টি শোষণের দক্ষতা বৃদ্ধি করে।',
        'রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।',
        'সুতা বা নুডলস আকৃতির মলত্যাগ কমাতে সাহায্য করে।',
        'অন্ত্রে উপকারী ব্যাকটেরিয়ার সংখ্যা বৃদ্ধি করে এবং ক্ষতিকর ব্যাকটেরিয়ার বৃদ্ধি দমন করে।',
        'পরিপাকতন্ত্র সুস্থ রাখে এবং হজম প্রক্রিয়াকে ত্বরান্বিত করে।',
        'লিভারের সুস্থতা বজায় রাখতে সহায়তা করে।',
        'খাদ্যের রুচি (Palatability) বৃদ্ধি করে।',
        'এন্টিবায়োটিক ব্যবহারের পর লিভারের ও বৃক্কের বিষাক্ততা দূর করে।',
        'স্ট্রোকজনিত মৃত্যুর হার কমায়।'
      ],
      dosage: 'পোল্ট্রিতে: ২৫০ গ্রাম/টন খাদ্যে বা ০.২ গ্রাম/লি. পানিতে;\nগবাদি প্রাণীতে: ২০০ গ্রাম/টন খাদ্যে বা ০.২ গ্রাম/লি. পানিতে;\nমাছে/চিংড়িতে: ০.৫ গ্রাম/কেজি খাদ্যে;\nবা ১০ গ্রাম/শতকে, ৩-৫ ফুট গভীর পানিতে।\n\nঅথবা, মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '৫০০ গ্রাম স্যাসেট ও ১ কেজি জার',
      origin: 'থাইল্যান্ড 🇹🇭',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠাণ্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'biomin-c',
    imagePlaceholderColor: 'from-[#f97316] to-[#e11922]',
    iconType: 'nutrition',
    bgGrad: 'rgba(249, 115, 22, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Biomin C Complex',
      category: 'Immune & Stress Booster',
      description: 'Biomin C Complex is a water-soluble vitamins. This means that it dissolves in water and is delivered to the body\'s tissues but is not well stored. So it must be taken daily through feed or supplements.',
      composition: 'Ascorbic Acid (Vitamin C) 100% (C₆H₈O₆).',
      benefits: [
        'Significantly enhances the disease resistance and immunity of fish, shrimp, and other aquatic animals.',
        'Provides instant energy boost to fish and shrimp.',
        'Prevents stress in fish during transportation.',
        'Helps in rapid healing of wounds and physical tissue injuries.',
        'Overcomes weakness caused by disease or metabolic disorders.',
        'Accelerates digestion, thereby improving the Feed Conversion Ratio (FCR).',
        'Rapidly relieves post-antibiotic stress.',
        'Enhances appetite and feed intake of fish and shrimp.',
        'Aids in the healthy formation of bones, skeletal structures, and scales.',
        'Regular use maintains the natural, vibrant, and bright body color of fish.'
      ],
      dosage: 'Aquaculture:\n- Preventive: 1-2 g per kg of feed.\n- Curative: 2-3 g per kg of feed.\nOr, as directed by an aquaculture expert.\n\nPoultry Farm:\n- 2-3 g per kg of feed or mixed with 20 liters of water.\nOr, as directed by a registered veterinarian.',
      packSize: '100 g, 500 g, and 1 kg Jar',
      origin: 'China',
      storage: 'Store in a dry and cool place (below 30°C) away from light. Keep out of reach of children.'
    },
    bn: {
      title: 'বায়োমিন সি কমপ্লেক্স (Biomin C Complex)',
      category: 'ধকল থেকে দ্রুত রক্ষাকারী ও শক্তি সরবরাহকারী প্রিমিক্স (ভিটামিন সি)',
      description: 'বায়োমিন সি কমপ্লেক্স একটি জৈব অম্ল যা মাছ, চিংড়ি ও অন্যান্য প্রাণীর জন্য খুবই প্রয়োজনীয় পুষ্টি উপাদান। বায়োমিন সি কমপ্লেক্স মূলত দেহে প্রবেশ করে সেলুলার উপাদানগুলিকে ক্ষতিকর রেডিয়েশন থেকে রক্ষা করার জন্য এন্টি-অক্সিডেন্ট হিসেবে কাজ করে।',
      composition: 'এসকরবিক এসিড (Ascorbic Acid) ১০০% (C₆H₈O₆)',
      benefits: [
        'মাছ, চিংড়ি ও অন্যান্য প্রাণীর রোগ-প্রতিরোধ ক্ষমতা অধিক বাড়ায়।',
        'মাছ ও চিংড়ির তাৎক্ষণিক শক্তি সরবরাহ করে।',
        'মাছ পরিবহনের সময় ধকল প্রতিরোধ করে।',
        'যেকোনো ক্ষত দ্রুত শুকাতে সাহায্য করে।',
        'রোগজনিত কারণে সৃষ্ট দুর্বলতা দূর করে।',
        'হজম ক্রিয়া ত্বরান্বিত করে, ফলে খাদ্য রূপান্তর হার (FCR) উন্নত হয়।',
        'এন্টিবায়োটিক পরবর্তী ধকল (Stress) দ্রুত দূর করে।',
        'খাবার খাওয়ার জন্য মাছ ও চিংড়ির রুচি বৃদ্ধি করে।',
        'মাছের হাড়/কাটা গঠনে সাহায্য করে।',
        'বায়োমিন সি কমপ্লেক্স নিয়মিত ব্যবহারে মাছের রং ন্যাচারাল ও উজ্জ্বল থাকে।'
      ],
      dosage: 'মাছ/চিংড়ি চাষে-\n- প্রতিরোধে, ১-২ গ্রাম; প্রতি কেজি খাবারের সাথে ব্যবহার।\n- চিকিৎসায়, ২-৩ গ্রাম; প্রতি কেজি খাবারের সাথে ব্যবহার।\nঅথবা, মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।\n\nপোল্ট্রি খামারে-\n- ২-৩ গ্রাম; প্রতি কেজি খাবারের সাথে অথবা ২০ লিটার পানিতে মিশিয়ে ব্যবহার।\nঅথবা, ভেটেরিনারি চিকিৎসকের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '১০০ গ্রাম, ৫০০ গ্রাম ও ১ কেজি জার',
      origin: 'চীন',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠান্ডা (৩০° সে. তাপমাত্রার নিচে) স্থানে রাখুন। শিশুদের নাগালের বাইরে রাখুন।'
    }
  },
  {
    id: 'germbit',
    imagePlaceholderColor: 'from-[#e11922] to-[#2b3b90]',
    iconType: 'disinfectant',
    bgGrad: 'rgba(225, 25, 34, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Germbit (Strong Disinfectant)',
      category: 'Strong Disinfectant',
      description: 'Germbit is an active farm-safer from any pathogen such as harmful Bacteria, Virus, Fungus or other microorganisms that can cause diseases.',
      composition: 'Alkyl dimethyl benzyl ammonium chloride 80% + Excipients 20%.',
      benefits: [
        'Eliminates Zoothamnium and algae accumulated on the body of fish and shrimp, making the skin bright.',
        'Accelerates the molting process of shrimp and promotes rapid physical growth.',
        'Highly effective in preventing and curing severe diseases like tail & fin rot, dropsy, gill rot, red and white spots in shrimp, soft shell, yellow head, and broken antennae.',
        'Extremely safe and cost-effective disinfectant that consistently improves farm hygiene.',
        'Highly effective in relieving stress of fish and shrimp and keeping the farm completely pathogen-free.'
      ],
      dosage: 'Preventive: 2-3 ml / decimal in 3-5 ft water depth.\nCurative: 3-4 ml / decimal in 3-5 ft water depth.\nOr, as directed by an aquaculture expert.',
      packSize: '100 ml, 500 ml, and 1 Liter',
      origin: 'England (UK)',
      optimalTime: '10:00 AM - 1:00 PM',
      specialNote: 'Be conscious to build a pathogen-free/sterile farm.',
      storage: 'Store in a cool and dry place away from light. Keep out of reach of children.'
    },
    bn: {
      title: 'জার্মবিট - Germbit (Strong Disinfectant)',
      category: 'শক্তিশালী জীবাণুনাশক',
      description: 'জার্মবিট একটি অত্যন্ত কার্যকর ও নির্ভরযোগ্য স্যানিটাইজার, যা খামারকে ক্ষতিকর ব্যাকটেরিয়া, ভাইরাস, ছত্রাক (ফাঙ্গাস), প্রোটোজোয়া এবং অন্যান্য রোগজীবাণুর আক্রমণ থেকে সুরক্ষা প্রদান করে। এটি বিভিন্ন তাপমাত্রা ও প্রতিকূল পরিবেশেও সমান কার্যকারিতা বজায় রেখে জীবাণু দমনে কাজ করে। তাই জার্মবিট একটি আদর্শ জীবাণুনাশক (Disinfectant) হিসেবে পরিচিত।',
      composition: 'এলকাইল-ডাই-মিথাইল বেনজাইল অ্যামোনিয়াম ক্লোরাইড ৮০% এবং এক্সিপিয়েন্টস ২০%।',
      benefits: [
        'মাছ ও চিংড়ির দেহে জমাকৃত জুথামনিয়াম (Zoothamnium) ও শ্যাওলা দূর করে ত্বককে উজ্জ্বল করে।',
        'চিংড়ির খোলস পাল্টানো অর্থাৎ মোল্টিং ত্বরান্বিত করে দ্রুত দৈহিক বৃদ্ধি সাধন করে।',
        'মাছের মারাত্মক রোগ যেমন- পাখনা ও লেজ পঁচা, পেটফোলা, কালো ফুলকা পঁচা, শ্যাওলা পড়া রোগ, ক্ষত রোগ এবং চিংড়ির লাল ও সাদা দাগ, নরম খোসা, কালো ও লাল ফুলকা, শ্যাওলা পড়া, মস্তক হলুদ হওয়া, দাড়ি গোঁফ ভাঙ্গা ইত্যাদি রোগ প্রতিরোধে অত্যন্ত কার্যকরী।',
        'খুবই নিরাপদ ও সাশ্রয়ী জীবাণুনাশক যা খামারের ক্রমাগত উন্নতি সাধন করে।',
        'মাছের ও চিংড়ির খামারে ক্ষতিকর ব্যাকটেরিয়া, ভাইরাস, ফাঙ্গাস ও প্রোটোজোয়া জনিত যেকোনো রোগ প্রতিরোধে ও প্রতিকারে অত্যন্ত কার্যকর এবং নির্ভরযোগ্য সমাধান।',
        'খামারকে ক্ষতিকর জীবাণু থেকে মুক্ত রাখতে এবং মাছের ও চিংড়ির যেকোনো ধকল দূর করতে অত্যন্ত কার্যকর।'
      ],
      dosage: 'প্রতিরোধে: ২-৩ মি.লি./শতকে (৩-৫ ফুট পানির গভীরতায়)।\nনিরাময়ে: ৩-৪ মি.লি./শতকে (৩-৫ ফুট পানির গভীরতায়) অথবা বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '১০০ মি.লি., ৫০০ মি.লি. ও ১ লিটার',
      origin: 'ইংল্যান্ড (UK)',
      optimalTime: 'সকাল ১০টা - দুপুর ১টা',
      specialNote: 'জীবাণুমুক্ত খামার গড়তে সচেতন হোন।',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠান্ডা স্থানে সংরক্ষণ করুন। শিশুদের নাগালের বাইরে রাখুন।'
    }
  },
  {
    id: 'bioliv-care',
    imagePlaceholderColor: 'from-[#ec4899] to-[#db2777]',
    iconType: 'liver',
    bgGrad: 'rgba(236, 72, 153, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Bioliv Care Active Liver Tonic',
      category: 'Liver & Appetite Stimulant',
      description: 'Scientific liver protection complex that prevents white feces, boosts appetite, and ensures high enzymatic nutrient synthesis.',
      composition: 'Silymarin extract, Arginine, Betaine, Choline Chloride, Sorbitol and Active B-vitamins.',
      benefits: [
        'Protects the liver and hepatopancreas of fish and shrimp from toxin overloading.',
        'Stimulates rapid secretion of digestive enzymes to improve food absorption.',
        'Prevents fatty liver syndromes and sudden white gut issues in shrimp.',
        'Restores health quickly after intensive antibiotics therapeutical treatments.'
      ],
      dosage: '5 - 7 ml per kg of pellet feed. Mix and leave to dry in shade for 20 minutes before feeding.',
      packSize: '1 Litre Bottle',
      origin: 'Thailand'
    },
    bn: {
      title: 'Bioliv Care - বায়োলিভ কেয়ার লিভার টনিক',
      category: 'লিভারের কার্যকারিতা ও হজম বর্ধক',
      description: 'মাছ, চিংড়ির লিভারের সুরক্ষা নিশ্চিতকরণ, যকৃতের জটিলতা দূরীকরণ এবং খাবারে দুর্দান্ত রুচি বাড়ানোর বৈজ্ঞানিক ফর্মুলা।',
      composition: 'সিলিমারিন (মিল্ক থিসল নির্যাস), আরজিনিন, বিটেইন, কোলিন ক্লোরাইড এবং সরবিটল।',
      benefits: [
        'মাছ ও চিংড়ির যকৃত বা হেপাটোপ্যানক্রিয়াসকে সব ধরণের টক্সিন বা বিষক্রিয়া থেকে রক্ষা করে।',
        'খাদ্য গ্রহণে অনিচ্ছা থাকলে তা দূর করে হজমশক্তি বৃদ্ধি করে দ্রুত খাদ্য রূপান্তর করে।',
        'লিভারের লিপিড মেটাবলিজম নিয়ন্ত্রণ করে অতিরিক্ত চর্বি জমতে বাধা দেয়।',
        'অ্যান্টিবায়োটিক বা রাসায়নিক ব্যবহারের ধকল থেকে লিভারকে সজীব করে তোলে।'
      ],
      dosage: 'মাছ/চিংড়িতে: ৫-৭ মিলি প্রতি কেজি খাবারের সাথে মিশিয়ে প্রয়োগ করুন।',
      packSize: '১ লিটার বোতল',
      origin: 'থাইল্যান্ড'
    }
  },
  {
    id: 'pure-saline',
    imagePlaceholderColor: 'from-[#f97316] to-[#ea580c]',
    iconType: 'nutrition',
    bgGrad: 'rgba(249, 115, 22, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Pure Saline',
      category: 'Glucose, Minerals & Vitamins Mixer',
      description: 'Pure Saline is used to compensate for the loss of excessive fluid (water & salt) from the body of fish, poultry & cattle etc. It is highly effective in compensating for the loss of water and salt in the body. Due to temperature variation, various changes can be seen in the body of fish, shrimp, and other animals, such as decreased food demand, weakness, and reduced movement. Application of Pure Saline resolves these problems quickly, restoring the necessary water and electrolyte balance of the body. Therefore, it is called an Isotonic Solution.',
      composition: 'Sodium Chloride BP 280 g, Potassium Chloride BP 80 g, Sodium Bicarbonate BP 300 g, Trisodium Citrate Dihydrate BP 25 g, Ascorbic Acid BP 30 g, Anhydrous Glucose BP 285 g',
      benefits: [
        'Replenishes mineral and vitamin deficiencies in the body to supply immediate energy.',
        'Eliminates acid-base imbalance in the body to restore and maintain normal physiological conditions.',
        'Helps animals recover vitality quickly when used after treatments with antibiotics, dewormers, disinfectants, or vaccines.',
        'Protects animals from all types of stress and risks during transportation.',
        'Overcomes stress and weakness caused by sudden changes in weather and temperature.',
        'Prevents and treats dehydration effectively.',
        'Overcomes weakness and significantly enhances appetite and feed intake.',
        'Plays an active role in food digestion.',
        'Improves Feed Conversion Ratio (FCR).',
        'Increases egg production in poultry.',
        'Accelerates digestive system functions.',
        'Prevents nausea and ensures overall physical well-being.'
      ],
      dosage: 'Fish & Shrimp:\n- 1 g per 3 Liters of water (during fry transportation, in hatcheries, or tanks).\n\nPoultry:\n- 1 g per 2-3 Liters of water for 4-5 days.\n\nCattle:\n- 1 g per 2-3 Liters of water for 5-7 days.\n\nOr, as directed by an expert.',
      packSize: '1 kg Bag',
      origin: 'China',
      storage: 'Store in a cool and dry place away from light. Keep out of reach of children.'
    },
    bn: {
      title: 'পিউর স্যালাইন (Pure Saline)',
      category: 'গ্লুকোজ, মিনারেল ও ভিটামিনের সমন্বয়ে গঠিত শক্তিবর্ধক',
      description: 'দেহে পানির ও লবণের ঘাটতি পূরণে পিউর স্যালাইন অত্যন্ত কার্যকর। তাপমাত্রার তারতম্যজনিত কারণে মাছ, চিংড়ি ও অন্যান্য গবাদিপশুর দেহে বিভিন্ন পরিবর্তন দেখা দিতে পারে, যেমন খাদ্যের চাহিদা কমে যাওয়া, দুর্বলতা এবং চলাফেরায় হ্রাস। পিউর স্যালাইন প্রয়োগের ফলে এসব সমস্যার দ্রুত সমাধান পাওয়া যায় এবং দেহের প্রয়োজনীয় পানির ও ইলেক্ট্রোলাইটের ভারসাম্য বজায় থাকে। তাই একে আইসোটনিক সলিউশন (Isotonic Solution) বলা হয়।',
      composition: 'সোডিয়াম ক্লোরাইড বিপি ২৮০ গ্রাম, পটাশিয়াম ক্লোরাইড বিপি ৮০ গ্রাম, সোডিয়াম বাই-কার্বনেট বিপি ৩০০ গ্রাম, ট্রাইসোডিয়াম সাইট্রেট-ডাই-হাইড্রেট বিপি ২৫ গ্রাম, এসকরবিক এসিড বিপি ৩০ গ্রাম, এনহাইড্রাস গ্লুকোজ বিপি ২৮৫ গ্রাম',
      benefits: [
        'দেহে মিনারেল ও ভিটামিনের অভাব পূরণ করে তাৎক্ষণিক শক্তি যোগায়।',
        'দেহে অম্ল-ক্ষারকের তারতম্য দূর করে স্বাভাবিক অবস্থা বিরাজ করে।',
        'যেকোনো এন্টিবায়োটিক, কৃমিনাশক ও জীবাণুনাশক অথবা ভ্যাকসিনের পর পিউর স্যালাইন ব্যবহার করলে দ্রুত দেহে প্রাণবন্ত অবস্থা ফিরে আসে।',
        'পরিবহনের সময় সব ধরনের ঝুঁকি ও ধকল থেকে রক্ষা করে।',
        'আবহাওয়া ও তাপমাত্রার পরিবর্তনজনিত দেহে সৃষ্ট যেকোনো ধকল ও দুর্বলতা দূর করে।',
        'দেহের পানিশূন্যতা দূর করে।',
        'দুর্বলতা দূর করে খাবারের চাহিদা বৃদ্ধি করে।',
        'খাবার হজমে সক্রিয় ভূমিকা পালন করে।',
        'খাদ্য রূপান্তর হার (FCR) উন্নত করে।',
        'হাঁস-মুরগির ডিম উৎপাদন বৃদ্ধি করে।',
        'পরিপাকতন্ত্রের ক্রিয়া ত্বরান্বিত করে।',
        'বমি ভাব দূর করে শারীরিক সুস্থতা নিশ্চিত করে।'
      ],
      dosage: 'মাছ ও চিংড়ি:\n- ১ গ্রাম, ৩ লিটার পানিতে (পোনা স্থানান্তরের সময়, হ্যাচারীতে অথবা ট্যাংকে)।\n\nপোল্ট্রি:\n- ১ গ্রাম, ২-৩ লিটার পানিতে (৪ - ৫ দিন)।\n\nগরু:\n- ১ গ্রাম, ২-৩ লিটার পানিতে (৫ - ৭ দিন)।\n\nঅথবা বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '১ কেজি',
      origin: 'চীন',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠান্ডা স্থানে সংরক্ষণ করুন। শিশুদের নাগালের বাইরে রাখুন।'
    }
  },
  {
    id: 'yucca-biosol',
    imagePlaceholderColor: 'from-[#10b981] to-[#047857]',
    iconType: 'gas',
    bgGrad: 'rgba(16, 185, 129, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Yucca Biosol Liquid',
      category: 'Water Quality & Gas Controller',
      description: 'YUCCA BIOSOL Liquid is an ideal ammonia and harmful gas control product. It is a premium natural plant extract-based water quality improver (Water Quality Improver), highly effective in controlling ammonia and other toxic gases in ponds. It is prepared from the extract of Yucca schidigera, a plant native to the desert regions of North and South America. It naturally contains Saponins, Steroidal Compounds, and strong antioxidant ingredients, which play a crucial role in improving the quality of the aquatic environment. YUCCA BIOSOL Liquid helps absorb and control ammonia (NH₃), hydrogen sulfide (H₂S), nitrite (NO₂⁻), nitrate (NO₃⁻), methane (CH₄) and other harmful gases in water. As a result, pond odor is reduced, water quality is improved, the efficacy of dissolved oxygen is enhanced, and a healthy, favorable environment is created for fish and shrimp.',
      composition: 'Yucca schidigera extract, Saponins, Glyco-components.',
      benefits: [
        'Rapidly reduces levels of ammonia and other harmful gases generated in the farm.',
        'Plays a highly effective role in decomposing and treating organic waste at the pond bottom.',
        'Maintains overall water quality and farm hygiene by ensuring an odor-free environment.',
        'The saponins present in it help in easy absorption of nutrients and promote beneficial gut bacteria for better feed digestion.',
        'Improves FCR (Feed Conversion Ratio).'
      ],
      dosage: 'Preventative: 2-3 ml/decimal (for 3-5 ft water depth).\nCurative: 3-4 ml/decimal (for 3-5 ft water depth) or as recommended by an aquaculture specialist.\n\nMethod of application: Mix with sufficient water and distribute evenly across the pond or gher during sunny hours.',
      packSize: '100 ml & 500 ml',
      origin: 'Mexico 🇲🇽',
      optimalTime: 'During sunny hours (daytime).',
      storage: 'Keep in a cool, dry place away from direct sunlight.'
    },
    bn: {
      title: 'Yucca Biosol - ইউকা বায়োসল লিকুইড',
      category: 'অ্যামোনিয়া ও ক্ষতিকর গ্যাস নিয়ন্ত্রক',
      description: 'ইউকা বায়োসল লিকুইড একটি প্রাকৃতিক উদ্ভিদ নির্যাসভিত্তিক উচ্চমানের জলমান উন্নয়নকারী (Water Quality Improver), যা পুকুরে অ্যামোনিয়া ও অন্যান্য ক্ষতিকর গ্যাস নিয়ন্ত্রণে অত্যন্ত কার্যকর। এটি উত্তর ও দক্ষিণ আমেরিকার মরুভূমি অঞ্চলে জন্মানো ইউকা সিডিজেরা (Yucca schidigera) উদ্ভিদের নির্যাস থেকে প্রস্তুত। এতে প্রাকৃতিকভাবে বিদ্যমান স্যাপোনিন (Saponins), স্টেরয়েডাল যৌগ (Steroidal Compounds) এবং শক্তিশালী অ্যান্টি-অক্সিডেন্ট উপাদান রয়েছে, যা জলজ পরিবেশের গুণগত মান উন্নত করতে গুরুত্বপূর্ণ ভূমিকা পালন করে। ইউকা বায়োসল লিকুইড পানিতে বিদ্যমান অ্যামোনিয়া (NH₃), হাইড্রোজেন সালফাইড (H₂S), নাইট্রাইট (NO₂⁻), নাইট্রেট (NO₃⁻), মিথেন (CH₄) সহ অন্যান্য ক্ষতিকর গ্যাস শোষণ ও নিয়ন্ত্রণে সহায়তা করে। ফলে পানির দুর্গন্ধ কমে, পানির মান উন্নত হয়, দ্রবীভূত অক্সিজেনের কার্যকারিতা বৃদ্ধি পায় এবং মাছ ও চিংড়ির জন্য একটি স্বাস্থ্যকর ও অনুকূল পরিবেশ সৃষ্টি হয়।',
      composition: 'ইউকা সিডিজেরা গাছের নির্যাস, স্যাপোনিন্স এবং গ্লাইকোকম্পোনেন্ট।',
      benefits: [
        'খামারে সৃষ্ট অ্যামোনিয়া ও অন্যান্য ক্ষতিকর গ্যাসসমূহের মাত্রা দ্রুত কমিয়ে দেয়।',
        'পুকুরের তলদেশে সৃষ্ট জৈব বর্জ্য শোধনে অত্যন্ত কার্যকর ভূমিকা পালন করে।',
        'দুর্গন্ধমুক্ত খামার নিশ্চিত করার মাধ্যমে সার্বিক গুণাগুণ অটুট রাখে।',
        'এতে বিদ্যমান স্যাপোনিন্স খাদ্য উপাদান সহজে শোষণ করতে সাহায্য করে এবং খাদ্যনালীতে উপকারী ব্যাকটেরিয়া বৃদ্ধি করে খাদ্যকে সহজে হজম করতে সাহায্য করে।',
        'এফ.সি.আর (FCR) উন্নত করে।'
      ],
      dosage: 'প্রতিরোধে: ২-৩ মি.লি/শতকে, ৩-৫ ফুট পানির গভীরতায়।\nনিরাময়ে: ৩-৪ মি.লি/শতকে, ৩-৫ ফুট পানির গভীরতায়।\nঅথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।\n\nপ্রয়োগবিধি: পরিমাণমত পানিতে মিশিয়ে রোদের সময় পুকুরে বা ঘেরে ছিটিয়ে দিতে হবে।',
      packSize: '১০০ মি.লি. ও ৫০০ মি.লি.',
      origin: 'মেক্সিকো 🇲🇽',
      optimalTime: 'রোদের সময় (দিনের বেলা)।',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠাণ্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'paratin',
    imagePlaceholderColor: 'from-[#eab308] to-[#ea580c]',
    iconType: 'disinfectant',
    bgGrad: 'rgba(234, 179, 8, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Paratin (Ivermectin 3% Solution)',
      category: 'Effective Parasite Killer',
      description: 'Paratin is an anti-parasitic drug that is commonly used in both aquaculture and other animals to treat a variety of parasitic infections. It works by paralyzing and killing parasites. It paralyzes parasites by modulating GABA-mediated chloride channels, providing the most effective solution for parasite control in fish, shrimp, and other aquatic species.',
      composition: 'Ivermectin 3.00%, Excipients & Others 97.00%',
      benefits: [
        'Rapidly destroys all types of harmful endoparasites and ectoparasites.',
        'Incredibly successful in treating skin and gill infections.',
        'Plays an active role in controlling wound and ulcer diseases.',
        'Acts as a highly effective antifungal agent.',
        'Parasites like Ticks, Mites & Acaridae cannot develop resistance against Paratin.',
        'Quickly paralyzes and eliminates parasite hosts.'
      ],
      symptoms: [
        'Lice attach to the body, back, and fins of the fish.',
        'Scales fall off and the parasite inserts its stylet, sucking blood and causing lesions.',
        'Fish swim near the pond edges or rub their bodies against hard objects.',
        'Fish strike their tails and jump around due to severe irritation.',
        'Severe infestations can cause mortality, and the infected area becomes reddish.'
      ],
      dosage: '1 ml per Decimal for 3-5 ft water depth.\n\nOr, as recommended by an aquaculture expert.',
      packSize: '100 ml & 500 ml Bottles',
      origin: 'China 🇨🇳',
      optimalTime: 'It is best to apply the parasiticide in good weather between 3:00 PM and 4:00 PM.',
      specialNote: 'Paratin does not accumulate in fish tissue. Therefore, it is safe for fish and shrimp. Fish or shrimp treated with Paratin is completely safe for human consumption.',
      storage: 'Store in a cool and dry place away from light.'
    },
    bn: {
      title: 'প্যারাটিন (Paratin)',
      category: 'কার্যকর পরজীবীনাশক',
      description: 'প্যারাটিন (Paratin) উকুন (Argulus), আঠালি (Ticks), মাইটস (Mites), শুঁককীট (Maggots) ও অন্যান্য বহিঃপরজীবীর মাধ্যমে মাছে ও অন্যান্য প্রাণীদেহে রক্তস্বল্পতা, পুষ্টিহীনতা এবং দেহের বিভিন্ন অংশে ক্ষত ও ত্বকজনিত রোগ দেখা যায়। প্যারাটিন (Paratin) কৃমি, উকুন, কীট, পোকা ইত্যাদি সব ধরনের অন্তঃপরজীবী ও বহিঃপরজীবী দ্রুত ধ্বংস করে দেহকে রক্ষা করে। মূলত প্যারাটিন (Paratin) গাবা মিডিয়েটেড ক্লোরাইড আয়নের পরিচালনের মাধ্যমে পরজীবীদের (Parasites) অবশ করে ও পরবর্তীতে ধ্বংস করে। এটি মাছ, চিংড়ি ও অন্যান্য সকল প্রাণীর ক্ষেত্রে পরজীবী নিধনে সর্বোপেক্ষা কার্যকর সমাধান।',
      composition: 'আইভারমেকটিন ৩.০০%, এক্সিপিয়েন্টস ও অন্যান্য ৯৭.০০%',
      benefits: [
        'সব ধরনের ক্ষতিকারক অন্তঃপরজীবী ও বহিঃপরজীবী দ্রুত ধ্বংস করে।',
        'ত্বক ও ফুলকার চিকিৎসায় অবিশ্বাস্য হারে সফল।',
        'ক্ষতরোগ নিয়ন্ত্রণে কার্যকর ভূমিকা পালন করে।',
        'এন্টিফাঙ্গাল হিসেবে কাজ করে।',
        'Ticks, Mites & Acaridas ইত্যাদি প্যারাটিন (Paratin) এর বিরুদ্ধে কোন প্রতিরোধ সৃষ্টি করতে পারে না।',
        'দ্রুত পরজীবীদের অবশ করে দেয়।'
      ],
      symptoms: [
        'উকুন মাছের দেহে, পৃষ্ঠে ও পাখনায় লেগে থাকে।',
        'আঁইশ খসে পড়ে এবং শূল প্রবেশ করানো থাকে। রক্ত চুষে ক্ষত সৃষ্টি করে।',
        'মাছ খামারের কিনারায় এসে বা শক্ত কিছুর সাথে ঘষাঘষি করে।',
        'যন্ত্রণায় লেজ বাড়ি মারে ও লাফালাফি করে।',
        'অধিক আক্রান্তে মাছের মৃত্যুও ঘটে। আক্রান্ত স্থানের চারপাশ লালচে বর্ণ হয়।'
      ],
      dosage: '১ মি.লি./শতকে, ৩-৫ ফুট পানির গভীরতায়।\n\nঅথবা বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '১০০ মি.লি. ও ৫০০ মি.লি.',
      origin: 'চীন 🇨🇳',
      optimalTime: 'ভালো আবহাওয়ায় বিকেল ৩টা থেকে ৪টার মধ্যে উকুননাশক প্রয়োগ করা উত্তম।',
      specialNote: 'প্যারাটিন (Paratin) মাছের টিস্যুতে জমা হয় না। তাই এটি মাছের ও চিংড়ির জন্য নিরাপদ। প্যারাটিন (Paratin) ব্যবহৃত মাছ বা চিংড়ি খাওয়া মানুষের জন্য সম্পূর্ণ নিরাপদ।',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠান্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'zeoprob-plus',
    imagePlaceholderColor: 'from-[#059669] to-[#047857]',
    iconType: 'probiotic',
    bgGrad: 'rgba(5, 150, 105, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Zeoprob Plus (Granular)',
      category: 'Biological & Zeolite Pond Conditioner',
      description: 'Zeoprob Plus is an advanced biological and zeolite-based pond care technology. It ensures rapid decomposition of organic waste accumulated at the bottom of the pond and effectively helps eliminate the black soil (Black Soil) problem through oxidation. Regular use of Zeoprob Plus significantly reduces the production of ammonia (NH₃), nitrite (NO₂⁻), hydrogen sulfide (H₂S), and other harmful toxic gases. Consequently, the pond bottom and water quality remain improved, maintaining a healthy aquatic environment. Zeoprob Plus helps stabilize soil pH at 5–7 and water pH at 7.5–8.5. This keeps the pond ecosystem balanced, increases the activity of beneficial microorganisms, and creates a favorable environment for fish and shrimp, reducing disease risks and ensuring rapid growth.',
      composition: 'Aspergillus oryzae (2X10⁹ CFU), Saccharomyces cerevisiae (2X10⁹ CFU), Bacillus subtilis (4X10⁹ CFU), Rhodobacter sp. (4X10⁹ CFU), Bacillus licheniformis (2X10⁹ CFU), Rhodococcus sp. (2X10⁹ CFU), Lactobacillus acidophilus (2X10⁹ CFU), Yucca extract. Chemical Composition: SiO₂ (68.7%), Al₂O₃ (13.2%), CaO (6.34%), MgO (3.80%), K₂O (2.8%), Na₂O (2.15%), Fe₂O₃ (1.89%), TiO₂ (0.67%) with highly active C.E.C of 385meq/gm.',
      benefits: [
        'Increases the production of natural pond feed (plankton).',
        'Stabilizes pH levels and decreases the amount of CO₂ (Carbon Dioxide).',
        'Promotes the population of beneficial probiotic bacteria.',
        'Improves the pond environment by absorbing organic wastes and odors from the bottom.',
        'Eliminates dark coloration (black soil/mud) and harmful gases at the bottom.',
        'Enhances the immune system of fish and shrimp, allowing beneficial microbes to colonize the intestinal tract of the cultivated species.',
        'Assists in the synthesis of vital nutrients and vitamins.',
        'Acts as a strong biological control agent to prevent the overgrowth of pathogenic germs.'
      ],
      dosage: 'During Pond Preparation: 8–10 kg per acre (for 3–5 ft water depth).\nDuring Cultivation Period: 6–7 kg per acre (for 3–5 ft water depth).\n\nOr as recommended by an aquaculture specialist.\n\nMethod of application: Mix with sand or water and distribute evenly across the pond.',
      packSize: '5 kg Bag',
      origin: 'India 🇮🇳',
      storage: 'Keep in a cool, dry place away from direct sunlight.'
    },
    bn: {
      title: 'Zeoprob Plus - জিওপ্রোব প্লাস (গ্র্যানুলার)',
      category: 'বায়োলজিক্যাল ও জিওলাইট পুকুর পরিচর্যা প্রযুক্তি',
      description: 'জিওপ্রোব প্লাস একটি উন্নতমানের বায়োলজিক্যাল ও জিওলাইটভিত্তিক পুকুর পরিচর্যা প্রযুক্তি, যা পুকুরের তলদেশে জমে থাকা জৈব বর্জ্যের দ্রুত পচন নিশ্চিত করে এবং অক্সিডাইজেশনের মাধ্যমে কালো মাটির (Black Soil) সমস্যা কার্যকরভাবে দূর করতে সহায়তা করে। এটি নিয়মিত ব্যবহার করলে অ্যামোনিয়া (NH₃), নাইট্রাইট (NO₂⁻), হাইড্রোজেন সালফاید (H₂S) এবং অন্যান্য ক্ষতিকর বিষাক্ত গ্যাসের উৎপাদন উল্লেখযোগ্যভাবে কমে যায়। ফলে পুকুরের তলদেশ ও পানির গুণগত মান উন্নত থাকে এবং একটি স্বাস্থ্যকর জলজ পরিবেশ বজায় থাকে। জিওপ্রোব প্লাস মাটির pH ৫-৭ এবং পানির pH ৭.৫-৮.৫ স্থিতিশীল রাখতে সহায়তা করে। এর ফলে পুকুরের বাস্তুতন্ত্র (Pond Ecosystem) সুষম থাকে, উপকারী অণুজীবের কার্যক্রম বৃদ্ধি পায় এবং মাছের ও চিংড়ির জন্য অনুকূল পরিবেশ সৃষ্টি হয়। ফলে মাছ ও চিংড়ি সুস্থ থাকে, রোগের ঝুঁকি কমে এবং দ্রুত বৃদ্ধি নিশ্চিত হয়।',
      composition: 'অ্যাসপারজিলাস ওরাইজি (2X10⁹ CFU), স্যাকারোমাইসেস সেরিমিসিয়া (2X10⁹ CFU), ব্যাসিলাস সাবটিলিস (4X10⁹ CFU), রোডোভ্যাক্টার sp. (4X10⁹ CFU), ব্যাসিলাস লিচেনিফরমিস (2X10⁹ CFU), রোডোকোক্কাস sp. (2X10⁹ CFU), ল্যাক্টোব্যাসিলাস অ্যাসিডোফিলাস (2X10⁹ CFU), ইউকা নির্যাস। রাসায়নিক উপাদানসমূহ: SiO₂ (৬৮.৭%), Al₂O₃ (১৩.২%), CaO (৬.৩৪%), MgO (৩.৮০%), K₂O (২.৮%), Na₂O (২.১৫%), Fe₂O₃ (১.৮৯%), TiO₂ (০.৬৭%) এবং সক্রিয় C.E.C ৩৮৫meq/gm।',
      benefits: [
        'প্রাকৃতিক খাদ্যের উৎপাদন বৃদ্ধি পায়।',
        'pH স্ট্যান্ডার্ড পর্যায়ে থাকে ও CO₂ এর পরিমাণ হ্রাস পায়।',
        'উপকারী ব্যাকটেরিয়ার সংখ্যা বৃদ্ধি পায়।',
        'খামারের তলদেশে বর্জ্য ও দুর্গন্ধ শোষণ করে পরিবেশ উন্নত করে।',
        'তলদেশে বিদ্যমান কালচে ভাব ও ক্ষতিকর গ্যাস দূর করে।',
        'জলজ পরিবেশে জিওপ্রোব প্লাস ব্যবহারের ফলে মাছের ও চিংড়ির রোগ-প্রতিরোধ ক্ষমতা বৃদ্ধি পায়, চাষকৃত প্রজাতি অন্ত্রে উপকারী অণুজীব বংশবিস্তার করে।',
        'বিভিন্ন পুষ্টি উপাদান ও ভিটামিন উৎপাদনে সাহায্য করে।',
        'ক্ষতিকর জীবাণুর অতিরিক্ত বংশবিস্তার প্রতিরোধে জৈবিক নিয়ন্ত্রক হিসেবে কাজ করে।'
      ],
      dosage: 'পুকুর প্রস্তুতির সময়: ৮-১০ কেজি/একরে, ৩-৫ ফুট পানির গভীরতায়।\nচাষকালীন: ৬-৭ কেজি/একরে, ৩-৫ ফুট পানির গভীরতায়।\n\nঅথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।\n\nব্যবহারের পদ্ধতি: বালির সাথে বা পানির সাথে মিশিয়ে প্রয়োগ।',
      packSize: '৫ কেজি',
      origin: 'ভারত 🇮🇳',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠাণ্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'quick-growth-gel',
    imagePlaceholderColor: 'from-[#1e40af] to-[#3b82f6]',
    iconType: 'growth',
    bgGrad: 'rgba(59, 130, 246, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Quick Growth Gel',
      category: 'Growth Promoter & Feed Attractant',
      description: 'Quick Growth Gel is an effective feed supplement that enhances growth and improves the overall health of fish. It acts as a strong binder, ensuring that feed additives are evenly distributed in the feed and preventing nutrient leaching in water. Quick Growth Gel also works as an excellent feed attractant, increasing feed intake and improving feed efficiency.',
      composition: 'Each liter contains: Arginine, Beta glucans, Calcium, Carotenoid, Cholesterol, Cobalt, Fatty Acids, Glycine, Lysine, Magnesium, Manganese, Methionine, MOS (Mannan Oligosaccharides), Omega-6, Polysaccharides, Protein, Vitamin (Vitamin-A, B1, B2, B3, B6, B12, C, D3), β-1, 3-D-Glucan, Binding Agents, Attractants.',
      benefits: [
        'Promotes rapid weight gain in fish and shrimp.',
        'Prevents wastage of applied feed when mixed with feed.',
        'Enhances appetite and digestive capacity.',
        'Improves the Feed Conversion Ratio (FCR).',
        'Reduces variations in the body sizes of fish and shrimp with regular use.',
        'Prevents thread-like feces in fish.',
        'Enhances skin brightness and disease resistance.',
        'Ensures fry remain healthy, active, and increases survival rates when used in fry feed.',
        'Completely natural and non-antibiotic with no side effects.',
        'Reduces cultivation time and increases farmer profitability.'
      ],
      dosage: '3–5 g per kg of feed, or 20 g for 100 kg of fish.\n\nOr as recommended by an aquaculture specialist.',
      packSize: '1 Litre',
      origin: 'India 🇮🇳',
      storage: 'Keep in a cool, dry place away from direct sunlight.'
    },
    bn: {
      title: 'Quick Growth Gel - কুইক গ্রোথ জেল',
      category: 'রুচিবর্ধক এবং ওজন বর্ধনকারী জেল',
      description: 'কুইক গ্রোথ জেল খাদ্যের পুষ্টিগুণ বৃদ্ধি করে এবং প্রাণীর দ্রুত বৃদ্ধি ও সুস্বাস্থ্য নিশ্চিত করতে সহায়তা করে। এটি অত্যন্ত সুস্বাদু ও সুগন্ধযুক্ত হওয়ায় খাদ্যের গ্রহণযোগ্যতা বৃদ্ধি পায়। এছাড়াও এটি একটি শক্তিশালী বাইন্ডার হিসেবে কাজ করে, ফলে খাদ্যে মিশ্রিত বিভিন্ন পুষ্টি উপাদান সমভাবে বিতরণ হয় এবং পানিতে পুষ্টি ক্ষয় (Leaching) কমে যায়। অ্যান্টিবায়োটিক বা জীবাণুনাশক ব্যবহারের পর খাদ্যের সাথে কুইক গ্রোথ জেল মিশিয়ে প্রয়োগ করলে প্রাণীর বৃদ্ধি এবং ওজন বৃদ্ধিতে ইতিবাচক ভূমিকা রাখে।',
      composition: 'প্রতি লিটারে রয়েছে: আরজিনিন, বিটা গ্লুকানস, ক্যালসিয়াম, ক্যারোটিনয়েড, কোলেস্টেরল, কোবাল্ট, ফ্যাটি এসিডস, গ্লাইসিন, লাইসিন, ম্যাগনেসিয়াম, ম্যাঙ্গানিজ, মেথিওনিন, এমওএস (মান্নান অলিগোস্যাকারাইডস), ওমেগা-৬, পলিস্যাকারাইডস, প্রোটিন, ভিটামিন (ভিটামিন-এ, বি১, বি২, বি৩, বি৬, বি১২, সি, ডি৩), বিটা-১, ৩-ডি-গ্লুকান, বাইন্ডিং এজেন্টস, অ্যাট্রাক্ট্যান্টস।',
      benefits: [
        'মাছের ও চিংড়ির ওজন দ্রুত বৃদ্ধি করে।',
        'খাদ্যের সাথে মিশিয়ে দিলে প্রয়োগকৃত খাদ্যের অপচয় রোধ হয়।',
        'রুচি ও হজমশক্তি বৃদ্ধি পায়।',
        'খাদ্য রূপান্তর হার (FCR) উন্নত করে।',
        'নিয়মিত ব্যবহারে মাছের ও চিংড়ির দৈহিক সাইজের পার্থক্য হ্রাস পায়।',
        'মাছের সুতা আকৃতির মল ত্যাগ রোধ করে।',
        'ত্বকের উজ্জ্বলতা ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।',
        'পোনার খাদ্যের সাথে ব্যবহারে পোনা সুস্থ-সবল থাকে ও টিকে থাকার নিশ্চয়তা বৃদ্ধি পায়।',
        'প্রাকৃতিক ও নন-অ্যান্টিবায়োটিক হওয়ায় কোনো পার্শ্ব-প্রতিক্রিয়া নাই।',
        'চাষের সময় কমায়, চাষীর মুনাফা বাড়ায়।'
      ],
      dosage: '৩-৫ গ্রাম প্রতি কেজি খাদ্যের সাথে অথবা, ১০০ কেজি মাছের জন্য ২০ গ্রাম.\n\nঅথবা বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '১ লিটার',
      origin: 'ভারত 🇮🇳',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠাণ্ডা স্থানে সংরক্ষণ করুন।'
    }
  },
  {
    id: 'deltam',
    imagePlaceholderColor: 'from-[#f43f5e] to-[#be123c]',
    iconType: 'disinfectant',
    bgGrad: 'rgba(244, 63, 94, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Deltam (Deltamethrin 2.80% EC)',
      category: 'Highly Effective Parasiticide',
      description: 'Deltam is the most effective synthetic and non-systemic pyrethroid ester parasiticide. Deltam generally destroys lice, worms, or other parasites by deactivating their nervous system.',
      composition: 'Deltamethrin 2.80% EC',
      benefits: [
        'Rapidly destroys lice, ticks, worms, and both internal and external parasites to protect and safeguard the body.',
        'Plays an active role in treating and healing skin wounds caused by parasites.',
        'Contains zero active isomers, enabling it to work exceptionally fast and guarantee the physical well-being of fish.'
      ],
      dosage: 'Pest Name: Lice, Worms & Mosquitoes\nArea: 100 Decimal\nDepth: 3-5 ft\nDosage: 40-50 ml\nMethod: Mix with sufficient water and spray.\n\n* If needed, use as recommended by an aquaculture expert.',
      packSize: '50 ml, 100 ml, and 500 ml',
      origin: 'China 🇨🇳',
      storage: 'Store in a cool and dry place away from light. Keep out of reach of children.'
    },
    bn: {
      title: 'ডেল্টাম (Deltam)',
      category: 'সবচেয়ে কার্যকর সিন্থেটিক পরজীবীনাশক',
      description: 'ডেল্টাম (Deltam) হচ্ছে সবচেয়ে কার্যকর সিন্থেটিক ও নন-সিস্টেমিক পাইরেথ্রয়েড এস্টার পরজীবীনাশক। ডেল্টাম সাধারণত উকুন, কৃমি বা অন্যান্য পরজীবীর স্নায়ুকোষের সিস্টেমকে অকার্যকর করার মাধ্যমে ধ্বংস করে দেয়।',
      composition: 'ডেল্টামেথ্রিন ২.৮০% ইসি (Deltamethrin 2.80% EC)',
      benefits: [
        'এটি উকুন, আঠালি, কৃমি এবং অন্তঃপরজীবী ও বহিঃপরজীবী দ্রুত ধ্বংস করে দেহকে সুরক্ষিত করে।',
        'ত্বকের ক্ষত নিরাময়ের চিকিৎসায় সক্রিয় ভূমিকা পালন করে।',
        'ডেল্টাম (Deltam)-এ কোনো কার্যকর আইসোমার না থাকায় এটি দ্রুত কাজ করে এবং মাছের শারীরিক সুস্থতা নিশ্চিত করে।'
      ],
      dosage: 'পোকার নাম: উকুন, কৃমি ও মশা\nএরিয়া: ১০০ শতক\nগভীরতা: ৩-৫ ফুট\nমাত্রা: ৪০-৫০ মিলি\nপদ্ধতি: পরিমাণমত পানিতে মিশিয়ে স্প্রে\n\n* প্রয়োজনে, বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '৫০ মি.লি., ১০০ মি.লি. ও ৫০০ মি.লি.',
      origin: 'চীন 🇨🇳',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠান্ডা স্থানে সংরক্ষণ করুন। শিশুদের নাগালের বাইরে রাখুন।'
    }
  },
  {
    id: 'killer-phos',
    imagePlaceholderColor: 'from-amber-500 to-red-600',
    iconType: 'disinfectant',
    bgGrad: 'rgba(239, 68, 68, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Killer Phos (Quinalphos 25% E.C.)',
      category: 'Powerful & Effective Insecticide',
      description: 'Killer Phos is a highly effective organophosphate insecticide. It is widely used to control various harmful insect pests on crops, and to eliminate unwanted wild fish (like Chanda, Bele, etc.), white-blooded insects, and other pests in aquaculture ponds. Killer Phos primarily acts by disrupting the nervous system and stomach, effectively destroying insect life across all developmental stages: eggs, larvae, and adults.',
      composition: 'Quinalphos 25% E.C.',
      benefits: [
        'Highly effective organophosphate insecticide with broad-spectrum control.',
        'Successfully eliminates unwanted predatory fish, white-blooded species, and pests in ponds.',
        'Extremely beneficial for preparation of culture and rearing ponds.',
        'Acts as a rapid stomach and contact poison to neutralize insect nervous systems.',
        'Eradicates insect pests at all lifespans including eggs, larvae, and adult stages.'
      ],
      dosage: 'Fish Cultivation: 2-3 ml per Decimal for 3-5 ft water depth.\n\nCrops: Mix 2-3 ml per liter of water and spray in the morning or afternoon. Repeat after 7-10 days if necessary.\n\n* Or as recommended by an aquaculture expert.',
      packSize: '100 ml & 500 ml',
      origin: 'India 🇮🇳',
      storage: 'Store in a cool and dry place away from direct sunlight. Keep out of reach of children.',
      precautions: [
        'Avoid smoking, eating, or drinking water while handling Killer Phos.',
        'Always wear protective clothing, mask, and safety goggles during application.',
        'Bury the empty bottle deep in the ground after use.',
        'Wash hands, feet, face, and clothes thoroughly with soap after application.',
        'Keep far away from food and out of reach of children.'
      ],
      statutoryWarning: 'Always follow safety guidelines and protective instructions during use.'
    },
    bn: {
      title: 'কিলার ফস (Killer Phos)',
      category: 'শক্তিশালী ও কার্যকর কীটনাশক',
      description: 'কিলার ফস (Killer Phos) একটি অর্গানোফসফেট কীটনাশক যা ফসলের বিভিন্ন ধরনের পোকামাকড় এবং চাষের পুকুরে বিদ্যমান অবাঞ্ছিত চান্দা, বেলে বা সাদা রক্ত বিশিষ্ট মাছ, চিংড়ি ও ক্ষতিকর কীট দমনে ব্যবহৃত হয়। কিলার ফস মূলত প্রাণীর পাকস্থলী বা নার্ভাস সিস্টেম অকার্যকর করার মাধ্যমে ডিম, লার্ভা ও পূর্ণাঙ্গ পোকা ধ্বংস করে।',
      composition: 'কুইনালফস ২৫% ইসি (Quinalphos 25% E.C.)',
      benefits: [
        'শক্তিশালী ও অত্যন্ত কার্যকর অর্গানোফসফেট কীটনাশক।',
        'পুকুরে অবাঞ্ছিত চান্দা, বেলে বা সাদা রক্ত বিশিষ্ট মাছ ও ক্ষতিকর কীট সফলভাবে দমন করে।',
        'চিংড়ি খামার এবং নার্সিং পুকুরের ক্ষতিকর পোকা দমনে অত্যন্ত উপযোগী।',
        'পোকার পাকস্থলী ও নার্ভাস সিস্টেম অকার্যকর করে স্পর্শক ও পাকস্থলী বিষ হিসেবে কাজ করে।',
        'কীটপতঙ্গের ডিম, লার্ভা ও পূর্ণাঙ্গ পোকা সব পর্যায়ে ধ্বংস করে।'
      ],
      dosage: 'মাছ চাষে: ২-৩ মি.লি., প্রতি শতকে ৩-৫ ফুট পানির গভীরতায়।\n\nফসলে: ১ লিটার পানির সাথে ২-৩ মি.লি. মিশিয়ে সকালে বা বিকেলে স্প্রে করুন। ৭-১০ দিন পর একই মাত্রায় দ্বিতীয় ডোজ প্রয়োগ করুন।\n\n* অথবা মৎস্য বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।',
      packSize: '১০০ মি.লি. ও ৫০০ মি.লি.',
      origin: 'ভারত 🇮🇳',
      storage: 'আলো থেকে দূরে, শুষ্ক ও ঠান্ডা স্থানে সংরক্ষণ করুন। শিশুদের নাগালের বাইরে রাখুন।',
      precautions: [
        'কিলার ফস (Killer Phos) ব্যবহার করার সময় ধূমপান, খাবার ও পানি গ্রহণ থেকে বিরত থাকুন।',
        'প্রয়োগের সময় নিরাপত্তা পোশাক, মাস্ক ও চশমা পরিধান করুন।',
        'প্রয়োগের পর খালি বোতল মাটিতে পুঁতে রাখুন।',
        'ব্যবহার শেষে হাত-পা, মুখ ও পোশাক সাবান দিয়ে ভালোভাবে ধুয়ে ফেলুন।',
        'খাদ্যসামগ্রী থেকে দূরে ও শিশুদের নাগালের বাইরে রাখুন।'
      ],
      statutoryWarning: 'ব্যবহারের সময় সুরক্ষা নির্দেশনা মেনে চলুন।'
    }
  }
];
