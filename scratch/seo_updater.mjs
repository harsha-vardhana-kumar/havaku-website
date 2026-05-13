import fs from 'fs';
import path from 'path';

const appDir = 'c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app';

const ignorePaths = ['admin', 'api', 'products\\[id]', 'blog\\[slug]'];

const getRoutePath = (filePath) => {
    const relative = path.relative(appDir, filePath);
    const dir = path.dirname(relative);
    if (dir === '.') return '/';
    return '/' + dir.replace(/\\/g, '/');
};

const main = () => {
    const pageFiles = [];
    const walk = (dir) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                walk(fullPath);
            } else if (file === 'page.tsx') {
                pageFiles.push(fullPath);
            }
        }
    };
    walk(appDir);
    
    let updatedPages = [];
    
    for (const file of pageFiles) {
        const relativeDir = path.dirname(path.relative(appDir, file));
        if (ignorePaths.some(p => relativeDir.includes(p) || file.includes('admin'))) continue;
        if (relativeDir === 'bridal') continue; 
        
        const route = getRoutePath(file);
        let content = fs.readFileSync(file, 'utf-8');
        const isClient = content.includes('"use client"') || content.includes("'use client'");
        
        const metadataImport = `import type { Metadata } from 'next';\nimport { getSeoData } from '@/lib/getSeoData';\n`;
        const metadataCode = `
const seo = getSeoData('${route}');

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
`;

        if (!isClient) {
            // Replace or inject
            if (content.includes('export const metadata')) {
                // remove existing import { getSeoData } if any so we don't duplicate
                // remove existing import type { Metadata } if we will add it
                
                content = content.replace(/export const metadata(?:[\s\S]*?)};/, metadataCode.trim());
                
                if (!content.includes('getSeoData')) {
                    content = `import { getSeoData } from '@/lib/getSeoData';\n` + content;
                }
                if (!content.includes('Metadata')) {
                    content = `import type { Metadata } from 'next';\n` + content;
                }
                
                fs.writeFileSync(file, content);
                updatedPages.push(file);
            } else {
                if (!content.includes('getSeoData')) {
                    const lines = content.split('\n');
                    let lastImportIndex = -1;
                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].startsWith('import ')) {
                            lastImportIndex = i;
                        }
                    }
                    
                    let newLines = [...lines];
                    if (lastImportIndex !== -1) {
                        newLines.splice(lastImportIndex + 1, 0, '\n' + metadataImport + metadataCode);
                    } else {
                        newLines.unshift(metadataImport + metadataCode + '\n');
                    }
                    
                    fs.writeFileSync(file, newLines.join('\n'));
                    updatedPages.push(file);
                }
            }
        }
    }
    console.log(JSON.stringify({ updatedPages }, null, 2));
};

main();
