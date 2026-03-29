# Architecture

## App Overview
The repo is a Next.js App Router site with a marketing-first homepage, a small set of supporting content pages, and a single API endpoint for waitlist capture. Styling is handled primarily through Tailwind utility classes, with fonts loaded via `next/font/google`.

## Route Map
- `/` - homepage with all primary conversion and storytelling sections
- `/our-story` - brand origin and philosophy page
- `/the-science` - education-focused content page
- `/our-materials` - materials-focused content page
- `/contact` - contact page
- `/shipping` - shipping policy page
- `/returns` - returns policy page
- `/api/waitlist` - POST endpoint for waitlist submissions

## Homepage Composition
The homepage is assembled in `app/page.tsx` from focused section components in `components/`:
- `nav.tsx`
- `hero.tsx`
- `education.tsx`
- `lifestyle-benefits.tsx`
- `product-card.tsx`
- `trust-signals.tsx`
- `founders-section.tsx`
- `waitlist-section.tsx`
- `footer.tsx`

## Shared Layout Patterns
- `app/layout.tsx` defines global metadata and loads Cormorant Garamond plus DM Sans.
- `app/layout.tsx` applies `suppressHydrationWarning` on `<body>` to tolerate browser extensions that inject body attributes before client hydration.
- `components/content-page-shell.tsx` provides the shared structure for supporting content pages: solid nav, page intro section, page content, optional waitlist section, and footer.
- Content pages use a repeated editorial section pattern with compact labels, serif headings, and light sans-serif body copy.

## Styling / Animation Approach
- Tailwind utility classes are used directly in components for layout, typography, color, and spacing.
- Brand styling emphasizes muted earth tones, large whitespace, serif-led headings, and subtle overlays.
- Framer Motion is installed but should be used sparingly and only for subtle transitions that fit the calm visual direction.

## Waitlist / Data Flow
- The primary CTAs direct users to the waitlist section on the page.
- The waitlist form ultimately submits to `app/api/waitlist/route.ts`.
- The API currently validates the request shape and email format, then returns JSON success or error responses.
- Submission persistence is not implemented yet, so the current backend flow stops at validation and logging.

## Where Future Features Should Go
- New marketing or educational sections should usually be added as dedicated components under `components/` and composed into the relevant route.
- New long-form informational pages should follow the existing content-page-shell pattern unless there is a clear reason to diverge.
- Shared helpers and reusable logic should live in `lib/`.
- When a real waitlist provider is added, keep the API route as the integration boundary so the frontend form contract can remain stable.


