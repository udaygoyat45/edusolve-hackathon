import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Register from '../views/Register.vue'
import Logistics from '../views/Logistics.vue'
import Profile from "../views/Profile.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/register',
    name: "Register",
    component: Register
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/logistics",
    name: "Logistics",
    component: Logistics
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: "Profile",
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
