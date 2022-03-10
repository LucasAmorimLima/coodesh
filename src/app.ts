import express, { json } from 'express'
import { mongooseConnect } from './main/config/mongooseConfig'
import articles from './main/routes/articles'

mongooseConnect()
const app = express()
app.use(json())
app.use(articles)

export default app
