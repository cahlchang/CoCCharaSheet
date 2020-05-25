import Vue from 'vue'
import Router from 'vue-router'
import TopView from '@/components/TopView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopView',
      component: TopView
    }
  ]
})
