'use client';

import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Clock, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogProps {
  lang: 'bn' | 'en';
}

interface BlogPost {
  id: string;
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
  colorTheme: string;
  publishDate: string;
}

export default function Blog({ lang }: BlogProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const posts: BlogPost[] = [
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
        title: 'পুকুরের তলদেশে ক্ষতিকর অ্যামোনিয়া গ্যাস নিয়ন্ত্রণের উৎকৃষ্ট উপায়',
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

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="blog" className="py-20 relative bg-white border-t border-slate-100">
      <div className="absolute bottom-1/5 left-1/10 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
          <span className="text-xs uppercase tracking-widest text-[#e11922] font-semibold flex items-center justify-center gap-1.5 leading-none">
            <GraduationCap size={15} className="text-[#e11922]" />
            {lang === 'bn' ? 'মৎস্য পরামর্শ ও খামারি গাইড' : 'Aquaculture Academy & Insights'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 font-sans tracking-tight">
            {lang === 'bn' ? 'এক্সপার্ট মৎস্য চাষ ব্লগ' : 'Expert Aquaculture Blogs'}
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            {lang === 'bn'
              ? 'মৎস্য বিজ্ঞানীদের পরামর্শ, রোগ প্রতিরোধ উপায় এবং পুকুর বিজ্ঞান সংক্রান্ত কিছু গুরুত্বপূর্ণ প্রবন্ধ পড়ুন ও খামার লাভজনক করে তুলুন।'
              : 'Empower your shrimp and fish farms with expert tutorials and guidelines curated by active veterinary specialists in Bangladesh.'}
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {posts.map((post) => {
            const data = lang === 'bn' ? post.bn : post.en;
            const isExpanded = expandedId === post.id;
            return (
              <div
                key={post.id}
                className={`rounded-[24px] border bg-gradient-to-br ${post.colorTheme} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-brand-red/20 hover:-translate-y-1 ${
                  isExpanded ? 'md:col-span-3' : ''
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Meta Indicators */}
                  <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/80 pb-3">
                    <span className="flex items-center gap-1 text-brand-red font-bold">
                      <BookOpen size={12} />
                      {data.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar size={12} />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-brand-red">
                        <Clock size={12} />
                        {data.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug text-left">
                    {data.title}
                  </h3>

                  {/* Summary / Lead Paragraph */}
                  <p className="text-sm text-slate-600 leading-relaxed text-left">
                    {data.summary}
                  </p>

                  {/* Expanded Content View */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 pt-4 border-t border-slate-200"
                      >
                        {data.content.map((paragraph, index) => {
                          const parts = paragraph.split(': ');
                          return (
                            <p key={index} className="text-sm text-slate-650 leading-relaxed font-sans text-left">
                              {parts.length > 1 ? (
                                <>
                                  <strong className="text-brand-red block mb-1 font-bold">{parts[0]}</strong>
                                  <span>{parts[1]}</span>
                                </>
                              ) : (
                                paragraph
                              )}
                            </p>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Read More button */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold font-sans">Expert BioScience Limited</span>
                  
                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="px-4 py-2 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red hover:bg-[#e11922] hover:text-white text-xs font-bold flex items-center gap-1 transition-all cursor-pointer font-sans"
                  >
                    <span>{isExpanded ? (lang === 'bn' ? 'সংক্ষেপ করুন' : 'Collapse Post') : (lang === 'bn' ? 'বিস্তারিত পড়ুন' : 'Read Full Post')}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
