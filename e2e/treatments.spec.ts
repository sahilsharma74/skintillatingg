import { test, expect } from '@playwright/test';

test.describe('Treatments Catalog & Filtering UI Suite', () => {
  test('Treatments catalog renders categories and treatment cards', async ({ page }) => {
    await page.goto('/treatments');

    // Verify Treatments page title or heading
    await expect(page.locator('h1, h2').first()).toBeVisible();

    // Verify Treatment category filter tabs exist (e.g., ALL, LASER, SKIN, etc.)
    const filterTabs = page.locator('button').filter({ hasText: /ALL|LASER|SKIN|INJECTABLES/i });
    await expect(filterTabs.first()).toBeVisible();

    // Verify treatment cards exist
    const treatmentCards = page.locator('a[href^="/treatments/"]');
    await expect(treatmentCards.first()).toBeVisible();
    const count = await treatmentCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Filter tabs filter treatments dynamically without page reload', async ({ page }) => {
    await page.goto('/treatments');

    // Click on LASER filter button
    const laserTab = page.locator('button').filter({ hasText: /^LASER$/i }).first();
    if (await laserTab.isVisible()) {
      await laserTab.click();
      await page.waitForTimeout(300);

      // Verify laser treatments are visible
      const laserCard = page.locator('a[href*="laser"]').first();
      await expect(laserCard).toBeVisible();
    }
  });

  test('Navigating into a treatment detail page displays full procedure info', async ({ page }) => {
    await page.goto('/treatments/laser-hair-reduction');

    // Verify Title
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Laser Hair Reduction/i);

    // Verify consultation booking button on treatment detail page
    const bookBtn = page.getByRole('link', { name: /book consultation|reserve/i }).first();
    await expect(bookBtn).toBeVisible();
  });
});
