# GrowthMed Landing Page

A single, responsive landing page for GrowthMed, built from the design comps supplied by the client.

## Purpose

This project is a development assessment by Dave Churilla, prepared for Steven Fruchter, CEO of GrowthMed. It shows how Dave builds a pixel-accurate, accessible page and how he works with AI coding tools (Claude Code) to do it. It is a demonstration and is not deployed.

## Approach

- **Stack:** plain HTML, CSS and vanilla JavaScript on Bootstrap 5.3.8 (CDN, pinned with SRI hashes). No frameworks, bundlers or build step.
- **Fidelity:** built to match the comps section by section, at each comp width.
- **Accessibility:** targets WCAG 2.2 AA. This covers semantic landmarks, color contrast, keyboard focus, labelled and announced form errors, and reduced-motion support.
- **Workflow:** project rules for the AI assistant are written down in [CLAUDE.md](CLAUDE.md), and changes are kept small and committed incrementally.

## Structure

```
index.html      the page
css/styles.css  brand tokens, Bootstrap variable mappings, hover/motion polish
js/main.js      navbar shadow, mobile menu, form validation, footer year
design/         client comps (reference only)
assets/         optimized images, fonts and icons used by the page
```

## Running it

Open `index.html` in a browser. There is nothing to install or build.

The contact form runs in demo mode and says so on screen. It is not connected to a server, so nothing is sent.
