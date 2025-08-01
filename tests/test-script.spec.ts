// import tests from Playwright
import { test, expect } from '@playwright/test';

/**
 * test for instructions pop-up
 * test checks instructions pop-up appears when the button is clicked
 * test checks the content of the instructions pop-up
 * looking for:
 * a button to close the pop-up
 * a heading "Instructions"
 * a list of instructions for the game
 * a paragraph about changing the level
 * test checks the close button works to close the pop-up
 */
test('test', async ({ page }) => {
  // Navigate to Language Click home page
  await page.goto('https://lauren-mercedes.github.io/language-click/');
  // Open Instructions pop-up
  await page.getByRole('button', { name: 'open instruction pop up' }).click();
  // Check the pop-up is visible and matches the expected snapshot
  await expect(page.locator('#popup')).toMatchAriaSnapshot(`
    - button "close instruction pop up"
    - heading "Instructions" [level=2]
    - list:
      - listitem: Select the language you want to learn.
      - listitem:
        - text: "Select the level:"
        - list:
          - listitem: Beginner; you're new to this language
          - listitem: Intermediate; you know the basics
          - listitem: Advanced; you want to be able to have a conversation with a local
      - listitem: Click on the audio to hear it play
      - listitem: Click on the translation you think is correct
    - paragraph: To change your level exit and return to the start, please note this resets your counters.
    `);
    // Close the pop-up
  await page.getByRole('button', { name: 'close instruction pop up' }).click();
  // Check the pop-up is hidden after closing
  await expect(page.locator('#popup')).toBeHidden();
  });