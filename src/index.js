import Vue from 'vue';

// Import global styles
import 'styles/_index.scss';

import App from './app.vue';

new Vue({
  render: (h) => h(App),
}).$mount('#app');

if (module.hot) {
  module.hot.accept('./app.vue', () => {
    // eslint-disable-next-line no-console
    console.log('accept');
  });
}
