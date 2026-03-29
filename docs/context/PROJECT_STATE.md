# Project State

## Last Updated
2026-03-29

## Current Repo Purpose
This repo contains the Woolen marketing site: a premium, mobile-first brand experience for a launch-stage merino wool sauna hat. Its current purpose is to present the product as desirable and effectively sold out, educate visitors on why sauna hats matter, and capture waitlist demand.

## Implemented
- Homepage assembled from dedicated section components: nav, hero, education, lifestyle/benefits, product card, trust signals, founders section, waitlist section, and footer.
- Supporting content pages are present for `our-story`, `the-science`, `our-materials`, `contact`, `shipping`, and `returns`.
- Shared content pages use a common `ContentPageShell` wrapper with a consistent header, optional waitlist section, and footer.
- The shared header wordmark links back to `/`, giving users a consistent way to return to the homepage.
- Brand styling is established through the current font setup, palette, layout direction, and static imagery in `public/images/`.
- The site uses a custom Woolen favicon via App Router metadata instead of the default framework tab icon.
- The waitlist API route accepts POST requests, validates email format, and creates contacts in Loops.so with mailing list enrollment.
- Meta Pixel is wired globally from the root layout and tracks `PageView` events across initial loads and client-side route changes when `META_PIXEL_ID` is configured.
- Successful waitlist submissions now emit matching browser and server `Lead` events to Meta using a shared `event_id` for deduplication.
- The waitlist flow persists `_fbc` from inbound `fbclid` query params and forwards `_fbp` / `_fbc`, hashed email, IP, and user agent to Meta Conversions API when configured.
- The root layout suppresses hydration warnings on `<body>` so extension-injected body attributes do not trigger false-positive hydration mismatch errors during development.
- The root layout now wraps the global Meta Pixel client component in a React `Suspense` boundary so Next.js 16 can prerender `/_not-found` without `useSearchParams()` causing a CSR bailout build error.
- Next.js development config explicitly allows requests from `192.168.0.15` via `allowedDevOrigins`, supporting LAN-based local testing against the dev server.

## Placeholder / Incomplete
- Social proof appears to rely on placeholder-style content rather than production testimonials or partner proof.
- Contact and policy pages exist, but the broader operational integrations behind them are not represented in code.
- There is no automated test suite in the repo yet.

## Known Gaps
- Waitlist validation does not include rate limiting or operational monitoring.
- Meta test verification still depends on production env setup and Events Manager confirmation outside the repo.
- The project docs system is newly introduced and will need to be kept current as the site evolves.

## Integration Status
- Deployment target: Vercel
- Waitlist capture: Loops.so (contacts API with mailing list enrollment)
- Email marketing: Loops.so
- Paid social tracking: Meta Pixel + Meta Conversions API for waitlist `Lead` events
- Analytics and broader operational reporting: otherwise minimal beyond Vercel Speed Insights

## Current Content / Design Status
- The site direction is established as calm, premium, and editorial rather than startup-like.
- The homepage already uses real imagery from `public/images/` instead of neutral placeholders.
- The homepage now includes a founders introduction section using `public/images/founders.jpg` and brief personal-first copy for Max and Jack.
- The sold-out framing and waitlist CTA pattern are present across the experience.
- Brand and layout direction are established, but production-ready proof, integrations, and final launch polish are still in progress.
