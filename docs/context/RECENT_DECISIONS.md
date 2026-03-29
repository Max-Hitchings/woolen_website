# Recent Decisions

## 2026-03-29
- Change: Updated the site support email from `hello@woolen.co` to `hello@wearwoolen.com` across the contact, shipping, and returns pages.
- Why: The live contact address needed to match the correct brand domain and avoid routing users to the wrong inbox.
- Follow-up: Keep any future visible email references and `mailto:` links aligned to the same canonical support address.

- Change: Reworded the homepage lifestyle benefit headline from "Stay longer, go deeper" to "Longer sessions, deeper recovery."
- Why: The revised line states the user benefit more clearly and aligns better with Woolen's calm, factual wellness positioning.
- Follow-up: Keep future homepage benefit copy specific and benefit-led rather than abstract or slogan-like.

- Change: Wrapped the global Meta Pixel component in a React `Suspense` boundary from the root layout.
- Why: Next.js 16 fails static prerendering for `/_not-found` when a layout-mounted client component calls `useSearchParams()` without suspense, which was breaking Vercel builds.
- Follow-up: Keep any future layout-level consumers of `useSearchParams()` or similar client navigation hooks inside suspense boundaries to avoid regressions during prerender.

- Change: Added Meta Pixel and Meta Conversions API tracking for waitlist signups with deduplicated `Lead` events.
- Why: Meta ads need reliable browser and server conversion signals so waitlist campaigns can optimize toward real signups instead of weaker click proxies.
- Follow-up: Populate `META_PIXEL_ID`, `META_ACCESS_TOKEN`, and optional `META_TEST_EVENT_CODE`, then verify deduplication in Meta Events Manager before scaling spend.

- Change: Replaced the default tab icon with a custom Woolen favicon.
- Why: The live site needed a browser tab icon that matched the brand rather than the default framework mark.
- Follow-up: If a final monogram or brand icon is introduced, update `app/icon.svg` to match it.

- Change: Added `192.168.0.15` to Next.js `allowedDevOrigins` in `next.config.ts`.
- Why: Local development needed to accept requests from that LAN host without Next.js blocking the origin.
- Follow-up: If the dev machine address changes or more devices need access, keep the allowlist in sync and restart the dev server after edits.

- Change: Added a founders introduction section to the homepage using public/images/founders.jpg.
- Why: The homepage needed a brief, personal founder touchpoint that supports brand trust and premium positioning without replacing the broader brand story.
- Follow-up: Keep founder copy restrained and update the section if a more formal brand or founder narrative is introduced elsewhere.

- Change: Added a dual-agent documentation system with AGENTS.md, a trimmed CLAUDE.md, and shared canonical docs under docs/context/.
- Why: The repo is edited by multiple AI tools and needed one live, tool-agnostic source of truth for current state, goals, and architecture.
- Follow-up: Keep the shared docs updated whenever meaningful behavior, structure, or priority changes are made.
- Change: Added suppressHydrationWarning to the root <body> in app/layout.tsx.
- Why: Browser extensions can inject data-* attributes onto <body> before React hydrates, which was causing a false-positive hydration mismatch in local development.
- Follow-up: If hydration warnings reappear, verify whether they come from extension-mutated HTML or from a real server/client render mismatch inside app components.
- Change: Made the shared header wordmark link back to the homepage.
- Why: The top-left brand mark should behave like a standard home navigation affordance across the site.
- Follow-up: Keep shared header navigation behavior consistent if additional clickable brand elements are introduced.
