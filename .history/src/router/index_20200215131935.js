import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      path: '/Certificate',
      name: 'certificate',
      component: () => import('@/views/Certificate/Certificate'),
      meta: {
        title: '荣誉证书'
      }
    }
  ]
})
