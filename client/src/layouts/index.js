import authorizedLayout from './authorized/index'
import defaultLayout from './default/index'

let getAuthorizedLayout = () => {
  return authorizedLayout
}

let getDefaultLayout = () => {
  return defaultLayout
}

export default {
  getAuthorizedLayout,
  getDefaultLayout
}
