import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/movie/Home.vue'
import Login from '../views/accounts/Login.vue'
import Signup from '../views/accounts/Signup.vue'
import Profile from '../views/accounts/Profile.vue'
import Community from '../views/movie/Community.vue'
import CreatePost from '../views/movie/CreatePost.vue'
import YoutubeSearch from '../views/movie/YoutubeSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/search',
    name: 'YoutubeSearch',
    component: YoutubeSearch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
