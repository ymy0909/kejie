import request from '@/utils/request'

export function participateAndGetDonationInfoApi() {
  return new Promise((resolve) => {
    request({
      api:''
    }).then((res) => {
      resolve(res)
    })
  })
}
