# Test info

- Name: Trading Cards Application >> should edit an existing card
- Location: C:\Users\oguzg\Desktop\React_Exercises\Project-TS-Panini-Sammlerkarten\src\tests\cards.spec.ts:34:3

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

    at C:\Users\oguzg\Desktop\React_Exercises\Project-TS-Panini-Sammlerkarten\src\tests\cards.spec.ts:6:16
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test.describe("Trading Cards Application", () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Navigate to the app before each test
>  6 |     await page.goto("/");
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
   7 |   });
   8 |
   9 |   test("should create a new card", async ({ page }) => {
   10 |     // Fill out the form
   11 |     await page.fill('input[name="name"]', "Test Card");
   12 |     await page.fill('input[name="image"]', "https://picsum.photos/200/300");
   13 |     await page.fill('input[name="category"]', "Test Category");
   14 |     await page.selectOption('select[name="rarity"]', "Rare");
   15 |     await page.fill('input[name="year"]', "2023");
   16 |     await page.fill(
   17 |       'textarea[name="description"]',
   18 |       "This is a test card description"
   19 |     );
   20 |
   21 |     // Set power level (using fill for the range input)
   22 |     await page.fill('input[name="powerLevel"]', "75");
   23 |
   24 |     // Submit the form
   25 |     await page.click('button[type="submit"]');
   26 |
   27 |     // Verify the card was created
   28 |     await expect(page.locator('h3:has-text("Test Card")')).toBeVisible();
   29 |     await expect(page.locator('span:has-text("Test Category")')).toBeVisible();
   30 |     await expect(page.locator('span:has-text("Rare")')).toBeVisible();
   31 |     await expect(page.locator('span:has-text("75/100")')).toBeVisible();
   32 |   });
   33 |
   34 |   test("should edit an existing card", async ({ page }) => {
   35 |     // First create a card
   36 |     await page.fill('input[name="name"]', "Card to Edit");
   37 |     await page.fill('input[name="image"]', "https://picsum.photos/200/300");
   38 |     await page.fill('input[name="category"]', "Edit Test");
   39 |     await page.selectOption('select[name="rarity"]', "Common");
   40 |     await page.fill('input[name="year"]', "2022");
   41 |     await page.fill('textarea[name="description"]', "This card will be edited");
   42 |     await page.fill('input[name="powerLevel"]', "50");
   43 |     await page.click('button[type="submit"]');
   44 |
   45 |     // Verify card was created
   46 |     await expect(page.locator('h3:has-text("Card to Edit")')).toBeVisible();
   47 |
   48 |     // Hover over the card to see the edit button
   49 |     await page.hover('h3:has-text("Card to Edit")');
   50 |
   51 |     // Click the edit button
   52 |     await page.click("text=Edit");
   53 |
   54 |     // Modify the card
   55 |     await page.fill('input[name="name"]', "Edited Card");
   56 |     await page.selectOption('select[name="rarity"]', "Epic");
   57 |     await page.fill('input[name="powerLevel"]', "90");
   58 |
   59 |     // Save the changes
   60 |     await page.click('button:has-text("Save Changes")');
   61 |
   62 |     // Verify the card was updated
   63 |     await expect(page.locator('h3:has-text("Edited Card")')).toBeVisible();
   64 |     await expect(page.locator('span:has-text("Epic")')).toBeVisible();
   65 |     await expect(page.locator('span:has-text("90/100")')).toBeVisible();
   66 |   });
   67 |
   68 |   test("should delete a card", async ({ page }) => {
   69 |     // First create a card
   70 |     await page.fill('input[name="name"]', "Card to Delete");
   71 |     await page.fill('input[name="image"]', "https://picsum.photos/200/300");
   72 |     await page.fill('input[name="category"]', "Delete Test");
   73 |     await page.selectOption('select[name="rarity"]', "Common");
   74 |     await page.fill('input[name="year"]', "2022");
   75 |     await page.fill(
   76 |       'textarea[name="description"]',
   77 |       "This card will be deleted"
   78 |     );
   79 |     await page.fill('input[name="powerLevel"]', "50");
   80 |     await page.click('button[type="submit"]');
   81 |
   82 |     // Verify card was created
   83 |     await expect(page.locator('h3:has-text("Card to Delete")')).toBeVisible();
   84 |
   85 |     // Hover over the card to see the delete button
   86 |     await page.hover('h3:has-text("Card to Delete")');
   87 |
   88 |     // Delete the card (handle confirmation dialog if it exists)
   89 |     page.on("dialog", (dialog) => dialog.accept());
   90 |     await page.click("text=Delete");
   91 |
   92 |     // Verify the card was deleted (it should no longer be visible)
   93 |     await expect(
   94 |       page.locator('h3:has-text("Card to Delete")')
   95 |     ).not.toBeVisible();
   96 |   });
   97 |
   98 |   test("should save and load cards from localStorage", async ({ page }) => {
   99 |     // Create a card
  100 |     await page.fill('input[name="name"]', "Persistent Card");
  101 |     await page.fill('input[name="image"]', "https://picsum.photos/200/300");
  102 |     await page.fill('input[name="category"]', "Storage Test");
  103 |     await page.selectOption('select[name="rarity"]', "Legendary");
  104 |     await page.fill('input[name="year"]', "2025");
  105 |     await page.fill(
  106 |       'textarea[name="description"]',
```