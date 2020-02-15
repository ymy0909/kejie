import request from '@/utils/request'

export function participateAndGetDonationInfoApi() {
  return new Promise((resolve) => {
    request().then((res) => {
      resolve(res)
    })
  })
}
