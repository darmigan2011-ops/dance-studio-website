# Rhythm Dance Studio — Development Plan

Premium multi-page marketing website for a dance studio. Built to blend the two design
references in `design-reference/` into one coherent identity:

- **Primary:** warm ivory editorial layout, serif display type, cinematic imagery, generous whitespace.
- **Secondary:** dark cinematic sections for events, performance moments and dramatic breaks.

## Audit findings (Phase 1)

- Repository contained only `design-reference/` images and an empty `public/` folder.
- No framework, routing, styling or dependencies existed; nothing useful to preserve.
- Stack chosen: **Vite + React 19 + TypeScript + React Router 7**, plain CSS with custom-property
  design tokens (no UI kit, minimal dependencies).
- All copy, dancers, classes and events are clearly identified **sample data** in `src/data/`
  so real studio details can be dropped in later.
- Imagery is generated local SVG artwork (`scripts/generate-images.mjs` → `public/images/`) standing
  in for cinematic photography; swap files in `public/images/` to use real photos without code changes.

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `--ivory` / `--cream` | `#f6f1e8` / `#efe7da` | Page backgrounds |
| `--ink` / `--charcoal` | `#16120e` / `#2a241e` | Typography, dark surfaces |
| `--terracotta` | `#b0512a` | Primary accent (hero emphasis, links) |
| `--sand` / `--gold` | `#c9a06a` / `#e8b27d` | Dark-section accents, rules |
| Display type | Playfair Display | Headlines, editorial numerals |
| Body type | Inter | UI, body copy, labels |
| Script | Caveat | Occasional handwritten accent |

Motion uses IntersectionObserver-driven reveals, CSS transitions, staggered delays, and full
`prefers-reduced-motion` support. No parallax, no 3D.

## Routes

| Route | Page | Acceptance criteria |
| --- | --- | --- |
| `/` | Homepage | Hero, quick links, styles showcase, events preview, dancers preview, story, CTA, footer — previews only, each links onward |
| `/classes` | Classes | All styles with levels + schedules, level filter, enquiry CTA |
| `/dancers` | Dancers | Directory, filter by style, cards link to profiles |
| `/dancers/:slug` | Dancer profile | Bio, styles, stats, related events/CTA; unknown slug → 404 |
| `/events` | Events | List + calendar views, category/month filters, cards link to details |
| `/events/:slug` | Event detail | Date, time, venue, agenda, honest registration CTA (no fake booking) |
| `/about` | About | Studio story, values, instructors |
| `/contact` | Contact | Validated enquiry form, honest demo submission feedback, studio details |

## Phases

1. **Audit & plan** — this document. ✔
2. **Foundation** — scaffold, tokens, typography, header/footer, routing, Reveal primitive, data layer.
3. **Homepage** — nine editorial sections per the brief.
4. **Inner pages** — classes, dancers, events, about, contact (+ detail routes).
5. **Interactions** — filters, calendar, form validation, mobile navigation.
6. **Animation polish** — staggered reveals, hover zooms, page-level scroll restore.
7. **Verification** — `npm run build`, typecheck, route smoke tests, responsive review.

## Known limitations

- Contact form has no backend; submission is acknowledged locally with an explicit notice.
- Registration on events is an on-page enquiry, not a ticketing integration.
- Photography is stylised SVG placeholder art until real assets are supplied.
