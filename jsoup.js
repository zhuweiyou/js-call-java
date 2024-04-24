const java = require('./java.js');

const Jsoup = java.import('org.jsoup.Jsoup')

const doc = Jsoup.connect("https://www.baidu.com/").get()
console.log(doc.title());
