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
http://127.0.0.1:3000/en
http://127.0.0.1:3000/ar
```

If port `3000` is busy:

```powershell
npm run dev -- --hostname 127.0.0.1 --port 3100
```

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
  imgs/            Static image assets
Dockerfile         Production Docker image
components.json    shadcn configuration
```

## Notes

- Project previews load inside a modal iframe only after clicking the preview button.
- Some external sites may block iframe embedding with security headers; every project card still has a direct link.
- Content is split under `src/lib/dictionaries/data/` so every section can be edited in its own locale-specific file.
