import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  async getAllItems ({ commit }) {
   let items = (await axios.get( `${BASE_URL}/books`)).data;
   commit('setItems', items);
  }
}

// mutations
const mutations = {
  setItems (state, items) {
    state.all = items
  },

  decrementBookInventory (state, { id }) {
    const book = state.all.find(book => book.id === id)
    book.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}