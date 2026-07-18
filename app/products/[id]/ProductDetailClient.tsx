'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { PRODUCTS, Product } from '@/lib/products';
import {
  ChevronRight,
  Home,
  MessageCircle,
  Weight,
  ShieldCheck,
  Award,
  Info,
  HelpCircle,
  Minus,
  Plus,
  ArrowLeft,
  ChevronDown,
  CheckCircle,
  Calculator,
  Droplets,
  Activity,
  FlaskConical,
  Clock,
  AlertTriangle,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';



interface FAQItem {
  q: string;
  a: string;
}

const PRODUCT_FAQS: Record<string, { en: FAQItem[]; bn: FAQItem[] }> = {
  oxyadd: {
    en: [
      { q: "What is the ideal dissolved oxygen (D.O.) level for typical fish ponds?", a: "For optimal feeding, health, and metabolism, dissolved oxygen (D.O.) should be maintained at 5.0 ppm or above. D.O. dropping below 3.0 ppm causes severe respiratory distress, gasp warnings, and eventual death." },
      { q: "How rapidly does Oxyadd release active oxygen upon broadcasting?", a: "Oxyadd begins reacting immediately upon contact with water, raising D.O. levels in your pond within 10 to 15 minutes to save your shrimp and fish from sudden suffocation." },
      { q: "Can Oxyadd be used together with bio-remediation probiotics?", a: "Yes, in fact, active oxygen acts as a powerful catalyst for soil-purifying bacteria (like Bacillus strains in Bioprob Max), which need high oxygen parameters to degrade sludge and gas pockets." }
    ],
    bn: [
      { q: "মৎস্য পুকুরের জন্য দ্রবীভূত অক্সিজেনের (D.O.) আদর্শ মাত্রা কত?", a: "মাছের স্বাভাবিক বৃদ্ধি, খাদ্য গ্রহণ ও বিপাকীয় কার্যক্রমের জন্য পানিতে অক্সিজেন ৫.০ পিপিএম (ppm) বা তার বেশি থাকা উচিত। অক্সিজেন ৩.০ পিপিএম-এর নিচে নেমে গেলে মাছ খাবি খেতে বাধ্য হয় এবং বড় ধরণের ক্ষতি হতে পারে।" },
      { q: "অক্সিএড ছিটিয়ে দেওয়ার পর এটি পানিতে কত দ্রুত অক্সিজেন তৈরি করে?", a: "অক্সিএড পানিতে পড়ার সাথে সাথেই বিক্রিয়া শুরু করে। মাত্র ১০ থেকে ১৫ মিনিটের মধ্যে এটি দ্রবীভূত অক্সিজেনের ঘাটতি পূরণ করে মারাত্মক শ্বাসকষ্ট থেকে মাছ ও চিংড়িকে দ্রুত রক্ষা করে।" },
      { q: "বায়োপ্রোব বা অন্যান্য ব্যাকটেরিয়াল প্রোবায়োটিকের সাথে কি অক্সিএড প্রয়োগ করা সম্ভব?", a: "হ্যাঁ, নিশ্চয়ই! উপকারী ব্যাকটেরিয়াগুলো অক্সিজেন ব্যবহার করে পুকুরের তলদেশের কাদা ও বর্জ্য পচায়। অক্সিএড প্রয়োগ করলে ওই ব্যাকটেরিয়াগুলো আরও বেশি প্রাণবন্তভাবে কাজ শুরু করে।" }
    ]
  },
  gasonull: {
    en: [
      { q: "What is the best time of day to apply Gasonull?", a: "It is highly recommended to apply Gasonull around mid-morning (9 AM to 11 AM) on a bright sunny day, or during late afternoon when pond bottom sludge digestion needs a microbiological boost." },
      { q: "Can Gasonull remove persistent black bottom mud odors?", a: "Absolutely. By utilizing concentrated Yucca sap compounds and active Bacillus bacteria, Gasonull binds ammonia and hydrogen sulfide molecules while speeding up waste recycling." },
      { q: "Is Gasonull safe for fish and shrimp gills?", a: "Yes, Gasonull is a 100% natural organic formula. It actually helps heal gills by preventing gill rot (Black Gill) caused by intense nitrite and ammonia gas stress." }
    ],
    bn: [
      { q: "দিনের কোন সময়ে গ্যাসোনিল বা গ্যাসোনাল প্রয়োগ করা সবচেয়ে ভালো?", a: "রৌদ্রোজ্জ্বল দিনগুলোতে সকাল ৯টা থেকে ১১টার মধ্যে অথবা বিকেলের দিকে গ্যাসোনাল প্রয়োগ করা সবচেয়ে উত্তম। এটি পুকুরের তলদেশের কাদা ও জৈব বর্জ্য গ্যাস তৈরিতে বাধা দেয়।" },
      { q: "কালো কাদার তীব্র গন্ধ দূর করতে কি গ্যাসোনাল কাজ করবে?", a: "হ্যাঁ, খুব দ্রুত করবে! গ্যাসোনালের সক্রিয় উপাদানগুলো ক্ষতিকর গ্যাসগুলোর সাথে সরাসরি যুক্ত হয় এবং এগুলোকে পচনে সাহায্য করে তলদেশের কালো দাগ ও দুর্গন্ধ নিমিষেই দূর করে।" },
      { q: "এটি ব্যবহারের পর কি মাছ বা চিংড়ির ফুলকার কোনো ক্ষতি হয়?", a: "না, এটি শতভাগ প্রাকৃতিক হওয়ায় মাছ ও চিংড়ির জন্য সম্পূর্ণ নিরাপদ। উল্টো এটি অ্যামোনিয়া কমানোর মাধ্যমে ফুলকা পচা ও ফুলকা ফোলা রোগ থেকে মাছকে রক্ষা করতে দারুণ সহায়তা করে।" }
    ]
  },
  'bioprob-max': {
    en: [
      { q: "How often should Bioprob Max be applied for optimal pond conditioning?", a: "We recommend regular applications every 15 days under normal farming conditions. In high-density settings or severe organic overload, it can be applied every 10 days to maintain crystalline quality." },
      { q: "Can disinfectants be mixed alongside Bioprob Max?", a: "Never combine probiotics directly with chemical disinfectants. Sanitisers will destroy the beneficial bacteria strains. Please maintain at least a 48 to 72 hour safety gap." },
      { q: "What are the core bacterial counts in this probiotic?", a: "Bioprob Max contains a massive count of 2X10^10 CFU/g of premium strains, including Aspergillus oryzae, Bacillus subtilis, and specialized Nitrosomonas that process organic nitrogen." }
    ],
    bn: [
      { q: "জৈবিক পরিবেশের সুরক্ষায় বায়োপ্রোব ম্যাক্স কতদিন পর পর ব্যবহার করব?", a: "স্বাভাবিক নিয়মে প্রতি ১৫ দিনে একবার এটি প্রযোগ করা উচিত। কিন্তু খামারে মাছের ঘনত্ব বেশি হলে বা তলদেশে কাদা অধিক থাকলে প্রতি ১০ দিন অন্তর প্রয়োগে সেরা ফলাফল পাওয়া যায়।" },
      { q: "বায়োপ্রোব ম্যাক্সের সাথে কি সরাসরি জীবাণুনাশক মেশান যাবে?", a: " his ভুলেও তা করবেন না। কারণ জীবাণুনাশক দিলে উপকারী ব্যাকটেরিয়াগুলোও মারা যাবে। যেকোনো জীবাণুনাশক ব্যবহারের কমপক্ষে ৪৮ থেকে ৭২ ঘণ্টা পর বায়োপ্রোব ম্যাক্স প্রয়োগ করুন।" },
      { q: "এই প্রোবায়োটিকটিতে ব্যাকটেরিয়ার পরিমাণ কতটুকু দেওয়া রয়েছে?", a: "বায়োপ্রোব ম্যাক্সে রয়েছে প্রতি গ্রামে শক্তিশালী ২X১০^১০ CFU উপকারী ব্যাকটেরিয়া (ব্যাসিলাস সাবটিলিস, অ্যাসপারজিলাস এবং নাইট্রোব্যাক্টার) যা জাপানি প্রযুক্তি ও ফর্মুলায় প্রস্তুত।" }
    ]
  },
  'biomin-c': {
    en: [
      { q: "What is the best way to administer Biomin C via feed?", a: "Dissolve 1-2g of Biomin C in a small amount of clean water, spray or mix it thoroughly over 1kg of pellet feed, and let it dry in a shady spot for 20 minutes before feeding." },
      { q: "Does water temperature affect Vitamin C stability?", a: "Vitamin C is sensitive to high heat, which is why our high-purity molecular L-ascorbic acid is encapsulated to sustain heat stability during commercial fish feed broadcasting." },
      { q: "How does Biomin C help during extreme weather anomalies?", a: "Vitamin C is raw nutrition that builds cellular resilience, decreases blood cortisol (stress hormone), and speeds up scale restoration when sudden rain or heat waves occur." }
    ],
    bn: [
      { q: "বায়োমিন সি খাবারের সাথে মেশানোর সবচেয়ে কার্যকর পদ্ধতি কী?", a: "১-২ গ্রাম বায়োমিন সি সামান্য পরিষ্কার পানিতে গুলে প্রতি কেজি দানাদার খবরের সাথে ছিটিয়ে দিন। এরপর ছায়াযুক্ত স্থানে ২০ মিনিট বাতাসে শুকিয়ে নিয়ে মাছকে খাওয়াতে হবে।" },
      { q: "গরম রোদ বা ঝড়-বৃষ্টির সময় কি বায়োমিন সি এর কোনো বিশেষ প্রয়োজন রয়েছে?", a: "হ্যাঁ, চরম আবহাওয়ায় মাছের শরীরে কর্টিসল (ধকল হরমোন) বেড়ে যায়। বায়োমিন সি মাস্টার অ্যান্টিঅক্সিডেন্ট হিসেবে মাছের ধকল নিরাময় করে রোগ প্রতিরোধ ক্ষমতা বহুগুণ সচল রাখে।" },
      { q: "এটি মাছের ক্ষতস্থান বা আঁশ ঝরে পড়া দ্রুত সারাতে পারে কি?", a: "হ্যাঁ, এটি মাছের কোলাজেন গঠনে মূল ভূমিকা পালন করে। ফলে যেকোনো ক্ষতস্থান, মুখের ক্ষত বা আঁশ ঝরে যাওয়ার দ্রুত উপশম ঘটায়।" }
    ]
  },
  germbit: {
    en: [
      { q: "Does Germbit affect the phytoplankton or zooplankton blooms?", a: "At recommended preventive doses, Germbit's organic stabilizers target only pathogenic bacteria, fungi, and viruses, leaving beneficial unicellular green plankton unharmed." },
      { q: "Is it safe to apply Germbit during a severe white spot breakout?", a: "Yes, Germbit is formulated to target external pathogens immediately. It disinfects the water column and limits secondary fungal and bacterial damage, promoting skin recovery." },
      { q: "Should I bypass water changes after applying Germbit?", a: "No water changes are required after applying Germbit. It degrades safely, leaving absolute zero synthetic chemical residue behind in the aquatic harvest." }
    ],
    bn: [
      { q: "জার্মবিট প্রয়োগ করলে কি পুকুরের প্রাকৃতিক সবুজ প্লাঙ্কটন নষ্ট হয়ে যায়?", a: "নির্ধারিত মাত্রায় জার্মবিট প্রযোগ করলে প্রাকৃতিক প্লাঙ্কটনের কোনো ক্ষতি হয় না। এটি শুধুমাত্র রোগসৃষ্টিকারী ব্যাকটেরিয়া, ভাইরাস ও ক্ষতিকর ছত্রাক কণা ধ্বংস করে।" },
      { q: "মাছের গায়ে লাল ছোপ ও ক্ষত বা পচন রোগ থাকলে কি জার্মবিট কাজ করবে?", a: "হ্যাঁ, অত্যন্ত চমৎকার কাজ করবে! এটি পুকুরে ছড়িয়ে দিলে দ্রুত ক্ষতস্থান থেকে ব্যাকটেরিয়া দূর করে এবং মাছকে লেজপচা বা পাখনা পচা রোগ থেকে রক্ষা করে সুস্থ শরীর দান করে।" },
      { q: "জার্মবিট ব্যবহারের পর কি পুকুরের পানি পরিবর্তন করা প্রয়োজন?", a: "জী না, কোনো পানি পরিবর্তনের প্রয়োজন নেই। জার্মবিট পানিতে মিশে জীবাণু কার্যকরভাবে ধ্বংস করে প্রাকৃতিকভাবেই ক্ষয় হয়ে যায় এবং কোনো ক্ষতিকর অবশিষ্টাংশ রাখে না।" }
    ]
  },
  'bioliv-care': {
    en: [
      { q: "How frequently should Bioliv Care be used in shrimp farming?", a: "For shrimp, apply 5-7ml per kg of feed regularly for 5 to 7 days during high-stress growth stages, molting cycles, or to defend against White Feces Syndrome." },
      { q: "What is Silymarin extract and why is it used?", a: "Silymarin is a premium organic compound harvested from Milk Thistle seeds. It provides scientifically certified liver protection, blocking toxins and encouraging liver cell regeneration." },
      { q: "Does Bioliv Care boost appetite and growth?", a: "Yes, it boosts appetite by stimulating optimal digestive juices and bile secretion. This optimizes the Feed Conversion Ratio (FCR) for fast, uniform weight gain." }
    ],
    bn: [
      { q: "চিংড়ি চাষে বায়োলিভ কেয়ার লিকুইড কতদিন অন্তর অন্তর ব্যবহার করব?", a: "চিংড়ির বৃদ্ধির সময় কিংবা খোলস বদলানোর চরম ধকলের দিনে প্রতি কেজি খাবারে ৫-৭ মিলি হারে একটানা ৫ থেকে ৭ দিন এটি প্রয়োগ করলে সবচেয়ে ভালো ফল পাওয়া যায়।" },
      { q: "সিলিমারিন এক্সট্র্যাক্ট কী এবং এর কাজ কী?", a: "সিলিমারিন হলো মিল্ক থিসল উদ্ভিদের প্রিমিয়াম প্রাকৃতিক নির্যাস। এটি মাছ ও চিংড়ির যকৃত বা হেপাটোপ্যানক্রিয়াসের কোষে প্রবেশ করে যেকোনো টক্সিন বা বিষের প্রভাব বিনষ্ট করে লিভার সতেজ রাখে।" },
      { q: "এটি ব্যবহার করলে খাবারের চাহিদা বা রুচি কি বৃদ্ধি পায়?", a: "হ্যাঁ, এটি পরিপাকতন্ত্র থেকে হজমকারী এনজাইম নিসরণ বহুগুণ বাড়িয়ে দেয়। ফলে মাছের রুচি বাড়ে, খাবার ঠিকমত হজম হয় এবং মাছ খুব দ্রুত ওজন ও সাইজে চমৎকার বড় হয়।" }
    ]
  },
  farmizyme: {
    en: [
      { q: "How does Farmizyme reduce feed costs (FCR reduction)?", a: "Farmizyme contains enzyme cocktails (Amylase, Protease, Xylanase) that break down rigid fibers in agricultural ingredients, turning raw feed elements into high-grade proteins." },
      { q: "Is Farmizyme compatible with both home-made feed and commercial pellets?", a: "Yes, it is fully compatible with home-mixed feed formulations as well as factory-made floating and sinking pellets." },
      { q: "Can Farmizyme be fed to cows, poultry, and fish alike?", a: "Yes, dairy cows, poultry, and all fish classes benefit immensely from Farmizyme. It maximizes digestive efficiency across multiple livestock categories." }
    ],
    bn: [
      { q: "ফার্মিজাইম কীভাবে দানাদার খাবারের মূল্য বা এফসিআর (FCR) সাশ্রয় করে?", a: "ফার্মিজাইম এনজাইমগুলো খাবারের পেলেট ভেঙে মাইক্রো-নিউট্রিয়েন্ট বা অতি ক্ষুদ্র পুষ্টি উপাদান হিসেবে রক্তে মিশে যেতে সাহায্য করে। এতে কম খাবারে অনেক বেশি ওজন বাড়ে ও খাবার অপচয় কমে।" },
      { q: "এটি কি বাড়ি তৈরিকৃত সাধারণ খাবার নাকি কোম্পানির কেনা খাবারের সাথে খাওয়ানো যাবে?", a: "এটি খামারে তৈরি কুঁড়া, খৈলের মিশ্রণ এবং বাজার থেকে কেনা রেডিমেড ভাসমান বা ডুবন্ত পিলেট—উভয় খাবারের সাথেই অত্যন্ত স্বাচ্ছন্দ্যে ব্যবহারযোগ্য।" },
      { q: "ফার্মিজাইম কি মাছ ছাড়াও অন্যান্য গৃহপালিত পশুকে খাওয়ানো নিরাপদ?", a: "হ্যাঁ, এটি সম্পূর্ণ পুষ্টিকর এনজাইম হওয়ায় গরু, মহিষ, মুরগি এবং মাছ সকলের দ্রুত হজম ও চমৎকার শারীরিক গঠনে সমানভাবে ব্যবহার করা যায়।" }
    ]
  },
  'yucca-biosol': {
    en: [
      { q: "Will Yucca Biosol reduce the ammonia level immediately?", a: "Yes, its high-purity saponins bind standard gaseous ammonia instantly upon dissolution, clearing toxic fumes from the pond water column within hours." },
      { q: "Can it be applied in extreme heat weather when gas levels peak?", a: "Absolutely. Extreme heat accelerates anaerobic sludge decomposition, releasing heavy ammonia. Direct broadcast of Yucca Biosol relieves distress instantly." },
      { q: "Does Yucca Biosol leave any organic trace chemicals?", a: "No, Yucca Biosol is an organic plant derivative extracted from the desert Yucca schidigera plant, leaving zero toxic traces behind." }
    ],
    bn: [
      { q: "ইউকা বায়োসল লিকুইড কি সত্যিই তাৎক্ষণিকভাবে অ্যামোনিয়া দূর করতে পারে?", a: "হ্যাঁ, পানিতে মেশানোর সাথে সাথেই এর শক্তিশালী উপাদানগুলো বিষাক্ত গ্যাস অণুর সাথে রাসায়নিক বন্ধন তৈরি করে মুক্ত অ্যামোনিয়ার তীব্রতা মাত্র কয়েক ঘণ্টার মধ্যেই সম্পূর্ণ শূন্যে নামিয়ে আনে।" },
      { q: "অতিরিক্ত রোদ বা গরমে যখন তলদেশের গ্যাস বাড়ে তখন কি এটি প্রয়োগ করা যাবে?", a: "হ্যাঁ, রৌদ্বের প্রখরতায় তলদেশের পঁচা বর্জ্য থেকে দ্রুত গ্যাস তৈরি হয়ে মাছ ভাসে। এই সময় ইউকা বায়োসল প্রয়োগে মাছ দ্রুত ধকল মুক্ত হয় ও স্বাভাবিকভাবে অক্সিজেন গ্রহণ করে।" },
      { q: "এর ব্যবহারের ফলে কি পানিতে কোনো কেমিক্যাল বা ক্ষতিকর অবশেষ তৈরি হয়?", a: "জী না, ইউকা বায়োসল আমেরিকার মরু অঞ্চলের ইউকা গাছ থেকে সংগৃহীত শতভাগ অর্গানিক নির্যাস। তাই এতে জলজ পরিবেশের সামান্যতম ক্ষতি হওয়ার কোনো সুযোগ নেই।" }
    ]
  },
  paratin: {
    en: [
      { q: "How long does Paratin take to completely eliminate fish lice (Argulus)?", a: "Within 24 hours of application, external parasites start getting paralyzed. By day 3 to 5, all ticks and secondary lice will drop off fish scales completely." },
      { q: "Are there sensitive species that require caution during application?", a: "Paratin is highly safe for carp, ruis, snakeheads, and prawns. However, monitor the dosage closely during treatment of delicate catfish fry." },
      { q: "Can we harvest or consume fish immediately after Paratin treatment?", a: "We recommend a safe withdrawal period of 7 days after application of Paratin before harvesting the pond yield for public consumption." }
    ],
    bn: [
      { q: "প্যারাটিন প্রয়োগের কতদিনের মধ্যে মাছের উকুন চিরতরে বিদায় নেয়?", a: "প্যারাটিন পানিতে ছাড়ার ২৪ ঘণ্টার মধ্যেই পরজীবীগুলোর উপর প্রতিক্রিয়া শুরু হয়। সাধারণত ৩ থেকে ৫ দিনের মধ্যে মাছের গায়ের সব উকুন, উকুলের ডিম ও পরজীবী সম্পূর্ণ ঝরে পড়ে।" },
      { q: "কৈ, শিং বা মাগুর মাছ চাষের পুকুরে কি প্যারাটিন ব্যবহার করা যাবে?", a: "কার্প ও রুই জাতীয় মাছের জন্য এটি শতভাগ নিরাপদ। তবে ক্যাটফিশ বা শিং মাছের পোনার ক্ষেত্রে মাত্রা ও ডোজ সর্বদা সাবধানে পর্যবেক্ষণ করে দিতে হবে।" },
      { q: "ওষুধটি ব্যবহারের কতদিন পর মাছ ধরে বাজারে বিক্রি বা খাওয়া যাবে?", a: "প্যারাটিন ব্যবহারের পর কমপক্ষে ৭ দিনের একটি উইথড্রয়াল পিরিয়ড (Withdrawal Period) বা নিরাপদ সময়কালীন দূরত্ব বজায় রেখে মাছ ধরে খাওয়া বা বাজারে পাঠানো উচিত।" }
    ]
  },
  deltam: {
    en: [
      { q: "What is Deltam and how does it work?", a: "Deltam is a highly effective, non-systemic pyrethroid parasiticide containing Deltamethrin 2.80% EC. It acts on the nervous system of parasites like lice, ticks, and worms, deactivating their cells and causing them to drop off rapidly." },
      { q: "How safe is Deltam for fish cultivation?", a: "At the recommended dosage (40-50 ml per 100 decimal for 3-5 ft depth), Deltam is highly effective and safe. However, please consult an expert before applying to delicate or very young catfish fry." },
      { q: "Are there any precautions during application?", a: "Yes. Do not smoke or eat during application. Wear protective clothing, masks, and goggles. Do not inhale or taste the product. Keep out of reach of children." }
    ],
    bn: [
      { q: "ডেল্টাম কী এবং এটি কীভাবে কাজ করে?", a: "ডেল্টাম হলো একটি অত্যন্ত কার্যকর সিন্থেটিক ও নন-সিস্টেমিক পাইরেথ্রয়েড এস্টার পরজীবীনাশক যার উপাদান ডেল্টামেথ্রিন ২.৮০% ইসি। এটি উকুন, আঠালি, ও অন্যান্য বহিঃপরজীবীর স্নায়ুতন্ত্র অকেজো করে তাদের দ্রুত ধ্বংস করে।" },
      { q: "ডেল্টাম মাছের জন্য কতটা নিরাপদ?", a: "নির্ধারিত মাত্রা (১০০ শতকে ৪০-৫০ মিলি, ৩-৫ ফুট গভীরতায়) অনুযায়ী ব্যবহার করলে এটি মাছের জন্য অত্যন্ত কার্যকর ও নিরাপদ। তবে ছোট পোনা বা সংবেদনশীল ক্যাটফিশের ক্ষেত্রে বিশেষজ্ঞের পরামর্শ নিয়ে সতর্কতার সাথে ব্যবহার করা উচিত।" },
      { q: "ডেল্টাম ব্যবহারের সময় কী কী সাবধানতা অবলম্বন করতে হবে?", a: "ডেল্টাম ব্যবহারের সময় ধূমপান বা কোনো কিছু খাওয়া থেকে বিরত থাকুন। এর গন্ধ নেওয়া বা স্বাদ গ্রহণ সম্পূর্ণ নিষেধ। ব্যবহারকালে অবশ্যই নিরাপত্তা পোশাক, মাস্ক ও চশমা পরিধান করুন এবং শিশুদের নাগালের বাইরে রাখুন।" }
    ]
  }
};

function CompositionDisplay({ composition, lang }: { composition: string; lang: 'en' | 'bn' }) {
  if (!composition) return null;

  const formatElement = (str: string) => {
    let formatted = str;
    
    // Explicitly map chemical formulas to their English and Bangla names and HTML representations
    const chemMap: { [key: string]: { en: string; bn: string; formula: string } } = {
      '2Na2CO3': { en: 'Sodium Carbonate', bn: 'সোডিয়াম কার্বনেট', formula: '2Na<sub>2</sub>CO<sub>3</sub>' },
      '2Na₂CO₃': { en: 'Sodium Carbonate', bn: 'সোডিয়াম কার্বনেট', formula: '2Na<sub>2</sub>CO<sub>3</sub>' },
      '3H2O2': { en: 'Hydrogen Peroxide', bn: 'হাইড্রোজেন পারঅক্সাইড', formula: '3H<sub>2</sub>O<sub>2</sub>' },
      '3H₂O₂': { en: 'Hydrogen Peroxide', bn: 'হাইড্রোজেন পারঅক্সাইড', formula: '3H<sub>2</sub>O<sub>2</sub>' },
      'C6H8O6': { en: 'Vitamin C (Ascorbic Acid)', bn: 'ভিটামিন সি (অ্যাসকরবিক অ্যাসিড)', formula: 'C<sub>6</sub>H<sub>8</sub>O<sub>6</sub>' },
      'C₆H₈O₆': { en: 'Vitamin C (Ascorbic Acid)', bn: 'ভিটামিন সি (অ্যাসকরবিক অ্যাসিড)', formula: 'C<sub>6</sub>H<sub>8</sub>O<sub>6</sub>' },
      'Al2O3': { en: 'Aluminum Oxide', bn: 'অ্যালুমিনিয়াম অক্সাইড', formula: 'Al<sub>2</sub>O<sub>3</sub>' },
      'Al₂O₃': { en: 'Aluminum Oxide', bn: 'অ্যালুমিনিয়াম অক্সাইড', formula: 'Al<sub>2</sub>O<sub>3</sub>' },
      'Fe2O3': { en: 'Iron Oxide', bn: 'আয়রন অক্সাইড', formula: 'Fe<sub>2</sub>O<sub>3</sub>' },
      'Fe₂O₃': { en: 'Iron Oxide', bn: 'আয়রন অক্সাইড', formula: 'Fe<sub>2</sub>O<sub>3</sub>' },
      'SiO2': { en: 'Silicon Dioxide', bn: 'সিলিকন ডাই-অক্সাইড', formula: 'SiO<sub>2</sub>' },
      'SiO₂': { en: 'Silicon Dioxide', bn: 'সিলিকন ডাই-অক্সাইড', formula: 'SiO<sub>2</sub>' },
      'TiO2': { en: 'Titanium Dioxide', bn: 'টাইটানিয়াম ডাই-অক্সাইড', formula: 'TiO<sub>2</sub>' },
      'TiO₂': { en: 'Titanium Dioxide', bn: 'টাইটানিয়াম ডাই-অক্সাইড', formula: 'TiO<sub>2</sub>' },
      'Na2O': { en: 'Sodium Oxide', bn: 'সোডিয়াম অক্সাইড', formula: 'Na<sub>2</sub>O' },
      'Na₂O': { en: 'Sodium Oxide', bn: 'সোডিয়াম অক্সাইড', formula: 'Na<sub>2</sub>O' },
      'NO2-': { en: 'Nitrite', bn: 'নাইট্রাইট', formula: 'NO<sub>2</sub><sup>-</sup>' },
      'NO₂⁻': { en: 'Nitrite', bn: 'নাইট্রাইট', formula: 'NO<sub>2</sub><sup>-</sup>' },
      'NO2⁻': { en: 'Nitrite', bn: 'নাইট্রাইট', formula: 'NO<sub>2</sub><sup>-</sup>' },
      'NO3-': { en: 'Nitrate', bn: 'নাইট্রেট', formula: 'NO<sub>3</sub><sup>-</sup>' },
      'NO₃⁻': { en: 'Nitrate', bn: 'নাইট্রেট', formula: 'NO<sub>3</sub><sup>-</sup>' },
      'NO3⁻': { en: 'Nitrate', bn: 'নাইট্রেট', formula: 'NO<sub>3</sub><sup>-</sup>' },
      'CaO': { en: 'Calcium Oxide', bn: 'ক্যালসিয়াম অক্সাইড', formula: 'CaO' },
      'MgO': { en: 'Magnesium Oxide', bn: 'ম্যাগনেসিয়াম অক্সাইড', formula: 'MgO' },
      'K2O': { en: 'Potassium Oxide', bn: 'পটাশিয়াম অক্সাইড', formula: 'K<sub>2</sub>O' },
      'K₂O': { en: 'Potassium Oxide', bn: 'পটাশিয়াম অক্সাইড', formula: 'K<sub>2</sub>O' },
      'CO2': { en: 'Carbon Dioxide', bn: 'কার্বন ডাই-অক্সাইড', formula: 'CO<sub>2</sub>' },
      'CO₂': { en: 'Carbon Dioxide', bn: 'কার্বন ডাই-অক্সাইড', formula: 'CO<sub>2</sub>' },
      'NH3': { en: 'Ammonia', bn: 'অ্যামোনিয়া', formula: 'NH<sub>3</sub>' },
      'NH₃': { en: 'Ammonia', bn: 'অ্যামোনিয়া', formula: 'NH<sub>3</sub>' },
      'H2S': { en: 'Hydrogen Sulfide', bn: 'হাইড্রোজেন সালফাইড', formula: 'H<sub>2</sub>S' },
      'H₂S': { en: 'Hydrogen Sulfide', bn: 'হাইড্রোজেন সালফাইড', formula: 'H<sub>2</sub>S' },
      'CH4': { en: 'Methane', bn: 'মিথেন', formula: 'CH<sub>4</sub>' },
      'CH₄': { en: 'Methane', bn: 'মিথেন', formula: 'CH<sub>4</sub>' }
    };

    // Replace chemical formulas using a single-pass combined regex to avoid double replacements
    const sortedKeys = Object.keys(chemMap).sort((a, b) => b.length - a.length);
    const pattern = new RegExp(sortedKeys.map(k => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'g');
    formatted = formatted.replace(pattern, (match) => {
      const item = chemMap[match];
      const name = lang === 'bn' ? item.bn : item.en;
      
      // Determine if name/context is already present to avoid double naming
      const lowerStr = str.toLowerCase();
      const hasNameAlready = lowerStr.includes(name.toLowerCase()) ||
                            lowerStr.includes('ascorbic') ||
                            lowerStr.includes('vitamin c') ||
                            lowerStr.includes('এসকরবিক') ||
                            lowerStr.includes('অ্যাসকরবিক') ||
                            lowerStr.includes('সোডিয়াম') ||
                            lowerStr.includes('হাইড্রোজেন') ||
                            lowerStr.includes('অক্সাইড');
                            
      if (hasNameAlready || str.length > 35) {
        return item.formula;
      }
      return `${name} (${item.formula})`;
    });

    // Replace exponents with superscripts for 10^9, 10^10, 10^11
    formatted = formatted.replace(/([0-9.]+)\s*[xX]\s*10(¹¹|¹⁰|⁹|\^11|\^10|\^9)/g, (match, p1, p2) => {
      const exponent = p2.replace('^', '').replace('¹¹', '11').replace('¹⁰', '10').replace('⁹', '9');
      return `${p1} × 10<sup>${exponent}</sup>`;
    });
    formatted = formatted.replace(/10(¹¹|¹⁰|⁹)/g, (match, p1) => {
      const exponent = p1.replace('¹¹', '11').replace('¹⁰', '10').replace('⁹', '9');
      return `10<sup>${exponent}</sup>`;
    });

    // Post-process to style sub and sup tags to be larger, bolder, and highly readable
    formatted = formatted.replace(/<sub>/g, '<sub style="font-size: 0.9em !important; font-weight: 800 !important; color: #0f172a !important; vertical-align: -0.12em !important; line-height: 1 !important; display: inline-block !important; margin-left: 0.05em !important; margin-right: 0.05em !important;">');
    formatted = formatted.replace(/<sup>/g, '<sup style="font-size: 0.85em !important; font-weight: 800 !important; color: #e11922 !important; vertical-align: 0.25em !important; line-height: 1 !important; display: inline-block !important; margin-left: 0.05em !important; margin-right: 0.05em !important;">');

    // Italicize scientific names of microbes
    const scientificStrains = [
      'Aspergillus oryzae', 'Aspergillus',
      'Bacillus amyloliquefaciens', 'Bacillus circulans', 'Bacillus licheniformis', 'Bacillus megaterium', 'Bacillus polymyxa', 'Bacillus subtilis', 'Bacillus',
      'Lactobacillus acidophyllus', 'Lactobacillus helveticus', 'Lactobacillus lactis', 'Lactobacillus acidophilus', 'Lactobacillus',
      'Nitrobacter', 'Nitrosomonas',
      'Paracococcus denitrificans', 'Paracococcus',
      'Rhodobacter',
      'Saccharomyces cerevisiae', 'Saccharomyces'
    ];
    
    scientificStrains.forEach(strain => {
      const regex = new RegExp(`\\b${strain}\\b`, 'g');
      formatted = formatted.replace(regex, `<span class="italic font-bold text-[#0f172a]">${strain}</span>`);
    });

    const banglaStrains = [
      'অ্যাসপারজিলাস ওরাইজি', 'অ্যাসপারজিলাস',
      'ব্যাসিলাস অ্যামাইলোলিকুইফ্যাসিয়েন্স', 'ব্যাসিলাস সার্কুলান্স', 'ব্যাসিলাস লিচেনিফরমিস', 'ব্যাসিলাস মেগাটেরিয়াম', 'ব্যাসিলাস পলিমিক্সা', 'ব্যাসিলাস সাবটিলিস', 'ব্যাসিলাস',
      'ল্যাক্টোব্যাসিলাস অ্যাসিডোফিলাস', 'ল্যাক্টোব্যাসিলাস হেলভেটিকাস', 'ল্যাক্টোব্যাসিলাস ল্যাকটিস', 'ল্যাক্টোব্যাসিলাস',
      'নাইট্রোব্যাক্টার', 'নাইট্রোসোমোনাস',
      'প্যারাকোক্কাস ডেনিট্রিফিকান্স', 'রোডোভ্যাক্টার',
      'স্যাকারোমাইসেস সেরিমিসিয়া'
    ];

    banglaStrains.forEach(strain => {
      const regex = new RegExp(strain, 'g');
      formatted = formatted.replace(regex, `<span class="font-bold text-slate-900">${strain}</span>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  // 1. Separate common leading sentences/prefixes to avoid rendering them inside the first item badge.
  let prefix = '';
  let cleanStr = composition;
  const prefixRegex = /^(Each\s+(\d+\s*\w+|\w+)\s+contains|প্রতি\s+(\d+\s*\w+|\w+)\s+রয়েছে|প্রতি\s+৫০০\s+গ্রামে\s+রয়েছে|প্রতি\s+১\s+কেজিতে\s+রয়েছে)\s*:\s*/i;
  const match = cleanStr.match(prefixRegex);
  if (match) {
    prefix = match[0];
    cleanStr = cleanStr.replace(prefixRegex, '');
  }

  // 2. Temporarily replace thousands separators (commas between digits or Bangla digits) to avoid splitting on them
  const processed = cleanStr.replace(/([\d\u09E6-\u09EF]),([\d\u09E6-\u09EF])/g, '$1__TEMP_COMMA__$2');

  // 3. Split by commas, plus signs, sentence enders (। or . followed by space), and "and/এবং"
  const splitRegex = /,\s*|\s*\+\s*|\s+and\s+|\s+এবং\s+|।\s*|\s+\.\s+(?=[A-Z\u0980-\u09FF])/gi;
  const rawItems = processed.split(splitRegex);

  // 4. Restore thousands separators and clean up section headers
  const items = rawItems
    .map(part => {
      let restored = part.replace(/__TEMP_COMMA__/g, ',').trim();
      restored = restored.replace(/^(Chemical Composition|রাসায়নিক উপাদানসমূহ)\s*:\s*/i, '');
      return restored.trim();
    })
    .filter(part => part.length > 0);

  // If there's only 1 item or it's short, display it directly
  if (items.length <= 1 || composition.length < 50) {
    return (
      <div className="flex flex-col gap-2 pt-1">
        {prefix && (
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-650 mb-1">
            <FlaskConical size={14} className="text-[#e11922] shrink-0" />
            <span>{prefix.replace(/:\s*$/, '')}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          {!prefix && <FlaskConical size={16} className="text-[#e11922] shrink-0" />}
          <span className="text-xs sm:text-sm text-slate-850 font-bold leading-relaxed">
            {formatElement(cleanStr)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pt-1 max-w-full">
      {prefix && (
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-650 mb-1">
          <FlaskConical size={14} className="text-[#e11922] shrink-0" />
          <span>{prefix.replace(/:\s*$/, '')}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-2 max-w-full">
        {items.map((item, index) => {
          let hasBadge = false;
          let badgeText = '';
          let mainName = item;
          
          const badgeMatch = item.match(/\(([^)]+)\)/);
          if (badgeMatch) {
            hasBadge = true;
            badgeText = badgeMatch[1];
            mainName = item.replace(/\s*\([^)]+\)/g, '').trim();
          }

          return (
            <div
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-brand-red/30 transition-all duration-200"
            >
              <span className="text-xs text-slate-700 font-semibold leading-none">
                {formatElement(mainName)}
              </span>
              {hasBadge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-brand-red/10 text-[#e11922] font-black uppercase tracking-wide leading-none">
                  {formatElement(badgeText)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductDetailClient({ id }: { id: string }) {
  const { lang, setLang } = useLanguage();


  // States for accordions
  const [openSection, setOpenSection] = useState<'desc' | 'instruction' | 'specs' | null>('desc');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // States for Oxygen & Dosage Calculator
  const [pondSize, setPondSize] = useState<number>(33); // 33 decimals default
  const [pondUnit, setPondUnit] = useState<'decimal' | 'acre'>('decimal');
  const [fishBiomass, setFishBiomass] = useState<number>(500); // 500 kg default

  // Retrieve current product
  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id);
  }, [id]);

  // Retrieve related products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== id).slice(0, 3);
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
          <div className="text-center p-8 max-w-md bg-slate-50 rounded-3xl border border-slate-200">
            <HelpCircle size={48} className="mx-auto text-brand-red mb-4" />
            <h1 className="text-2xl font-black text-slate-900">
              {lang === 'bn' ? 'পণ্যটি খুঁজে পাওয়া যায়নি' : 'Product Not Found'}
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              {lang === 'bn'
                ? 'অনুরোধকৃত প্রোডাক্ট কোডটি ভুল অথবা এটি ডাটাবেজে তালিকাভুক্ত নয়।'
                : 'The product with requested parameters is unavailable.'}
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold transition-all hover:bg-[#b0131b]"
            >
              <ArrowLeft size={14} />
              <span>{lang === 'bn' ? 'পণ্য তালিকায় ফিরে যান' : 'Back to Products'}</span>
            </Link>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  const details = lang === 'bn' ? product.bn : product.en;

  const handleProductWhatsApp = (prod: Product) => {
    const pDetails = lang === 'bn' ? prod.bn : prod.en;
    const preMessage = lang === 'bn'
      ? `হ্যালো এক্সপার্ট বায়োসাইন্স,\nআমি আপনাদের পণ্য "${pDetails.title}" কিনতে চাই এবং পরামর্শের জন্য যুক্ত হতে চাই।`
      : `Hello Expert BioScience,\nI would like to order or consult about your product: "${pDetails.title}".`;
    const whatsappUrl = `https://wa.me/8801911865076?text=${encodeURIComponent(preMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDoctorWhatsApp = () => {
    const preMessage = lang === 'bn'
      ? `হ্যালো এক্সপার্ট অ্যাকুয়া ডক্টর ডেস্ক,\nআমি আমার পুকুরের রোগ ও পণ্য "${details.title}" এর ডোজ সম্পর্কে সুনির্দিষ্ট পরামর্শ চাই।`
      : `Hello Expert Aqua-Vets Desk,\nI would like a detailed clinical consulting plan regarding the medication "${details.title}" in my pond.`;
    const whatsappUrl = `https://wa.me/8801911865076?text=${encodeURIComponent(preMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Safe fetch of dynamic product FAQs
  const currentFaqs = PRODUCT_FAQS[product.id] ? PRODUCT_FAQS[product.id][lang] : [
    {
      q: lang === 'bn' ? 'এটি কীভাবে ব্যবহার করতে হয়?' : 'What is the dosage for fish farms?',
      a: details.dosage
    },
    {
      q: lang === 'bn' ? 'পণ্যটির গুণমান কেমন?' : 'Is it certified for sustainable fish farming?',
      a: lang === 'bn' ? 'হ্যাঁ, এটি আন্তর্জাতিক উৎপাদন মানদণ্ড বজায় রেখে প্রস্তুত করা হয়েছে।' : 'Yes, our premium bio-additives target optimal conversions with zero chemical decay.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#cbd5e1] selection:text-black">
      {/* Navbar layer */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Decorative Wave Header Layout */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none select-none"></div>

      {/* Main Detail Area */}
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation - Styled with apifishcare inspired clean details */}
          <nav className="flex items-center gap-2 py-4 mb-8 text-xs font-semibold text-slate-500 font-sans border-b border-slate-100 bg-white/50 backdrop-blur-sm sticky top-16 z-20">
            <Link href="/" className="hover:text-brand-red flex items-center gap-1 transition-colors">
              <Home size={12} />
              <span>{lang === 'bn' ? 'হোম' : 'Home'}</span>
            </Link>
            <ChevronRight size={12} className="text-slate-300" />
            <Link href="/products" className="hover:text-brand-red transition-colors">
              <span>{lang === 'bn' ? 'পণ্য সামগ্রী' : 'Products'}</span>
            </Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-slate-900 font-extrabold truncate max-w-[200px] sm:max-w-none">
              {details.title.split(' (')[0]}
            </span>
          </nav>

          {/* Product Overview Section: Splitted Columns (12 grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-2">
            
            {/* Column Left (Col 5): Large visual placeholder container with badges */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative overflow-hidden rounded-[24px] shadow-lg border border-slate-200/60 bg-white p-6 md:p-8">
                {/* Ribbon badge mirroring apifishcare packages */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#e11922] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border border-white/10 select-none">
                  <Award size={10} />
                  <span>{lang === 'bn' ? 'গ্যারান্টিড অরিজিনাল' : 'Guaranteed Premium'}</span>
                </div>

                <div className="absolute top-4 right-4 z-10 text-[10px] uppercase tracking-widest font-extrabold text-slate-400 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                  {details.origin}
                </div>

                {/* Main Package Artwork */}
                <div className={`relative h-72 sm:h-80 rounded-2xl bg-gradient-to-br ${product.imagePlaceholderColor} overflow-hidden flex flex-col justify-between p-6 shadow-2xl border border-white/5`}>
                  {/* Ripples design */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs text-white/80 font-mono tracking-widest uppercase">{details.category}</span>
                    <span className="text-xs text-white font-black drop-shadow tracking-widest">EXPERT BIOMIN®</span>
                  </div>

                  <div className="flex flex-col z-10 text-left">
                    <span className="text-3xl md:text-4xl font-black text-white drop-shadow-lg tracking-tight uppercase leading-none">
                      {product.id.toUpperCase()}
                    </span>
                    <span className="text-xs text-[#ffebee] tracking-widest font-black mt-2 leading-none uppercase drop-shadow font-sans">
                      {details.title.split(' (')[0]}
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-white/95 font-bold z-10 border-t border-white/20 pt-3">
                    <div className="flex items-center gap-1">
                      <Weight size={12} />
                      <span className="tracking-wide uppercase font-black">{details.packSize}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of micro highlights (thumbnails) underneath */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center font-sans space-y-1">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {lang === 'bn' ? 'প্রস্তুতকারক' : 'Manufactured'}
                  </span>
                  <span className="block text-[11px] font-black text-slate-800 truncate">
                    {details.origin}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center font-sans space-y-1">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {lang === 'bn' ? 'প্যাকেজিং' : 'Pack Size'}
                  </span>
                  <span className="block text-[11px] font-black text-slate-800 truncate">
                    {details.packSize.split(' / ')[0]}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center font-sans space-y-1">
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {lang === 'bn' ? 'নিরাপত্তা কোড' : 'Bio-Security'}
                  </span>
                  <span className="block text-[11px] font-black text-brand-red truncate uppercase font-mono">
                    ISO-9001
                  </span>
                </div>
              </div>
            </div>

            {/* Column Right (Col 7): Metadata coordinates & call-to-actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Heading coordinate block */}
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/15 text-[#e11922] text-xs font-black uppercase tracking-wider font-sans">
                  {details.category}
                </span>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight pt-1 font-sans">
                  {details.title}
                </h1>

                {/* Slogan unique design line */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic border-l-4 border-brand-red pl-3 pt-1">
                  {details.description}
                </p>
              </div>

              {/* Composition and Manufacturer matrix info panel */}
              <div className="p-5 sm:p-6 rounded-[24px] bg-slate-50 border border-slate-200 font-sans space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3 gap-4 flex-wrap sm:flex-nowrap">
                  <div className="flex items-center gap-2">
                    <FlaskConical size={18} className="text-brand-red" />
                    <span className="text-[11px] sm:text-xs uppercase font-black text-slate-500 tracking-wider">
                      {lang === 'bn' ? 'প্রধান রাসায়নিক ফর্মুলা ও উপাদান' : 'Active Formulation & Chemical Matrix'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {lang === 'bn' ? 'দেশ:' : 'Origin:'}
                    </span>
                    <span className="text-[11px] font-black text-[#e11922] bg-brand-red/10 px-2.5 py-1 rounded-full uppercase">
                      {details.origin}
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <CompositionDisplay composition={details.composition} lang={lang} />
                </div>
              </div>

              {/* High-contrast packaging options list */}
              <div className="space-y-2">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider pl-0.5">
                  {lang === 'bn' ? 'প্যাকেজিং জোন অপশন' : 'Available Dosage Pack'}
                </span>
                <div className="flex flex-wrap gap-2 pt-1 font-sans">
                  {details.packSize.split(' / ').map((ps, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2.5 rounded-xl border-2 border-brand-red/30 bg-brand-red/5 text-[#e11922] text-xs font-extrabold flex items-center gap-1.5 shadow-sm"
                    >
                      <Weight size={13} />
                      <span className="uppercase">{ps}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Impact Actions Block */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => handleProductWhatsApp(product)}
                    className="py-3.5 rounded-xl bg-[#e11922] hover:bg-[#b0131b] text-white text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 shadow-md shadow-brand-red/15 cursor-pointer leading-none"
                  >
                    <MessageCircle size={18} />
                    <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে অর্ডার দিন' : 'Order via WhatsApp'}</span>
                  </button>

                  <button
                    onClick={handleDoctorWhatsApp}
                    className="py-3.5 rounded-xl bg-white border border-slate-350 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer leading-none"
                  >
                    <ShieldCheck size={18} className="text-brand-red animate-pulse" />
                    <span>{lang === 'bn' ? 'ডক্টরস মৎস্য পরামর্শ' : 'Specialist Consultant Docs'}</span>
                  </button>
                </div>

                <div className="bg-brand-red/5 p-3 rounded-xl border border-brand-red/15 flex items-start gap-2">
                  <CheckCircle size={14} className="text-brand-red shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-normal text-left">
                    {lang === 'bn'
                      ? 'আমাদের মৎস্য রোগ চিকিৎসাবিদ্যা ডেস্ক ২৪/৭ খোলা থাকে। যেকোনো জরুরি ডোজিং তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।'
                      : 'Ask our veterinary consultants of Mymensingh, Natore and Dhaka depots to resolve pond diseases.'}
                  </p>
                </div>
              </div>

            </div>

          </div>

                    {/* Static Details Layout (Always fully visible, no tabs or accordions) */}
          <div className="mt-16 border-t border-slate-200 pt-10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card 1: Description & Benefits */}
              <div className="bg-slate-50/40 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                  <Info size={20} className="text-brand-red shrink-0" />
                  <h3 className="text-lg font-black text-slate-900">
                    {lang === 'bn' ? 'পণ্যের বিস্তারিত বর্ণনা' : 'Product Description'}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {details.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wide border-b border-slate-150 pb-1 flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-brand-red" />
                    {lang === 'bn' ? 'মূল উপকারিতা ও সুবিধা সমূহ' : 'Key Pharmacological Benefits'}
                  </h4>
                  <ul className="space-y-2.5">
                    {details.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle size={14} className="text-brand-red mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {details.symptoms && details.symptoms.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-200/60">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wide border-b border-slate-150 pb-1 flex items-center gap-1.5">
                      <AlertTriangle size={16} className="text-amber-500 shrink-0" />
                      {lang === 'bn' ? 'আক্রান্ত হওয়ার লক্ষণসমূহ' : 'Symptoms of Infection'}
                    </h4>
                    <ul className="space-y-2.5">
                      {details.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0 animate-pulse" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card 2: Application, Dosage & Mode of Action */}
              <div className="bg-slate-50/40 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                  <Activity size={20} className="text-brand-red shrink-0" />
                  <h3 className="text-lg font-black text-slate-900">
                    {lang === 'bn' ? 'প্রয়োগ মাত্রা ও পদ্ধতি এবং কার্যপ্রণালী' : 'Dosage, Application & Mode of Action'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Dosage Block */}
                  <div className="p-4 rounded-2xl bg-brand-red/5 border border-brand-red/10">
                    <strong className="block text-[#e11922] font-black uppercase text-xs tracking-wider mb-1.5 flex items-center gap-1 font-sans">
                      <Droplets size={14} />
                      {lang === 'bn' ? 'প্রয়োগ মাত্রা ও পদ্ধতি:' : 'Dosage & Method of Application:'}
                    </strong>
                    
                    {product.id === 'deltam' ? (
                      <div>
                        <div className="overflow-x-auto mt-3 rounded-xl border border-slate-200 bg-white">
                          <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm text-left">
                            <thead className="bg-slate-50">
                              <tr>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'পোকার নাম' : 'Pest Name'}</th>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'এরিয়া' : 'Area'}</th>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'গভীরতা' : 'Depth'}</th>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'মাত্রা' : 'Dosage'}</th>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'পদ্ধতি' : 'Method'}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 font-bold text-slate-600 bg-white">
                              <tr>
                                <td className="px-3.5 py-3 whitespace-nowrap text-slate-900">{lang === 'bn' ? 'উকুন, কৃমি ও মশা' : 'Lice, worms & mosquitoes'}</td>
                                <td className="px-3.5 py-3 whitespace-nowrap">{lang === 'bn' ? '১০০ শতক' : '100 Decimal'}</td>
                                <td className="px-3.5 py-3 whitespace-nowrap">{lang === 'bn' ? '৩-৫ ফুট' : '3-5 ft'}</td>
                                <td className="px-3.5 py-3 whitespace-nowrap text-[#e11922] font-black">{lang === 'bn' ? '৪০-৫০ মিলি' : '40-50 ml'}</td>
                                <td className="px-3.5 py-3 text-slate-500 font-semibold">{lang === 'bn' ? 'পরিমাণমত পানিতে মিশিয়ে স্প্রে' : 'Mix with sufficient water and spray'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-slate-500 text-xs mt-3 italic font-semibold">
                          {lang === 'bn' ? '* প্রয়োজনে, বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।' : '* If needed, use as recommended by an aquaculture expert.'}
                        </p>
                      </div>
                    ) : product.id === 'killer-phos' ? (
                      <div>
                        <div className="overflow-x-auto mt-3 rounded-xl border border-slate-200 bg-white">
                          <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm text-left">
                            <thead className="bg-slate-50">
                              <tr>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'চাষের ধরন / ফসল' : 'Application / Sector'}</th>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'মাত্রা' : 'Dosage'}</th>
                                <th className="px-3.5 py-2.5 font-black text-slate-700 uppercase tracking-wider">{lang === 'bn' ? 'প্রয়োগ পদ্ধতি ও ফ্রিকোয়েন্সি' : 'Application Method & Notes'}</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 font-bold text-slate-600 bg-white">
                              <tr>
                                <td className="px-3.5 py-3 whitespace-nowrap text-slate-900 font-extrabold">{lang === 'bn' ? 'ফসলে (Crops)' : 'Crops'}</td>
                                <td className="px-3.5 py-3 text-[#e11922] font-black">{lang === 'bn' ? '১ লিটার পানির সাথে ২-৩ মি.লি.' : '2-3 ml per Liter of water'}</td>
                                <td className="px-3.5 py-3 text-slate-500 font-semibold">{lang === 'bn' ? 'সকালে বা বিকেলে স্প্রে করুন। ৭-১০ দিন পর একই মাত্রায় দ্বিতীয় ডোজ প্রয়োগ করুন।' : 'Spray in the morning or afternoon. Apply second dose after 7-10 days.'}</td>
                              </tr>
                              <tr>
                                <td className="px-3.5 py-3 whitespace-nowrap text-slate-900 font-extrabold">{lang === 'bn' ? 'মাছ চাষে (Aquaculture)' : 'Fish Cultivation'}</td>
                                <td className="px-3.5 py-3 text-[#e11922] font-black">{lang === 'bn' ? 'প্রতি শতকে ২-৩ মি.লি. (৩-৫ ফুট গভীরতায়)' : '2-3 ml per Decimal (for 3-5 ft depth)'}</td>
                                <td className="px-3.5 py-3 text-slate-500 font-semibold">{lang === 'bn' ? 'অথবা বিশেষজ্ঞের পরামর্শ অনুযায়ী ব্যবহার্য।' : 'Or as recommended by an aquaculture expert.'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-3 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-800 leading-relaxed flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1.5 animate-pulse" />
                          <p>
                            {lang === 'bn' ? (
                              <strong>চিংড়ির খামারে, যেকোনো নার্সিং পুকুরে, চাপিলা/পাবদা মাছের খামারে এবং যেকোনো পোনা মাছের পুকুরে প্রয়োগ সম্পূর্ণ নিষেধ।</strong>
                            ) : (
                              <strong>Strictly prohibited in shrimp farms, any nursing/nursery ponds, Chapila/Pabda fish farms, and any fry rearing ponds.</strong>
                            )}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed whitespace-pre-line">{details.dosage}</p>
                    )}
                  </div>

                  {/* Precautions / Caution Box */}
                  {(product.id === 'deltam' || (details.precautions && details.precautions.length > 0)) && (
                    <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-400 space-y-3">
                      <strong className="text-amber-800 font-black uppercase text-xs tracking-wider flex items-center gap-1.5 font-sans">
                        <AlertTriangle size={16} className="text-amber-600 animate-pulse" />
                        {lang === 'bn' ? 'সাবধানতা / সতর্কতা:' : 'Precautions / Caution:'}
                      </strong>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-amber-900 space-y-1.5 font-bold leading-relaxed">
                        {details.precautions && details.precautions.length > 0 ? (
                          details.precautions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))
                        ) : lang === 'bn' ? (
                          <>
                            <li>শিশুদের নাগালের বাইরে রাখুন।</li>
                            <li>ডেল্টাম (Deltam) ব্যবহারকালীন ধূমপান বা কোন কিছু খাওয়া থেকে বিরত থাকুন।</li>
                            <li>এর গন্ধ নেওয়া বা স্বাদ গ্রহণ সম্পূর্ণ নিষেধ।</li>
                            <li>ডেল্টাম (Deltam) ব্যবহারের সময়ে নিরাপত্তা পোশাক, মাস্ক ও চশমা পরিধান করুন।</li>
                          </>
                        ) : (
                          <>
                            <li>Keep out of reach of children.</li>
                            <li>Avoid smoking or eating anything while using Deltam.</li>
                            <li>Inhaling its smell or tasting it is strictly prohibited.</li>
                            <li>Wear protective clothing, mask, and goggles while using Deltam.</li>
                          </>
                        )}
                      </ul>
                      {details.statutoryWarning && (
                        <div className="pt-2.5 mt-2.5 border-t border-amber-200 text-xs text-amber-700/90 font-bold font-sans flex items-center gap-1.5 uppercase tracking-wide">
                          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                          <span>
                            {lang === 'bn' ? 'সংবিধিবদ্ধ সতর্কীকরণ: ' : 'Statutory Warning: '}
                            {details.statutoryWarning}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mode of Action Block (Render conditionally) */}
                  {details.modeOfAction && (
                    <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200">
                      <strong className="block text-slate-800 font-black uppercase text-xs tracking-wider mb-1.5 flex items-center gap-1">
                        <FlaskConical size={14} className="text-brand-red" />
                        {lang === 'bn' ? 'কার্যপ্রণালী (Mode of Action):' : 'Mode of Action:'}
                      </strong>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{details.modeOfAction}</p>
                    </div>
                  )}
                </div>

                {/* Visual Guidelines & Storage Cards (Three highlighted parameters) */}
                {(details.optimalTime || details.specialNote || details.storage) && (
                  <div className="mt-6 pt-5 border-t border-slate-200/60 space-y-3">
                    {/* Item 1: Best Application Time */}
                    {details.optimalTime && (
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/50">
                        <Clock size={16} className="text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[11px] font-black text-amber-800 uppercase tracking-wide">
                            {lang === 'bn' ? 'প্রয়োগের উপযুক্ত সময়:' : 'Optimal Application Time:'}
                          </strong>
                          <p className="text-slate-700 text-xs sm:text-sm font-bold mt-0.5">
                            {details.optimalTime}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Item 2: Special Guidelines */}
                    {details.specialNote && (
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200/50">
                        <AlertTriangle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[11px] font-black text-rose-800 uppercase tracking-wide">
                            {lang === 'bn' ? 'বিশেষ নির্দেশিকা:' : 'Special Guidelines:'}
                          </strong>
                          <p className="text-slate-700 text-xs sm:text-sm font-bold mt-0.5 leading-normal">
                            {details.specialNote}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Item 3: Storage */}
                    {details.storage && (
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0284c7]/5 border border-[#0284c7]/15">
                        <Sun size={16} className="text-[#0284c7] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[11px] font-black text-[#0284c7] uppercase tracking-wide">
                            {lang === 'bn' ? 'সংরক্ষণ:' : 'Storage:'}
                          </strong>
                          <p className="text-slate-700 text-xs sm:text-sm font-bold mt-0.5 leading-normal">
                            {details.storage}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>

            {/* Specifications & Certifications Block */}
            <div className="bg-slate-50/40 border border-slate-200 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200 mb-6">
                <Award size={20} className="text-brand-red shrink-0" />
                <h3 className="text-lg font-black text-slate-900">
                  {lang === 'bn' ? 'ফর্মুলেশন ডকুমেন্টস ও কোয়ালিটি কন্ট্রোল' : 'Documents & Quality Certifications'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <span className="font-extrabold text-slate-800 block text-xs uppercase tracking-wider text-slate-400">{lang === 'bn' ? 'ল্যাবরেটরি অনুমোদন:' : 'Laboratory Grade:'}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 block mt-2">ISO 9001:2015 Aquaculture GMP Standard</span>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <span className="font-extrabold text-slate-850 block text-xs uppercase tracking-wider text-slate-400">{lang === 'bn' ? 'রেসিডিউ নোটিস:' : 'Zero Residues Status:'}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-850 block mt-2">100% Biodegradable, Non-toxic, Environment safe</span>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <span className="font-extrabold text-slate-800 block text-xs uppercase tracking-wider text-slate-400">{lang === 'bn' ? 'নিবন্ধিত বাজারজাতকারী:' : 'Registered Marketer:'}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 block mt-2">
                    {lang === 'bn' ? 'এক্সপার্ট বায়োসাইন্স লিমিটেড, বাংলাদেশ।' : 'Expert Bioscience Limited, Bangladesh.'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific Oxygen Demand & Oxyadd Dosage Calculator */}
          {product.id === 'oxyadd' && (
            <div id="oxygen-calculator" className="mt-16 border-t border-slate-200 pt-16 font-sans">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-2 mb-10 max-w-xl mx-auto">
                  <span className="text-xs uppercase tracking-widest text-blue-600 font-extrabold flex items-center justify-center gap-1.5 leading-none">
                    <Calculator size={14} className="text-blue-600" />
                    {lang === 'bn' ? 'বিজ্ঞানসম্মত ক্যালকুলেটর' : 'Scientific Bio-Calculator'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {lang === 'bn' 
                      ? 'অক্সিজেন চাহিদা ও অক্সিএড ডোজ ক্যালকুলেটর' 
                      : 'O2 Demand & Oxyadd Dosage Calculator'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {lang === 'bn'
                      ? 'আপনার পুকুরের আয়তন ও মাছের ওজনের ওপর ভিত্তি করে অক্সিজেনের প্রকৃত চাহিদা এবং অক্সিএড এর প্রয়োজনীয় ডোজ হিসাব করুন।'
                      : 'Calculate precise dissolved oxygen (DO) demand of your fish biomass and the corresponding Oxyadd dosage.'}
                  </p>
                </div>

                {/* Calculator Body Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Inputs Block */}
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-[24px] border border-slate-200 flex flex-col justify-between space-y-6 text-left shadow-xs">
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
                        <Activity size={16} className="text-blue-500" />
                        {lang === 'bn' ? 'পুকুর ও মাছের প্যারামিটার' : 'Pond & Fish Parameters'}
                      </h3>

                      {/* Input 1: Pond Size with Unit Toggle */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-xs sm:text-sm font-extrabold text-slate-700">
                            {lang === 'bn' ? 'পুকুরের আয়তন' : 'Pond Size'}
                          </label>
                          <div className="flex bg-slate-200 rounded-lg p-0.5 border border-slate-300">
                            <button
                              type="button"
                              onClick={() => {
                                setPondUnit('decimal');
                                if (pondUnit === 'acre') setPondSize(Math.round(pondSize * 100));
                              }}
                              className={`px-2.5 py-1 text-[10px] font-black rounded-md transition-all cursor-pointer ${
                                pondUnit === 'decimal' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              {lang === 'bn' ? 'শতক' : 'Decimal'}
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setPondUnit('acre');
                                if (pondUnit === 'decimal') setPondSize(Math.max(1, Math.round(pondSize / 10) / 10));
                              }}
                              className={`px-2.5 py-1 text-[10px] font-black rounded-md transition-all cursor-pointer ${
                                pondUnit === 'acre' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              {lang === 'bn' ? 'একর' : 'Acre'}
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min={pondUnit === 'decimal' ? "5" : "0.1"}
                            max={pondUnit === 'decimal' ? "300" : "5"}
                            step={pondUnit === 'decimal' ? "1" : "0.1"}
                            value={pondSize}
                            onChange={(e) => setPondSize(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                          />
                          <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3 py-1.5 min-w-[110px] justify-between">
                            <input
                              type="number"
                              value={pondSize}
                              onChange={(e) => setPondSize(Math.max(0, Number(e.target.value)))}
                              className="w-full text-xs font-black text-slate-800 focus:outline-hidden text-center"
                            />
                            <span className="text-[10px] font-bold text-slate-400 ml-1">
                              {pondUnit === 'decimal' ? (lang === 'bn' ? 'শতক' : 'Dec') : (lang === 'bn' ? 'একর' : 'Acr')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Input 2: Fish Biomass */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-xs sm:text-sm font-extrabold text-slate-700">
                            {lang === 'bn' ? 'মোট মাছের আনুমানিক ওজন (বায়োমাস)' : 'Estimated Fish Biomass (Weight)'}
                          </label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min="50"
                            max="5000"
                            step="50"
                            value={fishBiomass}
                            onChange={(e) => setFishBiomass(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                          />
                          <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3 py-1.5 min-w-[110px] justify-between">
                            <input
                              type="number"
                              value={fishBiomass}
                              onChange={(e) => setFishBiomass(Math.max(0, Number(e.target.value)))}
                              className="w-full text-xs font-black text-slate-800 focus:outline-hidden text-center"
                            />
                            <span className="text-[10px] font-bold text-slate-400 ml-1">
                              KG
                            </span>
                          </div>
                        </div>
                        {/* Quick Presets */}
                        <div className="flex gap-2 pt-1">
                          {[200, 500, 1000, 2000].map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => setFishBiomass(preset)}
                              className={`px-3 py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer ${
                                fishBiomass === preset
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {preset} KG
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Scientific Notice footer */}
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-start gap-2">
                      <FlaskConical size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] sm:text-[11px] text-slate-600 leading-relaxed text-left">
                        {lang === 'bn'
                          ? 'তাত্ত্বিক ভিত্তি: ১ কেজি জীবিত মাছ প্রতি ঘণ্টায় প্রায় ৩০০–৫০০ মিগ্রা. অক্সিজেন গ্রহণ করে। ১ কেজি সোডিয়াম পার-কার্বনেট বিক্রিয়া করে পানিতে প্রায় ১৫৩ গ্রাম বিশুদ্ধ অক্সিজেন নিঃসরণ করে।'
                          : 'Theoretical basis: 1 kg of live fish absorbs 300–500 mg of oxygen per hour. 1 kg of active Sodium Percarbonate releases ~153g of pure dissolved O2.'}
                      </p>
                    </div>
                  </div>

                  {/* Outputs Block */}
                  <div className="bg-gradient-to-b from-[#f0f9ff] to-white p-6 sm:p-8 rounded-[24px] border border-blue-100 flex flex-col justify-between space-y-6 text-left shadow-sm">
                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-blue-100 pb-2 flex items-center gap-2">
                        <Droplets size={16} className="text-blue-500" />
                        {lang === 'bn' ? 'অক্সিজেন চাহিদা বিশ্লেষণ' : 'Oxygen Demand Insights'}
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Hourly demand output */}
                        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            {lang === 'bn' ? 'ঘণ্টাপ্রতি অক্সিজেন চাহিদা' : 'Hourly O2 Consumption'}
                          </span>
                          <span className="text-lg sm:text-xl font-black text-slate-800 block">
                            {(fishBiomass * 300 / 1000).toFixed(1)} - {(fishBiomass * 500 / 1000).toFixed(1)}
                          </span>
                          <span className="text-[10px] text-slate-500 block font-semibold">
                            {lang === 'bn' ? 'গ্রাম / ঘণ্টা (g/hr)' : 'Grams / Hour (g/hr)'}
                          </span>
                        </div>

                        {/* Daily demand output */}
                        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            {lang === 'bn' ? 'দৈনিক (২৪ঘণ্টা) O2 চাহিদা' : 'Daily O2 Consumption'}
                          </span>
                          <span className="text-lg sm:text-xl font-black text-slate-800 block">
                            {(fishBiomass * 7 / 1000).toFixed(1)} - {(fishBiomass * 12 / 1000).toFixed(1)}
                          </span>
                          <span className="text-[10px] text-slate-500 block font-semibold">
                            {lang === 'bn' ? 'কেজি / দিন (kg/day)' : 'KG / Day (kg/day)'}
                          </span>
                        </div>
                      </div>

                      {/* Chemical dosage conversion results */}
                      <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100/50 space-y-3">
                        <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider block border-b border-blue-100/60 pb-1">
                          {lang === 'bn' ? 'সোডিয়াম পার-কার্বনেট (Oxyadd) হিসাব:' : 'Oxyadd (Sodium Percarbonate) Equivalents:'}
                        </span>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs text-slate-700">
                            <span>
                              {lang === 'bn' ? '১ ঘণ্টার মোট O2 চাহিদার সমতুল্য ডোজ:' : 'To supply 1 hour of fish breathing:'}
                            </span>
                            <span className="font-extrabold text-slate-900">
                              {Math.round(((fishBiomass * 300 / 1000) / 153) * 1000)} - {Math.round(((fishBiomass * 500 / 1000) / 153) * 1000)} {lang === 'bn' ? 'গ্রাম' : 'grams'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-700">
                            <span>
                              {lang === 'bn' ? 'আপনার পুকুরের সাধারণ প্রতিরোধক ডোজ:' : 'Standard Preventive Dosage:'}
                            </span>
                            <span className="font-extrabold text-slate-900">
                              {Math.round((pondUnit === 'acre' ? pondSize : pondSize / 100) * 250)} - {Math.round((pondUnit === 'acre' ? pondSize : pondSize / 100) * 500)} {lang === 'bn' ? 'গ্রাম' : 'grams'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-700 border-t border-slate-200/50 pt-2">
                            <span className="font-bold text-blue-800">
                              {lang === 'bn' ? 'জরুরি ভাসমান অবস্থায় প্রয়োগ ডোজ:' : 'Pond Emergency Gulping Dosage:'}
                            </span>
                            <span className="font-extrabold text-[#e11922] bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                              {Math.round((pondUnit === 'acre' ? pondSize : pondSize / 100) * 500)} - {Math.round((pondUnit === 'acre' ? pondSize : pondSize / 100) * 700)} {lang === 'bn' ? 'গ্রাম' : 'grams'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order via whatsapp short link */}
                    <button
                      onClick={() => handleProductWhatsApp(product)}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs leading-none"
                    >
                      <MessageCircle size={15} />
                      <span>{lang === 'bn' ? 'অক্সিএড অক্সিজেন অর্ডার করুন' : 'Order Oxyadd Now'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Frequently Asked Questions (FAQ) Section - High-Contrast Styling */}
          <section className="mt-20 border-t border-slate-200 pt-16 font-sans">
            <div className="max-w-3xl mx-auto text-left space-y-8">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#e11922] font-black block">
                  {lang === 'bn' ? 'সচরাচর জিজ্ঞাসিত প্রশ্ন' : 'Frequently Asked Questions (FAQs)'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {lang === 'bn' 
                    ? `সচরাচর জিজ্ঞাসা ও উত্তর` 
                    : `Common Queries about ${product.id.toUpperCase()}`}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  {lang === 'bn'
                    ? 'আমাদের বিশেষজ্ঞদের দ্বারা প্রস্তুতকৃত নির্দিষ্ট প্রশ্ন ও উত্তর জেনে আপনার রোগ উপশমে সঠিক সিদ্ধান্ত নিন।'
                    : 'Get precise scientific answers regarding product efficacy, safety, and water metrics.'}
                </p>
              </div>

              {/* Accordion container */}
              <div className="space-y-3 pt-6">
                {currentFaqs.map((faq, index) => {
                  const isExpanded = expandedFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExpanded ? null : index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-sans font-bold text-slate-800 bg-slate-50/20 hover:bg-slate-50/50 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm pr-4 font-black text-slate-800 flex items-center gap-2">
                          <HelpCircle size={15} className="text-brand-red shrink-0" />
                          {faq.q}
                        </span>
                        <span className="shrink-0 text-slate-400">
                          {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-4 sm:p-5 border-t border-slate-150 bg-white/50 text-[11px] sm:text-xs text-slate-600 leading-relaxed text-left pl-6 sm:pl-10">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Related Formulations section */}
          <section className="mt-24 border-t border-slate-200 pt-16">
            <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-[#e11922] font-black block">
                  {lang === 'bn' ? 'অন্যান্য পণ্যসমূহ' : 'Alternative Treatments Matrix'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {lang === 'bn' ? 'সংশ্লিষ্ট মৎস্য চিকিৎসাসমূহ' : 'Related Scientific Formulations'}
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-brand-red hover:underline shrink-0 text-left cursor-pointer"
              >
                {lang === 'bn' ? 'সকল প্রিমিয়াম ক্যাটালগ দেখুন ➔' : 'View All Premium Categories ➔'}
              </Link>
            </div>

            {/* Related Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              {relatedProducts.map((rel) => {
                const relDetails = lang === 'bn' ? rel.bn : rel.en;
                return (
                  <div
                    key={rel.id}
                    className="group border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between hover:border-brand-red/30 hover:shadow-md transition-all text-left bg-white"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start text-[10px]">
                        <span className="text-[10px] font-bold text-brand-red uppercase">
                          {relDetails.category}
                        </span>
                        <span className="font-extrabold text-[#e11922]">{relDetails.origin}</span>
                      </div>

                      <div className={`h-28 rounded-xl bg-gradient-to-br ${rel.imagePlaceholderColor} overflow-hidden p-3 flex flex-col justify-end relative shadow-inner border border-white/5`}>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        <span className="text-base font-black text-white relative z-10 uppercase">{rel.id}</span>
                        <span className="text-[9px] text-[#ffebee] relative z-10 truncate block">{relDetails.title.split(' (')[0]}</span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-red transition-colors">
                        {relDetails.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {relDetails.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-slate-100">
                      <Link
                        href={`/products/${rel.id}`}
                        className="py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-black transition-all flex items-center justify-center cursor-pointer"
                      >
                        {lang === 'bn' ? 'বিস্তারিত দেখুন' : 'See Details'}
                      </Link>
                      <button
                        onClick={() => handleProductWhatsApp(rel)}
                        className="py-1.5 rounded-lg bg-[#e11922] hover:bg-[#b0131b] text-white text-[10px] font-black transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <MessageCircle size={10} />
                        <span>{lang === 'bn' ? 'অর্ডার' : 'Order'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
