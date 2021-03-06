import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Category from '@/components/category/CategoryList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: {},
      children: [
        {
          path: '/category',
          name: 'category',
          component: Category,
          props: {}
        }
      ]
    },
    
  ]
})