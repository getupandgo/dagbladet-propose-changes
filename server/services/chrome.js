const HeadlessChrome = require('simple-headless-chrome')
const config = require('config')

const browser = new HeadlessChrome(config.get('chrome'))

module.exports = browser.init()
