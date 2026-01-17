# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Production build (static export)
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```

## Architecture

Single-page static website for a woodworking shop. No backend, database, or API routes.

### Tech Stack
- Next.js 16 with static export
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first configuration via `@theme` directive)
- Phosphor Icons

### Page Structure
The site is a single page (`src/app/page.tsx`) composed of section components:
```
Header → Hero → About → Gallery → Contact → Footer
```
All components live in `src/components/`. Each section has an anchor ID for smooth scroll navigation.

### Styling

**Tailwind v4 Theme**: Custom colors are defined in `src/app/globals.css` using CSS variables and the `@theme inline` directive. Use these semantic color names in Tailwind classes:
- `cream`, `cream-dark` - backgrounds
- `charcoal` - text
- `amber`, `amber-light`, `amber-dark` - accent highlights
- `forest`, `forest-light` - secondary accent
- `wood-dark`, `wood-medium`, `wood-light` - decorative wood tones

**Typography**: Two font families via `next/font`:
- `font-display` (Cormorant Garamond) - headings
- `font-body` (Source Sans 3) - body text

### Path Alias
`@/*` maps to `./src/*`

### Static Assets
Photos are in `public/media/`. Use Next.js `Image` component with paths like `/media/photo_1.jpg`.
