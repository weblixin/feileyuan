import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home';
import Login from './views/login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/infomation',
      name: 'Infomation',
      component: resolve => require(["./views/home/information"], resolve)
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
