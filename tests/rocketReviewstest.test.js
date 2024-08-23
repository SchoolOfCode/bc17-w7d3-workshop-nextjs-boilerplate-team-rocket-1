import { test, expect } from "@playwright/test";

// Test 1 - User Story 1: Regional Reviews
test("team rocket test is the best", async ({ page }) => {
  // Open our Fireplace Palace homepage
  await page.goto("http://localhost:3000/");

  // Check that we are on the correct website
  await expect(page).toHaveTitle(/Fireplace Palace/);

  // Click on the "England" review button
  const myButton = page.getByRole("button", { name: "England" });
  await myButton.click();
  
});
