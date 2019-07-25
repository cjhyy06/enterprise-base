// import _ from 'lodash'
import { Router } from 'express'
// import { createDefaultMsRequest } from '../core/request/ms'

const router = new Router()

router.get('/hello', (req, res, next) => {
  res.json({ name: 'xuesong', greet: 'hello' })
})

router.post('/hello', (req, res, next) => {
  console.log('eeeeeeeeeeeeeee')
  Promise.resolve({ name: 'xuesong', greet: 'hello' })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
})

export default router
