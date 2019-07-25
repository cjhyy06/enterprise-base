/**
 * @author jacky
 * @email [jacky@bertadata.com]
 * @create date 2019-07-23 10:09:41
 * @modify date 2019-07-23 10:09:41
 * @desc [description]
 */

// import toastr from 'toastr'

// toastr.options = {
//   closeButton: true,
//   debug: false,
//   newestOnTop: false,
//   progressBar: true,
//   preventDuplicates: false,
//   onclick: null,
//   showDuration: 300,
//   hideDuration: 1000,
//   timeOut: 3000,
//   extendedTimeOut: 1000,
//   showEasing: 'swing',
//   hideEasing: 'linear',
//   showMethod: 'fadeIn',
//   hideMethod: 'fadeOut'
// }

import { Notification } from 'element-ui'

export default {
  success (message, title, opt = {}) {
    Notification.success({
      title: '成功',
      message: message,
      duration: 3000
    })
  },
  info (message, title, opt = {}) {
    Notification.info({
      title: '提示',
      message: message,
      duration: 3000
    })
  },
  warning (message, title, opt = {}) {
    Notification.warning({
      title: '警告',
      message: message,
      duration: 3000
    })
  },
  error (message, title, opt = {}) {
    Notification.error({
      title: '错误',
      message: message,
      duration: 3000
    })
  }
}
