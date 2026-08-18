# Skintillatingg — Dr. Akshaya Jain
### Luxury Aesthetic Cosmetology & Clinical Dermatology Web Application

Welcome to the official web application for **Skintillatingg Cosmo • Tricho • Therapeutic Clinic**, founded by **Dr. Akshaya Jain**. Built with Next.js 14, React, Tailwind CSS, and TypeScript, this platform delivers a bespoke, luxury-editorial digital experience for clinical aesthetic treatments, patient journeys, and medical insights.

---

## 🌟 Brand & Visual Identity

The web application strictly adheres to the luxury medical design system of the Skintillatingg brand:

- **Primary Deep Forest Green**: `#1C3329` — Grounding luxury background
- **Sage Green**: `#657A6A` — Secondary editorial panels & section backgrounds
- **Warm Ivory / Cream**: `#F5F5DC` — Soft typography, editorial cards, and call-to-action elements
- **Muted Leaf Sage**: `#AEB9A9` — Delicate borders and subtle accents
- **Dark Slate Green**: `#17251E` — High-contrast text on cream cards
- **Typography**: Editorial serif headings combined with modern, high-legibility sans-serif body typography.

---

## ✨ Key Features & Architecture

### 1. Homepage (`/`)
- **Cinematic Hero**: Highlights Dr. Akshaya Jain's clinical expertise with warm cream floating statistics cards.
- **Smooth Number Counter Animation**:
  - `13+ Years of Clinical Practice`
  - `10k+ Transformations` (animating smoothly from `0` to `10k+`)
  - `3 National Excellence Awards`
  - Triggered via `IntersectionObserver` with smooth ease-out cubic animation.
- **Premium Editorial Reels Section (`<EditorialReelsSection />`)**:
  - Sage Green (`#657A6A`) background.
  - Horizontal editorial gallery layout: `[ INTRO PANEL ] [ REEL 01 ] [ REEL 02 ] [ REEL 03 ] [ REEL 04 PARTIAL ] →`
  - 5 vertical 9:16 aspect ratio cards (`CLINIC`, `TREATMENTS`, `EXPERTISE`, `TECHNOLOGY`, `TRANSFORMATIONS`).
  - **Swipe / Scroll More Navigation Control**: Minimal warm ivory right arrow (`→`) button that smoothly scrolls the reel gallery horizontally without navigating away from the page. Centralized video configuration ready for `.mp4` integration.

### 2. Insights & Treatments Grid (`/insights`)
- **15-Treatment 3-Column Grid**: Responsive layout (`lg:grid-cols-3`) showcasing 15 clinical procedures:
  1. Laser Hair Reduction
  2. Lipolysis
  3. Dermal Fillers
  4. Microdermabrasion
  5. CO₂ Laser
  6. Acne & Scars
  7. Chemical Peel
  8. PRP (Platelet-Rich Plasma)
  9. Medi Facial
  10. Lip Filler
  11. HIFU (High-Intensity Focused Ultrasound)
  12. Microneedling
  13. Q Switch Laser
  14. Permanent Makeup
  15. Tattoo Removal
- **Dynamic Treatment Detail Routes (`/insights/treatments/[slug]`)**: Dedicated static-rendered clinical treatment pages featuring target conditions, procedure overviews, downtime details, and consultation CTAs.

### 3. Our Journey & Clinical Philosophy (`/journey`)
- **Botanical Line-Art Decoration**: Customized botanical branch line art in the upper hero section matching the brand's aesthetic.
- **Clinical Ethos & Doctor Profile**: In-depth spotlight on Dr. Akshaya Jain's background and evidence-led medical principles.
- **Interactive Milestones & Credentials**: Grid of clinic achievements and medical authority tags.

### 4. Patient Booking & Contact (`/contact`, `/book-consultation`)
- Interactive consultation booking wizard and comprehensive clinic contact routing in Koregaon Park / Boat Club Road, Pune.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server-Side Generation / Static Page Optimization)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Google Material Symbols Outlined
- **Language**: TypeScript
- **Deployment**: Compatible with Vercel, Netlify, or Node.js SSR environments

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) installed on your system.

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone <your-repository-url>
cd "skintillatingg project"
npm install
```

### 3. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
├── public/
│   ├── images/
│   │   ├── treatments/          # 15 high-res clinical treatment images
│   │   ├── dr-akshaya-jain.jpg   # Doctor portrait
│   │   └── botanical-branch-journey.png
├── src/
│   ├── app/
│   │   ├── page.tsx             # Homepage with Hero, Stats & Reels Section
│   │   ├── journey/             # Our Journey & Philosophy route
│   │   ├── insights/            # Treatments Grid & Articles
│   │   │   └── treatments/[slug]/ # Dynamic treatment detail routes
│   │   ├── contact/             # Contact page
│   │   └── book-consultation/   # Booking wizard
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with active route highlighting
│   │   ├── Hero.tsx             # Hero section with animated counter card
│   │   ├── EditorialReelsSection.tsx # Horizontal 9:16 vertical reel carousel
│   │   ├── StatsSection.tsx     # Viewport-triggered statistics counter
│   │   └── insights/
│   │       └── TreatmentGrid.tsx # 15-treatment 3-column editorial grid
│   └── data/
│       └── treatments.ts        # Centralized source of truth for 15 treatments
├── tailwind.config.ts           # Custom brand color tokens & font definitions
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

---

## 👨‍⚕️ Credits

Designed & Developed for **Dr. Akshaya Jain** — *Skintillatingg Cosmo • Tricho • Therapeutic Clinic*.
