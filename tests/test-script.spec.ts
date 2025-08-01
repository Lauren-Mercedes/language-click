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
  // instructions text to be checked
  let instructions = 
`Instructions
Select the language you want to learn.
Select the level:
Beginner; you're new to this language
Intermediate; you know the basics
Advanced; you want to be able to have a conversation with a local
Click on the audio to hear it play
Click on the translation you think is correct
To change your level exit and return to the start, please note this resets your counters.`
// Function to check the instructions pop-up
async function instructionsCheck(){
  // Open Instructions pop-up
  await page.getByRole('button', { name:'open instruction pop up'}).click();
  // Check the pop-up is visible and matches the expected text
  await expect(page.locator('#popup')).toContainText(instructions);
    // Close the pop-up
  await page.getByRole('button', { name: 'close instruction pop up' }).click();
  // Check the pop-up is hidden after closing
  await expect(page.locator('#popup')).toBeHidden();}

  // Function to check the return to start button works
async function returnCheck(){
  // Click return to start button
     await page.getByRole('button', { name: 'return to the start' }).click();
    //  check the page has returned to the home page
    await page.goto('https://lauren-mercedes.github.io/language-click/index.html');
}

  // Call the function to check the instructions pop-up for the Home page
  await instructionsCheck();

    // enter the game
  await page.getByRole('button', { name: 'click here to start the game' }).click();
// Check language selection page loads
  await page.goto('https://lauren-mercedes.github.io/language-click/language.html');
  // Check the instructions pop-up for the language selection page
  await instructionsCheck();

  // Enter the level selection page via each language
  // Spanish
  await page.getByRole('button', { name: 'click here to learn Spanish' }).click();
  // Check the level selection page loads
   await page.goto('https://lauren-mercedes.github.io/language-click/language.html');
    // Check the instructions pop-up for the level selection page
    await instructionsCheck();
  // Return to start
  await returnCheck();
  });