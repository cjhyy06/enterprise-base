import example from './api/example'

export default app => {
  app.use('/api/*', (req, res, next) => {
    // here can add common strategy
    next()
  })
  app.use('/api/example', example)
}
