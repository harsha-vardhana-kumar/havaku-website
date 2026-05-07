# HAVAKU Typography System

The official and original fonts used across the HAVAKU website are strictly limited to two font families from Google Fonts. This dual-font system creates the brand's signature elegant and modern aesthetic.

## 1. Cormorant Garamond (Serif)
- **Role**: Primary Display Font
- **Usage**: Brand headings, section titles (`h1`, `h2`, `h3`, `h4`, `h5`), and decorative text elements.
- **Weights Used**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Styles**: Regular and Italic
- **CSS Variable/Class**: `.font-serif` or explicitly applied via `font-family: 'Cormorant Garamond', serif;`

## 2. Manrope (Sans-Serif)
- **Role**: Primary Body Font
- **Usage**: All body copy, paragraphs, buttons (`.btn-primary`, `.btn-outline`), form inputs, labels, navigation links, and UI elements.
- **Weights Used**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **CSS Variable/Class**: `.font-sans` or explicitly applied via `font-family: 'Manrope', sans-serif;` (This is the default body font).

## Usage Guidelines
- **Strict Adherence**: Do not introduce any other font families unless specifically requested for a new branding initiative.
- **Implementation**: The fonts are globally loaded in `src/app/layout.tsx` via the Google Fonts standard stylesheet link:
  ```html
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  ```
- **Global CSS Integration**: In `src/app/globals.css`, these fonts are assigned system-wide:
  ```css
  body {
    font-family: 'Manrope', sans-serif;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Cormorant Garamond', serif;
  }
  ```
