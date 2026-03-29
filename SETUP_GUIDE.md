# Woolen — Claude Code Setup Guide

## Step 0: Prerequisites
Make sure you have installed:
- Node.js 18+ (https://nodejs.org)
- Claude Code (`npm install -g @anthropic-ai/claude-code`)
- Git

## Step 1: Create the project

```bash
mkdir woolen && cd woolen
git init
```

Copy the CLAUDE.md file into the root of this directory.
Copy your product/lifestyle photos into a `public/images/` folder.

## Step 2: Open Claude Code

```bash
claude
```

## Step 3: Scaffold the project

Paste this prompt into Claude Code:

---

Set up a new Next.js 15 project with App Router and TypeScript. Install and configure:
- Tailwind CSS
- Framer Motion
- Google Fonts (Cormorant Garamond + DM Sans)

Read CLAUDE.md for all brand guidelines and design specifications.

Create the project structure with these files:
- app/layout.tsx (global layout with fonts, metadata, analytics)
- app/page.tsx (the full landing page — all sections)
- app/api/waitlist/route.ts (POST endpoint that accepts an email address)
- components/nav.tsx
- components/hero.tsx
- components/education.tsx
- components/lifestyle-benefits.tsx
- components/product-card.tsx
- components/trust-signals.tsx
- components/waitlist-section.tsx
- components/footer.tsx
- lib/utils.ts

Do NOT write any code yet. Give me the plan first.

---

Review Claude's plan. When satisfied:

---

Go ahead and implement. Start with layout.tsx and the component shell, then build each section top to bottom.

---

## Step 4: Add the waitlist API

You have two options. Tell Claude which one you want:

### Option A: Google Sheets (zero cost, manual export)
Paste this prompt:

---

Set up the waitlist API route to append email submissions to a Google Sheet using the Google Sheets API. Use a service account. Store the credentials in environment variables. Add basic validation (email format, no duplicates) and rate limiting. Return appropriate success/error responses as JSON.

---

### Option B: Loops.so (purpose-built for waitlists, free up to 1,000)
Paste this prompt:

---

Set up the waitlist API route to add email subscribers to Loops.so using their REST API. The API key will be in LOOPS_API_KEY environment variable. Add basic validation (email format) and rate limiting. Return appropriate success/error responses as JSON.

---

## Step 5: Add the "sold out" state

---

On the product card section, show the price (£45) with a line through it and a "Sold out" badge. The CTA button should say "Join waitlist for restock" and trigger the email capture modal/form. Make it feel like this product had a first run that sold out, not like it hasn't launched yet.

---

## Step 6: Add images

Once you have your product/lifestyle photography ready, drop the files into `public/images/` and prompt:

---

Replace all image placeholders with the real photography in public/images/. Use Next.js Image component with proper alt text, lazy loading, and responsive sizes. Optimise for mobile-first display.

---

## Step 7: Polish and test

---

Run a full review of the site:
1. Check Lighthouse score on mobile — target 95+
2. Test the waitlist form submission end-to-end
3. Check all responsive breakpoints (375px, 768px, 1024px, 1440px)
4. Verify all animations are subtle and performant
5. Check colour contrast meets WCAG AA
6. Test keyboard navigation and screen reader basics
Fix any issues found.

---

## Step 8: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts. Then add your custom domain in the Vercel dashboard.

Set your environment variables in Vercel:
- LOOPS_API_KEY (if using Loops)
- or GOOGLE_SHEETS_* credentials (if using Google Sheets)

## Step 9: Ongoing changes

Whenever you want to update copy, add a section, or tweak design:

```bash
cd woolen
claude
```

Then just describe what you want in plain English. Claude Code reads CLAUDE.md automatically and stays on-brand.

## Useful Claude Code commands

```
# Resume your last session
claude --continue

# Start in plan mode (for bigger changes)
# Then press Shift+Tab to enter Plan Mode

# Quick command to run dev server
!npm run dev
```
