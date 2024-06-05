import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Showcase from '../views/Showcase.vue'
import CardShowcase from '../views/CardShowcase.vue'
import PageNotFound from '../views/PageNotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: CardShowcase
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
     },
  ]
})

export default router
