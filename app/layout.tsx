import type {Metadata} from 'next';
import { Inter, Hind_Siliguri } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  variable: '--font-bangla',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'এক্সপার্ট বায়োসাইন্স লিমিটেড | Expert BioScience Limited',
  description: 'উন্নত মৎস্য চাষে এক্সপার্ট এর নিরাপদ সমাধান। Expert BioScience Limited is a leading manufacturer of premium fish medicines, aquaculture probiotics, disinfectants, and oxygen supplements in Bangladesh.',
  keywords: 'Expert BioScience, Fish Medicine, মৎস্য চাষ, মাছের ওষুধ, Oxyadd, Gasonal, Bioprob, Gasnull, Bangladesh Aquaculture',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#011627] text-gray-100" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

