import Vue from 'vue'
import Router from 'vue-router'
import PageLayout from '@/pages/PageLayout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageLayout',
      component: PageLayout
    }
  ]
})
