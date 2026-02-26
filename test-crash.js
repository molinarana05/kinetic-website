const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    page.on('pageerror', error => {
        console.log('PAGE ERROR:', error.message);
    });

    page.on('console', msg => {
        if (msg.type() === 'error')
            console.log('CONSOLE ERROR:', msg.text());
    });

    try {
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
        console.log('Page loaded successfully without immediate throw.');

        // Attempt clicking things to surface errors if page loads fine
        const starts = await page.locator('button:has-text("START GAME")').all();
        console.log(`Found ${starts.length} start buttons`);
        for (const btn of starts) {
            await btn.click();
            await page.waitForTimeout(500);
        }

        const heads = await page.locator('button:has-text("HEADS")').all();
        console.log(`Found ${heads.length} heads buttons`);
        if (heads.length > 0) {
            await heads[0].click();
            await page.waitForTimeout(500);
        }

    } catch (err) {
        console.error('Playwright caught error: ', err);
    } finally {
        await browser.close();
    }
})();
