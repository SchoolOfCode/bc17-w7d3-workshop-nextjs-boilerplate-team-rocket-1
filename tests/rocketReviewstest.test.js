import { test, expect } from '@playwright/test'

test('team rocket test is the best', async({ page }) => {
    await page.goto('http://localhost:3000/')
    await expect(page).toHaveTitle(/Fireplace Palace/)
})

