---
name: Abdullah bin Ammar — Portfolio
description: A bilingual security-engineer portfolio styled as an operator's desktop at night.
colors:
  terminal-blue: "#3b82f6"
  signal-cyan: "#22d3ee"
  signal-cyan-ink: "#06212b"
  focus-ring: "#60a5fa"
  midnight-blueprint: "#08111f"
  blueprint-dusk: "#0b1627"
  blueprint-floor: "#060b14"
  window-panel: "#0f1b2d"
  raised-panel: "#13233a"
  selected-panel: "#102a44"
  hairline: "#22324a"
  text-primary: "#e5eefb"
  text-strong: "#f8fafc"
  text-muted: "#94a3b8"
  text-on-selected: "#dbeafe"
  text-on-accent: "#ffffff"
  danger: "#ef4444"
typography:
  display:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "normal"
  headline:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
  title:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "normal"
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  arabic:
    fontFamily: "Thmanyah Sans, Arial, Helvetica, sans-serif"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.terminal-blue}"
    textColor: "{colors.text-on-accent}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  button-outline:
    backgroundColor: "{colors.midnight-blueprint}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  button-outline-hover:
    backgroundColor: "{colors.selected-panel}"
    textColor: "{colors.text-on-selected}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "32px"
  badge-outline:
    backgroundColor: "{colors.window-panel}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "2px 10px"
  tech-chip:
    backgroundColor: "{colors.raised-panel}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  card:
    backgroundColor: "{colors.window-panel}"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.xl}"
    padding: "24px"
  window:
    backgroundColor: "{colors.window-panel}"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.lg}"
    padding: "20px"
  window-titlebar:
    backgroundColor: "{colors.raised-panel}"
    textColor: "{colors.text-primary}"
    height: "44px"
  section-icon:
    backgroundColor: "{colors.window-panel}"
    textColor: "{colors.terminal-blue}"
    rounded: "{rounded.lg}"
    size: "40px"
---

# Design System: Abdullah bin Ammar — Portfolio

## Overview

**Creative North Star: "The Operator's Desktop"**

The portfolio is a security engineer's workstation, seen late at night. The page is the desktop: a deep navy wallpaper drawn like a blueprint, with a faint 44px grid and two soft glows. Content lives in things you'd find on that desktop: OS windows with title bars and controls, cards set down on the grid, a shell prompt (`>_ cat cv.html`), and mouse pointers that move with intent. Every surface says "this person works here", without turning into a hacker cliché.

The system is **quiet at rest and alive on touch**. Surfaces are calm, dark, and low-contrast until the visitor does something: hovering lights an edge in Terminal Blue, the info window can be grabbed and dragged, a pointer double-clicks a section icon and the section opens like an app. Density is moderate. The content is proof (credentials, rankings, experience, live projects), so it must stay readable and fast to scan. Personality sits in the frames, cursors, and transitions, never on top of the evidence.

Motion is part of the identity but is rationed. The intro, the section launches, and the occasional pointer burst are short, one-shot, and always disabled under `prefers-reduced-motion`. The design must never feel over-animated: if motion delays reading the proof, it is wrong.

**Key Characteristics:**
- Dark, atmospheric night palette on a blueprint grid; one blue accent for actions, one cyan accent for signals.
- OS-window framing: title bars, minimize/maximize/close controls, draggable windows.
- Terminal touches in monospace, used as accents, not as a theme.
- Custom gradient cursors (arrow and hand) shared by the real cursor and every animated pointer.
- Calm at rest, responsive on hover, drag, and click; rationed one-shot motion.
- Bilingual by construction: Geist for English, Thmanyah Sans for Arabic, logical (start/end) layout for RTL.

## Colors

A night-time palette: deep blueprint navies for the desktop, slightly lighter navy panels for windows, and two cool accents that work like status lights.

### Primary
- **Terminal Blue** (`terminal-blue`): The active command. Primary buttons, section-icon glyphs, eyebrow labels, the hero caret, hover borders on cards and the "See more" button, the hover color of links and menu text. It marks what the visitor can act on.

### Secondary
- **Signal Cyan** (`signal-cyan`): The live signal. Contact icons in the info window, achievement figures, the GitHub glyph, the click ripple, text selection tint, and the bright end of the cursor gradient. It marks what is alive or notable, not what is clickable.
- **Signal Cyan Ink** (`signal-cyan-ink`): Text on solid Signal Cyan (secondary badges).
- **Focus Ring** (`focus-ring`): Keyboard focus rings on every interactive element.

### Neutral
- **Midnight Blueprint** (`midnight-blueprint`): The desktop wallpaper and the base of every outline button. It runs from **Blueprint Dusk** (`blueprint-dusk`) at the top of the page to **Blueprint Floor** (`blueprint-floor`) at the bottom; Blueprint Floor is also the scrollbar track.
- **Window Panel** (`window-panel`): Window bodies, cards, badges, section-icon tiles. Usually applied slightly translucent (92–96%) with a backdrop blur, so the grid reads faintly through.
- **Raised Panel** (`raised-panel`): Window title bars and tech chips. The one step lighter than a panel.
- **Selected Panel** (`selected-panel`): Hover and selected states (outline-button hover, highlighted menu option, timeline logo discs), with **Text on Selected** (`text-on-selected`).
- **Hairline** (`hairline`): Every border, divider, the timeline rail, and the scrollbar thumb at rest.
- **Text Primary** (`text-primary`): Default body text on the wallpaper.
- **Text Strong** (`text-strong`): Text inside cards and windows.
- **Text Muted** (`text-muted`): Descriptions, periods, metadata, inactive icons.

### Named Rules
**The Two Lights Rule.** Terminal Blue means "you can act on this"; Signal Cyan means "this is live or notable". Never swap them, and never introduce a third accent for UI chrome.

**The Blueprint Rule.** Backgrounds are never flat black or pure gray. The wallpaper is always the navy gradient with the 44px grid and the two soft glows (blue top-left, cyan top-right).

**The Pointer Palette Exception.** The decorative visitor pointers may use their own gradient pairs (cyan/blue, pink/violet, amber/orange, emerald/teal, violet/indigo, rose). These colors belong to the pointers only and never leak into UI components.

## Typography

**Display Font:** Geist (with Arial, Helvetica, sans-serif)
**Body Font:** Geist (with Arial, Helvetica, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, Menlo, Consolas)
**Arabic Font:** Thmanyah Sans (with Arial, Helvetica, sans-serif), applied to the whole `/ar` page

**Character:** Geist is a crisp, engineered grotesk that reads like an operating system's UI font. Geist Mono supplies the shell. Thmanyah Sans gives the Arabic page a contemporary voice with equal weight, not a fallback.

### Hierarchy
- **Display** (900, 3rem rising to 4.5rem, 0.95): The name in the hero only, typed in letter by letter with a Terminal Blue caret.
- **Headline** (700, 1.5rem, 1.33): Section titles next to their icon tile.
- **Title** (500–600, 1.25rem in the timeline, 1rem in cards): Job titles, project names, certificate names.
- **Body** (400, 1rem, 1.6): The hero summary and longer text; summary capped around 42rem.
- **Body Small** (400, 0.875rem): Descriptions, bullet points, contact rows, metadata.
- **Label** (600, 0.75rem, uppercase eyebrow in Terminal Blue): Section eyebrows and badges.
- **Mono** (400, 0.875rem): Shell prompts and visitor-pointer name tags only.

### Named Rules
**The Shell Accent Rule.** Monospace marks something as a command or a handle (`>_ cat cv.html`, `root`, `recruiter`). It is never used for body text, headings, or proof.

**The Equal Scripts Rule.** Every typographic decision must hold in Arabic. Code snippets, handles, and window controls stay `dir="ltr"` inside RTL pages.

## Layout

A single centered column, max 72rem (1152px) wide, with 16px side gutters. The hero splits into two columns from 768px up (about 1.4fr text to 0.6fr info window); below that everything stacks. Card grids go from one column, to two at 768px, to three at 1280px. Credentials and Achievements, and Education and Languages, sit side by side from 1024px.

Sections breathe on a 40px vertical rhythm, with a 64–96px hero and a 64px final section. Spacing inside cards is 24px; window bodies 20px; gaps between cards 16px and between paired columns 24px. Section anchors offset 80px so the sticky header never covers a title.

Every section follows the same anatomy: an icon tile plus eyebrow and headline, then the content, which "launches" out of the icon. The header is sticky and turns into a frosted bar after 12px of scroll.

## Elevation & Depth

Depth is layered: a lit wallpaper, translucent panels floating above it, and heavier shadows only for things that sit "on top" of the desktop. Panels use backdrop blur so the grid shows through faintly, which keeps them part of the same world.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 18px 50px rgba(0,0,0,0.22)`): Cards resting on the desktop.
- **Window lift** (`box-shadow: 0 16px 48px rgba(0,0,0,0.3)`): OS windows such as the info window.
- **Menu float** (`box-shadow: 0 18px 60px rgba(0,0,0,0.42)`): Dropdown menus and anything above windows.
- **Header bar** (`box-shadow: 0 14px 46px rgba(0,0,0,0.26)`): The sticky header once scrolled.
- **Click glow** (`box-shadow: 0 0 0 6px rgba(59,130,246,0.35)`): A section icon at the moment it is clicked.

### Named Rules
**The Stacking Rule.** The shadow grows with how far above the desktop something sits: cards < windows < menus and dialogs. Never give a card a menu-level shadow.

## Shapes

Gently rounded, OS-like geometry. Small controls (buttons, badges, menu rows) use soft 6px corners; windows and icon tiles 8px; cards 12px; tech chips and avatar discs are full pills and circles. Every surface has a 1px Hairline border; nothing floats without an edge. The only sharp-edged shapes are the scrollbar thumb's inset gap and the 1px timeline rail.

## Components

### Buttons
Quiet, compact, desktop-native.
- **Shape:** soft corners (6px), 36px tall, 14px medium text, icons 16px.
- **Primary:** Terminal Blue fill, white text, slight shadow; used once per view for the main action ("View projects").
- **Outline:** Midnight Blueprint or Window Panel fill with a Hairline border; hover turns the fill Selected Panel (and, where it is a card-level action, the border Terminal Blue).
- **Ghost:** no fill; hover shows Selected Panel. Used for the secondary project links ("Open", "Website", "GitHub", "Preview").
- **Focus:** 1px Focus Ring.

### Chips
- **Tech chip:** full pill, Raised Panel fill, Text Primary, 12px semibold. Lists technologies under each job.
- **Badge (outline):** 6px corners, Window Panel fill, Hairline border; the hero role eyebrow and project labels.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Window Panel at about 92% with backdrop blur.
- **Shadow Strategy:** Card lift (see Elevation).
- **Border:** 1px Hairline; turns Terminal Blue on hover for interactive cards, which also rise 4px.
- **Internal Padding:** 24px.

### Navigation
The sticky header holds one section switcher and the language toggle. The switcher reads as plain bold text with a chevron (no box); it shows the section currently in view and hovers to Terminal Blue. Its menu is a floating panel (8px corners, menu float shadow, frosted). The header starts at 60% Midnight Blueprint and, once scrolled, becomes 86% with blur, a Hairline bottom edge, and the header shadow.

### OS Window (signature)
The info window is a real desktop window: an 8px-cornered panel with a 44px Raised Panel title bar (info icon + title at the start, decorative minimize/maximize/close at the end, always LTR), and a 20px body. The title bar is the drag handle (grab cursor). On load, a hand cursor drags it into place.

### Section Launcher (signature)
Each section title has a 40px icon tile (8px corners, Window Panel, Terminal Blue glyph). When the section scrolls into view, the gradient arrow pointer flies in, turns into the hand as it hovers the tile, double-clicks (tile presses to 90% with the click glow, a Signal Cyan ring ripples out), and the content opens from the tile's corner. It runs once per section.

### Desktop Cursors (signature)
One arrow and one hand shape with a Signal Cyan → Terminal Blue gradient, white 1.5px outline, and soft shadow. The visitor's real cursor uses them on mouse devices (hand over links and buttons). The section launcher and the info-window intro use the same shapes. Occasional bursts of 6–10 "visitor" pointers peek in from the screen edges with mono name tags (`recruiter`, `root`, `pentester`…), at most once every 40–70 seconds.

### Timeline
Experience is a vertical timeline: a 1px Hairline rail that draws itself on scroll, 36px circular logo discs on the rail, Title-level job names, muted periods and bullets, and tech chips.

## Do's and Don'ts

### Do:
- **Do** frame important content as desktop objects: windows with title bars, cards on the grid, icon tiles that open sections.
- **Do** keep surfaces calm at rest and make them respond on hover, drag, and click (Terminal Blue edges, lifts, presses).
- **Do** use Terminal Blue for actions and Signal Cyan for signals, per the Two Lights Rule.
- **Do** keep every motion short and one-shot, and switch it off under `prefers-reduced-motion`.
- **Do** use logical properties (start/end, ms/me, ps/pe) so every layout mirrors correctly in Arabic.
- **Do** use the shared desktop cursor shapes for any new pointer, cursor, or click effect.

### Don't:
- **Don't** over-animate. No looping motion near the proof, no animation that blocks reading, no new effect that repeats more often than the existing pointer bursts.
- **Don't** use flat black, pure gray, or light backgrounds; the wallpaper is always the Midnight Blueprint gradient and grid.
- **Don't** introduce a third UI accent color or reuse the pointer palette in components.
- **Don't** use monospace for body text, headings, or proof content.
- **Don't** hard-code white surfaces or dark text on buttons; every control uses the theme tokens.
