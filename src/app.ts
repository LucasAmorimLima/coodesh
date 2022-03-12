import express, { json } from 'express'
import { schedule } from 'node-cron'
import {cronJob} from './infra/cronjob/cron'
import { mongooseConnect } from './main/config/mongooseConfig'
import articles from './main/routes/articles'

mongooseConnect()
const app = express()
app.use(json())
app.use(articles)
schedule("* * * * *",cronJob)
export default app
