# Architecture

## App Overview
The repo is a Next.js App Router site with a marketing-first homepage, a small set of supporting content pages, and a single API endpoint for waitlist capture. Styling is handled primarily through Tailwind utility classes, with fonts loaded via `next/font/google`. Meta Pixel is injected globally at the layout level, while server-side conversion reporting stays behind the waitlist API boundary.

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
- `app/layout.tsx` wraps `components/meta-pixel.tsx` in `Suspense` because the pixel component reads `useSearchParams()`, and Next.js 16 requires a suspense boundary for that client-side navigation state during prerendering.
- `components/meta-pixel.tsx` is mounted from `app/layout.tsx` and is responsible for Meta Pixel bootstrap, `PageView` tracking on client-side navigation, and persistence of `_fbc` from inbound `fbclid` params.
- `components/content-page-shell.tsx` provides the shared structure for supporting content pages: solid nav, page intro section, page content, optional waitlist section, and footer.
- Content pages use a repeated editorial section pattern with compact labels, serif headings, and light sans-serif body copy.

## Styling / Animation Approach
- Tailwind utility classes are used directly in components for layout, typography, color, and spacing.
- Brand styling emphasizes muted earth tones, large whitespace, serif-led headings, and subtle overlays.
- Framer Motion is installed but should be used sparingly and only for subtle transitions that fit the calm visual direction.

## Waitlist / Data Flow
- The primary CTAs direct users to the waitlist section on the page.
- The waitlist form generates a client-side `eventId`, submits it with the email to `app/api/waitlist/route.ts`, and only fires a browser-side Meta `Lead` event after the API returns success.
- The API validates request shape and email format, creates or reuses a Loops contact, and returns JSON success or error responses.
- On successful or duplicate Loops responses, the API also sends a Meta Conversions API `Lead` event with the same `event_id` used by the browser event so Meta can deduplicate both signals.
- The API enriches Meta server events with hashed email plus request-derived matching fields such as IP address, user agent, and `_fbp` / `_fbc` cookies when available.

## Where Future Features Should Go
- New marketing or educational sections should usually be added as dedicated components under `components/` and composed into the relevant route.
- New long-form informational pages should follow the existing content-page-shell pattern unless there is a clear reason to diverge.
- Shared helpers and reusable logic should live in `lib/`.
- When a real waitlist provider is added, keep the API route as the integration boundary so the frontend form contract can remain stable.


