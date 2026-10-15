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
  Exception: the client's brief asks for Slick Slider, which requires jQuery. Both are
  loaded from jsDelivr with pinned versions and SRI hashes, and used only for the hero slider.
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

## Project details
- Breakpoints defined by the comps: only one comp exists (desktop; 2181px canvas, 1:1,
  content 1140px inside the 1200px wrapper with 30px padding). No tablet or phone comp, so
  Bootstrap's default breakpoints are used; `lg` (992px) is the main layout switch.
- Brand colors / font(s): teal `#00b1c5` to navy `#00537e`; orange `#ea8b51` to `#de5630`;
  heading teal `#28a2be`; footer `#2e2f31`. Oswald (headings, nav, buttons) and Lato (body)
  from Google Fonts. Type sizes converted from the PSD (Photoshop pt x 1.667 at 120ppi).
- Contact form: demo mode, no endpoint (the page is a demonstration and is not deployed).
- Sections in the final page: header/nav, hero, procedure cards, contact, footer.
- Deadline / delivery format: about 2.5 hours from the brief; delivered as a GitHub repo.

## The following are instructions for this task from Steven Fruchter at GrowthMed

# Test:
- Please convert as much of the design as you can into HTML/CSS. We will
not use your code on a production site.
- We will be mainly focusing on your awareness of conventions, the
efficiency and structure of your code, and your attention to detail.

# Instructions:
- The wrapper width is 1200px with 30px of padding on each side.
Globally apply box-sizing:border-box;.
- The fonts used are the Google fonts, Oswald and Lato
- In the feature area make the running couple a png separate from the
background.
- In the procedure section make the procedure cards entirely out of
HTML/CSS using a repeating image for the background gradient.
- In the procedure section give the cards the indicated orange hover state.
- Create hover states for all buttons and add CSS transitions to all
hover events.
- Make the site responsive utilizing Bootstrap.

# If you have time:
- In the feature area use Slick Slider to make the text rotate out
with a fade, adding buttons to manually switch between slides.