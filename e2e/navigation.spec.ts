import { test, expect } from '@playwright/test';

test.describe('Home Page & Navigation UI Suite', () => {
  test('Home page loads with brand header, hero elements and footer', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Dr\. Akshaya Jain/i);

    // Verify main header is visible
    const header = page.locator('header').first();
    await expect(header).toBeVisible();

    // Verify Footer is present
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('Primary Call to Action buttons navigate to Consultation Booking', async ({ page }) => {
    await page.goto('/');

    // Click on Book Consultation button
    const bookCta = page.getByRole('link', { name: /book consultation|reserve|consultation/i }).first();
    await expect(bookCta).toBeVisible();
    await bookCta.click();

    // Verify navigation
    await expect(page).toHaveURL(/.*book-consultation/);
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });
});
