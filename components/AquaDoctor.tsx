'use client';

import React, { useState } from 'react';
import { Stethoscope, MessageCircle, Info, CheckCircle2, ShieldAlert, Sparkles, Calculator, Droplets, Award } from 'lucide-react';

interface AquaDoctorProps {
  lang: 'bn' | 'en';
}

export default function AquaDoctor({ lang }: AquaDoctorProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    cultureType: 'pond',
    speciesType: 'rui_katla',
    symptom: 'gas',
    pondSize: '',
    pHLevel: '',
    fishDensity: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // States for Carp & Magur Mixed Stocking Calculator
  const [stockSize, setStockSize] = useState<number>(33); // Default 33 decimals (1 Bigha)
  const [stockUnit, setStockUnit] = useState<'decimal' | 'bigha' | 'acre'>('decimal');
  const [activeCalc, setActiveCalc] = useState<'carp_magur' | 'gulsha_prep'>('carp_magur');

  const options = {
    cultureType: [
      { id: 'pond', bn: 'ঐতিহ্যবাহী পুকুর', en: 'Traditional Pond' },
      { id: 'gher', bn: 'ঘের চাষ (চিংড়ি ও মাছ)', en: 'Commercial Gher' },
      { id: 'biofloc', bn: 'বায়োফ্লক প্রজেক্ট', en: 'Biofloc Tank' },
      { id: 'cage', bn: 'খাঁচায় মাছ চাষ', en: 'Cage Cultivation' },
    ],
    speciesType: [
      { id: 'rui_katla', bn: 'রুই / কাতলা / মৃগেল', en: 'Carp species (Rui/Catla/Mrigal)' },
      { id: 'pangasius_tilapia', bn: 'পাঙ্গাস / তেলাপিয়া', en: 'Pangasius & Tilapia' },
      { id: 'catfish', bn: 'শিং / মাগুর / পাবদা / গুলসা', en: 'Catfish / Shing / Magur / Pabda / Gulsha' },
      { id: 'shrimp', bn: 'গলদা / বাগদা চিংড়ি', en: 'Prawn & Shrimp (Golda/Bagda)' },
      { id: 'other', bn: 'মিশ্র চাষ / অন্যান্য', en: 'Polyculture / Other Species' },
    ],
    symptom: [
      { id: 'gas', bn: 'विषাক্ত গ্যাস ও দুর্গন্ধ', en: 'Toxic Gas & Foul Odor (Ammonia)' },
      { id: 'suffocation', bn: 'মাছ ভেসে থাকা/খাবি খাওয়া', en: 'Fish Gasping / Floating at Surface' },
      { id: 'rot', bn: 'লেজ পঁচা, ফুলকা পঁচা রোগ', en: 'Tail Rot / Gill Rot Infections' },
      { id: 'parasites', bn: 'মাছের গায়ে উকুন ও পরজীবী', en: 'External Lice / Lernaea Parasites' },
      { id: 'sores', bn: 'লাল ক্ষত বা আঁশ খসে পড়া', en: 'Red Sores / Loss of Body Scales' },
      { id: 'appetite', bn: 'রুচিহীনতা ও কম খাদ্য গ্রহণ', en: 'Poor Appetite / Sluggish Activity' },
      { id: 'other', bn: 'অন্যান্য জটিল লক্ষণ', en: 'Other Complex Disease Symptoms' },
    ],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cType = options.cultureType.find((c) => c.id === formData.cultureType);
    const sType = options.speciesType.find((s) => s.id === formData.speciesType);
    const symp = options.symptom.find((sy) => sy.id === formData.symptom);

    const cTypeLabel = lang === 'bn' ? cType?.bn : cType?.en;
    const sTypeLabel = lang === 'bn' ? sType?.bn : sType?.en;
    const sympLabel = lang === 'bn' ? symp?.bn : symp?.en;

    // Formatting structured message for Expert BioScience WhatsApp Support
    const message = `*🩺 এক্সপার্ট অ্যাকুয়া ডাক্তার ডায়াগনস্টিক রিপোর্ট*
---------------------------------------
👤 *চাষির নাম (Name):* ${formData.name || 'উল্লেখিত নেই'}
📞 *মোবাইল (Phone):* ${formData.phone || 'উল্লেখিত নেই'}
📍 *ঠিকানা/জেলা (Location):* ${formData.location || 'উল্লেখিত নেই'}
🌾 *চাষের ধরন (Culture):* ${cTypeLabel}
🐟 *মৎস্য প্রজাতি (Species):* ${sTypeLabel}
⚠️ *প্রধান সমস্যা (Symptom):* ${sympLabel}

📏 *পুকুরের আকার (Pond Size):* ${formData.pondSize || 'উল্লেখিত নেই'}
🧪 *পিএইচ লেভেল (pH Level):* ${formData.pHLevel || 'উল্লেখিত নেই'}
🐟 *মাছের ঘনত্ব (Fish Density):* ${formData.fishDensity || 'উল্লেখিত নেই'}

📝 *রোগের বিস্তারিত লক্ষণ (Details):*
${formData.description || 'কোনো অতিরিক্ত বিবরণ দেয়া হয়নি।'}
---------------------------------------
*অনুগ্রহ করে দ্রুত সমাধান এবং উপযোগী এক্সপার্ট ওষুধের নাম জানান।*`;

    // Opens official contact numbers
    const whatsappUrl = `https://wa.me/8801911865076?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="aquadoctor" className="py-20 relative bg-slate-50 border-t border-slate-200">
      {/* Background visual graphics */}
      <div className="absolute top-1/3 right-1/12 w-72 h-72 bg-brand-red/5 rounded-full filter blur-3xl select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Diagnostic Left Column Content */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="inline-flex items-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider">
                <Stethoscope size={12} className="animate-pulse" />
                {lang === 'bn' ? 'ফ্রি অ্যাকুয়া ডাক্তার প্রেসক্রিপশন' : 'Free Diagnostic Engine'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight leading-tight">
              {lang === 'bn' ? (
                <>
                  মাছ বা ঘেরের সমস্যা? <br />
                  <span className="bg-gradient-to-r from-brand-red to-slate-800 bg-clip-text text-transparent">
                    হোয়াটসঅ্যাপে তাৎক্ষণিক সমাধান!
                  </span>
                </>
              ) : (
                <>
                  Pond disease crisis? <br />
                  <span className="bg-gradient-to-r from-brand-red to-slate-800 bg-clip-text text-transparent">
                    Get Instant WhatsApp Rx!
                  </span>
                </>
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-left">
              {lang === 'bn'
                ? 'আপনার মাছের যেকোনো রোগ লক্ষণ, পানির অস্বাভাবিক গন্ধ বা ক্ষতিকর অ্যামোনিয়া গ্যাস সমস্যার বিবরণ লিখে নিচের ফর্মটি সম্পন্ন করুন। সমাধান বাটনে ক্লিক করলে আপনার তথ্যটি সরাসরি আমাদের এক্সপার্ট কনসালট্যান্টসদের নিকট চলে যাবে এবং সমাধান ও ওষুধের সুনির্দিষ্ট ডোজ হোয়াটসঅ্যাপে দেওয়া হবে।'
                : 'Having issues with stagnant growth, massive floating, scale infections, or ammonia high range? Select your symptoms and details. This smart triage system automatically files a structured prescription query and forwards it to Expert BioScience veterinary specialists.'}
            </p>

            {/* Quick Diagnostic Instructions Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {lang === 'bn' ? 'সহজ ৩ ধাপে পরামর্শ' : '3-Step Easy Consultation'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'bn' ? 'তথ্য দিন ➔ হোয়াটসঅ্যাপে রিডাইরেক্ট করুন ➔ প্রেসক্রিপশন পান!' : 'Submit details ➔ WhatsApp redirects ➔ Receive free prescriptions!'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-slate-100 border border-slate-300 text-brand-red shrink-0 mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {lang === 'bn' ? 'শতভাগ ফ্রি ও নির্ভরযোগ্য সেবা' : 'Zero Costs Involved'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'bn' ? 'আমরা কৃষক ও খামারির সুবিধার্থে কোনো অতিরিক্ত ফি ছাড়াই এ সেবা প্রদান করি।' : 'Expert advice is provided absolutely free for registered farmers.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Alert */}
            <div className="p-4 rounded-xl bg-brand-red/5 border-t-2 border-brand-red flex items-start gap-2.5">
              <Info size={16} className="text-brand-red mt-0.5 shrink-0" />
              <p className="text-xs text-slate-700 leading-relaxed text-left">
                {lang === 'bn' 
                  ? 'আমাদের সেবা মূলত পরামর্শমূলক। মৎস্য জটিলতা এড়াতে বোতলে নির্দেশিত ব্যবহারবিধি অনুসরণ অথবা মৎস্য কর্মকর্তার পরামর্শ নিতে উৎসাহিত করা হলো।'
                  : 'Diagnostics advice is based on active indicators. Follow pack instructions or consult an executive before applying raw chemicals.'
                }
              </p>
            </div>
          </div>

          {/* Diagnosis Interactive Form Column */}
          <div className="lg:col-span-7 bento-cell p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Farmer Name */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'চাষির নাম (Name) *' : 'Farmer Name *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={lang === 'bn' ? 'যেমন: মো: রফিকুল ইসলাম' : 'e.g. Rafiqul Islam'}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'মোবাইল নম্বর (Phone) *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={lang === 'bn' ? 'যেমন: ০১৭১৮-xxxxx' : 'e.g. 01718-xxxxxx'}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">
                  {lang === 'bn' ? 'ঠিকানা (জেলা ও উপজেলা) *' : 'Location (District & Upazila) *'}
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder={lang === 'bn' ? 'যেমন: ফুলপুর, ময়মনসিংহ' : 'e.g. Phulpur, Mymensingh'}
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans"
                />
              </div>

              {/* Selection fields row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Cultivation environment */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'চাষের মাধ্যম (Environment)' : 'Culture Mode'}
                  </label>
                  <select
                    name="cultureType"
                    value={formData.cultureType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  >
                    {options.cultureType.map((o) => (
                      <option key={o.id} value={o.id}>
                        {lang === 'bn' ? o.bn : o.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cultured Species list */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'মাছ ও খামারের প্রজাতি' : 'Cultivated Species'}
                  </label>
                  <select
                    name="speciesType"
                    value={formData.speciesType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  >
                    {options.speciesType.map((o) => (
                      <option key={o.id} value={o.id}>
                        {lang === 'bn' ? o.bn : o.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional enhancements row: Pond Size, pH level, Fish Density */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-slate-200/60 py-4 my-2">
                {/* Pond Size */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'পুকুরের আকার (ঐচ্ছিক)' : 'Pond Size (Optional)'}
                  </label>
                  <input
                    type="text"
                    name="pondSize"
                    placeholder={lang === 'bn' ? 'যেমন: ৫০ শতাংশ' : 'e.g. 50 Decimals'}
                    value={formData.pondSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans"
                  />
                </div>

                {/* pH Level */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'পিএইচ লেভেল (ঐচ্ছিক)' : 'pH Level (Optional)'}
                  </label>
                  <input
                    type="text"
                    name="pHLevel"
                    placeholder={lang === 'bn' ? 'যেমন: ৭.৫' : 'e.g. 7.5'}
                    value={formData.pHLevel}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans"
                  />
                </div>

                {/* Fish Density */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                    {lang === 'bn' ? 'মাছের ঘনত্ব (ঐচ্ছিক)' : 'Density (Optional)'}
                  </label>
                  <input
                    type="text"
                    name="fishDensity"
                    placeholder={lang === 'bn' ? 'যেমন: ১০০ কেজি/শতাংশ' : 'e.g. 150 Pcs/Dec'}
                    value={formData.fishDensity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans"
                  />
                </div>
              </div>

              {/* Symptom selection */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1 font-sans">
                  <ShieldAlert size={12} className="text-brand-red animate-pulse" />
                  <span>{lang === 'bn' ? 'প্রধান উপসর্গ বা রোগ লক্ষণ' : 'Primary Trouble Indicator'}</span>
                </label>
                <select
                  name="symptom"
                  value={formData.symptom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-semibold"
                >
                  {options.symptom.map((o) => (
                    <option key={o.id} value={o.id}>
                      {lang === 'bn' ? o.bn : o.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Detailed Description */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">
                  {lang === 'bn' ? 'রোগের ক্রান্তিকাল ও বিবরণ (Symptoms & Signs)' : 'Case History & Description'}
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder={
                    lang === 'bn'
                       ? 'মাছের আচরণ কেমন? পুকুরের পানি কেমন ঘোলা বা গন্ধ? কোনো মাছ মারা যাচ্ছে কি না বিস্তারিত লিখুন...'
                       : 'Provide extra context like: pond depth, color, active mortality, behavior issues, or antibiotic history...'
                  }
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all font-sans resize-none"
                ></textarea>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-red hover:bg-[#b0131b] disabled:bg-slate-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-red/10 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle size={18} className="animate-bounce" />
                <span>
                  {isSubmitting
                    ? (lang === 'bn' ? 'অ্যাকুয়া রিপোর্ট প্রস্তুত হচ্ছে...' : 'Preparing Triage Report...')
                    : (lang === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি সমাধান পান' : 'Get Free WhatsApp Diagnosis Now')
                  }
                </span>
              </button>

            </form>
          </div>

        </div>

        {/* Interactive Stocking Density Calculator Section */}
        <div className="mt-24 border-t border-slate-200 pt-16 font-sans text-left">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 mb-8 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-brand-red font-extrabold flex items-center justify-center gap-1.5 leading-none">
                <Calculator size={14} className="text-brand-red" />
                {lang === 'bn' ? 'বিজ্ঞানসম্মত মৎস্য হিসাব ক্যালকুলেটর' : 'Scientific Aquaculture Calculator Tool'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {lang === 'bn' 
                  ? 'উন্নত পুকুর ব্যবস্থাপনা ও ডোজ ক্যালকুলেটর' 
                  : 'Advanced Pond Management & Dosage Calculator'}
              </h3>
              <p className="text-sm text-slate-500">
                {lang === 'bn'
                  ? 'আপনার পুকুরের সঠিক আয়তন অনুযায়ী বিজ্ঞানসম্মত উপায়ে সঠিক মাছের সংখ্যা অথবা পুকুর প্রস্তুতির প্রয়োজনীয় উপাদান হিসাব করুন।'
                  : 'Calculate tailored stocking densities or essential chemical dosages based on your exact pond dimensions.'}
              </p>
            </div>

            {/* Calculator Tab Switcher */}
            <div className="flex justify-center mb-10">
              <div className="grid grid-cols-2 bg-slate-200 p-1 rounded-2xl border border-slate-300 max-w-lg w-full">
                <button
                  type="button"
                  onClick={() => setActiveCalc('carp_magur')}
                  className={`py-2 px-3 sm:px-4 text-[11px] sm:text-xs font-black rounded-xl cursor-pointer transition-all ${
                    activeCalc === 'carp_magur'
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/15'
                      : 'text-slate-650 hover:text-slate-900 hover:bg-slate-300/30'
                  }`}
                >
                  {lang === 'bn' ? 'কার্প ও মাগুর পোনা মজুদ' : 'Carp & Magur Stocking'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCalc('gulsha_prep')}
                  className={`py-2 px-3 sm:px-4 text-[11px] sm:text-xs font-black rounded-xl cursor-pointer transition-all ${
                    activeCalc === 'gulsha_prep'
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/15'
                      : 'text-slate-650 hover:text-slate-900 hover:bg-slate-300/30'
                  }`}
                >
                  {lang === 'bn' ? 'গুলসা পুকুর প্রস্তুতি ও ওষুধ হিসাব' : 'Gulsha Pond Prep & Dosage'}
                </button>
              </div>
            </div>

            {/* Calculator Interface Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Input Panel */}
              <div className="md:col-span-5 bg-slate-100/80 p-6 rounded-[24px] border border-slate-200/60 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 flex items-center gap-2">
                    <Droplets size={14} className="text-brand-red" />
                    {lang === 'bn' ? 'পুকুরের আয়তন ইনপুট' : 'Pond Area Input'}
                  </h4>

                  {/* Unit Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-slate-600 uppercase">
                      {lang === 'bn' ? 'পরিমাপের একক' : 'Select Unit'}
                    </label>
                    <div className="grid grid-cols-3 bg-slate-200 rounded-xl p-1 gap-1 border border-slate-300/50">
                      {(['decimal', 'bigha', 'acre'] as const).map((unit) => (
                        <button
                          key={unit}
                          type="button"
                          onClick={() => {
                            setStockUnit(unit);
                            if (unit === 'decimal') setStockSize(33);
                            else if (unit === 'bigha') setStockSize(1);
                            else if (unit === 'acre') setStockSize(0.33);
                          }}
                          className={`py-2 text-xs font-black rounded-lg cursor-pointer transition-all ${
                            stockUnit === unit
                              ? 'bg-brand-red text-white shadow-xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                          }`}
                        >
                          {unit === 'decimal' ? (lang === 'bn' ? 'শতক' : 'Decimal') : unit === 'bigha' ? (lang === 'bn' ? 'বিঘা' : 'Bigha') : (lang === 'bn' ? 'একর' : 'Acre')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Input Slider & Number Field */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-extrabold text-slate-700">
                        {lang === 'bn' ? 'পুকুরের সাইজ লিখুন বা স্লাইড করুন:' : 'Enter Pond Size:'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={stockUnit === 'decimal' ? "5" : stockUnit === 'bigha' ? "0.2" : "0.1"}
                        max={stockUnit === 'decimal' ? "500" : stockUnit === 'bigha' ? "15" : "5"}
                        step={stockUnit === 'decimal' ? "1" : "0.1"}
                        value={stockSize}
                        onChange={(e) => setStockSize(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-red"
                      />
                      <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3 py-1.5 min-w-[120px] justify-between shadow-2xs">
                        <input
                          type="number"
                          value={stockSize}
                          step={stockUnit === 'decimal' ? "1" : "0.1"}
                          onChange={(e) => setStockSize(Math.max(0, Number(e.target.value)))}
                          className="w-full text-xs font-black text-slate-800 focus:outline-none text-center"
                        />
                        <span className="text-[10px] font-bold text-slate-400 ml-1">
                          {stockUnit === 'decimal' ? (lang === 'bn' ? 'শতক' : 'Dec') : stockUnit === 'bigha' ? (lang === 'bn' ? 'বিঘা' : 'Bigha') : (lang === 'bn' ? 'একর' : 'Acre')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Note */}
                <div className="p-3.5 bg-brand-red/5 rounded-xl border border-brand-red/10 flex items-start gap-2.5">
                  <Info size={14} className="text-brand-red shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {activeCalc === 'carp_magur' ? (
                      lang === 'bn'
                        ? 'পুকুরের গভীরতা কমপক্ষে ৪-৫ ফুট হওয়া উচিত। ১ বিঘা (৩৩ শতক) পুকুরে কার্পের সাথে মাগুরের চাষে পানির ৩টি স্তরের সঠিক ব্যবহার নিশ্চিত করার হিসাব নিচে দেখানো হলো।'
                        : 'Ensure pond depth is at least 4-5 feet. Below is the multi-tier recommendation for carp and catfish co-culture designed per 33 decimals (1 Bigha).'
                    ) : (
                      lang === 'bn'
                        ? 'গুলসা মাছ চাষের জন্য ৩ দিন বয়সী রেণুকে নার্সারিতে ১৮–৩০ দিন লালন করে কালচার পুকুরে ৫–৬ ফুট গভীরতায় সঠিক প্রস্তুত প্রণালীর ডোজ হিসাব নিচে দেওয়া হলো।'
                        : 'For Gulsha catfish, fry are nursed for 18–30 days. Shown below are targeted chemical & probiotic dosages for the 10-step culture pond prep.'
                    )}
                  </p>
                </div>
              </div>

              {/* Output Recommendation Panel */}
              <div className="md:col-span-7 bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm space-y-6">
                {/* Calculate equivalent decimals */}
                {(() => {
                  const dec = stockUnit === 'decimal' ? stockSize : stockUnit === 'bigha' ? stockSize * 33 : stockSize * 100;
                  const ratio = dec / 33;

                  if (activeCalc === 'carp_magur') {
                    const katla = Math.round(300 * ratio);
                    const silver = Math.round(150 * ratio);
                    const rui = Math.round(400 * ratio);
                    const mrigel = Math.round(150 * ratio);
                    const kalibaus = Math.round(250 * ratio);
                    const blackCarp = Math.round(50 * ratio);
                    const grassCarp = Math.round(250 * ratio);
                    const magurMin = Math.round(1000 * ratio);
                    const magurMax = Math.round(1200 * ratio);

                    const totalPonaMin = Math.round(2550 * ratio);
                    const totalPonaMax = Math.round(2750 * ratio);

                    return (
                      <>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                            <Award size={14} className="text-emerald-500" />
                            {lang === 'bn' ? 'প্রস্তাবিত পোনা মজুদের হার' : 'Recommended Fingerling Counts'}
                          </h4>
                          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            {dec.toFixed(1)} {lang === 'bn' ? 'শতক পুকুর' : 'Decimals Equivalent'}
                          </span>
                        </div>

                        {/* Display Table */}
                        <div className="space-y-3">
                          {/* Surface Feeders */}
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
                                🟢 {lang === 'bn' ? 'উপরের স্তর (Surface Feeder)' : 'Surface Feeders'}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                                <span className="text-slate-600">{lang === 'bn' ? 'কাতলা' : 'Catla'}</span>
                                <span className="font-extrabold text-slate-900">{katla} {lang === 'bn' ? 'টি' : 'pcs'}</span>
                              </div>
                              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                                <span className="text-slate-600">{lang === 'bn' ? 'সিলভার/বিগহেড' : 'Silver/Bighead'}</span>
                                <span className="font-extrabold text-slate-900">{silver} {lang === 'bn' ? 'টি' : 'pcs'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Column Feeders */}
                          <div className="p-3 bg-amber-50/20 rounded-xl border border-amber-100/50 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">
                                🟡 {lang === 'bn' ? 'মধ্য স্তর (Column Feeder)' : 'Column Feeders'}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 text-xs">
                              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                                <span className="text-slate-600">{lang === 'bn' ? 'রুই মাছ' : 'Rui'}</span>
                                <span className="font-extrabold text-slate-900">{rui} {lang === 'bn' ? 'টি' : 'pcs'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Feeders */}
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                                🔵 {lang === 'bn' ? 'নিচের স্তর (Bottom Feeder)' : 'Bottom Feeders'}
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2.5 text-xs">
                              <div className="flex flex-col justify-center bg-white p-2 rounded-lg border border-slate-100 text-center">
                                <span className="text-[10px] text-slate-400 font-medium">{lang === 'bn' ? 'মৃগেল' : 'Mrigal'}</span>
                                <span className="font-extrabold text-slate-900 mt-0.5">{mrigel}</span>
                              </div>
                              <div className="flex flex-col justify-center bg-white p-2 rounded-lg border border-slate-100 text-center">
                                <span className="text-[10px] text-slate-400 font-medium">{lang === 'bn' ? 'কালিবাউশ' : 'Kalibaus'}</span>
                                <span className="font-extrabold text-slate-900 mt-0.5">{kalibaus}</span>
                              </div>
                              <div className="flex flex-col justify-center bg-white p-2 rounded-lg border border-slate-100 text-center">
                                <span className="text-[10px] text-slate-400 font-medium">{lang === 'bn' ? 'ব্ল্যাক কার্প' : 'Black Carp'}</span>
                                <span className="font-extrabold text-slate-900 mt-0.5">{blackCarp}</span>
                              </div>
                            </div>
                          </div>

                          {/* All-Layer Feeders */}
                          <div className="p-3 bg-emerald-50/20 rounded-xl border border-emerald-100/50 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider">
                                🌿 {lang === 'bn' ? 'সকল স্তরে বিচরণকারী' : 'All-Layer Feeders'}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 text-xs">
                              <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100">
                                <span className="text-slate-600">{lang === 'bn' ? 'গ্রাস কার্প (আগাছা দমনে)' : 'Grass Carp (Weed Control)'}</span>
                                <span className="font-extrabold text-slate-900">{grassCarp} {lang === 'bn' ? 'টি' : 'pcs'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Magur/Catfish */}
                          <div className="p-3 bg-rose-50/30 rounded-xl border border-rose-100/50 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-brand-red uppercase tracking-wider">
                                🐟 {lang === 'bn' ? 'অতিরিক্ত লাভজনক শিং/মাগুর প্রজাতি' : 'Additional Premium Species'}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 text-xs">
                              <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-100">
                                <span className="text-slate-700 font-bold">{lang === 'bn' ? 'মাগুর মাছের পোনা' : 'Magur Fingerlings'}</span>
                                <span className="font-extrabold text-brand-red bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md">
                                  {magurMin} - {magurMax} {lang === 'bn' ? 'টি' : 'pcs'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Total Highlights */}
                        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-extrabold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <div className="text-center sm:text-left space-y-1">
                            <span>{lang === 'bn' ? 'সর্বমোট মজুদ যোগ্য পোনা:' : 'Total Recommended Stocking:'}</span>
                            <span className="block text-lg sm:text-xl font-black text-slate-900">
                              {totalPonaMin} - {totalPonaMax} {lang === 'bn' ? 'টি পোনা' : 'Fingerlings'}
                            </span>
                          </div>
                          <div className="text-center sm:text-right space-y-1">
                            <span>{lang === 'bn' ? 'শতক প্রতি গড় মজুদ ঘনত্ব:' : 'Average Density Per Decimal:'}</span>
                            <span className="block text-lg font-black text-brand-red">
                              ৮০–৮৫ {lang === 'bn' ? 'টি' : 'Pcs'}
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  } else {
                    // Gulsha Pond Preparation dosage calculations
                    const bleachingMin = (120 * dec) / 1000;
                    const bleachingMax = (150 * dec) / 1000;
                    const limeMin = (750 * dec) / 1000;
                    const limeMax = (1000 * dec) / 1000;
                    const geoprobMin = 50 * dec;
                    const geoprobMax = 75 * dec;
                    const gasonalMin = 3 * dec;
                    const gasonalMax = 4 * dec;
                    const bioprobMin = 10 * dec;
                    const bioprobMax = 15 * dec;
                    const oxyaddMin = 5 * dec;
                    const oxyaddMax = 10 * dec;
                    const insectDec = 5 * dec;

                    return (
                      <>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                            <Award size={14} className="text-emerald-500" />
                            {lang === 'bn' ? 'গুলসা পুকুর প্রস্তুতি ১০-ধাপের ডোজ তালিকা' : 'Gulsha 10-Step Pond Prep Dosages'}
                          </h4>
                          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            {dec.toFixed(1)} {lang === 'bn' ? 'শতক পুকুর' : 'Decimals Equivalent'}
                          </span>
                        </div>

                        {/* Chemical and Product Grid */}
                        <div className="space-y-3">
                          {/* Soil Treatments */}
                          <div className="p-3 bg-amber-50/20 rounded-xl border border-amber-100/40 space-y-2">
                            <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">
                              🪨 মাটি প্রস্তুতি ও শোধন (Soil Preparations)
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                              <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? '৪র্থ ধাপ: ব্লিচিং পাউডার' : 'Step 4: Bleaching Powder'}</span>
                                <span className="font-extrabold text-slate-900 text-sm">
                                  {bleachingMin.toFixed(1)} - {bleachingMax.toFixed(1)} {lang === 'bn' ? 'কেজি' : 'KG'}
                                </span>
                                <span className="block text-[10px] text-slate-400 mt-1">{lang === 'bn' ? '(১২০–১৫০ গ্রাম/শতক)' : '(120–150g/dec)'}</span>
                              </div>
                              <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? '৫ম ধাপ: কৃষি চুন প্রয়োগ' : 'Step 5: Agricultural Lime'}</span>
                                <span className="font-extrabold text-slate-900 text-sm">
                                  {limeMin.toFixed(1)} - {limeMax.toFixed(1)} {lang === 'bn' ? 'কেজি' : 'KG'}
                                </span>
                                <span className="block text-[10px] text-slate-400 mt-1">{lang === 'bn' ? '(৭৫০–১০০০ গ্রাম/শতক)' : '(750–1000g/dec)'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Water Treatments */}
                          <div className="p-3 bg-blue-50/20 rounded-xl border border-blue-100/40 space-y-2">
                            <span className="text-[10px] font-black text-blue-700 uppercase tracking-wider block">
                              💧 পানি শোধন ও গ্যাস নিয়ন্ত্রণ (Water Conditioning)
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                              <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? '৭ম ধাপ: জিওপ্রোব প্লাস' : 'Step 7: Geoprob Plus'}</span>
                                <span className="font-extrabold text-slate-900 text-sm">
                                  {geoprobMin.toLocaleString()} - {geoprobMax.toLocaleString()} {lang === 'bn' ? 'গ্রাম' : 'Grams'}
                                </span>
                                <span className="block text-[10px] text-slate-400 mt-1">{lang === 'bn' ? '(৫০–৭৫ গ্রাম/শতক)' : '(50–75g/dec)'}</span>
                              </div>
                              <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? '৭ম ধাপ: গ্যাসোনাল' : 'Step 7: Gasonal Powder'}</span>
                                <span className="font-extrabold text-slate-900 text-sm">
                                  {gasonalMin.toLocaleString()} - {gasonalMax.toLocaleString()} {lang === 'bn' ? 'গ্রাম' : 'Grams'}
                                </span>
                                <span className="block text-[10px] text-slate-400 mt-1">{lang === 'bn' ? '(৩–৪ গ্রাম/শতক)' : '(3–4g/dec)'}</span>
                              </div>
                            </div>
                          </div>

                          {/* Probiotics and Bio-protection */}
                          <div className="p-3 bg-emerald-50/20 rounded-xl border border-emerald-100/40 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">
                              🦠 বায়োসিকিউরিটি ও উপকারী প্রোবায়োটিক (Biosecurity)
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-400 text-[10px] block font-semibold">{lang === 'bn' ? '৮ম ধাপ: বায়োপ্রোব ম্যাক্স' : 'Step 8: Bioprob Max'}</span>
                                <span className="font-extrabold text-slate-950 mt-1 block">
                                  {bioprobMin.toLocaleString()} - {bioprobMax.toLocaleString()} {lang === 'bn' ? 'গ্রাম' : 'g'}
                                </span>
                                <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '(১০–১৫ গ্রাম/শতক)' : '(10–15g/dec)'}</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-400 text-[10px] block font-semibold">{lang === 'bn' ? '১০ম ধাপ: অক্সিএড গ্রানুলার' : 'Step 10: Oxyadd'}</span>
                                <span className="font-extrabold text-slate-950 mt-1 block">
                                  {oxyaddMin.toLocaleString()} - {oxyaddMax.toLocaleString()} {lang === 'bn' ? 'গ্রাম' : 'g'}
                                </span>
                                <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '(৫–১০ গ্রাম/শতক)' : '(5–10g/dec)'}</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                <span className="text-slate-400 text-[10px] block font-semibold">{lang === 'bn' ? '২৪ ঘণ্টা আগে: হাঁসপোকা কিলার' : '24h Prior: Insecticide'}</span>
                                <span className="font-extrabold text-slate-950 mt-1 block">
                                  {insectDec.toLocaleString()} {lang === 'bn' ? 'মিলি' : 'ml'}
                                </span>
                                <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '(৫ মিলি/শতক)' : '(5ml/dec)'}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Special Pre-Stocking Instruction Note */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-650 space-y-2">
                          <div className="flex items-center gap-1.5 font-bold text-slate-900">
                            <CheckCircle2 size={14} className="text-brand-red" />
                            <span>{lang === 'bn' ? 'রেণু বা পোনা মজুদের অতি জরুরি নির্দেশনা' : 'Critical Pre-Stocking Action'}</span>
                          </div>
                          <p className="leading-relaxed">
                            {lang === 'bn'
                              ? 'রেণু পোনা মজুদের ঠিক পূর্বমুহূর্তে পুকুরের তলদেশ হালকাভাবে নাড়তে হবে বা হরা (Chain Drag) টানতে হবে। এটি তলদেশে ক্ষতিকর গ্যাসের বুদবুদ জমতে দেয় না। পোনা ছাড়ার ঠিক আগে পানিতে অক্সিএড গ্রানুলার ছিটানো ধকল কমাতে সাহায্য করবে।'
                              : 'Drag a light chain across the pond bottom right before stocking to break free any stagnant gaseous bubbles. Broad-cast Oxyadd Granular immediately before releasing fry to maximize oxygen and lower metabolic shock.'}
                          </p>
                        </div>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
