import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from './store';
import vuetify from '@/plugins/vuetify';
import * as components from '@/components/base';

// Pagebase init
components.initialize();

Vue.config.productionTip = false

// Vue.use(vuetify);
// Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
