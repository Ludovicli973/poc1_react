// @ts-check
const { test, expect } = require("@playwright/test");

test("test from the homepage to the detail page", async ({ page }) => {
  // Navigate to the home page
  await page.goto("http://localhost:3000/");

  // expect to have 30 animes
  await expect(page.getByAltText("poster")).toHaveCount(30);

  // fill the search bar with "Fullmetal"
  await page.getByPlaceholder("Search").fill("Fullmetal");

  // click on the search button
  await page.locator('button:has-text("Search")').click();

  // expect to only have 1 anime
  await expect(page.getByAltText("poster")).toHaveCount(1);

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

  // expect to have the right image for the anime :"Fullmetal Alchemist: Brotherhood"
  await expect(
    page.getByRole("img", { name: "Fullmetal Alchemist: Brotherhood" })
  ).toBeVisible();

  // expect to have a synopsis
  const synopsis = `After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world`;
  await expect(page.getByText(synopsis)).toBeVisible();
});
