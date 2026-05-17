# HAVAKU Design System — Updated Brand Identity Edition

This document defines the official design system for the **HAVAKU** brand website after finalizing the primary logo direction:

> **HAVAKU Primary Logo = Modern Monogram Peacock**  
> **Supporting Style = Bridal Ornamental Details**  
> **Overall Brand Tone = Luxury Minimal**

This update is designed to be **safe for the existing website**. It preserves the current typography, core color palette, component language, animation approach, and layout rules, while adding a stronger, more ownable HAVAKU visual identity around the new peacock monogram.

---

## 0. Brand Identity Foundation

### Brand Personality
HAVAKU should feel:

- **Premium**
- **Elegant**
- **Feminine**
- **Celebratory**
- **Indian bridal, but not overly traditional**
- **Modern luxury, not generic minimalism**

### Brand Idea
HAVAKU represents beauty elevated into celebration. The visual identity should balance:

- **Grace** from the peacock
- **Luxury** from champagne-gold accents
- **Femininity** from soft curves and ornamental restraint
- **Modernity** from clean spacing, polished layouts, and simplified forms

### Final Logo Direction
#### Primary Logo: **Modern Monogram Peacock**
A refined **peacock + “H” monogram** is the official long-term brand mark.

**Why this is the right direction**
- Stronger brand recall than a generic luxury wordmark
- Unique HAVAKU-owned symbol through the **H + Peacock** integration
- Scales well across website header, favicon, social avatar, packaging, stickers, watermarks, and future mobile/app usage
- Premium enough for bridal positioning, but modern enough for long-term expansion

---

## 1. Logo System

### 1.1 Primary Logo Lockup
Use the full logo lockup for high-visibility brand surfaces:

- Website hero / landing page masthead
- About page
- Footer brand block
- Packaging front face
- Brand posters and campaign creatives

**Primary lockup structure**
1. Modern Peacock **H monogram**
2. **HAVAKU** wordmark
3. Optional tagline:  
   **WHERE BEAUTY MEETS CELEBRATION**

### 1.2 Secondary Logo Lockup
Use a simplified lockup when the full composition feels too tall or detailed:

- Header/navigation
- Compact footer
- Email banner
- Small print collateral

**Secondary structure**
- Peacock **H monogram** + **HAVAKU** wordmark
- No tagline unless space is generous

### 1.3 Icon Mark
Use only the **Modern Monogram Peacock icon** without the HAVAKU wordmark for:

- Favicon
- App icon
- Social media profile image
- Watermark
- Browser pinned tab variants
- Packaging seal / small stickers

### 1.4 Favicon Guidance
The favicon must use the **simplified icon-only monogram**, not the full logo.

**Favicon rules**
- Use only the **Peacock H monogram**
- No wordmark
- No tagline
- No very thin ornamental strokes
- Keep the icon centered
- Maintain strong contrast between the gold mark and the background
- Rounded-square presentation is acceptable for app-style usage, but the browser favicon asset itself should remain clear in square crops

**Recommended favicon asset set**
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` at `180x180`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### 1.5 Clear Space
Keep empty space around the logo equal to at least:

- **25% of the monogram width** on all sides for standalone icon usage
- **Height of the “H” crossbar** as safe margin for full lockups

### 1.6 Minimum Size
To preserve clarity:

- Full primary lockup: **minimum 180px width**
- Secondary logo lockup: **minimum 140px width**
- Icon-only monogram: **minimum 24px visual width**
- Favicon mark: use a simplified mark optimized for **16px–32px**

### 1.7 Logo Usage Rules
#### Do
- Use the gold logo on ivory, warm white, deep green, or royal maroon backgrounds
- Use the monogram independently where the brand name is already obvious
- Keep the peacock elegant and simplified
- Let the logo breathe with generous whitespace

#### Do Not
- Stretch, skew, rotate, or compress the logo
- Add drop shadows, glow effects, or neon treatments
- Use overly decorative festive patterns inside the primary logo
- Place the logo on busy images without a clean overlay or safe background
- Use multiple versions of the peacock mark across the same website

---

## 2. Typography

The HAVAKU brand relies on a strict dual-font system using Google Fonts to create its signature elegant and sophisticated look.

### Primary Display Font: **Cormorant Garamond** (Serif)
- **Role**: Brand headings, section titles (`h1`, `h2`, `h3`, `h4`, `h5`), logos, decorative text, and taglines.
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Styles**: Regular and Italic
- **Usage**: Use for anything that requires an elegant, traditional, and premium feel.

### Primary Body Font: **Manrope** (Sans-Serif)
- **Role**: All body copy, paragraphs, buttons, form inputs, labels, navigation links, and UI elements.
- **Weights**: 200 (Extra Light), 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Usage**: Highly readable, modern sans-serif used to balance the decorative serif headings. Used with wide letter spacing for labels and uppercase elements.

### Typography Guidance After Logo Update
To make the website match the new modern monogram logo:

- Keep **Cormorant Garamond** elegant and spacious; avoid extremely bold luxury-fashion headings.
- Use **Manrope** for all functional text so the website does not become visually too ornate.
- Prefer **uppercase, letter-spaced labels** for premium editorial polish.
- Use italic serif text only as an accent, not as a default style.

---

## 3. Color Palette

The color system is built around warm, earthy, and luxurious tones. These are defined as CSS variables in `globals.css` and used extensively.

### 3.1 Core Base Colors
- **Ivory (`--ivory: #FAF7F2`)**: The primary light background color for the entire website.
- **Soft Black (`--soft-black: #1A1A1A`)**: The primary text color on light backgrounds, and used for dark hero sections.
- **Warm White (`--warm-white: #FFFDF9`)**: Used for foreground elements, cards, and input fields to contrast gently against the Ivory background.

### 3.2 Core Accent & Neutral Colors
- **Champagne Gold (`--champagne-gold: #C9A96E`)**: The primary brand accent color. Used for buttons, borders, dividers, active states, and decorative elements.
- **Champagne Gold Dark (`--champagne-gold-dark: #A8853E`)**: Used primarily for hover states on gold buttons.
- **Champagne Gold Light (`--champagne-gold-light: #E8D5A8`)**: Used for gradients and subtle highlights.
- **Taupe (`--taupe: #7D6B5E`)**: Secondary text color, used for form labels and subtle descriptive text.
- **Blush Pink (`--blush-pink: #F2D6CF`)**: A soft secondary background color used for specific variants such as Beauty Studio sections and placeholder gradients.
- **Rose Gold (`--rose-gold: #B76E79`)**: A secondary accent color for blush-themed variants.

### 3.3 New Brand-Supporting Dark Surfaces
These colors are recommended for **select premium surfaces**, inspired by the finalized logo presentation. They should be used sparingly, not as replacements for the current ivory-based website foundation.

- **Deep Emerald (`--deep-emerald: #1E2C28`)**  
  Usage: premium sections, festive collection banners, packaging mockups, dark editorial panels.

- **Royal Maroon (`--royal-maroon: #36151B`)**  
  Usage: bridal campaign banners, seasonal festive panels, invitation-style highlight blocks.

- **Soft Cream Brand Background (`--brand-cream: #F7EDE3`)**  
  Usage: logo showcase sections, subtle alternate cards, editorial content bands.

### 3.4 Recommended CSS Variable Extension
Add these variables only if the website needs the expanded HAVAKU visual system. Existing variables should not be renamed or removed.

```css
:root {
  --deep-emerald: #1E2C28;
  --royal-maroon: #36151B;
  --brand-cream: #F7EDE3;
}
```

### 3.5 Color Usage Balance
For the website, use this proportion as a visual rule:

- **70% Ivory / Warm White**
- **20% Soft Black / Taupe text and content depth**
- **8% Champagne Gold accent**
- **2% Deep Emerald / Royal Maroon seasonal highlights**

This keeps HAVAKU premium and calm instead of visually heavy.

---

## 4. Brand Motifs & Decorative Language

### 4.1 Primary Motif
The **Modern Monogram Peacock** is the official brand symbol.

### 4.2 Secondary Motifs
Use these only as subtle supporting details:

- Fine ornamental line flourishes
- Lotus/jewel-inspired micro separators
- Refined bridal scroll details
- Peacock-feather-inspired curves, simplified and abstract

### 4.3 Where Decorative Details Are Allowed
- Packaging
- Seasonal campaign banners
- Wedding/bridal promotion creatives
- Section dividers
- Social media templates
- Optional hero background motifs at extremely low opacity

### 4.4 Where Decorative Details Should Be Avoided
- Navigation bar
- Buttons
- Forms
- Checkout or enquiry UI
- Main body text areas
- Favicon
- Primary website card layouts

This preserves the **Luxury Minimal** direction and prevents the site from feeling busy.

---

## 5. UI Components

### 5.1 Buttons
#### Primary Button (`.btn-primary`)
- Background: Champagne Gold
- Text: Soft Black, Manrope, uppercase, 600 weight, `0.08em` letter spacing
- Hover: Darkens to Champagne Gold Dark, lifts up by 1px, adds a soft gold box shadow

#### Outline Button (`.btn-outline`)
- Background: Transparent
- Border/Text: Champagne Gold
- Hover: Fills with Champagne Gold, text becomes Soft Black, lifts up by 1px

#### Outline White Button (`.btn-outline-white`)
- Used on dark backgrounds
- Transparent with white text and semi-transparent white border

### 5.2 Typography Elements
#### Section Label (`.section-label`)
- Font: Manrope 300, `0.75rem`
- Style: Uppercase, `0.2em` letter spacing, Champagne Gold
- Used as an overline for section headings

#### Section Heading (`.section-heading`)
- Font: Cormorant Garamond 500
- Line-height: `1.15`

### 5.3 Layout & Dividers
#### Gold Divider (`.gold-divider`)
A short, elegant horizontal line:

- Width: `50px`
- Height: `1.5px`
- Color: Champagne Gold

Recommended placement:
- Below section headings
- Below hero tagline
- Above premium editorial content blocks

#### HAVAKU Card (`.havaku-card`)
- Background: Warm White
- Border Radius: `4px`
- Shadow: Very subtle (`0 2px 20px rgba(26, 26, 26, 0.06)`)
- Hover: Floats up by `4px` and shadow becomes slightly more pronounced

#### Image Placeholder (`.img-placeholder`)
- Linear gradient from Blush Pink to Champagne Gold Light
- Overlay gradient for depth
- Used when images are loading or missing

### 5.4 Forms
#### Form Input (`.form-input`)
- Warm White background
- `1.5px` border of 30% opaque Champagne Gold
- Focus state sharpens the border to solid Champagne Gold

#### Form Label (`.form-label`)
- Manrope 600
- Uppercase
- Taupe color
- `0.08em` letter spacing

### 5.5 Logo-Aware Component Guidance
To match the new brand identity:

- Navigation logo should use the **secondary lockup** or **monogram + HAVAKU** arrangement.
- Hero section may use the **full primary lockup** only if it does not compete with photography.
- Floating or sticky CTAs should remain functional and avoid ornamental embellishment.
- Cards should not add peacock motifs unless it is a dedicated campaign or bridal highlight module.

---

## 6. Animations & Interactions

- **Fade In Up (`.fade-in-up`)**: A smooth `0.6s` animation that fades elements in while sliding them up `24px`. Used for revealing content on scroll.
- **WhatsApp Pulse (`.whatsapp-pulse`)**: An infinite `2s` pulsing ring effect applied to the floating WhatsApp CTA button to subtly draw attention.
- **Scroll Strip (`.scroll-strip`)**: An infinite linear horizontal scroll animation (`25s`) used for announcement bars or marquees. Pauses on hover.
- **Nav Scrolled State (`.nav-scrolled`)**: When the user scrolls down, the navigation bar gains a blurred backdrop (`backdrop-filter: blur(12px)`) with a `92%` opaque Ivory background and a subtle shadow.

### Animation Guidance After Logo Update
- Keep all animations **soft and editorial**
- Avoid sparkle, glitter, dramatic zoom, or heavy luxury effects
- Logo reveal animations should be subtle: fade-in, light rise, or slight opacity transition only

---

## 7. Grid System

### Standard 2-Column Grid (`.section-grid-2col`)
- Displays content in a `1fr 1fr` layout with a `5rem` gap
- **Responsive**: Automatically collapses to a single column (`1fr`) with a smaller `3rem` gap on viewports under `900px`

### Grid Guidance
- Continue using generous whitespace to match the premium logo identity
- Do not over-pack sections with image tiles and text
- Alternate airy editorial sections with compact product/service blocks only where content requires it

---

## 8. Image & Photography Direction

### Recommended Visual Tone
Use photography and visuals that feel:

- Soft-lit
- Warm
- Premium
- Bridal
- Detail-oriented
- Elegant rather than flashy

### Preferred Imagery
- Bridal styling close-ups
- Jewelry details
- Beauty finishing moments
- Hands, fabric, ornaments, mirror moments
- Celebration scenes with calm composition

### Avoid
- Overly saturated wedding collages
- Loud stock-photo poses
- Busy backgrounds that fight with the gold palette
- Heavy filters that clash with the ivory/gold identity

---

## 9. Website Application Rules

### 9.1 Header
- Use secondary logo lockup or monogram + wordmark
- Keep nav clean and spacious
- Avoid additional decorative flourishes in the header

### 9.2 Hero
- Allow generous space for imagery and headline
- Use Champagne Gold sparingly for highlight words or micro dividers
- Full primary logo may be used on brand-led landing screens, but not on every page

### 9.3 Footer
- Full logo lockup or secondary lockup is acceptable
- Dark footer backgrounds may use Deep Emerald or Soft Black
- Use tagline only where the layout has enough breathing room

### 9.4 Social & Marketing
- Icon-only monogram for profile photo
- Ornamental bridal details can be used in campaign posters
- Keep website branding cleaner than social creatives

---

## 10. Safe Website Update Strategy

To update the existing website without design inconsistencies:

### Keep As-Is
- Existing typography pair: Cormorant Garamond + Manrope
- Existing core colors: Ivory, Warm White, Soft Black, Champagne Gold, Taupe, Blush Pink, Rose Gold
- Existing component classes and spacing logic
- Existing animation system

### Add Carefully
- Modern Monogram Peacock logo system
- Icon-only favicon
- Optional Deep Emerald / Royal Maroon backgrounds for premium sections
- Refined ornamental separators only in campaign or bridal-focused areas

### Do Not Do
- Do not rebuild the entire color system
- Do not replace all section backgrounds with dark luxury colors
- Do not add heavy ornaments to every block
- Do not make the website look like packaging artwork
- Do not reduce readability in the name of elegance

---

## 11. Usage Guidelines

1. **Strict Font Adherence**: Do not introduce new font families. Stick strictly to Cormorant Garamond for headings and Manrope for body/UI.
2. **Spacing**: Rely on spacious gaps to let the typography, photography, and logo breathe.
3. **Borders**: Avoid harsh, dark borders. Use semi-transparent Champagne Gold or subtle box shadows to delineate containers.
4. **Consistency**: Use the predefined utility classes (`.btn-primary`, `.section-label`, `.havaku-card`) rather than writing one-off CSS for individual components.
5. **Logo Discipline**: The Modern Monogram Peacock is the official primary symbol. Do not create alternate peacock marks for different pages.
6. **Ornament Restraint**: Bridal ornamentation is a secondary layer, not the core UI language.
7. **Premium Calmness**: HAVAKU should feel luxurious through restraint, not through visual overload.

---

## 12. Final Brand System Summary

### Official HAVAKU Visual System
- **Primary Logo**: Modern Monogram Peacock
- **Secondary Visual Support**: Bridal Ornamental Details
- **Overall Tone**: Luxury Minimal
- **Primary Colors**: Ivory, Warm White, Champagne Gold, Soft Black
- **Selective Premium Surfaces**: Deep Emerald, Royal Maroon
- **Typography**: Cormorant Garamond + Manrope
- **Favicon**: Simplified Peacock H monogram only

This system gives HAVAKU a brand identity that is:

- Distinctive
- Premium
- Bridal-ready
- Scalable
- Consistent across website, packaging, and marketing

