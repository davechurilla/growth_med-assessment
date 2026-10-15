# Weight Loss Center Landing Page

A single, responsive landing page built from the design comp supplied by GrowthMed.

## Purpose

This project is a development assessment by Dave Churilla, prepared for Steven Fruchter, CEO of GrowthMed. It shows how Dave builds a pixel-accurate, accessible page and how he works with AI coding tools (Claude Code) to do it. It is a demonstration and is not deployed.

## Approach

- **Stack:** plain HTML, CSS and vanilla JavaScript on Bootstrap 5.3.8 (CDN, pinned with SRI hashes). No frameworks, bundlers or build step. Fonts are Oswald and Lato from Google Fonts. The one extra dependency is Slick Slider (with jQuery), added because the brief asked for it; both are pinned with SRI hashes.
- **Fidelity:** built section by section from the comp. Type sizes, tracking and leading come from the PSD (converted from points at 120ppi); colors are the PSD hex values.
- **Accessibility:** targets WCAG 2.2 AA (semantic landmarks, keyboard focus, labelled and announced form errors, reduced-motion support). Deviations are listed below.
- **Workflow:** project rules for the AI assistant are in [CLAUDE.md](CLAUDE.md). Changes were made in small, focused commits.

## Notes for review

**Choices that differ from the brief**
- The procedure cards use CSS `linear-gradient()` backgrounds, not a repeating background image. It needs no extra request, stays crisp at any size, and keeps the colors in CSS variables. Their orange hover state is a second gradient layer faded in.

- The wrapper is read as 1200px wide *including* the 30px side padding (1140px of content), which matches the comp. Verified in the browser at a 1920px viewport; `box-sizing: border-box` is applied globally.

- Hero slider (Slick, fade): the headline and quote rotate together; "Read more" stays fixed. Slides 2 and 3 use placeholder text because the comp only has one slide's copy. It includes dots, a pause/play button (WCAG 2.2.2), and no autoplay when the visitor prefers reduced motion. Using a dot stops the automatic rotation until the visitor restarts it.

**Built to the comp, with accessibility trade-offs**
- White text on the orange gradient buttons (Read more, Submit) measures 2.5-3.8:1, under the 4.5:1 minimum. White body text on the orange hover card is about 3.3:1.
- The comp's very small copyright text (10px) is kept.
- Form fields use the comp's placeholder style, with visually hidden labels. A visible or floating label would be better practice.
- Adjusted for contrast: the nav phone number (`#73bfdc` to `#237ba2`) and the form field borders (`#e4e4e4` to `#8f8f8f`).

**Not included**
- A fixed/pinned nav (the comp shows none; it would be a reasonable enhancement).
- Tablet and phone comps did not exist, so those layouts are my own judgment using Bootstrap's breakpoints.
- The contact form is not connected to a server; it runs in demo mode and says so on screen.
- Nav links other than Home and Contact point to `#`, since the comp has no other pages.

## Automated checks

Lighthouse v13.4.1, run locally by Dave on `index.html` (served from a local dev server, so numbers are indicative, not production):

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Desktop | 97 | 100 | 96-100 | 100 |
| Mobile | 96 | 100 | 96 | 100 |

- **Desktop:** Largest Contentful Paint 1.1s, Total Blocking Time 0ms, Cumulative Layout Shift 0.033.
- **Mobile (simulated slow connection):** First Contentful Paint 1.7s, Largest Contentful Paint 2.7s, Total Blocking Time 0ms, Cumulative Layout Shift 0. A first mobile run scored 74 with a 6.1s LCP. Converting the runners image and both backgrounds to WebP (with JPG/PNG fallbacks), fetching the runners image early, and adding a size-matched fallback for the Oswald web font (which removed a layout shift when the font loaded) brought it to 96.
- **Remaining notes:** Best Practices 96 is the header logo, which is a 1x image and looks low-resolution on high-density screens (a 2x export or SVG would fix it). Lighthouse also lists render-blocking stylesheets (Bootstrap, Slick, Google Fonts, the page CSS) and small image savings on the icons. Unused JavaScript in the reports came from browser extensions, and the unminified stylesheet is by design (no build step).

Lighthouse covers only the automated accessibility checks, so the trade-offs listed above still apply. A manual keyboard pass and an axe scan are separate from these results.

## Structure

```
index.html      the page
css/styles.css  brand tokens, Bootstrap variable mappings, section styles, hover/motion
js/main.js      mobile menu close, form validation and submit (demo mode)
assets/         images and icons used by the page
design/         client comp (reference only, not in the repo)
```

## Running it

Open `index.html` in a browser. There is nothing to install or build.
