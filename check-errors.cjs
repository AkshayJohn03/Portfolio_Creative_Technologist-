const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', error => {
            console.log('PAGE ERROR:', error.message);
        });
        page.on('requestfailed', request => {
            console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
        });

        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });

        await new Promise(r => setTimeout(r, 2000));
        await browser.close();
    } catch (err) {
        console.error('Script Error:', err);
    }
})();
