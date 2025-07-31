// import tests from Playwright
import { test, expect } from '@playwright/test';
/**
 * test for overview of features on the home page
 * test compares the main content of the home page to a snapshot
 * looking for:
 * the main heading "Language Click"
 * a paragraph describing the game
 * a button to start the game
 */
test('test', async ({ page }) => {
  await page.goto('https://lauren-mercedes.github.io/language-click/');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - main:
      - heading "Language Click" [level=1]
      - paragraph: Welcome to Language Click, the language learning game you click your way through, learn your selected language with audio snippet questions. Access the instructions at any time in the top right and press start to get going on your language journey.
      - button "click here to start the game"
    `);
  });