
const state = () => ({
    loading: false,
    error: null
  })

const getters = {
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  }
}

const mutations = {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  }
const actions= {
    clearError ({commit}) {
      commit('clearError')
    },
    setError ({commit}, payload) {
      commit('setError', payload)
    }
  }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}