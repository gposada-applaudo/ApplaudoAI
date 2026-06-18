---
name: Applaudo
description: Enterprise AI engineering consultancy built for serious buyers.
colors:
  applaudo-red: "#ff4040"
  applaudo-red-dark: "#a82222"
  press-ink: "#121212"
  blue-black: "#181d27"
  storm-gray: "#535862"
  clean-page: "#ffffff"
  cool-linen: "#f7f7f7"
typography:
  display:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(3.5rem, 6.6vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(2.125rem, 4vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "normal"
  feature:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif'
    fontSize: "clamp(2rem, 3.3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "normal"
  title:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: '"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  pill: "999px"
  surface: "32px"
  item: "22px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "22px"
  lg: "38px"
  xl: "54px"
components:
  button-primary:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.clean-page}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.clean-page}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
  button-glass:
    backgroundColor: "rgba(255,255,255,0.64)"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
    typography: "{typography.label}"
  button-glass-hover:
    backgroundColor: "rgba(255,255,255,0.82)"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "44px"
---

# Design System: Applaudo

## 1. Project at a Glance

**Stack:** Vanilla HTML, CSS, JavaScript. No framework, no build step, no npm. Open files in a browser.

**Entry points:**

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services |
| `industries.html` | Industries |
| `partnerships.html` | Partnerships index |
| `partnerships/aws/` | AWS partner detail |
| `partnerships/google-cloud/` | Google Cloud partner detail |
| `partnerships/microsoft/` | Microsoft partner detail |

**Shared files:**

| File | Purpose |
|---|---|
| `styles.css` | All styles; no separate stylesheets per page |
| `script.js` | All interactions; no separate scripts per page |
| `components/nav.html` | Navigation HTML, injected by script.js into `<div id="site-nav">` |

**External dependency:** RemixIcon 4.6 via CDN (`https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css`). No other external CSS or JS.

---

## 2. Creative Intent

**North Star: "The Glass Brief"**

Engineering precision delivered with transparent confidence. Every element earns its place the way words in a project spec do: nothing decorates, everything signals.

**The physical scene:** A VP of Engineering on a large monitor, mid-morning, evaluating whether to send an email or close the tab. Skepticism is high. The design should feel like opening a well-made pitch deck from someone you already half-respect and having that intuition confirmed.

**What success looks like:** The visitor finishes a scroll feeling that Applaudo understands their problem — not that Applaudo has a nice website.

**Three things this site explicitly is not:**
- AI hype marketing (floating orbs, neon grid textures, "The future of AI is here")
- Big 4 consulting (institutional navy, conservative serif headers, stock handshake photography)
- Agency portfolio (pastel gradients, colorful case grids, "We craft digital experiences")

---

## 3. Design Tokens

### CSS Custom Properties

All tokens are defined on `:root` in `styles.css`. Use these variables — never hardcode hex values in new CSS.

#### Colors

| Token | Value | Role |
|---|---|---|
| `--white` | `#ffffff` | Primary surface; page background |
| `--soft` | `#f7f7f7` | Alternating section background (Cool Linen) |
| `--black` | `#121212` | Default text color; Primary button fill (Press Ink) |
| `--ink` | `#181d27` | Dark surface contexts; nav `--ink` token (Blue-Black) |
| `--muted` | `#535862` | Supporting copy, eyebrows, meta labels (Storm Gray) |
| `--line` | `rgba(18,18,18,0.08)` | Borders, dividers; structural not decorative |
| `--red` | `#ff4040` | Single accent. Scroll bar + primary CTA glints only |
| `--red-dark` | `#a82222` | Hover target for red elements; never appears alone |

#### Typography Scale

| Token | Value | Use |
|---|---|---|
| `--text-label` | `0.8125rem` (13px) | Eyebrow kickers, chip labels, meta; letter-spacing 0.04em |
| `--text-ui` | `0.875rem` (14px) | Nav links, button labels |
| `--text-body-sm` | `1rem` (16px) | Compact body contexts |
| `--text-body` | `1.0625rem` (17px) | All body copy; default |
| `--text-title-sm` | `1.5rem` | Card headings, subcategory labels |
| `--text-feature` | `clamp(2rem, 3.3vw, 3rem)` | Pull-quotes, case study headlines |
| `--text-title-md` | `clamp(2.125rem, 4vw, 3.75rem)` | Section headings |
| `--text-title-lg` | `clamp(3.5rem, 6.6vw, 5.75rem)` | Hero display headlines only |

Font weight is always `--demi` (600) for headings and labels; `400` for body. Never introduce weight 500.

| Token | Value |
|---|---|
| `--demi` | `600` |

#### Geometry

| Token | Value | Use |
|---|---|---|
| `--radius` | `32px` | Glass cards, surface containers, mega-menu |
| `--radius-xl` | `32px` | Same as --radius; reserved for future override |
| `--shadow` | `0 28px 70px rgba(18,18,18,0.08), 0 8px 24px rgba(18,18,18,0.04)` | Ambient lift; glass cards at rest |
| `--glass` | `rgba(255,255,255,0.66)` | Glass fill shorthand |

#### JS-Driven Tokens (do not set these in CSS)

These are set exclusively by `script.js` at runtime. CSS uses them for reactive effects.

| Token | Set by | Use |
|---|---|---|
| `--mx` | `setPointerVars()` | Pointer X position as % of viewport (0–100%) |
| `--my` | `setPointerVars()` | Pointer Y position as % of viewport (0–100%) |
| `--shine-x` | `setPointerVars()` | Pointer X relative to the hovered element |
| `--shine-y` | `setPointerVars()` | Pointer Y relative to the hovered element |
| `--tilt-x` | `setPointerVars()` | Normalized pointer X for 3D tilt (−1 to +1) |
| `--tilt-y` | `setPointerVars()` | Normalized pointer Y for 3D tilt (−1 to +1) |
| `--scroll` | `updateScrollProgress()` | Scroll progress as % (0%–100%); drives `.site-progress` width |

---

## 4. Spacing & Layout

### Spacing Scale

| Name | Value | Use |
|---|---|---|
| xs | `8px` | Icon gaps, chip padding, tight inline spacing |
| sm | `16px` | Component internal gaps |
| md | `22px` | Card padding, nav gap, standard component spacing |
| lg | `38px` | Section internal padding |
| xl | `54px` | Section vertical spacing between major blocks |

### Responsive Breakpoints

| Name | Value | Behavior |
|---|---|---|
| mobile | `640px` | Single column; nav collapses to hamburger |
| tablet | `768px` | Two-column grids unlock |
| desktop | `1024px` | Full layout with mega-menu |
| wide | `1280px` | Maximum content width; site container caps here |

### Containers

- **Site container:** `min(1280px, calc(100% - 32px))` centered, 16px gutters on mobile
- **Mega-menu:** `min(1080px, calc(100vw - 32px))`, centered from nav bar
- **Body copy max-width:** `65ch`–`75ch` enforced by container constraint, never by `max-width` on the `<p>` itself

---

## 5. Colors

### Palette

| Name | Hex | CSS Token | Role |
|---|---|---|---|
| Applaudo Red | `#ff4040` | `--red` | Single accent. Scroll progress bar + CTA glint effects only. |
| Applaudo Red Dark | `#a82222` | `--red-dark` | Hover transition target for red elements only. |
| Press Ink | `#121212` | `--black` | Default text, Primary button fill. Nearly black, fractionally warm. Never `#000`. |
| Blue-Black | `#181d27` | `--ink` | Dark surface overlays, deep background contexts. |
| Storm Gray | `#535862` | `--muted` | Supporting copy, eyebrow kickers, meta labels. |
| Clean Page | `#ffffff` | `--white` | Primary page surface. The site lives on white. |
| Cool Linen | `#f7f7f7` | `--soft` | Alternating section background. Barely-perceptible off-white rhythm. |
| Divider Line | `rgba(18,18,18,0.08)` | `--line` | Borders, structural dividers. Structural, never decorative. |

### Color Rules

**The One Voice Rule.** Applaudo Red appears on one surface per viewport: the scroll bar or the primary CTA. If you're considering using red a second time, cut the first use instead.

**The Monochrome Field Rule.** Everything that isn't Applaudo Red is a neutral. Never introduce a secondary accent color.

---

## 6. Typography

**Single font family throughout:** `"Avenir Next", Avenir, "Helvetica Neue", Arial, sans-serif`

No decorative display face, no serif contrast, no monospace accent.

### Scale

| Level | Token | Size | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|---|
| Display | `--text-title-lg` | `clamp(3.5rem, 6.6vw, 5.75rem)` | 600 | 1 | normal | Hero h1 only. Max ~10 words. |
| Headline | `--text-title-md` | `clamp(2.125rem, 4vw, 3.75rem)` | 600 | 1.04 | normal | Section h2 headings. |
| Feature | `--text-feature` | `clamp(2rem, 3.3vw, 3rem)` | 600 | 1.04 | normal | Case study headlines, pull-quotes. |
| Title | `--text-title-sm` | `1.5rem` | 600 | 1.2 | normal | Card headings, subcategory labels. |
| Body | `--text-body` | `1.0625rem` | 400 | 1.5 | normal | All explanatory copy. |
| UI | `--text-ui` | `0.875rem` | 600 | 1 | normal | Nav links, button labels. |
| Label | `--text-label` | `0.8125rem` | 600 | 1 | 0.04em | Eyebrows, chip labels, meta. |

### Typography Rules

**The Weight Gap Rule.** Display and Headline are always 600. Body is always 400. Never introduce weight 500 — it collapses the hierarchy's primary signal.

**All-caps prohibition.** Labels carry letter-spacing but never `text-transform: uppercase`. Weight alone signals hierarchy.

---

## 7. Elevation

Depth is conveyed through material (glass translucency) rather than shadow weight. Shadows are ambient and diffuse — wide spread, very low opacity, barely visible at rest.

### Shadow Tokens

| Name | Value | Use |
|---|---|---|
| Ambient Lift (`--shadow`) | `0 28px 70px rgba(18,18,18,0.08), 0 8px 24px rgba(18,18,18,0.04)` | Glass cards, case thumbnails, floating containers at rest |
| Deep Hover | `0 34px 90px rgba(18,18,18,0.13)` | Card hover state. One step up from Ambient Lift. |
| Header Float | `0 18px 48px rgba(18,18,18,0.08)` | Fixed navigation bar. Tighter spread than Ambient Lift. |
| Button Hover Depth | `inset 0 1px 0 rgba(255,255,255,0.18), 0 14px 30px rgba(18,18,18,0.18)` | Primary button hover. Inset creates top-edge specular; drop adds lift. |

### Elevation Rules

**Flat-By-Default Rule.** Interactive elements have no shadow at rest. Shadow appears only on hover. Never add a drop shadow to a non-interactive element.

**Glass Prerequisite Rule.** `backdrop-filter: blur()` is only meaningful when content exists visually behind the blurred surface. On solid backgrounds the effect is invisible — omit it rather than keep it for appearance's sake.

---

## 8. Motion

All easing is ease-out. No bouncing, no elastic curves, no spring physics.

### Easing

| Name | Value | Use |
|---|---|---|
| Exit Ease | `cubic-bezier(0.22, 1, 0.36, 1)` | UI transitions, menu opens, card hovers, button lifts |
| State Ease | `ease` | Short color/opacity/background transitions |

### Durations

| Name | Value | Use |
|---|---|---|
| Fast | `160ms` | Color, border, background state changes |
| Standard | `220ms` | Card hover, menu item transitions |
| Button | `260ms` | Button transform and box-shadow |
| Reveal | `560ms` | Scroll-triggered entrance animations |

### Scroll-Reveal Pattern

Add class `.reveal` to any section or container. `script.js` attaches an `IntersectionObserver` that adds `.is-visible` when the element enters the viewport. Animate from this in CSS:

```css
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 560ms cubic-bezier(0.22,1,0.36,1), transform 560ms cubic-bezier(0.22,1,0.36,1); }
.reveal.is-visible { opacity: 1; transform: none; }
```

Once visible the observer disconnects — no re-triggering on scroll-up.

### Motion Rules

- Animate `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`.
- No bouncing or elastic easing. Exit ease only.
- Always respect `prefers-reduced-motion` — already handled globally in `script.js`.

---

## 9. Components

### 9.1 Navigation Bar

**Class:** `.site-header` | **Loaded from:** `components/nav.html` → injected into `<div id="site-nav">`

| Property | Value |
|---|---|
| Position | `fixed`, `top: 18px`, centered via `left: 50%; transform: translateX(-50%)` |
| Width | `min(1280px, calc(100% - 32px))` |
| Min-height | `68px` |
| Padding | `12px 14px 12px 24px` |
| Background | `rgba(255,255,255,0.72)` |
| Backdrop | `blur(22px) saturate(1.25)` |
| Border | `1px solid rgba(255,255,255,0.74)` |
| Border-radius | `999px` (pill) |
| Shadow | Header Float: `0 18px 48px rgba(18,18,18,0.08)` |
| Z-index | `50` |
| Grid | `auto 1fr auto` (logo / nav / CTA) |

**Nav link states:**

| State | Background | Color | Border |
|---|---|---|---|
| Rest | transparent | `rgba(18,18,18,0.72)` | none |
| Hover / Active | `rgba(18,18,18,0.04)` | `#121212` | inset `1px solid rgba(18,18,18,0.08)` |
| Focus-visible | `rgba(18,18,18,0.04)` | `#121212` | inset `1px solid rgba(18,18,18,0.14)` |

**Mega-menu:**
- Radius: `32px`, background: `rgba(255,255,255,0.64)`, backdrop: `blur(34px) saturate(1.3)`
- Max-width: `min(1080px, calc(100vw - 32px))`; never full-width
- Open: `opacity: 1; transform: translateX(-50%) translateY(0) scale(1)`
- Closed: `opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.985); pointer-events: none`
- Transition in: `opacity 180ms ease, transform 220ms cubic-bezier(0.22,1,0.36,1)`

**Mobile nav:** Collapses below `981px` (`desktopQuery` in script.js). Hamburger opens full-screen overlay. `body.menu-open` locks scroll.

---

### 9.2 Scroll Progress Bar

**Class:** `.site-progress`

```css
position: fixed; top: 0; left: 0; z-index: 80;
width: var(--scroll);   /* driven by JS */
height: 3px;
background: linear-gradient(90deg, var(--red), rgba(255,64,64,0.26));
transition: width 80ms linear;
```

The only place `--red` appears as a fill color. Width is `0%`–`100%` driven by `--scroll`.

---

### 9.3 Buttons

Two variants only. Both use pill radius. Both share the same interactive pseudo-element glint system.

#### Primary Button (`.button.button-red`)

| Property | Value |
|---|---|
| Background | `#121212` (Press Ink) |
| Text color | `#ffffff` |
| Border | `1px solid transparent` |
| Border-radius | `999px` |
| Padding | `0 22px` |
| Min-height | `44px` |
| Font | `0.875rem / 600` |
| Icon gap | `10px` |

| State | Transform | Shadow |
|---|---|---|
| Rest | none | none |
| Hover | `translateY(-1px)` | Button Hover Depth |
| Active | `translateY(0) scale(0.985)` | — |
| Focus-visible | none | `inset 0 0 0 1px rgba(255,255,255,0.3), 0 0 0 3px rgba(18,18,18,0.15)` |

#### Glass Button (`.button.button-glass`)

| Property | Value |
|---|---|
| Background | `rgba(255,255,255,0.64)` |
| Text color | `#121212` |
| Border | `1px solid #f7f7f7` |
| Border-radius | `999px` |
| Backdrop | `blur(20px) saturate(1.35)` |
| Inner shadow | `inset 0 0 0 1px rgba(255,255,255,0.58), inset 0 1px 0 rgba(255,255,255,0.7)` |
| Padding | `0 22px` |
| Min-height | `44px` |
| Font | `0.875rem / 600` |

| State | Transform | Background |
|---|---|---|
| Rest | none | `rgba(255,255,255,0.64)` |
| Hover | `translateY(-1px)` | `rgba(255,255,255,0.82)` |
| Active | `translateY(0) scale(0.985)` | — |

**Two-Button Rule.** Every primary CTA section pairs exactly one Primary button with one Glass button. Primary is the action; Glass is the deferral. Never two Primary buttons together.

**Glint effects:** Both buttons use `::before` / `::after` pseudo-elements driven by `--shine-x` / `--shine-y` for a cursor-following highlight. These are implemented in `styles.css` — preserve them when copying button HTML.

---

### 9.4 Glass Card (`.glass-card`)

The signature surface. Pointer-reactive red radial highlight, frosted glass, ambient shadow.

| Property | Value |
|---|---|
| Background | `linear-gradient(145deg, rgba(255,255,255,0.82), rgba(255,255,255,0.46))` |
| Border | `1px solid rgba(255,255,255,0.76)` |
| Border-radius | `32px` |
| Backdrop | `blur(24px) saturate(1.4)` |
| Shadow (rest) | Ambient Lift |
| Padding | `28px 32px` |

| State | Transform | Shadow |
|---|---|---|
| Rest | none | Ambient Lift |
| Hover | `translateY(-4px)` | Deep Hover |

The red radial highlight is applied via CSS using `--shine-x` / `--shine-y` and is set to ~8% Applaudo Red. `script.js` updates these on `mousemove` for every `.glass-card`.

---

### 9.5 Case Card (`.case-card`)

Editorial work showcase. No glass. Defined by a top rule and generous spacing.

| Property | Value |
|---|---|
| Top border | `1px solid rgba(18,18,18,0.12)` |
| Padding bottom | `28px` |
| No side borders | — |

**Visual container:** `32px` radius, Ambient Lift shadow.

| State | Transform | Shadow |
|---|---|---|
| Card hover (visual) | `translateY(-4px)` | Deep Hover |

**Grid layout:** Asymmetric 2-column `1.08fr / 0.72fr` with the feature case spanning two rows. Never a uniform grid.

---

### 9.6 Industry Tile (`.industry-tile`)

| Property | Value |
|---|---|
| Border-radius | `32px` |
| Background | Full-bleed image with dark gradient overlay |
| Layout | 4-column desktop grid, collapses responsively |

| State | Transform | Shadow |
|---|---|---|
| Rest | none | none |
| Hover | `translateY(-4px)` | Deep Hover |

---

### 9.7 Section Heading Pattern

Standard opener for every major section: eyebrow kicker → headline → optional subhead.

```html
<p class="eyebrow">Label text</p>
<h2>Section headline</h2>
<p class="hero-subhead">Supporting copy. Max 65–75ch.</p>
```

| Class | Size | Weight | Color |
|---|---|---|---|
| `.eyebrow` | `--text-label` | 600 | `--muted` |
| `h2` | `--text-title-md` | 600 | `--black` |
| `.hero-subhead` | `--text-body` | 400 | `--muted` |

---

## 10. JavaScript Interaction Model

All interactions live in `script.js` (380 lines). No external libraries.

### Pointer Tracking

`setPointerVars(event, target)` — called on every `mousemove`.

- On the `document`: updates `--mx`, `--my`, `--tilt-x`, `--tilt-y` on `:root`
- On interactive elements (see list below): updates `--shine-x`, `--shine-y` on the element itself

**Interactive elements** (receive per-element shine tracking):
`.button`, `.icon-button`, `.glass-card`, `.stats-row div`, `.case-card`, `.industry-stage`, `.industry-tile`, `.note-card`, `.note-feature`, `.note-row`, `.reason-visual`, `.service-pillar`, `.partner-status-item`, `.partner-stack-row`, `.partner-proof-card`, `.partner-lead-card`

To add shine tracking to a new component, add its selector to the `interactiveItems` query in `script.js:7–9`.

### Scroll Progress

`updateScrollProgress()` — called on `scroll` (passive). Sets `--scroll` on `:root` as a percentage string (`"42%"`). Used by `.site-progress` width.

### AI Stack Video Scrub

The `.ai-stack-video` element on the home page scrubs forward/backward based on pointer position over the section. Driven by `driveAiStackVideo()` via `requestAnimationFrame`. State lives in `aiStackVideoState`.

**Partner page videos** (`assets/video/AWS.mp4`, `Google.mp4`, `microsoft.mp4`) play on hover over their respective sections.

### Scroll Reveal

`IntersectionObserver` watches all `.reveal` elements. On intersection: adds `.is-visible`, then disconnects the observer for that element (one-time trigger). Threshold: `0.12` (12% visible triggers the animation).

```css
/* Implement per-section animations with: */
.reveal { /* initial hidden state */ }
.reveal.is-visible { /* visible state */ }
```

### Navigation

- Desktop (`min-width: 981px`): hover-triggered mega-menus with `is-hovered` / `is-open` classes
- Mobile: hamburger toggle adding `.menu-open` to `<body>`
- Mega-menu anchor positioning: `updateMenuAnchor()` aligns menus to their trigger within the nav bar bounds

---

## 11. Page Inventory

### Home (`index.html`)

| Section | Class | Notes |
|---|---|---|
| Progress bar | `.site-progress` | Fixed, z-index 80 |
| Navigation | `#site-nav` | Injected from `components/nav.html` |
| Hero | `.hero` | Display headline, two-button CTA, hero photo system with glass cards |
| AI Stack | `.ai-stack-section` | Video scrub on hover; full-width with copy overlay |
| Services overview | — | Service pillars / links |
| Case studies | — | Asymmetric case card grid |
| Client logos | — | Scrolling logo bar |
| Industries preview | — | Industry tiles grid |
| Partnerships | — | Partner badge row |
| Final CTA | — | Two-button CTA section |
| Footer | — | — |

### Services (`services.html`)

| Section | Notes |
|---|---|
| Hero | Video background (ServicesBanner.mp4), display headline |
| Three pillars | Strategy / Build / Operate, interactive expand (`.service-pillar`) |
| Eight services directory | 8-item grid with hover background images |
| Proof section | Outcome stats + case cards |
| Final CTA | — |

### Industries (`industries.html`)

| Section | Notes |
|---|---|
| Hero | IndustriesHero.jpg background |
| Industry stage cards | Interactive carousel-style with client logos |
| Industry tiles grid | 4-column, hover lift |
| Final CTA | — |

### Partnerships (`partnerships.html`)

| Section | Notes |
|---|---|
| Hero | PartnersHero.jpg |
| Partner overview cards | AWS, Google Cloud, Microsoft |
| Partner detail links | Leads to sub-pages |

### Partner detail pages (`partnerships/aws/`, `/google-cloud/`, `/microsoft/`)

Each has its own video (`assets/video/AWS.mp4`, `Google.mp4`, `microsoft.mp4`) and partner-specific content. Shares `styles.css` and `script.js` via relative path.

---

## 12. Asset Map

```
assets/
  brand/
    applaudo.svg              Logo (used in nav, footer)
  clients/
    *.svg                     Client logos for logo bar (14 clients)
    Industries Cards/
      *.svg                   Client logos for industry tile overlays
  effects/
    button-glass-dark.png     Glint overlay for dark glass buttons
    button-glass-light.png    Glint overlay for light glass buttons
    glass-1.jpeg              Glass texture reference
  partners/
    AWS.svg                   AWS wordmark
    Google Cloud.svg          Google Cloud wordmark
    Microsoft.svg             Microsoft wordmark
    aws-partner.svg           AWS partner badge
    google-cloud-partner.svg  GCP partner badge
    microsoft-partner.svg     Microsoft partner badge
    google-cloud-cosell.svg   GCP co-sell badge
    google-cloud-services.svg GCP services badge
    salesforce-partner.svg    Salesforce badge
    fortinet-partner.svg      Fortinet badge
    mandiant-partner.svg      Mandiant badge
  photos/
    HeroImage.png             Home hero photo
    IndustriesHero.jpg        Industries page hero
    PartnersHero.jpg          Partnerships page hero
    ai-stack.jpg              AI stack section image
    DifferentPartner.png      Partnership differentiator section
    qupte.png                 Quote/testimonial photo
  stack/
    anthropic-logo.svg        AI model partner logo
    google-gemini-logo.svg
    microsoft-copilot-logo.svg
    openai-logo.svg
  ui/
    ai-spark.svg              Decorative spark icon used in chip components
  video/
    Glass_forward.mp4         AI stack section (scrubs forward with pointer)
    Glass_backward.mp4        AI stack section (scrubs backward, reserved)
    ServicesBanner.mp4        Services hero background video
    AWS.mp4                   AWS partner section video
    Google.mp4                Google Cloud partner section video
    microsoft.mp4             Microsoft partner section video
```

---

## 13. Named Design Rules

These rules must not be broken without explicit design approval. They are not preferences — they are the load-bearing constraints that make the system coherent.

| Rule | Constraint |
|---|---|
| **The One Voice Rule** | Applaudo Red appears on one surface per viewport: the scroll bar or the CTA glint. If you're adding red a second time, cut the first use instead. |
| **The Monochrome Field Rule** | Everything that isn't Applaudo Red is a neutral. Never introduce a secondary accent color. |
| **The Weight Gap Rule** | Headings: 600. Body: 400. Never introduce weight 500 — it collapses the hierarchy's primary signal. |
| **The Single Family Rule** | Avenir Next at every level. No secondary typeface anywhere. |
| **The Flat-By-Default Rule** | Interactive elements have no shadow at rest. Shadow appears only on hover. Never drop-shadow a non-interactive element. |
| **The Glass Prerequisite Rule** | `backdrop-filter: blur()` is only meaningful when content exists behind the surface. On solid backgrounds, omit it. |
| **The Two-Button Rule** | Every CTA section pairs exactly one Primary button with one Glass button. Never two Primary buttons. Never a solo Primary button. |
| **The Asymmetric Grid Rule** | Case study and work grids must be asymmetric. Feature item spans two rows. Never identical-size card grids. |

---

## 14. Do's and Don'ts

### Do

- Use `--red` on one element per viewport: the scroll bar or the CTA.
- Use pill radius (`999px`) for all buttons and nav elements. Use surface radius (`32px`) for cards and containers.
- Maintain the weight gap: headings 600, body 400.
- Pair every Primary button with exactly one Glass button.
- Keep shadows ambient: wide spread, low opacity, barely visible at rest.
- Use `backdrop-filter` only when content exists behind the surface.
- Keep case/work grids asymmetric — feature item must be larger.
- Animate `transform` and `opacity` only.
- Use `cubic-bezier(0.22, 1, 0.36, 1)` for entrance transitions; `ease` for short state changes.
- Keep body copy to 65–75ch max.
- Trigger scroll reveals at `0.12` threshold and disconnect the observer after firing.

### Don't

- Don't use neon grids, glowing orbs, particle effects, or spectacle motion.
- Don't use institutional navy, conservative serif headers, or stock handshake photography.
- Don't use gradient text (`background-clip: text`). Emphasis via weight and scale only.
- Don't use a colored `border-left` / `border-right` stripe as decoration on cards or callouts.
- Don't use identical-size card grids. Repetition without variation reads as template work.
- Don't introduce a modal as a first-choice interaction pattern.
- Don't use `--red` as a section background, text color, or decorative fill.
- Don't bounce or use elastic easing.
- Don't add a second accent color. The monochrome field is what makes `--red` work.
- Don't hardcode hex values in new CSS — use the CSS custom properties from Section 3.
- Don't add external JS libraries without discussing it. The site is intentionally dependency-free.

---

## 15. CSS Architecture

`styles.css` is a single file, 5027 lines. No preprocessor, no modules. Find sections by line number.

| Lines | Section | Key classes / selectors |
|---|---|---|
| 1–32 | **Custom Properties** | `:root` — all color, type, geometry, and JS-driven tokens |
| 33–77 | **Global Reset & Base** | `*`, `body`, `a`, `img`, `.site-progress` |
| 79–412 | **Navigation** | `.site-header`, `.main-nav`, `.nav-trigger`, `.mega-menu`, `.industries-menu`, `.services-list-menu`, `.compact-menu` |
| 414–551 | **Hero Section** | `.hero`, `.hero-inner`, `.hero-copy`, `.hero-photo-system`, `.hero-photo-card`, `.hero-glass-accent` |
| 553–706 | **AI Stack Section** | `.ai-stack-section`, `.ai-stack-video`, `.ai-spark-chip` |
| 707–831 | **Global Type & Value Prop** | `.eyebrow`, `.tagline`, `.section-kicker`, `h1`, `h2`, `h3`, `p` global defaults |
| 833–974 | **Button Base + Glint System** | `.button`, `.icon-button`, `::before` / `::after` pseudo-element glint effects |
| 975–1099 | **Button Variants** | `.button-red`, `.button-glass`, `.button-sm`, `.button-row` |
| 1100–1186 | **Stats Section** | `.focus-layout`, `.stats-intro`, `.stats-row` |
| 1187–1246 | **Logo Cloud / Trust** | `.trust-section`, client logo grids |
| 1248–1468 | **Reason Cards** | `.reason-visual`, comparison card layouts |
| 1469–1619 | **Case Studies** | `.glass-card`, `.case-grid`, `.case-card`, `.case-card-feature`, `.case-visual`, `.visual-*` background helpers |
| 1620–1841 | **Industries Section** | `.industry-stage`, `.industry-board`, switcher logic, `.industry-board-copy` |
| 1843–1919 | **Industry Tiles** | `.industry-tile-grid`, `.industry-tile` |
| 1921–2000 | **Engagement & Notes** | `.engagement-card`, `.note-card`, `.notes-grid`, `.author` |
| 2001–2083 | **Notes Layout** | `.note-feature`, `.note-row` |
| 2086–2136 | **Final CTA** | `.final-cta`, `.services-final-cta`, `.partner-final-cta` — glass texture background |
| 2137–2258 | **Services Hero** | `.services-hero`, `.services-hero-video`, `.services-hero-grid`, `.services-hero-copy` |
| 2259–2481 | **Services Pillars** | `.services-position`, `.services-pillars`, `.service-pillar`, `.pillar-strategy/build/operate` |
| 2483–2596 | **Services Directory** | `.services-directory`, hover-reveal background image system |
| 2598–2747 | **Services Proof** | `.services-proof-section`, `.services-proof-layout`, `.partner-proof-card` |
| 2749–3152 | **Partner Pages** | `.partner-hero`, `.partner-status-item`, `.partner-stack-row`, `.partner-stack-copy` |
| 3153–3245 | **Partner Co-sell & Lead Cards** | `.partner-lead-card`, `.partner-cosell-copy`, AWS orange theming (`--aws-orange`) |
| 3247–3427 | **Footer** | `.site-footer`, footer columns, partner badges, social links, recognition row |
| 3430–3488 | **Reveal Animations** | `@keyframes`, `.reveal`, `.is-visible`, `prefers-reduced-motion` query |
| 3490–3915 | **Tablet — max-width: 980px** | Nav collapses, grid reflows to single column, hamburger menu, sticky positioning removed |
| 3916–4255 | **Mobile — max-width: 640px** | Section padding reductions, font size adjustments, single-column grids throughout |
| 4257–4262 | **Wide — min-width: 981px** | Minor `h1` line-height refinement |
| 4263–4526 | **Partnerships Page** | `.partnerships-hero`, partner card grid, proof bar, recognition layout |
| 4527–4569 | **Partnerships Responsive** | Tablet adjustments for partnerships page |
| 4571–5010 | **Industries Page** | `.industries-hero`, industry argument section, bento grid, primary/secondary industry panels, pullquote |
| 5012–5027 | **Industries Responsive** | Mobile single-column, reveal state overrides |

### Navigation tips

- All media queries are at the bottom (lines 3490+) — desktop styles come first throughout.
- Page-specific styles (Services, Partnerships, Industries) start at lines 2137, 4263, 4571 respectively.
- The button glint system (lines 868–974) is the most complex CSS in the file — read it carefully before touching button styles.
- Partner page AWS orange theming uses separate `--aws-*` tokens defined on `:root` (lines 10–13).

---

## 16. Component Gallery

Open [kitchensink.html](kitchensink.html) in a browser to see every component rendered live with hover effects, glint interactions, and exact class names labeled. Use it as the primary reference when building new sections.
