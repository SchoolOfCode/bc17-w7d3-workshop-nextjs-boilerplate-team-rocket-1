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
  await expect(page).toHaveURL("http://localhost:3000/booking");
  
  const nameField = page.getByLabel('Name:');
  await nameField.fill("Jessie")
  expect(nameField).toHaveValue('Jessie')

  const postcodeField = page.getByLabel('Postcode:')
  await postcodeField.fill("UB32TJ")
  expect(postcodeField).toHaveValue('UB32TJ')

  
  const addressField = page.getByLabel('Address:', { exact: true })
  await addressField.fill("evil street")
  expect(addressField).toHaveValue('evil street')

  const cityField = page.getByLabel('City:')
  await cityField.fill("vermilion")
  expect(cityField).toHaveValue('vermilion')


  const phoneNumberField = page.getByLabel( 'Phone Number:')
  await phoneNumberField.fill('078723627632')
  expect(phoneNumberField).toHaveValue('078723627632')
 
  const bookingButton = page.getByRole('button', { name: 'BOOK NOW' })
  await bookingButton.click()
  const errorMessage = page.getByText(
    "Fill in the form please!"
  );
  expect(errorMessage).toBeVisible()





  //TODO - CARRY ON HERE
});
