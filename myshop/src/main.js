import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('./assets/app.css');
import { store } from './store/store';
import firebase from 'firebase';
import './firebase';
import { firestorePlugin  } from 'vuefire';

Vue.use(firestorePlugin );
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
