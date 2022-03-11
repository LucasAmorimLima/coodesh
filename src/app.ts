import express, { json } from 'express'
import { createOrUpdate } from './cron'
import { mongooseConnect } from './main/config/mongooseConfig'
import articles from './main/routes/articles'

mongooseConnect()
const app = express()
app.use(json())
app.use(articles)
createOrUpdate()
export default app
