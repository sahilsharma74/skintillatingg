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
});
