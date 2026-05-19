# Client Viewport & Universal Scaling Specification

## Target Device Profiles

### 1. Primary Focus: Constraint Landscape Display (`1024 x 508`)
* **Viewport Dimensions**: `1024 x 508` px (Width x Height)
* **Aspect Ratio**: ~2:1
* **Context**: Highly height-constrained display typical of smaller laptops, tablets in landscape mode, or scaled screens with active browser menu bars.
* **Vertical Height Budget**: Roughly **400px to 420px** per fold (after accounting for a sticky header). Requires high-density, snug elements to avoid vertical page clipping.

### 2. Standard & High-Resolution Displays (`xl` / `2xl` Breakpoints)
* **xl Breakpoint**: `1280px` width (Standard laptops/desktops).
* **2xl Breakpoint**: `1536px` width (Large, high-resolution and ultra-wide desktop monitors).
* **Context**: Requires grand, majestic, and premium styling with spacious spacing, large headings, and comfortable body copy.

---

## 📐 Global Sizing & Spacing Matrix

| Screen Size | Breakpoint Category | Section Padding | Grid Gaps | Main Headings | Paragraph / Body Text |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile & Short Height** (`< 1280px`) | Default / `sm` / `md` / `lg` | `py-8` to `py-10` | `gap-4` | `text-2xl` to `text-3xl` | `text-[11px]` to `text-sm` |
| **Standard Desktop** (`>= 1280px`) | `xl:` | `py-20` | `gap-8` | `text-4xl` to `text-5xl` | `text-base` |
| **Ultra-Wide / 4K** (`>= 1536px`) | `2xl:` | `py-28` | `gap-10` | `text-5xl` to `text-6xl` | `text-lg` to `text-xl` |

> [!TIP]
> **Unified Section Spacing Standard**:
> To ensure perfectly uniform vertical rhythm across the entire landing page and all interior pages, apply this exact responsive utility class string on the root `<section>` or container element of every main content block:
> ```tsx
> className="py-8 md:py-10 xl:py-20 2xl:py-28 bg-background"
> ```
> *Note: For layout page wrappers or parent containers (e.g., in `app/page.tsx`), **do not use `space-y-*` or top/bottom margin utilities** between main sections. Letting adjacent sections' paddings naturally connect ensures a mathematically precise visual gap between their contents: `64px` on mobile, `80px` on tablet/md, `160px` on desktop/xl, and `224px` on ultra-wide/2xl screens.*

---

## 🔠 Detailed Component Typography & Sizing Scales

### 1. Sticky Navigation Header (`components/header.tsx`)
* **Logo Dimensions**: `w-12 h-12` (mobile/tablet) ➡️ `xl:w-16 xl:h-16` ➡️ `2xl:w-20 2xl:h-20` (large monitors).
* **Header Title**: `text-base md:text-lg` ➡️ `xl:text-xl` ➡️ `2xl:text-2xl font-bold`.
* **Navigation Links**: `text-sm` ➡️ `xl:text-base` ➡️ `2xl:text-lg`.
* **CTA Button**: `text-sm` ➡️ `xl:text-lg` ➡️ `2xl:text-xl` with padding scaling up to `2xl:px-10 2xl:py-4`.

### 2. Hero Section (`components/about-DOHaD.tsx`)
* **Main Headline**: `text-2xl md:text-4xl` ➡️ `xl:text-5xl` ➡️ `2xl:text-6xl font-bold`.
* **Subheadline**: `text-xs md:text-base` ➡️ `xl:text-lg` ➡️ `2xl:text-xl`.
* **CTA Buttons**: Sizing up to `2xl:px-10 2xl:py-5` and text up to `2xl:text-lg` (Min-width up to `2xl:min-w-[240px]`).

### 3. "What is DOHaD?" (`components/learn-dohad.tsx`)
* **Section Title**: `text-xl md:text-2xl` ➡️ `xl:text-4xl` ➡️ `2xl:text-5xl font-bold`.
* **Dr. Barker Photo Width**: `max-w-[200px]` (compact screens) ➡️ `xl:max-w-[280px]` ➡️ `2xl:max-w-[340px]`.
* **Body Descriptions**: `text-xs sm:text-sm` ➡️ `xl:text-base` ➡️ `2xl:text-lg`.

### 4. "Who We Are" (`components/about-section.tsx`)
* **Section Title**: `text-xl lg:text-3xl` ➡️ `xl:text-4xl` ➡️ `2xl:text-5xl font-bold`.
* **Aims Left-Column Tabs**: Padding `p-2` ➡️ `xl:p-3.5` ➡️ `2xl:p-5`, Tab titles `text-[11px]` ➡️ `xl:text-sm` ➡️ `2xl:text-base`.
* **Detail Card Panel**: Padding `p-3` ➡️ `xl:p-5` ➡️ `2xl:p-8`, Title text `text-[9px]` ➡️ `xl:text-xs` ➡️ `2xl:text-sm`, Descriptions `text-[11px]` ➡️ `xl:text-sm` ➡️ `2xl:text-base`.
* **Benefits Grid Cards**: Padding `p-4` ➡️ `xl:p-8` ➡️ `2xl:p-10`, Icon containers `w-10` ➡️ `xl:w-14` ➡️ `2xl:w-18`, Titles `text-sm` ➡️ `xl:text-xl` ➡️ `2xl:text-2xl`.

### 5. Research Focus Bento Grid (`components/four-pillars-section.tsx`)
* **Section Heading**: Title `text-2xl md:text-3xl` ➡️ `xl:text-4xl` ➡️ `2xl:text-5xl`, Subtitle `text-xs sm:text-sm` ➡️ `xl:text-base` ➡️ `2xl:text-lg`.
* **Grid Layout & Cards**: Gap `gap-4` ➡️ `xl:gap-8` ➡️ `2xl:gap-10`, Card padding `p-4` ➡️ `xl:p-8` ➡️ `2xl:p-10`.
* **Card Details**: Icon wrappers scale to `2xl:p-4` with icons at `2xl:w-10 2xl:h-10`. Titles scale to `2xl:text-2xl` and descriptions to `2xl:text-lg`.

### 6. Capacity Building Section (`components/CapacityBuilding.tsx`)
* **Section Header**: Title `text-2xl md:text-3xl` ➡️ `xl:text-5xl` ➡️ `2xl:text-6xl`, Subtitle `text-xs` ➡️ `xl:text-lg` ➡️ `2xl:text-xl`.
* **Grid & Cards**: Gap `gap-4` ➡️ `xl:gap-8` ➡️ `2xl:gap-10`, Card padding `p-4` ➡️ `xl:p-8` ➡️ `2xl:p-10`.
* **Details**: Icon wrappers scale to `2xl:w-24 2xl:h-24` and image icons to `2xl:w-12 2xl:h-12`. Card titles scale to `2xl:text-2xl` and descriptions to `2xl:text-base`.

### 7. Communication & Outreach (`components/CommunicationOutreach.tsx`)
* **Section Header**: Title `text-2xl md:text-3xl` ➡️ `xl:text-5xl` ➡️ `2xl:text-6xl`, Subtext `text-xs` ➡️ `xl:text-lg` ➡️ `2xl:text-xl`.
* **Vector Containers & Padding**: The photo-based placeholders are fully replaced with custom-designed high-fidelity React SVG illustrations (`webinars-vector` and `newsletter-vector`) that use micro-animations (waves, sparkles, floats) and theme-aware styling. Container height starts at compact `h-28 sm:h-36 lg:h-36` and scales up to `xl:h-80 2xl:h-96`, and card contents scale to `2xl:p-10`.
* **Card Sizing**: Card titles scale to `2xl:text-2xl font-bold`, body copy to `2xl:text-base`, bullet points to `2xl:space-y-3 2xl:text-base`, and button CTAs expand to `2xl:px-10 2xl:py-4 2xl:text-base`.

### 8. Financial Stewardship (`components/FinanceSection.tsx`)
* **Section Header**: Title `text-2xl md:text-3xl` ➡️ `xl:text-5xl` ➡️ `2xl:text-6xl`, Subtitle Badge text `text-[10px]` ➡️ `xl:text-sm`, description to `2xl:text-lg`.
* **Cards**: Padding scales to `2xl:p-10` with icons at `2xl:w-16 2xl:h-16`. Card titles expand to `2xl:text-2xl` and description text to `2xl:text-base`.

### 9. National Impact / Advocacy (`components/AdvocacySection.tsx`)
* **Section Header**: Heading scales to `2xl:text-6xl` and description to `2xl:text-xl`.
* **Grid & Cards**: Grid gap scales to `2xl:gap-10` and card padding to `2xl:px-10 2xl:py-12`.
* **Card Copy**: Card titles expand to `2xl:text-3xl` and descriptions scale to `2xl:text-lg`.

### 10. Frequently Asked Questions (`components/faq-section.tsx`)
* **Header Sizing**: Title scales to `2xl:text-6xl` and description to `2xl:text-lg`.
* **FAQ Triggers**: Question triggers scale to `2xl:text-lg font-bold`.
* **Content & Tables**: Table rows & answer blocks scale to `2xl:text-base`, with highlight boxes at `2xl:text-lg`.

### 11. Footer Section (`components/footer-section.tsx`)
* **Layout Padding**: Scales to `pt-8 pb-8` ➡️ `xl:pt-16 xl:pb-16` ➡️ `2xl:pt-24 2xl:pb-24`.
* **Logo Height**: Scales from `h-10` ➡️ `xl:h-14` ➡️ `2xl:h-18`.
* **Sizing Scales**: Column titles scale to `2xl:text-lg font-bold`, and link lists/address elements scale to `2xl:text-base`.

