# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/institutional website for **RM PrimeTI Tecnologia** (IT consulting, computer/notebook repair, and web/system development, based in Minas Gerais, Brazil). It is a **static HTML/CSS/JS site with no build step, no bundler, and no `package.json`** — files are served as-is. Deployed on **Vercel** (see `vercel.json` for security headers and static-asset cache-control rules).

## Commands

There is no build/lint/test tooling in this repo. To preview locally, serve the folder with any static file server, e.g.:

```bash
python -m http.server 8080   # then open http://localhost:8080/index.html
# or
npx serve .
```

There are no automated tests. When verifying UI changes, open the page in a browser (or drive it headlessly) and check the console for errors.

`chromium-cli` is not installed in this environment. To drive a headless browser instead: `npm install puppeteer-core` in a scratch directory, then launch it with `executablePath` pointing at the cached Chromium binary under `~/.cache/puppeteer/chrome/*/chrome-win64/chrome.exe` (glob for the version dir — don't hardcode it, it changes when the cache updates). Serve the site first (`python -m http.server`), then `page.goto('http://localhost:8080/index.html')`.

Git commands in this environment may fail with `detected dubious ownership in repository` (the working directory owner differs from the current OS user). Don't run `git config --global --add safe.directory ...` (that permanently changes global git config) — instead pass it per-invocation: `git -c safe.directory="$(pwd)" status`.

## Pages

- `index.html` — the main landing page (hero, services, plans, business systems, portfolio, products, reviews, about, FAQ, quick-quote form, contact form, footer).
- `politica-de-privacidade.html` — LGPD privacy policy page. Shares the same navbar/footer/cookie-banner/lang-switcher markup pattern as `index.html`; keep them in sync when editing shared components (navbar links, footer, lang switcher).

Both pages set `<body data-page="index">` / `<body data-page="privacy">` — `js/i18n.js` uses this attribute to pick the right `<title>`/meta-description translation per page.

## JS architecture (`js/`)

Plain scripts, no modules/bundler — load order in the HTML matters:

1. **`config.js`** — Supabase URL/anon key and EmailJS IDs (placeholders `SUA_*` until configured). The anon key is intentionally public; access is restricted via Supabase Row Level Security, not secrecy.
2. **`i18n.js`** — the language engine (see below). Must load before `forms.js`/`main.js` since both call `window.i18n.t()`.
3. **`forms.js`** — Supabase-backed lead form, quick-quote form status is actually handled in `main.js`; `forms.js` owns the main contact form (`#leadForm`), the newsletter form (`#newsletterForm`, with an EmailJS confirmation email), and page-view tracking. If Supabase isn't configured (`config.js` still has placeholder values), it falls back to opening a pre-filled WhatsApp link instead of submitting.
4. **`main.js`** — everything else: preloader, cookie-consent banner (gates loading GA4/Microsoft Clarity — both are placeholder IDs until filled in), particle canvas background, navbar scroll/active-link/mobile-toggle behavior, scroll-reveal animations, FAQ accordion, the quick-quote form (`#quickQuoteForm`), back-to-top button, and misc hover/parallax effects.

Both `forms.js` and `main.js` define a local `t(key, fallback)` helper that delegates to `window.i18n.t()` for translating dynamically-generated status messages (form success/error text, button loading states).

## i18n system (`js/i18n.js`)

Supports **pt-BR** (default), **pt-PT**, and **en**, switched via a flag+code dropdown in the navbar (`.lang-switcher`).

- The HTML is always authored/shipped in **pt-BR**. Translatable elements carry `data-i18n="key"` (innerHTML), `data-i18n-aria-label`, `data-i18n-placeholder`, or `data-i18n-title` attributes.
- On first run, the engine captures each tagged element's original pt-BR content into `data-i18n-orig*` attributes before applying any translation — this is what lets it restore pt-BR without re-fetching the page.
- Translation strings live in the `T['pt-PT']` and `T['en']` objects inside `i18n.js` (no pt-BR object needed — pt-BR always falls back to the captured original). Values may contain inline HTML (e.g. `<span class="gradient-text">`) since they're set via `innerHTML`.
- `META.index` / `META.privacy` hold per-page, per-language `<title>` and meta-description strings, matched via `<body data-page>`.
- Choice persists in `localStorage` under `primetitec_lang` and dispatches a `primetitec:langchange` CustomEvent on change.
- `window.i18n.t(key, fallback)` is the public API for JS-generated strings (form status messages, etc.); `window.i18n.getLang()` / `setLang()` are also exposed.
- **When adding new UI text:** add the `data-i18n*` attribute + key to the HTML (source of truth is pt-BR), then add matching entries to both `T['pt-PT']` and `T['en']` in `i18n.js`. Keys are dot-namespaced by section (e.g. `services.svc1.title`, `pp.s3.thCookie`, `form.opt.consulting`). WhatsApp deep-link pre-filled messages (`wa.me/...?text=...`) are intentionally left untranslated in all languages, since the recipient (the business) reads Portuguese.

## Styling (`css/styles.css`)

Single stylesheet, no preprocessor. Design tokens (colors, gradients, fonts, radii, easing) are defined as CSS custom properties on `:root` at the top of the file — reuse these instead of hardcoding values. Mobile breakpoint is `max-width: 768px` (nav becomes a slide-in off-canvas menu; `.nav-toggle` hamburger appears).

## Backend (Supabase)

`supabase/schema.sql` is the source of truth for the database — idempotent, safe to re-run in the Supabase SQL editor. Tables: `leads`, `newsletter`, `page_views`, all with RLS enabled (`anon` role can only `INSERT`; `authenticated` has full access). Includes convenience views `v_leads_novos`, `v_visitas_por_dia`, `v_newsletter_ativos`. When changing form fields in the HTML/JS, keep the columns here in sync.

## Conventions

Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`) with descriptions in Portuguese (see `git log`).

## Third-party integrations

- **Supabase JS** (UMD build via CDN) — leads, newsletter signups, page-view tracking.
- **EmailJS** (via CDN) — sends the newsletter confirmation email; template source is `emailjs_template.html`.
- **Google Analytics 4** and **Microsoft Clarity** — only loaded after cookie consent is accepted (`loadAnalytics()` in `main.js`); both use placeholder IDs (`G-XXXXXXXXXX` / `XXXXXXXXXX`) until configured.
- Google Fonts (Orbitron, Inter) and Font Awesome — loaded via CDN `<link>` tags in each page's `<head>`.
