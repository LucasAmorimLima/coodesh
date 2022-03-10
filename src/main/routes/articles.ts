import { Router } from 'express'
import { adaptRoute } from '../adapters/articlesExpressAdapter'
import { makeArticlesController } from '../factories/makeArticlesController'

const articlesRouter = Router()

const articlesController = adaptRoute(makeArticlesController())
articlesRouter.get('/', articlesController.message)
articlesRouter.post('/articles', articlesController.create)
articlesRouter.get('/articles', articlesController.index)
articlesRouter.get('/articles/:id', articlesController.show)
articlesRouter.put('/articles/:id', articlesController.update)
articlesRouter.delete('/articles/:id', articlesController.delete)

export default articlesRouter
