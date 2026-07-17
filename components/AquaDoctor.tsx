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
  const [activeCalc, setActiveCalc] = useState<'carp_magur' | 'gulsha_prep' | 'tilapia_nursery' | 'density_ideal'>('carp_magur');
  const [selectedDensitySpecies, setSelectedDensitySpecies] = useState<'carp' | 'pangas' | 'tilapia' | 'koi' | 'shing' | 'magur' | 'pabda' | 'gulsha' | 'tengra' | 'golda'>('carp');
  const [tilapiaSubTab, setTilapiaSubTab] = useState<'nursery' | 'feed'>('nursery');
  const [tilapiaStage, setTilapiaStage] = useState<'early' | 'mid' | 'finish'>('early');

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
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-200 p-1 rounded-2xl border border-slate-300 max-w-4xl w-full gap-1 sm:gap-0">
                <button
                  type="button"
                  onClick={() => setActiveCalc('carp_magur')}
                  className={`py-2 px-2 text-[10px] sm:text-xs font-black rounded-xl cursor-pointer transition-all ${
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
                  className={`py-2 px-2 text-[10px] sm:text-xs font-black rounded-xl cursor-pointer transition-all ${
                    activeCalc === 'gulsha_prep'
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/15'
                      : 'text-slate-650 hover:text-slate-900 hover:bg-slate-300/30'
                  }`}
                >
                  {lang === 'bn' ? 'গুলসা পুকুর প্রস্তুতি ও ডোজ' : 'Gulsha Pond Prep & Dosage'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCalc('tilapia_nursery')}
                  className={`py-2 px-2 text-[10px] sm:text-xs font-black rounded-xl cursor-pointer transition-all ${
                    activeCalc === 'tilapia_nursery'
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/15'
                      : 'text-slate-650 hover:text-slate-900 hover:bg-slate-300/30'
                  }`}
                >
                  {lang === 'bn' ? 'তেলাপিয়া নার্সারি প্রস্তুতি' : 'Tilapia Nursery & Prep'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCalc('density_ideal')}
                  className={`py-2 px-2 text-[10px] sm:text-xs font-black rounded-xl cursor-pointer transition-all ${
                    activeCalc === 'density_ideal'
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/15'
                      : 'text-slate-650 hover:text-slate-900 hover:bg-slate-300/30'
                  }`}
                >
                  {lang === 'bn' ? 'আদর্শ মজুদ ঘনত্ব' : 'Ideal Stocking Density'}
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

                  {/* Species Selector for Ideal Density */}
                  {activeCalc === 'density_ideal' && (
                    <div className="space-y-1.5 pt-1">
                      <label className="block text-xs font-extrabold text-slate-600 uppercase">
                        {lang === 'bn' ? 'মাছের প্রজাতি নির্বাচন' : 'Select Fish Species'}
                      </label>
                      <select
                        value={selectedDensitySpecies}
                        onChange={(e) => setSelectedDensitySpecies(e.target.value as any)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-black text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-red shadow-2xs"
                      >
                        <option value="carp">{lang === 'bn' ? 'কার্পজাতীয় মাছ (Carp)' : 'Carp Species'}</option>
                        <option value="pangas">{lang === 'bn' ? 'পাঙাশ মাছ (Pangasius)' : 'Pangasius'}</option>
                        <option value="tilapia">{lang === 'bn' ? 'তেলাপিয়া মাছ (Tilapia)' : 'Tilapia'}</option>
                        <option value="koi">{lang === 'bn' ? 'কৈ মাছ (Thai Koi)' : 'Thai Koi'}</option>
                        <option value="shing">{lang === 'bn' ? 'শিং মাছ (Shing)' : 'Shing Catfish'}</option>
                        <option value="magur">{lang === 'bn' ? 'মাগুর মাছ (Magur)' : 'Magur'}</option>
                        <option value="pabda">{lang === 'bn' ? 'পাবদা মাছ (Pabda)' : 'Pabda'}</option>
                        <option value="gulsha">{lang === 'bn' ? 'গুলসা মাছ (Gulsha)' : 'Gulsha'}</option>
                        <option value="tengra">{lang === 'bn' ? 'দেশি টেংরা মাছ (Tengra)' : 'Tengra'}</option>
                        <option value="golda">{lang === 'bn' ? 'গলদা চিংড়ি (Golda)' : 'Freshwater Prawn (Golda)'}</option>
                      </select>
                    </div>
                  )}

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
                    ) : activeCalc === 'gulsha_prep' ? (
                      lang === 'bn'
                        ? 'গুলসা মাছ চাষের জন্য ৩ দিন বয়সী রেণুকে নার্সারিতে ১৮–৩০ দিন লালন করে কালচার পুকুরে ৫–৬ ফুট গভীরতায় সঠিক প্রস্তুত প্রণালীর ডোজ হিসাব নিচে দেওয়া হলো।'
                        : 'For Gulsha catfish, fry are nursed for 18–30 days. Shown below are targeted chemical & probiotic dosages for the 10-step culture pond prep.'
                    ) : activeCalc === 'tilapia_nursery' ? (
                      lang === 'bn'
                        ? 'মনোসেক্স তেলাপিয়া চাষে নার্সারি পুকুর প্রস্তুতি, শিকারি পোকা দমন অথবা কালচার পুকুরের মাছের দৈনন্দিন সুষম খাদ্য ও নিজস্ব পিলেট ফর্মুলেশন হিসাব করুন।'
                        : 'Calculate required lime, probiotic fermentation, insecticide for nursery prep, or growth-stage daily feeds & custom pellet formulation.'
                    ) : (
                      lang === 'bn'
                        ? '১০টি প্রধান বাণিজ্যিক মাছের আদর্শ মজুদ ঘনত্ব, পুকুরের গভীরতা এবং মাটির উপযুক্ত প্রকারভেদ নির্বাচন করে আপনার পুকুরের মোট পোনা মজুদ পরিমাণ হিসাব করুন।'
                        : 'Calculate scientific stocking densities, soil types, and water depths for 10 prominent aquaculture species in Bangladesh.'
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
                  } else if (activeCalc === 'gulsha_prep') {
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
                  } else if (activeCalc === 'tilapia_nursery') {
                    // Tilapia Nursery and Preparation dosage calculations
                    const limeKg = (500 * dec) / 1000;
                    const bioprobMaxGrams = 5 * dec;
                    const yeastGrams = 10 * dec;
                    const molassesGrams = 50 * dec;
                    const flourKg = (250 * dec) / 1000;
                    const sumithionMl = 5 * dec;
                    const fryCountMin = 3000 * dec;
                    const fryCountMax = 4000 * dec;

                    // Tilapia grow-out and feeding calculations
                    const totalFish = Math.round(165 * dec);
                    const avgWeight = tilapiaStage === 'early' ? 30 : tilapiaStage === 'mid' ? 100 : 275;
                    const feedRate = tilapiaStage === 'early' ? 0.08 : tilapiaStage === 'mid' ? 0.05 : 0.025;
                    const proteinStrBn = tilapiaStage === 'early' ? '২৮% প্রোটিন' : tilapiaStage === 'mid' ? '২৭% প্রোটিন' : '২৬% প্রোটিন';
                    const proteinStrEn = tilapiaStage === 'early' ? '28% Protein' : tilapiaStage === 'mid' ? '27% Protein' : '26% Protein';
                    const biomassKg = (totalFish * avgWeight) / 1000;
                    const dailyFeedKg = biomassKg * feedRate;

                    return (
                      <>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                            <Award size={14} className="text-emerald-500" />
                            {lang === 'bn' ? 'মনোসেক্স তেলাপিয়া মৎস্য ব্যবস্থাপনা গাইড' : 'Monosex Tilapia Aquaculture Guide'}
                          </h4>
                          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            {dec.toFixed(1)} {lang === 'bn' ? 'শতক পুকুর' : 'Decimals Pond'}
                          </span>
                        </div>

                        {/* Sub Tab Switcher */}
                        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 gap-1 my-2">
                          <button
                            type="button"
                            onClick={() => setTilapiaSubTab('nursery')}
                            className={`flex-1 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                              tilapiaSubTab === 'nursery'
                                ? 'bg-brand-red text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                            }`}
                          >
                            {lang === 'bn' ? '১. নার্সারি প্রস্তুতি ও পোনা' : '1. Nursery Prep & Fry'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setTilapiaSubTab('feed')}
                            className={`flex-1 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                              tilapiaSubTab === 'feed'
                                ? 'bg-brand-red text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                            }`}
                          >
                            {lang === 'bn' ? '২. কালচার খাদ্য ও পিলেট' : '2. Grow-out Feed & Pellet'}
                          </button>
                        </div>

                        {tilapiaSubTab === 'nursery' ? (
                          <>
                            {/* Chemical and Product Grid */}
                            <div className="space-y-3">
                              {/* Soil Treatments */}
                              <div className="p-3 bg-amber-50/20 rounded-xl border border-amber-100/40 space-y-2">
                                <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">
                                  🪨 মাটি প্রস্তুতি ও চুন প্রয়োগ (Soil Preparations)
                                </span>
                                <div className="grid grid-cols-1 gap-3 text-xs">
                                  <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left flex justify-between items-center">
                                    <div>
                                      <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? 'পাথুরে চুন (CaCO₃) প্রয়োগ' : 'Agricultural Lime Treatment'}</span>
                                      <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">
                                        {limeKg.toFixed(1)} {lang === 'bn' ? 'কেজি চুন' : 'KG Lime'}
                                      </span>
                                    </div>
                                    <span className="block text-[10px] text-slate-400 bg-slate-150/50 px-2 py-1 rounded">{lang === 'bn' ? '৫০০ গ্রাম / শতক' : '500g / dec'}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Probiotic Fermentation Treatments */}
                              <div className="p-3 bg-emerald-50/20 rounded-xl border border-emerald-100/40 space-y-2">
                                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">
                                  🦠 জৈব বর্জ্য দূরীকরণে প্রোবায়োটিক গাঁজন (Probiotic Fermentation)
                                </span>
                                <div className="text-[10px] text-slate-500 mb-2 leading-snug">
                                  {lang === 'bn' 
                                    ? '৪র্থ ধাপ: আটা, চিটাগুড়, ইস্ট ও বায়োপ্রোব ম্যাক্স পানিতে গুলে ৪৮ ঘণ্টা প্লাস্টিকের পাত্রে এয়ার-টাইট করে ফারমেন্টেশন করুন।'
                                    : 'Step 4: Mix flour, molasses, yeast, and Bioprob Max in water. Ferment air-tight for 48 hours before broadcasting.'}
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                  <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                    <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? 'বায়োপ্রোব ম্যাক্স' : 'Bioprob Max'}</span>
                                    <span className="font-extrabold text-slate-950 mt-0.5 block">{bioprobMaxGrams.toLocaleString()}g</span>
                                    <span className="text-[9px] text-slate-400 block mt-0.5">৫ গ্রাম/শতক</span>
                                  </div>
                                  <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                    <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? 'ড্রাই ইস্ট' : 'Dry Yeast'}</span>
                                    <span className="font-extrabold text-slate-950 mt-0.5 block">{yeastGrams.toLocaleString()}g</span>
                                    <span className="text-[9px] text-slate-400 block mt-0.5">১০ গ্রাম/শতক</span>
                                  </div>
                                  <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                    <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? 'চিটাগুড় / লালি' : 'Molasses'}</span>
                                    <span className="font-extrabold text-slate-950 mt-0.5 block">{molassesGrams.toLocaleString()}g</span>
                                    <span className="text-[9px] text-slate-400 block mt-0.5">৫০ গ্রাম/শতক</span>
                                  </div>
                                  <div className="bg-white p-2 rounded-lg border border-slate-150 text-left">
                                    <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? 'গম বা চালের আটা' : 'Flour (Atta)'}</span>
                                    <span className="font-extrabold text-slate-950 mt-0.5 block">{flourKg.toFixed(2)}kg</span>
                                    <span className="text-[9px] text-slate-400 block mt-0.5">২৫০ গ্রাম/শতক</span>
                                  </div>
                                </div>
                              </div>

                              {/* Insect control and Stocking */}
                              <div className="p-3 bg-blue-50/20 rounded-xl border border-blue-100/40 space-y-2">
                                <span className="text-[10px] font-black text-blue-700 uppercase tracking-wider block">
                                  🐟 পোকা দমন ও পোনা মজুদ (Insect Eradication & Fry Stocking)
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                  <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left">
                                    <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? '৫ম ধাপ: সুমিথিয়ন ছিটানো (২৪-৩০ ঘণ্টা আগে)' : 'Step 5: Sumithion (24-30h Prior)'}</span>
                                    <span className="font-extrabold text-brand-red text-sm mt-0.5 block">
                                      {sumithionMl.toLocaleString()} মিলি (ml)
                                    </span>
                                    <span className="block text-[10px] text-slate-400 mt-1">{lang === 'bn' ? '(হাঁসপোকা ও শিকারি জলজ পোকা দমনে)' : '(Eradicates backswimmers & bugs)'}</span>
                                  </div>
                                  <div className="bg-white p-2.5 rounded-lg border border-slate-150 text-left">
                                    <span className="text-slate-500 text-[11px] block">{lang === 'bn' ? 'প্রস্তাবিত মনোসেক্স পোনা মজুদ' : 'Monosex Swim-up Fry'}</span>
                                    <span className="font-extrabold text-emerald-600 text-sm mt-0.5 block">
                                      {fryCountMin.toLocaleString()} - {fryCountMax.toLocaleString()} {lang === 'bn' ? 'টি' : 'Pcs'}
                                    </span>
                                    <span className="block text-[10px] text-slate-400 mt-1">{lang === 'bn' ? '(৩,০০০–৪,০০০ পোনা / শতক)' : '(3,000–4,000 fry / dec)'}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Special Pre-Stocking Instruction Note */}
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-650 space-y-2">
                              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                                <CheckCircle2 size={14} className="text-brand-red" />
                                <span>{lang === 'bn' ? 'মনোসেক্স পোনা নার্সিং অত্যন্ত জরুরি নির্দেশনা' : 'Critical Nursing Action'}</span>
                              </div>
                              <p className="leading-relaxed">
                                {lang === 'bn'
                                  ? 'নার্সারিতে পোনাকে ৩০–৪৫ দিন প্রতিপালন করতে হবে যতক্ষণ না গড় ওজন ১০–১৫ গ্রাম হয়। পোনা সংগ্রহের পর অবশ্যই অক্সিজেন ব্যাগে থাকা পানির তাপমাত্রার সঙ্গে নার্সারি পুকুরের পানির তাপমাত্রা খাপ খাইয়ে নিতে হবে (Acclimatization)। এর পরেই পোনা পুকুরে ছাড়ুন।'
                                  : 'Nurse the swim-up fry for 30–45 days until they attain 10–15g weights to secure maximum growth rates. Always float the transport bags in the pond for 15-20 minutes to equalize temperatures (acclimatize) before slow release.'}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Growth Stage Selector */}
                            <div className="space-y-2 text-left">
                              <span className="text-xs font-extrabold text-slate-700 block">
                                {lang === 'bn' ? 'মাছের বৃদ্ধির বর্তমান ধাপ নির্বাচন করুন:' : 'Select Current Fish Growth Stage:'}
                              </span>
                              <div className="grid grid-cols-3 bg-slate-150 rounded-xl p-1 gap-1 border border-slate-200">
                                {(['early', 'mid', 'finish'] as const).map((stage) => (
                                  <button
                                    key={stage}
                                    type="button"
                                    onClick={() => setTilapiaStage(stage)}
                                    className={`py-1.5 text-[10px] sm:text-xs font-black rounded-lg cursor-pointer transition-all ${
                                      tilapiaStage === stage
                                        ? 'bg-brand-red text-white shadow-xs'
                                        : 'text-slate-650 hover:text-slate-900 hover:bg-slate-200/50'
                                    }`}
                                  >
                                    {stage === 'early' 
                                      ? (lang === 'bn' ? 'শুরু (১০-৫০ গ্রাম)' : 'Early (10-50g)') 
                                      : stage === 'mid' 
                                        ? (lang === 'bn' ? 'মাঝামাঝি (৫০-১৫০ গ্রাম)' : 'Mid (50-150g)') 
                                        : (lang === 'bn' ? 'শেষ (১৫০-৪০০ গ্রাম)' : 'Finish (150-400g)')}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Growth Stage Summary & Biomass Details */}
                            <div className="p-3 bg-blue-50/20 rounded-xl border border-blue-100/40 text-xs text-left grid grid-cols-2 gap-3">
                              <div>
                                <span className="text-slate-500 block text-[10px]">{lang === 'bn' ? 'মাছের সম্ভাব্য মোট সংখ্যা' : 'Estimated Total Fish'}</span>
                                <span className="font-extrabold text-slate-900 text-sm block mt-0.5">{totalFish.toLocaleString()} {lang === 'bn' ? 'টি' : 'Pcs'}</span>
                                <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '(শতকে গড়ে ১৬৫টি হিসেবে)' : '(Avg 165 pcs / dec)'}</span>
                              </div>
                              <div>
                                <span className="text-slate-500 block text-[10px]">{lang === 'bn' ? 'দৈনিক খাদ্য প্রদানের হার' : 'Daily Feeding Rate'}</span>
                                <span className="font-extrabold text-brand-red text-sm block mt-0.5">{(feedRate * 100).toFixed(1)}%</span>
                                <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? `(জীবন্ত ওজনের, ${proteinStrBn})` : `(Of Biomass, ${proteinStrEn})`}</span>
                              </div>
                              <div className="col-span-2 border-t border-slate-150 pt-2 grid grid-cols-2 gap-3">
                                <div>
                                  <span className="text-slate-500 block text-[10px]">{lang === 'bn' ? 'মাছের অনুমিত গড় ওজন' : 'Estimated Avg Weight'}</span>
                                  <span className="font-extrabold text-slate-900 text-sm block mt-0.5">{avgWeight} {lang === 'bn' ? 'গ্রাম' : 'Grams'}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 block text-[10px]">{lang === 'bn' ? 'মোট মাছের জীবন্ত ওজন' : 'Total Biomass (Live Weight)'}</span>
                                  <span className="font-extrabold text-slate-900 text-sm block mt-0.5">{biomassKg.toFixed(1)} {lang === 'bn' ? 'কেজি' : 'KG'}</span>
                                </div>
                              </div>
                            </div>

                            {/* Daily Food Required Summary Card */}
                            <div className="p-4 bg-brand-red/5 rounded-2xl border-2 border-brand-red/10 text-left">
                              <span className="text-[10px] font-black text-brand-red uppercase tracking-wider block">
                                🥣 দৈনিক মোট খাদ্য চাহিদা (Total Daily Feed Required)
                              </span>
                              <div className="flex justify-between items-baseline mt-1">
                                <span className="font-black text-slate-900 text-xl sm:text-2xl">
                                  {dailyFeedKg.toFixed(2)} {lang === 'bn' ? 'কেজি / দিন' : 'KG / Day'}
                                </span>
                                <span className="text-[10px] font-bold text-slate-450 bg-slate-100 px-2 py-0.5 rounded">
                                  {lang === 'bn' ? '২ বেলা সমান ভাগে বিভাজ্য' : 'Split in 2 daily meals'}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-550 mt-1.5 leading-relaxed">
                                {lang === 'bn'
                                  ? '১ কেজি তেলাপিয়া উৎপাদনে সাধারণত ১.৩–১.৫ কেজি ভাসমান রেডি খাদ্যের প্রয়োজন হয় যা বর্তমানে অনেক ব্যয়বহুল। তাই নিজের তৈরি পিলেট খাদ্য প্রয়োগ করে উৎপাদন খরচ ২৫–৩০% কমানো সম্ভব।'
                                  : 'Commercial floating feed FCR is 1.3-1.5, causing thin profits. Prepare your own feed pellets locally to slash input feeds costs by up to 25-30%.'}
                              </p>
                            </div>

                            {/* Homemade Pellet Formulation Recipe Section */}
                            <div className="p-3 bg-emerald-50/20 rounded-xl border border-emerald-100/40 space-y-2 text-left">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">
                                  🌽 নিজস্ব তৈরি পিলেট খাদ্যের উপাদান অনুপাত (Pellet Formulation)
                                </span>
                                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100/45 px-2 py-0.5 rounded">
                                  {lang === 'bn' ? 'বিজ্ঞানসম্মত ফর্মুলা' : 'Scientific Formula'}
                                </span>
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                                <div className="bg-white p-2 rounded-lg border border-slate-150">
                                  <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? '১. ফিশমিল (৩০%)' : '1. Fish Meal (30%)'}</span>
                                  <span className="font-extrabold text-slate-900 mt-0.5 block">{(dailyFeedKg * 0.3).toFixed(2)} kg</span>
                                  <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '১০০ কেজিতে: ৩০ কেজি' : 'Per 100kg: 30kg'}</span>
                                </div>
                                <div className="bg-white p-2 rounded-lg border border-slate-150">
                                  <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? '২. সয়ামিল (২০%)' : '2. Soy Meal (20%)'}</span>
                                  <span className="font-extrabold text-slate-900 mt-0.5 block">{(dailyFeedKg * 0.2).toFixed(2)} kg</span>
                                  <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '১০০ কেজিতে: ২০ কেজি' : 'Per 100kg: 20kg'}</span>
                                </div>
                                <div className="bg-white p-2 rounded-lg border border-slate-150">
                                  <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? '৩. অ্যাঙ্কর/রেপসিড (২০%)' : '3. Rapeseed Cake (20%)'}</span>
                                  <span className="font-extrabold text-slate-900 mt-0.5 block">{(dailyFeedKg * 0.2).toFixed(2)} kg</span>
                                  <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '১০০ কেজিতে: ২০ কেজি' : 'Per 100kg: 20kg'}</span>
                                </div>
                                <div className="bg-white p-2 rounded-lg border border-slate-150">
                                  <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? '৪. আটা/ভুট্টা গুঁড়া (১০%)' : '4. Wheat/Corn (10%)'}</span>
                                  <span className="font-extrabold text-slate-900 mt-0.5 block">{(dailyFeedKg * 0.1).toFixed(2)} kg</span>
                                  <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '১০০ কেজিতে: ১০ কেজি' : 'Per 100kg: 10kg'}</span>
                                </div>
                                <div className="bg-white p-2 rounded-lg border border-slate-150">
                                  <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? '৫. অটো ব্রান (২০%)' : '5. Rice Auto Bran (20%)'}</span>
                                  <span className="font-extrabold text-slate-900 mt-0.5 block">{(dailyFeedKg * 0.2).toFixed(2)} kg</span>
                                  <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '১০০ কেজিতে: ২০ কেজি' : 'Per 100kg: 20kg'}</span>
                                </div>
                                <div className="bg-white p-2 rounded-lg border border-slate-150">
                                  <span className="text-slate-400 text-[9px] block font-semibold">{lang === 'bn' ? '৬. বায়োপ্রোব ম্যাক্স (১%)' : '6. Bioprob Max (1%)'}</span>
                                  <span className="font-extrabold text-slate-900 mt-0.5 block">{(dailyFeedKg * 10).toFixed(0)} g</span>
                                  <span className="text-[9px] text-slate-400 block mt-0.5">{lang === 'bn' ? '১০০ কেজিতে: ১ কেজি' : 'Per 100kg: 1kg'}</span>
                                </div>
                              </div>

                              <div className="border-t border-slate-150 pt-2 mt-2 space-y-1.5 text-[10px] text-slate-600">
                                <span className="font-black text-slate-800 block uppercase tracking-wide">
                                  🧪 বাড়তি প্রিমিক্স সমূহ (Required Additional Nutrients):
                                </span>
                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                  <div>• <span className="font-bold text-slate-700">{lang === 'bn' ? 'ফার্মিজাইম (১%):' : 'Farmizyme (1%):'}</span> <span className="font-extrabold text-emerald-700">{(dailyFeedKg * 10).toFixed(0)}g</span> {lang === 'bn' ? '(১০০ কেজিতে ১ কেজি)' : '(1kg per 100kg batch)'}</div>
                                  <div>• <span className="font-bold text-slate-700">{lang === 'bn' ? 'গ্রোভিটা ম্যাক্স (২.৫%):' : 'Grovita Max (2.5%):'}</span> <span className="font-extrabold text-emerald-700">{(dailyFeedKg * 25).toFixed(0)}g</span> {lang === 'bn' ? '(১০০ কেজিতে ২.৫ কেজি)' : '(2.5kg per 100kg batch)'}</div>
                                </div>
                              </div>
                            </div>

                            {/* Culture Care & warnings */}
                            <div className="p-3.5 bg-amber-50/20 rounded-xl border border-amber-100/40 text-xs text-slate-650 space-y-1.5 text-left">
                              <span className="font-black text-amber-800 uppercase tracking-wider block">
                                ⚠️ কালচার পুকুরের গুরুত্বপূর্ণ গাইডলাইন
                              </span>
                              <ul className="list-disc pl-4 space-y-1 text-[11px] leading-relaxed">
                                <li>{lang === 'bn' ? 'পুকুরে ভুলেও কাঁচা গরুর গোবর বা মুরগির লিটার ব্যবহার করবেন না। এটি ক্ষতিকর।' : 'Never apply raw manure or chicken droppings as they cause toxic gas and carry lethal viruses.'}</li>
                                <li>{lang === 'bn' ? 'মাসে একবার হলেও পানিতে বায়োপ্রোব ম্যাক্স প্রয়োগ করুন কাদা শোধন ও সুরক্ষার জন্য।' : 'Dose soil probiotic Bioprob Max at least once a month to break down bottom sludge and clear water.'}</li>
                                <li>{lang === 'bn' ? 'তেলাপিয়ার সঙ্গে পাঙাশ মাছের মিশ্র চাষ এড়িয়ে চলুন (পাঙাশের দ্রুত খাদ্য গ্রহণের কারণে তেলাপিয়া পর্যাপ্ত খাবার পায় না)।' : 'Avoid mixing Tilapia with Pangas. Pangas aggressive feeding denies enough feed for Tilapia.'}</li>
                                <li>{lang === 'bn' ? 'শিং, মাগুর, পাবদা, গুলসা, টেংরা ও কৈ মাছের সঙ্গে তেলাপিয়া মিশ্র চাষ করলে তেলাপিয়ার দ্রুত খাদ্য গ্রহণের কারণে অন্য মাছরা খাবার পায় না।' : 'Avoid polyculture with Shing, Magur, Pabda, Gulsha, Tengra or Koi. Tilapia fast feeding starves other slow high-value species.'}</li>
                              </ul>
                            </div>
                          </>
                        )}
                      </>
                    );
                  } else {
                    // Ideal stocking density calculator for 10 species
                    const s = selectedDensitySpecies;
                    let titleBn = '';
                    let titleEn = '';
                    let depthBn = '';
                    let depthEn = '';
                    let soilBn = '';
                    let soilEn = '';
                    let resultsBn: React.ReactNode = null;
                    let resultsEn: React.ReactNode = null;

                    if (s === 'carp') {
                      titleBn = 'কার্পজাতীয় মাছ';
                      titleEn = 'Carp Species';
                      depthBn = '৫–৮ ফুট';
                      depthEn = '5-8 feet';
                      soilBn = 'এঁটেল দোঁআশ';
                      soilEn = 'Clay loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মাঝারি ঘনত্বের মিশ্রচাষে (শতক প্রতি):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>রুই:</span><span className="font-extrabold">{Math.round(10 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>মৃগেল/কালিবাউশ:</span><span className="font-extrabold">{Math.round(6 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কমন কার্প:</span><span className="font-extrabold">{Math.round(2 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>সিলভার কার্প:</span><span className="font-extrabold">{Math.round(2 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কাতলা:</span><span className="font-extrabold">{Math.round(2 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>গ্রাস কার্প:</span><span className="font-extrabold">{Math.round(1 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 কার্প ফ্যাটেনিং পদ্ধতিতে (শতক প্রতি):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>রুই:</span><span className="font-extrabold">{Math.round(8 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>মৃগেল/কালিবাউশ:</span><span className="font-extrabold">{Math.round(3 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>সিলভার কার্প:</span><span className="font-extrabold">{Math.round(1 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কাতলা:</span><span className="font-extrabold">{Math.round(1 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>গ্রাস কার্প:</span><span className="font-extrabold">{Math.round(1 * dec)} টি</span></div>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Medium Density Polyculture (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Rui:</span><span className="font-extrabold">{Math.round(10 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Mrigel/Kalibaush:</span><span className="font-extrabold">{Math.round(6 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Common Carp:</span><span className="font-extrabold">{Math.round(2 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Silver Carp:</span><span className="font-extrabold">{Math.round(2 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Katla:</span><span className="font-extrabold">{Math.round(2 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Grass Carp:</span><span className="font-extrabold">{Math.round(1 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Carp Fattening Method (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Rui:</span><span className="font-extrabold">{Math.round(8 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Mrigel/Kalibaush:</span><span className="font-extrabold">{Math.round(3 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Silver Carp:</span><span className="font-extrabold">{Math.round(1 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Katla:</span><span className="font-extrabold">{Math.round(1 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Grass Carp:</span><span className="font-extrabold">{Math.round(1 * dec)} pcs</span></div>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'pangas') {
                      titleBn = 'পাঙাশ মাছ';
                      titleEn = 'Pangasius';
                      depthBn = '৫–৬ ফুট';
                      depthEn = '5-6 feet';
                      soilBn = 'দোঁআশ';
                      soilEn = 'Loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে (শতক প্রতি):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>পাঙাশ পোনা:</span><span className="font-extrabold">{Math.round(40 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কার্পজাতীয় মাছ:</span><span className="font-extrabold">{Math.round(6 * dec)} - {Math.round(7 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 একক চাষ পদ্ধতিতে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>পাঙাশ পোনা:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(70 * dec)} - {Math.round(80 * dec)} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Mixed Polyculture (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Pangas Fingerlings:</span><span className="font-extrabold">{Math.round(40 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Associated Carps:</span><span className="font-extrabold">{Math.round(6 * dec)} - {Math.round(7 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Monoculture System (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Pangas Fingerlings:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(70 * dec)} - {Math.round(80 * dec)} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'tilapia') {
                      titleBn = 'তেলাপিয়া মাছ';
                      titleEn = 'Tilapia';
                      depthBn = '৫–৬ ফুট';
                      depthEn = '5-6 feet';
                      soilBn = 'দোঁআশ';
                      soilEn = 'Loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে (শতক প্রতি):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>তেলাপিয়া পোনা:</span><span className="font-extrabold">{Math.round(120 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কার্পজাতীয় মাছ:</span><span className="font-extrabold">{Math.round(8 * dec)} - {Math.round(10 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 একক চাষ পদ্ধতিতে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>মনোসেক্স তেলাপিয়া:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(150 * dec)} - {Math.round(180 * dec)} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Polyculture (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Tilapia Fingerlings:</span><span className="font-extrabold">{Math.round(120 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Carp Stocking:</span><span className="font-extrabold">{Math.round(8 * dec)} - {Math.round(10 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Monoculture (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Monosex Tilapia:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(150 * dec)} - {Math.round(180 * dec)} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'koi') {
                      titleBn = 'কৈ মাছ';
                      titleEn = 'Thai Koi';
                      depthBn = '৫–৬ ফুট';
                      depthEn = '5-6 feet';
                      soilBn = 'দোঁআশ';
                      soilEn = 'Loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 পানি পরিবর্তনের আধুনিক ব্যবস্থা থাকলে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>কৈ পোনার সংখ্যা:</span>
                              <span className="font-black text-emerald-600 text-sm">{Math.round(1200 * dec).toLocaleString()} - {Math.round(1500 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                          <div className="p-3 bg-rose-50/30 rounded-xl border border-rose-100/50 space-y-2">
                            <span className="text-[10px] font-black text-brand-red uppercase tracking-wider block">🔴 পানি পরিবর্তনের ব্যবস্থা না থাকলে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>নিরাপদ কৈ মজুদ সংখ্যা:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(800 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 With Active Water Exchange System (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Koi Fingerling Count:</span>
                              <span className="font-black text-emerald-600 text-sm">{Math.round(1200 * dec).toLocaleString()} - {Math.round(1500 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                          <div className="p-3 bg-rose-50/30 rounded-xl border border-rose-100/50 space-y-2">
                            <span className="text-[10px] font-black text-brand-red uppercase tracking-wider block">🔴 Without Water Exchange Capacity (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Safe Stocking Limit:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(800 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'shing') {
                      titleBn = 'শিং মাছ';
                      titleEn = 'Shing Catfish';
                      depthBn = '৫–৬ ফুট';
                      depthEn = '5-6 feet';
                      soilBn = 'এঁটেল দোঁআশ';
                      soilEn = 'Clay loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 নিবিড় (Intensive) পদ্ধতিতে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>শিং পোনা:</span>
                              <span className="font-black text-emerald-600 text-sm">{Math.round(3000 * dec).toLocaleString()} - {Math.round(4000 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 আধা-নিবিড় (Semi-Intensive) পদ্ধতিতে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>শিং পোনা:</span>
                              <span className="font-black text-slate-800 text-sm">{Math.round(1500 * dec).toLocaleString()} - {Math.round(2000 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Intensive Cultivation System (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Shing Catfish:</span>
                              <span className="font-black text-emerald-600 text-sm">{Math.round(3000 * dec).toLocaleString()} - {Math.round(4000 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Semi-Intensive Cultivation System (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Shing Catfish:</span>
                              <span className="font-black text-slate-800 text-sm">{Math.round(1500 * dec).toLocaleString()} - {Math.round(2000 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'magur') {
                      titleBn = 'মাগুর মাছ';
                      titleEn = 'Magur Catfish';
                      depthBn = '৫–৬ ফুট';
                      depthEn = '5-6 feet';
                      soilBn = 'এঁটেল দোঁআশ';
                      soilEn = 'Clay loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে শতাংশ প্রতি মজুদ ঘনত্ব:</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>মাগুর পোনা:</span><span className="font-extrabold">{Math.round(200 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কার্পজাতীয় মাছ:</span><span className="font-extrabold">{Math.round(10 * dec)} - {Math.round(12 * dec)} টি</span></div>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Polyculture Stocking Rates (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Magur Fingerlings:</span><span className="font-extrabold">{Math.round(200 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Carps associated:</span><span className="font-extrabold">{Math.round(10 * dec)} - {Math.round(12 * dec)} pcs</span></div>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'pabda') {
                      titleBn = 'পাবদা মাছ';
                      titleEn = 'Pabda Catfish';
                      depthBn = '৫–৭ ফুট';
                      depthEn = '5-7 feet';
                      soilBn = 'দোঁআশ';
                      soilEn = 'Loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে শতাংশ প্রতি মজুদ ঘনত্ব:</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>পাবদা পোনা:</span><span className="font-extrabold">{Math.round(600 * dec).toLocaleString()} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কার্পজাতীয় মাছ:</span><span className="font-extrabold">{Math.round(12 * dec)} - {Math.round(14 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 একক (নিবিড়) চাষে শতাংশ প্রতি:</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>পাবদা পোনা:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(1000 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Polyculture Stocking Rates (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Pabda Fingerlings:</span><span className="font-extrabold">{Math.round(600 * dec).toLocaleString()} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Associated Carps:</span><span className="font-extrabold">{Math.round(12 * dec)} - {Math.round(14 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Intensive Monoculture (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Pabda Fingerlings:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(1000 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'gulsha') {
                      titleBn = 'গুলসা মাছ';
                      titleEn = 'Gulsha Catfish';
                      depthBn = '৫–৭ ফুট';
                      depthEn = '5-7 feet';
                      soilBn = 'এঁটেল দোঁআশ';
                      soilEn = 'Clay loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে শতাংশ প্রতি মজুদ ঘনত্ব:</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>গুলসা পোনা:</span><span className="font-extrabold">{Math.round(800 * dec).toLocaleString()} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কার্পজাতীয় মাছ:</span><span className="font-extrabold">{Math.round(10 * dec)} - {Math.round(12 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 একক (নিবিড়) চাষে শতাংশ প্রতি:</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>গুলসা পোনা:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(1200 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Polyculture Stocking Rates (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Gulsha Fingerlings:</span><span className="font-extrabold">{Math.round(800 * dec).toLocaleString()} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Associated Carps:</span><span className="font-extrabold">{Math.round(10 * dec)} - {Math.round(12 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Intensive Monoculture (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Gulsha Fingerlings:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(1200 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'tengra') {
                      titleBn = 'দেশি টেংরা মাছ';
                      titleEn = 'Tengra Catfish';
                      depthBn = '৫–৭ ফুট';
                      depthEn = '5-7 feet';
                      soilBn = 'এঁটেল দোঁআশ';
                      soilEn = 'Clay loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে শতাংশ প্রতি মজুদ ঘনত্ব:</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>টেংরা পোনা:</span><span className="font-extrabold">{Math.round(1000 * dec).toLocaleString()} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কার্পজাতীয় মাছ:</span><span className="font-extrabold">{Math.round(10 * dec)} - {Math.round(12 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 একক (নিবিড়) চাষে শতাংশ প্রতি:</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>টেংরা পোনা:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(1500 * dec).toLocaleString()} - {Math.round(2000 * dec).toLocaleString()} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Polyculture Stocking Rates (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Tengra Fingerlings:</span><span className="font-extrabold">{Math.round(1000 * dec).toLocaleString()} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Associated Carps:</span><span className="font-extrabold">{Math.round(10 * dec)} - {Math.round(12 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Intensive Monoculture (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Tengra Fingerlings:</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(1500 * dec).toLocaleString()} - {Math.round(2000 * dec).toLocaleString()} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (s === 'golda') {
                      titleBn = 'গলদা চিংড়ি';
                      titleEn = 'Freshwater Prawn (Golda)';
                      depthBn = '৫–৬ ফুট';
                      depthEn = '5-6 feet';
                      soilBn = 'এঁটেল দোঁআশ';
                      soilEn = 'Clay loam';
                      resultsBn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 মিশ্রচাষে শতাংশ প্রতি মজুদ ঘনত্ব:</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>গলদা পোনা:</span><span className="font-extrabold">{Math.round(50 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>রুই মাছ:</span><span className="font-extrabold">{Math.round(8 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>কাতলা মাছ:</span><span className="font-extrabold">{Math.round(2 * dec)} টি</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>সিলভার কার্প:</span><span className="font-extrabold">{Math.round(1 * dec)} টি</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 একক চাষ পদ্ধতিতে (শতক প্রতি):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>চিংড়ি পোনা (জুভেনাইল সাইজ):</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(200 * dec)} - {Math.round(250 * dec)} টি</span>
                            </div>
                          </div>
                        </div>
                      );
                      resultsEn = (
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50/30 rounded-xl border border-blue-100/50 space-y-2">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">🟢 Polyculture Stocking Rates (Per Decimal):</span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Golda Prawns:</span><span className="font-extrabold">{Math.round(50 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Rui:</span><span className="font-extrabold">{Math.round(8 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Katla:</span><span className="font-extrabold">{Math.round(2 * dec)} pcs</span></div>
                              <div className="bg-white p-2 rounded-lg border border-slate-100 flex justify-between"><span>Silver Carp:</span><span className="font-extrabold">{Math.round(1 * dec)} pcs</span></div>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50 space-y-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">🟢 Monoculture System (Per Decimal):</span>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 flex justify-between text-xs">
                              <span>Golda (Juvenile Prawns):</span>
                              <span className="font-black text-brand-red text-sm">{Math.round(200 * dec)} - {Math.round(250 * dec)} pcs</span>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                            <Award size={14} className="text-brand-red animate-pulse" />
                            {lang === 'bn' ? `${titleBn} - আদর্শ মজুদ ঘনত্ব` : `${titleEn} - Ideal Density`}
                          </h4>
                          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            {dec.toFixed(1)} {lang === 'bn' ? 'শতক পুকুর' : 'Decimals Equivalent'}
                          </span>
                        </div>

                        {/* Species Soil & Depth Meta indicators */}
                        <div className="grid grid-cols-2 gap-3 mb-2">
                          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-150 text-left">
                            <span className="text-[10px] text-slate-400 font-bold block">{lang === 'bn' ? '💧 পানির আদর্শ গভীরতা' : '💧 Recommended Depth'}</span>
                            <span className="text-xs font-black text-slate-900 mt-0.5 block">{lang === 'bn' ? depthBn : depthEn}</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-150 text-left">
                            <span className="text-[10px] text-slate-400 font-bold block">{lang === 'bn' ? '🌱 পুকুরের উপযুক্ত মাটি' : '🌱 Suitable Soil Type'}</span>
                            <span className="text-xs font-black text-slate-900 mt-0.5 block">{lang === 'bn' ? soilBn : soilEn}</span>
                          </div>
                        </div>

                        {/* Calculated Output Lists */}
                        {lang === 'bn' ? resultsBn : resultsEn}

                        {/* Context note and conclusion statement */}
                        <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-650 leading-relaxed text-left">
                          <span className="font-black text-slate-800 block mb-1">💡 {lang === 'bn' ? 'বিশেষ পরিবেশগত নোটিশ:' : '💡 Key Environmental Notice:'}</span>
                          {lang === 'bn' 
                            ? 'পুকুরের মাটির ধরণ, পানির গভীরতা, নিয়মিত এরেশন এবং চাষের ইনপুট ব্যবস্থাপনার ওপর ভিত্তি করে মজুদ ঘনত্ব ৫-১০% পরিবর্তন করা যেতে পারে। পোনা ছাড়ার আগে তাপমাত্রা খাপ খাইয়ে নিতে ভুলবেন না।' 
                            : 'Stocking densities can vary slightly (5-10%) depending on active artificial aeration, soil nutrition, and feed quality. Ensure temperature acclimatization before releasing fry.'}
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
