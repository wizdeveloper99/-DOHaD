# Design System

## Overview
The DOHaD India design system is built on a "Midnight & Teal" foundation, projecting an aura of academic authority, research excellence, and developmental growth. The visual personality is professional and spacious, utilizing a white/light theme with deep emerald and teal accents to establish trust in a healthcare and scientific context. It employs a modern "Bento" grid philosophy for information density, balanced by generous vertical rhythm and soft, approachable geometry (rounded-full and rounded-2xl).

## Colors
| Name | Hex Value | Role |
| :--- | :--- | :--- |
| Midnight (Secondary 900) | #111820 | Darkest brand accent, Footer text/accents |
| Teal (Secondary DEFAULT) | #00645E | Primary Brand Color, CTA Buttons, Hero Accents |
| Green (Secondary 500) | #8AD260 | Success states, Interactive elements (Brand Green) |
| Mint (Secondary 50) | #D3DDBF | Subtle backgrounds, tag backgrounds, icon containers |
| White | #FFFFFF | Primary Page Background, Card Surface |
| Foreground | #09090b | Primary Text (HSL 0 0% 9%) |
| Muted Foreground | #71717a | Secondary/Description Text (HSL 0 0% 45.1%) |
| Border | #e4e4e7 | Section separators, card borders (HSL 0 0% 89.8%) |
| Secondary 100 | #dcfce7 | Lightest green highlight |
| Secondary 700 | #15803d | Dark green for text on mint backgrounds |

## Typography
**Font Family:** Hind Siliguri  
**Fallback:** sans-serif  
**Weights used:** 300, 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)  
**Sizes used:** 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px  
**Line heights:** 1 (tight), 1.25 (snug), 1.5 (relaxed)  
**Letter spacing:** -0.02em (headings), normal (body)

### Type Scale
| Role | Size | Line Height | Letter Spacing | Weight |
| :--- | :--- | :--- | :--- | :--- |
| Hero Heading | 48px (5xl) | 1 | -0.02em | 700 |
| Section Heading | 36px (4xl) | 1.25 | normal | 700 |
| Card Title | 20px (xl) | 1.25 | normal | 700 |
| Subheading / Lead | 18px (lg) | 1.5 | normal | 400 |
| Body Text | 16px (base) | 1.5 | normal | 400 |
| Caption / Tag | 14px (sm) | 1.25 | normal | 600 |
| Footer Meta | 12px (xs) | 1 | normal | 400 |

## Spacing & Layout
- **Base unit:** 4px
- **Page max-width:** 1280px (7xl)
- **Section vertical gap:** 96px (space-y-24) to 128px (space-y-32)
- **Card padding:** 32px (p-8) or 24px (p-6)
- **Element gap:** 24px (gap-6) to 32px (gap-8)
- **Container padding:** 32px (px-8) to 48px (px-12)

### Border Radius
| Element | Radius |
| :--- | :--- |
| Buttons (Primary/CTA) | Full (9999px) |
| Feature Cards | 16px (2xl) |
| Carousel Items | 12px (xl) |
| Icon Containers | 12px (xl) |
| Stats Cards | 16px (2xl) |
| Badges | Full (9999px) |
| Image Overlays | 24px (3xl) |

## Components

### [Button]
- **Role:** Navigation and User Action
- **Background:** #00645E (Secondary) or #8AD260 (Green-500)
- **Text color:** #FFFFFF
- **Border:** None / 1px (for outline variants)
- **Border radius:** Full
- **Padding:** 12px 24px (py-3 px-6)
- **Shadow:** shadow-sm (default) / shadow-lg (hover)
- **Font size / weight:** 16px / 600
- **Hover/active state:** bg-secondary/90, scale-105
- **Notes:** Always uses rounded-full for a premium, friendly aesthetic.

### [Card]
- **Role:** Content grouping for Research/Pillars
- **Background:** #FFFFFF
- **Text color:** #09090b
- **Border:** 1px #e4e4e7
- **Border radius:** 16px (2xl)
- **Padding:** 24px (p-6)
- **Shadow:** shadow-sm
- **Font size / weight:** Title: 20px / 700
- **Hover/active state:** shadow-lg, -translate-y-1, border-secondary/20
- **Notes:** Often uses icon containers with bg-secondary/10.

### [Navbar]
- **Role:** Global site navigation
- **Background:** #FFFFFF (bg-background/95)
- **Text color:** #71717a (muted-foreground)
- **Border:** 1px border-b (#e4e4e7)
- **Border radius:** 0px
- **Padding:** 16px 24px (py-4 px-6)
- **Shadow:** None
- **Font size / weight:** 16px / 500
- **Hover/active state:** text-foreground (#09090b)
- **Notes:** Uses backdrop-blur-sm and sticky positioning.

### [Footer]
- **Role:** Contact info and global links
- **Background:** #00645E (Secondary) / #000000 (Dark mode)
- **Text color:** #FFFFFF
- **Border:** 1px border-t border-white/20
- **Border radius:** 0px
- **Padding:** 48px 0 (py-12)
- **Shadow:** None
- **Font size / weight:** 14px / 400
- **Hover/active state:** text-gray-300
- **Notes:** Features 4-column grid layout for desktop.

## Dos and Donts

### Do
- Use `max-w-7xl` (1280px) for all main page content containers to ensure layout consistency.
- Apply `rounded-full` to all call-to-action buttons to maintain the brand's approachable personality.
- Maintain a minimum vertical gap of `96px` (space-y-24) between major homepage sections for readability.
- Use the `secondary` (#00645E) color for all primary branding accents and active UI states.
- Wrap all images in `rounded-2xl` or `rounded-xl` containers with `overflow-hidden`.
- Implement `backdrop-blur-sm` on the sticky header to maintain legibility over scrolling content.

### Dont
- Don't use sharp `rounded-none` corners for cards or informational blocks; stick to `rounded-xl` or higher.
- Don't use pure black (#000000) for body text; always use the `text-foreground` or `text-gray-900` variable.
- Don't exceed a `max-w-4xl` (896px) line length for centered descriptive paragraphs.
- Don't use standard Tailwind blues or reds for primary brand elements; stick to the Green/Teal palette.
- Don't place sections without a `pt-12` or `pt-20` top padding to avoid visual crowding.
- Don't use `shadow-none` on interactive cards; always provide a subtle `shadow-sm` base.

## Elevation & Shadows
- **shadow-sm:** Base elevation for all static informational cards.
- **shadow-md:** Interactive elements on hover (buttons, small cards).
- **shadow-lg:** Premium feature cards and main CTA buttons on hover.
- **shadow-xl:** Specific benefit cards on hover (e.g., `shadow-secondary/5`).

## Surfaces
| Surface Name | Color | Role |
| :--- | :--- | :--- |
| Page Background | #FFFFFF | Primary background for the entire application |
| Card Surface | #FFFFFF | Base surface for bento-style and feature cards |
| Highlight Surface | #D3DDBF | Mint background (Secondary 50) for tags and icon backdrops |
| Footer Background | #00645E | High-contrast brand surface for the site footer |
| Overlay Surface | rgba(0,0,0,0.4) | Used for text readability on top of images (e.g., Feature Cards) |

## Layout Structure
The project follows a **12-column grid system** restricted by a `7xl` (1280px) centered container. Vertical rhythm is established through a standardized `space-y-24` to `space-y-32` gap between sections.
- **Breakpoints:** Responsive logic follows Tailwind defaults (Mobile: <768px, Tablet: 768px-1023px, Desktop: >1024px).
- **Section Rhythm:** Every section starts with a consistent `pt-12` or `pt-20` padding.
- **Navbar:** Sticky `top-0` with a 1px border-bottom.
- **Footer:** 4-column responsive grid transitioning to single column on mobile.

## Animation & Transitions
- **fade-in-up:** Property: opacity (0 to 1), transform (translateY 20px to 0). Duration: 1s. Easing: ease-out. Used: All main sections on scroll.
- **Card Hover:** Property: transform (translateY -4px), shadow. Duration: 300ms. Easing: ease-in-out.
- **Image Scale:** Property: scale (1 to 1.05). Duration: 700ms (About) / 300ms (Feature). Easing: transition-all.
- **Carousel:** Framer Motion transition (duration 0.35s). Used: Pillar feature carousel.
