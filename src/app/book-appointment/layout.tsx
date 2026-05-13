import type { Metadata } from 'next';
import { getSeoData } from '@/lib/getSeoData';

const seo = getSeoData('/book-appointment');

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: seo.ogImage ? [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
      },
    ] : [],
    url: seo.canonical,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: seo.ogImage ? [seo.ogImage] : [],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
