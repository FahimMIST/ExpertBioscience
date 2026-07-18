import React from 'react';
import { PRODUCTS } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

// SEO & GEO Specialized Keywords and Metadata Database for Generative Engines & Google Search
const SEO_GEO_DATA: Record<
  string,
  {
    genericNameEn: string;
    genericNameBn: string;
    focusKeywords: string[];
    faq: { q: string; a: string; qBn: string; aBn: string }[];
    howTo: {
      stepsEn: string[];
      stepsBn: string[];
    };
  }
> = {
  oxyadd: {
    genericNameEn: 'Aquaculture dissolved oxygen tablet, pond aeration chemicals, sodium percarbonate oxygen booster for fish',
    genericNameBn: 'মাছের অক্সিজেন ট্যাবলেট, পুকুরের অক্সিজেনের ঔষধ, অক্সিজেন পাউডার সোডিয়াম পারকার্বনেট',
    focusKeywords: [
      'fish pond oxygen tablet',
      'dissolved oxygen booster',
      'oxygen tablet for fish',
      'aquaculture aeration booster',
      'fish gasping for air treatment',
      'oxygen shortage in pond',
      'sodium percarbonate for fish pond',
      'মাছের অক্সিজেন ট্যাবলেট',
      'পুকুরে অক্সিজেন ঘাটতি',
      'অক্সিজেন পাউডার',
      'মৎস্য চাষ ঔষধ'
    ],
    faq: [
      {
        q: 'What is the best way to solve sudden oxygen shortage in fish ponds?',
        a: 'Sudden oxygen shortage causes fish to gasp at the water surface. Using instant oxygen releasing tablets like Oxyadd (containing active sodium percarbonate) provides rapid dissolved oxygen (D.O.) release directly at the pond bottom, saving fish and shrimp from mortality.',
        qBn: 'পুকুরে হঠাৎ অক্সিজেনের ঘাটতি হলে করণীয় কী?',
        aBn: 'পুকুরে অক্সিজেনের ঘাটতি হলে মাছ ভেসে ওঠে এবং হা করে বাতাস গিলতে চেষ্টা করে। এই অবস্থায় অক্সিঅ্যাড (Oxyadd) এর মতো সোডিয়াম পারকার্বনেট সমৃদ্ধ অক্সিজেন ট্যাবলেট সরাসরি প্রয়োগ করলে দ্রুত দ্রবীভূত অক্সিজেন (D.O.) বৃদ্ধি পায় এবং মাছ অকাল মৃত্যুর হাত থেকে রক্ষা পায়।'
      },
      {
        q: 'How long does an oxygen tablet take to release oxygen in aquaculture ponds?',
        a: 'High-quality oxygen tablets like Oxyadd begin releasing oxygen within minutes of reaching the pond bottom and continue to sustain dissolved oxygen levels for several hours, ensuring safety for benthic species like shrimp.',
        qBn: 'অক্সিজেন ট্যাবলেট পুকুরে প্রয়োগের কতক্ষণ পর কাজ শুরু করে?',
        aBn: 'অক্সিঅ্যাড (Oxyadd) এর মতো উন্নত অক্সিজেন ট্যাবলেট পুকুরে প্রয়োগের সাথে সাথে (কয়েক মিনিটের মধ্যে) তলদেশে গিয়ে অক্সিজেন অবমুক্ত করতে শুরু করে এবং কয়েক ঘণ্টা পর্যন্ত অক্সিজেনের মাত্রা স্বাভাবিক রাখে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Monitor fish behavior in the early morning for gasping or surface-floating symptoms.',
        'Apply 1-2 grams of Oxyadd per decimal of pond area for regular maintenance.',
        'In acute oxygen deficiency, increase dosage to 3-5 grams per decimal of pond area.',
        'Distribute tablets evenly across the pond, focusing on deep corners and feeding zones.'
      ],
      stepsBn: [
        'ভোরবেলায় মাছের চলাফেরা ও ভেসে ওঠার লক্ষণ পর্যবেক্ষণ করুন।',
        'নিয়মিত সুরক্ষায় প্রতি শতকে ১-২ গ্রাম অক্সিঅ্যাড (Oxyadd) ট্যাবলেট প্রয়োগ করুন।',
        'অক্সিজেনের তীব্র ঘাটতি দেখা দিলে মাত্রা বাড়িয়ে প্রতি শতকে ৩-৫ গ্রাম হিসেবে প্রয়োগ করুন।',
        'পুকুরের চারপাশ এবং বিশেষ করে মাছের খাদ্য গ্রহণ করার গভীর স্থানগুলোতে ট্যাবলেটগুলো সমহারে ছিটিয়ে দিন।'
      ]
    }
  },
  gasonull: {
    genericNameEn: 'Ammonia remover for fish pond, toxic gas neutralizer in aquaculture, pond gas absorbents BDT',
    genericNameBn: 'পুকুরের গ্যাস নাশক ওষুধ, অ্যামোনিয়া দূর করার উপায়, মাছ ভেসে ওঠার প্রতিকার',
    focusKeywords: [
      'pond ammonia remover',
      'aquaculture toxic gas controller',
      'fish pond gas neutralizer',
      'ammonia binder for shrimp',
      'H2S gas reducer in fish farming',
      'পুকুরের গ্যাস নাশক',
      'অ্যামোনিয়া দূর করার ওষুধ',
      'মাছ ভেসে ওঠার প্রতিকার',
      'গ্যাসোনিল মৎস্য চাষ'
    ],
    faq: [
      {
        q: 'How can I remove toxic ammonia and sulfur gases from fish ponds?',
        a: 'Toxic gases can be controlled using Gasonull. It binds free ammonia and breaks down organic matter at the pond bottom, eliminating bad odors and gas distress in fish and shrimp.',
        qBn: 'পুকুরের বিষাক্ত অ্যামোনিয়া ও হাইড্রোজেন সালফাইড গ্যাস কীভাবে দূর করব?',
        aBn: 'গ্যাসোনিল (Gasonull) ব্যবহারের মাধ্যমে পুকুরের বিষাক্ত গ্যাস দূর করা যায়। এটি তলদেশের বিষাক্ত অ্যামোনিয়া ও গন্ধযুক্ত গ্যাস শোষণ করে মাছ ও চিংড়ির গ্যাসজনিত ধকল দূর করে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Test pond water ammonia levels using an aquaculture test kit.',
        'For prevention of gas build-up, apply 4-5 grams of Gasonull per decimal.',
        'In heavy toxic gas situations, double the dosage to 8-10 grams per decimal.',
        'Mix with dry sand or water and scatter evenly across the pond surface.'
      ],
      stepsBn: [
        'অ্যামোনিয়া টেস্ট কিট দিয়ে পুকুরের পানির বিষাক্ত গ্যাসের মাত্রা পরীক্ষা করুন।',
        'গ্যাস প্রতিরোধে প্রতি শতকে ৪-৫ গ্রাম গ্যাসোনিল (Gasonull) প্রয়োগ করুন।',
        'তীব্র গ্যাস ও মাছ ভেসে ওঠার সমস্যায় প্রতি শতকে ৮-১০ গ্রাম হিসেবে প্রয়োগ করুন।',
        'শুষ্ক বালি বা পানির সাথে ভালোভাবে মিশিয়ে পুরো পুকুরে সমহারে ছিটিয়ে দিন।'
      ]
    }
  },
  'bioprob-max': {
    genericNameEn: 'Pond soil and water probiotics, beneficial bacteria for shrimp farming, Bacillus subtilis aquaculture',
    genericNameBn: 'পুকুরের মাটি ও পানি শোধনকারী প্রোবায়োটিক, মৎস্য চাষের উপকারী ব্যাকটেরিয়া',
    focusKeywords: [
      'soil and water probiotic',
      'aquaculture probiotics Bangladesh',
      'Bacillus subtilis for fish pond',
      'shrimp pond sludge remover',
      'organic waste degrader aquaculture',
      'পুকুরের প্রোবায়োটিক',
      'কাদা শোধনকারী ব্যাকটেরিয়া',
      'মাছ চাষের মাটি শোধন',
      'বায়োপ্রোব ম্যাক্স'
    ],
    faq: [
      {
        q: 'Why are soil and water probiotics necessary in shrimp and fish farming?',
        a: 'Probiotics like Bioprob-Max contain high-concentration beneficial bacteria (Bacillus subtilis, licheniformis, megaterium) that consume organic waste, decompose bottom sludge, reduce pathogen load, and maintain water clarity without chemicals.',
        qBn: 'মাছ ও চিংড়ি চাষে মাটি ও পানির প্রোবায়োটিক কেন প্রয়োজন?',
        aBn: 'বায়োপ্রোব-ম্যাক্স (Bioprob-Max) এর মতো প্রোবায়োটিকে রয়েছে উচ্চ ঘনত্বের উপকারী ব্যাকটেরিয়া (যেমন ব্যাসিলাস সাবটিলিস)। এগুলো পুকুরের তলদেশের পচা কাদা ও বর্জ্য দূর করে ক্ষতিকর প্যাথোজেন দমন করে পানির পরিবেশ ভালো রাখে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Clean the pond surface and ensure adequate aeration before probiotic application.',
        'Apply 4-5 grams of Bioprob-Max per decimal every 15 days.',
        'Mix the probiotic powder in clean pond water, ferment with molasses if possible for 1-2 hours, then spread.',
        'Apply during sunny mornings for maximum bacterial activation.'
      ],
      stepsBn: [
        'প্রোবায়োটিক ব্যবহারের আগে পুকুরের উপরিভাগ পরিষ্কার রাখুন ও পর্যাপ্ত অক্সিজেন নিশ্চিত করুন।',
        'প্রতি ১৫ দিন পর পর প্রতি শতকে ৪-৫ গ্রাম বায়োপ্রোব-ম্যাক্স (Bioprob-Max) প্রয়োগ করুন।',
        'পাউডারটি পুকুরের পানিতে গুলিয়ে নিন, সম্ভব হলে চিটাগুড়ের সাথে ১-২ ঘণ্টা ভিজিয়ে রেখে ছিটিয়ে দিন।',
        'ব্যাকটেরিয়া কার্যকারিতা বাড়াতে রৌদ্রোজ্জ্বল সকালে এটি প্রয়োগ করুন।'
      ]
    }
  },
  farmizyme: {
    genericNameEn: 'Fish growth promoter enzyme, digestive enzymes for aquaculture, feed conversion ratio FCR booster',
    genericNameBn: 'মাছের গ্রোথ প্রমোটার এনজাইম, মাছের হজম শক্তি বৃদ্ধির ওষুধ, মৎস্য খাদ্য এনজাইম',
    focusKeywords: [
      'fish growth promoter',
      'aquaculture digestive enzymes',
      'improve FCR fish feed',
      'fish growth enhancer Bangladesh',
      'digestive probiotic feed',
      'মাছের গ্রোথ প্রমোটার',
      'খাদ্য এনজাইম মৎস্য',
      'মাছের হজম বৃদ্ধির ঔষধ',
      'ফার্মিজাইম গ্রোথ'
    ],
    faq: [
      {
        q: 'How do digestive enzymes like Farmizyme improve fish growth?',
        a: 'Farmizyme contains highly concentrated digestive enzymes (Amylase, Protease, Lipase, Cellulase) that break down complex feed proteins and fats, ensuring maximum nutrient absorption, faster weight gain, and lower FCR (Feed Conversion Ratio).',
        qBn: 'হজমকারী এনজাইম বা ফার্মিজাইম কীভাবে মাছের দ্রুত বৃদ্ধি নিশ্চিত করে?',
        aBn: 'ফার্মিজাইম (Farmizyme) এ রয়েছে প্রোটিজ, অ্যামাইলেজ ও লাইপেজ এনজাইম যা মাছের গৃহিত খাদ্যের জটিল উপাদানগুলো দ্রুত ভেঙে হজম করায়। ফলে খাদ্য অপচয় দূর হয়, এফসিআর (FCR) কমে এবং মাছের দ্রুত ওজনের বৃদ্ধি ঘটে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Measure the daily quantity of fish feed to be prepared.',
        'Mix 1-2 grams of Farmizyme per 1 kg of commercial fish feed.',
        'Moisten the feed with a little water or gel binder so the enzymes stick to the pellets.',
        'Feed immediately to ensure maximum enzyme and probiotic viability.'
      ],
      stepsBn: [
        'মাছের দৈনিক খাবার দেওয়ার পরিমাণ পরিমাপ করুন।',
        'প্রতি কেজি ফিড বা খাবারের সাথে ১-২ গ্রাম ফার্মিজাইম (Farmizyme) ভালোভাবে মেশান।',
        'সামান্য পানি বা ফিড বাইন্ডার জেল দিয়ে খাবারটি মাখিয়ে নিন যাতে ঔষধটি খাবারে লেগে থাকে।',
        'এনজাইমের কার্যকারিতা বজায় রাখতে খাবার প্রস্তুত করার সাথে সাথেই মাছকে খাইয়ে দিন।'
      ]
    }
  },
  'biomin-c': {
    genericNameEn: 'Vitamin C supplement for fish, shrimp mineral mixture, coated vitamin c aquaculture BDT',
    genericNameBn: 'মাছের ভিটামিন সি ও মিনারেল সাপ্লিমেন্ট, চিংড়ির খোলস শক্ত করার ঔষধ',
    focusKeywords: [
      'vitamin c for fish pond',
      'shrimp shell minerals',
      'coated vitamin c aquaculture',
      'fish stress reliever',
      'shrimp molting minerals',
      'মাছের ভিটামিন সি',
      'মাছের রোগ প্রতিরোধ ক্ষমতা',
      'চিংড়ির মিনারেল সাপ্লিমেন্ট',
      'বায়োমিন সি'
    ],
    faq: [
      {
        q: 'What are the benefits of Vitamin C and minerals for fish and shrimp?',
        a: 'Coated Vitamin C in Biomin-C boosts the immune system, relieves environmental stress, prevents scurvy/black death in shrimp, and promotes regular molting and shell development through essential trace minerals.',
        qBn: 'মাছ ও চিংড়ি চাষে ভিটামিন সি এবং মিনারেলের উপকারিতা কী?',
        aBn: 'বায়োমিন-সি (Biomin-C) তে থাকা বিশেষ কোটেড ভিটামিন সি মাছের রোগ প্রতিরোধ ক্ষমতা বাড়ায়, পানির তাপমাত্রার তারতম্যজনিত স্ট্রেস কমায় এবং মিনারেলগুলো চিংড়ির খোলস বদলাতে সাহায্য করে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Take 2-3 grams of Biomin-C per kg of feed for regular health maintenance.',
        'During disease outbreak or high-stress periods, increase dosage to 5 grams per kg.',
        'Apply onto feed, coat with binder gel, dry in shade for 20 minutes, then disperse.'
      ],
      stepsBn: [
        'নিয়মিত সুরক্ষায় প্রতি কেজি ফিডের সাথে ২-৩ গ্রাম বায়োমিন-সি (Biomin-C) মেশান।',
        'রোগের প্রাদুর্ভাব বা তীব্র গরমে মাত্রা বাড়িয়ে প্রতি কেজি খাবারে ৫ গ্রাম প্রয়োগ করুন।',
        'খাবারের উপর ছিটিয়ে সামান্য জেল দিয়ে মাখিয়ে নিন, ২০ মিনিট ছায়ায় শুকিয়ে পুকুরে প্রয়োগ করুন।'
      ]
    }
  },
  germbit: {
    genericNameEn: 'Water disinfectant for aquaculture, pond sanitizer for fish red spot disease, potassium monopersulfate pond sanitizer',
    genericNameBn: 'পুকুরের পানি শোধন করার ওষুধ, মাছের ক্ষত রোগ দূর করার জীবাণুনাশক, জার্মবিট',
    focusKeywords: [
      'pond water disinfectant',
      'aquaculture water sanitizer',
      'fish red spot disease treatment',
      'tail rot cure fish',
      'potassium monopersulfate aquaculture',
      'পুকুরের জীবাণুনাশক',
      'মাছের ক্ষত রোগ প্রতিকার',
      'পানি শোধনকারী ওষুধ',
      'জার্মবিট ডিসইনফেক্টেন্ট'
    ],
    faq: [
      {
        q: 'How do you cure red spots and tail rot disease in fish ponds?',
        a: 'To cure bacterial diseases like red spots and tail rot, sanitize the water immediately with Germbit. It effectively kills pathogenic bacteria, fungi, and viruses, restoring healthy biological conditions.',
        qBn: 'পুকুরে মাছের লাল ক্ষত রোগ এবং লেজ ও পাখনা পচা দূর করার উপায় কী?',
        aBn: 'ব্যাকটেরিয়া ও ছত্রাকজনিত লাল ক্ষত ও লেজ পচা রোগ থেকে রক্ষা পেতে সাথে সাথে জার্মবিট (Germbit) জীবাণুনাশক প্রয়োগ করে পানি জীবাণুমুক্ত করতে হবে। এটি ক্ষতিকর প্যাথোজেন ধ্বংস করে পানি পরিষ্কার করে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Calculate the volume and area of the pond to determine disinfectant dose.',
        'Apply 3-4 grams of Germbit per decimal for weekly or bi-weekly disinfection.',
        'In active infection/disease outbreak, apply 6-8 grams per decimal.',
        'Dissolve thoroughly in water and spray across the entire pond surface.'
      ],
      stepsBn: [
        'পুকুরের আয়তন ও পানির গভীরতা পরিমাপ করুন।',
        'নিয়মিত পানি শোধনে প্রতি শতকে ৩-৪ গ্রাম জার্মবিট (Germbit) প্রয়োগ করুন।',
        'মাছের ক্ষতরোগ বা রোগের প্রকোপ চললে প্রতি শতকে ৬-৮ গ্রাম প্রয়োগ করুন।',
        'পাউডারটি পানিতে ভালোভাবে গুলিয়ে সম্পূর্ণ পুকুরে ছিটিয়ে দিন।'
      ]
    }
  },
  'bioliv-care': {
    genericNameEn: 'Fish liver protector supplement, aquaculture hepatoprotective tonic, silymarin for fish hepatopancreas',
    genericNameBn: 'মাছের লিভার টনিক, মাছের হজম ও লিভার সুরক্ষার ওষুধ, বায়োলিভ কেয়ার',
    focusKeywords: [
      'fish liver protector',
      'hepatoprotective tonic aquaculture',
      'fish fatty liver treatment',
      'shrimp hepatopancreas protector',
      'silymarin for aquaculture',
      'মাছের লিভার টনিক',
      'হজম শক্তি বৃদ্ধি মাছ',
      'চিংড়ির লিভারের ওষুধ',
      'বায়োলিভ কেয়ার'
    ],
    faq: [
      {
        q: 'What is the role of a liver tonic like Bioliv-Care in aquaculture?',
        a: 'Bioliv-Care acts as a powerful hepatoprotective tonic containing Silymarin. It protects and regenerates fish liver and shrimp hepatopancreas, improves food absorption, reduces fatty liver syndrome, and neutralizes environmental toxins.',
        qBn: 'মাছ চাষে বায়োলিভ-কেয়ার এর মতো লিভার টনিকের ভূমিকা কী?',
        aBn: 'বায়োলিভ-কেয়ার (Bioliv-Care) হলো সিলিমারিন সমৃদ্ধ একটি শক্তিশালী লিভার সুরক্ষক টনিক। এটি মাছের লিভার ও চিংড়ির হেপাটোপ্যানক্রিয়াস সচল রাখে, টক্সিন নিষ্ক্রিয় করে এবং হজম ক্ষমতা বাড়িয়ে দ্রুত বৃদ্ধি নিশ্চিত করে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Mix 3-5 grams of Bioliv-Care per kg of feed.',
        'Use continuously for 5-7 days during periods of heavy feeding or post-antibiotic treatment.',
        'Coat the feed with binder gel to prevent the powder from washing away.'
      ],
      stepsBn: [
        'প্রতি কেজি ফিডের সাথে ৩-৫ গ্রাম বায়োলিভ-কেয়ার (Bioliv-Care) ভালোভাবে মেশান।',
        'অতিরিক্ত খাবার প্রদানের সময় অথবা অ্যান্টিবায়োটিক ব্যবহারের পর ৫-৭ দিন একটানা খাওয়ান।',
        'খাবারের পুষ্টিগুণ ধরে রাখতে ফিড বাইন্ডার জেল ব্যবহার করে মিশ্রণটি প্রলেপ দিন।'
      ]
    }
  },
  'pure-saline': {
    genericNameEn: 'Aquaculture salinity regulator, pond mineral balancer, shrimp gher salinity electrolyte',
    genericNameBn: 'পুকুর ও ঘেরের লবণাক্ততা নিয়ন্ত্রণ, চিংড়ির স্যালাইন ও মিনারেল সাপ্লিমেন্ট',
    focusKeywords: [
      'pond salinity balancer',
      'shrimp mineral supplement',
      'aquaculture electrolyte mixture',
      'gher water conditioner',
      'shrimp stress reduction saline',
      'ঘেরের স্যালাইন ও মিনারেল',
      'লবণাক্ততা নিয়ন্ত্রক',
      'চিংড়ি চাষের ঔষধ',
      'পিউর স্যালাইন'
    ],
    faq: [
      {
        q: 'Why is salinity and mineral balance crucial in shrimp gher and fish ponds?',
        a: 'Shrimp require balanced minerals and salinity for normal osmotic regulation and healthy shell molting. Pure-Saline supplies essential electrolytes that prevent stress due to sudden salinity drops caused by heavy rainfall.',
        qBn: 'চিংড়ির ঘের ও মাছের পুকুরে লবণাক্ততা ও খনিজ ভারসাম্য কেন জরুরি?',
        aBn: 'চিংড়ির স্বাভাবিক খোলস বদলানো এবং স্ট্রেস প্রতিরোধের জন্য পানিতে সঠিক লবণাক্ততা ও মিনারেলের মাত্রা বজায় থাকা আবশ্যক। পিউর-স্যালাইন (Pure-Saline) বৃষ্টির পানির কারণে ঘেরের লবণাক্ততা হঠাৎ কমে যাওয়ার ধকল থেকে রক্ষা করে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Check water salinity levels using a refractometer.',
        'Apply 1-2 kg of Pure-Saline per bigha (33 decimals) of pond area based on water depth.',
        'Dissolve in pond water and distribute evenly in the morning.'
      ],
      stepsBn: [
        'রিফ্র্যাক্টোমিটার দিয়ে পানির লবণাক্ততার হার পরীক্ষা করুন।',
        'পুকুর বা ঘেরের গভীরতা বিবেচনা করে প্রতি বিঘা (৩৩ শতক) জায়গায় ১-২ কেজি পিউর-স্যালাইন (Pure-Saline) প্রয়োগ করুন।',
        'পানির সাথে গুলিয়ে সকালের দিকে সম্পূর্ণ ঘেরে ছিটিয়ে দিন।'
      ]
    }
  },
  'yucca-biosol': {
    genericNameEn: 'Yucca Schidigera extract for pond ammonia, aquaculture liquid ammonia reducer, natural gas absorber',
    genericNameBn: 'ইউক্কা লিকুইড অ্যামোনিয়া নাশক, পুকুরের গন্ধ ও ক্ষতিকর গ্যাস দূর করার উপায়',
    focusKeywords: [
      'yucca extract for pond ammonia',
      'aquaculture ammonia neutralizer liquid',
      'natural gas absorber fish pond',
      'yucca schidigera 80 saponin',
      'pond odor controller',
      'পুকুরের অ্যামোনিয়া নাশক লিকুইড',
      'ইউক্কা বায়োসোল',
      'পুকুরের গন্ধ দূর করার ঔষধ',
      'গ্যাস নিয়ন্ত্রণ মৎস্য'
    ],
    faq: [
      {
        q: 'How does Yucca Biosol reduce ammonia gas instantly in aquaculture ponds?',
        a: 'Yucca Biosol contains concentrated Yucca Schidigera saponins which physically bind and neutralize free ammonia molecules and nitrogenous wastes, purifying the water column and relieving fish from respiratory gas stress.',
        qBn: 'ইউক্কা বায়োসোল কীভাবে পুকুরের বিষাক্ত অ্যামোনিয়া গ্যাস তাৎক্ষণিকভাবে দূর করে?',
        aBn: 'ইউক্কা বায়োসোল (Yucca Biosol) এ রয়েছে প্রাকৃতিক ইউক্কা নির্যাসের উচ্চমাত্রার স্যাপোনিন। এটি পানিতে থাকা বিষাক্ত অ্যামোনিয়া অণুকে সরাসরি নিষ্ক্রিয় করে ক্ষতিকর নাইট্রোজেনাস বর্জ্য দূর করে মাছকে আরাম দেয়।'
      }
    ],
    howTo: {
      stepsEn: [
        'Calculate pond surface area and water depth.',
        'Dilute 100 ml of Yucca Biosol in 20-30 liters of pond water for every 33-50 decimals.',
        'Distribute the solution uniformly during sunny afternoons when ammonia levels peak.'
      ],
      stepsBn: [
        'পুকুরের মোট আয়তন ও পানির গভীরতা হিসাব করুন।',
        'প্রতি ৩৩-৫০ শতকের জন্য ১০০ মি.লি. ইউক্কা বায়োসোল (Yucca Biosol) ২০-৩০ লিটার পানিতে গুলিয়ে নিন।',
        'রৌদ্রোজ্জ্বল বিকেলে যখন গ্যাস সর্বোচ্চ পর্যায়ে থাকে, তখন সম্পূর্ণ পুকুরে সমহারে ছিটিয়ে দিন।'
      ]
    }
  },
  paratin: {
    genericNameEn: 'Ivermectin 3% fish lice medicine, aquaculture ectoparasite control, Lernaea anchor worm cure',
    genericNameBn: 'মাছের উকুন ও সুতা পরজীবী মারার আইভারমেকটিন ঔষধ, প্যারাটিন',
    focusKeywords: [
      'fish lice treatment ivermectin',
      'aquaculture ectoparasite control',
      'fish lice or parasite killer',
      'ivermectin for anchor worms Lernaea',
      'fish parasite neural paralyser',
      'মাছের উকুন মারার ঔষধ',
      'মৎস্য উকুন নাশক',
      'প্যারাটিন আইভারমেকটিন',
      'মাছের সুতা পোকা প্রতিকার'
    ],
    faq: [
      {
        q: 'What is the most effective treatment for fish lice (Argulus) and anchor worms?',
        a: 'Paratin (containing Ivermectin 3.00% liquid solution) is highly effective. It acts as a neurotoxin to parasites, paralyzing and shedding ectoparasites like Argulus, Lernaea, and gill maggots safely from fish without toxicity.',
        qBn: 'মাছের উকুন (Argulus) ও নোঙর/সুতা পোকার সবচেয়ে কার্যকারী সমাধান কী?',
        aBn: 'প্যারাটিন (Paratin) অত্যন্ত কার্যকারী উকুন নাশক যা ৩.০০% আইভারমেকটিন তরল সমৃদ্ধ। এটি পরজীবীর স্নায়ুতন্ত্রকে অচল করে দিয়ে মাছের গা থেকে উকুন, সুতা পোকা ও উকুন ডিম ঝরিয়ে ফেলে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Dilute 1 ml of Paratin per decimal of pond area (assuming 3-5 feet water depth).',
        'Ensure the liquid is mixed thoroughly in a bucket of pond water before broadcasting.',
        'Spread the diluted mixture in the morning. Use only as recommended by mৎস্য expert.'
      ],
      stepsBn: [
        'পুকুরের ৩-৫ ফুট পানির গভীরতার জন্য প্রতি শতকে ১ মি.লি. প্যারাটিন (Paratin) পরিমাপ করুন।',
        'একটি বালতিতে পুকুরের পানির সাথে প্রয়োজনীয় তরলটি ভালোভাবে মিশিয়ে নিন।',
        'সকালের দিকে পুরো পুকুরে সমহারে গুলানো তরলটি ছিটিয়ে দিন।'
      ]
    }
  },
  'zeoprob-plus': {
    genericNameEn: 'Zeolite powder with probiotics for aquaculture, pond soil conditioner BDT, clinoptilolite zeolite',
    genericNameBn: 'পুকুরের গ্যাস শোষণকারী জিওলাইট ও মাটির প্রোবায়োটিক, জিওপ্রোব প্লাস',
    focusKeywords: [
      'zeolite with probiotics',
      'aquaculture zeolite powder',
      'pond soil conditioner',
      'clinoptilolite zeolite fish',
      'absorb organic waste zeolite',
      'পুকুরের জন্য জিওলাইট',
      'মাটির প্রোবায়োটিক',
      'কাদা শোধন জিওলাইট',
      'জিওপ্রোব প্লাস'
    ],
    faq: [
      {
        q: 'How does zeolite combined with probiotics benefit fish pond bottoms?',
        a: 'Zeoprob-Plus provides double action. The clinoptilolite zeolite absorbs ammonia, hydrogen sulfide, and heavy metals instantly, while the active soil probiotics consume organic sludge, continuously regenerating the pond bottom.',
        qBn: 'জিওলাইটের সাথে প্রোবায়োটিক ব্যবহারে পুকুরের তলদেশের কী সুবিধা হয়?',
        aBn: 'জিওপ্রোব-প্লাস (Zeoprob-Plus) দ্বিমুখী কাজ করে। এর উন্নত জিওলাইট কণা অ্যামোনিয়া, হাইড্রোজেন সালফাইড ও ভারী ধাতু শোষণ করে নেয় এবং প্রোবায়োটিক ব্যাকটেরিয়া তলদেশের অর্গানিক বর্জ্য পচিয়ে কাদা দূর করে।'
      }
    ],
    howTo: {
      stepsEn: [
        'Apply 100-150 grams of Zeoprob-Plus per decimal during pond preparation.',
        'For ongoing maintenance, apply 50-70 grams per decimal every 20-30 days.',
        'Scatter the dry granules or powder evenly across the pond floor, particularly in feeding areas.'
      ],
      stepsBn: [
        'পুকুর প্রস্তুতির সময় প্রতি শতকে ১০০-১৫০ গ্রাম জিওপ্রোব-প্লাস (Zeoprob-Plus) প্রয়োগ করুন।',
        'চাষ চলাকালীন নিয়মিত সুরক্ষায় প্রতি ২০-৩০ দিন পর পর শতক প্রতি ৫০-৭০ গ্রাম হিসেবে ব্যবহার করুন।',
        'পুকুরের তলার মাটিতে, বিশেষ করে যেখানে বর্জ্য জমে বা মাছের খাদ্য প্রদান করা হয় সেখানে সমহারে ছড়িয়ে দিন।'
      ]
    }
  },
  'quick-growth-gel': {
    genericNameEn: 'Fish growth promoter gel, aquaculture feed binder gel, high protein vitamin feed binder gel',
    genericNameBn: 'মাছের দ্রুত বৃদ্ধির জন্য গ্রোথ জেল, মৎস্য খাদ্য প্রলেপ ফিড বাইন্ডার জেল',
    focusKeywords: [
      'fish growth promoter gel',
      'aquaculture feed binder gel',
      'feed gel binder fish weight',
      'vitamin mineral feed coating',
      'FCR enhancer growth gel',
      'মাছের দ্রুত বৃদ্ধির গ্রোথ জেল',
      'ফিড বাইন্ডার জেল',
      'খাবারের পুষ্টির প্রলেপ',
      'কুইক গ্রোথ জেল'
    ],
    faq: [
      {
        q: 'What is the purpose of a feed binder gel in aquaculture?',
        a: 'A feed binder gel like Quick Growth Gel serves two main purposes: it securely binds powdered medicines, vitamins, or enzymes to the pellet feed preventing them from washing away in water, and it supplies growth-enhancing proteins and amino acids directly to the fish.',
        qBn: 'মৎস্য চাষে ফিড বাইন্ডার বা গ্রোথ জেলের গুরুত্ব কী?',
        aBn: 'কুইক গ্রোথ জেল (Quick Growth Gel) একটি উন্নত মানের ফিড বাইন্ডার। এটি খাদ্যের সাথে দেওয়া বিভিন্ন ভিটামিন, মিনারেল বা পাউডার জাতীয় ঔষধকে শক্তভাবে খাবারের সাথে আটকে রাখে যাতে পানিতে ঔষধ ধুয়ে না যায় এবং এটি মাছের দ্রুত বৃদ্ধির অ্যামিনো অ্যাসিড যোগায়।'
      }
    ],
    howTo: {
      stepsEn: [
        'Prepare the dry pellet feed and separate the required medicines or vitamins.',
        'Add 10-15 ml of Quick Growth Gel per kg of feed and mix thoroughly to form a uniform coating.',
        'Let the feed dry in a shaded area for 15-20 minutes so the gel locks the nutrients, then feed.'
      ],
      stepsBn: [
        'শুকনো প্লেট বা ভাসমান খাবার এবং প্রয়োগযোগ্য ঔষধ/ভিটামিন আলাদা করে রাখুন।',
        'প্রতি কেজি ফিডের সাথে ১০-১৫ মি.লি. কুইক গ্রোথ জেল (Quick Growth Gel) দিয়ে ভালোভাবে মাখান।',
        'মাখানো খাবারটি রোদে না দিয়ে ছায়াযুক্ত স্থানে ১৫-২০ মিনিট রেখে শুকিয়ে নিন যাতে জেলটি খাবারে ঔষধ আটকে দেয়, এরপর প্রয়োগ করুন।'
      ]
    }
  },
  deltam: {
    genericNameEn: 'Deltamethrin 11% fish lice treatment, pond insect control insecticide, deltamethrin veterinary aquaculture BDT',
    genericNameBn: 'মাছের উকুন দূর করার ডেল্টামেথ্রিন ১১% ইসি, পুকুরের পরজীবী ও পোকা নাশক',
    focusKeywords: [
      'deltamethrin 11% for fish lice',
      'pond ectoparasite control deltamethrin',
      'deltam fish lice treatment',
      'pond insect control insecticide',
      'red lice cure in aquaculture',
      'মাছের লাল উকুন দূর করার ঔষধ',
      'মৎস্য পরজীবী নাশক',
      'ডেল্টামেথ্রিন ১১%',
      'ডেল্টাম উকুন নাশক'
    ],
    faq: [
      {
        q: 'Is Deltamethrin 11% safe for controlling fish lice (Argulus)?',
        a: 'Yes, veterinary-grade Deltamethrin 11% like Deltam is highly effective in treating heavy fish lice infestations. It targets the nervous system of lice and pond insects, causing rapid shedding. However, it must be used strictly in the recommended dosage and is prohibited in nursery ponds and shrimp farms.',
        qBn: 'মাছের উকুন দমনে ডেল্টামেথ্রিন ১১% কি নিরাপদ?',
        aBn: 'হ্যাঁ, ডেল্টাম (Deltam) নামক উন্নত ডেল্টামেথ্রিন ১১% মৎস্য উকুনের তীব্র আক্রমণ দমনে অত্যন্ত কার্যকর। এটি উকুনের স্নায়ুতন্ত্রকে প্যারালাইজ করে গা থেকে খসিয়ে ফেলে। তবে নির্দেশনা অনুযায়ী সঠিক মাত্রায় ব্যবহার করতে হবে এবং নার্সারি বা চিংড়ি ঘেরে সম্পূর্ণ নিষেধ।'
      }
    ],
    howTo: {
      stepsEn: [
        'Determine water area and depth. Dose is strictly 0.5 ml to 1 ml per decimal (at 3-5 ft depth).',
        'Mix the required dose in 15-20 liters of water and spray during a sunny morning.',
        'Do not apply in shrimp farms, nursery ponds, Pabda/Chapila farms, or fry rearing ponds.'
      ],
      stepsBn: [
        'পুকুরের আয়তন ও পানির গভীরতা পরিমাপ করুন। কঠোরভাবে প্রতি শতকে ০.৫ মি.লি. থেকে ১ মি.লি. ডেল্টাম (Deltam) ব্যবহার্য (৩-৫ ফুট গভীরতার জন্য)।',
        'প্রয়োজনীয় পরিমাণ তরল ১৫-২০ লিটার পানির সাথে বালতিতে গুলিয়ে রৌদ্রোজ্জ্বল সকালে ছিটিয়ে দিন।',
        'চিংড়ি খামার, নার্সিং বা রেনু পোনার পুকুর, পাবদা ও চাপিলা মাছের ঘেরে কোনোভাবেই প্রয়োগ করবেন না।'
      ]
    }
  },
  'killer-phos': {
    genericNameEn: 'Quinalphos 25 EC aquaculture insecticide, predatory fish killer in fish ponds, pond preparation quinalphos',
    genericNameBn: 'পুকুরের রাক্ষুসে ও অবাঞ্ছিত মাছ মারার কুইনালফস ২৫% ইসি, কিলার ফস',
    focusKeywords: [
      'quinalphos 25 EC aquaculture',
      'predatory fish killer in ponds',
      'unwanted fish eradication',
      'pond preparation insecticide',
      'eliminate white blooded insects pond',
      'পুকুরের রাক্ষুসে মাছ নিধন',
      'কুইনালফস ২৫ ইসি',
      'কিলার ফস কীটনাশক',
      'পুকুর প্রস্তুতি অবাঞ্ছিত মাছ মারার ওষুধ'
    ],
    faq: [
      {
        q: 'How do you eradicate predatory and unwanted wild fish before stocking new fry?',
        a: 'Before stocking new fish fry, use Killer Phos (Quinalphos 25% E.C.) to eradicate predatory wild fish like Chanda, Bele, and other unwanted species. It is highly beneficial during culture pond preparation to ensure maximum fry survival.',
        qBn: 'পুকুরে নতুন পোনা ছাড়ার আগে রাক্ষুসে ও অবাঞ্ছিত মাছ কীভাবে মারবেন?',
        aBn: 'পুকুরে নতুন পোনা ছাড়ার আগে কিলার ফস (Killer Phos) বা কুইনালফস ২৫% ইসি প্রয়োগ করে অবাঞ্ছিত চান্দা, বেলে ও রাক্ষুসে মাছ দমন করতে হবে। এটি পুকুর প্রস্তুতিতে অত্যন্ত লাভজনক ও ফলদায়ক।'
      }
    ],
    howTo: {
      stepsEn: [
        'For fish cultivation, apply 2-3 ml of Killer Phos per decimal (at 3-5 ft water depth).',
        'Apply in the morning or afternoon. Ensure the water is still.',
        'Never apply in shrimp farms, fry rearing ponds, or nursing ponds.'
      ],
      stepsBn: [
        'মৎস্য চাষের পুকুর প্রস্তুতিতে ৩-৫ ফুট গভীর পানির জন্য শতক প্রতি ২-৩ মি.লি. কিলার ফস (Killer Phos) পরিমাপ করুন।',
        'সকালে অথবা বিকেলে স্থির পানিতে গুলিয়ে প্রয়োগ করুন।',
        'চিংড়ির ঘের, রেনু পোনার পুকুর বা কোনো নার্সিং পুকুরে প্রয়োগ নিষিদ্ধ।'
      ]
    }
  }
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

// Generative Engine Optimization (GEO) & SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return {
      title: 'Aquaculture Product Detail | Expert BioScience Limited',
      description: 'Expert veterinary-grade fish medicines, probiotics, and water treatment solutions.',
    };
  }

  const seoInfo = SEO_GEO_DATA[id];
  const genericEn = seoInfo ? ` (${seoInfo.genericNameEn})` : '';
  const genericBn = seoInfo ? ` (${seoInfo.genericNameBn})` : '';
  const title = `${product.bn.title} / ${product.en.title} - ${product.en.category}`;
  const description = `${product.bn.title} (${product.en.title}) - ${product.bn.category}। ${product.bn.description.substring(0, 120)}... Expert BioScience Bangladesh provides safe veterinary solutions for fish disease, oxygen deficiency, ammonia control, shrimp health, and high survival rates.`;

  const keywordsList = [
    product.id,
    product.en.title,
    product.bn.title,
    product.en.category,
    product.bn.category,
    product.en.composition,
    'Expert BioScience Limited',
    'Expert BioScience',
    'Bangladesh aquaculture medicine',
    'Fish disease medicine Bangladesh',
    'Mymensingh fish market medicine',
    'Jessore shrimp gher probiotics',
    'veterinary fish supplement',
    ...(seoInfo ? seoInfo.focusKeywords : []),
  ];

  return {
    title,
    description,
    keywords: keywordsList,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${product.en.title} - Veterinary Aquaculture Solution`,
      description,
      url: `https://expertbioscience.com/products/${id}`,
      type: 'article',
      locale: 'bn_BD',
      siteName: 'Expert BioScience Limited',
      images: [
        {
          url: '/icon.svg',
          width: 512,
          height: 512,
          alt: `${product.en.title} packaging design placeholder`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/icon.svg'],
    },
    other: {
      'geo.region': 'BD',
      'geo.placename': 'Bangladesh',
      'geo.position': '23.8103;90.4125',
      ICBM: '23.8103, 90.4125',
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  const seoInfo = SEO_GEO_DATA[id];

  // Prepare Schema.org JSON-LD (Product + FAQ + HowTo) for Generative Search engines (Gemini, ChatGPT)
  let schemaJson: Record<string, any>[] = [];

  if (product) {
    // 1. Product Schema
    const productSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.en.title,
      alternateName: product.bn.title,
      description: product.en.description,
      category: product.en.category,
      image: 'https://expertbioscience.com/icon.svg',
      sku: product.id,
      brand: {
        '@type': 'Brand',
        name: 'Expert BioScience Limited',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'BDT',
        highPrice: 'Contact for Pricing',
        lowPrice: 'Contact for Pricing',
        offerCount: '1',
        offers: [
          {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'BDT',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            eligibleRegion: {
              '@type': 'Country',
              name: 'Bangladesh',
            },
          },
        ],
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Active Composition',
          value: product.en.composition,
        },
        {
          '@type': 'PropertyValue',
          name: 'Packaging Size',
          value: product.en.packSize,
        },
        {
          '@type': 'PropertyValue',
          name: 'Country of Origin',
          value: product.en.origin,
        },
      ],
    };

    schemaJson.push(productSchema);

    // 2. FAQ Schema
    if (seoInfo && seoInfo.faq.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seoInfo.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      };
      schemaJson.push(faqSchema);
    }

    // 3. HowTo Schema
    if (seoInfo && seoInfo.howTo.stepsEn.length > 0) {
      const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to apply ${product.en.title} in Aquaculture Pond`,
        description: `Step-by-step application instructions and dosage guide for ${product.en.title} (${product.en.composition}) in fish & shrimp ponds.`,
        step: seoInfo.howTo.stepsEn.map((step, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: `Step ${idx + 1}`,
          text: step,
        })),
      };
      schemaJson.push(howToSchema);
    }
  }

  return (
    <>
      {schemaJson.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      )}
      <ProductDetailClient id={id} />
    </>
  );
}
