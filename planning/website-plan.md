# The Little Wood Shop - Website Implementation Plan

## Overview
A simple, static website serving as a digital business card for The Little Wood Shop, a woodworking craft shop in Sedgefield, Western Cape.

## Tech Stack (Latest Versions)

| Technology | Version | Notes |
|------------|---------|-------|
| **Next.js** | 16.1.x | [Latest stable](https://nextjs.org/blog/next-16-1) - Turbopack default, React Compiler built-in |
| **TypeScript** | 5.9 | [Latest stable](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html) |
| **Tailwind CSS** | 4.1 | [Latest](https://tailwindcss.com/blog/tailwindcss-v4) - CSS-first config, zero JS config needed |
| **React** | 19.x | Ships with Next.js 16 |

### Why These Choices
- **Next.js 16**: Static export support, Turbopack for fast builds, excellent DX
- **Tailwind v4**: 5x faster builds, simplified setup (single CSS import), modern CSS features
- **No shadcn/ui**: Custom styling for authentic rustic aesthetic

## Design Direction: "Artisan Heritage"

An **editorial craft aesthetic** - like a beautifully photographed woodworking magazine meets a warm workshop. Not generic "rustic brown" but something with soul and sophistication.

### Typography (Google Fonts via next/font)
- **Display**: Cormorant Garamond - elegant, classic serif with character
- **Body**: Source Sans 3 - warm, highly readable humanist sans
- **Accent**: May use display font at various weights for section headers

### Color Palette
```css
/* Primary */
--charcoal: #1a1a1a       /* Deep near-black for text/dark sections */
--cream: #faf6f1          /* Warm paper-like background */
--cream-dark: #f0ebe4     /* Subtle section alternation */

/* Accents */
--amber: #c9a227          /* Rich honey/amber highlight */
--amber-light: #e8d4a8    /* Softer amber for backgrounds */
--forest: #2d4a3e         /* Deep forest green accent */
--forest-light: #3d5a4e   /* Hover state */

/* Wood tones */
--wood-dark: #3d2b1f      /* Dark walnut */
--wood-medium: #6b4423    /* Medium oak */
--wood-light: #a67c52     /* Light maple */
```

### Key Design Elements
- **Texture**: Subtle wood grain/paper texture overlays for warmth
- **Motion**: Smooth scroll reveals, tactile gallery hover effects (scale + shadow lift)
- **Layout**: Editorial asymmetry, generous whitespace, full-bleed hero
- **Atmosphere**: Warm, natural, crafted with evident care

### The Memorable Element
The site should feel like touching wood - organic warmth in every detail.

## Site Structure (Single Page)

### 1. Header/Navigation
- Shop name/logo (text-based, no image logo needed)
- Smooth scroll navigation: About | Gallery | Contact
- Sticky header with background blur on scroll

### 2. Hero Section
- Full-width `cover_photo.jpg` as background
- Overlay with shop name: "The Little Wood Shop"
- Tagline: "Authentic Wood Creations · Local Craft"
- Subtle scroll indicator

### 3. About Section
- Headline: "One of Sedgefield's Oldest Gems"
- Story paragraph from about.md
- Feature cards/icons for offerings:
  - Furniture
  - Gifts
  - Toys
  - Wooden Slabs
- Note: "Indigenous wood planks on request"

### 4. Gallery Section
- Section title: "Our Craftsmanship" or similar
- Uniform grid (responsive: 2 cols mobile, 3 tablet, 4 desktop)
- Curated selection of ~12 best photos from media/
- Hover effect: subtle scale (1.02-1.05) + shadow lift
- Optional: click to open lightbox

### 5. Contact Section
- Section title: "Visit Us" or "Find Us"
- Two-column layout (responsive):
  - Left: Contact details
    - Address: Cnr of Service and Mossie Road, Sedgefield
    - Phone (Johan): 083 302 8537
    - Phone (René): 083 225 5677
    - Email: jrsteenkamp001@gmail.com
  - Right: Google Maps embed

### 6. Footer
- Simple, minimal
- Copyright: "© 2026 The Little Wood Shop"
- Repeat key contact info

## File Structure
```
the-little-wood-shop/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts
│   │   ├── page.tsx          # Main page composing sections
│   │   └── globals.css       # Tailwind v4 imports + custom styles
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Gallery.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
│   └── media/                # Existing photos (keep as-is)
├── next.config.ts            # Static export config
├── package.json
├── tsconfig.json
└── postcss.config.js         # Tailwind v4 PostCSS setup
```

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js 16 project with TypeScript
2. Install Tailwind CSS v4 with PostCSS
3. Configure static export in next.config.ts
4. Set up custom fonts (Google Fonts via next/font)
5. Define CSS variables for color palette

### Phase 2: Layout & Global Styles
1. Create root layout with metadata
2. Import fonts (serif for headings, sans for body)
3. Set up base styles in globals.css
4. Add subtle background texture (optional)

### Phase 3: Build Components
1. **Header**: Sticky nav with smooth scroll links
2. **Hero**: Full-bleed image with overlay text
3. **About**: Story section with feature highlights
4. **Gallery**: Responsive grid with hover effects
5. **Contact**: Details + Google Maps iframe
6. **Footer**: Simple copyright

### Phase 4: Content & Polish
1. Select best ~12 gallery images
2. Optimize images for web (Next.js Image component)
3. Add all contact details
4. Fine-tune responsive breakpoints
5. Add smooth scroll behavior
6. Test all links (tel:, mailto:)

### Phase 5: Build & Test
1. Run production build (`npm run build`)
2. Test static export locally
3. Verify on mobile/tablet/desktop
4. Check accessibility basics
5. Validate Google Maps embed

## Photo Selection (from 32 available)
Review `media/` folder and select ~12 images that:
- Show variety (furniture, gifts, toys, slabs)
- Have good lighting/composition
- Represent their best work
- Have consistent aspect ratios (or crop to uniform)

## Verification Checklist
- [ ] Site renders on all screen sizes
- [ ] All images load and display correctly
- [ ] Google Maps embed is functional
- [ ] Phone links work (`tel:+27833028537`)
- [ ] Email link works (`mailto:jrsteenkamp001@gmail.com`)
- [ ] Smooth scroll navigation functions
- [ ] Static export generates successfully
- [ ] No console errors
- [ ] Reasonable page load time (<3s)

## Deployment Options (for pitching)
- **Vercel**: Free tier, automatic deploys
- **Netlify**: Free tier, simple static hosting
- **GitHub Pages**: Free, if they want source control
- **Any static host**: The export is just HTML/CSS/JS

## Future Enhancements (upsell opportunities)
- Contact form with email notifications
- Instagram feed integration
- Customer testimonials section
- WhatsApp click-to-chat button
