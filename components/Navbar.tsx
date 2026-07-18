'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  lang: 'bn' | 'en';
  setLang: (lang: 'bn' | 'en') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', bn: 'হোম', en: 'Home' },
    { path: '/products', bn: 'পণ্যসমূহ', en: 'Products' },
    { path: '/aquadoctor', bn: 'অ্যাকুয়া ডাক্তার', en: 'AquaDoctor' },
    { path: '/blog', bn: 'ব্লগ', en: 'Blogs' },
    { path: '/about', bn: 'আমাদের কথা', en: 'About Us' },
    { path: '/contact', bn: 'যোগাযোগ', en: 'Contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md shadow-slate-100/50'
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Downloaded Logo Image */}
            <div className="relative flex items-center justify-center w-16 h-16 bg-transparent overflow-hidden shrink-0">
              <Image
                src="/expertbioscience_logo.png"
                alt="Expert BioScience Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Logo text - bangla default togglable */}
            <div className="flex flex-col select-none text-left justify-center">
              <span className="font-extrabold text-brand-red text-lg sm:text-xl md:text-xl tracking-tight leading-none">
                {lang === 'bn' ? 'এক্সপার্ট' : 'Expert'}
              </span>
              <span className="text-slate-950 font-bold text-xs sm:text-sm md:text-sm tracking-wide mt-1">
                {lang === 'bn' ? 'বায়োসাইন্স লিমিটেড' : 'BioScience Limited'}
              </span>
              <span className="hidden xs:inline-block text-[8px] sm:text-[9px] text-slate-500 font-sans tracking-widest uppercase font-semibold mt-0.5">
                {lang === 'bn' ? 'খামার ও খামারির আস্থায়' : 'Stay with Farms & Farmers'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-brand-red/5 relative group ${
                    isActive ? 'text-brand-red font-bold bg-brand-red/5' : 'text-slate-700 hover:text-brand-red'
                  }`}
                >
                  {lang === 'bn' ? link.bn : link.en}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-brand-red transition-transform duration-200 origin-center ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Top-right action icons & toggle button */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Selection Toggle */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setLang('bn')}
                className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-all duration-200 font-semibold ${
                  lang === 'bn'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-all duration-200 font-semibold ${
                  lang === 'en'
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Consultation Call CTA */}
            <a
              href="tel:01718583226"
              className="px-4 py-2 rounded-xl bg-brand-red/10 hover:bg-brand-red/15 border border-brand-red/20 text-brand-red text-xs font-bold flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
            >
              <PhoneCall size={13} />
              <span>{lang === 'bn' ? 'কল করুন' : 'Call Admin'}</span>
            </a>
          </div>

          {/* Right Mobile Actions & Hamburger */}
          <div className="flex items-center sm:hidden space-x-2">
            {/* Mini Language Toggle */}
            <button
              onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-100 text-xs text-slate-800 font-semibold"
            >
              <Globe size={12} />
              <span>{lang === 'bn' ? 'EN' : 'বাংলা'}</span>
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-white border-b border-slate-200/80 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                      isActive ? 'text-brand-red bg-brand-red/10 font-bold' : 'text-slate-700 hover:text-brand-red hover:bg-brand-red/5'
                    }`}
                  >
                    {lang === 'bn' ? link.bn : link.en}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3 items-center justify-between">
                <div className="flex bg-slate-100 border border-slate-200 rounded-full p-1">
                  <button
                    onClick={() => { setLang('bn'); setIsOpen(false); }}
                    className={`px-4 py-1 text-xs rounded-full font-bold ${
                      lang === 'bn' ? 'bg-brand-red text-white' : 'text-slate-500'
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => { setLang('en'); setIsOpen(false); }}
                    className={`px-4 py-1 text-xs rounded-full font-bold ${
                      lang === 'en' ? 'bg-brand-red text-white' : 'text-slate-500'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <a
                  href="tel:01718583226"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-bold"
                >
                  <PhoneCall size={13} />
                  <span>{lang === 'bn' ? 'জরুরি যোগাযোগ করুন' : 'Emergency Call'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
