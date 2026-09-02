import { test, expect } from '@playwright/test';

test.describe('Clinical Gallery UI Suite', () => {
  test('Gallery page loads before/after cases and category filters', async ({ page }) => {
    await page.goto('/gallery');

    // Check header/title
    await expect(page.locator('h1, h2').first()).toBeVisible();

    // Verify gallery items or category chips are loaded
    const galleryItems = page.locator('img, .gallery-item, [role="button"]');
    await expect(galleryItems.first()).toBeVisible();
    const count = await galleryItems.count();
    expect(count).toBeGreaterThan(0);
  });
});
