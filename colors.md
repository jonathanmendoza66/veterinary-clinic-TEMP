# Verdant Paws — Design Tokens Reference

This document describes the colour palette and font system used across the Verdant Paws website.

---

## Colour System Overview

The site uses the **OKLCH** colour format (a perceptually uniform colour space), defined as CSS custom properties. All colours automatically switch between a **light mode** and a **dark mode** variant depending on the user's theme preference.

In plain terms: every colour listed below has two versions — one that looks good on a light background and one that looks good on a dark background. The site switches between them seamlessly.

---

## Core Palette

### Primary — Deep Forest Green

The brand's signature colour. Used for buttons, links, key headings, and interactive elements.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--primary` | `oklch(0.36 0.07 158)` | `oklch(0.78 0.10 158)` | **Light:** A deep, rich forest green. **Dark:** A lighter, glowing green that pops against dark backgrounds. |
| `--primary-foreground` | `oklch(0.985 0.012 95)` | `oklch(0.18 0.04 158)` | Text colour placed on top of primary — near-white in light mode, very dark green in dark mode. |

### Background & Foreground — Page Foundation

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--background` | `oklch(0.985 0.012 95)` | `oklch(0.16 0.02 158)` | **Light:** Warm off-white with a faint creamy tint. **Dark:** Very dark green-black, almost like a deep forest at night. |
| `--foreground` | `oklch(0.18 0.03 150)` | `oklch(0.97 0.012 95)` | **Light:** Near-black text with a touch of green undertone. **Dark:** Warm near-white text. |

### Card — Elevated Surfaces

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--card` | `oklch(1 0 0)` | `oklch(0.21 0.03 158)` | **Light:** Pure white card surfaces. **Dark:** A slightly lighter dark green surface (sits above the background). |
| `--card-foreground` | `oklch(0.18 0.03 150)` | `oklch(0.97 0.012 95)` | Text on cards — same as the main foreground. |

### Secondary — Muted Warm

Used for secondary buttons, tags, and soft highlights.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--secondary` | `oklch(0.93 0.04 95)` | `oklch(0.27 0.04 158)` | **Light:** Soft warm beige. **Dark:** Dark muted green. |
| `--secondary-foreground` | `oklch(0.28 0.06 158)` | `oklch(0.97 0.012 95)` | **Light:** Dark green text on beige. **Dark:** Near-white text. |

### Muted — Subtle Content

Used for helper text, disabled states, and subtle backgrounds.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--muted` | `oklch(0.95 0.02 110)` | `oklch(0.25 0.03 158)` | **Light:** Very pale warm grey. **Dark:** Dark grey with green undertone. |
| `--muted-foreground` | `oklch(0.45 0.03 150)` | `oklch(0.72 0.02 95)` | **Light:** Medium grey-green (subdued text). **Dark:** Light grey (readable but not prominent). |

### Accent — Golden Highlight

Used sparingly for highlights, active states, and attention areas.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--accent` | `oklch(0.86 0.09 95)` | `oklch(0.32 0.06 95)` | **Light:** Soft gold/honey. **Dark:** Dark amber-brown. |
| `--accent-foreground` | `oklch(0.28 0.06 158)` | `oklch(0.97 0.012 95)` | Text on accent — dark green in light, near-white in dark. |

### Destructive — Alert Red

Used for error states, delete actions, and critical warnings.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--destructive` | `oklch(0.55 0.22 27)` | `oklch(0.70 0.19 22)` | **Light:** Deep tomato red. **Dark:** Softer coral-red that reads well on dark surfaces. |
| `--destructive-foreground` | `oklch(0.985 0 0)` | `oklch(0.97 0 0)` | White text on destructive backgrounds. |

---

## Brand Accent Colours

These are unique to Verdant Paws and give the brand its personality beyond the standard system palette.

### Leaf — Vibrant Green

The "signature" accent green, used for badges, icons, CTA highlights, and the WhatsApp button glow.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--leaf` | `oklch(0.55 0.12 158)` | `oklch(0.72 0.12 158)` | **Light:** A medium-bright, saturated green (think fresh leaves). **Dark:** A brighter, more luminous green. |
| `--leaf-foreground` | `oklch(0.985 0.012 95)` | `oklch(0.18 0.04 158)` | Text on leaf backgrounds — white in light, dark green in dark. |

### Coral — Warm Peach-Orange

Used for sale tags, urgent badges, and warm call-to-action moments.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--coral` | `oklch(0.74 0.16 35)` | `oklch(0.78 0.16 35)` | A warm coral/peach-orange — friendly and inviting. Slightly brighter in dark mode. |
| `--coral-foreground` | `oklch(0.18 0.03 150)` | `oklch(0.18 0.04 158)` | Dark text on coral — near-black in both modes. |

### Sand — Warm Neutral

Used for subtle section backgrounds and soft dividers.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--sand` | `oklch(0.93 0.04 80)` | `oklch(0.32 0.04 80)` | **Light:** Pale sandy beige. **Dark:** Deep warm brown. |
| `--sand-foreground` | `oklch(0.28 0.06 158)` | `oklch(0.97 0.012 95)` | Text on sand — dark green in light, near-white in dark. |

---

## Utility Colours

### Borders & Inputs

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--border` | `oklch(0.88 0.02 110)` | `oklch(1 0 0 / 12%)` | **Light:** Soft warm grey line. **Dark:** White at 12% opacity (subtle, transparent edge). |
| `--input` | `oklch(0.92 0.02 110)` | `oklch(1 0 0 / 16%)` | Input field borders — slightly more visible than general borders. |
| `--ring` | `oklch(0.55 0.07 158)` | `oklch(0.65 0.10 158)` | Focus ring outline — green-tinted, visible for accessibility. |

### Chart Colours

Used in any data visualizations or progress indicators.

| Token | Light Mode | Dark Mode | Layman Description |
|-------|-----------|-----------|-------------------|
| `--chart-1` | `oklch(0.55 0.10 158)` | `oklch(0.72 0.12 158)` | Green (matches brand) |
| `--chart-2` | `oklch(0.72 0.10 95)` | `oklch(0.80 0.12 95)` | Gold/amber |
| `--chart-3` | `oklch(0.65 0.14 30)` | `oklch(0.74 0.16 35)` | Coral/orange |
| `--chart-4` | `oklch(0.50 0.08 230)` | `oklch(0.62 0.16 230)` | Blue |
| `--chart-5` | `oklch(0.40 0.05 320)` | `oklch(0.62 0.16 320)` | Purple |

---

## Design Radius

| Token | Value | Layman Description |
|-------|-------|-------------------|
| `--radius` | `1rem` (16px) | The base corner rounding. Cards, buttons, inputs all derive from this. The site has a soft, rounded feel — never sharp corners. |
| `--radius-sm` | `0.75rem` (12px) | Smaller elements like badges. |
| `--radius-md` | `0.875rem` (14px) | Medium elements. |
| `--radius-lg` | `1rem` (16px) | Same as base — cards, dialogs. |
| `--radius-xl` | `1.25rem` (20px) | Large containers, hero sections. |

---

## Meta Theme Colour

The browser toolbar (on mobile) uses `#1f3d2e` — a very dark forest green that matches the dark mode background.

---

---

# Font System

## Overview

The site uses three font families loaded from Google Fonts:

| Role | Font Name | Style | Weights Available |
|------|-----------|-------|-------------------|
| **Body / UI** | Inter | Sans-serif | 300 (Light) to 800 (Extra Bold) |
| **Display / Headings** | Fraunces | Serif (variable optical size) | 300 (Light) to 800 (Extra Bold) |
| **Hindi Script** | Noto Sans Devanagari | Sans-serif | 300 (Light) to 800 (Extra Bold) |

## Font Stacks

### Body text (`--font-sans`)
```
"Inter", "Noto Sans Devanagari", ui-sans-serif, system-ui, sans-serif
```
In layman terms: the site uses **Inter** for all regular text — menus, paragraphs, labels, prices, descriptions. It falls back to Noto Sans Devanagari for Hindi characters, then the device's default sans-serif font.

### Display / Headings (`--font-display`)
```
"Fraunces", "Noto Sans Devanagari", ui-serif, Georgia, serif
```
In layman terms: **Fraunces** is the elegant, slightly quirky serif font used for section titles, hero headings, and any text marked with the `.font-display` class. It has variable optical sizing (larger text looks more refined, smaller text stays readable). Falls back to Noto Sans Devanagari for Hindi, then Georgia/serif.

## Usage in the Site

| Element | Font | Typical Weight | Notes |
|---------|------|---------------|-------|
| Body text, paragraphs | Inter | 400 (Regular) | Clean, highly legible at all sizes |
| Navigation links | Inter | 500 (Medium) | Slightly bolder for clarity |
| Buttons | Inter | 500-600 (Medium–Semi Bold) | Stands out as interactive |
| Section titles | Fraunces | 600-700 (Semi Bold–Bold) | Elegant serif presence |
| Hero headline | Fraunces | 700-800 (Bold–Extra Bold) | Maximum impact |
| Card titles | Inter | 600 (Semi Bold) | Clear hierarchy |
| Captions, labels | Inter | 400-500 | Smaller size, understated |
| Prices | Inter (tabular numerals) | 600 (Semi Bold) | `tabular-nums` for aligned numbers |
| Hindi text | Noto Sans Devanagari | Matches surrounding weight | Seamless bilingual rendering |

## Special Font Features

- **`font-feature-settings: "ss01", "cv11"`** — Enables Inter's stylistic alternates (rounder letterforms, alternative digit shapes) for a friendlier look.
- **`font-optical-sizing: auto`** — Enabled on Fraunces display text so the font automatically adjusts its detail/contrast based on the rendered size.
- **`tabular-nums`** — Used on price displays so all digits have equal width and prices align neatly in lists.

## Layman Summary

- **Inter** is the workhorse — modern, clean, friendly sans-serif used for everything you read day-to-day on the site.
- **Fraunces** is the personality — a warm, slightly playful serif that gives headings a premium, boutique feel without being stuffy.
- **Noto Sans Devanagari** ensures Hindi text looks great and matches the weight/style of the surrounding English text.

The combination creates a friendly-yet-professional tone: approachable enough for pet owners, polished enough to convey medical expertise.
