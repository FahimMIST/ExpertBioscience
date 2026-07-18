'use client';

import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Clock, BookOpen, GraduationCap, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/lib/blogData';

interface BlogProps {
  lang: 'bn' | 'en';
}

const formatBoldText = (text: string) => {
  if (!text) return '';
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="text-brand-red font-black">
          {part}
        </strong>
      );
    }
    return part;
  });
};

export default function Blog({ lang }: BlogProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const posts: BlogPost[] = [...BLOG_POSTS].reverse();

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
                          if (paragraph.startsWith('[TABLE]:')) {
                            const tableContent = paragraph.replace('[TABLE]:', '').trim();
                            const lines = tableContent.split('\n').filter(line => line.trim().length > 0);
                            
                            const rows = lines.map(line => 
                              line.split('|').map(cell => cell.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1)
                            ).filter(row => row.length > 0 && !row.every(cell => cell.startsWith('---')));

                            if (rows.length === 0) return null;

                            const headers = rows[0];
                            const bodyRows = rows.slice(1);

                            return (
                              <div key={index} className="my-6 overflow-x-auto rounded-xl border border-slate-200/60 shadow-xs">
                                <table className="min-w-full divide-y divide-slate-200 text-left font-sans text-xs">
                                  <thead className="bg-slate-50">
                                    <tr>
                                      {headers.map((header, hIdx) => (
                                        <th key={hIdx} className="px-3 py-2.5 font-bold text-slate-700 bg-slate-100 border-b border-slate-200">
                                          {header}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-slate-100">
                                    {bodyRows.map((row, rIdx) => (
                                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                                        {row.map((cell, cIdx) => (
                                          <td key={cIdx} className="px-3 py-2.5 text-slate-600 font-medium whitespace-pre-line border-b border-slate-100">
                                            {formatBoldText(cell)}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            );
                          }

                          const parts = paragraph.split(': ');
                          return (
                            <p key={index} className="text-sm text-slate-650 leading-relaxed font-sans text-left">
                              {parts.length > 1 ? (
                                <>
                                  <strong className="text-brand-red block mb-1 font-bold">{parts[0]}</strong>
                                  <span>{formatBoldText(parts.slice(1).join(': '))}</span>
                                </>
                              ) : (
                                formatBoldText(paragraph)
                              )}
                            </p>
                          );
                        })}
                        {(post.id === 'carp-magur-stocking' || post.id === 'gulsha-farming-guide' || post.id === 'gulsha-fingerling-pond-prep' || post.id === 'ideal-fish-stocking-density' || post.id === 'ideal-fish-stocking-density-guide' || post.id === 'shing-fish-farming-guide' || post.id === 'shing-pond-prep-and-nursery-management') && (
                          <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-brand-red/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-start gap-3 text-left">
                              <Stethoscope className="text-brand-red shrink-0 mt-0.5" size={20} />
                              <div>
                                <h4 className="text-sm font-black text-slate-950">
                                  {lang === 'bn' ? 'পুকুরের স্বাস্থ্য ও মাছের রোগ নিয়ে চিন্তিত?' : 'Concerned About Pond Health or Fish Diseases?'}
                                </h4>
                                <p className="text-xs text-slate-600 mt-1 leading-normal">
                                  {lang === 'bn' 
                                    ? 'আমাদের এআই-চালিত "একুয়া ডক্টর" ডায়াগনস্টিক টুল ব্যবহার করে পুকুরের পানি ও রোগের তাৎক্ষণিক সমাধান পান।' 
                                    : 'Use our AI-powered "AquaDoctor" diagnostic tool to analyze water quality and get instant solutions.'}
                                </p>
                              </div>
                            </div>
                            <Link 
                              href="/aquadoctor"
                              className="w-full sm:w-auto px-4 py-2 bg-brand-red text-white text-xs font-black rounded-lg hover:bg-[#b01018] text-center transition-all shrink-0 cursor-pointer shadow-xs"
                            >
                              {lang === 'bn' ? 'একুয়া ডক্টর টুল দেখুন' : 'Consult AquaDoctor'}
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Read More button */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs text-slate-400 font-semibold font-sans">Expert BioScience Limited</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[11px] text-[#e11922]/80 hover:text-[#e11922] font-bold hover:underline flex items-center gap-0.5 transition-all"
                    >
                      {lang === 'bn' ? 'আলাদা পেজে পড়ুন ↗' : 'Read in Dedicated Page ↗'}
                    </Link>
                  </div>
                  
                  <button
                    onClick={() => toggleExpand(post.id)}
                    className="px-4 py-2 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red hover:bg-[#e11922] hover:text-white text-xs font-bold flex items-center gap-1 transition-all cursor-pointer font-sans whitespace-nowrap self-end sm:self-auto"
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
