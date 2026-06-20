'use client';

import React from 'react';
import { ShieldCheck, Heart, UserPlus, Stethoscope, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

interface HeroProps {
  lang: 'bn' | 'en';
}

export default function Hero({ lang }: HeroProps) {
  const router = useRouter();

  const handleScrollTo = (id: string) => {
    // Redirect instantly to the dedicated subpage route
    if (id === 'hero') {
      router.push('/');
    } else {
      router.push(`/${id}`);
    }
  };

  const text = {
    badge: {
      bn: 'এভরি ডে, এক্সপার্টের সাথে থাকুন, খামার নিরাপদ রাখুন!!',
      en: 'Stay with Expert, Keep Your Farm Safe Every Single Day!!',
    },
    headingPre: {
      bn: 'উন্নত মৎস্য চাষে',
      en: 'Innovative & Safe',
    },
    headingHighlight: {
      bn: 'নিরাপদ ও নির্ভরযোগ্য সমাধান',
      en: 'Aquaculture Solutions',
    },
    desc: {
      bn: 'এক্সপার্ট বায়োসাইন্স লিমিটেড মৎস্য চাষিদের পাশে দাঁড়িয়ে তৈরি করে আন্তর্জাতিক প্রযুক্তিতে প্রস্তুতকৃত অত্যন্ত কার্যকর মাছের সুরক্ষাকারী প্রোবায়োটিক্স, ক্ষতিকর গ্যাস নিয়ন্ত্রক, অক্সিজেন দানাদার ও লাইভ টনিক যা মাছের অকাল মৃত্যু রোধ করে খামারের নিশ্চিত লাভ বয়ে আনে।',
      en: 'Expert BioScience Limited manufactures premium bio-certified fish medicines, soil/water probiotics, toxic gas reducers, and fast-acting oxygen tablets to secure high-density fish farms and maximize yield metrics in Bangladesh.',
    },
    ctaMain: {
      bn: 'অ্যাকুয়া ডাক্তার পরামর্শ নিন',
      en: 'AquaDoctor Consultation',
    },
    ctaSub: {
      bn: 'ওষুধের তালিকা দেখুন',
      en: 'Explore Product Catalog',
    },
    statFarmers: {
      bn: '১০,০০০+',
      en: '10,000+',
    },
    statFarmersLabel: {
      bn: 'সন্তুষ্ট মৎস্য চাষি',
      en: 'Happy Fish Farmers',
    },
    statProducts: {
      bn: '১২+ প্রিমিয়াম',
      en: '12+ Premium',
    },
    statProductsLabel: {
      bn: 'মৎস্য ওষুধ',
      en: 'Formulated Medicines',
    },
    statSuccess: {
      bn: '৯৮% নিশ্চিত',
      en: '98% Positive',
    },
    statSuccessLabel: {
      bn: 'রোগ নিরাময় হার',
      en: 'Treatment Success Rate',
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-100">
      {/* Decorative Floating Red Orbs */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-brand-red/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl animate-pulse-slow delay-75"></div>

      {/* Bubble Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-brand-red/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/2 w-4 h-4 bg-slate-300 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-20 right-1/5 w-2 h-2 bg-brand-red/10 rounded-full animate-bounce delay-200"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold tracking-wide">
                <Shield size={12} className="text-brand-red animate-pulse" />
                {lang === 'bn' ? text.badge.bn : text.badge.en}
              </span>
            </div>

            {/* Main Title Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {lang === 'bn' ? (
                <>
                  <span className="block text-slate-700">{text.headingPre.bn}</span>
                  <span className="bg-gradient-to-r from-brand-red to-slate-900 bg-clip-text text-transparent block">
                    {text.headingHighlight.bn}
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-slate-700">{text.headingPre.en}</span>
                  <span className="bg-gradient-to-r from-brand-red to-slate-900 bg-clip-text text-transparent block">
                    {text.headingHighlight.en}
                  </span>
                </>
              )}
            </h1>

            {/* Slogan Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left md:text-center lg:text-left">
              {lang === 'bn' ? text.desc.bn : text.desc.en}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleScrollTo('aquadoctor')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red hover:bg-[#b0131b] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-red/15 hover:shadow-xl hover:shadow-brand-red/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Stethoscope size={18} />
                <span>{lang === 'bn' ? text.ctaMain.bn : text.ctaMain.en}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => handleScrollTo('products')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{lang === 'bn' ? text.ctaSub.bn : text.ctaSub.en}</span>
              </button>
            </div>

            {/* Quick trust bullet indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 pt-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-red" />
                {lang === 'bn' ? '১০০% পরীক্ষিত পণ্য' : '100% Tested Bio-Solutions'}
              </span>
              <span className="flex items-center gap-1.5">
                <Heart size={14} className="text-brand-red" />
                {lang === 'bn' ? 'মাছ ও খামারের অকৃত্রিম বন্ধু' : 'Ecologically Balanced Formulas'}
              </span>
              <span className="flex items-center gap-1.5">
                <UserPlus size={14} className="text-brand-red" />
                {lang === 'bn' ? 'সারাদেশে ডিলারের নেটওয়ার্ক' : 'Representative Network'}
              </span>
            </div>
          </div>

          {/* Hero Right Column: Custom Stylized Product Package Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            {/* Visual Backdrops */}
            <div className="absolute inset-0 bg-brand-red/5 rounded-3xl filter blur-xl transform scale-95 select-none"></div>
            
            {/* Floating Mockup Card Group */}
            <div className="relative w-full max-w-md p-6 bento-cell flex flex-col space-y-6">
              {/* Product Representation Label */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping"></div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e11922]">EBL Featured Care</span>
                </div>
                <span className="text-xs font-semibold text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-md">Original Formula</span>
              </div>
              
              {/* Image visual mock representing active oxygenated pond tablet pack */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#fff5f5] via-white to-[#ffe3e3] border border-brand-red/25 overflow-hidden flex flex-col justify-between p-4 group cursor-pointer aqua-glow">
                {/* Ripples animation background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-brand-red animate-ping absolute"></div>
                  <div className="w-36 h-36 rounded-full border border-brand-red animate-ping absolute delay-75"></div>
                </div>

                <div className="flex items-start justify-between z-10">
                  <span className="px-2 py-0.5 text-[9px] uppercase font-bold bg-[#e11922] text-white rounded-md tracking-wider">Oxyadd Granular</span>
                  <span className="text-[10px] font-mono text-slate-800">Premium Grade</span>
                </div>

                {/* Styled Center graphic mirroring fish water bubbles and oxygen tablet dissolution */}
                <div className="flex flex-col items-center justify-center py-3 z-10">
                  <span className="text-2xl font-bold text-slate-900 tracking-widest text-center leading-none">OXYGEN BOOSTER</span>
                  <p className="text-[10px] text-brand-red text-center mt-1">Instant Dissolution & Gas Controller</p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-600 z-10 border-t border-brand-red/15 pt-2">
                  <span>Pack: 1 KG</span>
                  <span className="text-brand-red font-bold">Active: 13.5% Oxygen</span>
                </div>
              </div>

              {/* Interactive problem diagnostic card preview */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex items-center gap-4 hover:border-brand-red/20 hover:bg-slate-100/50 transition-all duration-300 group cursor-pointer" onClick={() => handleScrollTo('aquadoctor')}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Stethoscope size={24} className="group-hover:animate-bounce" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {lang === 'bn' ? 'মাছ ভাসছে? অথবা ক্ষতের প্রাদুর্ভাব?' : 'Suffocating Fish? Or Body Wounds?'}
                  </h4>
                  <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                    <span>{lang === 'bn' ? 'অ্যাকুয়া ডাক্তারের দ্রুত পরামর্শ' : 'Get quick diagnosis now'}</span>
                    <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Static Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-200">
          <div className="p-6 bento-cell text-center">
            <span className="block text-3xl font-extrabold text-brand-red font-sans tracking-tight">
              {lang === 'bn' ? text.statFarmers.bn : text.statFarmers.en}
            </span>
            <span className="block text-sm text-slate-500 mt-1 font-semibold">
              {lang === 'bn' ? text.statFarmersLabel.bn : text.statFarmersLabel.en}
            </span>
          </div>

          <div className="p-6 bento-cell text-center">
            <span className="block text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
              {lang === 'bn' ? text.statProducts.bn : text.statProducts.en}
            </span>
            <span className="block text-sm text-slate-500 mt-1 font-semibold">
              {lang === 'bn' ? text.statProductsLabel.bn : text.statProductsLabel.en}
            </span>
          </div>

          <div className="p-6 bento-cell text-center">
            <span className="block text-3xl font-extrabold text-brand-red font-sans tracking-tight">
              {lang === 'bn' ? text.statSuccess.bn : text.statSuccess.en}
            </span>
            <span className="block text-sm text-slate-500 mt-1 font-semibold">
              {lang === 'bn' ? text.statSuccessLabel.bn : text.statSuccessLabel.en}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
