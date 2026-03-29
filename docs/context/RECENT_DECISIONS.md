# Recent Decisions

## 2026-03-29
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


