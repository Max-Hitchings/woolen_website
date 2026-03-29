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
- The waitlist API route accepts POST requests, parses JSON, validates email format, and returns JSON responses.
- The root layout suppresses hydration warnings on `<body>` so extension-injected body attributes do not trigger false-positive hydration mismatch errors during development.

## Placeholder / Incomplete
- The waitlist endpoint does not persist submissions yet.
- Social proof appears to rely on placeholder-style content rather than production testimonials or partner proof.
- Contact and policy pages exist, but the broader operational integrations behind them are not represented in code.
- There is no automated test suite in the repo yet.

## Known Gaps
- Waitlist submissions are only logged on the server and are not sent to Loops, Google Sheets, or another production system.
- Current validation is minimal and does not include duplicate detection, rate limiting, or operational monitoring.
- The project docs system is newly introduced and will need to be kept current as the site evolves.

## Integration Status
- Deployment target: Vercel
- Waitlist capture: placeholder API only, production integration pending
- External email/storage provider: not implemented yet
- Analytics and other operational integrations: not evident from the current codebase

## Current Content / Design Status
- The site direction is established as calm, premium, and editorial rather than startup-like.
- The homepage already uses real imagery from `public/images/` instead of neutral placeholders.
- The homepage now includes a founders introduction section using `public/images/founders.jpg` and brief personal-first copy for Max and Jack.
- The sold-out framing and waitlist CTA pattern are present across the experience.
- Brand and layout direction are established, but production-ready proof, integrations, and final launch polish are still in progress.


