import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Recipes from '../views/Recipes.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

import Recipe1 from '../components/Recipe1.vue'

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'Login',
    component: Login
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/recipe1',
    name: 'Recipe1',
    component: Recipe1
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
