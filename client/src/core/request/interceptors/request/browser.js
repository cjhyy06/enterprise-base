import uiService from '../../../ui-service'

export default [
  config => {
    if (config.showProgress !== false) {
      config.showProgress = true
      // uiService.loading.start()
    }
    if (config.showError !== false) {
      config.showError = true
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest' // setup xhr flag
    config.withCredentials = true
    return config
  },
  error => {
    if (error && error.config && error.config.showProgress) {
      // uiService.loading.done()
    }
    if (error && error.config && error.config.showError) {
      uiService.toastr.error('请求错误', '错误')
    }
    return Promise.reject(error)
  }
]
