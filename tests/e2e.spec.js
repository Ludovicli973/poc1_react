// @ts-check
const { test, expect } = require("@playwright/test");

test("test from the homepage to the detail page", async ({ page }) => {
  // Navigate to the home page
  await page.goto("http://localhost:3000/");

  // expect to have 30 animes
  await expect(page.getByAltText("poster")).toHaveCount(30);

  // fill the search bar with "Fullmetal"
  await page.getByPlaceholder("Search...").fill("Fullmetal");

  // click on the search button
  // await page.getByRole("button", { name: "search_button" }).click();
  await page.locator("#search_button").click();

  // expect to have an anime with the title "Fullmetal Alchemist: Brotherhood"
  expect(page.getByText(/Fullmetal Alchemist: Brotherhood/i)).toBeVisible();

  // click on the anime
  await page.getByText(/Fullmetal Alchemist: Brotherhood/i).click();

  // expect to be on the details page
  await expect(page).toHaveURL(/.*details/);

  // expect to have the title "Fullmetal Alchemist: Brotherhood"
  await expect(
    page.getByText("Fullmetal Alchemist: Brotherhood")
  ).toBeVisible();

  // expect to have an image
  await expect(
    page.getByRole("img", { name: "Fullmetal Alchemist: Brotherhood" })
  ).toBeVisible();
});
