# PrimeCoder — Premium Next.js Site

## Problem Statement
User asked to convert primecoder.in into a premium-designed Next.js site with the following pages:
Home, Projects, Services, Blog, About, Contact.

PrimeCoder is positioned as an agency that builds websites, apps, desktop applications,
graphic design, databases, and AWS cloud — for modern businesses.

## Tech Stack
- **Framework:** Next.js 16.0.7 (App Router, Turbopack, React Compiler)
- **UI:** React 19, Tailwind CSS v4, custom design tokens
- **Motion:** framer-motion, GSAP, custom CSS keyframes
- **Fonts:** Bebas Neue (display) · DM Sans (body) · DM Mono (UI)
- **Icons:** lucide-react, react-icons (inline SVGs primarily)

## Design Language
Premium dark editorial — `#05050A` deep canvas, lime accent `#A8FF57`,
Bebas Neue display typography (clamp 68px → 160px on hero), grid-line decorations,
glass cards, ambient lime/coral radial glows, micro-animations on every interaction,
cursor-following hero glow, marquee tech strip, IntersectionObserver reveals,
expandable accordion service rows with per-service accent colors.

## Pages Shipped
| Route | Status |
|---|---|
| `/` (Home) | ✓ Hero, Tech Marquee, Services Accordion, Selected Work |
| `/about` | ✓ Bio + Skills tag-groups + Journey timeline + Services |
| `/projects` | ✓ Filterable grid (7 projects, 7 categories) |
| `/services` | ✓ Hero + Stats + Services + 4-step Process + CTA |
| `/blog` | ✓ Editorial post list (4 demo posts) + `/blog/[slug]` route |
| `/contact` | ✓ Form (client-side) + Direct contact cards + Availability badge |

## Services Aligned to User Brief
1. Website Development (React.js, Next.js, Tailwind, GSAP)
2. Mobile App Development (React Native — Android, iOS)
3. Desktop Applications (Electron, Tauri)
4. Graphic Design (Figma, Photoshop, Branding, UI/UX)
5. Database Engineering (MySQL, MongoDB, Schema, Indexing)
6. AWS Cloud Services (EC2, RDS, S3, CloudFront, Lambda)

## Project Structure
```
/app/frontend/
├── app/
│   ├── about/page.js
│   ├── blog/page.js + [slug]/page.js
│   ├── contact/page.js
│   ├── projects/page.js
│   ├── project/page.js
│   ├── services/page.js          (NEW)
│   ├── components/
│   │   ├── Navbar.jsx            (Home · About · Projects · Services · Blog · Contact)
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Services.jsx          (now accepts hideHeader prop)
│   │   ├── Projects.jsx
│   │   ├── TechStrip.jsx
│   │   └── PageTitleManager.jsx
│   ├── layout.js + page.js
│   └── globals.css               (design tokens + animations)
├── lib/                          (utils + crypto helpers)
├── public/                       (ProjectsLogo, ServicesLogo, SkillsLogo)
├── next.config.mjs               (allowedDevOrigins set)
└── package.json                  ("start" → next dev for preview)
```

## Implementation Log
- **2026-06-25:** Restructured Next.js codebase into `/app/frontend`; configured supervisor-compatible `start` script (next dev on 0.0.0.0:3000); enabled Google Fonts import; added `allowedDevOrigins` for preview; created `/services` route with 4-step process & stats; rewrote service catalog to match Website/App/Desktop/Graphic/DB/AWS brief; updated navbar to include Projects + Services.

## Backlog / Future Enhancements
- P1: Wire Contact form to email (Resend / SendGrid) or backend `/api/contact`
- P1: Replace gradient project placeholders with real project screenshots in `/public/ProjectsLogo`
- P2: Blog detail rich-text rendering (`/app/blog/[slug]/page.js` currently scaffolded)
- P2: Add testimonial/clients-logos strip on Home
- P2: SEO — per-route metadata, OG images, sitemap.xml, robots.txt
- P2: Add Lottie hero animation using bundled `/public/Animation.json`
- P3: Convert to MDX-driven blog with categories + reading progress bar
