import { getSeoData } from '@/lib/getSeoData';
import { Metadata } from 'next';
import ServiceLandingLayout from '@/components/ServiceLandingLayout';

const SERVICE_NAME = "Engagement Makeup";
const LOCATION = "Andhra Pradesh";
const SLUG = "engagement-makeup-andhra-pradesh";

const seo = getSeoData('/engagement-makeup-andhra-pradesh');

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

export default function LandingPage() {
    return (
        <ServiceLandingLayout
            serviceName={SERVICE_NAME}
            location={LOCATION}
            pageSlug={SLUG}
            heroSubtext={`Experience premium ${SERVICE_NAME.toLowerCase()} specifically crafted for ${LOCATION} clients. Discover the HAVAKU touch for your special occasion.`}
            detailsList={[
                'Comprehensive consultation to understand your vision.',
                'Usage of international, high-end, cruelty-free products.',
                'Expert techniques ensuring longevity throughout the event.',
                'Dedicated touch-up support if required.'
            ]}
            galleryPrefix={SLUG}
            reviews={[
                { name: `Priya, ${LOCATION}`, text: `Absolutely loved my ${SERVICE_NAME.toLowerCase()}! The team was so professional and I felt beautiful.` },
                { name: `Anjali, ${LOCATION}`, text: `HAVAKU is the best in ${LOCATION}. They understood exactly what I needed.` },
                { name: `Lakshmi, ${LOCATION}`, text: `Highly recommend them for anyone looking for ${SERVICE_NAME.toLowerCase()}. Incredible attention to detail.` }
            ]}
            faqs={[
                { q: `Do you offer ${SERVICE_NAME.toLowerCase()} trials in ${LOCATION}?`, a: `Yes, we offer comprehensive trials at our studio so you can perfectly envision your look before the event.` },
                { q: `How far in advance should I book for ${LOCATION}?`, a: `For major wedding and festive seasons, we recommend booking out at least 3-6 months in advance as our ${LOCATION} slots fill up quickly.` },
                { q: `Can you travel to my venue in ${LOCATION}?`, a: `Yes, our artists are fully equipped to travel to your venue within ${LOCATION} for total convenience.` },
                { q: `What products do you use for ${SERVICE_NAME.toLowerCase()}?`, a: `We use premium, long-lasting international luxury items tailored meticulously to your skin type and tone.` },
                { q: `How much time does ${SERVICE_NAME.toLowerCase()} take?`, a: `Depending on the intricacy, it usually takes between 2 to 3 hours to ensure a flawless finish.` }
            ]}
        />
    );
}
