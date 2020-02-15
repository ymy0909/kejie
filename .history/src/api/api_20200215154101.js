import request from '@/utils/request'


/**
* @module api
* @author: ymy
* @description:
* @since: 创建时间  2020-02-15 15:41:00
*/

export function participateAndGetDonationInfoApi () {
  return new Promise((resolve) => {
    request({
      api: 'participateAndGetDonationInfoApi'
    }).then((res) => {
      resolve(res)
    })
  })
}
