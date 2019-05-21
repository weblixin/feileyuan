import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VuePaginate from 'vue-paginate'

import axios from './assets/js/http';
import { formatDate } from './assets/js/formatDate';
import './assets/css/reset.css';

Vue.use(VuePaginate)
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$formatDate = formatDate;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');