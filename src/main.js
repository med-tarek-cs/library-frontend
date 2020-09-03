import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import * as firebase from 'firebase'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  created(){
    const config = {
      apiKey: "AIzaSyBYx5cup538kY0PRGDDs49JNoDDQNhMs9E",
      authDomain: "vue-library-frontend.firebaseapp.com",
      databaseURL: "https://vue-library-frontend.firebaseio.com",
      projectId: "vue-library-frontend",
      storageBucket: "vue-library-frontend.appspot.com",
      messagingSenderId: "124698290139",
      //appId: "1:124698290139:web:c870a525e44282a937a9fe"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }
}).$mount('#app')
