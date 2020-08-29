import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/bookForm',
      name: 'BookForm',
      component: () => import('@/components/BookForm')
    },
    {
      path: '/books',
      name: 'BookList',
      component: () => import('@/components/BookList')
    },
    {
      path: '/books/edit/:id',
      name: 'EditBook',
      component: () => import('@/components/BookForm')
    },
    {
      path: '/books/new',
      name: 'addBook',
      component: () => import('@/components/BookForm')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
