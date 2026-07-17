'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { BlogPost } from '@/lib/blogData';
import Link from 'next/link';
import { Calendar, Clock, BookOpen, ArrowLeft, Share2, Check, Copy, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  post: BlogPost;
}

export default function BlogDetailPageClient({ post }: Props) {
  const { lang, setLang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const data = lang === 'bn' ? post.bn : post.en;

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Structured Data Schema for Generative Engine Optimization (GEO) & SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://expertbioscience.com/blog/${post.id}`,
    },
    'headline': post.bn.title,
    'alternativeHeadline': post.en.title,
    'description': post.bn.summary,
    'image': 'https://expertbioscience.com/icon.svg',
    'datePublished': new Date(post.publishDate).toISOString().split('T')[0],
    'dateModified': new Date(post.publishDate).toISOString().split('T')[0],
    'author': {
      '@type': 'Organization',
      'name': 'Expert BioScience Limited',
      'url': 'https://expertbioscience.com',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Expert BioScience Limited',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://expertbioscience.com/icon.svg',
      },
    },
    'keywords': `fish medicine, মৎস্য চাষ, aquaculture, ${post.bn.category}, ${post.en.category}, ${post.id}`,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#cbd5e1] selection:text-black">
      {/* Inject Structured Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button and share */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-red transition-all cursor-pointer"
            >
              <ArrowLeft size={16} />
              {lang === 'bn' ? 'ব্লগে ফিরে যান' : 'Back to Blogs'}
            </Link>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-brand-red hover:border-brand-red/30 transition-all cursor-pointer shadow-xs"
              title={lang === 'bn' ? 'লিঙ্ক কপি করুন' : 'Copy link to clipboard'}
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500 animate-scale-in" />
                  <span className="text-emerald-600">{lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>{lang === 'bn' ? 'লিঙ্ক শেয়ার করুন' : 'Share Post'}</span>
                </>
              )}
            </button>
          </div>

          {/* Article Container */}
          <motion.article 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`rounded-3xl border bg-gradient-to-br ${post.colorTheme} p-6 sm:p-10 shadow-sm`}
          >
            {/* Meta Indicators */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 border-b border-slate-200/80 pb-5 mb-6">
              <span className="flex items-center gap-1.5 text-brand-red font-extrabold text-sm uppercase tracking-wide">
                <BookOpen size={14} />
                {data.category}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1 font-bold text-brand-red">
                  <Clock size={13} />
                  {data.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6 text-left font-sans">
              {data.title}
            </h1>

            {/* Summary Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-slate-200/50 mb-8 shadow-xs">
              <h2 className="text-xs font-extrabold text-[#e11922] uppercase tracking-wider mb-2 text-left">
                {lang === 'bn' ? 'প্রবন্ধের সংক্ষিপ্তসার' : 'Article Executive Summary'}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-left font-sans font-medium italic">
                &ldquo;{data.summary}&rdquo;
              </p>
            </div>

            {/* Article Content Body */}
            <div className="space-y-6">
              {data.content.map((paragraph, index) => {
                const parts = paragraph.split(': ');
                return (
                  <p key={index} className="text-base text-slate-750 leading-relaxed font-sans text-left">
                    {parts.length > 1 ? (
                      <>
                        <strong className="text-brand-red text-lg block mb-1 font-extrabold">{parts[0]}</strong>
                        <span className="text-slate-800">{parts[1]}</span>
                      </>
                    ) : (
                      <span className="text-slate-800">{paragraph}</span>
                    )}
                  </p>
                );
              })}
            </div>

            {/* Footer and diagnostic CTA */}
            {(post.id === 'carp-magur-stocking' || post.id === 'gulsha-farming-guide' || post.id === 'gulsha-fingerling-pond-prep') && (
              <div className="mt-12 p-6 rounded-2xl bg-rose-50 border border-brand-red/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      {lang === 'bn' ? 'পুকুরের স্বাস্থ্য ও মাছের রোগ নিয়ে চিন্তিত?' : 'Concerned About Pond Health or Fish Diseases?'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-normal">
                      {lang === 'bn' 
                        ? 'আমাদের এআই-চালিত "একুয়া ডক্টর" ডায়াগনস্টিক টুল ব্যবহার করে পুকুরের পানি ও রোগের তাৎক্ষণিক সমাধান পান।' 
                        : 'Use our AI-powered "AquaDoctor" diagnostic tool to analyze water quality and get instant solutions.'}
                    </p>
                  </div>
                </div>
                <Link 
                  href="/aquadoctor"
                  className="w-full md:w-auto px-6 py-3 bg-brand-red text-white text-sm font-black rounded-xl hover:bg-[#b01018] text-center transition-all shrink-0 cursor-pointer shadow-md"
                >
                  {lang === 'bn' ? 'একুয়া ডক্টর টুল ব্যবহার করুন' : 'Consult AquaDoctor'}
                </Link>
              </div>
            )}
          </motion.article>

          {/* Share Block bottom */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-slate-800">
                {lang === 'bn' ? 'প্রবন্ধটি ভালো লেগেছে?' : 'Found this article helpful?'}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'bn' ? 'অন্যান্য খামারি বন্ধুদের সাহায্য করতে লেখাটি সোশ্যাল মিডিয়ায় শেয়ার করুন।' : 'Share this expert advice to empower fellow aquaculture farmers in Bangladesh.'}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold hover:bg-[#b01018] flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                {copied ? <Check size={14} /> : <Share2 size={14} />}
                <span>{copied ? (lang === 'bn' ? 'লিঙ্ক কপিড!' : 'Link Copied!') : (lang === 'bn' ? 'লিঙ্ক কপি করুন' : 'Copy Link')}</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
