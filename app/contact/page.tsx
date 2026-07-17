'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const { lang, setLang } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(lang === 'bn' ? 'দয়া করে নাম এবং মোবাইল নম্বর প্রদান করুন।' : 'Please provide name and mobile number.');
      return;
    }
    // Simulate API Submission
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', district: '', message: '' });
    setFormSubmitted(false);
  };

  const helplines = [
    { name: lang === 'bn' ? 'মোঃ আকতারুজ্জামান (হেড অফ সেলস)' : 'Md. Aktaruzzaman (Head of Sales)', phone: '01718-583226' },
    { name: lang === 'bn' ? 'মোঃ রাজিবুল ইসলাম (টেকনিক্যাল কনসালট্যান্ট)' : 'Md. Rajibul Islam (Technical Consultant)', phone: '01677-425150' },
    { name: lang === 'bn' ? 'অফিস হেল্পডেস্ক (সাধারণ জিজ্ঞাসা)' : 'Office Helpdesk (General Queries)', phone: '01912-870915' },
    { name: lang === 'bn' ? 'অফিসিয়াল হোয়াটসঅ্যাপ সাপোর্ট (২৪/৭)' : 'Official WhatsApp Support (24/7)', phone: '+880 1911-865076', isWhatsApp: true },
  ];

  const regionalDealers = [
    { division: lang === 'bn' ? 'ময়মনসিংহ বিভাগ' : 'Mymensingh Division', center: lang === 'bn' ? 'তারাকান্দা ও ত্রিশাল পয়েন্ট' : 'Tarakanda & Trishal Points', phone: '01718-583226' },
    { division: lang === 'bn' ? 'রাজশাহী বিভাগ' : 'Rajshahi Division', center: lang === 'bn' ? 'নাটোর ও বগুড়া জেলা সদর' : 'Natore & Bogra HQ', phone: '01912-870915' },
    { division: lang === 'bn' ? 'খুলনা বিভাগ' : 'Khulna Division', center: lang === 'bn' ? 'যশোর ও সাতক্ষীরা ডিপো' : 'Jessore & Satkhira Depots', phone: '01677-425150' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#cbd5e1] selection:text-black">
      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Page Area */}
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Intro Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 font-sans">
            <span className="px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-[#e11922] text-xs font-bold tracking-widest uppercase inline-block mb-3">
              {lang === 'bn' ? 'সারাদেশে সেবা' : 'Nationwide Service'}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Get in Touch With Us'}
            </h1>
            <p className="mt-4 text-base text-slate-600">
              {lang === 'bn'
                ? 'মৎস্য চাষের যেকোনো সমস্যায় আমাদের কনসালট্যান্টদের সাথে কথা বলুন অথবা আপনার নিকটস্থ পরিবেশকের সাথে যোগাযোগ করুন।'
                : 'Speak with our technical consultants for any crop anomalies, or reach out to find authorised premium dealers.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Contact coordinates & Dealer Locator (5 columns) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* HQ Card */}
              <div className="bento-cell p-6 space-y-4 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11922] font-bold block">
                  {lang === 'bn' ? 'হেড অফিস' : 'Central Registered Office'}
                </span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="font-sans">
                    <h3 className="font-bold text-slate-900 text-base">
                      {lang === 'bn' ? 'এক্সপার্ট বায়োসাইন্স লিমিটেড' : 'Expert BioScience Limited'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 whitespace-normal">
                      {lang === 'bn'
                        ? 'মইনারটেক, উত্তরখান, ঢাকা-১২৩০, বাংলাদেশ।'
                        : 'Moinartek, Uttarkhan, Dhaka-1230, Bangladesh.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-150">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="font-sans">
                    <h3 className="font-bold text-slate-900 text-base">
                      {lang === 'bn' ? 'ইমেইল করুন' : 'Official Email'}
                    </h3>
                    <p className="text-sm text-brand-red mt-1 font-mono font-bold">
                      expertbioscienceltd@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Helplines Matrix */}
              <div className="bento-cell p-6 space-y-4 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11922] font-bold block">
                  {lang === 'bn' ? 'জরুরি কারিগরি কল সেন্টার' : 'Expert Helpline Desk'}
                </span>
                
                <div className="space-y-4 font-sans">
                  {helplines.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-red/20 transition-all duration-300">
                      <div>
                        <p className="text-xs text-slate-500 font-bold">{item.name}</p>
                        <p className="text-sm font-extrabold text-slate-800 mt-0.5">{item.phone}</p>
                      </div>
                      <a
                        href={item.isWhatsApp ? 'https://wa.me/8801911865076' : `tel:${item.phone}`}
                        target={item.isWhatsApp ? '_blank' : undefined}
                        rel={item.isWhatsApp ? 'noopener noreferrer' : undefined}
                        className={`py-1.5 px-3 rounded-lg border font-sans text-xs font-bold transition-all ${
                          item.isWhatsApp 
                            ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-600' 
                            : 'bg-brand-red/10 hover:bg-brand-red/25 border-brand-red/30 text-brand-red'
                        }`}
                      >
                        {item.isWhatsApp ? (lang === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp') : (lang === 'bn' ? 'কল' : 'Call')}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Support Hubs */}
              <div className="bento-cell p-6 space-y-4 text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#e11922] font-bold block">
                  {lang === 'bn' ? 'নিকটবর্তী পরিবেশক গাইড' : 'Regional Agent Hubs'}
                </span>

                <div className="space-y-3 font-sans">
                  {regionalDealers.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-brand-red">{item.division}</span>
                        <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">
                          {lang === 'bn' ? 'পরিবেশক' : 'Agent'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-800 mt-1.5 font-semibold text-left">{item.center}</p>
                      <p className="text-xs font-bold text-slate-500 mt-1 text-left">{lang === 'bn' ? 'ফোন:' : 'Phone:'} {item.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Column 2: Inquiry/Treatment Request Form (7 columns) */}
            <div className="lg:col-span-7">
              <div className="bento-cell p-6 sm:p-8 relative">
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div
                      key="contact-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5 text-left"
                    >
                      <div className="border-b border-slate-200 pb-4">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          <Send size={18} className="text-brand-red animate-pulse" />
                          {lang === 'bn' ? 'কারিগরি ও পণ্যের খোঁজ জানতে লিখুন' : 'Inquire with Product Specialists'}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">
                          {lang === 'bn'
                            ? 'আমাদের পণ্য সম্পর্কে জানতে কিংবা পুকুরের কারিগরি সমস্যার সমাধানের জন্য আপনার বার্তাটি পাঠান।'
                            : 'Fill up the form to let our veterinary team understand your pond and guide you.'}
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                              {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={lang === 'bn' ? 'যেমন: মোঃ আব্দুর রহমান' : 'e.g. Md. Rahman'}
                              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-sm font-medium"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                              {lang === 'bn' ? 'মোবাইল নম্বর *' : 'Mobile Number *'}
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="017XXXXXXXX"
                              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-sm font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                            {lang === 'bn' ? 'জেলা/খামারের এলাকা (ঐচ্ছিক)' : 'District/Farming Area (Optional)'}
                          </label>
                          <input
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            placeholder={lang === 'bn' ? 'যেমন: ত্রিশাল, ময়মনসিংহ' : 'e.g. Trishal, Mymensingh'}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-sm font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                            {lang === 'bn' ? 'আপনার समस्या বা জিজ্ঞাসা লিখুন *' : 'Your Note or Message *'}
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={lang === 'bn' ? 'মাছের রোগ বা ওষুধ ডোজ সম্পর্কিত জরুরি জিজ্ঞাসা...' : 'Ask about specific dosing procedures or urgent diagnostics...'}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-sm font-medium resize-none"
                          />
                        </div>

                        {/* Informative Warning Badge explaining rules */}
                        <div className="flex gap-2.5 p-3 rounded-xl bg-brand-red/5 border border-brand-red/15 items-start">
                          <CheckCircle size={15} className="text-[#e11922] mt-0.5 shrink-0" />
                          <p className="text-[11px] text-slate-600 leading-normal text-left">
                            {lang === 'bn'
                              ? 'আপনার তথ্যটি সরাসরি আমাদের সেলস কো-অর্ডিনেটর এবং ডক্টর প্যানেলে প্রেরণ করা হবে।'
                              : 'Your inquiry goes straight to our sales coordinators and aqua vet desk for direct followup.'}
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-[#b0131b] hover:scale-[1.01] text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer leading-none"
                        >
                          <Send size={16} />
                          <span>{lang === 'bn' ? 'বার্তাটি পাঠান' : 'Submit Inquiry'}</span>
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/25 flex items-center justify-center text-brand-red animate-bounce">
                        <CheckCircle size={36} />
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-2xl font-extrabold text-slate-900">
                          {lang === 'bn' ? 'বার্তাটি সফলভাবে পাঠানো হয়েছে!' : 'Inquiry Submitted Successfully!'}
                        </h2>
                        <p className="text-sm text-slate-600 max-w-md mx-auto">
                          {lang === 'bn'
                            ? 'ধন্যবাদ! আমাদের প্রতিনিধি অতি শীঘ্রই আপনার মোবাইল নম্বরে যোগাযোগ করবেন।'
                            : 'Thank you! Our aquaculture specialist will review your details and reach out shortly.'}
                        </p>
                      </div>

                      {/* Display summary of input */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left w-full max-w-sm space-y-2">
                        <div className="text-xs text-slate-600">
                          <strong>{lang === 'bn' ? 'নাম:' : 'Name:'}</strong> {formData.name}
                        </div>
                        <div className="text-xs text-slate-600">
                          <strong>{lang === 'bn' ? 'মোবাইল:' : 'Phone:'}</strong> {formData.phone}
                        </div>
                        {formData.district && (
                          <div className="text-xs text-slate-600">
                            <strong>{lang === 'bn' ? 'মেডিক্যাল জোন:' : 'Zone:'}</strong> {formData.district}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-xl border border-brand-red/30 text-[#e11922] hover:text-white hover:bg-[#e11922] text-xs font-bold transition-all cursor-pointer font-sans"
                      >
                        {lang === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Submit Another Message'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
