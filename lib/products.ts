export interface ProductDetails {
  title: string;
  category: string;
  description: string;
  composition: string;
  benefits: string[];
  dosage: string;
  packSize: string;
  origin: string;
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
      description: 'Active dissolved oxygen releasing agent that instantly relieves oxygen distress in fish and shrimp ponds.',
      composition: 'Sodium Percarbonate (2Na2CO3 · 3H2O2) releasing 13.5% active Oxygen.',
      benefits: [
        'Instantly increases dissolved oxygen (D.O.) level in water.',
        'Saves fish and shrimp from sudden suffocation and gasping.',
        'Eliminates toxic bottom gases by oxidation booster.',
        'Prevents floating issues in extreme cloudy or hot weather.'
      ],
      dosage: 'Oxygen gasp emergency: 250 - 500g per/acre. Broadcast evenly across the pond floor.',
      packSize: '250 G / 1 KG Pack',
      origin: 'Germany'
    },
    bn: {
      title: 'অক্সিএড (অক্সিজেন দানাদার ও ট্যাবলেট)',
      category: 'অক্সিজেন বৃদ্ধিকারী এবং ওয়াটার কেয়ার',
      description: 'পুকুর ও ঘেরে দ্রবীভূত অক্সিজেনের অভাব দ্রুত দূর করতে অত্যন্ত কার্যকরী এবং তাৎক্ষণিক অক্সিজেন উৎপাদনকারী প্রযুক্তি।',
      composition: 'সোডিয়াম-পার-কার্বনেট (2Na2CO3 · 3H2O2) সক্রিয় অক্সিজেন সরবরাহ করে ১৩.৫%।',
      benefits: [
        'পানিতে দ্রুত দ্রবীভূত অক্সিজেন (D.O.) এর মাত্রা বৃদ্ধি করে।',
        'উদ্বেগজনক মেঘলা আবহাওয়া ও অতিরিক্ত গরমে ভাসমান মাছকে তাৎক্ষণিক রক্ষা করে।',
        'পুকুরের তলদেশের ক্ষতিকর গ্যাস নিয়ন্ত্রণে বুস্টার হিসেবে কাজ করে।',
        'মাছ ও চিংড়ির ধকল ও মৃত্যুর হার শূন্যে নামিয়ে আনে।'
      ],
      dosage: 'প্রতিরোধে: ২৫০ - ৫০০ গ্রাম প্রতি একরে। তীব্র সংকটে: ৫০০ - ৭০০ গ্রাম প্রতি একরে ছিদ্রে ছিটিয়ে দিন।',
      packSize: '২৫০ গ্রাম / ১ কেজি প্যাক',
      origin: 'জার্মানী'
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
      description: 'Highly effective organic gas remover and pond bottom bioremediator containing rich plant extracts and beneficial microbes.',
      composition: 'Yucca plant extracts, Pinaceae plant extracts, Bacillus subtilis, and active Yeast Culture.',
      benefits: [
        'Rapidly absorbs and eliminates toxic ammonia, sulfur dioxide, and methane gases.',
        'Supports beneficial Bacilli bacteria propagation, improving water clarity.',
        'Reduces biological oxygen demand (BOD) at the sediment floor.',
        'Controls Gill rot (Black Gill / Blue Gill) and Gulping issue.'
      ],
      dosage: '2 - 3g per decimal, mix with sand or water and distribute evenly across the pond floor.',
      packSize: '100 G / 200 G Foil Sachet',
      origin: 'Mexico / Japan Formulation'
    },
    bn: {
      title: 'গ্যাসোনাল / গ্যাসোনিল পাউডার',
      category: 'ক্ষতিকর গ্যাস নিয়ন্ত্রক',
      description: 'পুকুর এবং ঘেরের তলদেশের বিষাক্ত অ্যামোনিয়া, হাইড্রোজেন সালফাইড এবং মিথেন গ্যাস দ্রুত দূর করার আধুনিক প্রাকৃতিক সমাধান।',
      composition: 'ইউকা উদ্ভিদের নির্যাস (Yucca), পিনাসিয়া নির্যাস, ব্যাসিলাস সাবটিলিস এবং ইস্ট কালচার।',
      benefits: [
        'তাত্ক্ষণিকভাবে ক্ষতিকারক অ্যামোনিয়া গ্যাস শোষণ ও অপসারন করে।',
        'কালো ফুলকা পচা এবং ফুলকা ফোলা (Black/Blue Gill) রোগের দ্রুত সমাধান দেয়।',
        'তলদেশের পচনশীল বর্জ্য দ্রুত পচনে ব্যাকটেরিয়াল প্রভাব বাড়ায় ও গন্ধ দূর করে।',
        'উত্তেজিত অবস্থায় খাবি খাওয়া (Gulping) থেকে দ্রুত উপশম প্রদান করে।'
      ],
      dosage: '২ - ৩ গ্রাম প্রতি শতকে, ৩ - ৫ ফুট পানির জন্য বালি অথবা পানির সাথে গুলিয়ে প্রয়োগ করুন।',
      packSize: '১০০ গ্রাম / ২০০ গ্রাম ফয়েল প্যাক',
      origin: 'মেক্সিকো ও জাপান ফর্মুলেশন'
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
      category: 'Aquaculture Bioremediation',
      description: 'Premium multi-strain water and soil probiotic to decompose waste and maintain balanced plankton ecosystem.',
      composition: 'Aspergillus oryzae, Bacillus subtilis, Bacillus megaterium, Nitrobacter & Nitrosomonas (2X10^10 CFU/g).',
      benefits: [
        'Improves immune system strength and gut health of fish/shrimp.',
        'Prevents harmful bacterial growth (e.g. Vibrio) by competitive exclusion.',
        'Ensures natural active bioremediation, maintaining brilliant emerald color.',
        'Drastically reduces FCR by supplying essential digestive enzymes.'
      ],
      dosage: '1 - 2g per decimal for 3 - 5 feet of water depth every 15 days.',
      packSize: '100 G Sachet',
      origin: 'Japan'
    },
    bn: {
      title: 'বায়োপ্রোব ম্যাক্স প্রোবায়োটিক',
      category: 'পানি ও মাটির জৈবিক শোধন',
      description: 'পুকুর ও ঘেরের মাটি ও পানি পরিশোধনের জন্য উচ্চ ক্ষমতাসম্পন্ন মাল্টি-স্ট্রেইন উপকারী ব্যাকটেরিয়ার মিশ্রন।',
      composition: 'অ্যাসপারজিলাস ওরাইজি, ব্যাসিলাস সাবটিলিস, নাইট্রোব্যাক্টার, নাইট্রোসোমোনাস এবং জৈবিক উপাদান (২X১০^১০ CFU)।',
      benefits: [
        'অ্যামোনিয়া মুক্ত করে পানি ও মাটির পরিবেশের সঠিক ভারসাম্য বজায় রাখে।',
        'মাছ ও চিংড়ির রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে ধকল মুক্ত জীবন দেয়।',
        'ক্ষতিকর ব্যাকটেরিয়া ও রোগ সৃষ্টিকারী জীবাণুর বংশবৃদ্ধি রুখে দেয়।',
        'পানিতে সঠিক প্রাকৃতিক ফাইটোপ্ল্যাঙ্কটন ও জুপ্ল্যাঙ্কটন বজায় রাখে।'
      ],
      dosage: '১ - ২ গ্রাম প্রতি শতকে, পানির গভীরতা ৩ - ৫ ফুট হলে ২ সপ্তাহে একবার প্রয়োগ করুন।',
      packSize: '১০০ গ্রাম প্যাক',
      origin: 'জাপান'
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
      description: '100% water soluble high-purity Vitamin C (L-Ascorbic Acid) to improve disease resistance and overcome critical stress.',
      composition: 'Pure Ascorbic Acid (Vitamin C) 100% molecular formula (C6H8O6) with active cofactor minerals.',
      benefits: [
        'Acts as a master antioxidant to boost host immunity against disease.',
        'Relieves metabolic stress during extreme hot waves or heavy rainfall.',
        'Accelerates scale formation and bone structures in growing fish.',
        'Aids recovery of physical fish wounds and tissue damage.'
      ],
      dosage: 'For feed mixing: 1 - 2g per KG of feed. For water dissolve: 2 - 3g per decimal.',
      packSize: '500 G Foil Sachet',
      origin: 'China'
    },
    bn: {
      title: 'বায়োমিন সি কমপ্লেক্স',
      category: 'ধকল দূরকারী ও রোগ প্রতিরোধ প্রবর্তক',
      description: '১০০% বিশুদ্ধ পানিতে দ্রবণীয় অ্যাসকরবিক এসিড (ভিটামিন সি) যা মাছের রোগ প্রতিরোধ ক্ষমতা অকল্পনীয় বৃদ্ধি করে।',
      composition: 'অ্যাসকরবিক এসিড (ভিটামিন সি) ১০০% অ্যাক্টিভ মলিক্যুল ফর্মুলা (C6H8O6)।',
      benefits: [
        'অত্যন্ত শক্তিশালী অ্যান্টিঅক্সিডেন্ট যা মাছের রোগ প্রতিরোধ ক্ষমতা সর্বোচ্চ স্তরে রাখে।',
        'অতিরিক্ত প্রখর রোদ, বা অতিবৃষ্টির সময় মাছের যাবতীয় ধকল নিমিষে দূর করে।',
        'মাছের ক্ষতস্থান দ্রুত শুকাতে ও আঁশ ও হাড়ের সুষ্ঠু গঠনে সাহায্য করে।',
        'খাবারের রুচি বহুগুণ বাড়ায় এবং ম্যাসেল টিস্যু মজবুত করে সুস্থ রাখে।'
      ],
      dosage: 'মাছ/চিংড়ি চাষে প্রতিরোধে: ১-২ গ্রাম প্রতি কেজি খাবারের সাথে। পুকুরে সরাসরি ছিটানো: ২-৩ গ্রাম প্রতি শতকে।',
      packSize: '৫০০ গ্রাম প্যাক',
      origin: 'চীন'
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
      title: 'Germbit Strong Disinfectant',
      category: 'Broad Spectrum Germicide',
      description: 'Farm-safer concentrated sanitizer of highest efficacy to eliminate viral, fungal, and bacterial pathogens.',
      composition: 'Alkyl dimethyl benzyl ammonium chloride 80% + high formulation stabilizers 20%.',
      benefits: [
        'Extremely effective against tail rot, red spot, body sore, and secondary fungal infections in Gulsha, Shing, and Carps.',
        'Quickly sterilizes pond water without affecting dissolved oxygen values.',
        'Safer for organic pond biosystems; does not crash beneficial plankton.',
        'Improves body shine and scales texture on rui, catla, gulsha, and shrimp.'
      ],
      dosage: 'Preventive: 2 - 3 ml per decimal in 3-5 ft water. Curative: 3 - 4 ml per decimal.',
      packSize: '100 ML / 500 ML / 1 Litre Bottle',
      origin: 'United Kingdom (UK)'
    },
    bn: {
      title: 'জার্মবিট শক্তিশালী জীবাণুনাশক',
      category: 'জীবাণুনাশক ও ক্ষতের প্রতিষেধক',
      description: 'পুকুর ও ঘেরের সর্বোত্তম সুরক্ষায় ভাইরাস, ব্যাকটেরিয়া ও ছোঁয়াচে ছত্রাক দমনের শক্তিশালী ও নিরাপদ বায়ো-সিকিউরিটি সলিউশন।',
      composition: 'অ্যালকাইল-ডাই-মিথাইল বেনজাইল অ্যামোনিয়াম ক্লোরাইড ৮০% এবং নিষ্ক্রিয় বাহক ২০%।',
      benefits: [
        'গুলসা, শিং ও কার্প জাতীয় মাছের লেজ পঁচা, পাখনা পঁচা, লাল ক্ষত রোগ ও ছোপ ছোপ ফোস্কা রোগ উপশমে অত্যন্ত কার্যকর।',
        'পানির প্রাকৃতিক গুনাগুণ নষ্ট না করে ক্ষতিকর ব্যাকটেরিয়া ও জীবাণু দ্রুত নিষ্ক্রিয় করে।',
        'খামারে মাছ ও চিংড়ির ধকল দূর করতে ও নিবিড় রোগ ব্যবস্থাপনায় স্বাস্থ্য সুরক্ষায় বিশ্বস্ত সঙ্গী।',
        'খুবই সাশ্রয়ী এবং কম খরচে দীর্ঘস্থায়ী জলাশয় বিশুদ্ধকরণ।'
      ],
      dosage: 'প্রতিরোধে: ২ - ৩ মিলি প্রতি শতকে (৩-৫ ফুট পানির গভীরতায়)। চিকিৎসায়: ৩ - ৪ মিলি প্রতি শতকে।',
      packSize: '১০০ মিলি / ৫০০ মিলি / ১ লিটার বোতল',
      origin: 'ইউনাইটেড কিংডম (ইংল্যান্ড)'
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
      title: 'বায়োলিভ কেয়ার লিভার টনিক',
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
    id: 'farmizyme',
    imagePlaceholderColor: 'from-[#22c55e] to-[#0ea5e9]',
    iconType: 'growth',
    bgGrad: 'rgba(34, 197, 94, 0.1)',
    marketedBy: {
      en: 'Expert Bioscience Limited',
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড'
    },
    en: {
      title: 'Farmizyme Multi-Enzymes',
      category: 'Feed Conversion Optimizer',
      description: 'Premium digestive enzyme cocktail combined with core prebiotic bacteria to lower FCR and accelerate fish weight.',
      composition: 'Cellulase, Amylase, Protease, Xylanase, Lipase mixed with Lactobacillus acidophilus (1X10^10 CFU/g).',
      benefits: [
        'Breaks complex feed structures into micro-nutrients for maximum absorption.',
        'Significantly lowers FCR (Feed Conversion Ratio), saving massive feed cost.',
        'Maintains healthy gut lining and suppresses gut bloating or gas accumulation.',
        'Triggers healthy fast weight gain and enhances meat quality.'
      ],
      dosage: 'Growers Feed: 1 - 1.5g per kg of feed daily, or 0.5g/kg for high density ponds.',
      packSize: '500 G Container / Sachet',
      origin: 'Thailand'
    },
    bn: {
      title: 'ফার্মিজাইম মাল্টি-এনজাইম',
      category: 'হজমকারক ও খাদ্য রূপান্তরকারক',
      description: 'মাল্টি-এনজাইম এবং অন্ত্রের উপকারী প্রোবায়োটিকের শক্তিশালী অনুপাত যা মাছের চরম হজমশক্তি তৈরি করে কম খাবারে বেশি বৃদ্ধি দেয়।',
      composition: 'সেলুলেজ, অ্যামাইলেজ, প্রোটিয়েজ, জাইল্যানেজ, লাইপেজ এবং ল্যাক্টোব্যাসিলাস ব্যাকটেরিয়া।',
      benefits: [
        'গরু, মাছ ও চিংড়ির খাবারে থাকা ফাইবার ও স্টার্চ ভেঙে সহজে রক্তে শোষণ করায়।',
        'খাদ্য রূপান্তর হার (FCR) অভূতপূর্ব উন্নয়ন করে খাবারের বিশাল খরচ সাশ্রয় করে।',
        'মাছ দ্রুত বৃদ্ধি পায় এবং সাইজে অভিন্নতা আসে।',
        'অ্যামাইনো এসিডের শোষণ বাড়িয়ে মাছকে মজবুত ও সুস্বাদু পেশী দেয়।'
      ],
      dosage: '০.৫ গ্রাম প্রতি কেজি খাদ্যে খামারে নিয়মিত প্রয়োগ, তীব্র হজমহীনতায় ১.৫ গ্রাম প্রতি কেজি খাদ্যে।',
      packSize: '৫০০ গ্রাম জিপার প্যাক',
      origin: 'থাইল্যান্ড'
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
      category: 'Ammonia Suppressor',
      description: 'Highly concentrated premium Yucca schidigera extract that neutralizes gaseous ammonia and improves pond ecology.',
      composition: 'Pure Yucca schidigera extract liquid 100% active compounds.',
      benefits: [
        'Instantly binds free molecular ammonia and controls organic nitrogen pollution.',
        'Prevents black-bottom mud odors from polluting the pond water column.',
        'Boosts shrimp survival rates during molting seasons.',
        'Relieves fish of gas-bubble disease and floating stress.'
      ],
      dosage: 'For preventative care: 100ml per acre every 10 days. For emergency: 250ml per acre.',
      packSize: '100 ML / 500 ML Bottle',
      origin: 'USA / Thailand'
    },
    bn: {
      title: 'ইউকা বায়োসল লিকুইড',
      category: 'অ্যামোনিয়া ও পানির গ্যাস নিয়ন্ত্রক',
      description: 'ইউকা সিডিজেরা গাছের ১০০% প্রাকৃতিক জুস যা অত্যন্ত দ্রত অ্যামোনিয়া দুরীভূত করে ও মৎস্য খামারের গভীরের পরিবেশ সচল করে।',
      composition: '১০০% বিশুদ্ধ প্রিমিয়াম ইউকা সিডিজেরা লিকুইড এক্সট্র্যাক্ট।',
      benefits: [
        'অ্যামোনিয়ার বিষাক্ত তেজস্ক্রিয়তা হ্রাস করে জলাশয়ের পানিতে ক্ষারকীয় ভারসাম্য ঠিক রাখে।',
        'চিংড়ির খোলস পাল্টানোর সময়কাল সহজ ও ত্বরান্বিত করে মাছ ও চিংড়ির স্বাভাবিক শ্বাসপ্রশ্বাস সচল রাখে।',
        'পুকুর বা ঘেরের পঁচা গন্ধ ও ক্ষতিকর কাদা বর্জ্য শোধন করে।',
        'পানিকে সতেজ ও মাছের দ্রুত বৃদ্ধির উপযোগী করে।'
      ],
      dosage: 'প্রতিরোধে: ১০০ মিলি প্রতি একরে ১০ দিনে একবার। সংকটকালে: ২৫০ মিলি প্রতি একরে ছিটান।',
      packSize: '১০০ মিলি / ৫০০ মিলি বোতল',
      origin: 'আমেরিকা ফর্মুলেশন'
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
      title: 'Paratin Ivermectin 3%',
      category: 'Ectoparasitic Control',
      description: 'Effective pharmacological solution specifically formulated to eliminate external lice, anchor worms, and gill parasite pests.',
      composition: 'Concentrated Ivermectin 3% active solution.',
      benefits: [
        'Permanently eradicates Argulus (fish lice) and Lernaea parasite pests.',
        'Stops body rubbing and itching behaviors indicating skin stress.',
        'Ensures healthy scale restoration after ticks have left fish skin.',
        'Safe for rui, catla, mrigal, catfish, and snakeheads at targeted doses.'
      ],
      dosage: '100 ml per acre with 3-4 feet of water depth. Mix with adequate water and broadcast carefully.',
      packSize: '100 ML / 500 ML Bottle',
      origin: 'India Formulation'
    },
    bn: {
      title: 'প্যারাটিন আইভারমেকটিন ৩%',
      category: 'পরজীবী ও উকুন নাশক ওষুধ',
      description: 'মাছ ও চিংড়ির গায়ের ক্ষতিকর উকুন (Argulus), সুতা পোকা বা নোঙর পোকা দমনে অত্যন্ত কার্যকারী আইভারমেকটিন প্রযুক্তি।',
      composition: 'আইভারমেকটিন ৩% প্রিমিয়াম গ্রেড সলিউশন।',
      benefits: [
        'মাছের পরজীবীজনিত উকুন ও সুতার মতো নোঙর পোকা নিমেষেই দমন করে।',
        'মাছের চুলকানি, শরীর বাঁকা করে চলা বা বাঁশের খুঁটিতে ঘষা আচরণ বন্ধ করে।',
        'পুকুরকে উকুন ও ক্ষতিকর কীটমুক্ত রাখে যা মাছের সুস্থ দীর্ঘায়ু বাড়ায়।',
        'চিংড়ি ও রুই জাতীয় মাছের দৈনিক বৃদ্ধি ও খাবার গ্রহণের গতি দ্বিগুণ করে দেয়।'
      ],
      dosage: 'প্রতি একরে ১০০ মিলি (৩-৪ ফুট পানির গভীরতায়)। পানির সাথে গুলিয়ে সমানভাবে ছড়িয়ে দিন।',
      packSize: '১০০ মিলি বোতল',
      origin: 'ভারত ফর্মুলেশন'
    }
  }
];
