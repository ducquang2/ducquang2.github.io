---
name: ducquang2
description: Duc Quang's personal site, printed as a wax pack trading card and the numbered set it belongs to.
colors:
  ground: "#c8cbbd"
  ground-deep: "#b9bdad"
  text: "#151515"
  text-soft: "#353a33"
  link: "#17532f"
  heading: "#12381f"
  rule: "#12381f"
  rule-accent: "#b3242b"
  red-text: "#9a1c22"
  ground-dark: "#1a1c19"
  ground-deep-dark: "#121411"
  text-dark: "#ece8de"
  text-soft-dark: "#b5b8ab"
  link-dark: "#8fd0a5"
  heading-dark: "#ece8de"
  rule-dark: "#515a50"
  rule-accent-dark: "#d4545a"
  red-text-dark: "#e0666b"
  print-team: "#1f6b3f"
  print-deep: "#12381f"
  print-red: "#b3242b"
  print-white: "#f7f5f0"
  print-stock: "#dcd7ca"
  print-ink: "#151515"
  print-gold: "#c9962a"
typography:
  display:
    fontFamily: "Rokkitt, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(3.5rem, 8.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Rokkitt, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Rokkitt, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.6rem)"
    fontWeight: 900
    lineHeight: 1.05
  body:
    fontFamily: "Be Vietnam Pro, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Rokkitt, Rockwell, Roboto Slab, Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.08em"
  stat:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
rounded:
  code: "4px"
  plate: "6px"
  pre: "8px"
  sleeve: "10px"
  card: "4.5cqi"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  wrap: "1180px"
  section: "clamp(56px, 8vw, 96px)"
  row: "22px"
  stack: "28px"
components:
  button-primary:
    backgroundColor: "{colors.print-deep}"
    textColor: "{colors.print-white}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "10px 20px 9px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.print-team}"
  button-primary-dark:
    backgroundColor: "{colors.print-red}"
    textColor: "{colors.print-white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.heading}"
    rounded: "{rounded.plate}"
    padding: "10px 20px 9px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.heading}"
    textColor: "{colors.ground}"
  language-plate:
    textColor: "{colors.heading}"
    rounded: "{rounded.plate}"
    padding: "8px 10px 7px"
  language-plate-on:
    backgroundColor: "{colors.heading}"
    textColor: "{colors.ground}"
  ticket:
    textColor: "{colors.text-soft}"
    typography: "{typography.label}"
  player-card-front:
    backgroundColor: "{colors.print-team}"
    rounded: "{rounded.card}"
    width: "min(440px, 86vw)"
  player-card-back:
    backgroundColor: "{colors.print-stock}"
    textColor: "{colors.print-ink}"
    typography: "{typography.stat}"
    rounded: "{rounded.card}"
  contact-band:
    backgroundColor: "{colors.print-deep}"
    textColor: "{colors.print-white}"
    padding: "clamp(56px, 8vw, 96px) 0"
---

# Design System: ducquang2

## Overview

**Creative North Star: "The Wax Pack Card"**

The visitor is handed a trading card. Duc is the card: a portrait front with a slab-caps name bar and a position disc, a stat back with his real seasons in ruled monospace, and around it the numbered set it belongs to (projects, Now, posts as checklist entries). Everything on the page is either the card stock it sits on or ink printed in the card set's team colours: forest green, deep forest, cardinal red, black stat ink, and one strip of gold foil.

The page ground is green-grey card stock, never cream, and at night it becomes green charcoal. The printed cards are physical objects: their colours do not change between schemes. Density is set-checklist density: big slab caps, generous rules, numbered rows, short ruled tables. Structure comes from rules and seams, not boxes.

Motion belongs to the card alone: the 3D flip, plus a gentle pointer tilt (max 6deg, with a faint soft-light glare) on hover-capable fine pointers. The header also slides away on scroll down and back on scroll up (320ms ease-out, always shown at the top and on keyboard focus). Nothing else animates beyond 160ms colour changes on buttons; reduced motion disables the tilt and swaps the faces instantly.

**Key Characteristics:**
- Green-grey card-stock ground (light) and green-charcoal ground (dark); printed objects stay identical across schemes.
- Rokkitt slab caps for names, headings, labels and buttons; Be Vietnam Pro for reading; JetBrains Mono only for stats, code and data.
- Deep-forest-over-red double rule ("seam") under every section heading.
- Numbered tickets (No., year, language, stack) as the metadata voice.
- One gold element per site: the foil series stamp on the card front.
- Card-led motion: the flip and a gentle hover tilt; the header only slides in and out with scroll direction.

## Colors

A printed Forest & Cardinal team palette (forest green, deep forest, red, black ink, one gold) on a green-tinted card-stock ground that swaps between green-grey and green-charcoal.

### Primary
- **Deep Forest** (print-deep / heading / rule): headings, the header's top border, primary buttons in light scheme, the contact band, the portrait border and position disc. In dark scheme the heading and rule roles move to warm paper and graphite, but the printed deep forest stays on the card and contact band.
- **Forest Green** (print-team): the card front's team border, primary button hover, text selection background.
- **Forest Link** (link, dark: link-dark **Night Link Green**): link colour; a darker forest (light) and a pale green (dark) than the print green, for text contrast.

### Secondary
- **Cardinal Red** (print-red / rule-accent): the card's name band, the red half of the seam, list markers, nav and title underline accents, the focus ring, the contact band's top border, and the primary button fill in dark scheme. It is a fill and rule colour, not a small-text colour.
- **Red Text** (red-text, dark: red-text-dark): the only red allowed for small text: ticket numbers, checklist numbers, project stack lines. It is darkened (light) and lightened (dark) from the print red for contrast.

### Tertiary
- **Rookie Foil Gold** (print-gold): the diagonal series stamp on the card front's top corner. Nowhere else.

### Neutral
- **Green-Grey Stock** (ground) and **Stock Shadow** (ground-deep): page ground; ground-deep for inline code, plate hover and scrollbar track.
- **Green-Charcoal** (ground-dark, ground-deep-dark): the dark scheme ground and its deeper well.
- **Press Black** (text / print-ink) and **Worn Ink** (text-soft): body text and secondary text (tickets, ledes, meta, footer). Dark scheme uses **Warm Paper** (text-dark) and **Faded Paper** (text-soft-dark).
- **Card White** (print-white): card front frame, text on deep forest and red, code block ground in light scheme.
- **Back Stock** (print-stock): the card back's stock.
- **Graphite Rule** (rule-dark): rules and dividers in dark scheme.

### Named Rules
**The One Foil Rule.** Gold appears exactly once on the site, on the flat foil series stamp. A second gold element is a counterfeit.

**The Printed Object Rule.** Anything that is a printed card (card faces, contact band) uses the print-* colours and does not change with the colour scheme. Only the ground, text, link, heading and rule roles swap.

**The Red Ink Rule.** Small red text uses red-text only. rule-accent and print-red are for rules, markers, fills and focus rings.

## Typography

**Display Font:** Rokkitt (with Rockwell, Roboto Slab, Georgia)
**Body Font:** Be Vietnam Pro (with system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Menlo)

**Character:** Heavy slab caps, as on a card's name bar and set checklist, carry every name, heading, label and button; a clean Vietnamese-capable sans does the reading; a monospace prints the stat tables.

### Hierarchy
- **Display** (900, clamp(3.5rem, 8.4vw, 6rem), 0.9): the hero name and page titles (Blog and Now titles run 0.85 line-height, uppercase).
- **Headline** (800, clamp(2rem, 4.2vw, 3.25rem), 1, uppercase): section headings sitting on the seam; post titles run 800 at clamp(2.5rem, 6vw, 4.5rem).
- **Title** (800 to 900, clamp(1.5rem, 3.4vw, 2.6rem)): project names (uppercase) and checklist entry titles.
- **Body** (400, 1.0625rem, 1.7): reading text, capped at 60 to 62ch; post prose at 1.125rem/1.75 and 68ch; ledes at 1.25rem/1.55.
- **Label** (700 to 800, 0.95 to 1.125rem, 0.06 to 0.08em, uppercase): tickets, nav, footer, buttons, section-head links, meta.
- **Stat** (400/700 mono, tabular figures): card back tables, post tables, code.

### Named Rules
**The Stat Ink Rule.** Monospace is only for stat tables, code and data. Never for labels, metadata or decoration.

**The Heading Stands Alone Rule.** Headings carry no eyebrow or kicker above them. Metadata goes below the heading as a ticket.

## Layout

Single centred column with a 1180px wrap and a fluid gutter (clamp(16px, 4vw, 40px)). Sections open with clamp(56px, 8vw, 96px) of top padding, a heading row (heading left, optional slab-caps link right), and a seam. Content inside sections uses asymmetric two-column grids (1.5fr / 1fr for About, 1.6fr / 1fr for Writing and Now), and project and checklist rows use three-track grids (name, description and stack, links) separated by 1px rules. The hero is a two-column split: card left, set label right, about 70% of viewport height.

At 880px the hero and split grids collapse to one column with the card centred; at 640px checklist rows drop meta under the title; at 480px nav type tightens. Body measure stays at 60 to 68ch throughout.

**The Ruled Set Rule.** Lists of things (projects, posts) are ruled rows in a checklist, never a grid of boxed cards. The only card on the site is the player card.

## Elevation & Depth

Flat by default. The page uses rules and seams for structure, with no surface shadows. The one exception is the player card, which is a physical object lifted off the stock: a soft two-layer cast shadow and a slight -2.5deg rotation, plus a hairline shadow under the foil stamp so it reads as applied to the card.

### Shadow Vocabulary
- **Card cast** (`box-shadow: 0 2px 3px rgb(10 22 14 / 0.18), 0 22px 44px -14px rgb(10 22 14 / 0.5)`): player card faces only.
- **Foil seat** (`box-shadow: 0 1px 3px rgb(10 22 14 / 0.35)`): the foil stamp only.
- **Plate keyline** (`box-shadow: inset 0 0 0 2px var(--print-white)`): an inner printed keyline on the primary button, not a depth cue.

### Named Rules
**The Only Object Rule.** Only the player card casts a shadow. Everything else is ink on stock.

## Shapes

Gentle printed-plate corners: 6px on buttons and the language plate, 8px on code blocks, 10px on the dashed empty-state sleeve, 4px on inline code. The card uses container-relative radii (4.5cqi outer, 2cqi inner frame) and a 5:7 portrait ratio. The position disc is the one circle, ringed white then deep forest. Borders are 2px on interactive plates, 1px for row rules, 3px+1px for the seam, 8px deep forest on the header's top edge.

## Components

### Buttons
Printed plates with an inner keyline.
- **Shape:** 6px corners, 2px deep-forest border, 48px minimum height.
- **Primary:** deep-forest fill, card-white slab caps (800, 1.125rem, 0.06em), with an inset 2px white keyline. In dark scheme the fill and border become print red.
- **Hover / Focus:** primary hover goes to forest green (dark: a lighter red); colour transitions at 160ms. Focus is a 3px rule-accent outline offset 3px.
- **Secondary:** transparent with a heading-colour border and text; hover inverts to a heading fill with ground text. Icons are inline 18px SVG in currentColor.

### Language Plate
A two-cell EN/VI plate: a 2px heading-colour border, 6px corners, slab caps. The active cell is filled with heading colour; the inactive cell is a link with a ground-deep hover; a missing translation dims to 0.45 opacity.

### Navigation
Header with an 8px deep-forest top border and a 72px row: lowercase wordmark (Rokkitt 900, 1.75rem) on the left; uppercase slab-caps links (700, 1.125rem, 0.08em) and the language plate on the right. Hover and current page get a 3px rule-accent underline offset 8px. Footer: a 2px rule above, label type in text-soft.

### Ticket
The set's metadata voice: a wrapping row of uppercase slab-caps items (700, 0.95rem, 0.08em) in text-soft, with the card number in red-text. Used under the hero name, post titles, the Now title and Now entries.

### Seam
A 6px rule: 3px of heading/rule colour over 1px of rule-accent. It closes every section heading row and the header.

### Checklist Row
Posts as numbered set entries: a 4.5rem number column (Rokkitt 900, 1.75rem, red-text, tabular), the title (800) with description, and right-aligned meta (date, languages in link colour). 1px rule below each row. The empty state is a dashed 2px sleeve with 10px corners.

### Player Card (signature)
A 5:7 portrait trading card, rotated -2.5deg, sized to min(440px, 86vw, 70svh scaled).
- **Front:** forest-green border, card-white frame, deep-forest-bordered portrait, red name band with the name in Rokkitt 900 caps and a city teamline, the deep-forest SWE disc overlapping the band, and the gold foil series stamp across the top-left corner.
- **Back:** back-stock face with a black ink keyline frame, a black header strip (number, name, position), a bio list, and a ruled monospace seasons table with a bold current row, a red RC rookie mark, and a career footer row.
- **Behaviour:** clicking the card or the Flip button rotates it 180deg on Y over 900ms with ease-out (cubic-bezier(0.16, 1, 0.3, 1)); the hidden face is inert. Reduced motion swaps instantly. Without JS both faces stack and the card is unrotated. On hover (fine pointer only) the card tilts toward the pointer up to 6deg on X/Y (140ms follow, 700ms ease-out return) with a soft-light glare at the pointer.

### Contact Band
A full-bleed print-deep band with a 6px print-red top border, a white headline, and the email address in Rokkitt 900 at up to 4.5rem with a thick light-red underline.

## Do's and Don'ts

### Do:
- **Do** sit every section heading on the seam (deep forest 3px over red 1px).
- **Do** keep print-* colours fixed across schemes; only ground, text, link, heading and rule tokens swap.
- **Do** use red-text for any red text under headline size, and rule-accent for markers, underlines and focus rings.
- **Do** set metadata as a ticket below the heading, in uppercase Rokkitt with 0.08em tracking.
- **Do** present collections as numbered, ruled checklist rows.
- **Do** use only real data on the card back (years, teams, roles, stack); never invented numbers.

### Don't:
- **Don't** use gold anywhere except the card's foil series stamp.
- **Don't** add motion beyond the card's flip and hover tilt, the header's scroll slide, and 160ms colour transitions.
- **Don't** put an eyebrow or kicker above a heading.
- **Don't** use JetBrains Mono for labels, nav or metadata; it is for stat tables, code and data.
- **Don't** use a cream or warm off-white page ground; the stock is green-grey, and green charcoal at night.
- **Don't** give anything other than the player card a shadow or a boxed card treatment.
