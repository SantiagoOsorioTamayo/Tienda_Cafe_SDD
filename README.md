# Cumbre — Café de origen colombiano

Static landing page for a Colombian single-origin coffee shop: product catalog, origin story, and an order form that validates in the browser and hands off to WhatsApp or email.

**Live site:** https://cumbre-cafe-colombiano.vercel.app

## Stack

- Astro 7 with static output. No integrations, no adapters, no SSR.
- Bun 1.4 as package manager (`bun.lock`). Node `>=22.23.4`.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `bun install`     | Install dependencies                        |
| `bun run dev`     | Start the dev server at `localhost:4321`    |
| `bun run build`   | Build the production site to `./dist/`      |
| `bun run preview` | Serve the built output locally              |

`bun run build` is the only verification step. There is no test, lint, or typecheck script.

## Project structure

```text
src/
├── components/   SiteHeader, Hero, Catalog, ProductCard, Origin, OrderForm, SiteFooter
├── data/         site.ts (contact), products.ts (lots), origin.ts (farms and stages)
├── layouts/      Layout.astro (document shell, global reset, design tokens)
└── pages/        index.astro (the single page)
```

## Content

Catalog lots, farms, and contact details are data-driven. Edit `src/data/*.ts` instead of the markup.

`src/data/site.ts` still holds placeholder contact data (`573000000000`, `hola@cumbre.example`) and the footer shows a sample-data notice. Replace both before sharing the site with customers.

## Deployment

- Host: Vercel, project `cumbre-cafe-colombiano`.
- Production branch: `feat/landing-cafe-colombiano`. Pushes to it build production; every other branch builds a preview.
- Deployment Protection uses Standard Protection: production domains stay public, while generated deployment and preview URLs require a Vercel login.
- Build settings come from `vercel.json` (`bun install`, `bun run build`, output `dist`).
