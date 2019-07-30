import 'babel-polyfill';
import Vue from 'vue';
import store from './store';
import router from './router';
import App from './app';

const APP_SELECTOR = 'app';

export default () => {
  document.body.appendChild(document.createElement(APP_SELECTOR));
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount(APP_SELECTOR);
};
