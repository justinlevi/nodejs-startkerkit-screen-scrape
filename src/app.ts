import * as cheerio from 'cheerio'
import axios from 'axios'

const main = async () => {
  const { data: html } = await axios.get('https://ny.gov')
  const $ = cheerio.load(html)
  const hrefs: String[] = []
  $('a').each((index, { attribs: { href } }) => {
    if (!href) {
      return
    }
    if (href && !href.startsWith('#') && !href.startsWith('http')) {
      hrefs.push(href)
    }
  })
  console.log(hrefs)
}

main()
