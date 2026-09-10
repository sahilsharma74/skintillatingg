import { test, expect } from '@playwright/test';

test.describe('Consultation Booking Multi-Step Form UI Suite', () => {
  test('Consultation booking interface renders treatment selection and advances steps', async ({ page }) => {
    await page.goto('/book-consultation');

    // Verify main heading
    await expect(page.locator('h1, h2').first()).toBeVisible();

    // Find and click a treatment card (e.g. Laser Hair Reduction or first h4 treatment)
    const treatmentTitle = page.locator('h4').filter({ hasText: /Laser Hair Reduction|Chemical Peel|Dermal Fillers/i }).first();
    await expect(treatmentTitle).toBeVisible();

    // Click the card
    await treatmentTitle.click();

    // Verify Next Step button is visible and click it to advance to Step 2
    const nextBtn = page.getByRole('button', { name: /Next Step/i });
    await expect(nextBtn).toBeVisible();
    await nextBtn.click();

    // Verify Step 2 (Your Personal Information) is displayed
    await expect(page.getByRole('heading', { name: /Your Personal Information/i })).toBeVisible();
  });

  test('Form input elements are interactive and accept user data in Step 2', async ({ page }) => {
    await page.goto('/book-consultation');

    // Select a treatment first
    const treatmentTitle = page.locator('h4').filter({ hasText: /Laser Hair Reduction|Chemical Peel|Dermal Fillers/i }).first();
    if (await treatmentTitle.isVisible()) {
      await treatmentTitle.click();
      const nextBtn = page.getByRole('button', { name: /Next Step/i });
      await nextBtn.click();

      // Look for text inputs in step 2 (e.g. Full Name, Email, Phone)
      const nameInput = page.locator('input[placeholder*="Name" i], input[type="text"]').first();
      if (await nameInput.isVisible()) {
        await nameInput.fill('Jane Doe');
        await expect(nameInput).toHaveValue('Jane Doe');
      }
    }
  });

  test('Step 1 treatment live search and category pills filter treatment options', async ({ page }) => {
    await page.goto('/book-consultation');

    // Search input element should be present
    const searchInput = page.getByPlaceholder(/Search treatments by name/i);
    await expect(searchInput).toBeVisible();

    // Type "HIFU" in search input
    await searchInput.fill('HIFU');

    // Verify HIFU card is visible
    const hifuCard = page.locator('h4').filter({ hasText: /HIFU/i });
    await expect(hifuCard).toBeVisible();

    // Clear search button should appear and reset search when clicked
    const clearBtn = page.getByRole('button', { name: /Clear/i });
    await expect(clearBtn).toBeVisible();
    await clearBtn.click();

    // Category pills should filter treatments
    const hairPill = page.getByRole('button', { name: /HAIRCARE/i });
    await expect(hairPill).toBeVisible();
    await hairPill.click();

    // Hair treatment should be visible
    const hairTreatment = page.locator('h4').filter({ hasText: /Hair PRP|GFC Hair|Hairfall/i }).first();
    await expect(hairTreatment).toBeVisible();
  });

  test('Sticky mobile floating action bar displays on mobile viewports in Step 1', async ({ page }) => {
    // Set mobile viewport size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/book-consultation');

    // Select a treatment card
    const treatmentTitle = page.locator('h4').filter({ hasText: /Laser Hair Reduction|Chemical Peel|Dermal Fillers/i }).first();
    await treatmentTitle.click();

    // Verify Mobile Floating Bar with "Proceed to Details" button is visible
    const proceedBtn = page.getByRole('button', { name: /Proceed to Details/i });
    await expect(proceedBtn).toBeVisible();

    // Click proceed button to advance step
    await proceedBtn.click();
    await expect(page.getByRole('heading', { name: /Your Personal Information/i })).toBeVisible();
  });

  test('Interactive step stepper allows jumping back to completed steps', async ({ page }) => {
    await page.goto('/book-consultation');

    // Select a treatment and advance to Step 2
    const treatmentTitle = page.locator('h4').filter({ hasText: /Laser Hair Reduction|Chemical Peel|Dermal Fillers/i }).first();
    await treatmentTitle.click();
    const nextBtn = page.getByRole('button', { name: /Next Step/i });
    await nextBtn.click();

    // Verify Step 2 is active
    await expect(page.getByRole('heading', { name: /Your Personal Information/i })).toBeVisible();

    // Click Step 1 button in stepper to jump back
    const step1Btn = page.getByRole('button', { name: /01 — Treatments/i });
    await expect(step1Btn).toBeVisible();
    await step1Btn.click();

    // Verify Step 1 heading is back in view
    await expect(page.getByRole('heading', { name: /Select Treatments for Your Consultation/i })).toBeVisible();
  });

  test('Confirmation screen displays 1-click Add to Calendar integration buttons', async ({ page }) => {
    await page.goto('/book-consultation');

    // Fill minimum valid form fields to submit
    const treatmentTitle = page.locator('h4').filter({ hasText: /Laser Hair Reduction|Chemical Peel|Dermal Fillers/i }).first();
    await treatmentTitle.click();
    await page.getByRole('button', { name: /Next Step/i }).click();

    // Step 2 Details
    await page.locator('input[placeholder*="Name" i], input[type="text"]').first().fill('Test Patient');
    await page.locator('input[type="email"]').first().fill('test@example.com');
    await page.locator('input[type="tel"]').first().fill('9876543210');
    await page.getByRole('button', { name: /Next Step/i }).click();

    // Step 3 Schedule (Select date from Luxury Calendar)
    const quickSelectBtn = page.getByRole('button', { name: /Tomorrow/i });
    if (await quickSelectBtn.isVisible()) {
      await quickSelectBtn.click();
    }
    await page.getByRole('button', { name: /Next Step/i }).click();

    // Step 4 Goals & Submit
    const consentCheckbox = page.locator('input[type="checkbox"]').first();
    if (await consentCheckbox.isVisible()) {
      await consentCheckbox.check();
    }
    await page.getByRole('button', { name: /Submit Consultation Request/i }).click();

    // Verify Confirmation screen calendar buttons
    await expect(page.getByText(/ADD CONSULTATION TO YOUR CALENDAR/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Google Calendar/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Apple \/ Outlook \(\.ics\)/i })).toBeVisible();
  });
});
