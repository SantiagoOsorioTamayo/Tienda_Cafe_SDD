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

- **T1** — Design tokens, layout shell, site/product/origin data. **Done** — `d3fcc80`
- **T2** — Header, hero, catalog, origin. **Done** — `b6266ef`
- **T3** — Order form, footer, brand favicon, `vercel.json`. **Done** — `1bf4f01`
- **T4** — Build verification, functional check, AGENTS.md conventions. **Done** — see L6/L7
- **T5** — Delivery: Vercel deploy **done (temporary, expires in 60 min)**; PR **blocked** (no remote, no `gh`).

## Log

**L1** — User request, verbatim:

> Usando la skill de astro y la skill design-taste-frontend, crea una landing-page para una tienda de café de origen colombiano, donde sea visible un catálogo de productos,una sección de origen y un formulario de contacto/pedidos. Usa sdd en modo automatico + engram y en delivery-modo single-pr. Una vez termines. despliega en verce

**L2** — Skill availability check: neither `astro` nor `design-taste-frontend` is installed in any skill root (`~/.config/opencode/skills`, `~/.claude/skills`, `~/.copilot/skills`, `~/.codex/skills`). Proceeding with the framework's real docs/config as the executable source of truth and own design judgment, per the fallback rule.

**L3** — Delivery blockers found before implementation:
- `git remote -v` is empty → cannot push, cannot open a PR. Work stays on the local feature branch.
- `gh` CLI is not installed, `GH_TOKEN` unset.
- `vercel` CLI is not installed, `VERCEL_TOKEN`/`VERCEL_ORG_ID` unset, no `.vercel/` project link → `vercel deploy` needs interactive login.

**L4** — Product decision (automatic mode): the site is fully static, so the order form does not POST anywhere. It validates client-side and hands off to WhatsApp/email with a prefilled message. Contact constants live in `src/data/site.ts` and are placeholders (S10).

**L5** — Implementation: 7 components (`SiteHeader`, `Hero`, `Catalog`, `ProductCard`, `Origin`, `OrderForm`, `SiteFooter`), 3 data modules, global tokens in `Layout.astro`, brand favicon, `vercel.json`. Starter `Welcome.astro` and its two SVGs removed. No new dependencies.

**L6** — Build verification: `bun run build` passes (1 page, static). Generated HTML contains `#inicio`, `#catalogo`, `#origen`, `#pedido`, `#order-form`, `data-whatsapp`, and the `[hidden]` rule.

**L7** — Functional verification through Edge headless + CDP at 390 px:
- No horizontal overflow (`scrollWidth === innerWidth === 390`).
- Empty submit: 5 fields flagged, focus moved to `nombre`, handoff stays hidden.
- Valid submit: form hidden, handoff visible, summary and total correct, `wa.me` and `mailto` hrefs encoded with the full order.
- "Editar pedido" restores the form; catalog cards preselect the matching lot in the select.
- Desktop/mobile screenshots inspected; fixed the hero stamp overlap and `1.750` altitude formatting.

**L8** — Deployment: `vercel` CLI absent and no credentials (`vercel deploy --prod` → `no-credentials-found`). Anonymous deployment succeeded:
- URL: `https://snappy-aurora-biyuwwy.tmp.now` (`READY`, HTTP 200, content verified). **Expired**: anonymous deployments live 60 minutes.
- Claim URL: `https://vercel.com/claim-deployment?code=2c285af0-f79f-45e1-b2fe-84f78fe07176`
- A permanent deploy needed `vercel login` (or `--token`); the user claimed the deployment in the dashboard instead.
- PR not created: `git remote -v` is empty and `gh` is not installed.

**L9** — Production deployment live (user-driven, dashboard only; no Vercel credentials available locally):
- Public URL: `https://cumbre-cafe-colombiano.vercel.app` (HTTP 200, title `Cumbre - Café de origen colombiano`, CSS asset 200, no login wall, no `x-robots-tag`).
- The project was created by claiming the anonymous deployment, then connected to `SantiagoOsorioTamayo/Tienda_Cafe_SDD` and renamed from `snappy-aurora-biyuwwy` to `cumbre-cafe-colombiano`.
- The first Git-triggered build (`ce24aba`, empty commit) succeeded per the Vercel commit status but was initially unreachable: the project domain returned Vercel's login page on every path because Deployment Protection was set to All Deployments. Disabling it made the site public.
- Standard Protection is now enabled: production domain public, generated deployment and branch URLs require a Vercel login (`x-robots-tag: noindex`).
- Production branch setting lives in Settings → Environments → Production → Branch Tracking, not in Settings → Git.
- Still pending: replace the placeholder contact data in `src/data/site.ts` (`573000000000`, `hola@cumbre.example`) before sharing the URL with customers.
