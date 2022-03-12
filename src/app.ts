import express, { json } from 'express'
import { schedule } from 'node-cron'
import { cronJob } from './infra/cronjob/cron'
import { mongooseConnect } from './main/config/mongooseConfig'
import articles from './main/routes/articles'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

mongooseConnect()
const app = express()
app.use(json())
app.use(articles)
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))
schedule("* * * * *", cronJob)
export default app
//0 6 * * *