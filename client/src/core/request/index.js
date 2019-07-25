import axios from 'axios'
import queryString from '../query-string'
import requestConfig from './interceptors/request/browser'
import responseConfig from './interceptors/response/browser'

let requestResolve = config => config
let requestReject = error => Promise.reject(error)

let responseResolve = response => response
let responseReject = error => Promise.reject(error);

[requestResolve, requestReject] = requestConfig;
[responseResolve, responseReject] = responseConfig

// if (!__BROWSER__) {
//   [requestResolve, requestReject] = require('./interceptors/request/node');
//   [responseResolve, responseReject] = require('./interceptors/response/node')
// }

const _setupinterceptors = (axios) => {
  // setup interceptor for request
  axios.interceptors.request.use(requestResolve, requestReject)
  // setup interceptor for response
  axios.interceptors.response.use(responseResolve, responseReject)
}

let createRequest = req => {
  let apiRoot = `${window.location.protocol}//${window.location.host}`
  const clientRequest = axios.create({
    baseURL: apiRoot,
    paramsSerializer: function (params) {
      return queryString.stringify(params)
    },
    timeout: 30000
  })
  _setupinterceptors(clientRequest)
  return clientRequest
}

// if (!__BROWSER__) {
//   let port = require('../../../port-settings').default.backendPort
//   let apiRoot = `http://127.0.0.1:${port}`

//   createRequest = (req) => {
//     if (!req) {
//       throw new Error('req must not be null')
//     }
//     let config = {
//       baseURL: apiRoot,
//       paramsSerializer: function (params) {
//         return queryString.stringify(params)
//       },
//       timeout: 30000
//     }
//     if (req.headers) {
//       config.headers = req.headers
//       config.headers['x-request-from-internal-server'] = true
//       config.headers['x-request-client-ip-pass-by-node-server'] = req.requestContext.ip
//     }
//     let serverRequest = axios.create(config)
//     _setupinterceptors(serverRequest)
//     return serverRequest
//   }
// }

export default createRequest
