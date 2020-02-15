import request from '@/utils/request'

export function participateAndGetDonationInfoApi() {
  return new Promise((resolve) => {
    request().then((res) => {
      setTimeout(() => {
        resolve(res)
      }, delay)
    })
  })
}
