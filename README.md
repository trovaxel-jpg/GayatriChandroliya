# Aayama Yoga — Premium Landing Page

A mobile-first, conversion-focused landing page for an online yoga brand
targeting Indian women 25–55, built with Next.js App Router, TypeScript,
Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Replacing the enrollment link

Every "Start Your Journey" button and program CTA reads from a single
constant. To point them at your real checkout/booking page, edit:

```
lib/config.ts
```

```ts
export const ENROLLMENT_URL = "https://superprofile.bio/yourprofile";
```

That's the only place you need to change it.

## Editing brand details

`lib/config.ts` also holds the site name, instructor name, domain, email,
and social links — all used across metadata, schema markup, and the footer.

## Replacing images

Two image placeholders are marked clearly in the code with descriptive
`aria-label`s, ready to swap for real photography:

- `components/Hero.tsx` — hero photograph
- `components/Instructor.tsx` — instructor photograph

Replace the placeholder `<div>` with a Next.js `<Image />` component
pointing at your real photo for best performance.

## Deploying to Vercel

```bash
npx vercel
```

or connect the repo directly in the Vercel dashboard. No environment
variables are required.

## Structure

- `app/` — routes: home, privacy policy, terms, sitemap, robots
- `components/` — one component per section, all reusable
- `lib/config.ts` — brand constants and the enrollment URL

## Notes

- Fonts (Fraunces + Manrope) load via `next/font/google` and require
  internet access at build time — this is automatic on Vercel.
- All animations respect `prefers-reduced-motion`.
- Replace `/public/og-image.jpg` with a real 1200×630 share image before
  launch.
