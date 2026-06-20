'use client';

import React, { useState } from 'react';
import { Stethoscope, MessageCircle, Info, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

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
      { id: 'catfish', bn: 'শিং / মাগুর / পাবদা', en: 'Catfish species (Shing/Magur/Pabda)' },
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
    const whatsappUrl = `https://wa.me/8801718583226?text=${encodeURIComponent(message)}`;
    
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
      </div>
    </section>
  );
}
