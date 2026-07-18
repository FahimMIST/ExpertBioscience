'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { Sparkles, Stethoscope, BookOpen, Layers, Award, Ship, Star, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#cbd5e1] selection:text-black">
      
      {/* Navigation Layer */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Area */}
      <main className="flex-grow">
        
        {/* Immersive Brand Hero Banner */}
        <Hero lang={lang} />

        {/* Brand Corporate Commitment Section */}
        <section className="py-20 bg-white relative border-b border-slate-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Solution Matrix */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-bold block">
                    {lang === 'bn' ? 'প্রযুক্তি ও গুণগত মান' : 'Technology & Premium Quality'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {lang === 'bn' ? 'জলজ প্রাণিসম্পদ ব্যবস্থাপনা' : 'Aquaculture Livestock Management'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'bn' 
                      ? 'আন্তর্জাতিক মানের প্রযুক্তিনির্ভর জলজ সমাধান যা অকাল মৃত্যু প্রতিরোধ ও পুকুরের ভারসাম্য রক্ষা করে।'
                      : 'International-standard tech-driven aquatic health formulations manufactured for highest efficacy.'}
                  </p>
                </div>

                {/* Grid of Specialized Categories */}
                <div className="grid grid-cols-2 gap-3.5">
                  {[
                    { title: lang === 'bn' ? 'প্রোবায়োটিকস' : 'Probiotics', desc: lang === 'bn' ? 'উচ্চমানের উপকারী ব্যাকটেরিয়া' : 'Beneficial soil bacteria' },
                    { title: lang === 'bn' ? 'গ্যাস নিয়ন্ত্রক' : 'Gas Controllers', desc: lang === 'bn' ? 'ক্ষতিকর গ্যাস দূরীকরণ' : 'Harmful gas management' },
                    { title: lang === 'bn' ? 'অক্সিজেন ট্যাবলেট' : 'Oxygen Boosters', desc: lang === 'bn' ? 'দ্রুত অক্সিজেন সরবরাহকারী' : 'Instant oxygen solutions' },
                    { title: lang === 'bn' ? 'লিভার টনিক' : 'Liver Tonics', desc: lang === 'bn' ? 'হজম ও রোগ প্রতিরোধ বৃদ্ধি' : 'Digestion & immunity boost' },
                    { title: lang === 'bn' ? 'গ্রোথ প্রমোটার জেল' : 'Growth Promoters', desc: lang === 'bn' ? 'সহজ ও ত্বরান্বিত বৃদ্ধি' : 'Faster healthy weights' },
                    { title: lang === 'bn' ? 'পরিবেশ উন্নয়নকারী' : 'Water Conditioners', desc: lang === 'bn' ? 'পানি ও পরিবেশ ভারসাম্য' : 'Eco-balance stabilizers' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-brand-red/20 hover:bg-slate-100/50 transition-all">
                      <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Slogan highlight */}
                <div className="p-4 rounded-2xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-brand-red" />
                    <span className="text-xs font-bold text-slate-700">{lang === 'bn' ? 'আপনার বিশ্বস্ত খামার সহযোগী' : 'Your Farming Partner'}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Est. 2021</span>
                </div>
              </div>

              {/* Right Column: verbatim user text presentation */}
              <div className="lg:col-span-7 space-y-6 lg:pl-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold">
                  <Sparkles size={12} className="text-brand-red" />
                  <span>{lang === 'bn' ? 'আমাদের লক্ষ্য ও প্রতিশ্রুতি' : 'Our Identity & Commitments'}</span>
                </div>

                <div className="space-y-4 text-slate-650 text-sm sm:text-base leading-relaxed">
                  {lang === 'bn' ? (
                    <>
                      <p className="text-slate-800 font-extrabold text-base sm:text-lg leading-snug">
                        বাংলাদেশের মৎস্য খাতের টেকসই উন্নয়ন, নিরাপদ উৎপাদন এবং খামারিদের লাভজনকতা নিশ্চিত করার লক্ষ্য নিয়ে <span className="text-brand-red">এক্সপার্ট বায়োসাইন্স লিমিটেড</span> আন্তর্জাতিক মানের প্রযুক্তিনির্ভর জলজ প্রাণিসম্পদ ব্যবস্থাপনা পণ্য ও সমাধান নিয়ে কাজ করছে।
                      </p>
                      <p>
                        আধুনিক গবেষণা ও উদ্ভাবনের সমন্বয়ে আমরা সরবরাহ করি উচ্চমানের প্রোবায়োটিকস, ক্ষতিকর গ্যাস নিয়ন্ত্রক লিকুইড / পাউডার, অক্সিজেন ট্যাবলেট/গ্রানুলার, লিভার টনিক, ভিটামিন প্রিমিক্স, গ্রোথ প্রমোটার জেল, পানি ও পরিবেশ উন্নয়নকারী এবং স্বাস্থ্য সুরক্ষামূলক পণ্য, যা পুকুরের পরিবেশের ভারসাম্য বজায় রাখতে, মাছের রোগের ঝুঁকি কমাতে, বৃদ্ধি ত্বরান্বিত করতে এবং অকাল মৃত্যু প্রতিরোধে কার্যকর ভূমিকা রাখে।
                      </p>
                      <p>
                        শুধু মানসম্মত পণ্য সরবরাহই নয়, দক্ষ কারিগরি পরামর্শ ও আধুনিক চাষ ব্যবস্থাপনার মাধ্যমে দেশের মৎস্য খামারিদের সফলতা অর্জনে পাশে থাকাই আমাদের অঙ্গীকার।
                      </p>
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-black text-slate-900">
                            এক্সপার্ট বায়োসাইন্স লিমিটেড—প্রযুক্তি, গুণগত মান ও আস্থার সমন্বয়।
                          </p>
                          <span className="text-xs font-bold text-brand-red block mt-0.5">Your Farming Partner</span>
                        </div>
                        <Link 
                          href="/about" 
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-red hover:underline shrink-0"
                        >
                          <span>বিস্তারিত কোম্পানি প্রোফাইল</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-slate-800 font-extrabold text-base sm:text-lg leading-snug">
                        With the mission of ensuring the sustainable development, safe production, and profitability of farmers in the fisheries sector of Bangladesh, <span className="text-brand-red">Expert BioScience Limited</span> delivers international-standard, tech-driven aquatic health and livestock management products.
                      </p>
                      <p>
                        Combining modern research and cutting-edge innovations, we supply premium-quality probiotics, harmful gas controllers (liquid/powder), fast-dissolving oxygen tablets/granules, liver tonics, vitamin premixes, growth promoter gels, water & environmental conditioners, and essential biosecurity products that maintain ecological balance, reduce disease risks, accelerate growth, and prevent premature fish mortality.
                      </p>
                      <p>
                        Our commitment extends beyond providing top-tier products; we stand firmly by the success of our country&apos;s fish farmers through expert technical advice and modern culturing techniques.
                      </p>
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-black text-slate-900">
                            Expert BioScience Limited—The trusted partner integrating tech, quality, and trust.
                          </p>
                          <span className="text-xs font-bold text-brand-red block mt-0.5">Your Farming Partner</span>
                        </div>
                        <Link 
                          href="/about" 
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-red hover:underline shrink-0"
                        >
                          <span>Detailed Company Profile</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </>
                  )}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Cohesive Bento Page-Routing Dashboard */}
        <section className="py-20 bg-slate-50 relative border-t border-slate-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
            
            {/* Bento Section Header */}
            <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-brand-red font-bold block">
                  {lang === 'bn' ? 'এক্সপার্ট পোর্টাল' : 'Expert Hub Portal'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
                  {lang === 'bn' ? 'আমাদের সেবা উপাত্ত সমূহ' : 'Explore Our Key Divisions'}
                </h2>
                <p className="text-sm text-slate-500 mt-2 max-w-xl">
                  {lang === 'bn'
                    ? 'মৎস্য চাষে আধুনিক বিপ্লব আনতে এবং পুকুরের স্বাস্থ্য সংক্রান্ত যেকোনো সমস্যা দ্রুত নিরূপণ করতে নিচের ক্যাটাগরিগুলো দেখুন।'
                    : 'Bringing international grade solutions and rapid diagnostic calculators directly to Bangladesh fish farmers.'}
                </p>
              </div>
            </div>

            {/* Asymmetric Bento Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Box 1 (Left 7-Cols Wide): Premium Medicines Catalog Spotlight */}
              <div className="md:col-span-7 bento-cell p-6 sm:p-8 flex flex-col justify-between group h-full min-h-[340px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-sans">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                      <Layers size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red bg-brand-red/10 px-3 py-1 rounded-full font-bold">
                      {lang === 'bn' ? '১০+ প্রিমিয়াম ওষুধ' : '10+ Formulations'}
                    </span>
                  </div>

                  <div className="text-left font-sans">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-red transition-colors">
                      {lang === 'bn' ? 'প্রিমিয়াম প্রোডাক্ট ক্যাটালগ' : 'Premium Aquatic Catalog'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {lang === 'bn'
                        ? 'মাছের স্বাস্থ্য সুরক্ষা, দ্রবীভূত অক্সিজেন বৃদ্ধি (OXYADD), লিভার টনিক (LIV-UP), ক্ষতিকর গ্যাস দূরীকরণ (GASNULL) এবং প্রোবায়োটিক সলিউশন সমূহের নির্ভরযোগ্য তালিকা।'
                        : 'Explore premium fish bio-medicines, oxygen tablets, gas control additives, and imported growth stimulants researched for highest efficacy.'}
                    </p>
                  </div>

                  {/* Highlights Bullet pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 font-medium font-sans">Oxyadd® (অক্সিজেন)</span>
                    <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 font-medium font-sans">Gasonal® (গ্যাস মুক্ত)</span>
                    <span className="text-xs bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 font-medium font-sans">Bioprob® (প্রোবায়োটিক)</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between font-sans">
                  <span className="text-xs text-slate-400 font-semibold">{lang === 'bn' ? 'সহজ অনুসন্ধান ও ফিল্টার ক্যাটালগ' : 'Interactive category filter'}</span>
                  <Link
                    href="/products"
                    className="py-2 px-4 rounded-xl bg-brand-red text-white hover:bg-brand-red-hover font-sans text-xs font-bold transition-all flex items-center gap-1.5 group/btn"
                  >
                    <span>{lang === 'bn' ? 'ক্যাটালগ দেখুন' : 'Explore Products'}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Box 2 (Right 5-Cols Wide): AquaDoctor Triage teaser */}
              <div className="md:col-span-5 bento-cell p-6 sm:p-8 flex flex-col justify-between group h-full min-h-[340px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-sans">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                      <Stethoscope size={24} className="group-hover:animate-pulse" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11922] bg-[#e11922]/10 px-3 py-1 rounded-full font-bold">
                      {lang === 'bn' ? 'ফ্রি ইনস্ট্যান্ট প্রেসক্রিপশন' : 'Free Automated Desk'}
                    </span>
                  </div>

                  <div className="text-left font-sans">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-red transition-colors">
                      {lang === 'bn' ? 'অ্যাকুয়া ডাক্তার' : 'AquaDoctor Diagnostics'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {lang === 'bn'
                        ? 'পুকুরের লক্ষণ (যেমন- মাছের খাবি খাওয়া, গ্যাস প্রাদুর্ভাব, ফুলকা পচা রোগ) চিহ্নিত করুন এবং সরাসরি তাৎক্ষণিক সঠিক ডোজ হিসাব করুন।'
                        : 'Interactive diagnostics tool. Check pond symptoms like surface gasping or gill decay and fetch instant clinical dosing protocols.'}
                    </p>
                  </div>

                  {/* Doctor badge highlight */}
                  <div className="p-3 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center gap-2">
                    <CheckCircle size={15} className="text-brand-red shrink-0" />
                    <span className="text-xs text-slate-600 font-medium font-sans">98% {lang === 'bn' ? 'সঠিক ডোজ ফর্মুলেশন গণনা' : 'accurate clinical treatments'}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <Link
                    href="/aquadoctor"
                    className="w-full py-2.5 rounded-xl bg-brand-red hover:bg-[#b0131b] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer font-sans"
                  >
                    <span>{lang === 'bn' ? 'চিকিৎসা শুরু করুন' : 'Launch Diagnosis Desk'}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Box 3 (Left 5-Cols Wide): Educational aquaculture guidelines */}
              <div className="md:col-span-5 bento-cell p-6 sm:p-8 flex flex-col justify-between group h-full min-h-[300px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-sans">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center text-brand-red">
                      <BookOpen size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11922] bg-[#e11922]/10 px-3 py-1 rounded-full font-bold">
                      {lang === 'bn' ? 'কৃষক তথ্য ভাণ্ডার' : 'Farmer Insights'}
                    </span>
                  </div>

                  <div className="text-left font-sans">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                      {lang === 'bn' ? 'মৎস্য ডাক্তার পরামর্শ তথ্য' : 'Aquaculture Advisories'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {lang === 'bn'
                        ? 'পুকুরে হঠাৎ করে অক্সিজেন কমে গেলে করণীয়, অ্যামোনিয়া গ্যাস দূর করার সঠিক উপায় ও শীতকালীন মৎস্য পরিচর্যার গাইডলাইন সমূহ পড়ুন।'
                        : 'Educational journals covering ammonia gas management, winter pathogen control, and summer dissolved oxygen protocols.'}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <Link
                    href="/blog"
                    className="text-xs text-brand-red font-extrabold group-hover:underline flex items-center gap-1 cursor-pointer font-sans"
                  >
                    <span>{lang === 'bn' ? 'সকল পরামর্শ আর্টিকেল পড়ুন' : 'Read All Educational Articles'}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Box 4 (Middle 4-Cols Wide): Slogan */}
              <div className="md:col-span-4 bento-cell p-6 sm:p-8 flex flex-col justify-between group h-full min-h-[300px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e11922]/5 rounded-full filter blur-xl"></div>
                <div className="space-y-4 font-sans">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#e11922]/10 border border-[#e11922]/20 flex items-center justify-center text-brand-red">
                      <Award size={24} />
                    </div>
                  </div>

                  <div className="text-left font-sans">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-bold block mb-1">
                      {lang === 'bn' ? 'মূল স্লোগান' : 'Our Brand Motto'}
                    </span>
                    <p className="text-lg font-black text-brand-red leading-snug group-hover:scale-[1.02] origin-left transition-transform">
                      {lang === 'bn'
                        ? '“খামার ও খামারির আস্থায়...”'
                        : '"Stay with Farms & Farmers..."'}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {lang === 'bn'
                        ? 'আমরা সর্বোচ্চ গুণগত মানের মৎস্য সলিউশন সরবরাহ নিশ্চিত করে বাংলাদেশের মৎস্য শিল্পের টেকসই উৎপাদন বৃদ্ধিতে প্রতিশ্রুতিবদ্ধ।'
                        : 'Committed to safeguarding aquatic ecosystem bio-security and boosting fish farm outputs across the delta.'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/about"
                    className="text-xs text-brand-red font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer font-sans"
                  >
                    <span>{lang === 'bn' ? 'কোম্পানি প্রোফাইল' : 'Our Corporate Profile'}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Box 5 (Right 3-Cols Wide): Quick Support Desk Access */}
              <div className="md:col-span-3 bento-cell p-6 sm:p-8 flex flex-col justify-between group h-full min-h-[300px]">
                <div className="space-y-4 text-left font-sans">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                    <Ship size={20} className="group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      {lang === 'bn' ? 'জরুরি জিজ্ঞাসা' : 'Call Support'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 leading-normal">
                      {lang === 'bn'
                        ? 'নিকটবর্তী নিবন্ধিত ডিলার ও সাপ্লাই পয়েন্ট পেতে আমাদের সাথে ফোনে বা মেইলে এখনই যুক্ত হোন।'
                        : 'Connect with our head coordinators to locate authorized bio-additive stores.'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="w-full py-2 rounded-xl bg-brand-red/10 hover:bg-brand-red/20 border border-brand-red/35 text-brand-red text-xs font-bold text-center block transition-all font-sans"
                  >
                    {lang === 'bn' ? 'যোগাযোগ পেজ ➔' : 'Support Channel ➔'}
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Structured brand footer coordinates */}
      <Footer lang={lang} />

    </div>
  );
}
