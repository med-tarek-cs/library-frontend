import store from './../store'

export default (to, from, next) => {
  if (store.getters['auth/user'] ) {
    next()
  } else {
    next('/signin')
  }
}
