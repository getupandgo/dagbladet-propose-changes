const chromeInstance = require('../services/chrome')

function getArticleContent () {
  const paragraphElems = document.querySelectorAll('p')
  const paragraphs = Array.from(paragraphElems).map(phar => phar.innerText)
  const title = document.getElementsByTagName('h2')[0].innerText

  return {
    title,
    paragraphs
  }
}

exports.parse = async function (req, res, next) {
  const articleUrl = req.query.url

  try {
    const browser = await chromeInstance
    const mainTab = await browser.newTab({ privateTab: false })
    await mainTab.goTo(articleUrl)
    const parsedArticle = await mainTab.evaluate(getArticleContent)

    res.json(parsedArticle)
  } catch (err) {
    next(err)
  }
}
