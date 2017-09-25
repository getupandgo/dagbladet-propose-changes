const express = require('express')
const config = require('config')
const winston = require('winston')

const startup = require('./startup')

const app = express()

startup(app)
  .then(app => {
    app.listen(config.get('port'), config.get('hostname'), () => {
      winston.info('Server listening on port %s', config.get('port'))
    })
  })
