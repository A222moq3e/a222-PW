# Persona Website

Professional bilingual portfolio for Abdullah bin Ammar, built with Next.js App Router, shadcn-style components, Tailwind CSS, and English/Arabic locale routes.

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- shadcn-style UI primitives
- Radix Dialog
- Lucide icons
- Docker production image with Next standalone output

## Visual Direction

The site uses a **desktop-style theme**: the portfolio should feel like a developer's desktop, with windows and terminal hints sitting on a dark, blueprint-like wallpaper. Keep new UI consistent with these rules:

- **Windows, not plain cards.** Main panels use a desktop window frame (`src/components/ui/safari-01.tsx`): a title bar with an icon and title, plus Windows-style minimize / maximize / close controls. The controls are decorative and stay `aria-hidden`.
- **Windows can be moved.** The hero info window can be dragged by its title bar (`draggable-info-card.tsx`), like a real desktop window. Dragging is turned off when the user prefers reduced motion.
- **Terminal touches.** Small monospace prompts such as `>_ cat cv.html` above the hero name hint at a shell. Use them sparingly, as accents.
- **Desktop wallpaper background.** A dark navy base with a faint 44px grid and soft blue / cyan glows (`app/globals.css`). A spotlight follows the pointer on desktop (`cursor-spark.tsx`).
- **Dark palette with blue and cyan accents.** Colors come from the tokens in `app/globals.css`. `primary` is blue and `secondary` is cyan. Use the tokens instead of hard-coded colors.
- **Calm motion.** Content reveals on scroll (`scroll-reveal.tsx`), the timeline draws itself in (`timeline-decoration.tsx`), and the name animates in. Every animation respects `prefers-reduced-motion`.
- **Bilingual and RTL-safe.** Layouts must work in Arabic (RTL). Use logical properties like `start` / `end` and `ms` / `me`. Keep window controls and code snippets `dir="ltr"`.

## Routes

```text
/       Redirects to /en
/en     English portfolio
/ar     Arabic portfolio, RTL layout
```

## Local Development

```powershell
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:10222/en
http://127.0.0.1:10222/ar
```

The dev server always uses port `10222`, which is set in the `dev` script in `package.json`.

## Production Build

```powershell
npm run build
npm start
```

## Docker

```powershell
docker build -t persona-website:latest .
docker run --rm -p 3100:3000 persona-website:latest
```

Open:

```text
http://127.0.0.1:3100/en
```

## Project Structure

```text
app/
  [locale]/        Localized routes and metadata
  globals.css      Tailwind CSS, theme tokens, base styles
  layout.tsx       Root shell
src/
  components/
    portfolio/     Page sections and project preview modal
    ui/            shadcn-style primitives
  lib/
    dictionaries/    Split locale content, shared project data, and data types
      ar.ts          Assembles Arabic section data
      en.ts          Assembles English section data
      data/          Per-locale section data files
        ar/          Arabic files for hero, contact, experience, projects, and more
        en/          English files for hero, contact, experience, projects, and more
      projects.ts    Shared project URLs and preview metadata
      types.ts       Dictionary and project types
    i18n.ts          Locale helpers
    utils.ts         cn() class helper
public/
  imgs/            Images grouped by project, organization, and personal logo
Dockerfile         Production Docker image
components.json    shadcn configuration
```

## Notes

- Project previews load inside a modal iframe only after clicking the preview button.
- Some external sites may block iframe embedding with security headers; every project card still has a direct link.
- Content is split under `src/lib/dictionaries/data/` so every section can be edited in its own locale-specific file.
