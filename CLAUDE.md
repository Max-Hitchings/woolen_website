# Woolen - Claude Guide

## Brand Summary
Woolen is a premium wellness brand launching with a merino wool sauna hat. The site should make the brand feel established, calm, and desirable while capturing waitlist demand for a sold-out first product run.

The tone is factual, benefit-oriented, and restrained. Avoid hype, wellness cliches, exaggerated claims, and playful UI patterns.

## Design Guardrails
- Position Woolen at the intersection of function and aesthetics.
- Preserve the brand line: "Made for modern rituals."
- Audience: design-conscious, high-earning adults who value materials, detail, and quiet quality.
- Use the existing palette: cream `#F5F0EB`, sand `#D4C5B4`, warm brown `#8B7355`, deep brown `#3D2E1F`, charcoal `#2A2420`, off-white `#FAF8F5`.
- Typography: Cormorant Garamond for headings, DM Sans for body and utility text.
- Mobile-first layouts are the default. The mobile experience is the primary design target.
- Keep motion subtle: fades and gentle slides only.
- Avoid heavy shadows, loud gradients, blue or purple accents, default system-looking typography, and generic SaaS UI patterns.

## Engineering Guardrails
- Make the smallest change that solves the actual problem.
- Prefer root-cause fixes over patches or one-off overrides.
- Avoid broad refactors unless they are necessary for the requested change.
- Preserve performance-sensitive choices and keep the experience lightweight.
- Keep copy on-brand and specific; do not introduce filler text.
- Update shared context docs after meaningful changes to behavior, structure, integrations, priorities, or major design decisions.

## Required Reading
Read these before substantial work:
- `AGENTS.md`
- `docs/context/PROJECT_STATE.md`
- `docs/context/ARCHITECTURE.md` when changing structure or shared patterns
- `docs/context/PROJECT_GOALS.md` when making product, content, or UX decisions

Current implementation truth lives in `docs/context/*`. Do not treat this file as the canonical source for fast-changing project state.

## Canonical Docs
- `AGENTS.md`: root operational instructions for coding agents
- `docs/context/PROJECT_STATE.md`: current implementation snapshot
- `docs/context/PROJECT_GOALS.md`: current project priorities and success criteria
- `docs/context/ARCHITECTURE.md`: app structure and system map
- `docs/context/RECENT_DECISIONS.md`: dated record of meaningful changes and decisions
