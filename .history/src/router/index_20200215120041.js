import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/',
      name: '{
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页'
      }
    }',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页'
      }
    }
  ]
})