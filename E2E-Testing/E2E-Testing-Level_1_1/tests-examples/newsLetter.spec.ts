import { test, expect } from "@playwright/test";

test("Newsletter subscription flow shows success message", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const emailInput = page.getByTestId("email-input");
  const agreeCheckbox = page.getByTestId("agree-checkbox");
  const submitButton = page.getByTestId("submit-button");

  await emailInput.fill("user@example.com");
  await agreeCheckbox.check();
  await submitButton.click();

  await expect(page.getByTestId("success-message")).toHaveText(
    "Thank you! You are now subscribed."
  );
});
