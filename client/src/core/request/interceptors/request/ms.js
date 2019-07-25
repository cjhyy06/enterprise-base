import uuid from 'uuid'
import _ from 'lodash'

export default [
  config => {
    config.requestInfo = {
      requestId: uuid(),
      start: new Date().getTime()
    }
    if (config.headers && config.headers['user-id']) {
      config.requestInfo.userId = config.headers['user-id']
    }

    return config
  },
  error => {
    if (error.config && error.config.requestInfo) {
      let requestInfo = _.pick(error.config, ['requestInfo'])
      requestInfo.end = new Date().getTime()
      requestInfo.elapsed = requestInfo.end - requestInfo.start
      requestInfo.url = error.config.url
      requestInfo.stage = 'request'

      console.log(requestInfo.requestId, requestInfo)
    } else {
      console.log(error.message, error)
    }
    return Promise.reject(error)
  }
]
