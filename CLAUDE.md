# GrowthMed landing page

A single, responsive landing page for GrowthMed (a healthcare company), built from
a design comp supplied by the client. The build must be **pixel-perfect to the comps**
and meet **WCAG 2.2 AA**.

## Stack (fixed, do not change)
- Plain HTML, CSS, and vanilla JavaScript. No frameworks, no bundlers, no build step,
  no npm dependencies unless I ask for one.
- **Bootstrap 5.3.8** via jsDelivr CDN, with the pinned version and SRI hashes already
  in `index.html`. Do not upgrade to Bootstrap 6 (alpha) or drop the SRI hashes.
- The client asked for Bootstrap to be used for all styling. Treat that as
  "Bootstrap-based": use its grid, components, and utilities first.

## Files
- `index.html`: the page
- `css/styles.css`: brand tokens, Bootstrap variable mappings, hover/motion polish
- `js/main.js`: navbar shadow, mobile menu close, form validation/submit, footer year
- `design/`: client comps and exported assets (reference only, do not edit)
- `assets/`: optimized images, fonts, and icons used by the page

## Styling rules
1. Reach for Bootstrap classes first: grid (`container`, `row`, `col-*`), spacing,
   type, color, and display utilities.
2. When Bootstrap cannot match the comp, add the smallest targeted rule to
   `css/styles.css`. Prefer overriding Bootstrap CSS variables over fighting
   specificity. Avoid `!important` unless overriding a Bootstrap utility that
   already uses it.
3. Brand values (colors, font, spacing, radii) live as CSS variables in the tokens
   block at the top of `styles.css`. Never hardcode a brand color elsewhere.
4. No inline styles. Do not edit Bootstrap's files; override only.
5. Mobile-first: base styles target phones; add `sm`/`md`/`lg`/`xl` overrides upward.
   Use the breakpoints that the comps actually define, and note them below.

## Pixel-perfect workflow
- Work one section at a time, in page order. Compare the rendered page to the comp
  at each comp width before moving on.
- Take measurements (type size, line height, spacing, colors) from the comp or the
  client's specs. Do not guess values. If a value is missing, ask me.
- If the comp conflicts with accessibility (contrast, target size, focus), flag it
  to me before choosing. Do not silently deviate in either direction.
- Export and optimize images to the sizes needed: `width`/`height` attributes set to
  avoid layout shift, `loading="lazy"` below the fold, modern formats where sensible.

## Accessibility (WCAG 2.2 AA is the target)
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, logical heading order.
- All meaningful images have accurate `alt`; decorative images use `alt=""`.
- Text contrast at least 4.5:1 (3:1 for large text and UI components). Check every
  brand color pairing and report failures instead of shipping them.
- Visible keyboard focus on every interactive element; never remove outlines without
  a replacement. The sticky header must not cover a focused element
  (`scroll-padding-top` handles anchors; check tabbing too).
- Touch targets at least 24x24 CSS px (aim for 44x44 on primary controls).
- Form fields have visible `<label>`s. Validation errors are announced: link messages
  with `aria-describedby` and set `aria-invalid` on invalid fields.
- Motion: anything that moves must be disabled under `prefers-reduced-motion`.
  Hover effects only under `@media (hover: hover)`.
- Link text is meaningful out of context; the skip link stays working.
- Do not use ARIA where native HTML does the job.

## JavaScript conventions
- Vanilla JS wrapped in a single IIFE, as in `main.js` (no ES modules, no libraries
  beyond Bootstrap).
- Use Bootstrap's JS API (`bootstrap.Collapse`, etc.) rather than reimplementing it.
- `FORM_ENDPOINT` in `main.js` is intentionally empty. Do not invent an endpoint.
  Until I provide one, the form runs in demo mode and says so on screen.

## Verification (run before calling any section done)
- Check at phone, tablet, and desktop widths, matching the comp widths.
- Keyboard-only pass: tab through the page, open/close the mobile menu, submit the form.
- Run Lighthouse (Accessibility) and axe DevTools; fix every issue they report.
- Confirm no console errors and no horizontal scroll at any width.

## Working agreements
- Use Plan mode for anything larger than a small edit; show me the plan first.
- Keep changes small and focused so diffs are easy to review.
- Placeholder copy in `index.html` stays until I supply the real text. Do not invent
  marketing claims, statistics, or testimonials. This is a healthcare company.
- Ask before adding fonts, icon libraries, analytics, or any third-party script.

## Project details (fill in once the client materials arrive)
- Breakpoints defined by the comps: _TBD_
- Brand colors / font(s): _TBD_
- Contact form: submits to _TBD_ (or is removed)
- Sections in the final page: _TBD_
- Deadline / delivery format: _TBD_
