# Design Changes — The Malaviyan Archive Website
> These changes apply on top of the existing website prompt (v1).
> Update only what is listed here. Everything else stays the same.

---

## 1. Color Palette — REPLACE

Remove the old maroon-heavy palette. Use this instead:

| Role | Old | New Hex |
|---|---|---|
| Primary | Deep Maroon `#6B1D1D` | Institutional Navy `#0F172A` |
| Secondary | — | Deep Maroon `#7F1D1D` (now secondary only) |
| Accent | Warm Gold `#C9972B` | Amber Gold `#F59E0B` |
| Background Main | Off White `#FAF7F2` | Pure White `#FFFFFF` |
| Background Alt | — | Soft Off-White `#F8F9FA` |
| Body Text | Dark Charcoal `#2C2C2C` | Charcoal `#1F2937` |
| Muted Text | — | Slate Grey `#64748B` (timestamps, captions, secondary text) |

**How this changes the site:**
- Navbar and Footer become **navy** `#0F172A` instead of maroon
- Maroon is now used only for accents, CTA highlights, and sub-headers — not as the dominant color
- Gold becomes brighter and more visible `#F59E0B`
- Sections alternate between `#FFFFFF` and `#F8F9FA` — no more cream tones

---

## 2. Typography — REPLACE

| Role | Old | New |
|---|---|---|
| Headings | Playfair Display | **Outfit** (700, 800) — cleaner, more modern |
| Body | Inter | **Inter** — keep as is |
| Pull Quotes only | — | **Playfair Display italic** — now restricted to quote blocks and memory excerpts only |

Playfair Display should no longer be used for page titles, section headers, or navigation. Only for `<blockquote>` style memory excerpts and pull quote components.

---

## 3. Navbar — UPDATE

- **Background:** Change from solid maroon to **transparent** when at the top of the hero section
- **Transitions to solid navy** `#0F172A` once the user scrolls past 80px — smooth `transition-all duration-300`
- All nav link colors stay white, hover stays gold — no change there
- Logo subtitle font: switch from Playfair to **Outfit**
- Everything else in the navbar stays the same

---

## 4. Hero Section — UPDATE

- Remove the maroon-to-dark CSS gradient
- Replace with **solid navy** `#0F172A` base with a `rgba(15, 23, 42, 0.85)` overlay — cleaner, less heavy
- Eyebrow label above the main headline: add a new small line —
  `PANDIT MADAN MOHAN MALAVIYA HALL OF RESIDENCE · IIT KHARAGPUR`
  in `gold`, `uppercase`, `letter-spacing: 0.15em`, `font-size: 11px`
- H1 font: switch from Playfair Display to **Outfit Bold** — same size, same color (white)
- Subheadline and founded line: no change

---

## 5. Section Cards (Archive sections grid) — UPDATE

- Remove the maroon top border hover effect
- Replace with: on hover, card lifts slightly (`translateY -4px`) + shadow increases from `sm` to `md`
- Add a thin `1px solid #E5E7EB` border on all cards by default (very light grey) — gives definition on white backgrounds without looking heavy
- Button style inside cards: change from maroon text link to a small `Explore →` in navy with underline on hover

---

## 6. Stat Cards — UPDATE

- Number color: change from maroon to **navy** `#0F172A`
- Gold underline divider: keep as is
- Label text: change to slate grey `#64748B`
- Card background: pure white with `1px solid #E5E7EB` border — remove the shadow, border is enough

---

## 7. Pull Quote Section — UPDATE

- Background: change from cream `#F0E6D3` to soft off-white `#F8F9FA`
- Decorative quotation mark: change from maroon to **amber gold** `#F59E0B`
- Quote text font: this stays as Playfair Display italic (one of the few places it is kept)
- Quote text color: change from charcoal to navy `#0F172A`

---

## 8. Contribute CTA Section — UPDATE

- Background: keep maroon `#7F1D1D` — this is one of the few full-maroon sections and it works as a strong contrast block
- No other changes to this section

---

## 9. Footer — UPDATE

- Background: change from dark maroon `#2C0A0A` to **navy** `#0F172A`
- Top border of bottom bar: `1px solid rgba(255,255,255,0.1)` — subtle separator
- Link hover color: amber gold `#F59E0B`
- Everything else stays the same

---

## 10. Page Header Banners (inner pages) — UPDATE

- Background: change from maroon gradient to solid **navy** `#0F172A`
- Title font: change from Playfair Display to **Outfit Bold**
- Breadcrumb color: amber gold `#F59E0B`
- No other changes

---

## 11. Coming Soon Pages — UPDATE

- Coming Soon badge: change background from gold-on-maroon to `amber gold text on light amber background` — `background: #FEF3C7`, `color: #92400E`, `font: Outfit Bold uppercase letter-spaced`
- Placeholder grid boxes: change from grey to `#F3F4F6` with a centered icon in `#D1D5DB` — lighter, cleaner
- No maroon anywhere on Coming Soon pages

---

## 12. Buttons — UPDATE

Global button rules:

| Button Type | Old Style | New Style |
|---|---|---|
| Primary (solid) | Gold bg, maroon text | Gold `#F59E0B` bg, navy `#0F172A` text |
| Secondary (outline) | White border, white text | White border, white text — no change |
| Disabled / Coming Soon | Gold badge | Light amber bg `#FEF3C7`, amber-brown text `#92400E` |

Border radius: change from `6px` to `8px` across all buttons — slightly more rounded, feels more modern.

---

## 13. Alternating Section Backgrounds — ADD

This is a new rule not in the original prompt.

Every page must alternate section backgrounds:
- Odd sections: `#FFFFFF` (pure white)
- Even sections: `#F8F9FA` (soft off-white)

This creates visual rhythm without borders or dividers. Remove any explicit horizontal rule or border between sections — the background alternation does that job.

---

## 14. Card Shadows — UPDATE

- Default card shadow: `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` — very soft
- Hover card shadow: `box-shadow: 0 4px 12px rgba(0,0,0,0.12)` — noticeably deeper on hover
- Remove any heavy or colored shadows from the old design

---

## 15. General Typography Sizing — UPDATE

| Element | Old | New |
|---|---|---|
| H1 (hero) | Large Playfair | Outfit 700, same size |
| H2 (section titles) | Playfair | Outfit 700, `2rem` |
| H3 (card titles) | Playfair or Inter bold | Outfit 600, `1.1rem` |
| Body | Inter 16px | Inter 16px, `line-height: 1.7` (slightly more open) |
| Captions / meta | — | Inter 13px, slate grey `#64748B` |

---

*Changes document v2 — The Malaviyan Archive*
*Apply on top of existing Prompt v1. Do not regenerate from scratch.*
*MMM Hall Chronicles Initiative | IIT Kharagpur Platinum Jubilee 2026*
