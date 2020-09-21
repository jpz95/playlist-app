import Vue from 'vue';

// Import global styles
import 'styles/_index.scss';

import router from 'router/index';
import SingleLayout from 'layouts/single-layout';

import App from './app.vue';

Vue.component('single-layout', SingleLayout);

Vue.config.productionTip = false;

new Vue({
  render: (render) => render(App),
  router,
}).$mount('#app');
