import { test, expect } from "@playwright/test";

test.describe("Trading Cards Application", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app before each test
    await page.goto("/");
  });

  test("should create a new card", async ({ page }) => {
    // Fill out the form
    await page.fill('input[name="name"]', "Test Card");
    await page.fill('input[name="image"]', "https://picsum.photos/200/300");
    await page.fill('input[name="category"]', "Test Category");
    await page.selectOption('select[name="rarity"]', "Rare");
    await page.fill('input[name="year"]', "2023");
    await page.fill(
      'textarea[name="description"]',
      "This is a test card description"
    );

    // Set power level (using fill for the range input)
    await page.fill('input[name="powerLevel"]', "75");

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify the card was created
    await expect(page.locator('h3:has-text("Test Card")')).toBeVisible();
    await expect(page.locator('span:has-text("Test Category")')).toBeVisible();
    await expect(page.locator('span:has-text("Rare")')).toBeVisible();
    await expect(page.locator('span:has-text("75/100")')).toBeVisible();
  });

  test("should edit an existing card", async ({ page }) => {
    // First create a card
    await page.fill('input[name="name"]', "Card to Edit");
    await page.fill('input[name="image"]', "https://picsum.photos/200/300");
    await page.fill('input[name="category"]', "Edit Test");
    await page.selectOption('select[name="rarity"]', "Common");
    await page.fill('input[name="year"]', "2022");
    await page.fill('textarea[name="description"]', "This card will be edited");
    await page.fill('input[name="powerLevel"]', "50");
    await page.click('button[type="submit"]');

    // Verify card was created
    await expect(page.locator('h3:has-text("Card to Edit")')).toBeVisible();

    // Hover over the card to see the edit button
    await page.hover('h3:has-text("Card to Edit")');

    // Click the edit button
    await page.click("text=Edit");

    // Modify the card
    await page.fill('input[name="name"]', "Edited Card");
    await page.selectOption('select[name="rarity"]', "Epic");
    await page.fill('input[name="powerLevel"]', "90");

    // Save the changes
    await page.click('button:has-text("Save Changes")');

    // Verify the card was updated
    await expect(page.locator('h3:has-text("Edited Card")')).toBeVisible();
    await expect(page.locator('span:has-text("Epic")')).toBeVisible();
    await expect(page.locator('span:has-text("90/100")')).toBeVisible();
  });

  test("should delete a card", async ({ page }) => {
    // First create a card
    await page.fill('input[name="name"]', "Card to Delete");
    await page.fill('input[name="image"]', "https://picsum.photos/200/300");
    await page.fill('input[name="category"]', "Delete Test");
    await page.selectOption('select[name="rarity"]', "Common");
    await page.fill('input[name="year"]', "2022");
    await page.fill(
      'textarea[name="description"]',
      "This card will be deleted"
    );
    await page.fill('input[name="powerLevel"]', "50");
    await page.click('button[type="submit"]');

    // Verify card was created
    await expect(page.locator('h3:has-text("Card to Delete")')).toBeVisible();

    // Hover over the card to see the delete button
    await page.hover('h3:has-text("Card to Delete")');

    // Delete the card (handle confirmation dialog if it exists)
    page.on("dialog", (dialog) => dialog.accept());
    await page.click("text=Delete");

    // Verify the card was deleted (it should no longer be visible)
    await expect(
      page.locator('h3:has-text("Card to Delete")')
    ).not.toBeVisible();
  });

  test("should save and load cards from localStorage", async ({ page }) => {
    // Create a card
    await page.fill('input[name="name"]', "Persistent Card");
    await page.fill('input[name="image"]', "https://picsum.photos/200/300");
    await page.fill('input[name="category"]', "Storage Test");
    await page.selectOption('select[name="rarity"]', "Legendary");
    await page.fill('input[name="year"]', "2025");
    await page.fill(
      'textarea[name="description"]',
      "This card will be saved to localStorage"
    );
    await page.fill('input[name="powerLevel"]', "100");
    await page.click('button[type="submit"]');

    // Verify card exists
    await expect(page.locator('h3:has-text("Persistent Card")')).toBeVisible();

    // Save all cards
    await page.click("text=Save All");

    // Delete all cards (to ensure we're testing loading from storage)
    await page.click("text=Delete All");

    // Confirm the deletion in the dialog
    page.on("dialog", (dialog) => dialog.accept());

    // Verify cards are gone
    await expect(
      page.locator('h3:has-text("Persistent Card")')
    ).not.toBeVisible();

    // Load cards from storage
    await page.click("text=Load Cards");

    // Verify the card was loaded back
    await expect(page.locator('h3:has-text("Persistent Card")')).toBeVisible();
    await expect(page.locator('span:has-text("Legendary")')).toBeVisible();
    await expect(page.locator('span:has-text("100/100")')).toBeVisible();
  });
});
