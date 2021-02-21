import Vue from 'vue';

import infiniteScroll from 'vue-infinite-scroll';
import TextHighlight from 'vue-text-highlight';
import App from '../app/app.vue';

Vue.use(infiniteScroll);

Vue.component('text-highlight', TextHighlight);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: (h) => h(App),
    directives: { infiniteScroll },
  }).$mount();
  document.body.appendChild(app.$el);
});
