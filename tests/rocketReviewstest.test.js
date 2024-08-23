import { test, expect } from "@playwright/test";

// Test 1 - User Story 1: Regional Reviews
test("User Story 1: Regional Reviews", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/Fireplace Palace/);

  const menuButton = page.getByRole("button", { name: "England" });
  await menuButton.click();

  const reviewText = page.getByText(
    "Outstanding craftsmanship and attention to detail. Our living room has never felt so cozy. Thank you, Fireplace Palace!"
  );
  await expect(reviewText).toBeVisible();
});

// Test 2 - User Story 2: Founder's Page
test("User Story 2: Founder's Page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/Fireplace Palace/);

  const menuButton = page.getByRole("button", { name: "≡" });
  await menuButton.click();
  const founderLink = page.getByRole("link", { name: "Founders" });
  expect(founderLink).toBeVisible();
  await founderLink.click();

  await expect(page).toHaveURL("http://localhost:3000/founders");
});

// Test 3 - User Story 3: Design Booking Page
test("User Story 3: Design Booking Page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/Fireplace Palace/);

  const bookingLink = page.getByRole("link", { name: "Book consultation" });
  await bookingLink.click();

  //TODO - CARRY ON HERE
});
