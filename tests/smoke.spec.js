const { test, expect } = require('@playwright/test')

async function bootToGame(page, { qa = true } = {}) {
  const consoleErrors = []
  page.on('pageerror', (err) => consoleErrors.push(String(err)))
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })

  // Ensure deterministic “new run” state.
  await page.addInitScript(() => {
    localStorage.clear()
    sessionStorage.clear()
  })

  await page.goto(qa ? '/?qa=1' : '/', { waitUntil: 'domcontentloaded' })

  // Drive the intro flow deterministically:
  // loading (auto) -> username modal -> gender modal -> ready -> Continue -> Fate Roll
  const fateHeading = page.getByRole('heading', { name: /Fate Roll/i })
  const usernameInput = page.locator('#intro-username-input')
  const usernameConfirm = page.locator('#intro-username-confirm')
  const genderMale = page.locator('button.intro-gender-option', { hasText: /Male cultivator silhouette/i })
  const genderFemale = page.locator('button.intro-gender-option', { hasText: /Female cultivator silhouette/i })
  const introContinue = page.locator('button.intro-continue', { hasText: /^Continue$/ })

  const start = Date.now()
  while (!(await fateHeading.isVisible().catch(() => false))) {
    if (Date.now() - start > 20_000) break

    if (await usernameInput.isVisible().catch(() => false)) {
      await usernameInput.fill('Tester')
      if (await usernameConfirm.isEnabled().catch(() => false)) {
        await usernameConfirm.click()
      }
    } else if (await genderMale.isVisible().catch(() => false)) {
      await genderMale.click()
    } else if (await genderFemale.isVisible().catch(() => false)) {
      // Fallback: pick female if male isn't present for some reason.
      await genderFemale.click()
    } else if (await introContinue.isVisible().catch(() => false)) {
      await introContinue.click()
    }

    await page.waitForTimeout(150)
  }

  await expect(fateHeading).toBeVisible()
  await page.getByRole('button', { name: /^Continue/i }).click()
  await expect(page.locator('#side-panel-toggles')).toBeVisible()

  return { consoleErrors }
}

async function openPanel(page, title) {
  const panelIdByTitle = {
    Stats: '#stats-panel',
    Inventory: '#inventory-panel',
    Actions: '#actions-panel',
    'Character Profile': '#profile-panel',
    Sect: '#sect-panel',
    Quests: '#quest-panel',
    Moves: '#moves-panel',
    Shop: '#shop-panel'
  }

  const panelSel = panelIdByTitle[title]
  if (panelSel) {
    const panel = page.locator(panelSel)
    if (await panel.isVisible().catch(() => false)) return
  }

  await page.locator(`#side-panel-toggles button[title="${title}"]`).click()
}

function parsePrice(text) {
  const raw = String(text || '').trim()
  const m = raw.match(/^(\d+)\s+(COPPER|SILVER|GOLD|LOW SPIRIT STONES)$/i)
  if (!m) return null
  return { amount: Number(m[1]), currency: m[2].toUpperCase() }
}

function assertPriceInRange(price) {
  expect(price).toBeTruthy()
  if (!price) return
  if (price.currency === 'COPPER') {
    expect(price.amount).toBeGreaterThanOrEqual(100)
    expect(price.amount).toBeLessThanOrEqual(125)
  } else if (price.currency === 'SILVER') {
    expect(price.amount).toBeGreaterThanOrEqual(60)
    expect(price.amount).toBeLessThanOrEqual(90)
  } else if (price.currency === 'GOLD') {
    expect(price.amount).toBeGreaterThanOrEqual(20)
    expect(price.amount).toBeLessThanOrEqual(30)
  } else if (price.currency === 'LOW SPIRIT STONES') {
    expect(price.amount).toBeGreaterThanOrEqual(5)
    expect(price.amount).toBeLessThanOrEqual(10)
  } else {
    throw new Error(`Unexpected currency: ${price.currency}`)
  }
}

test('boots into main game and actions run', async ({ page }) => {
  const { consoleErrors } = await bootToGame(page)

  await openPanel(page, 'Actions')
  const actionsPanel = page.locator('#actions-panel')
  await expect(actionsPanel).toBeVisible()

  const firstAction = actionsPanel.locator('button.action-button:not([disabled])').first()
  await expect(firstAction).toBeVisible()
  await firstAction.click()

  await page.waitForFunction(
    (el) => el && el.getAttribute('data-running') === '1',
    await firstAction.elementHandle()
  )

  expect(consoleErrors, consoleErrors.join('\n')).toEqual([])
})

test('opening Inventory does not reposition Actions panel', async ({ page }) => {
  await bootToGame(page)

  await openPanel(page, 'Actions')
  const actionsPanel = page.locator('#actions-panel')
  await expect(actionsPanel).toBeVisible()

  const before = await actionsPanel.boundingBox()
  expect(before).toBeTruthy()

  await openPanel(page, 'Inventory')
  await expect(page.locator('#inventory-panel')).toBeVisible()

  const after = await actionsPanel.boundingBox()
  expect(after).toBeTruthy()

  // Actions panel should not be forcibly moved below Inventory.
  expect(Math.abs(after.y - before.y)).toBeLessThanOrEqual(2)
})

test('cloud story: battle -> library -> options appear and behave', async ({ page }) => {
  await bootToGame(page)

  // Follow the intended Cloud-sect story chain so downstream buttons exist.
  await page.evaluate(() => {
    window.__qa.setState({ stamina: 999, luck: 60 })
    window.cloudStoryLeaderOffers() // joins Cloud sect + injects "Arrival Among Clouds."
    window.cloudStoryArrivalAmongClouds() // injects "Confronted by an Outer Disciple."
    window.cloudStoryConfrontedByOuterDisciple() // injects "Battle starts."
    window.cloudStoryBattleStarts()
    window.__qa.winCombatNow()
  })

  await openPanel(page, 'Actions')
  const actionsPanel = page.locator('#actions-panel')
  await expect(actionsPanel).toBeVisible()

  const libraryBtn = actionsPanel.getByRole('button', { name: /Exploring the Sect Library\.?/i })
  await expect(libraryBtn).toBeVisible()

  // After victory, library action should exist; finish it instantly.
  await libraryBtn.click()
  await page.evaluate(() => window.__qa.finishTimedActionNow('special', 'Exploring the Sect Library.'))

  // Validate options exist.
  await openPanel(page, 'Actions')
  const demonManualBtn = actionsPanel.locator('button.action-button.special', { hasText: /Find heavenly demon manual\.?/i })
  const findNothingBtn = actionsPanel.locator('button.action-button.special', { hasText: /Find nothing\.?/i })

  await expect(demonManualBtn).toBeVisible()
  await expect(findNothingBtn).toBeVisible()
  await expect(demonManualBtn).toBeEnabled()

  // "Find nothing" should disappear after completion.
  await findNothingBtn.click()
  await page.evaluate(() => window.__qa.finishTimedActionNow('special', 'Find nothing.'))
  await expect(actionsPanel.locator('button.action-button.special', { hasText: /Find nothing\.?/i })).toHaveCount(0)
})

test('sect pyramid: can start duel and win updates rank', async ({ page }) => {
  await bootToGame(page)

  await page.evaluate(() => {
    window.__qa.setState({ cultivationMajorIndex: 1 })
    window.joinHeavenlyDemonSect()
  })

  await openPanel(page, 'Sect')
  const sectPanel = page.locator('#sect-panel')
  await expect(sectPanel).toBeVisible()

  await sectPanel.getByRole('button', { name: /Sect Ranks/i }).click()
  await expect(sectPanel.getByText(/SECT RANKS/i)).toBeVisible()

  // Start an easy duel (outer 6) and win instantly.
  await page.evaluate(() => window.__qa.startSectPyramidDuel('outer', 6))
  await page.evaluate(() => window.__qa.winCombatNow())

  const st = await page.evaluate(() => window.__qa.getState())
  expect(st.sectRankLayer).toBe('outer')
  expect(Number(st.sectRankNumber)).toBe(6)
})

test('quest: can complete end-to-end (auto-resolve steps)', async ({ page }) => {
  await bootToGame(page)

  await page.evaluate(() => {
    window.__qa.setState({ cultivationMajorIndex: 1, stamina: 999 })
    window.joinHeavenlyDemonSect()
    window.__qa.ensureQuest()
  })

  await openPanel(page, 'Quests')
  let questPanel = page.locator('#quest-panel')
  await expect(questPanel).toBeVisible()
  await questPanel.getByRole('button', { name: /^START$/ }).click()

  for (let i = 0; i < 40; i++) {
    await openPanel(page, 'Quests')
    questPanel = page.locator('#quest-panel')
    if (await questPanel.getByText(/Quest completed/i).isVisible().catch(() => false)) break

    const rush = questPanel.getByRole('button', { name: /^RUSH$/ })
    const retreat = questPanel.getByRole('button', { name: /^RETREAT$/ })
    const hasRush = await rush.isVisible().catch(() => false)
    if (hasRush) {
      await rush.click()
      await page.evaluate(() => window.__qa.winCombatNow())
      await openPanel(page, 'Quests')
      continue
    }

    // Progress step: finish its timer immediately via the progress key.
    const fill = questPanel.locator('.quest-step-fill[data-progress-key]').first()
    if (await fill.isVisible().catch(() => false)) {
      const key = await fill.getAttribute('data-progress-key')
      expect(key).toBeTruthy()
      const [type, ...rest] = String(key).split(':')
      const name = rest.join(':')
      await page.evaluate(({ type, name }) => window.__qa.finishTimedActionNow(type, name), { type, name })
      continue
    }

    // If neither is present, force a rerender and try again.
    await page.evaluate(() => window.__qa.render())
  }

  await openPanel(page, 'Quests')
  await expect(questPanel.getByText(/Quest completed/i)).toBeVisible()
})

test('shops: offers, pricing, buying, insufficient funds, and reset', async ({ page }) => {
  await bootToGame(page)

  // Shop opens on Daily by default (town logic): 6 offers.
  await openPanel(page, 'Shop')
  const shop = page.locator('#shop-panel')
  await expect(shop).toBeVisible()
  await expect(shop.locator('[data-testid="shop-item"]')).toHaveCount(6)

  // Validate each offer has an image and a valid price.
  const shopItems = shop.locator('[data-testid="shop-item"]')
  for (let i = 0; i < 6; i++) {
    const item = shopItems.nth(i)
    await expect(item.locator('img.shop-item-img')).toBeVisible()
    const priceText = await item.locator('.shop-item-price').innerText()
    const price = parsePrice(priceText)
    assertPriceInRange(price)
  }

  // Attempt purchase with insufficient funds.
  await page.evaluate(() => window.__qa.setState({ copper: 0, silver: 0, gold: 0, spiritStonesLow: 0 }))
  await openPanel(page, 'Shop')
  const firstTitle = await shopItems.nth(0).locator('.shop-item-title').innerText()

  const invBefore = await page.evaluate(() => window.__qa.getState().inventory.length)
  await shopItems.nth(0).locator('button.shop-buy-btn').click()
  const invAfter = await page.evaluate(() => window.__qa.getState().inventory.length)
  expect(invAfter).toBe(invBefore)

  // Purchase with sufficient funds.
  await page.evaluate(() => window.__qa.setState({ copper: 9999, silver: 9999, gold: 9999, spiritStonesLow: 9999 }))
  await openPanel(page, 'Shop')
  await shopItems.nth(0).locator('button.shop-buy-btn').click()

  await expect(shopItems.nth(0).locator('button.shop-buy-btn')).toBeDisabled()
  await expect(shopItems.nth(0).locator('button.shop-buy-btn')).toHaveText(/Not for sale/i)

  const inv = await page.evaluate(() => window.__qa.getState().inventory)
  expect(inv.some(i => i && i.kind === 'pill' && String(i.name || '') === String(firstTitle).trim())).toBeTruthy()

  // Reset regenerates offers.
  const idsBefore = await page.evaluate(() => window.__qa.getShopOffers('town').map(o => o.id))
  await page.evaluate(() => window.__qa.forceShopReset('town'))
  await openPanel(page, 'Shop')
  await expect(shop.locator('[data-testid="shop-item"]')).toHaveCount(6)
  const idsAfter = await page.evaluate(() => window.__qa.getShopOffers('town').map(o => o.id))
  expect(idsAfter.join('|')).not.toBe(idsBefore.join('|'))

  // Switch to Hourly shop: 6 offers.
  await openPanel(page, 'Shop')
  await shop.getByRole('button', { name: /HOURLY SHOP/i }).click()
  await expect(shop.locator('[data-testid="shop-item"]')).toHaveCount(6)
})
