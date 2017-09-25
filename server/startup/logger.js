const winston = require('winston')
const morgan = require('morgan')

winston.configure({
  transports: [
    new (winston.transports.Console)({
      level: 'info',
      colorize: true,
      label: 'Backend'
    })
  ]
})

const allReqLogger = morgan('combined', {
  skip: (req, res) => {
    return res.statusCode > 500
  },
  stream: {
    write: message => winston.info(message.trim())
  }
})

const errReqLogger = morgan('combined', {
  skip: (req, res) => {
    return res.statusCode <= 500
  },
  stream: {
    write: message => winston.error(message.trim())
  }
})

module.exports = app => {
  app.use(allReqLogger)
  app.use(errReqLogger)
}
