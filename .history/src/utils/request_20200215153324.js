import axios from 'axios'
const errorText = require('./errorText.json')

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  method: 'post',
  url: 'http://test.whowen.com:8080/app/',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // const param = {
    //   cmd: 'list',
    //   token: 20100308
    // }
    // config.params = qs.stringify(data)
    
    config.params = {

    }
    return config
  },
  error => {
    // Message({
    //   message: `参数错误`,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // do something with request error
    console.log(error) // for debug
    // return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 0) {
    //   // Message({
    //   //   message: res.message || 'Error',
    //   //   type: 'error',
    //   //   duration: 5 * 1000
    //   // })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   //   // to re-login
    //   //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //   //     confirmButtonText: 'Re-Login',
    //   //     cancelButtonText: 'Cancel',
    //   //     type: 'warning'
    //   //   }).then(() => {
    //   //     store.dispatch('user/resetToken').then(() => {
    //   //       location.reload()
    //   //     })
    //   //   })
    //   // }

    //   switchCode(res.code.toString())
    //   console.log('-error', res.code.toString())
    //   return Promise.reject({
    //     type: 'code',
    //     code: res.code.toString()
    //   })
    // } else {
    //   // console.log('res.data', res.data)
    //   return Promise.resolve(res.data)
    // }
    return Promise.resolve(res)
  },
  error => {
    console.error('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    handleError(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      type: 'service'
    })
  }
)

const getErrMsg = (error) => { // 通过error处理错误码
  if (!error.response) { // 无网络时单独处理
    return { errCode: null, errMsg: '网络不可用，请刷新重试' }
  }
  const errCode = error.response.status // 错误码
  console.log('errCode', errCode)
  const errMsg = errorText.serverMessage[errCode] || error // 错误消息
  return { errCode: errCode, errMsg: errMsg ? `${errMsg} [${errCode}]` : error.message }
}

const handleError = (error) => {
  // const errortext = errorText.serverMessage[error.statusCode] || error.statusCode
  // Message({
  //   message: `请求错误，${getErrMsg(error).errMsg}`,
  //   type: 'error',
  //   duration: 5 * 1000
  // })
  console.log('error', `请求错误，${getErrMsg(error).errMsg}`)
}

export default service
