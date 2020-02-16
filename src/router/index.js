import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/xiazai'
    },
    {
      path: '/xiazai',
      name: 'xiazai',
      component: () => import('@/views/xiazai/xiazai'),
      meta: {
        title: '剋街APP下载'
      }
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/finishDonation',
      name: 'finishDonation',
      component: () => import('@/views/finishDonation/finishDonation'),
      meta: {
        title: '捐赠完成'
      }
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: () => import('@/views/certificate/certificate'),
      meta: {
        title: '荣誉证书'
      }
    },
    {
      path: '/suit',
      name: 'suit',
      component: () => import('@/views/suit/suit'),
      meta: {
        title: '防疫套装'
      }
    },
    {
      path: '/receive',
      name: 'receive',
      component: () => import('@/views/receive/receive'),
      meta: {
        title: '领取成功'
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/views/address/address'),
      meta: {
        title: '送货上门'
      }
    }
  ]
})
