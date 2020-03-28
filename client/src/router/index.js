import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Newspage from '../views/Newspage.vue'
import Members from '../views/Members.vue'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Newspage',
    name: 'Newspage',
    component: Newspage
  },
  {
    path: '/Members',
    name: 'Members',
    component: Members
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
