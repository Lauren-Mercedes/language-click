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

// Function to enter the game
async function enterGame(){
 // enter the game
  await page.getByRole('button', { name: 'click here to start the game' }).click();
// Check language selection page loads
  await page.goto('https://lauren-mercedes.github.io/language-click/language.html');
}

// Function to select Spanish
async function selectSpanish(){  
  await page.getByRole('button', { name: 'click here to learn Spanish' }).click();
  // Check the level selection page loads
   await page.goto('https://lauren-mercedes.github.io/language-click/level.html');}

   // Function to select French
async function selectFrench(){  
  await page.getByRole('button', { name: 'click here to learn French' }).click();
  // Check the level selection page loads
   await page.goto('https://lauren-mercedes.github.io/language-click/level.html');}

   // Function to select Italian
async function selectItalian(){  
  await page.getByRole('button', { name: 'click here to learn Italian' }).click();
  // Check the level selection page loads
   await page.goto('https://lauren-mercedes.github.io/language-click/level.html');}

   // Function to select beginner level
async function selectBeginner(){
  await page.getByRole('button', { name: 'click here for beginner level' }).click();
  // Check the questions page loads
  await page.goto('https://lauren-mercedes.github.io/language-click/questions.html');
}

//function to select intermediate level
async function selectIntermediate(){
  await page.getByRole('button', { name: 'click here for intermediate level' }).click();
  // Check the questions page loads
  await page.goto('https://lauren-mercedes.github.io/language-click/questions.html');
}

//function to select advanced level
async function selectAdvanced(){
  await page.getByRole('button', { name: 'click here for advanced level' }).click();
  // Check the questions page loads
  await page.goto('https://lauren-mercedes.github.io/language-click/questions.html');
}
   
  // Navigate to Language Click home page
  await page.goto('https://lauren-mercedes.github.io/language-click/');
  // Call the function to check the instructions pop-up for the Home page
  await instructionsCheck();

  // Enter the level selection page via each language
  // Enter the game
  await enterGame();
  // Spanish
  await selectSpanish();
    // Check the instructions pop-up for the level selection page
    await instructionsCheck();
  // Return to start
  await returnCheck();
//beginner
  // Enter the game again
  await enterGame();
  // Spanish
  await selectSpanish();
  // Select beginner level
  await selectBeginner();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
// intermediate
await enterGame();
  // Spanish
  await selectSpanish();
  // Select intermediate level
  await selectIntermediate();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
// advanced
await enterGame();
  // Spanish
  await selectSpanish();
  // Select advanced level
  await selectAdvanced();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();

// Enter the game again
await enterGame();
  // French
  await selectFrench();
  // Check the instructions pop-up for the level selection page
  await instructionsCheck();
  // Return to start
  await returnCheck();
  //beginner
  // Enter the game again
  await enterGame();
  // French
  await selectFrench();
  // Select beginner level
  await selectBeginner();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
// intermediate
await enterGame();
  // French
  await selectFrench();
  // Select intermediate level
  await selectIntermediate();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
// advanced
await enterGame();
  // French
  await selectFrench();
  // Select advanced level
  await selectAdvanced();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();      

// Enter the game again
await enterGame();
  // Italian
  await selectItalian();
  // Check the instructions pop-up for the level selection page
  await instructionsCheck();
  // Return to start
  await returnCheck();
  //beginner
  // Enter the game again
  await enterGame();
  // Italian
  await selectItalian();
  // Select beginner level
  await selectBeginner();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
// intermediate
await enterGame();
  // Italian
  await selectItalian();
  // Select intermediate level
  await selectIntermediate();
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
// advanced
await enterGame();
  // Italian
  await selectItalian();
  // Select advanced level
  await selectAdvanced(); 
  // Check the instructions pop-up for the questions page
  await instructionsCheck();
  // Return to start
  await returnCheck();
  });