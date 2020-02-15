import request from '@/utils/request'

export function servicesApi(delay = 300) {
  return new Promise((resolve) => {
    request().then((res) => {
      setTimeout(() => {
        resolve(res)
      }, delay)
    })
  })
}
