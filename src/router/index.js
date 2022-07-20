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
    path: '/project/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
