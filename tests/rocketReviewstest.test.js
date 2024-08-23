import { test, expect } from "@playwright/test";

// Test 1 - User Story 1: Regional Reviews
test("team rocket test is the best", async ({ page }) => {
  // Open our Fireplace Palace homepage
  await page.goto("http://localhost:3000/");

  // Check that we are on the correct website
  await expect(page).toHaveTitle(/Fireplace Palace/);

  const menuButton = page.getByRole("button", { name: '≡' })
  await menuButton.click()
  const founderLink = page.getByRole('link', { name: 'Founders' })
  expect(founderLink).toBeVisible()
  await founderLink.click()
  
  await expect(page).toHaveTitle(/Fireplace Palace/);
  
  
});
