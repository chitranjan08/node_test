const puppeteer = require('puppeteer')

exports.webScrapper=async (req,res) =>{
   try {
       const URL = 'https://time.com/'
       const browser = await puppeteer.launch()
       const page = await browser.newPage()

       await page.goto(URL)
       let data = await page.evaluate(() => {
           let results = []
           let items = document.querySelectorAll('.latest-stories__item a')
           console.log("item", items)
           items.forEach((item) => {
               results.push({
                   url: item.getAttribute('href'),
                   title: item.querySelector('.latest-stories__item-headline').innerText,
               })
           })
           return results 
       })

       console.log("chitranjan",data)
       await browser.close()
       return res.send(data);

   } catch (error) {
       console.error(error)
   }
}

// tutorial()