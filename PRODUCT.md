# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone weighing Abdullah bin Ammar against other candidates or providers:

- **Security hiring teams**: recruiters and leads hiring for pentest, AppSec, or security research roles.
- **Software hiring teams**: recruiters and leads hiring for full-stack or backend engineering roles.
- **Freelance clients**: companies looking for a security assessment or a web product built.
- **Security community and peers**: CTF teams, bug bounty programs, events, and people who compete in the same space.

Visitors arrive in English or Arabic, often from a CV, LinkedIn, or a direct link, and are evaluating a person rather than buying a product.

## Product Purpose

A bilingual personal portfolio for Abdullah bin Ammar, a security-focused software engineer, full-stack developer, and vulnerability researcher based in Riyadh.

Success: the visitor checks the proof and leaves convinced. That means verifiable credentials, competitive rankings, real work experience, and live projects. Contact (email, phone, LinkedIn, GitHub) should always be within reach, but the primary outcome is a visitor who has verified the claims for themselves.

## Positioning

Builds secure products, and finds and builds security solutions. Abdullah both ships production web systems and attacks and hardens them, so the security work is grounded in real engineering and the engineering is informed by offensive security.

## Operating Context

- Visitors usually scan quickly, often between other candidates' profiles, and verify selectively: they open a credential link, a ranking, or a live project.
- Projects can be previewed in an in-page modal iframe; some sites block embedding, so every project also has a direct link.
- Certifications link to the issuer's verification page ("Verify credential").

## Capabilities and Constraints

- Next.js App Router, TypeScript, React, Tailwind CSS, shadcn-style primitives, Radix, Motion, Lucide icons.
- Locale routes: `/` redirects to `/en`; `/en` is English (LTR); `/ar` is Arabic (RTL). Every change must work in both directions.
- Content lives in per-locale dictionary files under `src/lib/dictionaries/data/{en,ar}/`; shared project URLs in `src/lib/dictionaries/projects.ts`.
- Production ships as a Docker image (Next standalone output) behind strict security headers, including a Content-Security-Policy (`next.config.mjs`). New third-party origins (scripts, fonts, frames, images) need a deliberate CSP change.
- Dev server runs on port 10222.

## Brand Commitments

- Name: Abdullah bin Ammar (Arabic: عبدالله بن عمار; full Arabic name عبدالله خالد بن عبدالله بن عمار).
- Personal domain: a222ghoul.com. Handles: `A222moq3e` (GitHub), `a222web` (LinkedIn), `a222_a222` (CyberHub).
- Bilingual identity: English and Arabic are equal citizens, not a translation afterthought.
- Voice: factual, competent, and understated. Claims are backed by links rather than adjectives.

## Evidence on Hand

- **Certifications** (with issuer verification links): eJPT, eWPT, eCPPT (INE / eLearnSecurity). Source: `src/lib/dictionaries/data/*/credentials.ts`.
- **Rankings**: Top 10 CyberHub university ranking; Top 300 FlagYard global; Top 100 BlackHat MEA CTF 2024 global event team; Top 2% TryHackMe global.
- **Experience**: SITE (Software Engineer), Moqraraty (Backend Developer & Security Tester), Bugbounty.sa (Security Researcher), Information Security Club (Volunteer Security Researcher), Qubes/Neyam (Software Engineer Specialist), Ejad Club (Volunteer Full-Stack Developer). Source: `experience.ts`.
- **Live projects**: moqraraty.com, sh3bh.com, ejad.sh3bh.com, Neyam, edualizer.video, stemref.askardesign.com, lagpsy.vercel.app, plus more on GitHub. Logos in `public/imgs/`.
- **Education**: Imam Mohammad Ibn Saud Islamic University, GPA 4.82 / 5.
- **Absent, do not fabricate**: testimonials, client logos beyond real employers and projects, case-study metrics, bug bounty payout figures, or any ranking or certification not listed above.

## Product Principles

1. **Proof over claims.** Every strong statement should be one click from its evidence: a credential link, a ranking, or a live project.
2. **Builder and breaker in one person.** Engineering and security are presented as one story, not two separate CVs.
3. **Respect the evaluator's time.** A visitor should grasp who Abdullah is and find the proof they care about in seconds; delight must never block the content.
4. **Bilingual by default.** Arabic and English get equal care in content, layout, and direction.
5. **Secure by construction.** The site itself reflects the security mindset: strict headers, no unnecessary third parties.

## Accessibility & Inclusion

- Full RTL support for Arabic alongside LTR English.
- Motion must respect `prefers-reduced-motion`; decorative animation (pointers, intros) is skipped or reduced for those users.
- Decorative elements are hidden from assistive technology.
