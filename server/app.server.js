const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const puppeteer = require('puppeteer')

const app = express();

app.use(cors({ origin: true }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require('../routes/router.index.js'));

// app.get('/testing',function(req,res){
//     (async () => {

//         const browser = await puppeteer.launch({
//             headless: true
//         });
//         const page = await browser.newPage();
//         await page.goto('https://www.tapology.com/regions',{waitUntil: 'domcontentloaded'});
//         const example  = await page.$('.latest-stories__item');
//         const scrapedData = await page.evaluate(() =>
//         Array.from(document.querySelectorAll('latest-stories__item-headline a'))
//           .map(link => ({
//             title: link.innerHTML,
//             link: link.getAttribute('href')
//           }))
//       )
//       console.log('scrapedData',scrapedData);
//         await page.close();
//         await browser.close();
//         return res.send(scrapedData);

//     })();
// });

module.exports = app;