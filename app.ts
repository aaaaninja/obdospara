import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({headless: false})
  await browser.close()
})()