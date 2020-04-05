import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vuex';
import App from './App.vue';
import router from './router';
import store from './store/index';
import i18n from './plugins/i18n';
import { FETCH_DATA } from './store/constants/root';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
  vuetify,
  mounted: () => store.dispatch(FETCH_DATA),
}).$mount('#app');
