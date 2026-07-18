import re

file_path = "/lib/blogData.ts"

with open(file_path, "rb") as f:
    content_bytes = f.read()

# Let's define the start and end anchors as bytes
start_anchor = b"id: 'carp-magur-stocking',"
end_anchor = b"id: 'oxygen-demand-science',"

start_idx = content_bytes.find(start_anchor)
end_idx = content_bytes.find(end_anchor)

if start_idx == -1 or end_idx == -1:
    print(f"Error: Anchors not found. start: {start_idx}, end: {end_idx}")
    exit(1)

# Now we find the start of the object containing carp-magur-stocking.
# It should be the '{' before 'id: 'carp-magur-stocking','
# Let's search backwards from start_idx for the '{'
brace_idx = content_bytes.rfind(b"{", 0, start_idx)

# And we want to replace up to the '{' before 'id: 'oxygen-demand-science','
end_brace_idx = content_bytes.rfind(b"{", start_idx, end_idx)

print(f"Found brace_idx: {brace_idx}, end_brace_idx: {end_brace_idx}")

# The replacement block as a clean UTF-8 string
replacement_str = """{
    id: 'carp-magur-stocking',
    colorTheme: 'from-[#ecfdf5]/20 to-white border-emerald-100',
    publishDate: 'July 16, 2026',
    bn: {
      title: 'কার্প ও মাগুর মাছের মিশ্র চাষ: লাভজনক পদ্ধতি',
      category: 'মিশ্র চাষ ও পোনা মজুদ',
      readTime: '৫ মিনিট রিড',
      summary: 'একই পুকুরে কার্প জাতীয় মাছের সাথে মাগুরের মিশ্র চাষে কোন স্তরে কতটি পোনা মজুদ করতে হবে এবং সর্বোচ্চ ফলন নিশ্চিত করার বিঘা প্রতি সঠিক ও বৈজ্ঞানিক অনুপাত।',
      content: [
        'ভূমিকা: বিঘা প্রতি (৩৩ শতাংশ) কার্পজাতীয় মাছের সাথে মাগুরের মিশ্র চাষ বাংলাদেশের মৎস্য চাষে একটি যুগান্তকারী ও অত্যন্ত লাভজনক পদ্ধতি। সঠিক পরিকল্পনা ও বৈজ্ঞানিক উপায়ে বিভিন্ন স্তরের মাছের মজুদ অনুপাত ঠিক রাখলে পুকুরের প্রতি ইঞ্চি জায়গার সর্বোত্তম ব্যবহার করা সম্ভব হয়।',
        '🟢 উপরের স্তরের মাছ (Surface Feeder): পুকুরের উপরিভাগের ফাইটোপ্ল্যাঙ্কটন ও ভাসমান জৈব কণা খাওয়ার জন্য কাতলা (৩০০টি) এবং সিলভার কার্প বা বিগহেড কার্প (১৫০টি) মজুদ করতে হবে। দ্রষ্টব্য: সিলভার কার্প ও বিগহেডের খাদ্যাভ্যাস একই হওয়ায় যেকোনো একটি নির্বাচন করাই ভালো।',
        '🟡 মধ্যম স্তরের মাছ (Column Feeder): পানির মধ্যস্তরের খাবারের জন্য রুই (৪০০টি) মজুদ করুন। রুই মাছ জু-প্ল্যাঙ্কটন এবং বাণিজ্যিক পিলেট খাদ্য গ্রহণে অত্যন্ত দক্ষ হওয়ায় অত্যন্ত দ্রুত বৃদ্ধি পায়।',
        '🔵 নিচের স্তরের মাছ (Bottom Feeder): তলদেশের পচা জৈব আবর্জনা ও কীট-পতঙ্গ খেয়ে পুকুর পরিষ্কার রাখার জন্য মৃগেল (১৫০টি), কালিবাউশ (২৫০টি) এবং শামুক দমনের জন্য ব্ল্যাক কার্প (৫০টি) মজুদ করতে হবে।',
        '🌿 সর্বস্তরের খাদক (Grass Carp): পুকুরের জলজ আগাছা, ঘাস ও লতাপাতা খেয়ে পুকুর পরিষ্কার রাখতে এবং পানির কলাম সতেজ রাখতে গ্রাস কার্প (২৫০টি) মজুদ করুন।',
        '🐟 অতিরিক্ত লাভজনক মাছ (মাগুর): অতিরিক্ত প্রজাতি হিসেবে মাগুর ১,০০০–১,২০০টি মজুদ করা অত্যন্ত লাভজনক। মাগুর মাছ জলাশয়ের বাড়তি খাদ্য ও নিচের বর্জ্য খেয়ে বড় হয় এবং বাজারে এর ব্যাপক চাহিদা রয়েছে।',
        'মোট মজুদ ও হিসাব: বিঘা প্রতি (৩৩ শতাংশ) মোট পোনা মজুদ হবে ২,৫৫০–২,৭৫০টি। সেই হিসেবে প্রতি শতকে গড়ে ৮০–৮৫টি পোনা মজুদ করতে হবে।',
        'গুরুত্বপূর্ণ পরামর্শ: (১) সব পোনা সুস্থ, রোগমুক্ত এবং একই আকারের (সাধারণত ৪–৬ ইঞ্চি) হওয়া উচিত। (২) মাগুর অন্তর্ভুক্ত করলে পানিতে দ্রবীভূত অক্সিজেন (DO) ৫ মিগ্রা./লিটার বা তার বেশি বজায় রাখা জরুরি। এ জন্য নিয়মিত পানি ও খাদ্য ব্যবস্থাপনার পাশাপাশি পুকুর ও মাছের স্বাস্থ্যগত যেকোনো জটিলতায় আমাদের বিশেষজ্ঞ প্যানেলের সহায়তা নিন।'
      ]
    },
    en: {
      title: 'Mixed Farming of Carp & Magur: A Profitable Method',
      category: 'Polyculture & Stocking Density',
      readTime: '5 min read',
      summary: 'Explore the ideal stocking rates of different pond-layer feeding fish paired with Magur (Catfish) per bigha to maximize yields, optimize feed usage, and boost profits.',
      content: [
        'Introduction: Mixed culture of carp species with Magur (African/Local Catfish) per bigha (33 decimals) is a highly lucrative and space-efficient aquaculture practice in Bangladesh. Properly balancing different layer feeders optimizes every cubic inch of your pond.',
        '🟢 Surface Feeders: To feed on surface-level phytoplankton and organic floating matter, stock Catla (300 pcs) and either Silver Carp or Bighead Carp (150 pcs). Note: It is best to choose only one between Silver Carp and Bighead Carp as they share similar feeding niches.',
        '🟡 Column Feeders: For the middle water column, stock Rui (400 pcs). Rui is highly efficient at utilizing zooplankton and commercial pellet feeds, leading to fast weight gain.',
        '🔵 Bottom Feeders: To clean and feed on benthic organisms and debris at the bottom sediment, stock Mrigal (150 pcs), Kalibaus (250 pcs), and Black Carp (50 pcs) for aquatic snail control.',
        '🌿 All-Layer Feeders (Grass Carp): Stock Grass Carp (250 pcs) to consume aquatic weeds, grass, and vegetation, maintaining a cleaner water column.',
        '🐟 Additional Premium Catfish (Magur): Stock Magur at 1,000–1,200 pcs per bigha. Magur utilizes leftover organic waste, is highly resilient, and commands premium market pricing.',
        'Total Stocking & Density: Total fingerlings stocked per bigha should be 2,550–2,750 pcs. This averages out to approximately 80–85 fingerlings per decimal (1 decimal = 435.6 sq ft).',
        'Crucial Management Guidelines: (1) Ensure all fingerlings are healthy, virus-free, and of a uniform 4–6 inches size. (2) When stocking Magur, maintaining a high dissolved oxygen level (DO > 5 mg/L) is critical. Keep tabs on pond health parameters to optimize performance.'
      ]
    }
  },
  """

new_content_bytes = content_bytes[:brace_idx] + replacement_str.encode('utf-8') + content_bytes[end_brace_idx:]

with open(file_path, "wb") as f:
    f.write(new_content_bytes)

print("Replacement successful!")
