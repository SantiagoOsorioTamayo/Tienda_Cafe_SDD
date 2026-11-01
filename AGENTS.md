# AGENTS.md

## Stack

- Astro 7.4.4 static site. One page (`src/pages/index.astro`) rendered through `src/layouts/Layout.astro`.
- Content is data-driven: catalog lots, farms, and store contact details live in `src/data/*.ts` and are rendered by components. Edit the data files, not the markup, to change products, origins, or contact info.
- `astro.config.mjs` has no integrations or adapters: no Tailwind, no React/Vue/Svelte, no SSR. Adding any requires installing the integration and wiring it into the config.
- Package manager is Bun 1.4.4 (`bun.lock` is the lockfile); `package.json` requires Node `>=22.23.4`. Use `bun` / `bunx`, never `npm`, `yarn`, or `pnpm`.
- `README.md` is the untouched Astro starter readme. Trust `package.json`, `astro.config.mjs`, and `src/` over it.

## Commands

Run from the repo root:

- `bun install` — install dependencies.
- `bun run dev` — dev server on `http://localhost:4321` (foreground).
- `bunx astro dev --background` — start the dev server detached. Manage it with `bunx astro dev status`, `bunx astro dev logs [--follow]`, `bunx astro dev stop`.
- `bun run build` — build to `dist/`.
- `bun run preview` — serve the built output.

There is no test, lint, format, or typecheck script. `bun run build` is the only verification step; do not invent or add a runner unless asked. `astro check` is unavailable because `@astrojs/check` is not installed, and installing it is a dependency change.

## Conventions

- TypeScript is strict (`astro/tsconfigs/strict`).
- Styles live in scoped `<style>` blocks inside the `.astro` component that uses them. `Layout.astro` holds the document shell, global reset, and the design tokens (`--ink`, `--clay`, `--cream`, `--font-display`, …). Consume tokens with `var(--…)` instead of hardcoding colors or fonts.
- New pages go in `src/pages/`; shared markup goes in `src/components/`, imported by pages.
- The order form has no backend: it validates in the browser and hands off to WhatsApp or email. `src/data/site.ts` holds placeholder contact data and must be replaced before publishing.
- `dist/` and `.astro/` are generated and gitignored: never hand-edit them. `.astro/types.d.ts` (referenced by `tsconfig.json`) only exists after a dev or build run.

## Reference

Astro 7 docs: https://docs.astro.build
