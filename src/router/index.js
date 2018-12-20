import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestVueRouter from '@/components/testVueRouter'
import TestVueRouterTo from '@/components/testVueRouterTo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      props: {
        page: '这是HelloWorld1', code: '这是页面HelloWorld的8989'
      }
    },
    {
      path: '/',
      name: 'TestVueRouter',
      component: TestVueRouter
    },
    {
      path: '/testVueRouterTo',
      // 一定要写name,params必须用name来识别路径
      name: 'TestVueRouterTo',
      component: TestVueRouterTo
    }
  ]
})
