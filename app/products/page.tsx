'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProductsPage() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#cbd5e1] selection:text-black">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Container */}
      <main className="flex-grow pt-24">
        <ProductCatalog lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
