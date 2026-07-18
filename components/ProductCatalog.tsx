'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '@/lib/products';
import { Search, ShieldCheck, X, MessageCircle, Weight, Award, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface ProductCatalogProps {
  lang: 'bn' | 'en';
}

export default function ProductCatalog({ lang }: ProductCatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    return [
      { id: 'all', bn: 'সব পণ্যসমূহ', en: 'All Products' },
      { id: 'oxygen_gas', bn: 'গ্যাস ও অক্সিজেন', en: 'Oxygen & Gas Control' },
      { id: 'probiotics', bn: 'উপকারী প্রোবায়োটিক', en: 'Probiotics' },
      { id: 'disinfectants', bn: 'জীবাণুনাশক ও কীটনাশক', en: 'Disinfectants' },
      { id: 'nutrition_growth', bn: 'পুষ্টি ও গ্রোথ প্রমোটর', en: 'Nutrition & Growth' },
    ];
  }, []);

  const categorizedProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Search Query Filter
      const search = searchQuery.toLowerCase().trim();
      const matchSearch =
        product.en.title.toLowerCase().includes(search) ||
        product.en.category.toLowerCase().includes(search) ||
        product.en.composition.toLowerCase().includes(search) ||
        product.bn.title.includes(search) ||
        product.bn.category.includes(search) ||
        product.bn.composition.includes(search);

      if (!matchSearch) return false;

      // 2. Category Filter
      if (activeCategory === 'all') return true;
      if (activeCategory === 'oxygen_gas') {
        return product.iconType === 'oxygen' || product.iconType === 'gas';
      }
      if (activeCategory === 'probiotics') {
        return product.iconType === 'probiotic';
      }
      if (activeCategory === 'disinfectants') {
        return product.iconType === 'disinfectant';
      }
      if (activeCategory === 'nutrition_growth') {
        return product.iconType === 'nutrition' || product.iconType === 'growth' || product.iconType === 'liver';
      }
      return true;
    });
  }, [searchQuery, activeCategory]);

  const handleProductWhatsApp = (product: Product) => {
    const pDetails = lang === 'bn' ? product.bn : product.en;
    const preMessage = lang === 'bn'
      ? `হ্যালো এক্সপার্ট বায়োসাইন্স,\nআমি আপনাদের পণ্য "${pDetails.title}" কিনতে চাই এবং পরামর্শের জন্য যুক্ত হতে চাই।`
      : `Hello Expert BioScience,\nI would like to order or consult about your product: "${pDetails.title}".`;
    
    const whatsappUrl = `https://wa.me/8801911865076?text=${encodeURIComponent(preMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white relative border-t border-slate-200">
      {/* Decorative vector assets */}
      <div className="absolute top-1/10 left-1/2 w-80 h-80 bg-brand-red/5 rounded-full filter blur-3xl select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
          <span className="text-xs uppercase tracking-widest text-[#e11922] font-bold block mb-1">
            {lang === 'bn' ? 'অরিজিনাল ও প্রিমিয়াম ফর্মুলেশন' : 'High Performance Aquaculture Care'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 font-sans tracking-tight">
            {lang === 'bn' ? 'আমাদের পণ্য তালিকা' : 'Our Brand Product Catalog'}
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-650 text-sm sm:text-base mt-4 leading-relaxed">
            {lang === 'bn' 
              ? 'আমরা মৎস্য খামারীদের বিশ্বস্ত সঙ্গী হিসেবে সর্বাধুনিক প্রযুক্তিতে প্রস্তুতকৃত অত্যন্ত নিরাপদ মাছের সুরক্ষার ঔষধ সরবরাহ করি।'
              : 'Our state-of-the-art biological formulations safeguard and promote high-yield aquaculture across fish farms in Bangladesh, prioritizing safety and zero synthetic residues.'
            }
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-sm font-sans">
          {/* Search box */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-red/60" size={18} />
            <input
              type="text"
              placeholder={lang === 'bn' ? 'ওষুধ বা রোগ লিখে খুঁজুন...' : 'Search medicine name, elements...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-medium"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto scrollbar-none overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs rounded-xl font-bold cursor-pointer whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {lang === 'bn' ? cat.bn : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {categorizedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {categorizedProducts.map((product) => {
              const details = lang === 'bn' ? product.bn : product.en;
              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between bento-cell p-6 text-left"
                >
                  <div className="flex flex-col space-y-4">
                    {/* Floating decoration indicator */}
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-md border border-brand-red/15">
                        {details.category}
                      </span>
                      <span className="text-[11px] font-extrabold text-[#e11922] font-mono">
                        {details.origin}
                      </span>
                    </div>

                    {/* Logo styled representation mirroring fish medicine pouch */}
                    <Link
                      href={`/products/${product.id}`}
                      className={`relative h-44 rounded-xl bg-gradient-to-br ${product.imagePlaceholderColor} overflow-hidden flex flex-col justify-between p-4 shadow-inner border border-white/10 group-hover:scale-102 transition-transform duration-300 block cursor-pointer`}
                    >
                      {/* Ripple backgrounds */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                      
                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-1 bg-[#e11922] px-2 py-0.5 rounded-md text-[9px] font-bold text-white shadow-sm border border-white/10">
                          {lang === 'bn' ? 'অরিজিনাল' : 'Premium'}
                        </div>
                        <span className="text-[11px] text-white font-black drop-shadow font-sans">EBL</span>
                      </div>

                      <div className="flex flex-col z-10 text-left">
                        <span className="text-xl font-black text-white drop-shadow-md text-nowrap select-none overflow-hidden text-ellipsis">
                          {product.id.toUpperCase()}
                        </span>
                        <span className="text-[9px] text-[#ffebee] tracking-wider font-semibold">
                          {details.title.split(' (')[0]}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-white/95 font-bold z-10 border-t border-white/10 pt-1.5">
                        <div className="flex items-center gap-1">
                          <Weight size={10} />
                          <span>{details.packSize.split(' ')[0]} {details.packSize.split(' ')[1]}</span>
                        </div>
                        <span className="text-[9px] bg-black/20 px-1.5 py-0.5 rounded text-white/90">
                          {product.id === 'oxyadd' ? 'Active O2' : product.id === 'bioprob-max' ? '日本' : 'Global Spec'}
                        </span>
                      </div>
                    </Link>

                    {/* Title */}
                    <Link href={`/products/${product.id}`} className="block">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors pt-2 leading-snug cursor-pointer">
                        {details.title}
                      </h3>
                    </Link>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 line-clamp-4 leading-relaxed">
                      {details.description}
                    </p>
                  </div>

                  {/* Actions buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-200">
                    <Link
                      href={`/products/${product.id}`}
                      className="py-2.5 rounded-xl bg-slate-100 border border-slate-250 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Info size={14} />
                      <span>{lang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
                    </Link>

                    <button
                      onClick={() => handleProductWhatsApp(product)}
                      className="py-2.5 rounded-xl bg-brand-red hover:bg-[#b0131b] text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm shadow-brand-red/10"
                    >
                      <MessageCircle size={14} />
                      <span>{lang === 'bn' ? 'পরামর্শ ও অর্ডার' : 'WhatsApp Order'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 max-w-xl mx-auto font-sans">
            <HelpCircle size={48} className="mx-auto text-brand-red/30 mb-3" />
            <h3 className="text-lg font-bold text-slate-900">
              {lang === 'bn' ? 'পণ্য খুঁজে পাওয়া যায়নি' : 'No medicine found'}
            </h3>
            <p className="text-slate-550 text-sm mt-1">
              {lang === 'bn' ? 'অন্য কোন নাম লিখে পুনরায় অনুসন্ধান করুন।' : 'Try searching other terms or select another category.'}
            </p>
          </div>
        )}

      </div>

      {/* Product Details Modal Box */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black"
            ></motion.div>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 p-5 bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedProduct.imagePlaceholderColor}`}></div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#e11922]">{lang === 'bn' ? selectedProduct.bn.category : selectedProduct.en.category}</span>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-lg p-1 text-slate-500 hover:text-slate-950 hover:bg-slate-200/50 transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6 text-left">
                
                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {lang === 'bn' ? selectedProduct.bn.title : selectedProduct.en.title}
                  </h3>
                  <p className="text-sm text-brand-red mt-1 font-semibold flex items-center gap-1.5">
                    <Award size={14} />
                    <span>{lang === 'bn' ? `মূল প্রস্তুতকারক/দেশ: ${selectedProduct.bn.origin}` : `Origin of Formulation: ${selectedProduct.en.origin}`}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-650 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {lang === 'bn' ? selectedProduct.bn.description : selectedProduct.en.description}
                </p>

                {/* Specifications Matrix Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[11px] uppercase tracking-wide font-extrabold text-[#e11922]">{lang === 'bn' ? 'প্রধান রাসায়নিক উপাদান' : 'Chemical Composition'}</span>
                    <span className="block text-sm text-slate-800 mt-1.5 font-sans font-semibold">
                      {lang === 'bn' ? selectedProduct.bn.composition : selectedProduct.en.composition}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[11px] uppercase tracking-wide font-extrabold text-[#e11922]">{lang === 'bn' ? 'প্যাকেজিং ও পরিমাণ' : 'Standard Pack Size'}</span>
                    <span className="block text-sm text-slate-800 mt-1.5 font-sans font-semibold">
                      {lang === 'bn' ? selectedProduct.bn.packSize : selectedProduct.en.packSize}
                    </span>
                  </div>
                </div>

                {/* Benefits checklist */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1.5">
                    {lang === 'bn' ? 'মূল উপকারিতাসমূহ' : 'Key Pharmacological Benefits'}
                  </h4>
                  <ul className="space-y-2.5">
                    {(lang === 'bn' ? selectedProduct.bn.benefits : selectedProduct.en.benefits).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-650 leading-snug">
                        <ShieldCheck size={16} className="text-brand-red shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage administration instructions */}
                <div className="p-4 rounded-2xl bg-brand-red/5 border border-brand-red/25 space-y-1.5 text-left">
                  <h3 className="text-xs font-black uppercase text-brand-red tracking-widest flex items-center gap-1.5 leading-none">
                    <Info size={14} />
                    <span>{lang === 'bn' ? 'প্রয়োগ মাত্রা ও ব্যবহার বিধি' : 'Recommended Dosage Plan'}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-755 leading-relaxed font-sans mt-2">
                    {lang === 'bn' ? selectedProduct.bn.dosage : selectedProduct.en.dosage}
                  </p>
                </div>

                {/* Manufacturer signature line */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-250 font-mono">
                  <span>{lang === 'bn' ? 'বাজারজাতকারী: ' : 'Marketed by: '} <strong>{lang === 'bn' ? selectedProduct.marketedBy.bn : selectedProduct.marketedBy.en}</strong></span>
                  <span>ISO Approved Spec</span>
                </div>
              </div>

              {/* Action Footer bar */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  {lang === 'bn' ? '*এই পণ্যটি সরাসরি কিনতে বা পরামর্শের জন্য ক্লিক করুন।' : '*Consult our diagnostics specialists regarding this medicine.'}
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-slate-250 text-slate-650 hover:bg-slate-200/50 text-xs font-bold cursor-pointer"
                  >
                    {lang === 'bn' ? 'বন্ধ করুন' : 'Close Details'}
                  </button>

                  <button
                    onClick={() => handleProductWhatsApp(selectedProduct)}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-brand-red hover:bg-[#b0131b] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-all cursor-pointer shadow-md shadow-brand-red/10"
                  >
                    <MessageCircle size={15} />
                    <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপ অর্ডার করুন' : 'WhatsApp Order Now'}</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
