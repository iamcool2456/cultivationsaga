const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('pageerror', (err) => consoleErrors.push(`pageerror: ${String(err)}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`console.error: ${msg.text()}`);
  });

  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  await page.goto('http://127.0.0.1:5173/?qa=1', { waitUntil: 'domcontentloaded' });

  const fateHeading = page.getByRole('heading', { name: /Fate Roll/i });
  const usernameInput = page.locator('#intro-username-input');
  const usernameConfirm = page.locator('#intro-username-confirm');
  const genderMale = page.locator('button.intro-gender-option', { hasText: /Male cultivator silhouette/i });
  const genderFemale = page.locator('button.intro-gender-option', { hasText: /Female cultivator silhouette/i });
  const introContinue = page.locator('button.intro-continue', { hasText: /^Continue$/ });

  const start = Date.now();
  while (!(await fateHeading.isVisible().catch(() => false))) {
    if (Date.now() - start > 10_000) break;

    if (await usernameInput.isVisible().catch(() => false)) {
      await usernameInput.fill('Tester');
      if (await usernameConfirm.isEnabled().catch(() => false)) {
        await usernameConfirm.click();
      }
    } else if (await genderMale.isVisible().catch(() => false)) {
      await genderMale.click();
    } else if (await genderFemale.isVisible().catch(() => false)) {
      await genderFemale.click();
    } else if (await introContinue.isVisible().catch(() => false)) {
      await introContinue.click();
    }

    await page.waitForTimeout(150);
  }

  const visible = await fateHeading.isVisible().catch(() => false);
  console.log('Fate heading visible:', visible);

  if (!visible) {
    console.log('Console/page errors:', consoleErrors);
    const content = await page.content();
    console.log('Page content snippet:\n', content.slice(0, 1200));
  }

  await browser.close();
})();
