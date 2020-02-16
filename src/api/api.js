import request from '@/utils/request'
import { Toast } from 'vant'

/**
* @module api
* @author: ymy
* @description:参加活动并获取捐款活动详情
* @since: 创建时间  2020-02-15 15:41:00
*/
export function participateAndGetDonationInfoApi () {
  return new Promise((resolve) => {
    request({
      api: 'participateAndGetDonationInfo'
    }).then((res) => {
      resolve(res)
    })
  })
}

/**
* @module api
* @author: ymy
* @description:addDonor 添加捐款人姓名
* @since: 创建时间  2020-02-15 20:00:19
*/
export function addDonorApi (name) {
  return new Promise((resolve) => {
    request({
      api: 'addDonor',
      data: {
        name
      }
    }).then((res) => {
      resolve(res)
    })
  })
}

/**
* @module api
* @author: ymy
* @description: 跳转领取口罩页面 领取口罩的页面的信息
* @since: 创建时间  2020-02-15 20:40:27
*/
export function atoReceiveN95Api () {
  return new Promise((resolve) => {
    request({
      api: 'toReceiveN95'
    }).then((res) => {
      resolve(res)
    })
  })
}

/**
* @module api
* @author: ymy
* @description: receiveN95 收货
* @since: 创建时间  2020-02-15 20:51:44
*/
export function receiveN95Api (address) {
  return new Promise((resolve) => {
    console.log('address', address)
    request({
      api: 'receiveN95',
      data: {
        address
      }
    }).then((res) => {
      Toast.success('记录成功')
      resolve(res)
    })
  })
}

/**
* @module api
* @author: ymy
* @description:填写邀请码 addInviteCode
* @since: 创建时间  2020-02-15 21:11:32
*/
export function addInviteCodeApi (code) {
  return new Promise((resolve) => {
    request({
      api: 'addInviteCode',
      data: {
        code
      }
    }).then((res) => {
      Toast.success('成功')
      resolve(res)
    })
  })
}

/**
* @module api
* @author: ymy
* @description:获取疫情数据
* @since: 创建时间  2020-02-16 18:01:14
*/
export function yiqingItemApi (code) {
  return new Promise((resolve) => {
    request({
      urlRedirect: true,
      method: 'get'
    }).then((res) => {
      resolve(res)
    })
  })
}
