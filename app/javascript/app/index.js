import 'babel-polyfill';
import Vue from 'vue';

import store from './store';
import router from './router';
import App from './App';

Vue.config.productionTip = false;

export default () => {
  document.body.appendChild(document.createElement('app'));
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('app');
};
