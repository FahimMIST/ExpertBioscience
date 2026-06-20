'use client';

import React from 'react';
import { Mail, Phone, MapPin, Award, ArrowUp } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  lang: 'bn' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-600 overflow-hidden">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand Intro */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {/* Logo Replica */}
              <div className="flex items-center justify-center w-10 h-10 bg-brand-red rounded-lg shadow-sm">
                <span className="font-sans font-extrabold text-sm text-white tracking-widest">EBL</span>
              </div>
              <div className="flex flex-col text-left font-sans">
                <span className="font-black text-brand-red text-lg leading-none">
                  {lang === 'bn' ? 'এক্সপার্ট' : 'Expert'}
                </span>
                <span className="text-slate-905 font-bold text-xs tracking-wider">
                  {lang === 'bn' ? 'বায়োসাইন্স লিমিটেড' : 'BioScience Limited'}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm text-left">
              {lang === 'bn'
                ? 'আমরা যুগোপযোগী প্রযুক্তিতে আন্তর্জাতিক ফর্মুলায় প্রস্তুতকৃত উন্নত মানের মৎস্য সলিউশন সরবরাহ করি। খামারি এবং খামারের সামগ্রিক সুরক্ষায় আমরা সদা প্রস্তুত।'
                : 'Expert BioScience Limited is Bangladesh’s pioneer distributor of international-grade fish probiotics, dissolved oxygen boosters, and liver protection tonics, ensuring safe aquaculture yields.'}
            </p>
          </div>

          {/* Column 2: Quick Smooth Links */}
          <div className="md:col-span-3 flex flex-col space-y-4 text-left">
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider">
              {lang === 'bn' ? 'পুকুর ও খামার গাইড' : 'Quick Navigation'}
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-sm">
              <Link href="/" className="text-left hover:text-brand-red transition-colors text-slate-600 cursor-pointer">
                {lang === 'bn' ? 'হোমপেজ' : 'Homepage'}
              </Link>
              <Link href="/products" className="text-left hover:text-brand-red transition-colors text-slate-600 cursor-pointer">
                {lang === 'bn' ? 'মৎস্য ওষুধ ক্যাটালগ' : 'Fish Medicines Catalog'}
              </Link>
              <Link href="/aquadoctor" className="text-left text-brand-red hover:underline transition-colors font-bold cursor-pointer">
                {lang === 'bn' ? 'অ্যাকুয়া ডাক্তার' : 'AquaDoctor Diagnostics'}
              </Link>
              <Link href="/blog" className="text-left hover:text-brand-red transition-colors text-slate-600 cursor-pointer">
                {lang === 'bn' ? 'মৎস্য পরামর্শ ব্লগ' : 'Aquaculture Blog'}
              </Link>
              <Link href="/about" className="text-left hover:text-brand-red transition-colors text-slate-600 cursor-pointer">
                {lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us & Setup'}
              </Link>
              <Link href="/contact" className="text-left hover:text-brand-red transition-colors text-slate-600 cursor-pointer">
                {lang === 'bn' ? 'যোগাযোগ পেজ' : 'Contact Us Page'}
              </Link>
            </div>
          </div>

          {/* Column 3: Contact & Addresses */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <h4 className="text-slate-900 text-sm font-bold uppercase tracking-wider">
              {lang === 'bn' ? 'যোগাযোগ করুন' : 'Official Coordinates'}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">{lang === 'bn' ? 'প্রধান কার্যালয়:' : 'Head Office:'}</strong> <br />
                  {lang === 'bn' ? 'মইনারটেক, উত্তরখান, ঢাকা, বাংলাদেশ।' : 'Moinartek, Uttarkhan, Dhaka, Bangladesh.'}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-brand-red shrink-0 mt-1" />
                <a href="mailto:expertbioscienceltd@gmail.com" className="hover:text-brand-red transition-colors text-slate-600">
                  expertbioscienceltd@gmail.com
                </a>
              </li>

              <li className="flex flex-col space-y-1">
                <div className="flex items-center gap-2.5 text-slate-800 font-bold">
                  <Phone size={14} className="text-brand-red shrink-0" />
                  <span>{lang === 'bn' ? 'জরুরি পরামর্শ প্রাপ্তির নম্বরসমূহ:' : 'Emergency Hotlines:'}</span>
                </div>
                <div className="pl-6 flex flex-col space-y-1 text-xs">
                  <a href="tel:01718583226" className="hover:text-brand-red text-slate-600 transition-colors font-medium">01718-583226</a>
                  <a href="tel:01677425150" className="hover:text-brand-red text-slate-600 transition-colors font-medium">01677-425150</a>
                  <a href="tel:01912870915" className="hover:text-brand-red text-slate-600 transition-colors font-medium">01912-870915</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center sm:text-left">
            <span>&copy; {currentYear} <strong className="text-slate-700">{lang === 'bn' ? 'এক্সপার্ট বায়োসাইন্স লিমিটেড' : 'Expert BioScience Limited'}</strong>. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
            <span>{lang === 'bn' ? 'খামার ও খামারির নিরবচ্ছিন্ন সেবায় নিয়োজিত।' : 'Dedicated to safe and high-yield Bangladesh farms.'}</span>
          </div>
        </div>
      </div>

      {/* Floating back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-6 p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-brand-red hover:bg-slate-50 transition-all cursor-pointer shadow-md scroll-smooth"
        title="Scroll to Top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
