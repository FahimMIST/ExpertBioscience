import type {Metadata} from 'next';
import { Inter, Hind_Siliguri } from 'next/font/google';
import './globals.css'; // Global styles
import { LanguageProvider } from '@/lib/LanguageContext';
import Script from 'next/script';

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
  title: {
    default: 'এক্সপার্ট বায়োসাইন্স লিমিটেড | Expert BioScience Limited',
    template: '%s | Expert BioScience'
  },
  description: 'উন্নত মৎস্য চাষে এক্সপার্ট এর নিরাপদ সমাধান। Expert BioScience Limited is a leading manufacturer of premium fish medicines, aquaculture probiotics, disinfectants, and oxygen supplements in Bangladesh.',
  keywords: [
    'Expert BioScience', 'Fish Medicine', 'মৎস্য চাষ', 'মাছের ওষুধ', 
    'Oxyadd', 'Gasonal', 'Bioprob', 'Gasnull', 'Bangladesh Aquaculture', 
    'মৎস্য প্রবায়োটিক', 'অক্সিজেন ট্যাবলেট', 'চিংড়ি চাষ', 'মাছের গ্যাস দূরীকরণ',
    'fish feed supplements bangladesh', 'aquaculture diagnostics'
  ],
  authors: [{ name: 'Expert BioScience Limited', url: 'https://expertbioscience.com' }],
  creator: 'Expert BioScience Limited',
  publisher: 'Expert BioScience Limited',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  metadataBase: new URL('https://expertbioscience.com'),
  alternates: {
    canonical: '/',
    languages: {
      'bn-BD': '/bn',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'এক্সপার্ট বায়োসাইন্স লিমিটেড | Expert BioScience Limited',
    description: 'উন্নত মৎস্য চাষে এক্সপার্ট এর নিরাপদ সমাধান। Premium veterinary-grade aquaculture probiotics and fish medicines in Bangladesh.',
    url: 'https://expertbioscience.com',
    siteName: 'Expert BioScience',
    images: [
      {
        url: '/icon.svg',
        width: 512,
        height: 512,
        alt: 'Expert BioScience Limited - Fish Medicine & Probiotics logo',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'এক্সপার্ট বায়োসাইন্স লিমিটেড | Expert BioScience Limited',
    description: 'উন্নত মৎস্য চাষে এক্সপার্ট এর নিরাপদ সমাধান। Premium aquaculture solutions.',
    images: ['/icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#011627] text-gray-100" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xnq55be4y4");
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BZ29B4R4MJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BZ29B4R4MJ');
          `}
        </Script>
      </body>
    </html>
  );
}

