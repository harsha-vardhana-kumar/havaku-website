import seoData from '@/data/seo.json';

type SeoEntry = {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    canonical: string;
};

type SeoJson = {
    [key: string]: SeoEntry;
};

const data = seoData as SeoJson;

export function getSeoData(path: string): SeoEntry {
    return data[path] ?? data['_defaults'];
}