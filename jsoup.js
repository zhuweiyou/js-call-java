const java = require('./java.js');

const Jsoup = java.import('org.jsoup.Jsoup')

const doc = Jsoup.connect("https://www.baidu.com/").get()
console.log(doc.title());

const newsHeadlines = doc.select("*");
// console.log(Object.keys(newsHeadlines));
for (let i = 0; i < newsHeadlines.size(); i++) {
    const headline = newsHeadlines.get(i)
    console.log(headline.attr("title"), headline.absUrl("href"));
}
