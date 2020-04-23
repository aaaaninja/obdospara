import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({devtools: true})
  const page = await browser.newPage()

  await page.goto('https://www.dospara.co.jp/5shopping/search.php?ft=axf&gosearch=%E6%A4%9C%E7%B4%A2')

  await browser.close()
})()