import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Classify from '@/pages/classify/Classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify/:id',
      name: 'Classify',
      component: Classify
    }
  ]
})
