# Implementation Plan: Dr. Akshaya Jain Website Enhancements

This document tracks all completed and pending tasks across UX, Admin CRM, Performance, and SEO enhancements using interactive Markdown task checklists.

---

## 📊 Overview & Feature Impact Tables

### 1. Booking Flow & Patient UX
| Feature | Current State | Target Improvement | Impact | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Treatment Search (Step 1)** | Static 26-item list | Instant live search & category filter pills | 🔥 High | Completed |
| **Mobile Floating Action Bar** | Button at bottom of 26 items | Sticky bottom bar: *"X Selected — Next Step →"* | 🔥 High | Completed |
| **Step Stepper Navigation** | Linear Next/Back only | Clickable step numbers (1, 2, 3) to jump back | ⚡ Medium | Completed |
| **Add to Calendar** | Text/WhatsApp only | 1-Click Google Calendar & Apple `.ics` invite | 🔥 High | Completed |
| **Working Day Validation** | Open date picker | Disable past dates & enforce slot boundaries | ⚡ Medium | Pending |

### 2. Admin CRM & Backend Persistence
| Feature | Current State | Target Improvement | Impact | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Lead Persistence** | Form resets on reload | `POST /api/bookings` saves to persistent storage | 🚀 Critical | Pending |
| **Admin Bookings Dashboard** | No bookings UI | Dedicated `/admin/bookings` table with status tags | 🚀 Critical | Pending |
| **One-Click WhatsApp Reply** | Manual typing | Direct button in admin to message patient | ⚡ High | Pending |
| **CSV Export** | None | Export all appointment requests to `.csv` | ⚡ High | Pending |

### 3. SEO & Performance
| Feature | Current State | Target Improvement | Impact | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Medical JSON-LD Schema** | Basic meta | `MedicalBusiness` / `DermatologyClinic` Schema | 📈 High | Pending |
| **Dynamic XML Sitemap** | Static/None | Auto-generated `/sitemap.xml` for all 26+ treatments | 📈 High | Pending |
| **Robots.txt** | Default | `/robots.txt` configuration protecting `/admin` | 📈 Medium | Pending |

---

## 📋 Master Task Checklist

- [x] **0. Initial Health Check & Automated Test Setup**
  - [x] Run TypeScript compilation check (`npx tsc --noEmit` - 0 errors)
  - [x] Configure ESLint 8 for Next.js core web vitals and fix JSX entities
  - [x] Set up automated route & dynamic treatment test runner (`run_automated_tests.js`)
  - [x] Install and configure Playwright E2E suite (`playwright.config.ts`)
  - [x] Verify all 16 Playwright tests pass on Desktop and Mobile viewports

- [x] **1. Booking Wizard & Patient UX Upgrades**
  - [x] **1.1 Live Treatment Search & Filter in Step 1**
    - [x] Add search input field with instant debounce filtering (`src/app/book-consultation/page.tsx`)
    - [x] Add category filter pills (*ALL, SKIN & FACIAL, HAIRCARE, BODY, HAIR REMOVAL*)
    - [x] Add search clear button and zero-results fallback state
  - [x] **1.2 Sticky Mobile Floating Action Bar**
    - [x] Create floating pill for mobile viewports (`md:hidden`)
    - [x] Display live selection badge (*"X Treatments Selected"*)
    - [x] Add immediate *"Proceed to Details →"* button
  - [x] **1.3 Interactive Step Stepper**
    - [x] Make completed step icons (1, 2, 3) clickable for instant backward navigation
    - [x] Ensure forward navigation requires step validation
  - [x] **1.4 1-Click "Add to Calendar" Integration**
    - [x] Implement Google Calendar link generator with date, time slot, and clinic location
    - [x] Implement Apple / Outlook `.ics` calendar file download button on confirmation screen
  - [x] **1.5 Date & Slot Validation (Custom Luxury Calendar UI)**
    - [x] Implement custom Skintillatingg Luxury Calendar UI (`#1C3329` dark green, `#F5F5DC` warm cream, `#C9A227` gold)
    - [x] Enforce Monday clinic closure rule & Sunday open working day
    - [x] Add quick-select preset buttons (*"Tomorrow"*, *"In 3 Days"*, *"Next Sunday"*)

- [ ] ~**2. Admin Bookings CRM & Persistence API**~ *(ON HOLD / EXCLUDED PER USER DECISION)*
  - *Admin login features, admin panel, and admin API endpoints removed from scope per user request.*

- [ ] **3. Local SEO, Medical Schema & Dynamic Sitemaps**
  - [x] **3.1 Medical JSON-LD Structured Data**
    - [x] Add `MedicalBusiness` / `DermatologyClinic` Schema.org script to `src/app/layout.tsx` (Koregaon Park, Pune location, services, opening hours)
  - [x] **3.2 Dynamic Next.js XML Sitemap**
    - [x] Create `src/app/sitemap.ts` dynamically indexing all static pages and 26+ treatment routes
  - [x] **3.3 Robots.txt Configuration**
    - [x] Create `src/app/robots.ts` disallowing `/api/` and referencing `/sitemap.xml`

- [ ] **4. Automated E2E Testing & Verification**
  - [ ] **4.1 Update Playwright Booking Spec**
    - [ ] Test treatment search and filtering in `e2e/booking.spec.ts`
    - [ ] Test step navigation and calendar invite buttons
  - [ ] **4.2 Create Admin Bookings E2E Test**
    - [ ] Create `e2e/admin-bookings.spec.ts` to test end-to-end booking persistence and admin table rendering
  - [ ] **4.3 Full Test Suite Run**
    - [ ] Run `npm run test:e2e` to verify all test suites pass

---

## 🛠️ Proposed File Changes

### Modified Files:
- [`src/app/book-consultation/page.tsx`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/app/book-consultation/page.tsx) — Search, mobile floating bar, clickable stepper, calendar sync, API hook
- [`src/components/admin/AdminSidebarClient.tsx`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/components/admin/AdminSidebarClient.tsx) — Bookings nav link
- [`src/app/layout.tsx`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/app/layout.tsx) — Medical JSON-LD Schema
- [`e2e/booking.spec.ts`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/e2e/booking.spec.ts) — Extended UI test cases

### New Files:
- `[NEW]` [`src/app/api/bookings/route.ts`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/app/api/bookings/route.ts) — Bookings persistence API
- `[NEW]` [`src/app/admin/(dashboard)/bookings/page.tsx`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/app/admin/(dashboard)/bookings/page.tsx) — Admin Bookings CRM UI
- `[NEW]` [`src/app/sitemap.ts`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/app/sitemap.ts) — Dynamic XML sitemap
- `[NEW]` [`src/app/robots.ts`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/app/robots.ts) — SEO robots.txt
- `[NEW]` [`src/data/cms_storage/bookings.json`](file:///c:/Users/vinit/Downloads/Skintilatting/skintillatingg/src/data/cms_storage/bookings.json) — Storage file

---

## 🧪 Verification Plan

- [ ] Run `npx tsc --noEmit` to ensure 0 TypeScript compilation errors
- [ ] Run `npm run lint` to verify ESLint cleanliness
- [ ] Run `npm test` to verify all 41 core & dynamic routes return 200 OK
- [ ] Run `npm run test:e2e` to verify all Playwright UI tests pass across Desktop and Mobile viewports
