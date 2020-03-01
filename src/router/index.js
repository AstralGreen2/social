import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'

import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
  
    {
      path: '/login',
      component:Login
    },

    {
      path: '/regist',
      component:Regist
    },
   
    {
      path: '/users',
      component : Users
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
