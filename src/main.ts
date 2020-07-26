import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Importing the global css file
import '@/css/global.css';
import '@/css/typography.css';
import '@/css/buttons.css';
import '@/css/form.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
