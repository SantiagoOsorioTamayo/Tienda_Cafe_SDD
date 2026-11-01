# Landing — Cumbre, café de origen colombiano

Branch: `feat/landing-cafe-colombiano` · Delivery: single-pr · Verification: `bun run build` (only check; no test/lint scripts exist).

## Specs

- **S1** — Single-page landing in Spanish (`es-CO`) for a Colombian specialty coffee store, brand **Cumbre**, replacing the Astro starter hero.
- **S2** — Visible catalog of 4 lots with name, region, process, altitude, varietal, tasting notes, price in COP, and bag weight. Each card links to the order form and preselects that product.
- **S3** — Origin section: traceability narrative, 4 numbered stages (selective harvest, fermentation, drying, roasting), an altitude scale from 1.400 to 2.000 m.a.s.l., and 3 farms with producer, region, varietal, and altitude.
- **S4** — Contact/order form with name, email, phone, product, quantity, delivery method, city, notes, and Colombian data-processing consent. Spanish per-field validation messages plus an `aria-live` summary.
- **S5** — No backend: the form composes the order and offers WhatsApp (`wa.me`) and email (`mailto`) links with the encoded summary. It must never fake a successful submission.
- **S6** — Accessibility: `lang="es"`, skip link, visible focus, associated labels, AA contrast, `prefers-reduced-motion` respected.
- **S7** — Responsive 360–1440 px with no new dependencies: no Tailwind, no UI framework, no external fonts. Scoped component styles plus global CSS tokens in `Layout.astro`.
- **S8** — Verification: `bun run build` passes and the generated HTML contains the three sections and the form.
- **S9** — Delivery: one feature branch, work-unit commits, one PR, Vercel deployment.
- **S10** — Contact details and prices are sample data and must be replaced before publishing.

## Tasks

- **T1** — Design tokens, layout shell, site/product/origin data. Commit: `feat(site): add brand data and editorial design tokens`
- **T2** — Header, hero, catalog, origin. Commit: `feat(landing): add hero, catalog and origin sections`
- **T3** — Order form, footer, brand favicon, `vercel.json`. Commit: `feat(landing): add order form with whatsapp and email handoff`
- **T4** — Build verification, AGENTS.md conventions update.
- **T5** — Delivery: PR and Vercel deploy (blocked, see Log).

## Log

**L1** — User request, verbatim:

> Usando la skill de astro y la skill design-taste-frontend, crea una landing-page para una tienda de café de origen colombiano, donde sea visible un catálogo de productos,una sección de origen y un formulario de contacto/pedidos. Usa sdd en modo automatico + engram y en delivery-modo single-pr. Una vez termines. despliega en verce

**L2** — Skill availability check: neither `astro` nor `design-taste-frontend` is installed in any skill root (`~/.config/opencode/skills`, `~/.claude/skills`, `~/.copilot/skills`, `~/.codex/skills`). Proceeding with the framework's real docs/config as the executable source of truth and own design judgment, per the fallback rule.

**L3** — Delivery blockers found before implementation:
- `git remote -v` is empty → cannot push, cannot open a PR. Work stays on the local feature branch.
- `gh` CLI is not installed, `GH_TOKEN` unset.
- `vercel` CLI is not installed, `VERCEL_TOKEN`/`VERCEL_ORG_ID` unset, no `.vercel/` project link → `vercel deploy` needs interactive login.

**L4** — Product decision (automatic mode): the site is fully static, so the order form does not POST anywhere. It validates client-side and hands off to WhatsApp/email with a prefilled message. Contact constants live in `src/data/site.ts` and are placeholders (S10).
