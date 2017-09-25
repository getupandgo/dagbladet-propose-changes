const Promise = require('bluebird')

const logger = require('./logger')
const database = require('./database')
const middleware = require('./middleware')

module.exports = app =>
  Promise
    .each([
      logger,
      database,
      middleware
    ], func => func(app))
    .then(() => app)
