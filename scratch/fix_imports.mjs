import fs from 'fs';
import path from 'path';

const files = [
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\beauty-parlour-andhra-pradesh\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\beauty-studio\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\bridal-jewelry-hyderabad\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\bridal-makeup-andhra-pradesh\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\bridal-makeup-hyderabad\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\bridal-makeup-tirupati\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\bridal-makeup-vijayawada\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\bridal-makeup-vizag\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\engagement-makeup-andhra-pradesh\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\facial-treatment-hyderabad\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\festive-collections\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\hair-spa-andhra-pradesh\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\handmade-beauty-products-andhra-pradesh\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\natural-skincare-hyderabad\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\offers\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\reception-makeup-hyderabad\\page.tsx",
    "c:\\Users\\HarshVardhan\\tanujjjj\\havaku\\src\\app\\rolled-gold-jewelry-andhra-pradesh\\page.tsx"
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    if (content.includes('getSeoData') && !content.includes("import { getSeoData }")) {
        content = `import { getSeoData } from '@/lib/getSeoData';\n` + content;
        fs.writeFileSync(file, content);
        console.log("Fixed import in", file);
    }
}
