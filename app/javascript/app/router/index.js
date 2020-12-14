import Vue from 'vue'
import Router from 'vue-router'

import UsersPage from '../views/UsersPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersPage
    },
    {
      path: '/search/:search',
      name: 'Search',
      component: UsersPage
    }
  ],
  mode: 'history'
})