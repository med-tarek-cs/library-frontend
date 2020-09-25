import Vue from 'vue'
import Vuex from 'vuex'

import shared from "./modules/shared";
import books from "./modules/books";
import auth from "./modules/auth";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    shared,
    books,
    auth
  }
})
