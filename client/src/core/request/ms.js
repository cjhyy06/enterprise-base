import axios from 'axios'
import config from '../../config/server'
import requestInterceptor from './interceptors/request/ms'
import responseInterceptor from './interceptors/response/ms'

export const createMsRequest = (endpoint, req, headers) => {
  let requestConfig = {
    baseURL: config.api.ms.replace('{endpoint}', endpoint),
    // baseURL: 'http://localhost:8888',
    headers: {},
    timeout: 30000
  }

  if (headers) {
    requestConfig.headers = headers
  }

  if (req && req.session && req.session.user) {
    if (req.session.user.userId && !requestConfig.headers['user-id']) {
      requestConfig.headers['user-id'] = req.session.user.userId
    }
  }

  // requestConfig.headers['tenant-name'] = 'xuesong'

  requestConfig.requestContext = req.requestContext

  const client = axios.create(requestConfig)
  // setup interceptor for request
  const [requestResolve, requestReject] = requestInterceptor
  client.interceptors.request.use(requestResolve, requestReject)
  // setup interceptor for response
  const [responseResolve, responseReject] = responseInterceptor
  client.interceptors.response.use(responseResolve, responseReject)

  return client
}

export const createDefaultMsRequest = (req, headers) => {
  let endpoint = 'backend-htsec-api'
  return createMsRequest(endpoint, req, headers)
}

export const createwebbRequest = (req, headers) => {
  return createMsRequest('', req, headers)
}

export default {
  createMsRequest,
  createDefaultMsRequest,
  createwebbRequest
}
