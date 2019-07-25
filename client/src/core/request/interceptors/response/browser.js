import _ from 'lodash'
import uiService from '../../../ui-service'

let errorMessage = '系统开小差了，请稍后再试'

let errorToastr = _.throttle(() => {
  uiService.toastr.error(errorMessage)
}, 1000, { leading: true, trailing: false })

let infoToastr = _.throttle(() => {
  uiService.toastr.info(errorMessage)
}, 1000, { leading: true, trailing: false })

export default [
  response => {
    if (response && response.config && response.config.showProgress) {
      // uiService.loading.done()
    }

    return response.data
  },
  error => {
    // progesss
    if (error && error.config && error.config.showProgress) {
      // uiService.loading.done()
    }

    let err = {
      status: 500,
      errcode: '',
      message: (error.response && error.response.data && error.response.data.message) || error.message || '未知错误',
      stack: error.stack || ''
    }

    if (error && error.response && +error.response.status === 401) {
      err.status = 401
      err.message = '该功能要求登录后才能使用'
      window.location = `/tenant/?returnUrl=${window.location}`
    }

    if ((error && error.response && +error.response.status === 403) || (error && error.response && error.response.data && +error.response.data.errcode === 403)) {
      err.status = 403
      uiService.toastr.error('您暂无权限访问，如需访问请联系系统管理员开通权限')
    }

    if (error && error.response && +error.response.status === 404) {
      err.status = 404
      uiService.toastr.error('您请求的资源不存在')
    }

    // toastr
    if (error && error.config && error.config.showError) {
      if (error.message === 'Network Error') {
        err.message = '网络错误<br />请检查网络连接是否正常'
      }

      if (!(error.response && (+error.response.status === 401 || +error.response.status === 403 || +error.response.data.errcode === 403))) {
        let reg = /[\u4e00-\u9fa5]/g
        if (reg.test(err.message) && (err.message.indexOf('内部错误') === -1 && err.message.indexOf('服务不可用') === -1 && err.message.indexOf('无效的参数') === -1)) {
          errorMessage = err.message
        }
        if (error.response.data && +error.response.data.errcode > 0 && +error.response.data.errcode < 400) {
          infoToastr()
        } else {
          errorToastr()
        }
      }
    }

    if (error.response && error.response.data) {
      err.errcode = error.response.data.errcode
      err.message = error.response.data.message
    }
    return Promise.reject(err)
  }
]
