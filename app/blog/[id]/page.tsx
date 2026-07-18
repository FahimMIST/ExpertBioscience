import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blogData';
import BlogDetailPageClient from './BlogDetailPageClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  if (!post) {
    return {
      title: 'পোস্ট পাওয়া যায়নি | Post Not Found',
      description: 'The requested blog post was not found.',
    };
  }

  const bnTitle = post.bn.title;
  const enTitle = post.en.title;
  const bnSummary = post.bn.summary;
  const enSummary = post.en.summary;

  return {
    title: `${bnTitle} | ${enTitle}`,
    description: `${bnSummary} - ${enSummary}`,
    keywords: [
      post.bn.category,
      post.en.category,
      'Expert BioScience',
      'মৎস্য চাষ',
      'মাছের রোগ',
      'মাছের চিকিৎসা',
      'পুকুর প্রস্তুতি',
      'aquaculture bangladesh',
      'fish farming tips',
      id,
    ],
    openGraph: {
      title: `${bnTitle} | ${enTitle}`,
      description: bnSummary,
      url: `https://expertbioscience.com/blog/${id}`,
      siteName: 'Expert BioScience',
      type: 'article',
      publishedTime: new Date(post.publishDate).toISOString(),
      authors: ['Expert BioScience Limited'],
      images: [
        {
          url: '/icon.svg',
          width: 512,
          height: 512,
          alt: `${bnTitle} - Expert BioScience Limited`,
        },
      ],
      locale: 'bn_BD',
    },
    twitter: {
      card: 'summary_large_image',
      title: bnTitle,
      description: bnSummary,
      images: ['/icon.svg'],
    },
    alternates: {
      canonical: `/blog/${id}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.en.title,
    alternativeHeadline: post.bn.title,
    description: post.en.summary,
    datePublished: new Date(post.publishDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Expert BioScience Limited',
      url: 'https://expertbioscience.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Expert BioScience Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://expertbioscience.com/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://expertbioscience.com/blog/${id}`,
    },
    articleSection: post.en.category,
    wordCount: post.en.content.join(' ').split(/\s+/).length,
    articleBody: post.en.content.join(' '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <BlogDetailPageClient post={post} />
    </>
  );
}
