import createRequest from '../core/request'
console.log(createRequest)

let hello = (params, req) => {
  return createRequest(req).post('/api/example/hello', params)
}

export default {
  hello
}
