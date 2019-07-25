import layouts from '../layouts'
import example from './example/index'

let bussinessRouter = {
  path: '/',
  component: layouts.getDefaultLayout(),
  children: [
    example
  ]
}

let routes = [bussinessRouter]

export default routes
