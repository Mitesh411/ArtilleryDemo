module.exports = { helloFlow };
 
async function helloFlow(page) {
  //
  // The code below is just a standard Playwright script:
  //
  // Go to https://artillery.io/
  await page.goto("https://www.artillery.io/");
  // Click text=Pricing
  await page.click("text=Cloud");
}
