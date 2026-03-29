# Woolen - Agent Guide

## Project Summary
Woolen is a premium wellness brand website centered on a launch-stage merino wool sauna hat. The current experience is a polished, mobile-first marketing site that should feel established and design-led while converting interest into waitlist signups.

The product is framed as sold out rather than unavailable. The site should communicate quiet confidence, material quality, and factual health-oriented benefits without drifting into hype.

## Product Intent
The near-term objective is to ship a credible pre-launch brand experience with strong visual polish, clear educational framing, and a working waitlist flow. Design and copy should support premium positioning and trust, not novelty.

## Key Commands
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run start`

## Repo Map
- `app/` - Next.js routes, layout, and API routes
- `components/` - homepage sections and shared UI building blocks
- `lib/` - shared utilities
- `public/` - static assets, including product and lifestyle imagery
- `docs/context/` - canonical live project context for all agents

## Constraints
- Mobile-first responsive design
- Premium, restrained visual language
- Minimal code and focused edits
- Performance-sensitive implementation
- No off-brand colors, fonts, or hype-driven copy

## Working Rules
- Read the shared context docs before substantial work.
- Prefer root-cause fixes over temporary changes.
- Avoid broad refactors unless the task genuinely requires them.
- Treat `docs/context/*` as the canonical source of live project truth.
- Update shared docs after meaningful changes to behavior, structure, integrations, setup expectations, priorities, or important design decisions.

## Before Editing
- Read `docs/context/PROJECT_STATE.md`.
- Read `docs/context/ARCHITECTURE.md` if the change affects routes, components, or data flow.
- Read `docs/context/PROJECT_GOALS.md` if the change affects product direction, UX, or messaging.
- Read `CLAUDE.md` when doing brand-sensitive UI or content work.

## After Editing
- Update `PROJECT_STATE.md` for current-state changes.
- Update `PROJECT_GOALS.md` if priorities or success criteria changed.
- Update `ARCHITECTURE.md` if structure or integration flow changed.
- Append a dated note to `RECENT_DECISIONS.md` for meaningful changes.
- Run relevant checks, at minimum `npm run lint` for repo-wide validation.

## Canonical Docs
- `docs/context/PROJECT_STATE.md`
- `docs/context/PROJECT_GOALS.md`
- `docs/context/ARCHITECTURE.md`
- `docs/context/RECENT_DECISIONS.md`
