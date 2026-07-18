'use client';

import React from 'react';
import { Target, Landmark, ShieldCheck, HeartPulse, Sparkles, Sprout } from 'lucide-react';

interface AboutProps {
  lang: 'bn' | 'en';
}

export default function About({ lang }: AboutProps) {
  const points = [
    {
      icon: <Target className="text-brand-red" size={24} />,
      bn: {
        title: 'আমাদের লক্ষ্য (Our Mission)',
        desc: 'বাংলাদেশের প্রান্তিক মৎস্য চাষিদের দোরগোড়ায় বিশ্বমানের অর্গানিক ও নিরাপদ মাছের ওষুধ পৌঁছে দেওয়া, পানির স্বাস্থ্য সুরক্ষা নিশ্চিত করা এবং কৃত্রিম এন্টিবায়োটিকের ব্যবহার কমিয়ে খামার সুরক্ষিত করা।',
      },
      en: {
        title: 'Our Clean Mission',
        desc: 'To deliver premium-performance biological culture aids to marginalized aquaculturists, securing sustainable food chains and reducing synthetic residues.',
      }
    },
    {
      icon: <ShieldCheck className="text-brand-red" size={24} />,
      bn: {
        title: 'নিরাপদ ফর্মুলেশন (Bio-Security)',
        desc: 'আমরা জার্মানি, থাইল্যান্ড, জাপান ও ইউকের মতো শীর্ষ দেশগুলোর উন্নত ফর্মুলা অনুসরণে আমাদের পণ্য প্রস্তুত ও সরবরাহ করি। যা মাটি বা পানির বাস্তুসংস্থান নষ্ট না করে কার্যকর ফলাফল দেয়।',
      },
      en: {
        title: 'Residue-Free Formulations',
        desc: 'We follow stringent organic specifications from Germany, UK, Thailand, and Japan, ensuring zero toxic residues are introduced to pond ecosystems.',
      }
    },
    {
      icon: <HeartPulse className="text-brand-red" size={24} />,
      bn: {
        title: 'খামারির আস্থা (Farmers Trust)',
        desc: 'আমাদের মূল মন্ত্র "খামার ও খামারির আস্থায়"। চাষকালীন যেকোনো সংকটে আমরা ফ্রি ডায়াগনস্টিক সাপোর্ট (অ্যাকুয়া ডাক্তার) দিয়ে আসছি, যেন খামারের ক্ষতি শূন্যে নেমে আসে।',
      },
      en: {
        title: 'Constant Support Loop',
        desc: 'Governed by our slogan "Stay with Farms & Farmers," we provide continuous expert consultancy to optimize daily production safety and boost margins.',
      }
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="absolute top-1/2 left-1/10 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header split details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main graphics mockup card showing brand values */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-red/5 rounded-3xl filter blur-xl transform rotate-2"></div>
            
            <div className="relative bento-cell p-8 space-y-6">
              <div className="flex items-center gap-3">
                {/* stylized EBL Crest */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-red-650 flex items-center justify-center font-black text-white text-lg tracking-wider">
                  EBL
                </div>
                <div className="text-left font-sans">
                  <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                    {lang === 'bn' ? 'এক্সপার্ট বায়োসাইন্স লিমিটেড' : 'Expert BioScience Ltd.'}
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-[#e11922] font-bold">
                    {lang === 'bn' ? 'স্থাপিত: ২০২১ | রেজি: নং ১৩১২' : 'Est. 2021 | Reg: No 1312'}
                  </span>
                </div>
              </div>

              {/* Slogan badge callout */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden group text-left">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#e11922]/5 rounded-full filter blur-md"></div>
                <span className="text-xs text-slate-400 block uppercase tracking-widest font-mono">Our Sole Slogan</span>
                <p className="text-base font-extrabold text-brand-red mt-1 leading-snug">
                  {lang === 'bn' ? '"খামার ও খামারির আস্থায়"' : '"Stay with Farms & Farmers"'}
                </p>
                <p className="text-xs text-slate-650 mt-2 leading-relaxed">
                  {lang === 'bn' 
                    ? 'চাষিদের সমৃদ্ধি এবং নিরাপদ মাছ সকলের পাতে পৌঁছে দেওয়াই আমাদের প্রতিটি ওষুধ ও প্রোবায়োটিকের প্রধান সংকল্প।'
                    : 'The prosperity of farmers and supplying clean, safe seafood to every dining table is our absolute priority.'}
                </p>
              </div>

              {/* Badges matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-center">
                  <span className="block text-xl font-bold text-slate-900">১০০%</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block font-semibold">{lang === 'bn' ? 'অর্গানিক উপাদান' : 'Bio Organic Ingredients'}</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 text-center">
                  <span className="block text-xl font-bold text-brand-red">{lang === 'bn' ? 'তথ্য ও' : 'Info &'}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block font-semibold">{lang === 'bn' ? 'সহায়তা' : 'Help & Support'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side narrative values column */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="text-left font-sans">
              <span className="text-xs uppercase tracking-widest text-brand-red font-bold flex items-center gap-1.5 justify-center lg:justify-start">
                <Sprout size={13} className="text-brand-red animate-pulse" />
                {lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি ও দায়বদ্ধতা' : 'Our Professional Integrity'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-center lg:text-left tracking-tight">
                {lang === 'bn' ? (
                  <>
                    আমরা খামারের সুস্থ সুরক্ষা <br />
                    <span className="bg-gradient-to-r from-brand-red to-slate-900 bg-clip-text text-transparent">
                      নিশ্চিতকরণে প্রতিশ্রুতিবদ্ধ
                    </span>
                  </>
                ) : (
                  <>
                    Unwavering dedication to <br />
                    <span className="bg-gradient-to-r from-brand-red to-slate-900 bg-clip-text text-transparent">
                      sustainable aquaculture prosperity
                    </span>
                  </>
                )}
              </h2>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed mt-5 space-y-4 text-left">
                {lang === 'bn' ? (
                  <>
                    <p className="font-medium text-slate-800">
                      বাংলাদেশের মৎস্য খাতের টেকসই উন্নয়ন, নিরাপদ উৎপাদন এবং খামারিদের লাভজনকতা নিশ্চিত করার লক্ষ্য নিয়ে <span className="text-brand-red font-bold">এক্সপার্ট বায়োসাইন্স লিমিটেড</span> আন্তর্জাতিক মানের প্রযুক্তিনির্ভর জলজ প্রাণিসম্পদ ব্যবস্থাপনা পণ্য ও সমাধান নিয়ে কাজ করছে।
                    </p>
                    <p>
                      আধুনিক গবেষণা ও উদ্ভাবনের সমন্বয়ে আমরা সরবরাহ করি উচ্চমানের প্রোবায়োটিকস, ক্ষতিকর গ্যাস নিয়ন্ত্রক লিকুইড / পাউডার, অক্সিজেন ট্যাবলেট/গ্রানুলার, লিভার টনিক, ভিটামিন প্রিমিক্স, গ্রোথ প্রমোটার জেল, পানি ও পরিবেশ উন্নয়নকারী এবং স্বাস্থ্য সুরক্ষামূলক পণ্য, যা পুকুরের পরিবেশের ভারসাম্য বজায় রাখতে, মাছের রোগের ঝুঁকি কমাতে, বৃদ্ধি ত্বরান্বিত করতে এবং অকাল মৃত্যু প্রতিরোধে কার্যকর ভূমিকা রাখে।
                    </p>
                    <p>
                      শুধু মানসম্মত পণ্য সরবরাহই নয়, দক্ষ কারিগরি পরামর্শ ও আধুনিক চাষ ব্যবস্থাপনার মাধ্যমে দেশের মৎস্য খামারিদের সফলতা অর্জনে পাশে থাকাই আমাদের অঙ্গীকার।
                    </p>
                    <p className="font-extrabold text-slate-900 border-l-4 border-brand-red pl-3 mt-4">
                      এক্সপার্ট বায়োসাইন্স লিমিটেড— প্রযুক্তি, গুণগত মান ও আস্থার সমন্বয়ে নিরাপদ ও লাভজনক মৎস্য চাষের বিশ্বস্ত সহযোগী। <br />
                      <span className="text-brand-red font-black text-xs uppercase tracking-wider block mt-1">Your Farming Partner</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-medium text-slate-850">
                      With the vision of ensuring the sustainable development, safe production, and profitability of farmers in the fisheries sector of Bangladesh, <span className="text-brand-red font-bold">Expert BioScience Limited</span> delivers international-grade, technology-driven aquatic health and livestock management products and solutions.
                    </p>
                    <p>
                      Combining modern research and cutting-edge innovations, we supply premium-quality probiotics, harmful gas controllers (liquid/powder), fast-dissolving oxygen tablets/granules, liver tonics, vitamin premixes, growth promoter gels, water & environmental conditioners, and essential biosecurity products that maintain ecological balance, reduce disease risks, accelerate growth, and prevent premature fish mortality.
                    </p>
                    <p>
                      Our commitment extends beyond providing top-tier products; we stand firmly by the success of our country&apos;s fish farmers through expert technical advice and modern culturing techniques.
                    </p>
                    <p className="font-extrabold text-slate-900 border-l-4 border-brand-red pl-3 mt-4">
                      Expert BioScience Limited—The trusted partner for safe and profitable aquaculture, integrating technology, quality, and trust. <br />
                      <span className="text-brand-red font-black text-xs uppercase tracking-wider block mt-1">Your Farming Partner</span>
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* List of narrative points */}
            <div className="space-y-6">
              {points.map((point, index) => {
                const item = lang === 'bn' ? point.bn : point.en;
                return (
                  <div key={index} className="flex gap-4 items-start p-4 hover:bg-slate-100/50 rounded-xl transition-all text-left">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-650 mt-1.5 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
