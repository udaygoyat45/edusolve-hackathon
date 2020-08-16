import Vue from 'vue'

// bootstrap stuff
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

// firebase stuff
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCjBUESymG7eb1rzveFdjO_IcNbeaxxzVU",
  authDomain: "edusolve-hackathon.firebaseapp.com",
  databaseURL: "https://edusolve-hackathon.firebaseio.com",
  projectId: "edusolve-hackathon",
  storageBucket: "edusolve-hackathon.appspot.com",
  messagingSenderId: "439832372229",
  appId: "1:439832372229:web:f36eb2c87be6d46b18286c",
  measurementId: "G-1CRSG7DXLM"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();
window.db = db;

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(auth => {
  if (auth == null)
    store.commit("updateLogged", false);
  else
    store.commit("updateLogged", true);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
