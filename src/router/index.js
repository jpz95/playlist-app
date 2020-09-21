import Vue from 'vue';
import VueRouter from 'vue-router';

import SpotifyLogin from 'components/login/spotify-login';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { layout: 'single' },
      component: SpotifyLogin,
    },
  ],
});

export default router;
