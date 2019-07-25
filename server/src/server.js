import Express from 'express'
import routeApi from './router-api'

const consoleLogger = console

const app = new Express()

// attach apis
routeApi(app)

const port = 3000
const host = '127.0.0.1'

app.listen(3000, host, () => {
  consoleLogger.log(`server listening at port:${port}!`)
})
