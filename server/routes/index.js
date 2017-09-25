const express = require('express')
const articleController = require('../controllers/article')
const editController = require('../controllers/edit')

const router = express.Router()
const apiRouter = express.Router()

router.use('/api', apiRouter)

apiRouter.get('/article', articleController.parse)

apiRouter.get('/edit', editController.get)
apiRouter.post('/edit', editController.saveEdit)
apiRouter.patch('/edit/:id', editController.approve)
apiRouter.delete('/edit/:id', editController.delete)

module.exports = router
