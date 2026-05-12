import seoData from "@/data/seo.json";

export type SeoItem = {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
};

export function getSeo(path: string): SeoItem {
    const data = seoData as Record<string, SeoItem>;

    return data[path] || data["/"];
}

export function createMetadata(path: string) {
    const seo = getSeo(path);

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
            canonical: seo.canonical,
        },
        openGraph: {
            title: seo.ogTitle || seo.title,
            description: seo.ogDescription || seo.description,
            images: seo.ogImage ? [seo.ogImage] : [],
            url: seo.canonical,
            type: "website",
        },
    };
}