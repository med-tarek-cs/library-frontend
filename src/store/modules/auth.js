import * as firebase from 'firebase'

const state = () => ({
    user: null
  })

const getters = {
  user (state) {
    return state.user
  },
  loggeIn(state){
    return !!state.user
  }
}

const mutations = {
    setUser (state, payload) {
      state.user = payload
    }
}

const actions= {
    signUserUp ({commit, dispatch}, payload) {
      dispatch('initSharedLoading')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(user => dispatch('setUser', user))
          .catch(error => dispatch('setSharedError', error))
    },

    signUserIn ({commit, dispatch}, payload) {
      dispatch('initSharedLoading')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(user => dispatch('setUser', user))
          .catch(error => dispatch('setSharedError', error))
    },
    signUserInGoogle ({commit, dispatch}) {
      dispatch('initSharedLoading')
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(user => dispatch('setUser', user))
          .catch(error => dispatch('setSharedError', error)
          )
    },
    signUserInFacebook ({commit}) {
      commit('setLoading', true)
      commit('clearError', null)
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(
              user => {
                commit('setLoading', false)
                const newUser = {
                  id: user.uid,
                  name: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL
                }
                commit('setUser', newUser)
              }
          )
          .catch(
              error => {
                commit('setLoading', false)
                commit('setError', error)
              }
          )
    },
    signUserInGithub ({commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
          .then(
              user => {
                commit('setLoading', false)
                const newUser = {
                  id: user.uid,
                  name: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL
                }
                commit('setUser', newUser)
              }
          )
          .catch(
              error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
              }
          )
    },
    signUserInTwitter ({commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
          .then(
              user => {
                commit('setLoading', false)
                const newUser = {
                  id: user.uid,
                  name: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL
                }
                commit('setUser', newUser)
              }
          )
          .catch(
              error => {
                commit('setLoading', false)
                commit('setError', error)
              }
          )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    resetPasswordWithEmail ({ commit, dispatch }, payload) {
      const { email } = payload
      commit('shared/setLoading', true, {root: true})
      firebase.auth().sendPasswordResetEmail(email)
          .then(
              () => {
                commit('shared/setLoading', false, {root: true})
                console.log('Email Sent')
              }
          )
          .catch(error => dispatch('setSharedError', error))
    },

    logout ({commit, dispatch}) {
      firebase.auth().signOut()
          .then(() => commit('setUser', null))
          .catch(error => dispatch('setSharedError', error))
    },
  initSharedLoading : ({commit}) => {
    commit('shared/setLoading', true, {root: true})
    commit('shared/clearError', null, {root: true})
  },
  setSharedError:({commit}, payload) =>{
    commit('shared/setLoading', false, {root: true})
    commit('shared/setError', payload, {root: true})
  },
  setUser: ({commit}, payload) => {
    commit('shared/setLoading', false, {root: true})
    const newUser = {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    }
    commit('setUser', newUser)
  }
  }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}