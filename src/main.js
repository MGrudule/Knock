// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Sierra from 'sierra-library'
import InputTag from 'vue-input-tag'
import VueMq from 'vue-mq'
import '@/assets/style.css'

Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {

    tablet: 768,
    md: 1250,
    lg: Infinity,
  }
})


Vue.component('input-tag', InputTag);

Vue.use(require('vue-moment'));
Vue.use(Vuex);
// This is store!!!.
const state = {
  navigation: {
    show: true
  }
}

// This is look like events.
const mutations = {
  SHOWNAV(state) {
    state.navigation.show = true
  },
  HIDENAV(state) {
    state.navigation.show = false
  }
};
const store = new Vuex.Store({
  state,
  mutations
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  watch: {
    $route: function() {

      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path === "/") {

        store.commit('HIDENAV');
      } else {
        store.commit('SHOWNAV');
      }
    }
  },
  computed: {
    show() {
      return store.state.navigation.show
    }
  }
})