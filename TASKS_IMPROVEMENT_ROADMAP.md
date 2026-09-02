# Dr. Akshaya Jain Clinic (Skintillatingg) - Comprehensive Improvement Roadmap & Task List

This task document outlines the full roadmap for elevating the clinic's website across **User Experience (UX)**, **Admin & Data Management**, and **Performance & SEO**.

---

## 📋 Summary of Task Phases

| Phase | Category | Description | Priority |
| :---: | :--- | :--- | :---: |
| **Phase 1** | **Booking Wizard & Patient UX** | Instant search, sticky mobile CTA, interactive stepper, and Calendar sync | 🔥 High |
| **Phase 2** | **Admin Bookings CRM & Data API** | Lead persistence, status management, CSV export, and email alerts | 🚀 High |
| **Phase 3** | **Performance & Core Web Vitals** | `next/image` optimization, `next/font` zero-CLS loading, and bundle tuning | ⚡ Medium |
| **Phase 4** | **SEO & Local Clinic Authority** | `MedicalBusiness` Schema JSON-LD, rich metadata, and OpenGraph cards | 📈 Medium |

---

## Phase 1: Booking Wizard & Patient UX Enhancements

- [ ] **Task 1.1: Live Treatment Search & Category Filter in Step 1**
  - **Goal**: Enable instant fuzzy/text search so patients can type keywords (*e.g., "Botox", "Acne", "Laser", "Glow"*) and find treatments in milliseconds.
  - **Scope**:
    - Add search input field with clear button at top of Step 1.
    - Add category pills (*All, Skin & Facial, Haircare, Body, Hair Removal*) to filter in real-time.
    - Highlight matched search terms.

- [ ] **Task 1.2: Sticky Mobile Floating Action Bar**
  - **Goal**: Prevent mobile scroll fatigue when browsing 26 treatments.
  - **Scope**:
    - Add responsive bottom floating pill for mobile viewports (`< 768px`).
    - Display current selection count (*"3 Selected"*) and an immediate *"Proceed to Details →"* button.

- [ ] **Task 1.3: Interactive Clickable Step Stepper**
  - **Goal**: Enable frictionless navigation between already-visited steps.
  - **Scope**:
    - Make step circles (1, 2, 3, 4) clickable to jump backward without repeated "Back" button presses.
    - Prevent skipping forward to incomplete steps until validation passes.

- [ ] **Task 1.4: "Add to Calendar" Integration (Google / Apple / Outlook)**
  - **Goal**: Reduce patient no-shows by allowing 1-click calendar invites.
  - **Scope**:
    - Add `.ics` file generator and direct Google Calendar URL generator on confirmation screen (`CIATN-2026-XXXX`).
    - Pre-fill event title (*"Dr. Akshaya Jain Clinic Consultation"*), clinic address (Koregaon Park, Pune), and selected therapies.

- [ ] **Task 1.5: Clinic Working Days & Slot Validation**
  - **Goal**: Prevent booking on clinic off-days (e.g., specific holidays or closed hours).
  - **Scope**:
    - Highlight available appointment days and disable past/blackout dates.

---

## Phase 2: Admin Bookings CRM & Persistence

- [ ] **Task 2.1: Consultation Lead Storage & Backend API**
  - **Goal**: Ensure zero lost leads by persisting every booking attempt.
  - **Scope**:
    - Create `POST /api/bookings` and `GET /api/admin/bookings` endpoints.
    - Store leads in persistent JSON / SQLite / database with timestamp, status (*New, Contacted, Scheduled, Completed, Cancelled*).

- [ ] **Task 2.2: Admin Bookings Management Dashboard**
  - **Goal**: Provide clinic staff a clean interface to manage incoming requests.
  - **Scope**:
    - Add `/admin/bookings` dashboard page in the protected admin panel.
    - Table view showing: Reference Code, Patient Name, Phone, Email, Selected Treatments, Preferred Date/Time, Status tag.
    - Status update dropdown and internal notes feature.
    - One-click "Message on WhatsApp" button from admin table.
    - Export bookings to CSV / Excel.

- [ ] **Task 2.3: Automated Clinic Email & Webhook Alerts**
  - **Goal**: Instant notification to clinic reception upon form submission.
  - **Scope**:
    - Integrate transactional email service (Resend / Nodemailer / Webhook) sending lead summaries to clinic inbox.

---

## Phase 3: Performance, Media & Core Web Vitals

- [ ] **Task 3.1: Next.js `<Image />` Component Migration**
  - **Goal**: Reduce page load weight by up to 60% and improve Largest Contentful Paint (LCP).
  - **Scope**:
    - Replace raw `<img>` tags across Navbar, Hero, Treatments, Team, Gallery, and Footer with `next/image`.
    - Configure modern WebP/AVIF formats, placeholder blurs, and responsive `sizes` attributes.

- [ ] **Task 3.2: Next.js Google Fonts Optimization (`next/font/google`)**
  - **Goal**: Eliminate layout shift (CLS = 0) and avoid external render-blocking font requests.
  - **Scope**:
    - Replace raw HTML `<link rel="stylesheet">` Google font tags in `layout.tsx` with `next/font/google` loaders.

- [ ] **Task 3.3: Static Asset Caching & Bundle Optimization**
  - **Goal**: Fast load speeds on mobile networks.
  - **Scope**:
    - Configure asset cache headers and Next.js bundle compression.

---

## Phase 4: Local SEO & Medical Structured Data (Schema.org)

- [ ] **Task 4.1: `MedicalBusiness` / `DermatologyClinic` JSON-LD Schema**
  - **Goal**: High ranking on Google Local Pack / Google Maps for Pune & Koregaon Park aesthetic search queries.
  - **Scope**:
    - Inject structured data with clinic name, founder (Dr. Akshaya Jain), address, geo-coordinates, opening hours, accepted payment methods, and medical specialties.

- [ ] **Task 4.2: OpenGraph & Social Sharing Cards**
  - **Goal**: Rich preview cards when links are shared on WhatsApp, Instagram, and Facebook.
  - **Scope**:
    - Add custom `og:image`, `og:title`, and `og:description` tags for every core page and treatment detail page.

- [ ] **Task 4.3: Dynamic XML Sitemap & Robots.txt**
  - **Goal**: Full automated indexing of all 26+ dynamic treatment routes.
  - **Scope**:
    - Implement `src/app/sitemap.ts` and `src/app/robots.ts` generating real-time sitemaps from `TREATMENTS_DATA`.

---

## Phase 5: Automated Testing & Quality Assurance

- [ ] **Task 5.1: Expand Playwright E2E Test Suite**
  - Update `e2e/booking.spec.ts` to test treatment search, calendar generation, and admin dashboard workflows.
- [ ] **Task 5.2: Automated Health Check Verification**
  - Verify zero TypeScript errors (`tsc --noEmit`) and 0 ESLint warnings on every build.
