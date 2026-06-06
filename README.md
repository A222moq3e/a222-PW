# Persona Website

Professional bilingual portfolio for Abdullah bin Ammar, built with Next.js App Router, shadcn-style components, Tailwind CSS, and English/Arabic locale routes.

## Stack

- Next.js App Router
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
  layout.jsx       Root shell
src/
  components/
    portfolio/     Page sections and project preview modal
    ui/            shadcn-style primitives
  lib/
    dictionaries.js  English and Arabic content
    i18n.js          Locale helpers
    utils.js         cn() class helper
public/
  imgs/            Static image assets
Dockerfile         Production Docker image
components.json    shadcn configuration
```

## Notes

- Project previews load inside a modal iframe only after clicking the preview button.
- Some external sites may block iframe embedding with security headers; every project card still has a direct link.
- Content is centralized in `src/lib/dictionaries.js` for English and Arabic updates.
