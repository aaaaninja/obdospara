import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({devtools: true})
  const page = await browser.newPage()

  await page.goto('https://www.dospara.co.jp/5shopping/search.php?ft=axf&gosearch=%E6%A4%9C%E7%B4%A2', { waitUntil: 'domcontentloaded' })
  const axf = await page.$eval('#tabContents2', table => {
    const axf_header = [...table.querySelectorAll('tr')].find(v => v.textContent && v.textContent.match(/アウトレット/))
    const is_axf = axf_header && axf_header.nextElementSibling && [...axf_header.nextElementSibling.querySelectorAll('td')].find(v => v.textContent && v.textContent.match(/在庫切れ/))
    return is_axf ? is_axf.textContent && is_axf.textContent.trim() : 'hukkatsu'
  })
  console.log(axf)

  await browser.close()
})()